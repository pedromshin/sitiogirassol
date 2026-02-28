#!/usr/bin/env node
/**
 * Generate favicon and icon via OpenAI DALL-E 3.
 * Requires: OPENAI_API_KEY
 * Run: OPENAI_API_KEY=sk-xxx node scripts/generate-favicon.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Error: OPENAI_API_KEY is required.");
  console.error("Run: OPENAI_API_KEY=sk-your-key node scripts/generate-favicon.js");
  process.exit(1);
}

const PROMPT = `Minimalist flat icon of a sunflower with exactly 6 petals arranged symmetrically around a circular core. 
Clean geometric style, single-color silhouette or two-tone. 
Colors: dark forest green (#1c3b33) for petals and core, or sage green (#8ebea8) on transparent/light background.
No gradients, no shadows. Simple, elegant, suitable for favicon and app icon. 
Square format, centered, plenty of padding.`;

async function generate() {
  const body = JSON.stringify({
    model: "dall-e-3",
    prompt: PROMPT,
    n: 1,
    size: "1024x1024",
    quality: "standard",
    response_format: "b64_json",
    style: "natural",
  });

  const req = https.request(
    {
      hostname: "api.openai.com",
      path: "/v1/images/generations",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "Content-Length": Buffer.byteLength(body),
      },
    },
    (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            console.error("OpenAI error:", json.error.message);
            process.exit(1);
          }
          const b64 = json.data?.[0]?.b64_json;
          if (!b64) {
            console.error("No image in response:", data);
            process.exit(1);
          }
          const buf = Buffer.from(b64, "base64");
          const publicDir = path.join(__dirname, "..", "public");
          fs.mkdirSync(publicDir, { recursive: true });
          fs.writeFileSync(path.join(publicDir, "icon.png"), buf);
          fs.writeFileSync(path.join(publicDir, "favicon.png"), buf);
          console.log("Saved: public/icon.png, public/favicon.png");
        } catch (e) {
          console.error("Parse error:", e.message);
          process.exit(1);
        }
      });
    }
  );
  req.on("error", (e) => {
    console.error("Request error:", e.message);
    process.exit(1);
  });
  req.write(body);
  req.end();
}

generate();
