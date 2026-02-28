"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="relative overflow-hidden rounded-section border border-white/10 py-24 px-8 mx-4 md:mx-10 mt-20 mb-20 backdrop-blur-sm bg-forest-mid">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display text-white leading-tight"
        >
          {t("titleLine1")}
          <span className="italic text-accent-gold">
            {t("titleHighlight")}
          </span>
        </motion.h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a
            href={listingConfig.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl border border-white/10 bg-forest-mid text-white"
          >
            {t("button").toUpperCase()}
          </a>
          <a
            href="mailto:contato@girassol.example.com"
            className="w-full sm:w-auto px-12 py-5 border-2 border-accent-gold text-accent-gold rounded-full font-bold text-lg transition-all hover:bg-accent-gold hover:text-forest-dark"
          >
            {t("consultant").toUpperCase()}
          </a>
        </div>
      </div>
    </section>
  );
}
