/**
 * Color math: hex ↔ HSL conversion and derivation from a single base.
 * All design system colors are computed from BASE_HEX.
 */

export type HSL = { h: number; s: number; l: number };

export function hexToHSL(hex: string): HSL {
  const m = hex.replace(/^#/, "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) throw new Error(`Invalid hex: ${hex}`);
  let r = parseInt(m[1], 16) / 255;
  let g = parseInt(m[2], 16) / 255;
  let b = parseInt(m[3], 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  const r = Math.round(f(0) * 255);
  const g = Math.round(f(8) * 255);
  const b = Math.round(f(4) * 255);
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

/** Adjust HSL and return hex */
export function adjust(
  hex: string,
  opts: { h?: number; s?: number; l?: number }
): string {
  const { h: dh = 0, s: ds = 0, l: dl = 0 } = opts;
  const { h, s, l } = hexToHSL(hex);
  return hslToHex(
    clamp((h + dh) % 360, 0, 360),
    clamp(s + ds, 0, 100),
    clamp(l + dl, 0, 100)
  );
}

/** Set specific HSL channel (replace, not add) */
export function setHSL(
  hex: string,
  opts: { h?: number; s?: number; l?: number }
): string {
  const base = hexToHSL(hex);
  return hslToHex(
    opts.h ?? base.h,
    opts.s ?? base.s,
    opts.l ?? base.l
  );
}
