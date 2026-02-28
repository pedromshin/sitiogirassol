"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GradientOverlay from "@/components/ui/GradientOverlay";

export default function MissionSection() {
  const t = useTranslations("Mission");

  return (
    <section className="gradient-section mission-section py-20 px-4 bg-primary text-white relative overflow-hidden">
      <GradientOverlay variant="dark" />
      <div className="gradient-content relative z-10 container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          {t("headline")}
          <strong className="highlight text-accent-light block mt-2">{t("highlight")}</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mission-description text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          {t("description")}
        </motion.p>
      </div>
    </section>
  );
}
