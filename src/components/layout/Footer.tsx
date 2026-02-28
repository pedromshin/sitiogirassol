"use client";

import { useTranslations } from "next-intl";
import { listingConfig } from "@/data/listing.config";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-primary-light/30 bg-primary text-white/80">
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-lg font-semibold text-white mb-4">{t("nearbyPlaces")}</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {listingConfig.nearbyPlaces.map((place) => (
            <a
              key={place.url}
              href={place.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-white transition"
            >
              {place.name}
              {place.distance && ` (${place.distance})`}
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-white/60">{t("allRightsReserved")}</p>
      </div>
    </footer>
  );
}
