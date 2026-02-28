"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

const CATEGORY_KEYS: Record<string, string> = {
  Bathroom: "bathroom",
  "Bedroom and laundry": "bedroomAndLaundry",
  Entertainment: "entertainment",
  Family: "family",
  "Heating and cooling": "heatingAndCooling",
  "Internet and office": "internetAndOffice",
  "Kitchen and dining": "kitchenAndDining",
  "Location features": "locationFeatures",
  "Parking and facilities": "parkingAndFacilities",
  Services: "services",
};

export default function AmenitiesSection() {
  const t = useTranslations("Amenities");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-layer-1)" }}
    >
      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-display font-bold text-white mb-8 text-center"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {listingConfig.amenities.map((amenity, i) => {
            const key = CATEGORY_KEYS[amenity.category] ?? amenity.category;
            const tKey = t(key as "bathroom");
            const label = tKey !== key ? tKey : amenity.category;
            const isOpen = openCategory === amenity.category;

            return (
              <motion.div
                key={amenity.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border overflow-hidden transition"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  borderColor: "var(--color-card-border)",
                }}
              >
                <button
                  type="button"
                  className="w-full p-6 flex items-center justify-between text-left"
                  onClick={() => setOpenCategory(isOpen ? null : amenity.category)}
                >
                  <h3 className="text-xl font-display font-semibold text-white">{label}</h3>
                  <span className="text-2xl text-accent-gold">{isOpen ? "−" : "+"}</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {amenity.items.map((item) => (
                        <span
                          key={item}
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent-gold-muted text-accent-gold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {listingConfig.photos.slice(0, 4).map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition duration-300"
                sizes="(max-width: 640px) 50vw, 25vw"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
