"use client";

import { motion } from "framer-motion";
import { listingConfig } from "@/data/listing.config";

type Props = { locale: "en" | "pt" | "es" };

export default function InfoPageClient({ locale }: Props) {
  return (
    <div className="space-y-12">
      {listingConfig.infoSections.map((section, i) => {
        const title = section.title[locale] ?? section.title.en;
        const content = section.content[locale] ?? section.content.en;

        return (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-primary-light/20 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
            <div className="prose prose-primary max-w-none text-text-muted whitespace-pre-line">
              {content}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
