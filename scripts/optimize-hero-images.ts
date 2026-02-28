#!/usr/bin/env node
/**
 * Optimizes hero background images for Next.js Image optimization.
 * Resizes to max 1920px width and compresses to reduce file size.
 * Run: npx tsx scripts/optimize-hero-images.ts
 * Or: npm run optimize:images
 */
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { Jimp } from "jimp";

const BG_DIR = join(__dirname, "..", "public", "bg");
const MAX_WIDTH = 1920;
const QUALITY = 85;

async function optimizeImage(filePath: string) {
  const image = await Jimp.read(filePath);
  const { width, height } = image.bitmap;

  if (width <= MAX_WIDTH) {
    console.log(`  Skip ${filePath.split("/").pop()} (already ${width}px)`);
    return;
  }

  image.resize({ w: MAX_WIDTH });
  await image.write(filePath, { quality: QUALITY });

  const newSize = statSync(filePath).size;
  const newHeight = image.bitmap.height;
  console.log(`  Optimized ${filePath.split("/").pop()} -> ${MAX_WIDTH}x${newHeight} (${(newSize / 1024).toFixed(0)}KB)`);
}

async function main() {
  const files = readdirSync(BG_DIR).filter(
    (f) => f.endsWith(".jpg") || f.endsWith(".JPG") || f.endsWith(".jpeg")
  );
  if (files.length === 0) {
    console.log("No images found in public/bg/");
    return;
  }
  console.log(`Optimizing ${files.length} images in public/bg/...`);
  for (const f of files) {
    await optimizeImage(join(BG_DIR, f));
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
