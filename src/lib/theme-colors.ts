/**
 * Theme colors - derived from design-system/colors.config.ts.
 * Use this to pick any color programmatically or in components.
 */
import { colors, flattenColors } from "@/lib/design-system";

export const themeColors = colors;

/** Flat list of all theme colors with their token paths for picker UI */
export const themeColorEntries = flattenColors(colors);

const SCALE_ORDER = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

/** Group entries by color family, scale-first then named (DEFAULT, mid, light, etc.) */
export function groupColorEntriesByFamily() {
  const groups: Record<string, { path: string; value: string }[]> = {};
  for (const entry of themeColorEntries) {
    const family = entry.path.split(".")[0];
    if (!groups[family]) groups[family] = [];
    groups[family].push(entry);
  }
  const order = [
    "primary", "accent", "neutral", "surface", "text",
    "yellow", "brown", "success", "warning", "error", "info",
  ];
  return order.filter((k) => groups[k]).map((family) => {
    const entries = groups[family]!;
    const sorted = [...entries].sort((a, b) => {
      const aSuffix = a.path.split(".")[1] ?? "";
      const bSuffix = b.path.split(".")[1] ?? "";
      const aIdx = SCALE_ORDER.indexOf(aSuffix);
      const bIdx = SCALE_ORDER.indexOf(bSuffix);
      if (aIdx >= 0 && bIdx >= 0) return aIdx - bIdx;
      if (aIdx >= 0) return -1;
      if (bIdx >= 0) return 1;
      return a.path.localeCompare(b.path);
    });
    return { family, entries: sorted };
  });
}
