"use client";

import { useTranslations } from "next-intl";
import { listingConfig } from "@/data/listing.config";

type Props = { locale: "en" | "pt" | "es" };

/** Section id -> { titleIcon, decorativeIcon } for Material Symbols */
const SECTION_ICONS: Record<
  string,
  { titleIcon: string; decorativeIcon: string }
> = {
  directions: { titleIcon: "location_on", decorativeIcon: "place" },
  shopping: { titleIcon: "storefront", decorativeIcon: "shopping_bag" },
  "house-rules": { titleIcon: "cottage", decorativeIcon: "home" },
  "pool-rules": { titleIcon: "pool", decorativeIcon: "water" },
  "pool-schedule": { titleIcon: "schedule", decorativeIcon: "cleaning_services" },
};

/** Nearby place type -> Material Symbol name */
const PLACE_ICONS: Record<string, string> = {
  property: "location_on",
  market: "store",
  pharmacy: "local_pharmacy",
  bakery: "bakery_dining",
  default: "local_grocery_store",
};

function InfoSection({
  index,
  section,
  locale,
  isReversed,
}: {
  index: number;
  section: (typeof listingConfig.infoSections)[0];
  locale: "en" | "pt" | "es";
  isReversed: boolean;
}) {
  const title = section.title[locale] ?? section.title.en;
  const content = section.content[locale] ?? section.content.en;
  const icons = SECTION_ICONS[section.id] ?? {
    titleIcon: "info",
    decorativeIcon: "circle",
  };

  const badge = (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-1">
      <div className="relative">
        <div className="bg-accent-gold text-[#141E19] font-bold text-2xl h-16 w-16 rounded flex items-center justify-center shadow-xl z-10 relative">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div
          className={`absolute -bottom-4 text-accent-gold opacity-20 ${isReversed ? "-left-4" : "-right-4"
            }`}
        >
          <span className="material-symbols-outlined text-8xl">
            {icons.decorativeIcon}
          </span>
        </div>
      </div>
    </div>
  );

  const textBlock = (
    <div
      className={`w-full md:w-1/2 text-center md:text-left order-2 md:order-2 ${isReversed ? "md:text-right" : ""
        }`}
    >
      <h2
        className={`font-display text-4xl mb-6 flex items-center gap-4 text-white ${isReversed
            ? "justify-center md:justify-end"
            : "justify-center md:justify-start"
          }`}
      >
        {isReversed && (
          <span className="material-symbols-outlined text-accent-gold text-3xl">
            {icons.titleIcon}
          </span>
        )}
        {title}
        {!isReversed && (
          <span className="material-symbols-outlined text-accent-gold text-3xl">
            {icons.titleIcon}
          </span>
        )}
      </h2>
      <p
        className={`text-lg text-white/80 leading-relaxed ${isReversed ? "md:text-right" : ""
          }`}
      >
        {content}
      </p>
    </div>
  );

  const badgeReversed = (
    <div className="w-full md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
      <div className="relative">
        <div className="bg-accent-gold text-[#141E19] font-bold text-2xl h-16 w-16 rounded flex items-center justify-center shadow-xl z-10 relative">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="absolute -bottom-4 -left-4 text-accent-gold opacity-20">
          <span className="material-symbols-outlined text-8xl">
            {icons.decorativeIcon}
          </span>
        </div>
      </div>
    </div>
  );

  if (isReversed) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group">
        {textBlock}
        {badgeReversed}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group">
      {badge}
      {textBlock}
    </div>
  );
}

export default function InfoPageClient({ locale }: Props) {
  const t = useTranslations("InfoPage");
  const tCta = useTranslations("CTA");
  const nearbyPlaces = listingConfig.nearbyPlaces;

  return (
    <div className="space-y-0">
      {/* Main info sections - alternating layout */}
      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
        {listingConfig.infoSections.map((section, i) => (
          <InfoSection
            key={section.id}
            index={i}
            section={section}
            locale={locale}
            isReversed={i % 2 === 1}
          />
        ))}
      </main>

      {/* Nearby places */}
      <section className="py-24 bg-[#141E19] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-white">
              {t("nearbyPlaces")}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {listingConfig.shopping[locale] ?? listingConfig.shopping.en}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {nearbyPlaces.map((place, i) => (
              <a
                key={place.name}
                href={place.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#1A2620] p-4 rounded-lg flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group border border-white/5 ${i === nearbyPlaces.length - 1 ? "md:col-span-2" : ""
                  }`}
              >
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-gray-300 group-hover:text-accent-gold transition-colors">
                  <span className="material-symbols-outlined">
                    {PLACE_ICONS[place.type] ?? PLACE_ICONS.default}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">{place.name}</h3>
                  {place.distance && (
                    <p className="text-sm text-gray-400">{place.distance}</p>
                  )}
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-accent-gold transition-colors flex-shrink-0">
                  open_in_new
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#141E19]">
        <div className="absolute inset-0 bg-[#141E19] opacity-50 z-0" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-[#1A2620] border border-white/10 rounded-2xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="font-display text-4xl md:text-5xl mb-8 text-white">
              {tCta("title")}
            </h2>
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-[#D9B954] text-[#141E19] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-accent-gold/30"
            >
              {tCta("button")}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
