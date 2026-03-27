---
phase: 01-foundation
plan: 01
subsystem: pricing
tags: [airbnb, pricing-strategy, listing-config, revenue-optimization]

# Dependency graph
requires: []
provides:
  - Updated listing.config.ts with new pricing values (280/12/27/180)
  - Step-by-step Airbnb pricing change guide for owner
  - Holiday pricing instructions for Easter and Labor Day
affects: [01-02, 01-03, 02-distribution]

# Tech tracking
tech-stack:
  added: []
  patterns: [config-driven pricing propagation]

key-files:
  created:
    - .planning/phases/01-foundation/deliverables/airbnb-pricing-guide.md
  modified:
    - src/data/listing.config.ts

key-decisions:
  - "Website nightlyRate set to R$280 (weekday base / lowest rate) to match 'starting from' convention"
  - "cleaningFee field added to config (was already in TypeScript interface as optional)"

patterns-established:
  - "Pricing config is single source of truth -- all website displays auto-propagate from listing.config.ts"

requirements-completed: [PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, PRICE-06]

# Metrics
duration: 2min
completed: 2026-03-27
---

# Phase 1 Plan 01: Pricing Config & Airbnb Guide Summary

**Updated website pricing to R$280 base/12% weekly/27% monthly/R$180 cleaning fee and created step-by-step Airbnb pricing change guide with Easter R$600 and Labor Day R$500 holiday pricing instructions**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-27T23:55:25Z
- **Completed:** 2026-03-27T23:57:44Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Updated listing.config.ts pricing from 340/33/50 to 280/12/27 with R$180 cleaning fee -- all website displays auto-propagate
- Created comprehensive Airbnb pricing change guide with 6 sections covering holiday pricing, base rates, discounts, cleaning fee, revenue impact, and verification checklist
- TypeScript compiles cleanly with the new cleaningFee field (already supported in interface)

## Task Commits

Each task was committed atomically:

1. **Task 1: Update listing.config.ts pricing values** - `9c7f761` (fix)
2. **Task 2: Create Airbnb pricing change guide for owner** - `c80b996` (docs)

## Files Created/Modified
- `src/data/listing.config.ts` - Updated pricing values: nightlyRate 280, weeklyDiscountPercent 12, monthlyDiscountPercent 27, cleaningFee 180
- `.planning/phases/01-foundation/deliverables/airbnb-pricing-guide.md` - Step-by-step guide for owner to apply matching pricing changes on Airbnb platform

## Decisions Made
- Website nightlyRate set to R$280 (weekday base rate) because the website shows "starting from" lowest rate, matching Airbnb convention. Weekend R$380 is an Airbnb-only calendar override.
- cleaningFee: 180 added directly -- no interface changes needed since the field was already defined as optional (`cleaningFee?: number`) in the ListingConfig type.

## Deviations from Plan

None -- plan executed exactly as written.

## Known Stubs

None -- all pricing values are real production values, no placeholders.

## Issues Encountered

None.

## User Setup Required

**Airbnb platform changes require manual configuration by the owner.** See the pricing guide at `.planning/phases/01-foundation/deliverables/airbnb-pricing-guide.md` for:
- Holiday pricing to set in Airbnb calendar (Easter R$600, Labor Day R$500)
- Base rate and weekend rate configuration
- Discount percentage changes (12% weekly, 27% monthly)
- Cleaning fee addition (R$180)
- Verification checklist to confirm all changes

## Next Phase Readiness
- Website pricing is live (auto-deploys via Vercel on commit)
- Airbnb pricing guide is ready for owner to execute
- Pricing foundation is complete for Plans 02 (listing optimization) and 03 (guest communications)

## Self-Check: PASSED

All files verified present. All commits verified in git history.

---
*Phase: 01-foundation*
*Completed: 2026-03-27*
