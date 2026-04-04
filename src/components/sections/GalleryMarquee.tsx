"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { listingConfig } from "@/data/listing.config";
import type { PhotoCategory } from "@/data/listing.config";
import SectionContainer from "@/components/ui/SectionContainer";
import "swiper/css";

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
  const tAria = useTranslations("Common");
  const locale = useLocale() as "en" | "pt" | "es";
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const featuredPhotos = getFirstPhotoPerCategory();

  return (
    <section id="gallery" className="section-padding bg-forest-dark">
      <SectionContainer size="wide">
        {/* Hero Gallery Highlight - Pool with waterfall (DSC_0712) */}
        <div className="group relative overflow-hidden rounded-xl aspect-[21/9] mb-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-forest-mid via-transparent to-transparent opacity-60 z-10" />
          <Image
            src="/bg/DSC_0712.JPG"
            alt={t("heroAlt")}
            fill
            className="object-cover object-[25%_50%] transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
            quality={60}
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 z-20">
            <span className="inline-block px-3 py-1 font-bold text-xs uppercase tracking-widest rounded mb-2 bg-accent-gold text-forest-mid">
              {t("heroBadge")}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">{t("heroTitle")}</h2>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{t("title")}</h2>
          <Link
            href="/listing-info"
            className="flex items-center gap-2 text-sm font-semibold hover:underline transition-colors text-accent-gold"
          >
            {t("viewAll")}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Swiper Carousel - proper UI component */}
        <div className="relative">
          <Swiper
            onSwiper={setSwiperInstance}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {featuredPhotos.map((photo, i) => {
              const label = CATEGORY_LABELS[photo.category]?.[locale] ?? CATEGORY_LABELS[photo.category]?.en ?? photo.category;
              const desc = CATEGORY_DESCS[photo.category]?.[locale] ?? CATEGORY_DESCS[photo.category]?.en ?? "";
              return (
                <SwiperSlide key={`${photo.category}-${i}`}>
                  <Link href="/listing-info" className="block group/card">
                    <div className="stat-card rounded-xl overflow-hidden border border-white/5 p-0 transition-all duration-300 group-hover/card:border-accent-gold/30 group-hover/card:shadow-xl">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-display text-lg font-semibold">{label}</h3>
                        <p className="text-slate-300 text-sm font-light mt-1">{desc}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom navigation arrows */}
          <button
            type="button"
            aria-label={tAria("previous")}
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-forest-mid/90 border border-white/10 text-accent-gold flex items-center justify-center hover:bg-forest-hover hover:border-accent-gold/30 transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            type="button"
            aria-label={tAria("next")}
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-forest-mid/90 border border-white/10 text-accent-gold flex items-center justify-center hover:bg-forest-hover hover:border-accent-gold/30 transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </SectionContainer>
    </section>
  );
}
