"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

export default function GalleryMarquee() {
  // Duplicate photos for seamless loop
  const photos = [...listingConfig.photos, ...listingConfig.photos];

  return (
    <section className="products-section py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="products-header text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Gallery</h2>
          <p className="text-text-muted">Spaces and moments at Girassol</p>
        </motion.div>
      </div>
      <div className="products-marquee relative -mx-4">
        <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex gap-4 shrink-0 py-2 animate-marquee">
            {photos.map((photo, i) => (
              <div
                key={`${photo.category}-${i}`}
                className="marquee-item shrink-0 w-[260px] md:w-[280px]"
              >
                <div className="product-card rounded-xl overflow-hidden border border-primary-light/20 bg-white shadow-sm hover:shadow-lg transition h-[200px] md:h-[220px]">
                  <div className="product-preview relative w-full h-full bg-primary-mid/10">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
