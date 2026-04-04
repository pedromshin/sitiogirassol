/**
 * Types, column metadata, and localStorage helpers for the custom graph builder.
 * All helpers are pure functions returning new objects (immutable pattern).
 */

import type { CampaignRow } from "@/lib/admin/meta-csv-parser";

export type GraphSeriesConfig = {
  readonly columnKey: string;
  readonly color: string;
  readonly label: string;
};

export type GraphConfig = {
  readonly id: string;
  readonly name: string;
  readonly chartType: "line" | "bar" | "area";
  readonly xAxis: string;
  readonly series: readonly GraphSeriesConfig[];
  readonly createdAt: string;
};

type ColumnMeta = {
  readonly key: keyof CampaignRow;
  readonly label: string;
  readonly type: "string" | "number";
};

export const CAMPAIGN_COLUMNS: readonly ColumnMeta[] = [
  { key: "reporting_start", label: "Reporting Start", type: "string" },
  { key: "reporting_end", label: "Reporting End", type: "string" },
  { key: "campaign", label: "Campaign", type: "string" },
  { key: "impressions", label: "Impressions", type: "number" },
  { key: "cpm_brl", label: "CPM (BRL)", type: "number" },
  { key: "reach", label: "Reach", type: "number" },
  { key: "frequency", label: "Frequency", type: "number" },
  { key: "amount_spent_brl", label: "Amount Spent (BRL)", type: "number" },
  { key: "link_clicks", label: "Link Clicks", type: "number" },
  { key: "ctr_pct", label: "CTR %", type: "number" },
  { key: "cpc_brl", label: "CPC (BRL)", type: "number" },
  { key: "landing_page_views", label: "Landing Page Views", type: "number" },
  { key: "cost_per_lpv_brl", label: "Cost per LPV (BRL)", type: "number" },
  { key: "thruplays", label: "ThruPlays", type: "number" },
  { key: "video_plays_3s", label: "3s Video Plays", type: "number" },
  { key: "cost_per_site_visitor_brl", label: "Cost/Visitor (BRL)", type: "number" },
  { key: "video_to_click_pct", label: "Video to Click %", type: "number" },
  { key: "click_to_landing_pct", label: "Click to Landing %", type: "number" },
  { key: "notes", label: "Notes", type: "string" },
] as const;

export const NUMERIC_COLUMNS: readonly ColumnMeta[] = CAMPAIGN_COLUMNS.filter(
  (c) => c.type === "number"
);

export const DEFAULT_COLORS: readonly string[] = [
  "#f59e0b",
  "#60a5fa",
  "#f87171",
  "#a78bfa",
  "#34d399",
  "#fb923c",
  "#e879f9",
  "#38bdf8",
];

const STORAGE_KEY = "graphBuilderConfigs";

export function loadGraphConfigs(): readonly GraphConfig[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as readonly GraphConfig[];
  } catch {
    return [];
  }
}

export function saveGraphConfigs(configs: readonly GraphConfig[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
}

export function exportConfigsJson(configs: readonly GraphConfig[]): void {
  const json = JSON.stringify(configs, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const date = new Date().toISOString().slice(0, 10);
  const a = document.createElement("a");
  a.href = url;
  a.download = `graph-configs-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function isValidConfig(item: unknown): item is GraphConfig {
  if (typeof item !== "object" || item === null) return false;
  const obj = item as Record<string, unknown>;
  return (
    typeof obj.id === "string" &&
    typeof obj.name === "string" &&
    (obj.chartType === "line" || obj.chartType === "bar" || obj.chartType === "area") &&
    typeof obj.xAxis === "string" &&
    Array.isArray(obj.series)
  );
}

export async function importConfigsJson(file: File): Promise<readonly GraphConfig[]> {
  const text = await file.text();
  const parsed: unknown = JSON.parse(text);
  if (!Array.isArray(parsed)) {
    throw new Error("Invalid format: expected an array of graph configs");
  }
  const validated = parsed.filter(isValidConfig);
  if (validated.length === 0) {
    throw new Error("No valid graph configs found in file");
  }
  return validated;
}

export function createDefaultConfig(): GraphConfig {
  return {
    id: crypto.randomUUID(),
    name: "New Graph",
    chartType: "line",
    xAxis: "reporting_end",
    series: [
      {
        columnKey: "impressions",
        color: DEFAULT_COLORS[0],
        label: "Impressions",
      },
    ],
    createdAt: new Date().toISOString(),
  };
}
