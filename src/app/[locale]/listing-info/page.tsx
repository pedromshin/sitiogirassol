import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import InfoPageClient from "@/components/sections/InfoPageClient";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ListingInfoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("InfoPage");

  return (
    <div className="listing-info-page bg-forest-dark">
      {/* Hero section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-mid/50 via-transparent to-transparent pointer-events-none" />
        <div className="content-container-narrow relative z-10 text-center">
          <h1 className="text-4xl min-[556px]:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] text-white animate-fade-in-up">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-body font-medium tracking-normal leading-[1.2] mt-4 text-white/80 animate-fade-in-up delay-1">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <InfoPageClient locale={locale as "en" | "pt" | "es"} />
    </div>
  );
}
