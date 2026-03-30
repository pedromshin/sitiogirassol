import { routing } from "@/i18n/routing";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitiogirassol.org";

export default function sitemap() {
  const staticRoutes = ["", "/listing-info", "/blog"];

  const staticUrls = routing.locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : 0.8,
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
