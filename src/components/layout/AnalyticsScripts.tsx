"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { trackPageViewCAPI } from "@/lib/tracking";

export default function AnalyticsScripts() {
  const pathname = usePathname();
  const capiSent = useRef(false);

  useEffect(() => {
    if (!capiSent.current && process.env.NEXT_PUBLIC_FB_PIXEL_ID) {
      capiSent.current = true;
      trackPageViewCAPI();
    }
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Cookieless — always safe to load */}
      <Analytics />
      <SpeedInsights />

      {/* GA4 — loads for all visitors (LGPD-compliant) */}
      {process.env.NEXT_PUBLIC_GA4_ID && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
          />
          <Script
            id="ga4-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`,
            }}
          />
        </>
      )}

      {/* Meta Pixel is in layout.tsx <head> for reliable detection */}
    </>
  );
}
