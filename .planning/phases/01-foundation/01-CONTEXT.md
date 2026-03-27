# Phase 1: Foundation - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix Airbnb pricing (ADR floor, discount reduction, cleaning fee, holiday premiums), optimize the listing (photos, title, SEO keywords, minimum stay, advance notice), and create guest communication templates (pre-stay, arrival day, post-checkout review request). The conversion destination must be fixed before any marketing spend in Phase 2.

Requirements: PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, PRICE-06, LISTING-01, LISTING-02, LISTING-03, LISTING-04, LISTING-05, COMM-01, COMM-02, COMM-03, COMM-04, COMM-05

</domain>

<decisions>
## Implementation Decisions

### Pricing Floor Strategy
- **D-01:** Set weekday base rate to R$280/night and weekend (Fri/Sat) rate to R$380/night — these are floor prices, never go below
- **D-02:** Reduce weekly discount from current 33% to 12% (midpoint of 10-15% target range)
- **D-03:** Reduce monthly discount from current 50% to 27% (midpoint of 25-30% target range)
- **D-04:** Add cleaning fee of R$180 to discourage low-value 1-night stays
- **D-05:** Friday/Saturday premium is 25-35% above weekday base — R$380 weekend rate already satisfies this (35.7% above R$280)

### Holiday Premium Pricing
- **D-06:** Easter (Apr 17-21): Set at R$600/night — midpoint of R$500-700 range, competitive for holiday period
- **D-07:** Labor Day (May 1-2): Set at R$500/night — midpoint of R$450-600 range
- **D-08:** Holiday pricing is manual override in Airbnb calendar, not dynamic — set specific dates directly

### Listing Optimization Approach
- **D-09:** Audit existing 270 photos in `marketing/airbnb_sitio images/` — select best 25-30 for listing
- **D-10:** Hero photo must be golden-hour exterior/pool shot — bright, inviting, shows the property's best feature
- **D-11:** Photo ordering: Hero exterior → Pool area → Living areas → Bedrooms → Kitchen → BBQ → Nature/surroundings
- **D-12:** Listing title must include location keywords: sítio, natureza, piscina, churrasco, Sorocaba, São Paulo
- **D-13:** Set minimum stay to 2 nights (allow 1-night only for weekday gap-fills manually)
- **D-14:** Set advance notice to 1-2 days (not same-day) to ensure preparation quality
- **D-15:** Review and optimize Airbnb categories — ensure Countryside and Tropical are selected

### Guest Communication Templates
- **D-16:** Three templates: pre-stay (3 days before), arrival day (morning of check-in), post-checkout (within 24 hours)
- **D-17:** Language: Portuguese primary with key practical info (WiFi password, emergency number) also in English for international guests
- **D-18:** Tone: Warm and professional — friendly host personality, clear practical information, not overly formal
- **D-19:** Pre-stay message includes: directions, what to expect, tips for the area, what to bring
- **D-20:** Arrival day message includes: check-in instructions, welcome info, WhatsApp number for emergencies
- **D-21:** Post-checkout message: personalized thank-you referencing their stay, gentle review request, mention they're welcome back
- **D-22:** All templates saved as Airbnb Scheduled Messages for auto-send
- **D-23:** Create a house manual / welcome guide document covering house rules, WiFi, pool hours, BBQ instructions, local recommendations

### Website Config Sync
- **D-24:** Update `src/data/listing.config.ts` pricing values to match new Airbnb settings (nightlyRate, weeklyDiscountPercent, monthlyDiscountPercent, add cleaningFee)
- **D-25:** Website pricing display should reflect the new rates so visitors see consistent information

### Claude's Discretion
- Exact listing title wording (within keyword constraints)
- Exact listing description copy optimization
- Photo selection from the 270 available (within the hero/ordering guidelines)
- House manual formatting and structure
- Specific wording of guest templates (within tone/content guidelines)

</decisions>

<canonical_refs>
## Canonical References

No external specs — requirements are fully captured in REQUIREMENTS.md and decisions above.

### Project context
- `.planning/PROJECT.md` — Property details, performance data (Nov 2025 - Mar 2026), current ADR problem (R$178 in March vs target R$280+)
- `.planning/REQUIREMENTS.md` — Full requirement definitions for PRICE-01 through COMM-05
- `.planning/ROADMAP.md` — Phase 1 success criteria (5 criteria that must be TRUE)

### Existing code
- `src/data/listing.config.ts` — Current pricing config (nightlyRate: 340, weeklyDiscount: 33%, monthlyDiscount: 50%, no cleaningFee) — must be updated
- `src/lib/pricing.ts` — Pricing calculation utility that reads from listing.config.ts
- `src/data/blog-posts.ts` — References listing.config.ts pricing values in blog content

### Marketing data
- `marketing/airbnb/` — Airbnb performance data and listing analysis
- `marketing/airbnb_sitio images/` — 270 property photos for listing audit
- `marketing/facebook-ads-data/` — Facebook ads data (informational, not directly used in Phase 1)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/data/listing.config.ts`: Central pricing config — single source of truth for nightlyRate, weeklyDiscountPercent, monthlyDiscountPercent. Updating here propagates to all website displays.
- `src/lib/pricing.ts`: `calculateTotalPrice()` function uses listing.config.ts values — will automatically reflect new pricing after config update.
- `src/data/blog-posts.ts`: Blog posts reference `listingConfig.pricing.*` values dynamically — will auto-update when config changes.

### Established Patterns
- Pricing is config-driven: all pricing values flow from `listing.config.ts` through the app
- The `cleaningFee` field exists in the TypeScript interface (`cleaningFee?: number`) but is currently not set — adding it is straightforward
- Content is multi-language: pricing descriptions exist in pt/en/es in blog posts and listing config

### Integration Points
- `listing.config.ts` pricing section is consumed by: CalendarSection, MetricsSection, JsonLd (SEO), pricing.ts utility
- Airbnb iCal sync (`src/lib/ical.ts`) fetches blocked dates — no changes needed for Phase 1
- Website SEO components will reflect new pricing in structured data (JsonLd)

</code_context>

<specifics>
## Specific Ideas

- Current ADR crashed to R$178/night in March due to excessive discounts (33% weekly, 50% monthly) — the pricing floor is the #1 priority fix
- The 270 photos in `marketing/airbnb_sitio images/` are the pool to select from — no new photo shoot needed for Phase 1
- Easter (Apr 17-21) is the first major revenue opportunity — must be priced before marketing begins
- Guest templates should feel personal (host name, property-specific details), not generic Airbnb boilerplate
- House manual is a deliverable separate from the message templates — it's the comprehensive reference guests use during their stay

</specifics>

<deferred>
## Deferred Ideas

- PriceLabs dynamic pricing integration — Phase 2 (PRICE-07)
- Booking.com and Brazilian platform expansion — Phase 2
- Facebook/Instagram ad restructuring — Phase 2
- Instagram content strategy — Phase 2
- Professional photo/video shoot — Out of scope per REQUIREMENTS.md (start with iPhone, upgrade if ROI proven)

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-27*
