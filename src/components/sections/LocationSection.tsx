"use client";

import { useTranslations } from "next-intl";
import { listingConfig } from "@/data/listing.config";

export default function LocationSection() {
  const t = useTranslations("Location");
  const { mapEmbedUrl, generalAreaUrl } = listingConfig.location;

  return (
    <section className="section-padding px-4 sm:px-6 md:px-10 bg-forest-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center border border-white/10 rounded-2xl overflow-hidden p-2 bg-forest-mid">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden shrink-0 relative">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapAlt")}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <span className="font-bold text-xs uppercase tracking-widest block mb-2 text-accent-gold">
              {t("label")}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-4">{t("title")}</h3>
            <p className="text-slate-400 font-light mb-6">{t("description")}</p>
            <div className="flex items-center gap-3 text-white mb-8">
              <span className="material-symbols-outlined text-accent-gold">
                distance
              </span>
              <span className="text-sm">{t("nearbyHighlight")}</span>
            </div>
            <a
              href={generalAreaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-block py-4 px-8 border-2 border-accent-gold text-accent-gold rounded-xl font-bold text-sm uppercase tracking-wider transition-all text-center hover:bg-accent-gold hover:text-forest-mid"
            >
              {t("viewFullMap")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
