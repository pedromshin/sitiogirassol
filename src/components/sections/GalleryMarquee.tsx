"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";
import type { PhotoCategory } from "@/data/listing.config";

const CATEGORY_LABELS: Record<PhotoCategory, Record<string, string>> = {
  "living-room": { en: "Living Room", pt: "Sala de Estar", es: "Sala de estar" },
  "dining-area": { en: "Dining Area", pt: "Área de Jantar", es: "Área de comedor" },
  "bedroom-1": { en: "Master Suite", pt: "Suíte Master", es: "Suite principal" },
  "bedroom-2": { en: "Bedroom 2", pt: "Quarto 2", es: "Dormitorio 2" },
  "bedroom-3": { en: "Bedroom 3", pt: "Quarto 3", es: "Dormitorio 3" },
  "bathroom-1": { en: "Bathroom", pt: "Banheiro", es: "Baño" },
  "bathroom-2": { en: "Bathroom 2", pt: "Banheiro 2", es: "Baño 2" },
  "bathroom-3": { en: "Bathroom 3", pt: "Banheiro 3", es: "Baño 3" },
  exterior: { en: "Garden View", pt: "Vista do jardim", es: "Vista del jardín" },
  pool: { en: "Pool", pt: "Piscina", es: "Piscina" },
  additional: { en: "Property", pt: "Propriedade", es: "Propiedad" },
};

const CATEGORY_DESCS: Record<PhotoCategory, Record<string, string>> = {
  "living-room": { en: "Panoramic view to the garden", pt: "Vista panorâmica para o jardim", es: "Vista panorámica al jardín" },
  "dining-area": { en: "Spacious dining space", pt: "Espaço amplo para refeições", es: "Amplio espacio para comidas" },
  "bedroom-1": { en: "Absolute comfort and privacy", pt: "Conforto absoluto e privacidade", es: "Confort absoluto y privacidad" },
  "bedroom-2": { en: "Cozy accommodation", pt: "Acomodação aconchegante", es: "Alojamiento acogedor" },
  "bedroom-3": { en: "Restful retreat", pt: "Refúgio tranquilo", es: "Refugio tranquilo" },
  "bathroom-1": { en: "Italian marble finish", pt: "Acabamento em mármore italiano", es: "Acabado en mármol italiano" },
  "bathroom-2": { en: "Full amenities", pt: "Comodidades completas", es: "Comodidades completas" },
  "bathroom-3": { en: "Modern design", pt: "Design moderno", es: "Diseño moderno" },
  exterior: { en: "2.6 hectares of nature", pt: "2,6 hectares de natureza", es: "2,6 hectáreas de naturaleza" },
  pool: { en: "Private pool with waterfall", pt: "Piscina privativa com cascata", es: "Piscina privada con cascada" },
  additional: { en: "São Roque countryside", pt: "Campo de São Roque", es: "Campo de São Roque" },
};

function getFirstPhotoPerCategory() {
  const seen = new Set<PhotoCategory>();
  return listingConfig.photos.filter((p) => {
    if (seen.has(p.category)) return false;
    seen.add(p.category);
    return true;
  });
}

export default function GalleryMarquee() {
  const t = useTranslations("Gallery");
  const locale = useLocale() as "en" | "pt" | "es";
  const featuredPhotos = getFirstPhotoPerCategory();
  const heroPhoto = listingConfig.photos.find((p) => p.category === "exterior" || p.category === "pool") ?? listingConfig.photos[0];

  return (
    <section id="gallery" className="section-padding bg-forest-dark">
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-10">
        {/* Hero Gallery Highlight */}
        {heroPhoto && (
          <div className="group relative overflow-hidden rounded-xl aspect-[21/9] mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-forest-mid via-transparent to-transparent opacity-60 z-10" />
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute bottom-6 left-8 z-20">
              <span className="inline-block px-3 py-1 font-bold text-xs uppercase tracking-widest rounded mb-2 bg-accent-gold text-forest-mid">
                {t("exclusive")}
              </span>
              <h1 className="font-display text-4xl text-white">{t("panoramicView")}</h1>
            </div>
          </div>
        )}

        {/* Gallery Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{t("title")}</h2>
          <Link
            href="/listing-info"
            className="flex items-center gap-2 text-sm font-semibold hover:underline transition-colors text-accent-gold"
          >
            {t("viewAll")}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex overflow-x-auto gap-6 pb-6 px-2 snap-x no-scrollbar">
          {featuredPhotos.map((photo, i) => {
            const label = CATEGORY_LABELS[photo.category]?.[locale] ?? CATEGORY_LABELS[photo.category]?.en ?? photo.category;
            const desc = CATEGORY_DESCS[photo.category]?.[locale] ?? CATEGORY_DESCS[photo.category]?.en ?? "";
            return (
              <motion.div
                key={`${photo.category}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[320px] md:min-w-[400px] snap-start group cursor-pointer shrink-0"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-3 border border-white/5 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                </div>
                <h3 className="text-white font-display text-lg">{label}</h3>
                <p className="text-slate-400 text-sm font-light">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
