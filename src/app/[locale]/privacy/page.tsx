import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations("Privacy");

  const sections = [
    { title: t("dataCollectedTitle"), body: t("dataCollectedBody") },
    { title: t("purposeTitle"), body: t("purposeBody") },
    { title: t("thirdPartiesTitle"), body: t("thirdPartiesBody") },
    { title: t("cookiesTitle"), body: t("cookiesBody") },
    { title: t("rightsTitle"), body: t("rightsBody") },
    { title: t("contactTitle"), body: t("contactBody") },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-sm text-white/50 mb-12">{t("lastUpdated")}</p>

        <div className="space-y-10">
          <p className="text-white/80 leading-relaxed">{t("intro")}</p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-display font-semibold text-white mb-3">
                {section.title}
              </h2>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
