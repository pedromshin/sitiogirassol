# Codebase Concerns

**Analysis Date:** 2026-03-27

## Tech Debt

**Large Configuration Files:**
- Issue: `src/data/listing.config.ts` (577 lines) contains all listing data as a monolithic TypeScript object
- Files: `src/data/listing.config.ts`, `src/data/amenities.config.ts` (155 lines)
- Impact: Difficult to maintain, edit, and manage; single point of failure for property information
- Fix approach: Consider splitting into separate JSON/YAML files (meta, pricing, photos, amenities, info-sections) or database-backed configuration system; easier for non-technical updates

**Hardcoded Calendar URL:**
- Issue: Airbnb iCal URL stored directly in `src/data/listing.config.ts` line 140
- Files: `src/data/listing.config.ts` (line 139-140), `src/app/api/calendar/blocked/route.ts` (line 9)
- Impact: Calendar synchronization depends on a static URL; if Airbnb regenerates it, site breaks until code redeploy
- Fix approach: Move to environment variable or admin panel; implement automatic rotation detection with fallback

**Hidden 3D Model Implementation:**
- Issue: Comment at line 220 in `src/components/sections/Hero3D.tsx` states "HIDDEN WHILE NOT EXISTENT 3D MODEL"
- Files: `src/components/sections/Hero3D.tsx` (line 220), `src/components/sections/Scene3D.tsx` (62 lines, unused)
- Impact: Dead code (Scene3D component exists but appears unused); misleading naming (Hero3D doesn't actually render 3D)
- Fix approach: Either remove Scene3D.tsx and the hidden div, or implement proper 3D model integration; clarify component naming (rename Hero3D to HeroCarousel)

**Unused Translation Variables:**
- Issue: `src/components/sections/Hero3D.tsx` imports translation keys `t` (Header), `tHero` (Hero) but some may be unused
- Files: `src/components/sections/Hero3D.tsx` (lines 38-40)
- Impact: Translation system overhead for potentially unused keys; creates maintenance burden
- Fix approach: Audit which translation keys are actually used; remove unused imports

## Marketing Data Concerns

**Fragmented CSV Data Storage:**
- Issue: 80+ CSV files in `marketing/airbnb/data/` (all 2 lines each, header + 1 data row) appear to be individual Airbnb monthly reports
- Files: `marketing/airbnb/data/*.csv` (80+ files with UUID names), `marketing/airbnb/airbnb.csv` (consolidated)
- Impact: Unclear data provenance; no version control on which reports are current; hard to track historical trends
- Fix approach: Consolidate all monthly data into single `airbnb_monthly_consolidated.csv` (which exists); delete individual report CSVs; document data refresh schedule

**Outdated Analysis Data:**
- Issue: `marketing/airbnb/airbnb_analysis.md` dated February 24, 2026 with data through Feb 2026 (now March 27, 2026 - 31 days old)
- Files: `marketing/airbnb/airbnb_analysis.md`, `marketing/airbnb/airbnb.csv`
- Impact: Business decisions based on stale performance data; no current booking/conversion metrics visible
- Fix approach: Establish monthly or weekly data refresh cadence; automate Airbnb report collection; update analysis doc before each planning cycle

**Marketing Folder Not in Git:**
- Issue: `marketing/` folder is untracked (git status shows `?? marketing/`)
- Files: Entire `marketing/` directory (80+ files, 270+ subdirectories in "airbnb_sitio images")
- Impact: Business intelligence data not backed up; analysis and insights can be lost; collaboration on marketing strategy difficult
- Fix approach: Add marketing folder to version control; clarify what should be tracked (analysis docs, consolidated CSVs) vs stored elsewhere (large image folders, raw Airbnb exports); create `.gitignore` rules for marketing/airbnb_sitio*

**Business Intelligence Blind Spot:**
- Issue: Feb 2026 shows 0 bookings, 1.27% view-to-contact rate (down 59.81% YoY), 0% contact-to-book conversion
- Files: `marketing/airbnb/airbnb.csv` (lines 13), `marketing/airbnb/airbnb_analysis.md` (section 4.1)
- Impact: Analysis identifies 1-star review as cause of conversion crash but no monitoring/alerting system in codebase
- Fix approach: Implement review sentiment tracking; add dashboard metrics to website admin panel; set up alerts for conversion rate drops >50%

**Seasonal Pricing Strategy Not Implemented:**
- Issue: Analysis doc recommends 4-tier pricing strategy (Peak/High/Shoulder/Low) but `listing.config.ts` has fixed nightly rate (R$ 340)
- Files: `src/data/listing.config.ts` (line 133), `marketing/airbnb/airbnb_analysis.md` (section 3, lines 175-188)
- Impact: Property underpriced in high season (Dec-Mar) at R$ 340-567 vs recommended R$ 750-850; overpriced in low season (May-Sep) with 0% conversion despite 6-17% view-to-contact rate
- Fix approach: Implement dynamic pricing system with seasonal tiers; integrate with Airbnb pricing controls; test seasonal rates starting next off-season

## Security Considerations

**Sensitive Data in Code Comments:**
- Issue: WhatsApp phone number stored directly in `src/data/listing.config.ts` line 576 (value: "5511919295010")
- Files: `src/data/listing.config.ts` (line 576)
- Impact: Phone number visible in git history and source code; could expose contact info if repo goes public
- Fix approach: Move to environment variable; implement obfuscation layer in client-side JS; use contact form instead of direct phone link

**Airbnb Calendar Token Exposed:**
- Issue: iCal URL includes auth token at `src/data/listing.config.ts` line 140
- Files: `src/data/listing.config.ts` (line 139-140)
- Impact: If repo is public or leaked, calendar URL allows anyone to scrape Airbnb listing data including availability
- Fix approach: Move URL to environment variable; implement server-side proxy (already exists at `src/app/api/calendar/blocked/route.ts` but URL not protected); regenerate token if repo exposed

**No Environment Validation:**
- Issue: Application doesn't validate that critical env vars are present at startup
- Files: Entire app (no startup validation found)
- Impact: Silent failures if calendar URL or WhatsApp number config changes on deployment
- Fix approach: Add startup validation in `src/app/layout.tsx` or middleware to check required config; surface friendly error to admins

## Performance Bottlenecks

**Large Hero Background Array:**
- Issue: `src/components/sections/Hero3D.tsx` hardcodes 13 high-res hero images in HERO_BG_IMAGES array
- Files: `src/components/sections/Hero3D.tsx` (lines 10-24), component renders nearby slides only but all 13 paths are in-memory
- Impact: All image paths loaded even if few are visible; carousel controls at line 112 show "1 / 13" but images not lazy-loaded initially
- Fix approach: Lazy-load hero images; implement image intersection observer; or use dynamic import for image array

**UnOptimized Image Storage:**
- Issue: `marketing/airbnb_sitio images/` folder contains 270+ large JPG files (raw camera output)
- Files: `marketing/airbnb_sitio images/` (entire directory, estimated >2GB)
- Impact: Repo bloat if committed; slow clones; no space for versioning
- Fix approach: Move to cloud storage (Cloudinary, S3) with CDN; keep only final edited images in `public/images/`; document image optimization workflow

## Fragile Areas

**Carousel State Management:**
- Files: `src/components/sections/Hero3D.tsx` (lines 30-54, useState and useEffect)
- Why fragile: Manual interval-based carousel has no error handling; `ROTATE_INTERVAL_MS` hardcoded to 3000ms; carousel buttons don't prevent multiple rapid clicks
- Safe modification: Test carousel with rapid clicking; add debounce to goNext/goPrev; consider using react-use-gesture or framer-motion; document interval timing choice
- Test coverage: No E2E tests for carousel behavior found

**Calendar Integration Without Fallback:**
- Files: `src/app/api/calendar/blocked/route.ts` (lines 8-20), `src/lib/ical.ts` (likely parsing logic)
- Why fragile: API returns empty array on any error (line 19); if Airbnb URL becomes invalid, site silently shows no blocked dates; no retry logic
- Safe modification: Add logging for failures; implement exponential backoff retry; cache previous response as fallback; test with invalid URL
- Test coverage: No tests for calendar fetch errors found

**Photo Array Hardcoded with Manual Category Tags:**
- Files: `src/data/listing.config.ts` (lines 143-341, 50+ photo objects)
- Why fragile: Each photo requires manual category tag; adding/removing photos requires careful array editing; no validation that all categories are represented
- Safe modification: Use data-driven approach; validate photo categories against PhotoCategory type; generate photo array from directory scan; add image optimization script
- Test coverage: No validation that all required categories have images

## Missing Critical Features

**No Booking Management System:**
- Problem: Property generates bookings through Airbnb, but no way to manage them within the website; WhatsApp direct messages only fallback
- Blocks: Can't track guest communication, confirmations, or special requests in one place
- Files affected: `src/data/listing.config.ts` (line 576, phone fallback), entire codebase lacks booking backend

**No Review Response Tracking:**
- Problem: Airbnb analysis doc identifies critical 1-star review but no system to track response deadline or monitor sentiment
- Blocks: Business intelligence team has no visibility into review management workflow
- Files affected: No backend for review data

**No Dynamic Pricing System:**
- Problem: Analysis recommends 4-tier seasonal pricing but app has static R$ 340/night rate
- Blocks: Can't implement recommended pricing strategy to increase revenue 100%+ in peak season
- Files affected: `src/data/listing.config.ts` (line 133)

**No Admin Panel:**
- Problem: All listing changes require code edit and redeploy; marketing data is manual CSVs
- Blocks: Non-technical team can't update pricing, photos, amenities, or info sections
- Files affected: Entire codebase

## Test Coverage Gaps

**No Calendar Sync Tests:**
- What's not tested: iCal parsing, blocked date extraction, API route error handling
- Files: `src/lib/ical.ts` (assumed to exist), `src/app/api/calendar/blocked/route.ts`
- Risk: Airbnb calendar breaks silently; invalid dates could corrupt bookings
- Priority: High (core business feature)

**No Component Interaction Tests:**
- What's not tested: Hero carousel rapid clicks, image loading, carousel controls
- Files: `src/components/sections/Hero3D.tsx`
- Risk: Users encounter broken carousel on mobile; accessibility not verified
- Priority: Medium (UX impact)

**No Integration Tests for Listing Config:**
- What's not tested: All 50+ photos load correctly, all amenity categories defined, all translation keys exist
- Files: `src/data/listing.config.ts`
- Risk: Missing image breaks gallery; missing translation key renders blank text
- Priority: Medium (content delivery)

**No E2E Tests:**
- What's not tested: Full user flow from landing to Airbnb link click, calendar visibility, responsiveness
- Files: Entire app
- Risk: Silent failures in critical booking path
- Priority: High (business critical)

## Scalability Limits

**Static File-Based Configuration:**
- Current capacity: Single `listing.config.ts` file with 577 lines
- Limit: Adding new properties/listings requires duplicating entire config structure; no multi-property support
- Scaling path: Migrate to database-backed config with admin UI; support multiple properties; implement config versioning

**No Analytics Integration:**
- Current capacity: Manual CSV exports from Airbnb; 80+ files showing individual months
- Limit: Can't automate reporting; no real-time dashboard; business metrics require manual analysis monthly
- Scaling path: Integrate Airbnb API for automated data pull; implement analytics dashboard (Metabase, Looker, or custom); set up alerts

**Limited Localization:**
- Current capacity: 3 languages (en, pt, es) hardcoded in translation files
- Limit: Adding new market requires new translation keys across all config files
- Scaling path: Use translation management service (Crowdin, Lokalise); implement feature flags for new markets

## Dependencies at Risk

**Next.js 14.2.5:**
- Risk: Using non-LTS version (14.x is current, will be deprecated in ~12 months)
- Impact: Security patches will stop; breaking changes in Next 15+
- Migration plan: Plan upgrade to Next.js LTS (when available) or accept upgrade cycle; test thoroughly on new versions quarterly

**Three.js 0.163.0:**
- Risk: Requires @react-three/fiber (8.15.12) and @react-three/drei (9.92.7); used but not fully (Scene3D hidden)
- Impact: 100KB+ of unused 3D rendering code shipped to all users; maintenance burden for unused feature
- Migration plan: Remove Scene3D.tsx and @react-three dependencies if 3D model not planned; otherwise fully implement and optimize

**node-ical 0.16.1:**
- Risk: Parses iCal format; last updated ~2 years ago based on version
- Impact: New calendar formats from Airbnb might break parsing
- Migration plan: Monitor Airbnb iCal compatibility; have fallback static date list; consider ical.js if breakage occurs

## Data Quality Issues

**Inconsistent CSV Naming:**
- Issue: 80+ data files use UUID names (e.g., `0089d759-ac7a-4738-96f3-5d6e62c0dc02.csv`); one consolidated file exists (`airbnb.csv`)
- Files: `marketing/airbnb/data/*.csv`
- Impact: Unclear which file is authoritative; duplicate data; no tracking of data freshness
- Fix approach: Keep only `marketing/airbnb/data/airbnb_monthly_consolidated.csv`; delete UUID files; add last-updated timestamp

**Missing Monthly Data for Current Month:**
- Issue: Last data point is Feb 24, 2026 (partial month); no March 2026 data visible
- Files: `marketing/airbnb/airbnb.csv` (line 13)
- Impact: Business decisions made on 4+ week old data
- Fix approach: Set up weekly/daily data exports from Airbnb; automate CSV generation

**Decimal Precision Issues:**
- Issue: Conversion rates like "2.65%" stored as strings in CSV with % sign
- Files: `marketing/airbnb/airbnb.csv`
- Impact: Can't do mathematical operations on rates; requires parsing before analysis
- Fix approach: Store as decimal numbers (0.0265) in CSV; use proper number formats in analysis

---

*Concerns audit: 2026-03-27*
