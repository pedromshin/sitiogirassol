import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { parseCampaignCsv, type CampaignRow } from "./meta-csv-parser";

const AD_REPORTS_DIR = join(process.cwd(), "src/data/ad-reports");

export function readAdReports(): CampaignRow[] {
  let files: string[] = [];
  try {
    files = readdirSync(AD_REPORTS_DIR)
      .filter((f) => f.endsWith(".csv"))
      .sort();
  } catch {
    return [];
  }

  const rowMap = new Map<string, CampaignRow>();

  for (const file of files) {
    const raw = readFileSync(join(AD_REPORTS_DIR, file), "utf-8");
    const rows = parseCampaignCsv(raw);
    for (const row of rows) {
      rowMap.set(`${row.reporting_start}|${row.reporting_end}|${row.campaign}`, row);
    }
  }

  return Array.from(rowMap.values()).sort((a, b) =>
    a.reporting_start.localeCompare(b.reporting_start)
  );
}
