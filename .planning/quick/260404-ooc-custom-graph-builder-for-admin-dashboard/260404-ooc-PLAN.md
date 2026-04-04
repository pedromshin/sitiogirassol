---
phase: quick
plan: 260404-ooc
type: execute
wave: 1
depends_on: []
files_modified:
  - src/lib/admin/graph-builder-types.ts
  - src/components/admin/GraphBuilder.tsx
  - src/components/admin/MetaDashboard.tsx
autonomous: true
requirements: []
must_haves:
  truths:
    - "User can create a custom graph by selecting chart type, X-axis, and Y-axis columns"
    - "User can save multiple graph configs that persist across page reloads"
    - "User can export graph configs as a JSON file"
    - "User can import a JSON config file to restore saved graphs"
    - "Custom graphs render with real CampaignRow data from the dashboard"
  artifacts:
    - path: "src/lib/admin/graph-builder-types.ts"
      provides: "GraphConfig type, column metadata, localStorage helpers"
    - path: "src/components/admin/GraphBuilder.tsx"
      provides: "Graph builder UI with config panel and chart rendering"
    - path: "src/components/admin/MetaDashboard.tsx"
      provides: "Integration point rendering GraphBuilder with rows data"
  key_links:
    - from: "src/components/admin/GraphBuilder.tsx"
      to: "src/lib/admin/graph-builder-types.ts"
      via: "import types and config helpers"
      pattern: "import.*graph-builder-types"
    - from: "src/components/admin/MetaDashboard.tsx"
      to: "src/components/admin/GraphBuilder.tsx"
      via: "renders GraphBuilder with rows prop"
      pattern: "GraphBuilder.*rows"
---

<objective>
Build a custom graph builder tool inside the Meta Ads dashboard tab. Users select chart type (line/bar/area), X-axis column, 1+ Y-axis columns from CampaignRow fields, and customize colors per series. Configs save to localStorage and can be exported/imported as JSON files.

Purpose: Enable ad-hoc data exploration beyond the hardcoded dashboard charts.
Output: GraphBuilder component integrated into MetaDashboard, with localStorage persistence and JSON import/export.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@src/lib/admin/meta-csv-parser.ts
@src/components/admin/MetaDashboard.tsx
@src/components/admin/AdminTabs.tsx

<interfaces>
From src/lib/admin/meta-csv-parser.ts:
```typescript
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
```

From src/components/admin/MetaDashboard.tsx:
```typescript
// Already imports from recharts: LineChart, Line, BarChart, Bar, XAxis, YAxis,
// CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend
// Has: rows (CampaignRow[]), addRows callback, chartData mapping
export default function MetaDashboard({ seedRows }: { readonly seedRows: CampaignRow[] }): JSX.Element;
```
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create graph builder types, column metadata, and localStorage helpers</name>
  <files>src/lib/admin/graph-builder-types.ts</files>
  <action>
Create `src/lib/admin/graph-builder-types.ts` with:

1. **GraphSeriesConfig type** — `{ readonly columnKey: string; readonly color: string; readonly label: string }`

2. **GraphConfig type** — `{ readonly id: string; readonly name: string; readonly chartType: "line" | "bar" | "area"; readonly xAxis: string; readonly series: readonly GraphSeriesConfig[]; readonly createdAt: string }`

3. **CAMPAIGN_COLUMNS constant** — Array of `{ key: keyof CampaignRow; label: string; type: "string" | "number" }` covering all CampaignRow fields. String fields: reporting_start, reporting_end, campaign, notes. All others: number. Use human-readable labels (e.g., "CPM (BRL)", "CTR %", "Link Clicks").

4. **NUMERIC_COLUMNS** — derived filter of CAMPAIGN_COLUMNS where type === "number"

5. **DEFAULT_COLORS** — Array of 8 hex colors that work on dark bg: `["#f59e0b", "#60a5fa", "#f87171", "#a78bfa", "#34d399", "#fb923c", "#e879f9", "#38bdf8"]`

6. **localStorage helpers** (all pure, return new objects):
   - `loadGraphConfigs(): readonly GraphConfig[]` — reads from localStorage key `"graphBuilderConfigs"`, returns parsed array or empty array on error
   - `saveGraphConfigs(configs: readonly GraphConfig[]): void` — writes JSON to localStorage
   - `exportConfigsJson(configs: readonly GraphConfig[]): void` — creates a Blob with JSON, triggers download as `graph-configs-{YYYY-MM-DD}.json`
   - `importConfigsJson(file: File): Promise<readonly GraphConfig[]>` — reads file, parses JSON, validates it's an array of objects with required fields (id, name, chartType, xAxis, series), returns validated configs. Throws on invalid format.

7. **createDefaultConfig(): GraphConfig** — returns a starter config with id=crypto.randomUUID(), name="New Graph", chartType="line", xAxis="reporting_end", series with one entry for impressions using DEFAULT_COLORS[0].

All exports named. Use explicit return types.
  </action>
  <verify>
    <automated>cd /Users/kaszek/Desktop/sitiogirassol/sitiogirassol-main && npx tsc --noEmit src/lib/admin/graph-builder-types.ts 2>&1 | head -20</automated>
  </verify>
  <done>Type file exists with all exports, compiles without errors, all helpers are pure functions returning new objects.</done>
</task>

<task type="auto">
  <name>Task 2: Build GraphBuilder component with config panel, chart rendering, and import/export</name>
  <files>src/components/admin/GraphBuilder.tsx</files>
  <action>
Create `src/components/admin/GraphBuilder.tsx` as a "use client" component.

**Props:** `{ readonly rows: readonly CampaignRow[] }`

**State:**
- `configs: GraphConfig[]` — initialized from `loadGraphConfigs()` on mount
- `activeConfigId: string | null` — which config is being edited/viewed
- `editingConfig: GraphConfig | null` — working copy of the active config for editing

**Auto-persist:** useEffect that calls `saveGraphConfigs(configs)` whenever `configs` changes (skip initial mount to avoid writing empty on load).

**Layout — two sections stacked:**

**A) Config Management Bar** (top row, horizontal):
- "+" button to add new config (calls createDefaultConfig, adds to configs, sets as active)
- Horizontal list of saved config names as pill buttons (click to select/edit, active one highlighted with accent-gold)
- Delete button (X) on each pill (removes from configs)
- "Export All" button — calls exportConfigsJson(configs)
- "Import" button — hidden file input (accept=".json"), on change calls importConfigsJson, sets result as configs
- Style: flex row, gap-2, items center, pills use rounded-lg bg-white/5 border border-white/10, active pill bg-accent-gold/15 border-accent-gold/30

**B) Active Config Editor + Preview** (below bar, side by side on md+, stacked on mobile):

**Left panel (config editor, ~300px min-width):**
- Text input for config name (updates editingConfig.name)
- Chart type selector: three buttons for line/bar/area (toggle style, active one highlighted)
- X-Axis dropdown: all CAMPAIGN_COLUMNS as options, selected = editingConfig.xAxis
- Y-Axis series list:
  - Each series row: dropdown of NUMERIC_COLUMNS for columnKey, color input (type="color"), remove button
  - "Add Series" button (adds new series with next DEFAULT_COLORS color)
- "Save" button that merges editingConfig back into configs array (immutable update)
- All inputs use dark theme: bg-white/5 border-white/10 text-white rounded-lg text-xs

**Right panel (chart preview):**
- Build chartData by mapping rows to objects: `{ [xAxis]: row[xAxis], ...series.map(s => ({ [s.label]: row[s.columnKey] })) }`
- For xAxis, if it's a date field (reporting_start/reporting_end), use as-is. If reporting_start !== reporting_end for a row, format as "start->end".
- Render using recharts:
  - chartType "line" -> LineChart with Line per series
  - chartType "bar" -> BarChart with Bar per series
  - chartType "area" -> AreaChart with Area per series (import AreaChart, Area from recharts)
- Each series uses its configured color
- Use ResponsiveContainer width="100%" height={280}
- Reuse the existing ChartTooltip pattern from MetaDashboard (copy the tooltip inline or create minimal version)
- Dark theme axes: XAxis/YAxis tick fill rgba(255,255,255,0.3) fontSize 10
- CartesianGrid stroke rgba(255,255,255,0.05) strokeDasharray="3 3"
- If no active config or no rows, show placeholder text

**When activeConfigId changes:** set editingConfig to a spread copy of the matching config from configs array.

Keep component under 350 lines. Use the existing dark theme classes from MetaDashboard (rounded-xl border-white/[0.06] bg-white/[0.02]).
  </action>
  <verify>
    <automated>cd /Users/kaszek/Desktop/sitiogirassol/sitiogirassol-main && npx tsc --noEmit src/components/admin/GraphBuilder.tsx 2>&1 | head -20</automated>
  </verify>
  <done>GraphBuilder component renders config management bar, editor panel, and live chart preview. All state changes produce new objects (immutable). TypeScript compiles clean.</done>
</task>

<task type="auto">
  <name>Task 3: Integrate GraphBuilder into MetaDashboard</name>
  <files>src/components/admin/MetaDashboard.tsx</files>
  <action>
In MetaDashboard.tsx, add the GraphBuilder below the existing hardcoded charts section:

1. Add import: `import GraphBuilder from "@/components/admin/GraphBuilder";`

2. After the closing `</div>` of the `grid grid-cols-1 md:grid-cols-2 gap-6` chart grid (line ~332), and before the data table `<div className="mt-8 ...">` (line ~334), add:

```tsx
<div className="mt-8">
  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold/60 mb-4">Custom Graphs</h3>
  <GraphBuilder rows={rows} />
</div>
```

3. No other changes to MetaDashboard. The GraphBuilder is self-contained with its own state management and localStorage persistence.

Verify the full dashboard still renders: existing stat cards, funnel, hardcoded charts, new GraphBuilder section, then data table.
  </action>
  <verify>
    <automated>cd /Users/kaszek/Desktop/sitiogirassol/sitiogirassol-main && npx tsc --noEmit src/components/admin/MetaDashboard.tsx 2>&1 | head -20</automated>
  </verify>
  <done>MetaDashboard renders GraphBuilder section between existing charts and data table. Full page compiles and renders without errors.</done>
</task>

</tasks>

<verification>
1. `npx tsc --noEmit` — no type errors across the three files
2. `npm run build` — production build succeeds
3. Manual: visit admin dashboard, Meta Ads tab, scroll to Custom Graphs section, create a graph, reload page (config persists), export JSON, import JSON
</verification>

<success_criteria>
- Custom graph builder renders in Meta Ads dashboard tab
- Users can create/edit/delete multiple graph configs with chart type, axis, and series selection
- Configs persist in localStorage across page reloads
- Export downloads a .json file with all configs
- Import loads configs from a .json file
- All code compiles with strict TypeScript, follows immutable patterns
</success_criteria>

<output>
After completion, create `.planning/quick/260404-ooc-custom-graph-builder-for-admin-dashboard/260404-ooc-SUMMARY.md`
</output>
