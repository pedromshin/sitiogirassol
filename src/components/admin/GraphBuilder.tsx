"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import type { CampaignRow } from "@/lib/admin/meta-csv-parser";
import {
  type GraphConfig, type GraphSeriesConfig,
  CAMPAIGN_COLUMNS, NUMERIC_COLUMNS, DEFAULT_COLORS,
  loadGraphConfigs, saveGraphConfigs, exportConfigsJson, importConfigsJson, createDefaultConfig,
} from "@/lib/admin/graph-builder-types";

type GraphBuilderProps = { readonly rows: readonly CampaignRow[] };

const CHART_TYPES: readonly GraphConfig["chartType"][] = ["line", "bar", "area"];
const AXIS_TICK = { fill: "rgba(255,255,255,0.3)", fontSize: 10 };
const GRID_STROKE = "rgba(255,255,255,0.05)";
const PILL_ACTIVE = "bg-accent-gold/15 border border-accent-gold/30 text-accent-gold";
const PILL_INACTIVE = "bg-white/5 border border-white/10 text-white/50 hover:text-white/70";
const INPUT_CLS = "bg-white/5 border border-white/10 text-white rounded-lg text-xs px-2 py-1.5";

function GraphTooltip({ active, payload, label }: {
  active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string;
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

function buildChartData(rows: readonly CampaignRow[], xAxis: string, series: readonly GraphSeriesConfig[]) {
  const sorted = [...rows].sort((a, b) =>
    String(a[xAxis as keyof CampaignRow] ?? "").localeCompare(String(b[xAxis as keyof CampaignRow] ?? ""))
  );
  return sorted.map((row) => {
    const xValue = (xAxis === "reporting_start" || xAxis === "reporting_end")
      ? (row.reporting_start === row.reporting_end ? row.reporting_start : `${row.reporting_start}->${row.reporting_end}`)
      : String(row[xAxis as keyof CampaignRow] ?? "");
    const point: Record<string, unknown> = { xLabel: xValue };
    for (const s of series) point[s.label] = row[s.columnKey as keyof CampaignRow] ?? 0;
    return point;
  });
}

function ChartPreview({ config, rows }: { readonly config: GraphConfig; readonly rows: readonly CampaignRow[] }) {
  if (rows.length === 0) return <p className="text-white/30 text-xs text-center py-12">No data available.</p>;
  const chartData = buildChartData(rows, config.xAxis, config.series);
  const renderSeries = () => config.series.map((s) => {
    const base = { key: s.label, dataKey: s.label, stroke: s.color, fill: s.color, strokeWidth: 2 };
    if (config.chartType === "bar") return <Bar {...base} radius={[3, 3, 0, 0] as [number, number, number, number]} />;
    if (config.chartType === "area") return <Area {...base} type="monotone" fillOpacity={0.2} dot={{ fill: s.color }} />;
    return <Line {...base} type="monotone" dot={{ fill: s.color }} />;
  });
  const Chart = config.chartType === "bar" ? BarChart : config.chartType === "area" ? AreaChart : LineChart;
  return (
    <ResponsiveContainer width="100%" height={280}>
      <Chart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke={GRID_STROKE} />
        <XAxis dataKey="xLabel" tick={AXIS_TICK} />
        <YAxis tick={AXIS_TICK} />
        <Tooltip content={<GraphTooltip />} />
        <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }} />
        {renderSeries()}
      </Chart>
    </ResponsiveContainer>
  );
}

export default function GraphBuilder({ rows }: GraphBuilderProps) {
  const [configs, setConfigs] = useState<readonly GraphConfig[]>([]);
  const [activeConfigId, setActiveConfigId] = useState<string | null>(null);
  const [editingConfig, setEditingConfig] = useState<GraphConfig | null>(null);
  const mountedRef = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loaded = loadGraphConfigs();
    setConfigs(loaded);
    if (loaded.length > 0) { setActiveConfigId(loaded[0].id); setEditingConfig({ ...loaded[0], series: [...loaded[0].series] }); }
    mountedRef.current = true;
  }, []);

  useEffect(() => { if (mountedRef.current) saveGraphConfigs(configs); }, [configs]);

  useEffect(() => {
    if (!activeConfigId) { setEditingConfig(null); return; }
    const found = configs.find((c) => c.id === activeConfigId);
    if (found) setEditingConfig({ ...found, series: [...found.series] });
  }, [activeConfigId, configs]);

  const addConfig = useCallback(() => {
    const nc = createDefaultConfig();
    setConfigs((prev) => [...prev, nc]);
    setActiveConfigId(nc.id);
  }, []);

  const deleteConfig = useCallback((id: string) => {
    setConfigs((prev) => prev.filter((c) => c.id !== id));
    setActiveConfigId((prev) => (prev === id ? null : prev));
  }, []);

  const saveEditing = useCallback(() => {
    if (!editingConfig) return;
    setConfigs((prev) => prev.map((c) => (c.id === editingConfig.id ? editingConfig : c)));
  }, [editingConfig]);

  const handleImport = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const imported = await importConfigsJson(file);
      setConfigs(imported);
      if (imported.length > 0) setActiveConfigId(imported[0].id);
    } catch { /* invalid file */ }
    e.target.value = "";
  }, []);

  const updateSeries = useCallback((idx: number, updated: GraphSeriesConfig) => {
    if (!editingConfig) return;
    setEditingConfig({ ...editingConfig, series: editingConfig.series.map((s, i) => (i === idx ? updated : s)) });
  }, [editingConfig]);

  const removeSeries = useCallback((idx: number) => {
    if (!editingConfig) return;
    setEditingConfig({ ...editingConfig, series: editingConfig.series.filter((_, i) => i !== idx) });
  }, [editingConfig]);

  const addSeries = useCallback(() => {
    if (!editingConfig) return;
    const color = DEFAULT_COLORS[editingConfig.series.length % DEFAULT_COLORS.length];
    setEditingConfig({ ...editingConfig, series: [...editingConfig.series, { columnKey: "reach", color, label: "Reach" }] });
  }, [editingConfig]);

  const ec = editingConfig; // alias for JSX brevity

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
      {/* Config Management Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button onClick={addConfig} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${PILL_ACTIVE} hover:bg-accent-gold/25 transition-colors`}>
          + New Graph
        </button>
        {configs.map((c) => (
          <button key={c.id} onClick={() => setActiveConfigId(c.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${c.id === activeConfigId ? PILL_ACTIVE : PILL_INACTIVE}`}>
            {c.name}
            <span onClick={(e) => { e.stopPropagation(); deleteConfig(c.id); }} className="ml-1 text-white/30 hover:text-red-400 cursor-pointer">x</span>
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          {configs.length > 0 && (
            <button onClick={() => exportConfigsJson(configs)} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${PILL_INACTIVE} transition-colors`}>Export All</button>
          )}
          <button onClick={() => fileInputRef.current?.click()} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${PILL_INACTIVE} transition-colors`}>Import</button>
          <input ref={fileInputRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
        </div>
      </div>

      {/* Editor + Preview */}
      {ec ? (
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">
          <div className="space-y-3">
            <input type="text" value={ec.name} onChange={(e) => setEditingConfig({ ...ec, name: e.target.value })}
              className={`w-full ${INPUT_CLS} px-3 py-2 focus:outline-none focus:border-accent-gold/40`} placeholder="Graph name" />
            <div className="flex gap-1">
              {CHART_TYPES.map((ct) => (
                <button key={ct} onClick={() => setEditingConfig({ ...ec, chartType: ct })}
                  className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${ec.chartType === ct ? PILL_ACTIVE : "bg-white/5 border border-white/10 text-white/40"}`}>
                  {ct}
                </button>
              ))}
            </div>
            <div>
              <label className="text-[10px] text-white/40 mb-1 block">X-Axis</label>
              <select value={ec.xAxis} onChange={(e) => setEditingConfig({ ...ec, xAxis: e.target.value })} className={`w-full ${INPUT_CLS}`}>
                {CAMPAIGN_COLUMNS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] text-white/40 mb-1 block">Y-Axis Series</label>
              <div className="space-y-2">
                {ec.series.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <select value={s.columnKey} onChange={(e) => {
                      const col = NUMERIC_COLUMNS.find((c) => c.key === e.target.value);
                      updateSeries(i, { ...s, columnKey: e.target.value, label: col?.label ?? e.target.value });
                    }} className={`flex-1 ${INPUT_CLS}`}>
                      {NUMERIC_COLUMNS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
                    </select>
                    <input type="color" value={s.color} onChange={(e) => updateSeries(i, { ...s, color: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border border-white/10 bg-transparent" />
                    <button onClick={() => removeSeries(i)} className="text-white/30 hover:text-red-400 text-xs px-1">x</button>
                  </div>
                ))}
              </div>
              <button onClick={addSeries} className="mt-2 text-xs text-accent-gold/60 hover:text-accent-gold transition-colors">+ Add Series</button>
            </div>
            <button onClick={saveEditing}
              className="w-full px-3 py-2 rounded-lg text-xs font-medium bg-accent-gold/20 border border-accent-gold/30 text-accent-gold hover:bg-accent-gold/30 transition-colors">
              Save Config
            </button>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-[10px] text-white/30 mb-2">{ec.name} preview</p>
            <ChartPreview config={ec} rows={rows} />
          </div>
        </div>
      ) : (
        <p className="text-white/30 text-xs text-center py-8">
          Click &quot;+ New Graph&quot; to create a custom chart, or import a saved config.
        </p>
      )}
    </div>
  );
}
