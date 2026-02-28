"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";
import GradientOverlay from "@/components/ui/GradientOverlay";

export default function MetricsSection() {
  const t = useTranslations("Metrics");

  const metrics = [
    { key: "bedrooms", value: listingConfig.property.bedrooms, labelKey: "bedrooms" },
    { key: "beds", value: listingConfig.property.beds, labelKey: "beds" },
    { key: "bathrooms", value: listingConfig.property.bathrooms, labelKey: "bathrooms" },
    { key: "maxGuests", value: listingConfig.property.maxGuests, labelKey: "maxGuests" },
    { key: "sizeSqm", value: `${listingConfig.property.sizeSqm} m²`, labelKey: "size" },
    { key: "pool", value: "✓", labelKey: "pool" },
    { key: "nature", value: "2.6 ha", labelKey: "nature" },
    { key: "nightlyRate", value: `R$ ${listingConfig.pricing.nightlyRate}`, labelKey: "nightlyRate" },
  ];

  return (
    <section className="gradient-section metrics-section py-20 px-4 bg-primary/5">
      <GradientOverlay />
      <div className="gradient-content relative z-10 container mx-auto max-w-6xl">
        <div className="metrics-header text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-2"
          >
            {t("title")}
          </motion.h2>
          <p className="text-text-muted">{t("subtitle")}</p>
        </div>
        <div className="metrics-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="metric-item rounded-xl border border-primary-light/20 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="metric-label block text-sm font-medium text-text-muted mb-1">
                {t(metric.labelKey)}
              </span>
              <span className="metric-value text-2xl font-bold text-primary">{metric.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
