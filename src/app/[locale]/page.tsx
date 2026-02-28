import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";

const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: true });
const PhotoCarousel = dynamic(() => import("@/components/sections/PhotoCarousel"), { ssr: false });
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), { ssr: true });
const AmenitiesSection = dynamic(() => import("@/components/sections/AmenitiesSection"), { ssr: true });
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"), { ssr: false });

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Hero3D />
      <PhotoCarousel />
      <FeaturesSection />
      <AmenitiesSection />
      <CalendarSection />
    </div>
  );
}
