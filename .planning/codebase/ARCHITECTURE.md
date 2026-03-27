# Architecture

**Analysis Date:** 2026-03-27

## Pattern Overview

**Overall:** Single-page marketing website using **Next.js 14 with App Router** pattern, centered around a property listing landing page for a Brazilian resort (Sítio Girassol).

**Key Characteristics:**
- Server-side rendering with dynamic client components via `next/dynamic`
- Internationalization (i18n) middleware-based routing with `next-intl`
- Configuration-driven content via centralized data files
- Vercel Analytics and performance monitoring integrated
- Theme customization system with design tokens

## Layers

**Presentation Layer (Client & Server Components):**
- Purpose: Render landing page sections with rich visuals, animations, and interactivity
- Location: `src/components/`
- Contains: React components organized by type (sections, layout, UI, decorations, SEO)
- Depends on: Data configs, design system, utilities
- Used by: Page components in `src/app/`

**Page/Route Layer:**
- Purpose: Handle URL routing, locale management, and page orchestration
- Location: `src/app/`, `src/app/[locale]/`
- Contains: Layout files, page components, API routes
- Depends on: Middleware, i18n routing, component sections
- Used by: Next.js runtime

**Data Configuration Layer:**
- Purpose: Single source of truth for listing content, amenities, pricing, and metadata
- Location: `src/data/`
- Contains: `listing.config.ts` (property details, pricing, photos, copy in multiple languages), `amenities.config.ts`
- Depends on: None
- Used by: Components throughout the app for rendering content

**Utilities & Libraries:**
- Purpose: Shared business logic for pricing calculations, calendar parsing, theming, and design system derivation
- Location: `src/lib/`
- Contains: `pricing.ts` (discount/fee logic), `ical.ts` (Airbnb calendar fetching), `theme-colors.ts`, design system modules
- Depends on: External libraries (date-fns, node-ical)
- Used by: Components and API routes

**Internationalization Layer:**
- Purpose: Enable multi-language support with locale-based routing
- Location: `src/i18n/`
- Contains: `routing.ts` (locale configuration), `navigation.ts` (link builders), `request.ts` (request utilities)
- Depends on: `next-intl`
- Used by: Middleware and all page components

**API Layer:**
- Purpose: Server-side proxies and data endpoints
- Location: `src/app/api/`
- Contains: Minimal API routes (currently only `/calendar/blocked` for Airbnb iCal integration)
- Depends on: Data configs, utilities
- Used by: Client-side components via fetch

## Data Flow

**Landing Page Load:**

1. Request arrives at `/en` or `/pt` (locale-based)
2. Middleware (`src/middleware.ts`) validates locale and routes accordingly
3. Layout component (`src/app/layout.tsx`) loads:
   - Google Fonts (Playfair Display, Inter)
   - Analytics scripts (GA4, Facebook Pixel, Vercel Analytics)
   - Material Icons stylesheet
4. Locale layout (`src/app/[locale]/layout.tsx`) applies locale context via `setRequestLocale()`
5. Home page (`src/app/[locale]/page.tsx`) dynamically imports and renders sections
6. Each section component:
   - Reads from `listingConfig` or `amenitiesConfig` in `src/data/`
   - Uses utilities from `src/lib/` for business logic
   - Applies design tokens from `src/lib/design-system/`

**Calendar Availability Flow:**

1. Client requests `/api/calendar/blocked`
2. API route (`src/app/api/calendar/blocked/route.ts`) retrieves Airbnb iCal URL from config
3. `fetchBlockedDates()` from `src/lib/ical.ts` parses the iCal feed
4. Returns JSON array of blocked dates to client
5. Client-side component (CalendarSection) displays availability

**State Management:**
- Minimal state: Configuration is immutable, stored in `src/data/`
- Client-side component state for UI interactions (calendar selection, theme toggling)
- No global state management library needed for this simple property listing

## Key Abstractions

**ListingConfig:**
- Purpose: Centralized data structure defining all property metadata, pricing, amenities, photos, and multi-language content
- Examples: `src/data/listing.config.ts`
- Pattern: Single TypeScript object export with strongly-typed interfaces (`ListingConfig`, `PhotoCategory`)
- Content includes: Meta tags, hero copy, pricing (nightly, weekly %, monthly %), calendar iCal URL, photo array, property specs, amenities by category, informational sections, nearby places, location maps

**Design System:**
- Purpose: Generate theme colors, derive color variations, and flatten to CSS variables
- Examples: `src/lib/design-system/color-math.ts`, `src/lib/design-system/derive-colors.ts`, `src/lib/design-system/forest-tokens.ts`
- Pattern: Programmatic color derivation from seed color; flattened to CSS custom properties for Tailwind theming
- Used by: `tailwind.config.ts` at build time, `src/lib/theme-colors.ts` for runtime access

**Component Sections:**
- Purpose: Page-level visual sections organized by feature (Hero, Gallery, Features, Calendar, CTA, etc.)
- Examples: `src/components/sections/Hero3D.tsx`, `src/components/sections/CalendarSection.tsx`, `src/components/sections/FeaturesSection.tsx`
- Pattern: Dynamically imported in page component with `next/dynamic` for performance (most set `ssr: false`)
- Design: Each section self-contains data fetching, state management, and rendering

## Entry Points

**Web Application:**
- Location: `src/app/layout.tsx` and `src/app/[locale]/page.tsx`
- Triggers: HTTP request to `/`, `/en`, `/pt`
- Responsibilities:
  - Load global HTML structure and metadata
  - Initialize analytics and tracking pixels
  - Set locale context
  - Compose landing page sections

**API Endpoint:**
- Location: `src/app/api/calendar/blocked/route.ts`
- Triggers: GET request to `/api/calendar/blocked`
- Responsibilities:
  - Fetch Airbnb calendar iCal feed (server-side to avoid CORS)
  - Parse blocked dates from iCal
  - Return JSON response to client

**Build-Time Scripts:**
- Locations: `scripts/generate-theme-css.ts`, `scripts/generate-icons.ts`, `scripts/optimize-hero-images.ts`
- Triggers: `npm run prebuild` before production build
- Responsibilities:
  - Derive and output theme CSS from design system
  - Generate favicon and icon assets
  - Optimize hero section images

## Error Handling

**Strategy:** Silent fallback approach; errors logged server-side, app continues gracefully.

**Patterns:**
- API route catches errors and returns empty data: `catch { return NextResponse.json({ dates: [] }) }`
- iCal fetch failure returns empty array rather than throwing
- Missing environment variables (GA4_ID, FB_PIXEL_ID) are checked before script injection; missing vars are skipped
- Calendar section handles missing iCal URL gracefully

## Cross-Cutting Concerns

**Logging:**
- No centralized logging library detected
- Error handling via silent fallbacks and empty data responses
- Opportunity: Add server-side logging for API errors and monitoring

**Validation:**
- Configuration objects are typed via TypeScript interfaces but not runtime-validated
- iCal parsing delegates to `node-ical` library (external validation)
- No Zod/Pydantic validation layer at system boundaries

**Authentication:**
- Not applicable; public-facing marketing site with no auth required

**Internationalization:**
- `next-intl` middleware routes by locale (en/pt)
- All marketing copy stored in `ListingConfig` as `Record<string, string>` objects (language keys)
- Components access locale-specific strings from config

**Analytics:**
- Vercel Analytics for performance metrics
- Google Analytics 4 for conversion tracking (GA4 script injected if `NEXT_PUBLIC_GA4_ID` set)
- Facebook Pixel for ad retargeting (injected if `NEXT_PUBLIC_FB_PIXEL_ID` set)

**Theming:**
- CSS variables generated from design system at build time
- Tailwind CSS uses custom color palette
- Runtime theme color picker available in UI components

---

*Architecture analysis: 2026-03-27*
