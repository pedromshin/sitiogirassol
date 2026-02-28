import type { Config } from "tailwindcss";
import { colors } from "./src/lib/design-system/colors.config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        /* Forest theme - semantic tokens (single source in globals.css) */
        forest: {
          dark: "var(--color-forest-dark)",
          mid: "var(--color-forest-mid)",
          hover: "var(--color-forest-hover)",
          "dark-btn": "var(--color-forest-dark-btn)",
        },
        accent: {
          gold: "var(--color-accent-gold)",
          "gold-muted": "rgba(212, 175, 55, 0.1)",
          "gold-border": "rgba(212, 175, 55, 0.2)",
          "gold-border-hover": "rgba(212, 175, 55, 0.3)",
        },
        warm: {
          gold: "var(--color-warm-gold)",
          "gold-border": "rgba(233, 196, 106, 0.3)",
        },
        "bg-layer": {
          1: "var(--color-bg-layer-1)",
          2: "var(--color-bg-layer-2)",
          3: "var(--color-bg-layer-3)",
          4: "var(--color-bg-layer-4)",
          5: "var(--color-bg-layer-5)",
        },
        card: {
          DEFAULT: "var(--color-card-bg)",
          border: "var(--color-card-border)",
          "border-hover": "var(--color-card-border-hover)",
          "featured-stripe": "var(--color-card-featured-stripe)",
        },
        scene: {
          roof: "var(--color-scene-roof)",
          body: "var(--color-scene-body)",
          ground: "var(--color-scene-ground)",
        },
        "gradient-accent": "var(--color-gradient-accent)",
        "gradient-primary": "var(--color-gradient-primary)",
      },
      boxShadow: {
        "accent-gold": "var(--shadow-accent-gold)",
        elevated: "var(--shadow-elevated)",
      },
      fontSize: {
        "xs-caps": ["var(--text-xs-caps)", { lineHeight: "1.2" }],
      },
      letterSpacing: {
        caps: "var(--tracking-caps)",
        "caps-tight": "var(--tracking-caps-tight)",
      },
      borderRadius: {
        section: "2rem",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
