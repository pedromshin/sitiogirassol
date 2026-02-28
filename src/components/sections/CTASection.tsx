"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-white/10 py-24 px-8 mx-4 md:mx-10 mt-20 mb-20 backdrop-blur-sm"
      style={{ backgroundColor: "#1A2620" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display text-white leading-tight"
        >
          {t("titleLine1")}
          <span className="italic" style={{ color: "#d4af37" }}>
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
            className="w-full sm:w-auto px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl border"
            style={{
              backgroundColor: "#1A2620",
              borderColor: "rgba(255,255,255,0.1)",
              color: "white",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
            }}
          >
            {t("button").toUpperCase()}
          </a>
          <a
            href="mailto:contato@girassol.example.com"
            className="w-full sm:w-auto px-12 py-5 border-2 rounded-full font-bold text-lg transition-all"
            style={{
              borderColor: "#d4af37",
              color: "#d4af37",
            }}
          >
            {t("consultant").toUpperCase()}
          </a>
        </div>
      </div>
    </section>
  );
}
