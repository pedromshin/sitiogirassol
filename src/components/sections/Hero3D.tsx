"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { listingConfig } from "@/data/listing.config";
import { useState, useEffect } from "react";
import BrandIcon from "@/components/ui/BrandIcon";

const HERO_BG_IMAGES = [
  "/bg/DSC_0559.JPG",
  "/bg/DSC_0573.JPG",
  "/bg/DSC_0581.JPG",
  "/bg/DSC_0586.JPG",
  "/bg/DSC_0589.JPG",
  "/bg/DSC_0599.JPG",
  "/bg/DSC_0757.JPG",
  "/bg/DSC_0697.JPG",
  "/bg/DSC_0702.JPG",
  "/bg/DSC_0704.JPG",
  "/bg/DSC_0705.JPG",
  "/bg/DSC_0712.JPG",
  "/bg/DSC_0798.JPG",
];

const ROTATE_INTERVAL_MS = 3000;


export default function Hero3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % HERO_BG_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);
  const locale = (useLocale() || "pt") as "en" | "pt" | "es";
  const t = useTranslations("Header");
  const tHero = useTranslations("Hero");
  const tAria = useTranslations("Common");
  const hero = listingConfig.hero;
  const headline = hero.headline[locale] ?? hero.headline.en;
  const headlineItalic = hero.headlineItalic[locale] ?? hero.headlineItalic.en;
  const subheadline = hero.subheadline[locale] ?? hero.subheadline.en;
  const paragraph = hero.paragraph[locale] ?? hero.paragraph.en;
  const tagline = hero.visual.tagline[locale] ?? hero.visual.tagline.en;
  const taglineUppercase = hero.visual.taglineUppercase[locale] ?? hero.visual.taglineUppercase.en;

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % HERO_BG_IMAGES.length);
  };
  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + HERO_BG_IMAGES.length) % HERO_BG_IMAGES.length);
  };

  return (
    <main
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-20 sm:pb-24"
      data-purpose="hero-banner"
      style={{ backgroundColor: "var(--color-bg-layer-1)" }}
    >
      {/* Background Image Layer - only render nearby slides for performance */}
      <div className="absolute inset-0 z-0">
        {HERO_BG_IMAGES.map((src, i) => {
          const prev = (currentIndex - 1 + HERO_BG_IMAGES.length) % HERO_BG_IMAGES.length;
          const next = (currentIndex + 1) % HERO_BG_IMAGES.length;
          const isVisible = i === currentIndex || i === prev || i === next;
          if (!isVisible) return null;
          return (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: i === currentIndex ? 1 : 0,
                zIndex: i === currentIndex ? 1 : 0,
              }}
            >
              <Image
                alt="Property view"
                src={src}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          );
        })}
        {/* Dark overlay for text readability - lighter on mobile to show more background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-mid/70 via-forest-mid/35 to-transparent md:from-forest-mid/95 md:via-forest-mid/60 md:to-transparent z-[2]"
          aria-hidden
        />
      </div>

      {/* Carousel controls */}
      <div
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-16 z-20 flex items-center gap-2 md:gap-3"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="size-10 flex items-center justify-center shrink-0 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label={tAria("previousImage")}
        >
          <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
        </button>
        <span className="text-white/80 text-sm tabular-nums min-w-[3ch]">
          {currentIndex + 1} / {HERO_BG_IMAGES.length}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="size-10 flex items-center justify-center shrink-0 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label={tAria("nextImage")}
        >
          <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
        </button>
      </div>

      <div className="relative z-10 content-container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-12 sm:py-16 lg:py-24">
        {/* Content Container with glassy blur background - compact on mobile to reveal background */}
        <div
          className="w-full max-w-[min(92%,22rem)] sm:max-w-[28rem] md:max-w-xl mx-auto md:mx-0 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-xl bg-white/5 border border-white/20 shadow-xl"
          data-purpose="hero-content"
        >
          {/* Logo Icon Subtitle */}
          <div
            className="mb-3 sm:mb-6 inline-block p-2 sm:p-3 rounded-lg border border-warm-gold-border"
          >
            <BrandIcon size={40} />
          </div>

          <h1
            className="text-2xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-3 md:mb-6 tracking-tight"
          >
            {headline}{" "}
            <span className="text-warm-gold italic font-display">{headlineItalic}</span>
          </h1>

          <p
            className="text-base sm:text-xl md:text-2xl text-white/90 font-light mb-2 md:mb-4"
          >
            {subheadline}
          </p>

          <p
            className="text-sm sm:text-lg text-white/70 mb-4 md:mb-10 leading-relaxed max-w-lg"
          >
            {paragraph.includes(". ") ? (
              <>
                {paragraph.split(". ")[0]}. <br />
                <strong>{paragraph.split(". ").slice(1).join(". ")}</strong>
              </>
            ) : (
              paragraph
            )}
          </p>

          {/* CTA Group */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            data-purpose="hero-actions"
          >
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:w-auto px-8 py-4 font-bold rounded-lg text-center transition-all duration-300 hover:opacity-90 shadow-lg bg-warm-gold text-forest-dark"
            >
              {t("bookOnAirbnb")}
            </a>
            {listingConfig.whatsappNumber && (
              <a
                href={`https://wa.me/${listingConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Tenho interesse em reservar o Sítio Girassol 🌻")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full sm:w-auto px-8 py-4 font-bold rounded-lg text-center transition-all duration-300 hover:opacity-90 shadow-lg bg-[#25D366] text-white flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {tHero("whatsappCta")}
              </a>
            )}
            <Link
              href="/listing-info"
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
            >
              {t("info")}
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-accent-gold text-sm">verified</span>
              {tHero("trustExclusive")}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-accent-gold text-sm">location_on</span>
              {tHero("trustLocation")}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-accent-gold text-sm">group</span>
              {tHero("trustCapacity", { guests: listingConfig.property.maxGuests })}
            </span>
          </div>
        </div>

        {/* Hero Visual Element - HIDDEN WHILE NOT EXISTENT 3D MODEL*/}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative"
          data-purpose="hero-visual"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] p-8 backdrop-blur-md"
            style={{ background: "var(--color-hero-visual-bg)" }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                <Image
                  alt="Property sketch"
                  src={HERO_VISUAL_IMAGE}
                  fill
                  className="object-contain mix-blend-lighten"
                />
              </div>
              <div className="mt-auto text-center relative z-10">
                <span className="block font-display text-3xl italic mb-2 text-warm-gold">
                  {tagline}
                </span>
                <span className="text-white/60 text-sm tracking-[0.2em] uppercase">
                  {taglineUppercase}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </main>
  );
}
