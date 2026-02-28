"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const AMENITIES = [
  { id: "connectivity", icon: "wifi", titleKey: "connectivity", descKey: "connectivityDesc" },
  { id: "pool", icon: "pool", titleKey: "privateLeisure", descKey: "privateLeisureDesc" },
  { id: "parking", icon: "local_parking", titleKey: "parking", descKey: "parkingDesc" },
  { id: "security", icon: "security", titleKey: "security", descKey: "securityDesc" },
  { id: "fitness", icon: "fitness_center", titleKey: "fitness", descKey: "fitnessDesc" },
  { id: "wine", icon: "wine_bar", titleKey: "wineCellar", descKey: "wineCellarDesc" },
  { id: "cinema", icon: "home_speaker", titleKey: "cinema", descKey: "cinemaDesc" },
  { id: "spa", icon: "spa", titleKey: "spa", descKey: "spaDesc" },
] as const;

export default function FeaturesSection() {
  const t = useTranslations("Amenities");
  const tCta = useTranslations("Features");
  const locale = useLocale() as "en" | "pt" | "es";

  return (
    <motion.section
      id="amenities"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="section-padding rounded-2xl mx-4 md:mx-10"
      style={{ backgroundColor: "#141E19", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <div className="h-1 w-20 rounded-full mx-auto mb-4" style={{ backgroundColor: "#d4af37" }} />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-lg hover:shadow-[#d4af37]/5"
              style={{
                backgroundColor: "#1A2620",
                borderColor: "rgba(212, 175, 55, 0.2)",
              }}
            >
              <div
                className="size-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(212, 175, 55, 0.1)", color: "#d4af37" }}
              >
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h4 className="text-white font-display text-lg mb-1">{t(item.titleKey)}</h4>
              <p className="text-slate-400 text-sm font-light">{t(item.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:contato@girassol.example.com"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:bg-white"
            style={{
              backgroundColor: "#d4af37",
              color: "#1A2620",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            {tCta("requestDetails")}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
