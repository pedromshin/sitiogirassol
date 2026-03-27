import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sítio Girassol - Vacation Rental";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const taglines: Record<string, string> = {
  pt: "Refúgio na natureza com piscina em São Roque, SP",
  en: "Nature retreat with pool in São Roque, SP",
  es: "Refugio en la naturaleza con piscina en São Roque, SP",
};

const subtitles: Record<string, string> = {
  pt: "3 quartos · 6 hóspedes · Piscina · Churrasqueira · Pet-friendly",
  en: "3 bedrooms · 6 guests · Pool · BBQ · Pet-friendly",
  es: "3 habitaciones · 6 huéspedes · Piscina · Parrilla · Pet-friendly",
};

export default async function Image({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale || "pt";
  const tagline = taglines[locale] || taglines.en;
  const subtitle = subtitles[locale] || subtitles.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #1a3a2a 0%, #0d1f15 50%, #1a3a2a 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Decorative top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, #d4af37, #e9c46a, #d4af37)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 60px",
          }}
        >
          {/* Property name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#e9c46a",
              letterSpacing: "-1px",
              marginBottom: "16px",
              display: "flex",
            }}
          >
            Sítio Girassol
          </div>

          {/* Decorative divider */}
          <div
            style={{
              width: "120px",
              height: "2px",
              background: "#d4af37",
              marginBottom: "24px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "20px",
              maxWidth: "800px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {tagline}
          </div>

          {/* Subtitle with features */}
          <div
            style={{
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "center",
              display: "flex",
            }}
          >
            {subtitle}
          </div>

          {/* Price badge */}
          <div
            style={{
              marginTop: "32px",
              padding: "12px 32px",
              borderRadius: "8px",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              background: "rgba(212, 175, 55, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{ fontSize: 22, color: "#e9c46a", display: "flex" }}
            >
              {locale === "pt"
                ? "A partir de"
                : locale === "es"
                  ? "Desde"
                  : "From"}{" "}
              R$ 170/
              {locale === "pt"
                ? "noite"
                : locale === "es"
                  ? "noche"
                  : "night"}
            </div>
          </div>
        </div>

        {/* Location badge */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: 18,
          }}
        >
          São Roque, SP · 60 km de São Paulo
        </div>

        {/* Bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, #d4af37, #e9c46a, #d4af37)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
