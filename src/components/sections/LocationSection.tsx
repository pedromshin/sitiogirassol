"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { listingConfig } from "@/data/listing.config";
import { trackEvent } from "@/lib/tracking";

export default function LocationSection() {
  const t = useTranslations("Location");
  const { mapEmbedUrl, generalAreaUrl } = listingConfig.location;
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding px-4 sm:px-6 md:px-10 bg-forest-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center border border-white/10 rounded-2xl overflow-hidden p-2 bg-forest-mid">
          <div
            ref={containerRef}
            className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden shrink-0 relative bg-forest-dark"
          >
            {showMap ? (
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
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/30">
                <span className="material-symbols-outlined text-4xl">map</span>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <span className="font-bold text-xs uppercase tracking-widest block mb-2 text-accent-gold">
              {t("label")}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">{t("title")}</h2>
            <p className="text-slate-300 font-light mb-6">{t("description")}</p>
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
              onClick={() => trackEvent("map_click", { location: "location_section" })}
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
