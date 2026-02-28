"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { PhotoCategory } from "@/data/listing.config";
import { listingConfig } from "@/data/listing.config";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CATEGORY_LABELS: Record<PhotoCategory, string> = {
  "living-room": "livingRoom",
  "dining-area": "diningArea",
  "bedroom-1": "bedroom",
  "bedroom-2": "bedroom",
  "bedroom-3": "bedroom",
  "bathroom-1": "bathroom",
  "bathroom-2": "bathroom",
  "bathroom-3": "bathroom",
  exterior: "exterior",
  pool: "pool",
  additional: "additional",
};

export default function PhotoCarousel() {
  const t = useTranslations("PhotoCarousel");
  const [activeFilter, setActiveFilter] = useState<PhotoCategory | "all">("all");

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "all") return listingConfig.photos;
    return listingConfig.photos.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const categories = useMemo(() => {
    const cats = new Set<PhotoCategory>();
    listingConfig.photos.forEach((p) => cats.add(p.category));
    return Array.from(cats);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-8 text-center"
        >
          Gallery
        </motion.h2>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <motion.button
            onClick={() => setActiveFilter("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeFilter === "all"
                ? "bg-primary text-white"
                : "bg-accent-light/50 text-primary hover:bg-accent-light"
            }`}
          >
            {t("all")}
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === cat
                  ? "bg-primary text-white"
                  : "bg-accent-light/50 text-primary hover:bg-accent-light"
              }`}
            >
              {t(CATEGORY_LABELS[cat])}
            </motion.button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden bg-primary-mid/10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="aspect-video"
          >
            {filteredPhotos.length > 0 ? (
              filteredPhotos.map((photo, i) => (
                <SwiperSlide key={`${photo.category}-${i}`}>
                  <div className="relative w-full aspect-video bg-primary-mid/20">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="w-full aspect-video bg-primary-mid/20 flex items-center justify-center text-text-muted">
                  No photos in this category
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
