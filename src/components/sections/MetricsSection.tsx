"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

const CheckIcon = () => (
  <svg
    className="h-8 w-8 inline-block"
    style={{ color: "#d4af37" }}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 13l4 4L19 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

const METRIC_KEYS = [
  "bedrooms",
  "beds",
  "bathrooms",
  "maxGuests",
  "size",
  "pool",
  "nature",
  "nightlyRate",
] as const;

type MetricKey = (typeof METRIC_KEYS)[number];

function getMetricValue(key: MetricKey): string | number {
  switch (key) {
    case "bedrooms":
      return listingConfig.property.bedrooms;
    case "beds":
      return listingConfig.property.beds;
    case "bathrooms":
      return listingConfig.property.bathrooms;
    case "maxGuests":
      return listingConfig.property.maxGuests;
    case "size":
      return `${listingConfig.property.sizeSqm} m²`;
    case "pool":
      return "check";
    case "nature":
      return "2.6 ha";
    case "nightlyRate":
      return `R$ ${listingConfig.pricing.nightlyRate}`;
    default:
      return "";
  }
}

export default function MetricsSection() {
  const t = useTranslations("Metrics");

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      style={{ backgroundColor: "#141E19" }}
      data-purpose="property-summary"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display mb-6"
        >
          {t("title")}
          <span className="font-serif-italic" style={{ color: "#d4af37" }}>
            {t("titleHighlight")}
          </span>
        </motion.h2>
        <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold">
          {t("subtitle")}
        </p>
        <div className="w-24 h-px bg-[#d4af37] mx-auto mt-6 opacity-50" />
      </div>

      {/* Stats Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        data-purpose="summary-grid"
      >
        {METRIC_KEYS.map((key, i) => {
          const value = getMetricValue(key);
          const descKey = `${key}Desc` as const;

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="stat-card p-8 flex flex-col items-center text-center rounded-xl"
            >
              <span className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                {t(key)}
              </span>
              <div
                className="text-3xl font-display mb-1"
                style={{ color: "#d4af37" }}
              >
                {value === "check" ? <CheckIcon /> : value}
              </div>
              <p className="text-sm text-gray-300">{t(descKey)}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Tagline */}
      <div className="mt-24 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display leading-tight"
        >
          {t("taglinePart1")}
          <span className="font-serif-italic" style={{ color: "#d4af37" }}>
            {t("taglineHighlight")}
          </span>
        </motion.h3>
      </div>
    </section>
  );
}
