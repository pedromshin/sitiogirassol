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
    <div className="listing-info-page bg-[#141E19] text-white">
      {/* Hero section - matches HTML reference */}
      <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight text-white">
          {t("titlePart1")}
          <br />
          <span className="italic text-accent-gold">{t("titlePart2")}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </section>

      <InfoPageClient locale={locale as "en" | "pt" | "es"} />
    </div>
  );
}
