"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GradientOverlay from "@/components/ui/GradientOverlay";
import { listingConfig } from "@/data/listing.config";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="gradient-section cta-section py-20 px-4 bg-primary text-white relative overflow-hidden">
      <GradientOverlay variant="dark" />
      <div className="cta-content relative z-10 container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          {t("title")}
        </motion.h2>
        <motion.a
          href={listingConfig.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="btn-custom btn-cta inline-flex items-center justify-center rounded-xl bg-accent px-10 py-4 text-lg font-semibold text-primary hover:bg-accent-light transition-colors shadow-lg"
        >
          {t("button")}
        </motion.a>
      </div>
    </section>
  );
}
