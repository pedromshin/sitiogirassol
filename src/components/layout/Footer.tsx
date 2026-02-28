"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { listingConfig } from "@/data/listing.config";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="static-footer border-t border-primary-light/30 bg-primary text-white/80" role="contentinfo">
      <div className="footer-content container mx-auto px-4 py-16">
        <div className="footer-columns grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Property</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-accent-light/90 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listing-info" className="text-accent-light/90 hover:text-white transition">
                  {t("info")}
                </Link>
              </li>
              <li>
                <a
                  href={listingConfig.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light/90 hover:text-white transition"
                >
                  Book on Airbnb
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t("nearbyPlaces")}</h4>
            <ul className="space-y-2">
              {listingConfig.nearbyPlaces.slice(0, 4).map((place) => (
                <li key={place.url}>
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-light/90 hover:text-white transition"
                  >
                    {place.name}
                    {place.distance && ` (${place.distance})`}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t("directions")}</h4>
            <p className="text-accent-light/90 text-sm">
              São Roque, SP — Castello Branco km 54B, Raposo Tavares
            </p>
          </div>
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <a
              href={listingConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent/20 px-4 py-2 text-sm font-medium text-accent-light hover:bg-accent/30 transition"
            >
              Book via Airbnb
            </a>
          </div>
        </div>
        <div className="footer-bottom border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">{t("allRightsReserved")}</p>
          <span className="text-xl font-semibold text-white">Girassol</span>
        </div>
      </div>
    </footer>
  );
}
