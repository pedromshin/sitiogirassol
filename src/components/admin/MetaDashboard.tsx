"use client";

import { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";
import { parseCampaignCsv, type CampaignRow, type BenchmarkKey } from "@/lib/admin/meta-csv-parser";

const TARGETS: Record<BenchmarkKey, { good: number | null; warning: number | null }> = {
  cpm_brl: { good: 0.8, warning: 2.0 },
  ctr_pct: { good: 0.1, warning: 0.05 },
  cpc_brl: { good: 1.0, warning: 2.0 },
  cost_per_site_visitor_brl: { good: 1.0, warning: 2.0 },
  video_to_click_pct: { good: 0.08, warning: 0.04 },
  click_to_landing_pct: { good: 0.8, warning: 0.6 },
  thruplays: { good: null, warning: null },
};

function fmt(n: number, type: "brl" | "num" = "num"): string {
  if (type === "brl") return `R$${n.toFixed(2)}`;
  return n.toLocaleString("pt-BR");
}

function statusColor(val: number, key: BenchmarkKey, showBenchmarks: boolean): string {
  if (!showBenchmarks) return "text-white";
  const t = TARGETS[key];
  if (t.good === null || t.warning === null) return "text-white";
  const lowerIsBetter = key.includes("cost") || key.includes("cpm") || key.includes("cpc");
  if (lowerIsBetter) {
    if (val <= t.good) return "text-emerald-400";
    if (val <= t.warning) return "text-yellow-400";
    return "text-red-400";
  } else {
    if (val >= t.good) return "text-emerald-400";
    if (val >= t.warning) return "text-yellow-400";
    return "text-red-400";
  }
}

type StatCardProps = {
  readonly label: string;
  readonly value: string;
  readonly sub?: string;
  readonly colorClass: string;
  readonly benchmark?: string;
  readonly showBenchmarks: boolean;
};

function StatCard({ label, value, sub, colorClass, benchmark, showBenchmarks }: StatCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-xs text-white/40 mb-1">{label}</p>
      <p className={`text-2xl font-bold font-mono ${colorClass}`}>{value}</p>
      {sub && <p className="text-xs text-white/30 mt-0.5">{sub}</p>}
      {showBenchmarks && benchmark && (
        <p className="text-[10px] text-white/25 mt-1 border-t border-white/5 pt-1">target: {benchmark}</p>
      )}
    </div>
  );
}

type DropZoneProps = {
  readonly onData: (rows: CampaignRow[]) => void;
};

function CsvDropZone({ onData }: DropZoneProps) {
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState("");

  const process = useCallback((text: string) => {
    const rows = parseCampaignCsv(text);
    if (rows.length === 0) {
      setStatus("No rows found — check the CSV format.");
      return;
    }
    onData(rows);
    setStatus(`Loaded ${rows.length} row(s).`);
  }, [onData]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => process(ev.target?.result as string);
    reader.readAsText(file, "utf-8");
  }, [process]);

  const onPaste = useCallback((e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    process(e.clipboardData.getData("text"));
  }, [process]);

  return (
    <div className="mb-8">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
          dragging ? "border-accent-gold bg-accent-gold/5" : "border-white/10 bg-white/[0.01]"
        }`}
      >
        <p className="text-white/40 text-sm mb-2">Drop a Meta CSV export here, or paste below</p>
        <textarea
          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-mono text-white/60 h-20 resize-none focus:outline-none focus:border-accent-gold/40"
          placeholder="Paste CSV rows here..."
          onPaste={onPaste}
          onChange={() => {}}
          value=""
        />
        {status && <p className="text-xs text-accent-gold mt-2">{status}</p>}
      </div>
    </div>
  );
}

function ChartTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0f1612] border border-white/10 rounded-lg p-3 text-xs">
      <p className="text-white/50 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {typeof p.value === "number" && p.value < 10 ? p.value.toFixed(4) : p.value}
        </p>
      ))}
    </div>
  );
}

function mergeRows(existing: CampaignRow[], incoming: CampaignRow[]): CampaignRow[] {
  const map = new Map(existing.map((r) => [`${r.reporting_start}|${r.reporting_end}|${r.campaign}`, r]));
  for (const r of incoming) map.set(`${r.reporting_start}|${r.reporting_end}|${r.campaign}`, r);
  return Array.from(map.values()).sort((a, b) => a.reporting_start.localeCompare(b.reporting_start));
}

type MetaDashboardProps = {
  readonly seedRows: CampaignRow[];
};

export default function MetaDashboard({ seedRows }: MetaDashboardProps) {
  const [rows, setRows] = useState<CampaignRow[]>(seedRows);
  const [showBenchmarks, setShowBenchmarks] = useState(true);

  const addRows = useCallback((newRows: CampaignRow[]) => {
    setRows((prev) => mergeRows(prev, newRows));
  }, []);

  // Latest = row with the most recent reporting_end date
  const latest = [...rows].sort((a, b) => b.reporting_end.localeCompare(a.reporting_end))[0];

  // Sort chart data by reporting_end so time axis is correct
  const sortedRows = [...rows].sort((a, b) => a.reporting_end.localeCompare(b.reporting_end));

  const chartData = sortedRows.map((r) => ({
    date: r.reporting_start === r.reporting_end ? r.reporting_start : `${r.reporting_start}→${r.reporting_end}`,
    CPM: r.cpm_brl,
    CPC: r.cpc_brl,
    "Cost/Visitor": r.cost_per_site_visitor_brl,
    "CTR%": +(r.ctr_pct * 100).toFixed(3),
    "Video→Click%": +(r.video_to_click_pct * 100).toFixed(2),
    "Click→Landing%": +(r.click_to_landing_pct * 100).toFixed(1),
    ThruPlays: r.thruplays,
    "3s Plays": r.video_plays_3s,
    Reach: r.reach,
    Spent: r.amount_spent_brl,
  }));

  if (!latest) {
    return (
      <div className="p-8">
        <CsvDropZone onData={addRows} />
        <p className="text-white/30 text-center">No data yet. Drop a Meta CSV export above.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-display font-bold text-accent-gold">Meta Ads Dashboard</h2>
          <p className="text-white/40 text-xs mt-0.5">
            {rows[0]?.reporting_start} → {latest.reporting_end} · {latest.campaign}
          </p>
        </div>
        <button
          onClick={() => setShowBenchmarks((v) => !v)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            showBenchmarks
              ? "bg-accent-gold/15 text-accent-gold border border-accent-gold/30"
              : "bg-white/5 text-white/40 border border-white/10"
          }`}
        >
          {showBenchmarks ? "Benchmarks ON" : "Benchmarks OFF"}
        </button>
      </div>

      <CsvDropZone onData={addRows} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Amount Spent" value={fmt(latest.amount_spent_brl, "brl")} sub={`${latest.reporting_start} – ${latest.reporting_end}`} colorClass="text-white" showBenchmarks={showBenchmarks} />
        <StatCard label="Reach" value={fmt(latest.reach)} sub={`Freq ${latest.frequency.toFixed(2)}x`} colorClass="text-white" showBenchmarks={showBenchmarks} />
        <StatCard label="CPM" value={fmt(latest.cpm_brl, "brl")} colorClass={statusColor(latest.cpm_brl, "cpm_brl", showBenchmarks)} benchmark="< R$0.80" showBenchmarks={showBenchmarks} />
        <StatCard
          label="ThruPlays"
          value={fmt(latest.thruplays)}
          sub={latest.video_plays_3s > 0 ? `of ${fmt(latest.video_plays_3s)} 3s plays (${((latest.thruplays / latest.video_plays_3s) * 100).toFixed(1)}%)` : "no 3s data"}
          colorClass="text-white"
          showBenchmarks={showBenchmarks}
        />
        <StatCard label="Link Clicks" value={fmt(latest.link_clicks)} sub={`CTR ${(latest.ctr_pct * 100).toFixed(3)}%`} colorClass={statusColor(latest.ctr_pct, "ctr_pct", showBenchmarks)} benchmark="> 0.10%" showBenchmarks={showBenchmarks} />
        <StatCard label="Video → Click %" value={`${(latest.video_to_click_pct * 100).toFixed(2)}%`} sub="of ThruPlays who clicked" colorClass={statusColor(latest.video_to_click_pct, "video_to_click_pct", showBenchmarks)} benchmark="> 8%" showBenchmarks={showBenchmarks} />
        <StatCard label="Click → Landing %" value={`${(latest.click_to_landing_pct * 100).toFixed(1)}%`} sub="site load success rate" colorClass={statusColor(latest.click_to_landing_pct, "click_to_landing_pct", showBenchmarks)} benchmark="> 80%" showBenchmarks={showBenchmarks} />
        <StatCard label="Cost / Site Visitor" value={fmt(latest.cost_per_site_visitor_brl, "brl")} sub="real cost to reach your site" colorClass={statusColor(latest.cost_per_site_visitor_brl, "cost_per_site_visitor_brl", showBenchmarks)} benchmark="< R$1.00" showBenchmarks={showBenchmarks} />
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 mb-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold/60 mb-4">Funnel (latest period)</h3>
        {(() => {
          const steps = [
            { label: "Reach", val: latest.reach },
            { label: "3s Views", val: latest.video_plays_3s },
            { label: "ThruPlays", val: latest.thruplays },
            { label: "Clicks", val: latest.link_clicks },
            { label: "Landed", val: latest.landing_page_views },
          ];
          const maxVal = Math.max(...steps.map((s) => s.val), 1);
          return (
            <div className="flex items-end gap-1 h-28">
              {steps.map(({ label, val }) => {
                const pct = (val / maxVal) * 100;
                return (
                  <div key={label} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-[9px] text-white/40">{val.toLocaleString()}</span>
                    <div className="w-full bg-white/5 rounded-sm relative" style={{ height: "72px" }}>
                      <div className="absolute bottom-0 w-full rounded-sm bg-accent-gold/60" style={{ height: `${Math.max(pct, 3)}%` }} />
                    </div>
                    <span className="text-[9px] text-white/40 text-center">{label}</span>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold/60 mb-4">Cost Metrics Over Time</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }} />
              {showBenchmarks && <ReferenceLine y={1.0} stroke="rgba(52,211,153,0.4)" strokeDasharray="4 4" label={{ value: "target R$1", fill: "rgba(52,211,153,0.5)", fontSize: 9 }} />}
              <Line type="monotone" dataKey="CPM" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b" }} />
              <Line type="monotone" dataKey="CPC" stroke="#60a5fa" strokeWidth={2} dot={{ fill: "#60a5fa" }} />
              <Line type="monotone" dataKey="Cost/Visitor" stroke="#f87171" strokeWidth={2} dot={{ fill: "#f87171" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold/60 mb-4">Funnel Rates % Over Time</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }} />
              {showBenchmarks && <>
                <ReferenceLine y={8} stroke="rgba(52,211,153,0.3)" strokeDasharray="4 4" label={{ value: "8% target", fill: "rgba(52,211,153,0.4)", fontSize: 9 }} />
                <ReferenceLine y={80} stroke="rgba(96,165,250,0.3)" strokeDasharray="4 4" label={{ value: "80% target", fill: "rgba(96,165,250,0.4)", fontSize: 9 }} />
              </>}
              <Line type="monotone" dataKey="Video→Click%" stroke="#a78bfa" strokeWidth={2} dot={{ fill: "#a78bfa" }} />
              <Line type="monotone" dataKey="Click→Landing%" stroke="#34d399" strokeWidth={2} dot={{ fill: "#34d399" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold/60 mb-4">Video Views Funnel</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }} />
              <Bar dataKey="3s Plays" fill="rgba(245,158,11,0.3)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="ThruPlays" fill="rgba(245,158,11,0.8)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold/60 mb-4">Reach & Spend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <YAxis yAxisId="reach" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <YAxis yAxisId="spent" orientation="right" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }} />
              <Line yAxisId="reach" type="monotone" dataKey="Reach" stroke="#60a5fa" strokeWidth={2} dot={{ fill: "#60a5fa" }} />
              <Line yAxisId="spent" type="monotone" dataKey="Spent" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {["Period", "Campaign", "Spent", "Reach", "CPM", "Clicks", "CTR", "ThruPlays", "V→C%", "C→L%", "Cost/Visitor"].map((h) => (
                <th key={h} className="px-3 py-2.5 text-left text-white/30 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                <td className="px-3 py-2 text-white/50 whitespace-nowrap">{r.reporting_start === r.reporting_end ? r.reporting_start : `${r.reporting_start}→${r.reporting_end}`}</td>
                <td className="px-3 py-2 text-white/70 whitespace-nowrap">{r.campaign}</td>
                <td className="px-3 py-2 text-white/70">{fmt(r.amount_spent_brl, "brl")}</td>
                <td className="px-3 py-2 text-white/70">{fmt(r.reach)}</td>
                <td className={`px-3 py-2 ${statusColor(r.cpm_brl, "cpm_brl", showBenchmarks)}`}>{fmt(r.cpm_brl, "brl")}</td>
                <td className="px-3 py-2 text-white/70">{r.link_clicks}</td>
                <td className={`px-3 py-2 ${statusColor(r.ctr_pct, "ctr_pct", showBenchmarks)}`}>{(r.ctr_pct * 100).toFixed(3)}%</td>
                <td className="px-3 py-2 text-white/70">{r.thruplays}</td>
                <td className={`px-3 py-2 ${statusColor(r.video_to_click_pct, "video_to_click_pct", showBenchmarks)}`}>{(r.video_to_click_pct * 100).toFixed(2)}%</td>
                <td className={`px-3 py-2 ${statusColor(r.click_to_landing_pct, "click_to_landing_pct", showBenchmarks)}`}>{(r.click_to_landing_pct * 100).toFixed(1)}%</td>
                <td className={`px-3 py-2 ${statusColor(r.cost_per_site_visitor_brl, "cost_per_site_visitor_brl", showBenchmarks)}`}>{fmt(r.cost_per_site_visitor_brl, "brl")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
