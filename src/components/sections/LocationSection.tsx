"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { listingConfig } from "@/data/listing.config";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMnWej_aPvl_gz3h3JT3k-r-TF4Hk45iHJxk9E6F7KCyuE2adS1-V5lij5NK71HsciBXlZaRZ3kKDxtouixs5EKGVOnhweJH8GQgGlSKWjWlAbNdExZ_N3qJl6oma8UK-wz7EgYl5mM3-s1VLiqsZ9Pe5qM8hnJLf2amcJ6djpwoAuXPHLZMHByPIxfNSIURx8i2DDjbC24nAjYbQS8uTMeS8fOoOouEXy_J_J53tV-_im5pMr1N-qDFTl4Rvymyrgo7Q9M3UaYZo";

export default function LocationSection() {
  const t = useTranslations("Location");
  const mapUrl = listingConfig.nearbyPlaces[0]?.url ?? "https://maps.app.goo.gl/T4AyvKtfkvXzrEA67";

  return (
    <section className="section-padding px-4 md:px-10" style={{ backgroundColor: "#141E19" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center border border-white/10 rounded-2xl overflow-hidden p-2" style={{ backgroundColor: "#1A2620" }}>
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden shrink-0 relative">
            <Image
              src={MAP_IMAGE}
              alt={t("mapAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <span
              className="font-bold text-xs uppercase tracking-widest block mb-2"
              style={{ color: "#d4af37" }}
            >
              {t("label")}
            </span>
            <h3 className="font-display text-3xl text-white mb-4">{t("title")}</h3>
            <p className="text-slate-400 font-light mb-6">{t("description")}</p>
            <div className="flex items-center gap-3 text-white mb-8">
              <span className="material-symbols-outlined" style={{ color: "#d4af37" }}>
                distance
              </span>
              <span className="text-sm">{t("nearbyHighlight")}</span>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-block py-4 px-8 border-2 rounded-xl font-bold text-sm uppercase tracking-wider transition-all text-center"
              style={{
                borderColor: "#d4af37",
                color: "#d4af37",
              }}
            >
              {t("viewFullMap")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
