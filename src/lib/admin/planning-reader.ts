import { readFile } from "fs/promises";
import path from "path";

export type PlanningDoc = {
  readonly id: string;
  readonly label: string;
  readonly group: string;
  readonly filePath: string;
  readonly content: string;
  readonly error?: string;
};

type PlanningDocEntry = {
  readonly id: string;
  readonly label: string;
  readonly group: string;
  readonly filePath: string;
};

const PLANNING_DOCS: readonly PlanningDocEntry[] = [
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
] as const;

async function readSingleDoc(entry: PlanningDocEntry): Promise<PlanningDoc> {
  const fullPath = path.join(process.cwd(), entry.filePath);
  try {
    const content = await readFile(fullPath, "utf-8");
    return { ...entry, content };
  } catch {
    return { ...entry, content: "", error: `File not found: ${entry.filePath}` };
  }
}

export async function readPlanningDocs(): Promise<readonly PlanningDoc[]> {
  const docs = await Promise.all(PLANNING_DOCS.map(readSingleDoc));
  return docs;
}

export function groupDocs(docs: readonly PlanningDoc[]): ReadonlyMap<string, readonly PlanningDoc[]> {
  const groups = new Map<string, PlanningDoc[]>();
  for (const doc of docs) {
    const existing = groups.get(doc.group) ?? [];
    groups.set(doc.group, [...existing, doc]);
  }
  return groups;
}
