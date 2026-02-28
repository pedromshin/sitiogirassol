"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { listingConfig } from "@/data/listing.config";
import GradientOverlay from "@/components/ui/GradientOverlay";

type Props = { locale: "en" | "pt" | "es" };

const SECTION_ICONS: Record<string, React.ReactNode> = {
  directions: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  shopping: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "house-rules": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "pool-rules": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  "pool-schedule": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function InfoPageClient({ locale }: Props) {
  const t = useTranslations("InfoPage");
  const tCta = useTranslations("CTA");
  const nearbyPlaces = listingConfig.nearbyPlaces;

  return (
    <div className="space-y-0">
      {/* Info sections - thesis-style numbered cards */}
      {listingConfig.infoSections.map((section, i) => {
        const title = section.title[locale] ?? section.title.en;
        const content = section.content[locale] ?? section.content.en;
        const icon = SECTION_ICONS[section.id] ?? null;
        const isEven = i % 2 === 0;

        return (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative section-padding"
            style={{
              backgroundColor: isEven ? "#141E19" : "#1A2620",
            }}
          >
            {!isEven && <GradientOverlay variant="light" />}
            <div className="content-container-narrow relative z-10">
              <div
                className={`flex flex-col gap-8 md:gap-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-start`}
              >
                {/* Left: number + icon + title */}
                <div className="flex-shrink-0 w-full md:w-72">
                  <div className="flex items-center gap-4">
                    <div className="card-badge w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg" style={{ backgroundColor: "#d4af37", color: "#141E19" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{title}</h2>
                      {icon && (
                        <div className="mt-2" style={{ color: "#d4af37" }}>{icon}</div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  <div className="prose prose-lg prose-invert max-w-none text-gray-300 whitespace-pre-line leading-relaxed">
                    {content}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Nearby places - gradient section */}
      <section className="gradient-section py-20 px-4 text-white relative overflow-hidden" style={{ backgroundColor: "#1A2620" }}>
        <GradientOverlay variant="dark" />
        <div className="gradient-content relative z-10 container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-2 text-center"
          >
            {t("nearbyPlaces")}
          </motion.h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {listingConfig.shopping[locale] ?? listingConfig.shopping.en}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyPlaces.map((place, i) => (
              <motion.a
                key={place.name}
                href={place.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white truncate group-hover:text-[#d4af37] transition-colors">
                    {place.name}
                  </p>
                  {place.distance && (
                    <p className="text-sm text-white/70">{place.distance}</p>
                  )}
                </div>
                <svg className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#141E19" }}>
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 p-8 md:p-12"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              backgroundColor: "#1A2620",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {tCta("title")}
            </h2>
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#d4af37",
                color: "#141E19",
              }}
            >
              {tCta("button")} →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
