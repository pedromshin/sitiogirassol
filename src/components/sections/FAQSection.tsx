"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

type Locale = "en" | "pt" | "es";

const faqItems: Record<Locale, Array<{ question: string; answer: string }>> = {
  pt: [
    {
      question: "Onde fica o Sítio Girassol?",
      answer: "O Sítio Girassol fica em São Roque, SP, a aproximadamente 60 km de São Paulo. O acesso é pela Rodovia Castello Branco ou Raposo Tavares.",
    },
    {
      question: "Quantos quartos tem o Sítio Girassol?",
      answer: "São 3 quartos: suíte principal com cama king, segundo quarto com cama de casal e terceiro com beliche e colchões extras. Capacidade para até 6 hóspedes.",
    },
    {
      question: "A piscina é privativa?",
      answer: "Sim, a piscina é totalmente privativa, exclusiva para os hóspedes. A propriedade tem 2,6 hectares e é totalmente cercada.",
    },
    {
      question: "Aceita animais de estimação?",
      answer: "Sim! O Sítio Girassol é pet-friendly. Animais de estimação são bem-vindos na propriedade.",
    },
    {
      question: "Qual o valor da diária?",
      answer: `A diária a partir de R$ ${listingConfig.pricing.nightlyRate}. Oferecemos ${listingConfig.pricing.weeklyDiscountPercent}% de desconto para estadias semanais e ${listingConfig.pricing.monthlyDiscountPercent}% para mensais.`,
    },
    {
      question: "Tem churrasqueira?",
      answer: "Sim, a propriedade conta com duas churrasqueiras: uma na varanda coberta e outra na cozinha externa ao lado da piscina.",
    },
    {
      question: "Tem Wi-Fi?",
      answer: "Sim, a propriedade oferece Wi-Fi de alta velocidade em toda a casa.",
    },
    {
      question: "Quais atividades posso fazer no sítio?",
      answer: "Trilhas offroad, piscina, churrasqueira, quadra de tênis e vôlei, jogos de tabuleiro, redes para descanso, lareira e contemplação da natureza em 2,6 hectares preservados.",
    },
  ],
  en: [
    {
      question: "Where is Sítio Girassol located?",
      answer: "Sítio Girassol is located in São Roque, SP, approximately 60 km from São Paulo. Access is via Rodovia Castello Branco or Raposo Tavares highway.",
    },
    {
      question: "How many bedrooms does Sítio Girassol have?",
      answer: "There are 3 bedrooms: master suite with king bed, second bedroom with double bed, and third with bunk bed plus extra mattresses. Capacity for up to 6 guests.",
    },
    {
      question: "Is the pool private?",
      answer: "Yes, the pool is completely private, exclusive to guests. The property spans 2.6 hectares and is fully fenced.",
    },
    {
      question: "Are pets allowed?",
      answer: "Yes! Sítio Girassol is pet-friendly. Pets are welcome on the property.",
    },
    {
      question: "What is the nightly rate?",
      answer: `Rates start at R$ ${listingConfig.pricing.nightlyRate} per night. We offer ${listingConfig.pricing.weeklyDiscountPercent}% weekly and ${listingConfig.pricing.monthlyDiscountPercent}% monthly discounts.`,
    },
    {
      question: "Is there a BBQ grill?",
      answer: "Yes, the property has two BBQ grills: one on the covered balcony and another in the outdoor kitchen by the pool.",
    },
    {
      question: "Is there Wi-Fi?",
      answer: "Yes, the property offers high-speed Wi-Fi throughout the house.",
    },
    {
      question: "What activities can I do at the sítio?",
      answer: "Offroad trails, swimming pool, BBQ, tennis and volleyball court, board games, hammocks, fireplace, and nature contemplation across 2.6 hectares of preserved land.",
    },
  ],
  es: [
    {
      question: "¿Dónde queda Sítio Girassol?",
      answer: "Sítio Girassol está ubicado en São Roque, SP, aproximadamente a 60 km de São Paulo. Se accede por la Rodovia Castello Branco o Raposo Tavares.",
    },
    {
      question: "¿Cuántos dormitorios tiene Sítio Girassol?",
      answer: "Tiene 3 dormitorios: suite principal con cama king, segundo dormitorio con cama doble y tercero con litera y colchones extra. Capacidad para hasta 6 huéspedes.",
    },
    {
      question: "¿La piscina es privada?",
      answer: "Sí, la piscina es completamente privada, exclusiva para los huéspedes. La propiedad tiene 2,6 hectáreas y está completamente cercada.",
    },
    {
      question: "¿Se aceptan mascotas?",
      answer: "¡Sí! Sítio Girassol acepta mascotas. Las mascotas son bienvenidas en la propiedad.",
    },
    {
      question: "¿Cuál es el valor de la estadía?",
      answer: `Tarifas desde R$ ${listingConfig.pricing.nightlyRate} por noche. Ofrecemos ${listingConfig.pricing.weeklyDiscountPercent}% de descuento semanal y ${listingConfig.pricing.monthlyDiscountPercent}% mensual.`,
    },
    {
      question: "¿Tiene parrilla?",
      answer: "Sí, la propiedad cuenta con dos parrillas: una en la terraza cubierta y otra en la cocina exterior junto a la piscina.",
    },
    {
      question: "¿Tiene Wi-Fi?",
      answer: "Sí, la propiedad ofrece Wi-Fi de alta velocidad en toda la casa.",
    },
    {
      question: "¿Qué actividades puedo hacer en el sítio?",
      answer: "Senderos offroad, piscina, parrilla, cancha de tenis y voleibol, juegos de mesa, hamacas, chimenea y contemplación de la naturaleza en 2,6 hectáreas preservadas.",
    },
  ],
};

export default function FAQSection({ locale }: { locale: Locale }) {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqItems[locale] ?? faqItems.en;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-white leading-tight">
            {t("title")}
            <span className="italic text-accent-gold">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-white/60 text-base md:text-lg font-light max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/[0.03]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-white font-medium text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-accent-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/70 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
