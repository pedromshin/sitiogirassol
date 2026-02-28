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
  const size = Math.min(source.width, source.height);
  if (size !== 1024) {
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

  // Safari pinned tab SVG (single-color mask - black shape on transparent)
  const safariPinned = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
<path d="M304 1024L575.052 764.8L664 400.462L1024 505.6L1384 400.462L1472.95 764.8L1744 1024L1472.95 1283.2L1384 1647.54L1024 1542.4L664 1647.54L575.052 1283.2L304 1024Z" fill="black"/>
<path d="M1024 304L1283.2 575.052L1647.54 664L1542.4 1024L1647.54 1384L1283.2 1472.95L1024 1744L764.8 1472.95L400.462 1384L505.6 1024L400.462 664L764.8 575.052L1024 304Z" fill="black"/>
<path d="M1541.61 1023.49C1541.61 1309.64 1309.64 1541.61 1023.49 1541.61C737.346 1541.61 505.377 1309.64 505.377 1023.49C505.377 737.346 737.346 505.377 1023.49 505.377C1309.64 505.377 1541.61 737.346 1541.61 1023.49Z" fill="black"/>
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
