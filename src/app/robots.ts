import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitiogirassol.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/theme", "/admin"],
      },
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/theme", "/admin"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/theme", "/admin"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
