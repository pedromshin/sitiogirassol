"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { AMENITY_CATEGORIES } from "@/data/amenities.config";
import type { Locale } from "@/data/amenities.config";
import { trackEvent } from "@/lib/tracking";

export default function FeaturesSection() {
  const t = useTranslations("Amenities");
  const tCta = useTranslations("Features");
  const rawLocale = useLocale();
  const locale: Locale =
    rawLocale?.startsWith("pt") ? "pt" : rawLocale?.startsWith("es") ? "es" : "en";
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    AMENITY_CATEGORIES.forEach((cat, i) => {
      initial[cat.id] = i < 2; // First 2 categories expanded by default
    });
    return initial;
  });
  const [expandAll, setExpandAll] = useState(false);

  const filtered = useMemo(() => {
    if (!search.trim()) return AMENITY_CATEGORIES;
    const q = search.toLowerCase().trim();
    return AMENITY_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.title.en.toLowerCase().includes(q) ||
          item.title.pt.toLowerCase().includes(q) ||
          item.title.es.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [search]);

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = () => {
    const next = !expandAll;
    setExpandAll(next);
    setExpanded(
      Object.fromEntries(AMENITY_CATEGORIES.map((c) => [c.id, next]))
    );
  };

  return (
    <motion.section
      id="amenities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section-padding rounded-2xl mx-3 sm:mx-4 md:mx-10 bg-forest-dark border border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-10">
        <div className="mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <div className="h-1 w-20 rounded-full mx-auto mb-4 bg-accent-gold" />
          <p className="text-slate-300 mt-4 max-w-xl mx-auto font-light">
            {t("subtitle")}
          </p>
        </div>

        {/* Search + expand all */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <label htmlFor="amenity-search" className="sr-only">{t("searchPlaceholder")}</label>
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" aria-hidden="true">
              search
            </span>
            <input
              id="amenity-search"
              type="text"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value.length === 3) {
                  trackEvent("amenity_search", { search_string: e.target.value });
                }
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-forest-mid border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-accent-gold/50 transition-colors"
            />
          </div>
          <button
            type="button"
            onClick={toggleAll}
            className="shrink-0 px-4 py-2.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-accent-gold/30 transition-colors text-sm font-medium"
          >
            {expandAll ? t("collapseAll") : t("expandAll")}
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-white/10 overflow-hidden bg-forest-mid"
              >
                <button
                  type="button"
                  onClick={() => toggle(cat.id)}
                  aria-expanded={expanded[cat.id]}
                  aria-label={t(cat.titleKey)}
                  className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="size-9 rounded-lg flex items-center justify-center bg-accent-gold-muted text-accent-gold shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        {cat.icon}
                      </span>
                    </div>
                    <span className="font-display font-medium text-white truncate">
                      {t(cat.titleKey)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-white/80 text-sm tabular-nums">
                      {cat.items.length}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`material-symbols-outlined text-slate-400 transition-transform duration-200 ${expanded[cat.id] ? "rotate-180" : ""
                        }`}
                    >
                      expand_more
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {expanded[cat.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 border-t border-white/5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {cat.items.map((item) => (
                            <div
                              key={item.id}
                              title={item.desc?.[locale]}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-forest-dark/50 hover:bg-forest-dark/80 transition-colors group"
                            >
                              <span className="material-symbols-outlined text-2xl text-accent-gold/80 group-hover:text-accent-gold shrink-0">
                                {item.icon}
                              </span>
                              <span className="text-slate-300 text-sm truncate group-hover:text-white transition-colors">
                                {item.title[locale]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-8">{t("noResults")}</p>
        )}

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.airbnb.com/rooms/1345960842338220775"
            onClick={() => trackEvent("airbnb_click", { location: "features_cta" })}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl bg-accent-gold text-forest-mid hover:bg-white"
          >
            {tCta("requestDetails")}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
