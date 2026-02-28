"use client";

import { useTranslations } from "next-intl";

const STATS = [
  { value: "2.6ha", labelKey: "areaVerde" },
  { value: "3", labelKey: "suites" },
  { value: "Piscina", labelKey: "climatizada" },
  { value: "60km", labelKey: "deSaoPaulo" },
] as const;

export default function StatsFooterBar() {
  const t = useTranslations("StatsFooterBar");

  return (
    <section
      className="border-t border-white/5 py-20 bg-forest-dark"
      data-purpose="quick-info"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.labelKey}
              className={`text-center ${i > 0 ? "border-l border-white/10" : ""}`}
            >
              <div className="font-display text-3xl mb-1 text-warm-gold">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
