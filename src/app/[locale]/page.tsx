import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";

const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: true });
const StatsFooterBar = dynamic(() => import("@/components/sections/StatsFooterBar"), { ssr: true });
const MetricsSection = dynamic(() => import("@/components/sections/MetricsSection"), { ssr: false });
const ThesisSection = dynamic(() => import("@/components/sections/ThesisSection"), { ssr: false });
const GalleryMarquee = dynamic(() => import("@/components/sections/GalleryMarquee"), { ssr: false });
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), { ssr: false });
const LocationSection = dynamic(() => import("@/components/sections/LocationSection"), { ssr: false });
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/sections/CTASection"), { ssr: false });

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
      {/* <ThesisSection /> */}
      <GalleryMarquee />
      <FeaturesSection />
      <LocationSection />
      <CalendarSection />
      <CTASection />
    </div>
  );
}
