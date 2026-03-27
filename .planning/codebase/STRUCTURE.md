# Codebase Structure

**Analysis Date:** 2026-03-27

## Directory Layout

```
sitiogirassol-main/
├── src/                           # Application source code (Next.js app)
│   ├── app/                       # Next.js 14 App Router
│   │   ├── [locale]/              # Locale-based routing (en, pt)
│   │   │   ├── ads/               # Placeholder ads page
│   │   │   ├── listing-info/      # Property details page
│   │   │   ├── theme/             # Theme customization page
│   │   │   ├── page.tsx           # Home/landing page
│   │   │   └── layout.tsx         # Locale-specific layout
│   │   ├── api/                   # API routes
│   │   │   └── calendar/blocked/  # Airbnb calendar blocking endpoint
│   │   ├── layout.tsx             # Root layout (HTML, fonts, analytics)
│   │   ├── robots.ts              # Robots.txt generation
│   │   └── sitemap.ts             # Sitemap generation
│   ├── components/                # React components
│   │   ├── sections/              # Page sections (Hero, Gallery, Features, etc.)
│   │   ├── layout/                # Header, Footer components
│   │   ├── ui/                    # Base UI components
│   │   ├── decorations/           # Visual decorations/effects
│   │   └── seo/                   # SEO components
│   ├── data/                      # Configuration & content (single source of truth)
│   │   ├── listing.config.ts      # Property metadata, pricing, copy, photos
│   │   └── amenities.config.ts    # Amenities categorized
│   ├── lib/                       # Utilities & business logic
│   │   ├── design-system/         # Theme color derivation & tokens
│   │   ├── pricing.ts             # Pricing calculation utilities
│   │   ├── ical.ts                # Airbnb calendar parsing
│   │   └── theme-colors.ts        # Theme color access
│   ├── i18n/                      # Internationalization
│   │   ├── routing.ts             # Locale configuration
│   │   ├── navigation.ts          # Link builders
│   │   └── request.ts             # Request utilities
│   ├── middleware.ts              # Next.js middleware (locale routing)
│   └── hooks/                     # Custom React hooks (empty)
│
├── public/                        # Static assets (favicon, icons, etc.)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── icons/                     # App icons (32x32, 16x16, apple-touch-icon)
│   ├── images/                    # Product images
│   └── site.webmanifest
│
├── scripts/                       # Build & dev scripts
│   ├── generate-theme-css.ts      # Generate CSS variables from design system
│   ├── generate-icons.ts          # Generate favicons from SVG
│   └── optimize-hero-images.ts    # Image optimization pre-build
│
├── marketing/                     # Non-code marketing data (see detailed breakdown below)
│   ├── airbnb/                    # Airbnb listing analysis & data
│   ├── airbnb_sitio images/       # Property photos (copy for reference)
│   ├── facebook-ads-data/         # Facebook ad campaign metrics
│   ├── data/                      # Generic data exports
│   ├── IMG-20180913-WA0008.jpg    # Sample photo
│   └── links.txt                  # Important marketing links
│
├── messages/                      # i18n translation files (if used)
├── tasks/                         # Task management (if used)
├── examples/                      # Example files/templates
│
├── .next/                         # Next.js build output (git-ignored)
├── node_modules/                  # Dependencies (git-ignored)
│
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore rules
├── next.config.mjs                # Next.js config
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind CSS config with design system
├── postcss.config.mjs             # PostCSS config
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Dependency lock file
│
└── .planning/                     # GSD planning documents
    └── codebase/                  # Architecture & structure docs
        ├── ARCHITECTURE.md
        └── STRUCTURE.md
```

## Directory Purposes

**src/app:**
- Purpose: Next.js App Router pages and routes
- Contains: Page components (.tsx), layout files, API routes
- Next.js automatically routes `/[locale]/page.tsx` to `/:locale/`

**src/components:**
- Purpose: Reusable React components organized by responsibility
- Contains: Page-level sections, layout chrome, UI primitives, visual effects
- Imports: Configuration from `src/data/`, utilities from `src/lib/`

**src/data:**
- Purpose: **Single source of truth** for all property and listing content
- Contains: Strongly-typed TypeScript objects exporting configuration
- Key files:
  - `listing.config.ts`: Property metadata (3 bedrooms, 5 guests, 2.6 hectares), pricing (R$ per night, weekly/monthly discounts), all marketing copy in Portuguese and English, photo URLs and categories, amenities list, location maps, directions, Airbnb URL
  - `amenities.config.ts`: Categorized amenities (e.g., outdoor activities, entertainment, kitchen items)

**src/lib:**
- Purpose: Shared utilities, business logic, and design system
- Key modules:
  - `pricing.ts`: Calculate total price with discount logic (7+ nights = weekly, 28+ nights = monthly)
  - `ical.ts`: Parse Airbnb iCal feed to extract blocked dates
  - `design-system/`: Generate color variants from seed color, output CSS variables
  - `theme-colors.ts`: Runtime access to theme colors

**src/i18n:**
- Purpose: Internationalization configuration and helpers
- Contains:
  - `routing.ts`: Define supported locales (en, pt), default locale
  - `navigation.ts`: Helper functions for building locale-aware links
  - `request.ts`: Utilities for locale context in requests

**public/:**
- Purpose: Static assets served by CDN
- Contains: Favicon (multiple formats), app manifest, icon files
- Committed: Yes

**scripts/:**
- Purpose: Build-time automation
- Key scripts:
  - `generate-theme-css.ts`: Derives color variations from base color, outputs CSS for Tailwind
  - `generate-icons.ts`: Converts SVG to favicon and icon assets
  - `optimize-hero-images.ts`: Compresses hero section images
- Trigger: `npm run prebuild` executes before `npm run build`

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx`: Root HTML structure, fonts, global scripts (GA4, Facebook Pixel)
- `src/app/[locale]/page.tsx`: Landing page component composition
- `src/app/api/calendar/blocked/route.ts`: Calendar availability API

**Configuration:**
- `src/data/listing.config.ts`: Property details, pricing, copy, amenities
- `src/data/amenities.config.ts`: Amenities catalog
- `next.config.mjs`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS with design system colors
- `tsconfig.json`: TypeScript compilation settings

**Core Logic:**
- `src/lib/pricing.ts`: Discount and fee calculations
- `src/lib/ical.ts`: Airbnb calendar parsing
- `src/lib/design-system/color-math.ts`: Color variation algorithms
- `src/i18n/routing.ts`: Locale configuration

**Testing:**
- No test files present in codebase

## Naming Conventions

**Files:**
- React components: PascalCase (e.g., `Hero3D.tsx`, `CalendarSection.tsx`)
- Configuration files: kebab-case with `.config.ts` suffix (e.g., `listing.config.ts`)
- Utilities: camelCase (e.g., `pricing.ts`, `ical.ts`)
- API routes: Follow Next.js convention (`route.ts`)

**Directories:**
- Feature-based: `sections/`, `layout/`, `ui/`, `decorations/`
- By function: `lib/`, `data/`, `i18n/`
- Route directories: kebab-case (e.g., `[locale]`, `listing-info`)

**Variables & Functions:**
- camelCase for functions and variables
- PascalCase for types and interfaces
- UPPERCASE for constants
- Example: `function calculateTotalPrice()`, `type PhotoCategory`, `const nightlyRate`

## Where to Add New Code

**New Feature (e.g., Booking Form):**
- Primary code: `src/components/sections/BookingSection.tsx` (if section-level) or `src/components/ui/BookingForm.tsx` (if reusable)
- Tests: Currently no test directory; recommend `src/components/sections/__tests__/BookingSection.test.tsx`
- Config updates: Add data to `src/data/listing.config.ts` if needed

**New Page (e.g., Reviews Page):**
- Route: `src/app/[locale]/reviews/page.tsx`
- Locale layout: Auto-inherited from `src/app/[locale]/layout.tsx`
- Content: Add to `src/data/` or create new config file
- SEO metadata: Add `generateMetadata()` function to page component

**New API Endpoint (e.g., Booking Submission):**
- Route: `src/app/api/bookings/route.ts`
- Handler: Export `POST` function in `route.ts`
- Validation: Add Zod schema at top of handler
- Config: Any API secrets stored in `.env.local` (not committed)

**Utilities:**
- Shared helpers: `src/lib/helpers.ts` (new file)
- Business logic: `src/lib/[domain].ts` (e.g., `src/lib/booking.ts`)
- Design system additions: `src/lib/design-system/[concern].ts`

**i18n Content:**
- New copy in multiple languages: Add `Record<string, string>` fields to `src/data/listing.config.ts`
- Example: `myNewSection: { title: { en: "...", pt: "..." } }`

## Special Directories

**marketing/ (Non-Code Marketing Data):**

The `marketing/` folder contains business intelligence, analytics exports, and marketing assets NOT used in the application code. Structure:

```
marketing/
├── airbnb/                                          # Airbnb listing analysis & data
│   ├── airbnb_analysis.md                          # Comprehensive recovery strategy (Feb 2026)
│   ├── airbnb.csv                                  # Current booking metrics
│   ├── cf7c095b-1c60-456b-93b5-0219ce1f691e.csv  # Exported report data
│   ├── airbnb_monthly_consolidated.csv             # 12-month summary (Mar 2025–Feb 2026)
│   ├── data/                                       # Historical monthly iCal exports (~70 CSV files)
│   │   └── [UUID-named CSV files]                  # Each file: booking data for one month
│   ├── graphs/                                     # Generated visualizations
│   │   └── 01_revenue_bookings.png                 # Revenue & booking trends
│   ├── plot_airbnb.py                              # Python script to generate graphs
│   ├── requirements.txt                            # Python dependencies
│   └── [Screenshot files 2026-02-24]               # Dashboard captures from Airbnb host portal
│
├── facebook-ads-data/                              # Facebook ad campaign exports
│   ├── Isa-ela-Alves-Vieira-Campaigns-Fe-25-2026-Mar-26-2026.csv
│   ├── Isa-ela-Alves-Vieira-Ad-sets-Fe-25-2026-Mar-26-2026.csv
│   └── Isa-ela-Alves-Vieira-Ads-Fe-25-2026-Mar-26-2026.csv
│
├── airbnb_sitio images/                           # Property photos (270 JPGs)
│   └── [DSC_0713.JPG through DSC_0801.JPG]        # Raw photos from camera
│
├── data/                                           # Generic data exports
│   └── [4 UUID-named CSV files]                    # Unknown purpose (inherited data)
│
├── IMG-20180913-WA0008.jpg                         # Legacy photo from WhatsApp
└── links.txt                                       # Important URLs:
                                                    # - Website (sitiogirassol.org/en)
                                                    # - Instagram (sitiogirassol.sp)
                                                    # - Airbnb listing
```

**What marketing/ Contains:**
- **Airbnb Analysis**: Detailed performance report with 12 months of booking data (Mar 2025–Feb 2026), conversion metrics, recovery strategy for 1-star review impact
- **Photo Archive**: ~270 JPGs (DSC_XXXX format) from camera, used for website photo carousel
- **Ad Campaign Data**: Facebook ads metrics exported from Ads Manager
- **Analytics**: Monthly CSV exports with revenue, bookings, ADR, conversion rates by month

**Why It's Not in src/:**
- Not used by application code; no import references from React components
- Business intelligence for marketing decisions (pricing, promotions, strategy)
- Data exports from external platforms (Airbnb, Facebook Ads Manager)
- Historical tracking and analysis

**How to Reference:**
- For website photos: Source files are in `marketing/airbnb_sitio images/`; optimized versions referenced in `src/data/listing.config.ts` (not stored in repo, served from CDN or public/)
- For business metrics: View `marketing/airbnb/airbnb_analysis.md` to understand pricing strategy, seasonal patterns, and recovery plan
- For ad performance: View CSV files in `marketing/facebook-ads-data/`

**Generated:**
- `marketing/airbnb/graphs/` generated by `plot_airbnb.py` script
- `marketing/airbnb_sitio images/` — auto-populated photos (not code-generated)
- `marketing/facebook-ads-data/` — monthly exports from platform

**Committed:**
- Yes, all marketing data is committed to git (intentional for business continuity)
- Large photo archive (270 JPGs) adds ~50MB to repo; acceptable for historical record

## Naming Conventions Summary

| Category | Pattern | Examples |
|----------|---------|----------|
| React Components | PascalCase | `Hero3D.tsx`, `CalendarSection.tsx`, `GlassyHeader.tsx` |
| Directories (features) | kebab-case | `sections/`, `layout/`, `ui/`, `design-system/` |
| Config files | kebab-case + `.config.ts` | `listing.config.ts`, `tailwind.config.ts` |
| Utilities | camelCase | `pricing.ts`, `ical.ts` |
| Types/Interfaces | PascalCase | `ListingConfig`, `PhotoCategory` |
| Variables | camelCase | `nightlyRate`, `blockedDates` |
| Constants | UPPERCASE | (None observed; opportunity for improvement) |
| Route files | `route.ts` or `page.tsx` | `[locale]/page.tsx`, `api/calendar/blocked/route.ts` |

---

*Structure analysis: 2026-03-27*
