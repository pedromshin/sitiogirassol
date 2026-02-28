"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

const PILLARS = [
  {
    id: "nature",
    icon: "eco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDC3AyP5-1wsmkHPDLOCKBCkL4nAj3InA7ZhkE2EWwJw95WB5cVFfSM4KYQS_9dAe9oN141_nfYMaAORmKahow1MO1TAJj1yPfGaExPv-_iAoojCVa9aCzsyvel6PX4eJakttGthggBHFUr9U_sdasiwp7UKvZ4uNhsixwmBnjWyhArfqvkaGNufsAQLP_AdscsbbXx3dSacCAS5NinZAv0dAGWn-Dh4WbDJMhpb4riBAJ3OOM7GFO_dlqN3QlQmRE1zwKk77A4vMc",
  },
  {
    id: "comfort",
    icon: "bed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIN1YpQhRzaZEAMLYYjWviSTJ6rKt_nkLk_p0-CmkzEAMVXRq91C6yCMUvKruPZqNmeM8vQ4BsAwXxyf_Act3AqZqm9oU9wCLvrRGBu-Ck6WNh92ZLQNh2nHYDgxPzinP3Me-d5mLWkz3qRxJ9BUlT-opcprY8iUQL2njLqLp034poTNejeRJc3GzNv2FfiTw0ZfHzpEgjuQ5SxBdB9upfpUa2UqYhEss2KfhTf64ax_DX5-DpKj38munXzDkMu_fN-gw9y7Eck6A",
  },
  {
    id: "experience",
    icon: "explore",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZRQeX3rEnPA-fTg_V6rAeJjXEBugBt8jrtNdrgjKLhSeN0-hHb-AN5o7aC9efaKm6X_oQiad5nb0l-ehJOfc9wHVZc6IMg9jEobEaKTuVIAr5M0uFUzHsYTd9XBM_D3euJctnzYlbp1TXFHCmYoKSxY2FmYsI70VbjA7BZWvGCQ0HOwm58ZP5waYMvRx3mjs78CTTzI1rSt0C0LcJaPvrpIX9oT1d73eazvtqNhyLvXjLWRSaODyySLEQcg9gFZoBIQs-yN5Axjs",
  },
] as const;

export default function ThesisSection() {
  const t = useTranslations("Thesis");

  return (
    <>
      <section
        className="py-20 lg:py-32 px-6 lg:px-20 bg-forest-dark"
      >
        <div className="max-w-5xl mx-auto text-center">
          <span className="uppercase tracking-caps text-xs-caps font-black mb-4 block text-accent-gold">
            {t("essenceSubtitle")}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display mb-8 leading-tight text-white"
          >
            {t("title")}
          </motion.h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section
        className="pb-32 px-6 lg:px-20 bg-forest-dark"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 transition-all hover:bg-forest-hover hover:border-accent-gold-border-hover shadow-xl bg-forest-mid"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full border border-accent-gold-border-hover mb-8 group-hover:scale-110 transition-transform duration-500 bg-forest-dark">
                  <span className="material-symbols-outlined text-4xl text-accent-gold">
                    {pillar.icon}
                  </span>
                </div>
                <h2 className="text-2xl font-display mb-4 tracking-wide text-white group-hover:text-accent-gold transition-colors">
                  {t(`${pillar.id}Title`)}
                </h2>
                <p className="text-white/80 leading-relaxed font-light mb-10 text-sm">
                  {t(`${pillar.id}Desc`)}
                </p>
                <div className="w-full h-72 overflow-hidden rounded-lg mb-2 shadow-2xl">
                  <div className="w-full h-full relative transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={pillar.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-accent-gold">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display mb-12 tracking-tight text-forest-dark-btn"
        >
          {t("ctaTitle")}
        </motion.h3>
        <a
          href={listingConfig.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-14 py-6 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-elevated hover:-translate-y-1 bg-forest-dark-btn text-white"
        >
          {t("ctaButton")}
        </a>
      </section>
    </>
  );
}
