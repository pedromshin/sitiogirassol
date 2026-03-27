import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import InfoPageClient from "@/components/sections/InfoPageClient";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sitiogirassol.org";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const infoMeta = {
  title: {
    en: "Property Info, House Rules & Directions | Sítio Girassol - São Roque, SP",
    pt: "Informações, Regras e Como Chegar | Sítio Girassol - São Roque, SP",
    es: "Información, Reglas y Cómo Llegar | Sítio Girassol - São Roque, SP",
  },
  description: {
    en: "House rules, pool rules, directions from São Paulo, nearby markets and amenities. Everything you need for your stay at Sítio Girassol in São Roque.",
    pt: "Regras da casa, regras da piscina, como chegar saindo de São Paulo, mercados e conveniências próximas. Tudo sobre sua estadia no Sítio Girassol em São Roque.",
    es: "Reglas de la casa, reglas de la piscina, cómo llegar desde São Paulo, mercados y conveniencias cercanas. Todo sobre tu estadía en Sítio Girassol en São Roque.",
  },
} as const;

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const loc = locale as "en" | "pt" | "es";
  const title = infoMeta.title[loc] ?? infoMeta.title.en;
  const description = infoMeta.description[loc] ?? infoMeta.description.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/listing-info`,
      languages: {
        en: `${BASE_URL}/en/listing-info`,
        pt: `${BASE_URL}/pt/listing-info`,
        es: `${BASE_URL}/es/listing-info`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/listing-info`,
    },
  };
}

function InfoBreadcrumbJsonLd({ locale }: { locale: string }) {
  const breadcrumb = {
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
        name: locale === "pt" ? "Informações" : locale === "es" ? "Información" : "Info",
        item: `${BASE_URL}/${locale}/listing-info`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function ListingInfoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("InfoPage");

  return (
    <div className="listing-info-page bg-[#141E19] text-white">
      <InfoBreadcrumbJsonLd locale={locale} />
      {/* Hero section */}
      <section className="pt-28 sm:pt-36 md:pt-40 pb-12 md:pb-20 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl mb-4 md:mb-6 leading-tight text-white">
          {t("titlePart1")}
          <br />
          <span className="italic text-accent-gold">{t("titlePart2")}</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </section>

      <InfoPageClient locale={locale as "en" | "pt" | "es"} />
    </div>
  );
}
