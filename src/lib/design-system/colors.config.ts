/**
 * Single source of truth: ONE base color.
 * All design system colors are derived from BASE_HEX via HSL math.
 *
 * Change BASE_HEX to rebrand — everything updates automatically.
 */
import { deriveColors } from "./derive-colors";

/** The only color you define. Everything else is calculated. */
export const BASE_HEX = "#1c3b33";

export const colors = deriveColors(BASE_HEX);

export type Colors = ReturnType<typeof deriveColors>;
