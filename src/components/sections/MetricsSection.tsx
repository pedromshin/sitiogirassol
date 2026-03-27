"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

const CheckIcon = () => (
  <svg
    className="h-8 w-8 inline-block text-accent-gold"
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
  "balcony",
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
    case "balcony":
      return "check";
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
      className="py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-forest-dark"
      data-purpose="property-summary"
    >
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 md:mb-6"
        >
          {t("title")}
          <span className="font-serif-italic text-accent-gold">
            {t("titleHighlight")}
          </span>
        </motion.h2>
        <p className="text-gray-400 uppercase tracking-caps-tight text-xs-caps md:text-xs font-semibold">
          {t("subtitle")}
        </p>
        <div className="w-24 h-px bg-accent-gold mx-auto mt-6 opacity-50" />
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
              className="stat-card p-4 sm:p-6 md:p-8 flex flex-col items-center text-center rounded-xl"
            >
              <span className="text-gray-300 text-xs uppercase tracking-wider mb-2">
                {t(key)}
              </span>
              <div className="text-3xl font-display mb-1 text-accent-gold">
                {value === "check" ? <CheckIcon /> : value}
              </div>
              <p className="text-sm text-gray-300">{t(descKey)}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Tagline */}
      <div className="mt-16 md:mt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl font-display leading-tight"
        >
          {t("taglinePart1")}
          <span className="font-serif-italic text-accent-gold">
            {t("taglineHighlight")}
          </span>
        </motion.p>
      </div>
    </section>
  );
}
