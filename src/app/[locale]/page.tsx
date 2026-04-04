import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";

const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: true });
const StatsFooterBar = dynamic(() => import("@/components/sections/StatsFooterBar"), {
  ssr: false,
  loading: () => <div className="h-24 bg-forest-dark" />,
});
const MetricsSection = dynamic(() => import("@/components/sections/MetricsSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-forest-dark" />,
});
const GalleryMarquee = dynamic(() => import("@/components/sections/GalleryMarquee"), { ssr: false });
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-forest-dark" />,
});
const LocationSection = dynamic(() => import("@/components/sections/LocationSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-forest-dark" />,
});
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-forest-dark" />,
});
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-forest-dark" />,
});
const CTASection = dynamic(() => import("@/components/sections/CTASection"), {
  ssr: false,
  loading: () => <div className="h-48 bg-forest-dark" />,
});

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="landing-custom overflow-x-hidden">
      <Hero3D />
      <StatsFooterBar />
      <MetricsSection />
      <GalleryMarquee />
      <FeaturesSection />
      <LocationSection />
      <CalendarSection />
      <FAQSection locale={locale as "en" | "pt" | "es"} />
      <CTASection />
    </div>
  );
}
