"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CONSENT_KEY = "cookie_consent";

type ConsentState = "accepted" | "declined" | null;

export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentState;
}

export function hasAnalyticsConsent(): boolean {
  return getConsentState() === "accepted";
}

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentState();
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Analytics scripts are already loaded (afterInteractive) — just send the events
    if (typeof window !== "undefined") {
      if (typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as Window & { fbq: (...args: unknown[]) => void }).fbq("track", "PageView");
      }
      if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "page_view");
      }
    }
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
      role="dialog"
      aria-label={t("title")}
    >
      <div className="max-w-3xl mx-auto bg-forest-dark/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 text-sm text-white/80 leading-relaxed">
            <p className="font-semibold text-white mb-1">{t("title")}</p>
            <p>
              {t("message")}{" "}
              <Link
                href="/privacy"
                className="text-accent-gold underline underline-offset-2 hover:text-white transition-colors"
              >
                {t("privacyLink")}
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-white/70 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
            >
              {t("decline")}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-bold bg-accent-gold text-forest-dark rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
