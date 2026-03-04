#!/usr/bin/env node
/**
 * Generate all brand icon assets from public/icon.png.
 * Run: npm run icons
 *
 * Outputs to public/icons/ and copies favicon.ico to src/app/.
 */
import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from "fs";
import { join } from "path";
import { Jimp } from "jimp";
import toIco from "to-ico";

const ROOT = join(__dirname, "..");
const SRC_ICON = join(ROOT, "public", "icon.png");
const OUT_DIR = join(ROOT, "public", "icons");
const APP_DIR = join(ROOT, "src", "app");

const BRAND_BG = 0xff1a2f28; // #1A2F28 ARGB

const PNG_SIZES = [16, 32, 48, 180, 192, 512] as const;
const ICO_SIZES = [16, 32, 48];
const OG_SIZE = { width: 1200, height: 630 };

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  let source: Awaited<ReturnType<typeof Jimp.read>> = await Jimp.read(SRC_ICON);
  const w = source.width;
  const h = source.height;
  const minSize = Math.min(w, h);
  if (w !== minSize || h !== minSize) {
    const x = Math.floor((w - minSize) / 2);
    const y = Math.floor((h - minSize) / 2);
    source = source.crop({ x, y, w: minSize, h: minSize }) as typeof source;
  }
  if (minSize !== 1024) {
    source = source.resize({ w: 1024, h: 1024 }) as typeof source;
  }

  const resize = (img: Awaited<ReturnType<typeof Jimp.read>>, s: number) =>
    img.clone().resize({ w: s, h: s });

  // Generate PNG sizes
  for (const s of PNG_SIZES) {
    const img = resize(source, s);
    await img.write(join(OUT_DIR, `favicon-${s}x${s}.png`));
  }

  // Apple touch icon (180) and PWA icons (192, 512)
  await resize(source, 180).write(join(OUT_DIR, "apple-touch-icon.png"));
  await resize(source, 192).write(join(OUT_DIR, "icon-192x192.png"));
  await resize(source, 512).write(join(OUT_DIR, "icon-512x512.png"));

  // Favicon ICO (16, 32, 48)
  const icoBuffers = await Promise.all(
    ICO_SIZES.map(async (s) => {
      const img = resize(source, s);
      return img.getBuffer("image/png");
    })
  );
  const ico = await toIco(icoBuffers);
  writeFileSync(join(OUT_DIR, "favicon.ico"), ico);

  // OG image: icon centered on brand background
  const bg = new Jimp({ width: OG_SIZE.width, height: OG_SIZE.height, color: BRAND_BG });
  const iconForOg = resize(source, 400);
  const x = (OG_SIZE.width - 400) / 2;
  const y = (OG_SIZE.height - 400) / 2;
  bg.composite(iconForOg, x, y);
  await bg.write(join(OUT_DIR, "og-image.png"));

  // Copy favicon.ico to src/app/ for Next.js convention
  copyFileSync(join(OUT_DIR, "favicon.ico"), join(APP_DIR, "favicon.ico"));

  // Safari pinned tab SVG (single-color mask - black shape on transparent, from Ativo 2 1.svg)
  const safariPinned = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 829 436">
<path d="M437.805 153.824C524.878 174.24 499.397 24.3868 560.958 28.7639C579.154 30.0458 590.816 48.9611 585.438 66.4071L547.733 189.248L586.752 207.475C609.2 195.251 684.955 91.638 710.843 117.525C734.01 168.144 574.464 237.646 638.276 267.723C683.673 289.108 784.347 185.621 799.167 258.218C802.825 276.071 792.789 293.954 775.655 300.239C746.266 311.056 700.275 326.376 689.207 335.131C678.139 343.885 684.455 352.326 683.517 363.05C742.327 366.614 860.352 338.476 820.083 435.867H619.83C604.448 156.138 221.732 157.232 210.226 435.867H14.5378C1.43772 435.867 -8.09814 392.033 9.94182 376.651C35.8606 354.515 112.585 366.083 146.477 363.05C170.144 339.57 101.955 316.309 59.8097 301.739C42.4263 295.737 32.8279 277.134 37.9553 259.469C42.4888 243.836 59.3094 235.301 74.598 240.898L178.523 279.01L206.693 245.275L125.967 147.571C113.054 131.939 129.937 108.334 148.321 116.869C185.089 133.971 224.327 223.983 267.754 199.972C308.43 172.99 200.503 62.624 246.056 30.4522C306.179 -12.0058 326.907 128.718 347.105 162.954L392.314 153.856V12.85C392.314 -4.28332 437.836 -4.28332 437.836 12.85V153.856L437.805 153.824Z" fill="black"/>
<path d="M461.129 435.742C446.153 359.518 375.713 364.614 356.704 435.836H261.595C281.792 217.918 541.793 233.894 557.426 435.836L461.129 435.742Z" fill="black"/>
</svg>`;
  writeFileSync(join(OUT_DIR, "safari-pinned-tab.svg"), safariPinned);

  console.log("Generated icons in public/icons/:");
  PNG_SIZES.forEach((s) => console.log(`  - favicon-${s}x${s}.png`));
  console.log("  - apple-touch-icon.png");
  console.log("  - icon-192x192.png, icon-512x512.png");
  console.log("  - favicon.ico");
  console.log("  - og-image.png");
  console.log("  - safari-pinned-tab.svg");
  console.log("Copied favicon.ico to src/app/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
