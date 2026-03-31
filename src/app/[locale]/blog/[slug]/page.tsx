import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitiogirassol.org";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const locales = ["pt", "en", "es"];
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const loc = locale as "en" | "pt" | "es";
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = post.title[loc] ?? post.title.en;
  const description = post.description[loc] ?? post.description.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: {
        en: `${BASE_URL}/en/blog/${slug}`,
        pt: `${BASE_URL}/pt/blog/${slug}`,
        es: `${BASE_URL}/es/blog/${slug}`,
        "x-default": `${BASE_URL}/pt/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: `${BASE_URL}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.coverAlt[loc] ?? post.coverAlt.en,
        },
      ],
    },
  };
}

function ArticleJsonLd({
  post,
  locale,
}: {
  post: (typeof blogPosts)[number];
  locale: string;
}) {
  const loc = locale as "en" | "pt" | "es";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[loc] ?? post.title.en,
    description: post.description[loc] ?? post.description.en,
    image: `${BASE_URL}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Sítio Girassol",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sítio Girassol",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/icons/og-image.png` },
    },
    mainEntityOfPage: `${BASE_URL}/${locale}/blog/${post.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function BreadcrumbJsonLd({
  post,
  locale,
}: {
  post: (typeof blogPosts)[number];
  locale: string;
}) {
  const loc = locale as "en" | "pt" | "es";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Sítio Girassol",
        item: `${BASE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title[loc] ?? post.title.en,
        item: `${BASE_URL}/${locale}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as "en" | "pt" | "es";

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = post.content[loc] ?? post.content.en;
  const title = post.title[loc] ?? post.title.en;

  const inlineMarkdown = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" class="text-accent-gold underline hover:text-warm-gold" target="_blank" rel="noopener noreferrer">$1</a>'
      );

  const sections = content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-display text-white mt-10 mb-4"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="text-xl md:text-2xl font-display text-white mt-8 mb-3"
        >
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.includes("\n- ") || block.startsWith("- ")) {
      const items = block.split("\n").filter((line) => line.startsWith("- "));
      return (
        <ul key={i} className="list-disc list-inside space-y-2 mb-4 text-white/70 text-base md:text-lg">
          {items.map((item, j) => (
            <li
              key={j}
              dangerouslySetInnerHTML={{ __html: inlineMarkdown(item.replace(/^- /, "")) }}
            />
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="text-white/70 text-base md:text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: inlineMarkdown(block) }}
      />
    );
  });

  const backLabel =
    loc === "pt" ? "Voltar ao Blog" : loc === "es" ? "Volver al Blog" : "Back to Blog";

  return (
    <div className="bg-[#141E19] text-white min-h-screen">
      <ArticleJsonLd post={post} locale={locale} />
      <BreadcrumbJsonLd post={post} locale={locale} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-20">
        <Link
          href={`/${locale}/blog`}
          className="text-accent-gold text-sm uppercase tracking-widest font-bold hover:underline"
        >
          &larr; {backLabel}
        </Link>

        <time className="block mt-6 text-xs uppercase tracking-widest text-white/70 font-bold">
          {new Date(post.publishedAt).toLocaleDateString(
            loc === "pt" ? "pt-BR" : loc === "es" ? "es-ES" : "en-US",
            { year: "numeric", month: "long", day: "numeric" }
          )}
        </time>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-8 leading-tight">
          {title}
        </h1>

        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.coverImage}
            alt={post.coverAlt[loc] ?? post.coverAlt.en}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose-custom">{sections}</div>

        <div className="mt-12 flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Internal linking CTA — distributes link equity and drives conversions */}
        <aside className="mt-16 p-6 md:p-8 rounded-2xl border border-accent-gold/20 bg-accent-gold/5">
          <h3 className="font-display text-xl md:text-2xl text-white mb-3">
            {loc === "pt"
              ? "Hospede-se no Sítio Girassol"
              : loc === "es"
              ? "Hospédese en Sítio Girassol"
              : "Stay at Sítio Girassol"}
          </h3>
          <p className="text-white/70 text-base mb-4">
            {loc === "pt"
              ? "3 quartos, piscina privativa, churrasqueira e 2,6 hectares de natureza preservada em São Roque, SP — a apenas 60 km de São Paulo. Pet-friendly."
              : loc === "es"
              ? "3 dormitorios, piscina privada, parrilla y 2,6 hectáreas de naturaleza preservada en São Roque, SP — a solo 60 km de São Paulo. Pet-friendly."
              : "3 bedrooms, private pool, BBQ and 2.6 hectares of preserved nature in São Roque, SP — just 60 km from São Paulo. Pet-friendly."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}`}
              className="inline-block px-5 py-2.5 rounded-full bg-accent-gold text-forest-dark font-bold text-sm hover:bg-warm-gold transition-colors"
            >
              {loc === "pt" ? "Conheça o Sítio" : loc === "es" ? "Conocer el Sítio" : "Explore the Property"}
            </Link>
            <Link
              href={`/${locale}/listing-info`}
              className="inline-block px-5 py-2.5 rounded-full border border-white/20 text-white font-bold text-sm hover:border-accent-gold/40 transition-colors"
            >
              {loc === "pt" ? "Informações" : loc === "es" ? "Información" : "More Info"}
            </Link>
          </div>
        </aside>
      </article>
    </div>
  );
}
