import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Girassol - Nature Refuge | São Roque, Brazil",
  description:
    "Authentic Brazilian Sitio - Offroad, Nature, BBQ. 3 bedrooms, pool, 2.6 hectares of nature. Book your stay in São Roque.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
