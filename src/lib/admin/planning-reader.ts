import planningData from "@/data/planning-data.json";

export type PlanningDoc = {
  readonly id: string;
  readonly label: string;
  readonly group: string;
  readonly filePath: string;
  readonly content: string;
  readonly error?: string;
};

export function readPlanningDocs(): readonly PlanningDoc[] {
  return planningData as readonly PlanningDoc[];
}

export function groupDocs(docs: readonly PlanningDoc[]): ReadonlyMap<string, readonly PlanningDoc[]> {
  const groups = new Map<string, PlanningDoc[]>();
  for (const doc of docs) {
    const existing = groups.get(doc.group) ?? [];
    groups.set(doc.group, [...existing, doc]);
  }
  return groups;
}
