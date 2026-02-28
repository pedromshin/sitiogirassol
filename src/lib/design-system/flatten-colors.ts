/**
 * Flatten nested color config to { path, value }[] for picker and CSS generation.
 */
import type { Colors } from "./colors.config";

function isColorGroup(
  v: unknown
): v is Record<string, string> & { DEFAULT?: string } {
  return typeof v === "object" && v !== null && !("length" in v);
}

export function flattenColors(
  obj: Colors,
  prefix = ""
): { path: string; value: string }[] {
  const entries: { path: string; value: string }[] = [];

  for (const [key, val] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof val === "string") {
      entries.push({ path, value: val });
    } else if (isColorGroup(val)) {
      if ("DEFAULT" in val && typeof val.DEFAULT === "string") {
        entries.push({ path, value: val.DEFAULT });
      }
      for (const [k, v] of Object.entries(val)) {
        if (k !== "DEFAULT" && typeof v === "string") {
          entries.push({ path: `${path}.${k}`, value: v });
        }
      }
    }
  }

  return entries;
}
