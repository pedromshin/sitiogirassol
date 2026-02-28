import { listingConfig } from "@/data/listing.config";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://girassol.example.com";

export default function JsonLd({ locale }: { locale: string }) {
  const title = listingConfig.meta.title[locale as "en" | "pt" | "es"] ?? listingConfig.meta.title.en;
  const description = listingConfig.meta.description[locale as "en" | "pt" | "es"] ?? listingConfig.meta.description.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: title,
    description,
    image: listingConfig.photos.slice(0, 5).map((p) => `${BASE_URL}${p.src}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Roque",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    numberOfRooms: listingConfig.property.bedrooms,
    numberOfBathroomsTotal: listingConfig.property.bathrooms,
    amenityFeature: listingConfig.amenities.flatMap((a) =>
      a.items.map((item) => ({
        "@type": "LocationFeatureSpecification",
        name: item,
        value: true,
      }))
    ),
    offers: {
      "@type": "Offer",
      price: listingConfig.pricing.nightlyRate,
      priceCurrency: listingConfig.pricing.currency,
      availability: "https://schema.org/InStock",
    },
    url: listingConfig.airbnbUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
