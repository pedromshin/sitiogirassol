"use client";

import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { listingConfig } from "@/data/listing.config";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] bg-primary-mid/20 rounded-2xl flex items-center justify-center">
      <div className="animate-pulse text-accent-light/60">Loading...</div>
    </div>
  ),
});

export default function Hero3D() {
  const locale = (useLocale() || "en") as "en" | "pt" | "es";
  const headline = listingConfig.hero.headline[locale] ?? listingConfig.hero.headline.en;
  const subheadline = listingConfig.hero.subheadline[locale] ?? listingConfig.hero.subheadline.en;

  return (
    <section className="hero-section relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/20 via-transparent to-surface pointer-events-none" />
      <div className="relative z-10 flex-1 max-w-2xl">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 leading-tight"
            >
              {headline}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-light mb-4"
            >
              {subheadline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="hero-description text-lg md:text-xl text-text-muted mb-8"
            >
              {listingConfig.meta.description[locale] ?? listingConfig.meta.description.en}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="hero-buttons flex flex-wrap gap-4"
            >
              <a
                href={listingConfig.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-mid transition-colors shadow-lg"
              >
                Book on Airbnb
              </a>
              <Link
                href="/listing-info"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-4 text-lg font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                View Info
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hero-image relative z-10 w-full max-w-lg aspect-square hidden md:block"
      >
        <Scene3D />
      </motion.div>
    </section>
  );
}
