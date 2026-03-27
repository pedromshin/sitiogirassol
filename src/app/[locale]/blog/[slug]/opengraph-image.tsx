import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog-posts";

export const runtime = "edge";
export const alt = "Sítio Girassol Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params.locale || "pt";
  const post = blogPosts.find((p) => p.slug === params.slug);
  const title = post?.title[locale] || post?.title.en || "Blog Post";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #1a3a2a 0%, #0d1f15 50%, #1a3a2a 100%)",
          fontFamily: "serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top decorative border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, #d4af37, #e9c46a, #d4af37)",
            display: "flex",
          }}
        />

        {/* Blog label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#d4af37",
              textTransform: "uppercase",
              letterSpacing: "3px",
              display: "flex",
            }}
          >
            Sítio Girassol · Blog
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 40 : 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              maxWidth: "900px",
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.5)",
              display: "flex",
            }}
          >
            sitiogirassol.org
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.5)",
              display: "flex",
            }}
          >
            São Roque, SP
          </div>
        </div>

        {/* Bottom decorative border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, #d4af37, #e9c46a, #d4af37)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
