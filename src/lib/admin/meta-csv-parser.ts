/**
 * Parses Meta Ads CSV exports into a normalized CampaignRow schema.
 * Handles both English and Portuguese column headers.
 * Custom derived metric columns (custom_derived_metrics:*) are mapped
 * positionally: first = cost_per_site_visitor, second = video_to_click_pct,
 * third = click_to_landing_pct.
 */

export type CampaignRow = {
  readonly reporting_start: string;
  readonly reporting_end: string;
  readonly campaign: string;
  readonly impressions: number;
  readonly cpm_brl: number;
  readonly reach: number;
  readonly frequency: number;
  readonly amount_spent_brl: number;
  readonly link_clicks: number;
  readonly ctr_pct: number;
  readonly cpc_brl: number;
  readonly landing_page_views: number;
  readonly cost_per_lpv_brl: number;
  readonly thruplays: number;
  readonly video_plays_3s: number;
  readonly cost_per_site_visitor_brl: number;
  readonly video_to_click_pct: number;
  readonly click_to_landing_pct: number;
  readonly notes: string;
};

const BENCHMARKS = {
  cpm_brl: { good: 0.8, warning: 2.0, label: "CPM (BRL)" },
  ctr_pct: { good: 0.1, warning: 0.05, label: "CTR %" },
  cpc_brl: { good: 1.0, warning: 2.0, label: "CPC (BRL)" },
  cost_per_site_visitor_brl: { good: 1.0, warning: 2.0, label: "Cost/Visitor (BRL)" },
  video_to_click_pct: { good: 0.08, warning: 0.04, label: "Video→Click %" },
  click_to_landing_pct: { good: 0.8, warning: 0.6, label: "Click→Landing %" },
  thruplays: { good: null, warning: null, label: "ThruPlays" },
} as const;

export type BenchmarkKey = keyof typeof BENCHMARKS;
export { BENCHMARKS };

function normalizeHeader(h: string): string {
  return h.replace(/^"|"$/g, "").trim().toLowerCase();
}

function parseNum(v: string): number {
  const n = parseFloat(v.replace(/,/g, ".").trim());
  return isNaN(n) ? 0 : n;
}

/** Split a CSV line respecting quoted fields that may contain commas */
function splitCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

function findColIndex(headers: string[], candidates: string[]): number {
  for (const c of candidates) {
    const idx = headers.findIndex((h) => h.includes(c));
    if (idx !== -1) return idx;
  }
  return -1;
}

export function parseCampaignCsv(raw: string): CampaignRow[] {
  const lines = raw.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return [];

  const headers = splitCsvLine(lines[0]).map(normalizeHeader);

  // Locate custom derived metric columns positionally
  const derivedIndices = headers
    .map((h, i) => (h.startsWith("custom_derived_metrics") ? i : -1))
    .filter((i) => i !== -1);

  const rows: CampaignRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = splitCsvLine(lines[i]);
    if (cols.length < 3) continue;

    const get = (candidates: string[]): string => {
      const idx = findColIndex(headers, candidates);
      return idx !== -1 ? (cols[idx] ?? "").replace(/^"|"$/g, "").trim() : "";
    };

    const getNum = (candidates: string[]): number => {
      return parseNum(get(candidates));
    };

    const getDerived = (position: number): number => {
      const idx = derivedIndices[position];
      if (idx === undefined || idx === -1) return 0;
      return parseNum((cols[idx] ?? "").replace(/^"|"$/g, "").trim());
    };

    const linkClicks = getNum(["cliques no link", "link clicks"]);
    const thruplays = getNum(["thruplays"]);
    const lpv = getNum(["visualizações da página de destino", "landing page views", "visualiza"]);
    const spent = getNum(["valor usado", "amount spent"]);
    const impressions = getNum(["impressões", "impressions"]);
    const reach = getNum(["alcance", "reach"]);

    // Derive metrics: prefer explicit CSV columns, fall back to computing
    const rawCpm = getNum(["cpm"]);
    const cpm = rawCpm > 0 ? rawCpm : impressions > 0 ? (spent / impressions) * 1000 : 0;

    const rawFreq = getNum(["frequência", "frequency"]);
    const frequency = rawFreq > 0 ? rawFreq : reach > 0 ? impressions / reach : 0;

    const rawCtr = getNum(["ctr"]);
    const ctr = rawCtr > 0 ? rawCtr : impressions > 0 ? (linkClicks / impressions) * 100 : 0;

    const rawCpc = getNum(["cpc"]);
    const cpc = rawCpc > 0 ? rawCpc : linkClicks > 0 ? spent / linkClicks : 0;

    const costPerVisitor = derivedIndices.length > 0
      ? getDerived(0)
      : lpv > 0 ? spent / lpv : 0;

    const videoToClick = derivedIndices.length > 1
      ? getDerived(1)
      : thruplays > 0 ? linkClicks / thruplays : 0;

    const clickToLanding = derivedIndices.length > 2
      ? getDerived(2)
      : linkClicks > 0 ? lpv / linkClicks : 0;

    rows.push({
      reporting_start: get(["início dos relatórios", "reporting starts", "reporting_start"]),
      reporting_end: get(["término dos relatórios", "reporting ends", "reporting_end"]),
      campaign: get(["nome da campanha", "nome do anúncio", "campaign name", "ad name", "campaign"]),
      impressions,
      cpm_brl: cpm,
      reach,
      frequency,
      amount_spent_brl: spent,
      link_clicks: linkClicks,
      ctr_pct: ctr,
      cpc_brl: cpc,
      landing_page_views: lpv,
      cost_per_lpv_brl: lpv > 0 ? spent / lpv : 0,
      thruplays,
      video_plays_3s: getNum(["3 segundos", "3-second", "video_plays_3s"]),
      cost_per_site_visitor_brl: costPerVisitor,
      video_to_click_pct: videoToClick,
      click_to_landing_pct: clickToLanding,
      notes: get(["notes"]),
    });
  }

  return rows;
}
