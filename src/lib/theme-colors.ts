/**
 * Theme colors - mirrors tailwind.config.ts.
 * Use this to pick any color programmatically or in components.
 */
export const themeColors = {
  primary: {
    DEFAULT: "#1c3b33",
    mid: "#3a5a4c",
    light: "#5e7b5b",
  },
  accent: {
    DEFAULT: "#8ebea8",
    light: "#c5e2dc",
  },
  surface: "#f8faf8",
  text: {
    DEFAULT: "#1a2f28",
    muted: "#5a7a6e",
  },
} as const;

/** Flat list of all theme colors with their token paths for picker UI */
export const themeColorEntries: { path: string; value: string }[] = [
  { path: "primary", value: themeColors.primary.DEFAULT },
  { path: "primary.mid", value: themeColors.primary.mid },
  { path: "primary.light", value: themeColors.primary.light },
  { path: "accent", value: themeColors.accent.DEFAULT },
  { path: "accent.light", value: themeColors.accent.light },
  { path: "surface", value: themeColors.surface },
  { path: "text", value: themeColors.text.DEFAULT },
  { path: "text.muted", value: themeColors.text.muted },
];
