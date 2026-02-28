/**
 * Derive full design system from a single base hex.
 * All colors computed via HSL math.
 */
import { hexToHSL, hslToHex } from "./color-math";

const SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const LIGHTNESS: Record<number, number> = {
  50: 97, 100: 94, 200: 88, 300: 78, 400: 60,
  500: 50, 600: 40, 700: 30, 800: 22, 900: 15, 950: 10,
};

function hex(h: number, s: number, l: number) {
  return hslToHex(h, s, l);
}

function scaleFromBase(
  baseH: number,
  baseS: number,
  baseL?: number
): Record<number, string> {
  const out: Record<number, string> = {};
  for (const step of SCALE) {
    const L = baseL !== undefined && step === 500 ? baseL : LIGHTNESS[step]!;
    const S = step >= 400 && step <= 600 ? baseS : baseS * Math.max(0.1, 1 - Math.abs(500 - step) / 800);
    out[step] = hex(baseH, Math.max(2, Math.min(100, S)), L);
  }
  return out;
}

function neutralScale(baseH: number) {
  const out: Record<number, string> = {};
  for (const step of SCALE) {
    const L = LIGHTNESS[step]!;
    out[step] = hex(baseH, 2, L);
  }
  return out;
}

export function deriveColors(baseHex: string) {
  const base = hexToHSL(baseHex);
  const { h: baseH, s: baseS, l: baseL } = base;

  return {
    primary: {
      ...scaleFromBase(baseH, baseS, baseL), // 500 = base
      DEFAULT: baseHex,
      mid: hex(baseH, baseS, Math.min(100, baseL + 10)),
      light: hex(baseH, baseS, Math.min(100, baseL + 21)),
    },
    accent: {
      ...scaleFromBase(baseH, Math.min(100, baseS + 8), 65),
      DEFAULT: hex(baseH, Math.min(100, baseS + 8), 65),
      light: hex(baseH, Math.min(100, baseS + 2), 88),
    },
    neutral: neutralScale(baseH),
    surface: hex(baseH, 2, 98),
    text: {
      DEFAULT: hex(baseH, baseS, Math.max(0, baseL - 2)),
      muted: hex(baseH, 18, 38),
    },
    yellow: {
      ...scaleFromBase(45, 75, 59),
      DEFAULT: hex(45, 75, 59),
      light: hex(45, 65, 88),
      dark: hex(45, 75, 48),
    },
    brown: {
      ...scaleFromBase(25, 50, 35),
      DEFAULT: hex(25, 50, 35),
      light: hex(25, 45, 48),
      dark: hex(25, 55, 25),
    },
    success: { ...scaleFromBase(142, 55), DEFAULT: hex(142, 55, 45) },
    warning: { ...scaleFromBase(38, 92), DEFAULT: hex(38, 92, 50) },
    error: { ...scaleFromBase(0, 72), DEFAULT: hex(0, 72, 50) },
    info: { ...scaleFromBase(210, 90), DEFAULT: hex(210, 90, 50) },
  };
}
