# External Integrations

**Analysis Date:** 2026-03-27

## APIs & External Services

**Calendar Synchronization:**
- Airbnb iCal Feed - Property availability/blocked dates
  - SDK/Client: node-ical (0.16.1) + native fetch with cache
  - Implementation: `src/lib/ical.ts` - `fetchBlockedDates()` parses iCal to blocked date ranges
  - API Endpoint: `src/app/api/calendar/blocked/route.ts` - GET endpoint returns JSON array of blocked dates
  - Cache: 1 hour revalidation via `next: { revalidate: 3600 }`
  - Config: `src/data/listing.config.ts` → `listingConfig.calendar.airbnbIcalUrl` (environment or hardcoded)

## Data Storage

**Booking Metrics (Read-Only):**
- Airbnb Analytics Data - Monthly reports exported as CSV
  - Location: `marketing/airbnb/` and `marketing/airbnb/data/`
  - Format: CSV with monthly metrics (bookings, revenue, nights booked, conversion rates, etc.)
  - Data Points: Listing ID (1345960842338220775), revenue in BRL, view-to-contact rates, contact-to-book rates
  - Not integrated into application - used for offline analysis
  - Files: Multiple UUID-named files containing monthly reports from 2025-03 to 2026-02

**Facebook Ads Analytics:**
- Facebook Ads Export - Campaign/Ad set/Ad performance data
  - Location: `marketing/facebook-ads-data/`
  - Format: CSV exports from Meta Ads Manager
  - Data Period: 2026-02-25 to 2026-03-26
  - Metrics: Impressions, Reach, Cost per Result, Engagement rates, Conversion rates
  - Files:
    - `Isa-ela-Alves-Vieira-Campaigns-Fe-25-2026-Mar-26-2026.csv` - Campaign-level data
    - `Isa-ela-Alves-Vieira-Ad-sets-Fe-25-2026-Mar-26-2026.csv` - Ad set performance
    - `Isa-ela-Alves-Vieira-Ads-Fe-25-2026-Mar-26-2026.csv` - Individual ad performance
  - Not integrated into application - used for marketing analytics

**Airbnb Listing Images & Data:**
- Airbnb Sitio Images Archive
  - Location: `marketing/airbnb_sitio images/` (270 image folder)
  - Source: Downloaded from Airbnb property listing
  - Not used in application - external reference archive

## Authentication & Identity

**No dedicated auth service used.** Single-owner property (no multi-user auth).

**External Accounts Linked:**
- Airbnb - Property listing reference (URL: `https://www.airbnb.com/rooms/1345960842338220775` stored in `src/data/listing.config.ts`)
- Instagram - Social link (`https://www.instagram.com/sitiogirassol.sp/`)
- WhatsApp - Optional contact (property WhatsApp number configurable in `listingConfig.whatsappNumber`)

## Analytics & Observability

**Error Tracking:**
- Not explicitly integrated (no Sentry/Rollbar found)
- Frontend errors logged to browser console only (no error service visible)

**Logs:**
- Console logging (development)
- Server-side errors caught but not persisted (see `src/lib/ical.ts` catch block returns empty array on failure)
- No structured logging service detected

**Analytics Tracking:**

**Google Analytics 4:**
- Client: Google tag script injected in `src/app/layout.tsx`
- ID: `process.env.NEXT_PUBLIC_GA4_ID` (required env var)
- Tracking: Auto page views via gtag global
- Purpose: Traffic, user behavior, conversion tracking

**Facebook Pixel:**
- Client: Meta pixel script injected in `src/app/layout.tsx`
- ID: `process.env.NEXT_PUBLIC_FB_PIXEL_ID` (required env var)
- Events: PageView fired on load
- Purpose: Conversion tracking, audience building for retargeting

**Vercel Analytics:**
- Package: `@vercel/analytics 1.6.1` - server/client component in `src/app/layout.tsx`
- Purpose: Core Web Vitals, performance metrics

**Vercel Speed Insights:**
- Package: `@vercel/speed-insights 1.3.1` - component in `src/app/layout.tsx`
- Purpose: Real user monitoring (RUM) for performance

**Performance Monitoring:**
- No APM (Application Performance Monitoring) service detected beyond Vercel

## CI/CD & Deployment

**Hosting:**
- Vercel (inferred from @vercel/analytics, @vercel/speed-insights SDKs and integration)
- Next.js native deployment model

**CI Pipeline:**
- Not detected in codebase (no GitHub Actions, GitLab CI, or CircleCI config visible)
- Likely Vercel auto-deploy on git push (Vercel's default GitHub integration)

**Build Process:**
- Prebuild hooks: `theme:css`, `icons`, `optimize:images` run before `next build`
- Image optimization: Next.js `next/image` component with remote URL support
- Minification: Next.js default

## Environment Configuration

**Required env vars:**
```
NEXT_PUBLIC_GA4_ID              # Google Analytics 4 measurement ID
NEXT_PUBLIC_FB_PIXEL_ID         # Facebook Pixel ID
```

**Optional/Config:**
- `src/data/listing.config.ts` - Hardcoded property configuration (title, pricing, amenities, calendar URL, etc.)
- Calendar: Airbnb iCal URL stored in `listingConfig.calendar.airbnbIcalUrl`

**Secrets location:**
- Environment variables via Vercel deployment platform
- No `.env` file present (not in version control)
- No external secret manager integrated

## Webhooks & Callbacks

**Incoming Webhooks:**
- None detected (no serverless function handlers for incoming Airbnb/Stripe/payment webhooks)

**Outgoing Webhooks:**
- None detected (application is read-only informational site with no backend state changes)

**External Links:**
- Airbnb listing link: `listingConfig.airbnbUrl` (soft link, no API)
- Instagram social link stored in config
- WhatsApp contact link (soft link only)

## Marketing Integrations Summary

**Airbnb Marketing Data (`marketing/` folder):**
- Airbnb analytics exports (monthly metrics, listing ID 1345960842338220775) - offline data only
- Airbnb images archive (270+ images) - external reference, not used in production app
- Facebook Ads data (3 CSV files with campaign/ad performance Feb-Mar 2026) - offline analytics
- `links.txt` - Reference URLs (Airbnb, Instagram, website)
- `requirements.txt` - Python dependencies (pandas, matplotlib, numpy) for data analysis scripts

**No API integrations for marketing data synchronization.** All marketing files are manual exports for analysis purposes.

---

*Integration audit: 2026-03-27*
