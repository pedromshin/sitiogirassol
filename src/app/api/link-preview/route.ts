import { NextRequest, NextResponse } from "next/server";

const URL_REGEX = /^https?:\/\/[^\s]+$/;
const MAX_HTML_SIZE = 500_000; // 500KB
const FETCH_TIMEOUT_MS = 8_000;

function extractMeta(html: string, url: string): {
  title: string;
  description: string;
  image: string | null;
  siteName: string | null;
} {
  const baseUrl = new URL(url);
  const origin = baseUrl.origin;

  const getOg = (name: string): string | null => {
    const re = new RegExp(
      `<meta[^>]+property=["']og:${name}["'][^>]+content=["']([^"']+)["']`,
      "i"
    );
    const m = html.match(re);
    if (m) return m[1].trim();
    const re2 = new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:${name}["']`,
      "i"
    );
    const m2 = html.match(re2);
    return m2 ? m2[1].trim() : null;
  };

  let title = getOg("title");
  if (!title) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    title = titleMatch ? titleMatch[1].trim() : null;
  }

  let description = getOg("description");
  if (!description) {
    const metaDesc = html.match(
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i
    );
    if (!metaDesc) {
      const metaDesc2 = html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i
      );
      description = metaDesc2 ? metaDesc2[1].trim() : null;
    } else {
      description = metaDesc[1].trim();
    }
  }

  let image = getOg("image");
  if (image && !image.startsWith("http")) {
    image = image.startsWith("/") ? `${origin}${image}` : `${origin}/${image}`;
  }

  const siteName = getOg("site_name");

  return {
    title: title ?? "Untitled",
    description: description ?? "",
    image: image ?? null,
    siteName: siteName ?? null,
  };
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url || !URL_REGEX.test(url.trim())) {
    return NextResponse.json(
      { error: "Invalid or missing URL" },
      { status: 400 }
    );
  }

  const targetUrl = url.trim();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const res = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LinkPreview/1.0; +https://github.com)",
      },
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch: ${res.status}` },
        { status: 502 }
      );
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) {
      return NextResponse.json(
        { error: "URL does not point to HTML" },
        { status: 400 }
      );
    }

    const text = await res.text();
    if (text.length > MAX_HTML_SIZE) {
      return NextResponse.json(
        { error: "Page too large" },
        { status: 413 }
      );
    }

    const meta = extractMeta(text, targetUrl);
    return NextResponse.json({
      url: targetUrl,
      ...meta,
    });
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === "AbortError") {
        return NextResponse.json(
          { error: "Request timed out" },
          { status: 504 }
        );
      }
    }
    return NextResponse.json(
      { error: "Failed to fetch URL" },
      { status: 502 }
    );
  }
}
