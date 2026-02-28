"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GradientOverlay from "@/components/ui/GradientOverlay";

export default function MissionSection() {
  const t = useTranslations("Mission");

  return (
    <section
      className="gradient-section mission-section section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-layer-2)" }}
    >
      <GradientOverlay variant="dark" />
      <div className="gradient-content relative z-10 content-container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight text-neutral-50"
        >
          {t("headline")}
          <strong className="block mt-2" style={{ color: "var(--color-yellow)" }}>
            {t("highlight")}
          </strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mission-description text-lg md:text-xl max-w-2xl mx-auto text-neutral-400 font-body"
        >
          {t("description")}
        </motion.p>
      </div>
    </section>
  );
}
