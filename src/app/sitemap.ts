import { routing } from "@/i18n/routing";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sitiogirassol.org";

export default function sitemap() {
  const staticRoutes = ["", "/listing-info", "/blog"];

  const staticUrls = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : 0.8,
    }))
  );

  const blogUrls = routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticUrls, ...blogUrls];
}
