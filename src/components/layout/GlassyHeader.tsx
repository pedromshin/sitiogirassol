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
        className="text-white/90 hover:text-white transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("home")}
      </Link>
      <Link
        href="/listing-info"
        className="text-white/90 hover:text-white transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("info")}
      </Link>
      <a
        href={listingConfig.airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-primary hover:bg-accent/90 transition"
      >
        {t("bookOnAirbnb")}
      </a>
      <LanguageSwitcher />
    </>
  );

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 glass"
      style={{
        background: "rgba(28, 59, 51, 0.7)",
      }}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold text-white">
          Girassol
        </Link>
        <div className="hidden md:flex items-center gap-6">{navLinks}</div>
        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary/95 px-4 py-4 flex flex-col gap-4">
          {navLinks}
        </div>
      )}
    </header>
  );
}
