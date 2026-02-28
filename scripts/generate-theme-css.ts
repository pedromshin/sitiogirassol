#!/usr/bin/env node
/**
 * Generates theme-vars.css from design-system colors.
 * Run: npx tsx scripts/generate-theme-css.ts
 * Or: npm run theme:css
 */
import { writeFileSync } from "fs";
import { join } from "path";
import { colors, flattenColors } from "../src/lib/design-system";

const entries = flattenColors(colors);
const cssVars = entries
  .map(({ path, value }) => {
    const varName = `--color-${path.replace(/\./g, "-")}`;
    return `  ${varName}: ${value};`;
  })
  .join("\n");

const output = `/* Auto-generated from src/lib/design-system/colors.config.ts - do not edit */
:root {
${cssVars}
}
`;

const outPath = join(__dirname, "..", "src", "app", "theme-vars.css");
writeFileSync(outPath, output);
console.log("Generated:", outPath);
