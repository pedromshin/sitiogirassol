"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { listingConfig } from "@/data/listing.config";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      className="py-24 px-6 md:px-20 border-t border-white/5 mt-20 bg-forest-dark"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand + Description + Social */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-accent-gold">
                filter_vintage
              </span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                Girassol
              </h2>
            </div>
            <p className="text-white/40 leading-relaxed font-light">
              {t("description")}
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="w-5 h-5 text-white/30 hover:text-accent-gold transition-colors"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a
                href="#"
                className="w-5 h-5 text-white/30 hover:text-accent-gold transition-colors"
                aria-label="Share"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                href="mailto:contato@girassol.example.com"
                className="w-5 h-5 text-white/30 hover:text-accent-gold transition-colors"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div className="space-y-8">
            <h4 className="text-xs-caps font-black uppercase tracking-widest text-accent-gold">
              {t("navigation")}
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li>
                <Link href="/listing-info" className="hover:text-white transition-colors">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">
                  {t("photoGallery")}
                </Link>
              </li>
              <li>
                <Link href="/#amenities" className="hover:text-white transition-colors">
                  {t("amenities")}
                </Link>
              </li>
              <li>
                <a
                  href={listingConfig.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t("ratesAndReservations")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Suporte */}
          <div className="space-y-8">
            <h4 className="text-xs-caps font-black uppercase tracking-widest text-accent-gold">
              {t("support")}
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li>
                <Link href="/listing-info#faq" className="hover:text-white transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/listing-info#cancellation" className="hover:text-white transition-colors">
                  {t("cancellationPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t("termsOfUse")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs-caps font-black uppercase tracking-widest text-accent-gold">
              {t("newsletter")}
            </h4>
            <p className="text-white/40 text-sm font-light">
              {t("newsletterDesc")}
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent-gold/50 text-white placeholder-white/20"
              />
              <button
                type="button"
                className="absolute right-2 top-2 p-1 hover:opacity-80 transition-opacity text-accent-gold"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs-caps uppercase tracking-caps-tight font-bold text-white/20">
          <p>{t("allRightsReserved")}</p>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>{t("location")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">phone_iphone</span>
              <span>{t("phone")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
