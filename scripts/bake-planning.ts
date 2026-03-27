/**
 * Bakes .planning/ markdown files into src/data/planning-data.json
 * so they're bundled by Next.js and available on Vercel without fs access.
 * Run: npx tsx scripts/bake-planning.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

const DOCS = [
  { id: "project", label: "Project", group: "Overview", filePath: ".planning/PROJECT.md" },
  { id: "requirements", label: "Requirements", group: "Overview", filePath: ".planning/REQUIREMENTS.md" },
  { id: "roadmap", label: "Roadmap", group: "Overview", filePath: ".planning/ROADMAP.md" },
  { id: "state", label: "State", group: "Overview", filePath: ".planning/STATE.md" },
  { id: "config", label: "Config", group: "Overview", filePath: ".planning/config.json" },
  { id: "research-summary", label: "Summary", group: "Research", filePath: ".planning/research/SUMMARY.md" },
  { id: "research-stack", label: "Stack", group: "Research", filePath: ".planning/research/STACK.md" },
  { id: "research-features", label: "Features", group: "Research", filePath: ".planning/research/FEATURES.md" },
  { id: "research-architecture", label: "Architecture", group: "Research", filePath: ".planning/research/ARCHITECTURE.md" },
  { id: "research-pitfalls", label: "Pitfalls", group: "Research", filePath: ".planning/research/PITFALLS.md" },
  { id: "codebase-stack", label: "Stack", group: "Codebase", filePath: ".planning/codebase/STACK.md" },
  { id: "codebase-architecture", label: "Architecture", group: "Codebase", filePath: ".planning/codebase/ARCHITECTURE.md" },
  { id: "codebase-structure", label: "Structure", group: "Codebase", filePath: ".planning/codebase/STRUCTURE.md" },
  { id: "codebase-conventions", label: "Conventions", group: "Codebase", filePath: ".planning/codebase/CONVENTIONS.md" },
  { id: "codebase-integrations", label: "Integrations", group: "Codebase", filePath: ".planning/codebase/INTEGRATIONS.md" },
  { id: "codebase-concerns", label: "Concerns", group: "Codebase", filePath: ".planning/codebase/CONCERNS.md" },
  { id: "codebase-testing", label: "Testing", group: "Codebase", filePath: ".planning/codebase/TESTING.md" },
];

const root = process.cwd();
const result = DOCS.map((doc) => {
  try {
    const content = readFileSync(path.join(root, doc.filePath), "utf-8");
    return { ...doc, content };
  } catch {
    return { ...doc, content: "", error: `File not found: ${doc.filePath}` };
  }
});

const outDir = path.join(root, "src", "data");
mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "planning-data.json");
writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log(`Baked ${result.length} planning docs to ${outPath}`);
