import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { listingConfig } from "@/data/listing.config";
import GlassyHeader from "@/components/layout/GlassyHeader";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sitiogirassol.org";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as "en" | "pt" | "es";
  const title = listingConfig.meta.title[loc] ?? listingConfig.meta.title.en;
  const description = listingConfig.meta.description[loc] ?? listingConfig.meta.description.en;

  const ogImage = `${BASE_URL}/icons/og-image.png`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Sítio Girassol",
      locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        pt: `${BASE_URL}/pt`,
        es: `${BASE_URL}/es`,
      },
    },
    keywords: locale === "pt"
      ? ["sítio girassol", "chácara para alugar São Roque", "aluguel temporada São Roque SP", "casa com piscina para alugar interior SP", "chácara perto de São Paulo", "sítio com piscina São Roque"]
      : locale === "es"
      ? ["sítio girassol", "finca vacacional São Roque", "alquiler vacacional São Paulo", "casa con piscina São Roque"]
      : ["sítio girassol", "vacation rental São Roque", "house with pool São Paulo countryside", "nature retreat São Roque SP"],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "pt" | "es")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <JsonLd locale={locale} />
      <div className="min-h-screen flex flex-col">
        <GlassyHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <StickyMobileCTA />
    </NextIntlClientProvider>
  );
}
