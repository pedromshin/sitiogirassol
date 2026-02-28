"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: "nature",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V8m0-4.065V4a2 2 0 012-2h2.945M12 12v2.945M12 12V9.055M12 12H9.055M12 12H14.945M3.055 11V9.055M3.055 11H5.945M21 12v2.945M21 12H18.055M21 12H21.945M12 21v-2.945M12 21H9.055M12 21h2.945M3 21V18.055M3 21H5.945M3 21H3.055" />
      </svg>
    ),
  },
  {
    id: "comfort",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "experience",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ThesisSection() {
  const t = useTranslations("Thesis");

  return (
    <section className="thesis-section py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="thesis-header text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-2"
          >
            {t("title")}
          </motion.h2>
          <p className="text-text-muted text-lg">{t("subtitle")}</p>
        </div>
        <div className="thesis-cards grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="thesis-card rounded-2xl border border-primary-light/20 bg-white p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="card-badge w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-6">
                {i + 1}
              </div>
              <div className="card-icon mb-4">{card.icon}</div>
              <div className="card-text">
                <h3 className="text-xl font-bold text-primary mb-2">{t(`${card.id}Title`)}</h3>
                <p className="text-text-muted">{t(`${card.id}Desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
