"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
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

const HERO_VISUAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSEcDblUGWj1jciBOYkDm7BhVRw3EsNd_GVrKZxmUv7_lU6apBiKzfbP0IAdjc6UjCFEZNvUvQGe2Z8aSWiZuwkncuaEHfLARnEWbFvsChMNnJ45rcbH6oyXY8YSUk-O_YOCxozENFi5aEaZV5V-hFXEWTupM4NTaApAw-7vSkJyebnwUKBDtqddOqn29tFIu_4KsMejwrQM_YcJeZyUMehGb5gvujVxgtgtujRVPC93lpT41afWTM4iEofHV-iXlXbcnGjydpC7Q";

export default function Hero3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % HERO_BG_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);
  const locale = (useLocale() || "pt") as "en" | "pt" | "es";
  const hero = listingConfig.hero;
  const headline = hero.headline[locale] ?? hero.headline.en;
  const headlineItalic = hero.headlineItalic[locale] ?? hero.headlineItalic.en;
  const subheadline = hero.subheadline[locale] ?? hero.subheadline.en;
  const paragraph = hero.paragraph[locale] ?? hero.paragraph.en;
  const tagline = hero.visual.tagline[locale] ?? hero.visual.tagline.en;
  const taglineUppercase = hero.visual.taglineUppercase[locale] ?? hero.visual.taglineUppercase.en;

  const goNext = () => {
    // #region agent log
    fetch("http://127.0.0.1:7544/ingest/6ae883c0-8043-415b-a15d-acccd7823a99", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "7cd407" },
      body: JSON.stringify({
        sessionId: "7cd407",
        location: "Hero3D.tsx:goNext",
        message: "goNext called",
        data: { currentIndex },
        timestamp: Date.now(),
        hypothesisId: "B",
      }),
    }).catch(() => {});
    // #endregion
    setCurrentIndex((i) => (i + 1) % HERO_BG_IMAGES.length);
  };
  const goPrev = () => {
    // #region agent log
    fetch("http://127.0.0.1:7544/ingest/6ae883c0-8043-415b-a15d-acccd7823a99", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "7cd407" },
      body: JSON.stringify({
        sessionId: "7cd407",
        location: "Hero3D.tsx:goPrev",
        message: "goPrev called",
        data: { currentIndex },
        timestamp: Date.now(),
        hypothesisId: "B",
      }),
    }).catch(() => {});
    // #endregion
    setCurrentIndex((i) => (i - 1 + HERO_BG_IMAGES.length) % HERO_BG_IMAGES.length);
  };

  return (
    <main
      className="relative min-h-screen flex items-center pt-20"
      data-purpose="hero-banner"
      style={{ backgroundColor: "var(--color-bg-layer-1)" }}
    >
      {/* Background Image Layer - rotating carousel (click to advance) */}
      <div className="absolute inset-0 z-0">
        {HERO_BG_IMAGES.map((src, i) => (
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
              unoptimized
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-mid/95 via-forest-mid/60 to-transparent z-[2]"
          aria-hidden
        />
      </div>

      {/* Carousel controls */}
      <div
        className="absolute bottom-8 right-8 md:right-16 z-20 flex items-center gap-3"
        onClick={() => {
          // #region agent log
          fetch("http://127.0.0.1:7544/ingest/6ae883c0-8043-415b-a15d-acccd7823a99", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "7cd407" },
            body: JSON.stringify({
              sessionId: "7cd407",
              location: "Hero3D.tsx:controls-container",
              message: "Controls container clicked",
              data: {},
              timestamp: Date.now(),
              hypothesisId: "A",
            }),
          }).catch(() => {});
          // #endregion
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            // #region agent log
            fetch("http://127.0.0.1:7544/ingest/6ae883c0-8043-415b-a15d-acccd7823a99", {
              method: "POST",
              headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "7cd407" },
              body: JSON.stringify({
                sessionId: "7cd407",
                location: "Hero3D.tsx:prev-button",
                message: "Prev button onClick fired",
                data: {},
                timestamp: Date.now(),
                hypothesisId: "A,E",
              }),
            }).catch(() => {});
            // #endregion
            e.stopPropagation();
            goPrev();
          }}
          className="p-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
        </button>
        <span className="text-white/80 text-sm tabular-nums min-w-[3ch]">
          {currentIndex + 1} / {HERO_BG_IMAGES.length}
        </span>
        <button
          type="button"
          onClick={(e) => {
            // #region agent log
            fetch("http://127.0.0.1:7544/ingest/6ae883c0-8043-415b-a15d-acccd7823a99", {
              method: "POST",
              headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "7cd407" },
              body: JSON.stringify({
                sessionId: "7cd407",
                location: "Hero3D.tsx:next-button",
                message: "Next button onClick fired",
                data: {},
                timestamp: Date.now(),
                hypothesisId: "A,E",
              }),
            }).catch(() => {});
            // #endregion
            e.stopPropagation();
            goNext();
          }}
          className="p-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
        </button>
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
            <BrandIcon size={48} />
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
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:w-auto px-8 py-4 font-bold rounded-lg text-center transition-all duration-300 hover:opacity-90 shadow-lg bg-warm-gold text-forest-dark"
            >
              Book on Airbnb
            </a>
            <Link
              href="/listing-info"
              onClick={(e) => e.stopPropagation()}
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
