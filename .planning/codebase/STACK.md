# Technology Stack

**Analysis Date:** 2026-03-27

## Languages

**Primary:**
- TypeScript 5.5.0 - Main application code and configuration
- React 18.2.0 - UI components and rendering
- JavaScript - Build scripts and utilities

**Secondary:**
- Python 3.x (in scripts) - Data processing in `scripts/` for image optimization and Airbnb data extraction
- CSS/SCSS - Styling via Tailwind

## Runtime

**Environment:**
- Node.js (implied by Next.js 14.2.5 and npm)
- Next.js 14.2.5 - React meta-framework for full-stack app

**Package Manager:**
- npm - Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 14.2.5 - Full-stack React framework with App Router, API routes, middleware
- React 18.2.0 - Core UI library
- React DOM 18.2.0 - DOM rendering

**Internationalization:**
- next-intl 3.19.0 - Multi-language support (en, pt, es). Plugin in `next.config.mjs`; routing at `src/i18n/routing.ts`, middleware at `src/middleware.ts`

**3D Graphics:**
- Three.js 0.163.0 - 3D scene rendering
- @react-three/fiber 8.15.12 - React renderer for Three.js
- @react-three/drei 9.92.7 - Utilities for fiber (OrbitControls used in `src/components/sections/Scene3D.tsx`)

**Animation & Motion:**
- Framer Motion 11.3.28 - React animation library
- GSAP 3.12.5 - Animation framework for advanced motion control

**Carousel/Swiping:**
- Swiper 11.1.4 - Touch-friendly carousel component
- react-date-range 2.0.1 - Date range picker for calendar bookings

**Date Handling:**
- date-fns 3.3.1 - Date manipulation and formatting
- node-ical 0.16.1 - iCal parser for Airbnb calendar blocking

**Analytics & Monitoring:**
- @vercel/analytics 1.6.1 - Vercel analytics integration in `src/app/layout.tsx`
- @vercel/speed-insights 1.3.1 - Core Web Vitals monitoring
- Google Analytics 4 - Configured via `NEXT_PUBLIC_GA4_ID` env var in `src/app/layout.tsx`
- Facebook Pixel - Configured via `NEXT_PUBLIC_FB_PIXEL_ID` env var in `src/app/layout.tsx`

## Build & Development

**Build Tools:**
- Webpack (Next.js bundler) - Implicit via Next.js
- PostCSS 8.4.38 - CSS transformation pipeline
- Tailwind CSS 3.4.4 - Utility-first CSS framework via `tailwind.config.ts`
- Autoprefixer 10.4.19 - Browser vendor prefixes

**Development:**
- tsx 4.19.0 - TypeScript runtime for scripts; runs TS scripts in `scripts/`
- ESLint 8.57.0 - Code linting; config at `.eslintrc.json`
- eslint-config-next 14.2.5 - Next.js ESLint rules

**Icon & Image Processing:**
- jimp 1.6.0 - Image manipulation library
- to-ico 1.1.5 - Convert images to .ico format
- Scripts: `scripts/generate-icons.ts`, `scripts/optimize-hero-images.ts` prebuild image assets

**Type Checking:**
- TypeScript 5.5.0 - Strict type checking; config at `tsconfig.json` with ES2017 target, JSX preserve mode

## Key Dependencies

**Critical:**
- next 14.2.5 - Core framework (framework + router + middleware + API routes)
- react 18.2.0 - UI rendering
- next-intl 3.19.0 - Internationalization (required for multi-language support)
- three + @react-three/* - 3D hero section rendering

**Analytics & Conversion Tracking:**
- @vercel/analytics - Server-side analytics to Vercel
- @vercel/speed-insights - Core Web Vitals monitoring
- Google Analytics 4 - Event tracking (site-wide via global script)
- Facebook Pixel - Conversion tracking for paid ads (site-wide via global script)

**Date & Calendar:**
- react-date-range - Booking calendar UI
- node-ical - Airbnb calendar sync via iCal feed (parsed in `src/lib/ical.ts`)

## Configuration

**Environment:**
- `.env` variables (NEXT_PUBLIC_* for client-side exposure):
  - `NEXT_PUBLIC_GA4_ID` - Google Analytics tracking ID
  - `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID
  - Other config likely via `src/data/listing.config.ts` (non-env approach)

**Build Pipeline:**
- `prebuild` npm script runs:
  1. `npm run theme:css` - Generate CSS from design system colors
  2. `npm run icons` - Generate favicon and icon set
  3. `npm run optimize:images` - Optimize hero images
- Dev: `next dev` (localhost:3000)
- Build: `next build` → `.next/` output
- Start: `next start` - Production server
- Lint: `next lint` - ESLint via Next.js

**Font Loading:**
- Google Fonts imported in runtime via `next/font/google`:
  - Playfair Display (serif, display font)
  - Inter (sans-serif, body font)
  - Material Symbols Outlined (icon font, loaded via `<link>` in `src/app/layout.tsx`)

## Platform Requirements

**Development:**
- Node.js 18+ (implied by Next.js 14 and TypeScript 5.5)
- npm (lockfile managed)
- Python 3.x (for scripts in `/scripts/`)

**Production:**
- Vercel (inferred from @vercel/analytics, @vercel/speed-insights integration)
- Remote image optimization enabled in `next.config.mjs`: `images.remotePatterns` allows https/http from any hostname

---

*Stack analysis: 2026-03-27*
