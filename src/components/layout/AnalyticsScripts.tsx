"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { hasAnalyticsConsent } from "@/components/layout/CookieConsent";
import { trackPageViewCAPI } from "@/lib/tracking";

export default function AnalyticsScripts() {
  const pathname = usePathname();
  const [consented, setConsented] = useState(false);
  const capiSent = useRef(false);

  useEffect(() => {
    setConsented(hasAnalyticsConsent());
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Cookieless — always safe to load */}
      <Analytics />
      <SpeedInsights />

      {/* Requires consent — GA4 */}
      {consented && process.env.NEXT_PUBLIC_GA4_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`,
            }}
          />
        </>
      )}

      {/* Requires consent — Meta Pixel + Conversions API */}
      {consented && process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
        <>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            onLoad={() => {
              if (!capiSent.current) {
                capiSent.current = true;
                trackPageViewCAPI();
              }
            }}
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
