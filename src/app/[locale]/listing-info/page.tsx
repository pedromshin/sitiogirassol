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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-12">{t("title")}</h1>
      <InfoPageClient locale={locale as "en" | "pt" | "es"} />
    </div>
  );
}
