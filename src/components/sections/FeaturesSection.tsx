"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { listingConfig } from "@/data/listing.config";
import { motion, AnimatePresence } from "framer-motion";

const FEATURE_KEYS = [
  "bedrooms",
  "beds",
  "bathrooms",
  "maxGuests",
  "sizeSqm",
  "pool",
  "nature",
  "bbq",
  "wifi",
  "parking",
  "pets",
] as const;

type FeatureKey = (typeof FEATURE_KEYS)[number];

interface Feature {
  id: FeatureKey;
  label: Record<string, string>;
  value: string | number;
  description?: Record<string, string>;
}

function buildFeatures(config: typeof listingConfig, locale: string): Feature[] {
  const loc = (locale || "en") as "en" | "pt" | "es";
  return [
    { id: "bedrooms", label: { en: "Bedrooms", pt: "Quartos", es: "Dormitorios" }, value: config.property.bedrooms },
    { id: "beds", label: { en: "Beds", pt: "Camas", es: "Camas" }, value: config.property.beds },
    { id: "bathrooms", label: { en: "Bathrooms", pt: "Banheiros", es: "Baños" }, value: config.property.bathrooms },
    { id: "maxGuests", label: { en: "Max guests", pt: "Hóspedes máx", es: "Huéspedes máx" }, value: config.property.maxGuests },
    { id: "sizeSqm", label: { en: "Size", pt: "Tamanho", es: "Tamaño" }, value: `${config.property.sizeSqm} m²` },
    { id: "pool", label: { en: "Pool", pt: "Piscina", es: "Piscina" }, value: "✓", description: { en: "Pool with waterfall", pt: "Piscina com cascata", es: "Piscina con cascada" } },
    { id: "nature", label: { en: "Nature", pt: "Natureza", es: "Naturaleza" }, value: "2.6 ha", description: { en: "Hectares of nature", pt: "Hectares de natureza", es: "Hectáreas de naturaleza" } },
    { id: "bbq", label: { en: "BBQ", pt: "Churrasqueira", es: "Parrilla" }, value: "2", description: { en: "BBQ areas", pt: "Áreas de churrasco", es: "Áreas de parrilla" } },
    { id: "wifi", label: { en: "WiFi", pt: "WiFi", es: "WiFi" }, value: "✓" },
    { id: "parking", label: { en: "Parking", pt: "Estacionamento", es: "Estacionamiento" }, value: "Free" },
    { id: "pets", label: { en: "Pets", pt: "Animais", es: "Mascotas" }, value: "Allowed" },
  ];
}

export default function FeaturesSection() {
  const t = useTranslations("Amenities");
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<FeatureKey | null>(null);

  const features = useMemo(() => buildFeatures(listingConfig, locale || "en"), [locale]);
  const filtered = useMemo(() => {
    if (!search.trim()) return features;
    const q = search.toLowerCase();
    return features.filter(
      (f) =>
        (f.label.en?.toLowerCase().includes(q) ||
          f.label.pt?.toLowerCase().includes(q) ||
          f.label.es?.toLowerCase().includes(q) ||
          String(f.value).toLowerCase().includes(q))
    );
  }, [features, search]);

  const categoryCount = useMemo(() => {
    const count: Record<string, number> = {};
    listingConfig.amenities.forEach((a) => {
      count[a.category] = (count[a.category] || 0) + a.items.length;
    });
    return count;
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 bg-accent-light/20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-4 text-center"
        >
          {t("title")}
        </motion.h2>
        <p className="text-center text-text-muted mb-8 max-w-2xl mx-auto">
          {Object.keys(categoryCount).length} categories,{" "}
          {Object.values(categoryCount).reduce((a, b) => a + b, 0)} amenities
        </p>

        <div className="mb-8">
          <input
            type="search"
            placeholder="Search features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-3 rounded-xl border border-primary-light/30 bg-white focus:ring-2 focus:ring-accent focus:border-accent outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((feature, i) => {
              const loc = (locale || "en") as "en" | "pt" | "es";
              const label = feature.label[loc] ?? feature.label.en;
              const desc = feature.description?.[loc] ?? feature.description?.en;
              const isExpanded = expandedId === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-primary-light/20 bg-white p-4 shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : feature.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-primary">{label}</h3>
                      <p className="text-lg font-bold text-accent mt-1">
                        {feature.value}
                      </p>
                    </div>
                    {desc && (
                      <span className="text-text-muted text-sm">
                        {isExpanded ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                  <AnimatePresence>
                    {isExpanded && desc && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 text-sm text-text-muted"
                      >
                        {desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-8">No features match your search.</p>
        )}
      </div>
    </motion.section>
  );
}
