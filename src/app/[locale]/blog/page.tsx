import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sitiogirassol.org";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const blogMeta = {
  title: {
    en: "Blog | Sítio Girassol - São Roque Travel & Nature Tips",
    pt: "Blog | Sítio Girassol - Dicas de Viagem e Natureza em São Roque",
    es: "Blog | Sítio Girassol - Consejos de Viaje y Naturaleza en São Roque",
  },
  description: {
    en: "Travel tips, guides to São Roque, and countryside living advice from Sítio Girassol. Discover the best of São Paulo's countryside.",
    pt: "Dicas de viagem, guias de São Roque e conselhos sobre vida no campo do Sítio Girassol. Descubra o melhor do interior paulista.",
    es: "Consejos de viaje, guías de São Roque y consejos sobre vida en el campo de Sítio Girassol. Descubre lo mejor del interior paulista.",
  },
} as const;

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const loc = locale as "en" | "pt" | "es";
  const title = blogMeta.title[loc] ?? blogMeta.title.en;
  const description = blogMeta.description[loc] ?? blogMeta.description.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        en: `${BASE_URL}/en/blog`,
        pt: `${BASE_URL}/pt/blog`,
        es: `${BASE_URL}/es/blog`,
        "x-default": `${BASE_URL}/blog`,
      },
    },
    openGraph: { title, description, url: `${BASE_URL}/${locale}/blog` },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as "en" | "pt" | "es";

  const heading = loc === "pt" ? "Blog" : loc === "es" ? "Blog" : "Blog";
  const subtitle =
    loc === "pt"
      ? "Dicas, guias e inspiração para sua próxima viagem ao interior"
      : loc === "es"
      ? "Consejos, guías e inspiración para tu próximo viaje al interior"
      : "Tips, guides and inspiration for your next countryside getaway";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog - Sítio Girassol",
    description: blogMeta.description[loc] ?? blogMeta.description.en,
    url: `${BASE_URL}/${locale}/blog`,
    isPartOf: {
      "@type": "WebSite",
      name: "Sítio Girassol",
      url: BASE_URL,
    },
    hasPart: blogPosts.map((post) => ({
      "@type": "Article",
      headline: post.title[loc] ?? post.title.en,
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      image: post.coverImage,
    })),
  };

  return (
    <div className="bg-[#141E19] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="pt-28 sm:pt-36 md:pt-40 pb-12 md:pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl mb-4 leading-tight">
          {heading}
        </h1>
        <p className="text-white/70 text-base md:text-lg font-light max-w-xl mx-auto">
          {subtitle}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group border border-white/10 rounded-2xl overflow-hidden hover:border-accent-gold/30 transition-colors bg-white/[0.02]"
            >
              <div className="md:flex">
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt[loc] ?? post.coverAlt.en}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <time className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                    {new Date(post.publishedAt).toLocaleDateString(
                      loc === "pt" ? "pt-BR" : loc === "es" ? "es-ES" : "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </time>
                  <h2 className="font-display text-xl md:text-2xl text-white mt-2 mb-3 group-hover:text-accent-gold transition-colors">
                    {post.title[loc] ?? post.title.en}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base line-clamp-3">
                    {post.description[loc] ?? post.description.en}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
