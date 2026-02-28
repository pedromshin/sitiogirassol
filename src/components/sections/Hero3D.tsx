"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { listingConfig } from "@/data/listing.config";

const HERO_BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4zAf0IKyYUKzXfNAZSg9oOqtUMWwxfS8aoPPuy6OFIWngT2qfi-m38I-2kbplAIrl3l1SUWyc-_2cL2rPEmfMGjoOAxR18rsfKWhCnc0YPCcyeIpmg5sZ1mpds9tBIQkDr9d0_dZ7zeKvM2UDclneP72Zj8zm6tgulpTV5bLZYKSFwbRgLZGVE9dB_HPkytM0U3VEKHmPfwHnYs5Kt8EJ18Vy-1oq8prm-VTAz8L0VxpjqkqAntjOmKkvQK_0vA4GXmapniwdbIU";
const HERO_VISUAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSEcDblUGWj1jciBOYkDm7BhVRw3EsNd_GVrKZxmUv7_lU6apBiKzfbP0IAdjc6UjCFEZNvUvQGe2Z8aSWiZuwkncuaEHfLARnEWbFvsChMNnJ45rcbH6oyXY8YSUk-O_YOCxozENFi5aEaZV5V-hFXEWTupM4NTaApAw-7vSkJyebnwUKBDtqddOqn29tFIu_4KsMejwrQM_YcJeZyUMehGb5gvujVxgtgtujRVPC93lpT41afWTM4iEofHV-iXlXbcnGjydpC7Q";

export default function Hero3D() {
  const locale = (useLocale() || "pt") as "en" | "pt" | "es";
  const hero = listingConfig.hero;
  const headline = hero.headline[locale] ?? hero.headline.en;
  const headlineItalic = hero.headlineItalic[locale] ?? hero.headlineItalic.en;
  const subheadline = hero.subheadline[locale] ?? hero.subheadline.en;
  const paragraph = hero.paragraph[locale] ?? hero.paragraph.en;
  const tagline = hero.visual.tagline[locale] ?? hero.visual.tagline.en;
  const taglineUppercase = hero.visual.taglineUppercase[locale] ?? hero.visual.taglineUppercase.en;

  return (
    <main
      className="relative min-h-screen flex items-center pt-20"
      data-purpose="hero-banner"
      style={{ backgroundColor: "var(--color-bg-layer-1)" }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Beautiful tranquil forest with mountain view"
          src={HERO_BG_IMAGE}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-mid/95 via-forest-mid/60 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 content-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        {/* Content Container */}
        <div className="max-w-2xl" data-purpose="hero-content">
          {/* Logo Icon Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-block p-3 rounded-lg border border-warm-gold-border"
          >
            <span className="material-symbols-outlined text-warm-gold text-4xl">filter_vintage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            {headline}{" "}
            <span className="text-warm-gold italic font-display">{headlineItalic}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 font-light mb-4"
          >
            {subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg"
          >
            {paragraph.includes(". ") ? (
              <>
                {paragraph.split(". ")[0]}. <br />
                <strong>{paragraph.split(". ").slice(1).join(". ")}</strong>
              </>
            ) : (
              paragraph
            )}
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
            data-purpose="hero-actions"
          >
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 font-bold rounded-lg text-center transition-all duration-300 hover:opacity-90 shadow-lg bg-warm-gold text-forest-dark"
            >
              Book on Airbnb
            </a>
            <Link
              href="/listing-info"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
            >
              View Info
            </Link>
          </motion.div>
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
