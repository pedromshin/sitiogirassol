import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitiogirassol.org";

/** Fixed dates for static routes — update when content actually changes */
const STATIC_ROUTE_DATES: Record<string, string> = {
  "": "2026-03-28",
  "/listing-info": "2026-03-28",
  "/blog": "2026-03-28",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.keys(STATIC_ROUTE_DATES);

  const staticUrls = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(STATIC_ROUTE_DATES[route]),
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${route}`,
          pt: `${BASE_URL}/pt${route}`,
          es: `${BASE_URL}/es${route}`,
          "x-default": `${BASE_URL}/pt${route}`,
        },
      },
    }))
  );

  const blogUrls = routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/blog/${post.slug}`,
          pt: `${BASE_URL}/pt/blog/${post.slug}`,
          es: `${BASE_URL}/es/blog/${post.slug}`,
          "x-default": `${BASE_URL}/pt/blog/${post.slug}`,
        },
      },
    }))
  );

  return [...staticUrls, ...blogUrls];
}
