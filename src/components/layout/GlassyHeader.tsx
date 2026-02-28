"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { listingConfig } from "@/data/listing.config";

export default function GlassyHeader() {
  const t = useTranslations("Header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-white hover:text-[#e9c46a] transition font-medium text-sm uppercase tracking-wide"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("home")}
      </Link>
      <Link
        href="/listing-info"
        className="text-white/70 hover:text-white transition font-medium text-sm uppercase tracking-wide"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("info")}
      </Link>
      <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-6">
        <LanguageSwitcher />
      </div>
      <a
        href={listingConfig.airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block px-6 py-2.5 rounded-lg text-sm font-bold transition shadow-md hover:opacity-90"
        style={{
          backgroundColor: "#e9c46a",
          color: "#141E19",
          boxShadow: "0 4px 6px -1px rgba(233, 196, 106, 0.1)",
        }}
      >
        {t("bookOnAirbnb")}
      </a>
    </>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md border-b border-white/10"
      style={{ backgroundColor: "rgba(20, 30, 25, 0.95)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          data-purpose="brand-identity"
        >
          <div className="w-10 h-10 flex items-center justify-center text-[#e9c46a]">
            <span className="material-symbols-outlined text-3xl">filter_vintage</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Sítio Girassol
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">{navLinks}</div>
        <div className="flex items-center gap-4 md:hidden">
          <a
            href={listingConfig.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-bold"
            style={{ backgroundColor: "#e9c46a", color: "#141E19" }}
          >
            {t("bookOnAirbnb")}
          </a>
          <button
            type="button"
            className="p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4 border-t border-white/10"
          style={{ backgroundColor: "#141E19" }}
        >
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white font-medium">
            {t("home")}
          </Link>
          <Link href="/listing-info" onClick={() => setMobileMenuOpen(false)} className="text-white font-medium">
            {t("info")}
          </Link>
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}
