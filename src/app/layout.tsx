import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsScripts from "@/components/layout/AnalyticsScripts";
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "optional",
  adjustFontFallback: true,
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitiogirassol.org"),
  title: "Sítio Girassol - Chácara para Alugar com Piscina em São Roque, SP | Perto de São Paulo",
  description:
    "Chácara para alugar perto de São Paulo. 3 quartos, piscina privativa com cascata, 2 churrasqueiras, lareira, trilhas offroad em 2,6 hectares de natureza em São Roque, SP. Pet-friendly. Reserve agora.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params?: { locale?: string };
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <meta name="facebook-domain-verification" content="7m5c78gayux1yq3waong1ab1gm4u5j" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Preload LCP hero image for faster first paint */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fbg%2FDSC_0559.JPG&w=1080&q=40"
          fetchPriority="high"
        />
        {/* Preload Material Symbols — non-render-blocking via media swap */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        {/* Load Material Symbols asynchronously to avoid render-blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';document.head.appendChild(l)})()`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
        </noscript>
      </head>
      <body className="antialiased font-sans">
        {children}
        <AnalyticsScripts />
        {/* Meta Pixel — deferred to avoid blocking initial render */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1336495021655278');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1336495021655278&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
