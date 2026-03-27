# Phase 1: Foundation - Research

**Researched:** 2026-03-27
**Domain:** Airbnb listing optimization, pricing strategy, guest communication, website config sync
**Confidence:** HIGH

## Summary

Phase 1 is primarily an operational phase with a small code change component. The work breaks into three domains: (1) pricing corrections on the Airbnb platform and in the website's `listing.config.ts`, (2) listing optimization (photos, title, settings) on Airbnb, and (3) guest communication templates (Airbnb Scheduled Messages + house manual document). The code changes are confined to a single file -- `src/data/listing.config.ts` -- which is the single source of truth for pricing displayed across 7+ components (blog posts, FAQ, JSON-LD SEO, calendar, metrics, sticky CTA).

The most important finding is that `listing.config.ts` pricing values propagate automatically to all website components via template literals and calculations. Changing `nightlyRate`, `weeklyDiscountPercent`, `monthlyDiscountPercent`, and adding `cleaningFee` in one place will correctly update the entire website with zero additional code changes needed. The `pricing.ts` utility already handles `cleaningFee` via `config.cleaningFee ?? 0`.

**Primary recommendation:** Execute pricing changes first (both Airbnb platform and code config), then listing optimization, then guest communication -- in that order, because pricing is the #1 revenue lever (current ADR crashed to R$178/night vs target R$280+).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Set weekday base rate to R$280/night and weekend (Fri/Sat) rate to R$380/night -- these are floor prices, never go below
- **D-02:** Reduce weekly discount from current 33% to 12% (midpoint of 10-15% target range)
- **D-03:** Reduce monthly discount from current 50% to 27% (midpoint of 25-30% target range)
- **D-04:** Add cleaning fee of R$180 to discourage low-value 1-night stays
- **D-05:** Friday/Saturday premium is 25-35% above weekday base -- R$380 weekend rate already satisfies this (35.7% above R$280)
- **D-06:** Easter (Apr 17-21): Set at R$600/night -- midpoint of R$500-700 range, competitive for holiday period
- **D-07:** Labor Day (May 1-2): Set at R$500/night -- midpoint of R$450-600 range
- **D-08:** Holiday pricing is manual override in Airbnb calendar, not dynamic -- set specific dates directly
- **D-09:** Audit existing 270 photos in `marketing/airbnb_sitio images/` -- select best 25-30 for listing
- **D-10:** Hero photo must be golden-hour exterior/pool shot -- bright, inviting, shows the property's best feature
- **D-11:** Photo ordering: Hero exterior -> Pool area -> Living areas -> Bedrooms -> Kitchen -> BBQ -> Nature/surroundings
- **D-12:** Listing title must include location keywords: sitio, natureza, piscina, churrasco, Sorocaba, Sao Paulo
- **D-13:** Set minimum stay to 2 nights (allow 1-night only for weekday gap-fills manually)
- **D-14:** Set advance notice to 1-2 days (not same-day) to ensure preparation quality
- **D-15:** Review and optimize Airbnb categories -- ensure Countryside and Tropical are selected
- **D-16:** Three templates: pre-stay (3 days before), arrival day (morning of check-in), post-checkout (within 24 hours)
- **D-17:** Language: Portuguese primary with key practical info (WiFi password, emergency number) also in English for international guests
- **D-18:** Tone: Warm and professional -- friendly host personality, clear practical information, not overly formal
- **D-19:** Pre-stay message includes: directions, what to expect, tips for the area, what to bring
- **D-20:** Arrival day message includes: check-in instructions, welcome info, WhatsApp number for emergencies
- **D-21:** Post-checkout message: personalized thank-you referencing their stay, gentle review request, mention they're welcome back
- **D-22:** All templates saved as Airbnb Scheduled Messages for auto-send
- **D-23:** Create a house manual / welcome guide document covering house rules, WiFi, pool hours, BBQ instructions, local recommendations
- **D-24:** Update `src/data/listing.config.ts` pricing values to match new Airbnb settings (nightlyRate, weeklyDiscountPercent, monthlyDiscountPercent, add cleaningFee)
- **D-25:** Website pricing display should reflect the new rates so visitors see consistent information

### Claude's Discretion
- Exact listing title wording (within keyword constraints)
- Exact listing description copy optimization
- Photo selection from the 270 available (within the hero/ordering guidelines)
- House manual formatting and structure
- Specific wording of guest templates (within tone/content guidelines)

### Deferred Ideas (OUT OF SCOPE)
- PriceLabs dynamic pricing integration -- Phase 2 (PRICE-07)
- Booking.com and Brazilian platform expansion -- Phase 2
- Facebook/Instagram ad restructuring -- Phase 2
- Instagram content strategy -- Phase 2
- Professional photo/video shoot -- Out of scope per REQUIREMENTS.md (start with iPhone, upgrade if ROI proven)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PRICE-01 | Set ADR floor pricing -- never below R$280/night weekdays, R$380/night weekends | Airbnb pricing calendar allows per-day rate overrides. Website config change: `nightlyRate: 280`. Weekend premium set on Airbnb only (website shows base rate). |
| PRICE-02 | Reduce weekly discount from 33% to 10-15% | Decision: 12%. Config change: `weeklyDiscountPercent: 12`. Airbnb settings -> Pricing -> Length-of-stay discounts. |
| PRICE-03 | Reduce monthly discount from 50% to 25-30% | Decision: 27%. Config change: `monthlyDiscountPercent: 27`. Same Airbnb settings path. |
| PRICE-04 | Set holiday premium pricing for Easter (Apr 17-21) at R$600/night and Labor Day (May 1-2) at R$500/night | Airbnb calendar -> select dates -> set custom nightly price. Manual per-date override. |
| PRICE-05 | Implement day-of-week yield management (Fri/Sat premium 25-35% above weekday base) | Airbnb Smart Pricing or manual calendar overrides for Fri/Sat. Decision: R$380 weekend = 35.7% above R$280. |
| PRICE-06 | Add cleaning fee of R$150-200 | Decision: R$180. Airbnb Listing -> Pricing -> Fees. Config change: add `cleaningFee: 180`. |
| LISTING-01 | Audit and upgrade listing photos -- bright hero shot, 25+ photos | 267 photos available in `marketing/airbnb_sitio images/`. Select best 25-30 per D-09 through D-11. |
| LISTING-02 | Optimize listing title and description for Airbnb SEO | Airbnb title max 50 chars, only ~32 visible on mobile. Must front-load key features. Keywords per D-12. |
| LISTING-03 | Set minimum stay to 2 nights | Airbnb Listing -> Availability -> Trip length -> Minimum night stay = 2. |
| LISTING-04 | Set advance notice to 1-2 days | Airbnb Listing -> Availability -> Advance notice -> 1 day (per D-14). |
| LISTING-05 | Review and optimize Airbnb categories | Verify Countryside and Tropical are selected. Check property type is correct. |
| COMM-01 | Create pre-stay message template (3 days before arrival) | Airbnb Scheduled Messages feature. Trigger: 3 days before check-in. Content per D-19. |
| COMM-02 | Create day-of-arrival message template | Trigger: check-in day morning. Content per D-20. |
| COMM-03 | Create post-checkout review request message | Trigger: 1 day after checkout. Content per D-21. |
| COMM-04 | Maintain response time under 1 hour during operating hours | Operational habit, not a deliverable. Enable Airbnb push notifications. |
| COMM-05 | Create house manual / welcome guide document | Markdown or PDF document. Content per D-23. Covers house rules, WiFi, pool, BBQ, local recommendations. |
</phase_requirements>

## Architecture Patterns

### Phase Work Structure

This phase has two distinct work types:

1. **Airbnb Platform Changes (manual, owner-executed):** Pricing settings, calendar overrides, photo upload, title/description, Scheduled Messages setup. These produce written instructions/guides for the owner to follow step-by-step.

2. **Code Changes (automated, git-committed):** Update `src/data/listing.config.ts` pricing values. Small, contained change that propagates automatically.

### Code Change Impact Map

The `listing.config.ts` pricing section is consumed by these components:

```
src/data/listing.config.ts (CHANGE HERE)
  |
  +-- src/lib/pricing.ts (calculateTotalPrice) -- auto-propagates
  +-- src/data/blog-posts.ts -- template literals, auto-propagates
  +-- src/components/sections/CalendarSection.tsx -- reads nightlyRate, auto-propagates
  +-- src/components/sections/MetricsSection.tsx -- reads nightlyRate, auto-propagates
  +-- src/components/sections/FAQSection.tsx -- calculates discounted rates inline, auto-propagates
  +-- src/components/seo/JsonLd.tsx -- structured data pricing, auto-propagates
  +-- src/components/layout/StickyMobileCTA.tsx -- reads nightlyRate, auto-propagates
```

**Key insight:** All consumers use `listingConfig.pricing.nightlyRate`, `.weeklyDiscountPercent`, `.monthlyDiscountPercent` via template literals or calculations. Changing the config values is the only code edit needed. Zero component changes required.

### Config Change Specification

Current values -> New values:

```typescript
// BEFORE
pricing: {
  nightlyRate: 340,
  weeklyDiscountPercent: 33,
  monthlyDiscountPercent: 50,
  currency: "BRL",
}

// AFTER
pricing: {
  nightlyRate: 280,       // weekday base (D-01)
  weeklyDiscountPercent: 12,   // reduced from 33% (D-02)
  monthlyDiscountPercent: 27,  // reduced from 50% (D-03)
  cleaningFee: 180,            // new field, already in interface (D-04)
  currency: "BRL",
}
```

**Note on `nightlyRate: 280` vs `340`:** The website shows the base/weekday rate. The R$380 weekend rate is an Airbnb-specific override (Fri/Sat in Airbnb calendar) and does not appear in `listing.config.ts` because the website presents "starting from R$X/night" which should show the lowest (weekday) rate. This is consistent with Airbnb's own "from R$X/night" display behavior.

### Deliverable Types

| Deliverable | Type | Format | Where It Lives |
|-------------|------|--------|----------------|
| Pricing instructions | Owner action guide | Markdown document in `.planning/` | Instructions for Airbnb settings changes |
| Holiday pricing calendar | Owner action guide | Date-by-date rate table | Instructions for Airbnb calendar overrides |
| Listing title/description | Copy | Portuguese text with English backup | In the guide, owner pastes into Airbnb |
| Photo selection & ordering | Owner action guide | Numbered list of filenames from the 267 | Owner uploads to Airbnb in order |
| Guest message templates | Copy | Three Portuguese messages with shortcodes | Owner creates in Airbnb Scheduled Messages |
| House manual | Document | Markdown/PDF | Sent to guests, also stored in repo |
| listing.config.ts update | Code change | TypeScript | Git commit, auto-deploy via Vercel |

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Dynamic pricing | Custom pricing algorithm | PriceLabs (Phase 2, PRICE-07) | Market data, competitor analysis, demand signals are impossible to replicate manually |
| Guest messaging automation | Custom messaging system | Airbnb Scheduled Messages | Built into platform, supports shortcodes, handles edge cases (last-minute bookings, short stays) |
| Channel management | iCal sync scripts | Manual for now, Hospitable/Stays.net at scale (v2, OPS-01) | Phase 1 is Airbnb-only, no multi-channel sync needed yet |
| Photo editing | Custom image pipeline | Owner's phone + basic editing (brightness/contrast) | 267 existing photos are sufficient; professional shoot deferred |

## Common Pitfalls

### Pitfall 1: nightlyRate Confusion (Website vs Airbnb)
**What goes wrong:** Setting `nightlyRate` in listing.config.ts to 380 (weekend rate) or an average, causing website to show inflated "from" price that doesn't match Airbnb's "from" price.
**Why it happens:** The property has different weekday (R$280) and weekend (R$380) rates, but the website config only has one `nightlyRate` field.
**How to avoid:** Set `nightlyRate: 280` (the weekday/minimum rate). This matches "starting from R$X/night" convention used by both the website and Airbnb search results.
**Warning signs:** Website shows a higher "starting from" price than Airbnb search results.

### Pitfall 2: Airbnb 16% Host Fee Not Factored Into Pricing
**What goes wrong:** Owner sets R$280/night and expects R$280 revenue, but Airbnb takes 16% (Brazil), netting only R$235/night.
**Why it happens:** Airbnb's fee structure changed in late 2025 to host-only 16% in Brazil (was previously split with guests).
**How to avoid:** The R$280 floor already accounts for this -- the CONTEXT.md decisions were made with platform fees in mind. Document that net revenue per R$280 night = ~R$235 after Airbnb's 16% cut.
**Warning signs:** Revenue calculations that assume 100% of nightly rate.

### Pitfall 3: Holiday Pricing Not Set Before Bookings Come In
**What goes wrong:** Easter (Apr 17-21) gets booked at the regular R$280-380 rate instead of R$600 because holiday pricing wasn't set yet.
**Why it happens:** Holiday pricing requires manual calendar overrides that are easy to forget. Easter is only 21 days away.
**How to avoid:** Set holiday pricing FIRST, before any other changes. Easter dates are the most time-critical deliverable.
**Warning signs:** Checking Airbnb calendar and seeing standard rates on Apr 17-21.

### Pitfall 4: Airbnb Title Character Limit (50 chars, 32 visible on mobile)
**What goes wrong:** Title includes all keywords (sitio, natureza, piscina, churrasco, Sorocaba, Sao Paulo) but exceeds 50 characters, getting truncated to meaningless text on mobile.
**Why it happens:** D-12 lists 6 keywords to include, but fitting all in 50 characters is impossible.
**How to avoid:** Front-load the 2-3 most important keywords in first 32 characters. Use the description for remaining keywords. Title formula: `[Property Type] + [Top Amenity] + [Location]`.
**Warning signs:** Title longer than 50 characters or key info appears after character 32.

### Pitfall 5: Scheduled Messages Shortcodes Require Listing Info
**What goes wrong:** Shortcodes like `{wifi_password}` or `{check_in_time}` display as blank or "unavailable" in messages.
**Why it happens:** Airbnb shortcodes pull from listing details. If WiFi info, check-in instructions, or directions aren't filled in on the listing, shortcodes return empty.
**How to avoid:** Before creating Scheduled Messages, verify all listing detail fields are filled in: WiFi network/password, check-in instructions, house rules, directions. Then use shortcodes.
**Warning signs:** Test-sending a scheduled message and seeing blank placeholders.

### Pitfall 6: Discount Reduction Without ADR Verification
**What goes wrong:** Owner changes weekly/monthly discounts on Airbnb but the Airbnb UI shows discounted rates differently than expected, or the discount interacts with promotions.
**Why it happens:** Airbnb may have active promotions or "new listing" discounts stacked on top of length-of-stay discounts.
**How to avoid:** After changing discount percentages, check the listing as a guest for various stay lengths (2 nights, 7 nights, 28 nights) to verify displayed prices match expectations.
**Warning signs:** Airbnb showing prices that are still lower than expected after discount changes.

## Code Examples

### listing.config.ts Update (the only code change)

```typescript
// Source: src/data/listing.config.ts, lines 132-137
// CURRENT:
pricing: {
  nightlyRate: 340,
  weeklyDiscountPercent: 33,
  monthlyDiscountPercent: 50,
  currency: "BRL",
},

// UPDATED (Phase 1):
pricing: {
  nightlyRate: 280,
  weeklyDiscountPercent: 12,
  monthlyDiscountPercent: 27,
  cleaningFee: 180,
  currency: "BRL",
},
```

### Resulting Automatic Price Propagation

After the config change, all website prices update automatically:

| Component | What Changes | Old Value | New Value |
|-----------|-------------|-----------|-----------|
| CalendarSection | Base rate display | R$ 340/night | R$ 280/night |
| FAQSection (pt) | Weekly discounted rate | R$ 228/night (340*0.67) | R$ 246/night (280*0.88) |
| FAQSection (pt) | Monthly discounted rate | R$ 170/night (340*0.50) | R$ 204/night (280*0.73) |
| JsonLd SEO | lowPrice | R$ 170 | R$ 204 |
| JsonLd SEO | highPrice | R$ 340 | R$ 280 |
| StickyMobileCTA | Display rate | R$ 340 | R$ 280 |
| Blog posts | "a partir de R$ X" | R$ 340 | R$ 280 |
| Blog posts | Discount percentages | 33% / 50% | 12% / 27% |

### Airbnb Listing Title Examples (Claude's Discretion)

Title must be under 50 characters, front-load key info in first 32 chars:

```
Option A: "Sitio c/ piscina em Sao Roque SP"    (34 chars - fits mobile)
Option B: "Sitio natureza piscina Sao Roque"     (33 chars - fits mobile)
Option C: "Sitio Girassol - piscina, natureza"   (35 chars - fits mobile)
```

Note: "churrasco" and "Sorocaba" move to the description body since they won't fit in 50 chars alongside more important keywords.

### Airbnb Scheduled Message Template Structure

```
Pre-stay (3 days before check-in):
  Trigger: 3 days before check-in at 10:00 AM
  Shortcodes: {guest_first_name}, {check_in_date}, {check_in_time}
  Content: Directions, what to bring, area tips, shopping stops
  Language: Portuguese primary, WiFi/emergency in English too

Arrival day (morning of check-in):
  Trigger: Check-in day at 9:00 AM
  Shortcodes: {guest_first_name}, {wifi_password}, {check_in_time}
  Content: Check-in steps, welcome info, WhatsApp for emergencies
  Language: Portuguese primary, practical info bilingual

Post-checkout (1 day after):
  Trigger: 1 day after checkout at 11:00 AM
  Shortcodes: {guest_first_name}
  Content: Thank you, review request, welcome-back note
  Language: Portuguese
```

### House Manual Structure (Claude's Discretion)

Recommended 8-page structure based on vacation rental best practices:

```
1. Welcome & Host Introduction (1 page)
2. WiFi & Essential Info (1 page - keep near top so guests find it fast)
3. Check-in / Check-out Instructions (1 page)
4. House Rules & Pool Rules (1 page)
5. Kitchen & BBQ Guide (1 page)
6. Property Map & Amenities (1 page)
7. Local Recommendations (1 page - restaurants, wineries, trails)
8. Emergency Contacts & Important Numbers (1 page)
```

Format: Markdown document in repo, convertible to PDF for sending to guests.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Airbnb split fee (3% host + 14% guest) | Host-only fee 16% in Brazil | Aug-Dec 2025 | Host pays 16% on total subtotal including cleaning fee. Net revenue = rate * 0.84. |
| Manual guest messaging | Airbnb Scheduled Messages with shortcodes | Available since ~2023, improved 2025 | Auto-sends based on triggers (booking, check-in, checkout). Supports dynamic fields. |
| Static listing titles | Airbnb SEO-optimized titles (50 char max) | Ongoing | Front-load key features in first 32 chars (mobile cutoff). Avoid ALL CAPS and emojis. |

## Open Questions

1. **Current Airbnb listing title**
   - What we know: Current title is "Authentic Brazilian Sitio - Offroad, Nature, BBQ" (referenced in marketing analysis)
   - What's unclear: Whether this is still the live title or has been changed
   - Recommendation: Plan should include checking current title before writing new one

2. **Existing Scheduled Messages on Airbnb**
   - What we know: Nothing about whether any automated messages are already set up
   - What's unclear: Whether owner already has partial message automation
   - Recommendation: Plan should include checking for existing scheduled messages before creating new ones

3. **Photo quality assessment**
   - What we know: 267 photos exist as DSC_XXXX.JPG files (camera photos, not phone). They are raw files without descriptive names.
   - What's unclear: Which photos show golden-hour shots, pool, exteriors, etc. Files are numbered sequentially without category labels.
   - Recommendation: Photo selection requires visual review by the owner (or providing a numbered shortlist with categories to verify)

## Environment Availability

> Step 2.6: This phase is primarily Airbnb platform operations (manual) with a single TypeScript config file change. External dependencies are minimal.

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Build/deploy listing.config.ts change | Assumed (Next.js project) | 18+ | -- |
| Airbnb Host Account | All platform changes | Owner has access | -- | -- |
| Vercel | Auto-deploy on git push | Integrated (@vercel/analytics present) | -- | -- |

**Missing dependencies with no fallback:** None
**Missing dependencies with fallback:** None

## Project Constraints (from CLAUDE.md)

Directives from CLAUDE.md that affect this phase:

- **Immutable only:** The listing.config.ts update must use spread/Object.assign pattern if modifying at runtime (but this is a static config edit, so standard assignment is fine)
- **Named exports exclusively:** `listingConfig` is already a named export -- maintain this
- **Type everything explicitly:** `cleaningFee` field already exists in the `ListingConfig` interface as `cleaningFee?: number` -- just add the value
- **Use pnpm for kaszek-os, uv/pip for kaszek-services:** This project uses npm (package-lock.json present, not a kaszek-os/services project)
- **Conventional commits:** Use `fix:` prefix for the pricing config change (it's fixing incorrect pricing)
- **Run typecheck after code changes:** Run `npx tsc --noEmit` after editing listing.config.ts
- **Default exports for React components:** Not affected (no component changes)
- **Named exports for utility functions and types:** Not affected
- **@/* import alias:** Not affected (no new imports)
- **GSD Workflow Enforcement:** All changes go through GSD workflow

## Sources

### Primary (HIGH confidence)
- `src/data/listing.config.ts` -- direct code inspection of pricing config and interface
- `src/lib/pricing.ts` -- direct code inspection of calculateTotalPrice function
- `src/components/sections/FAQSection.tsx`, `src/components/seo/JsonLd.tsx`, `src/data/blog-posts.ts` -- verified all pricing consumers via grep
- Airbnb Help Center (article 2897) -- Scheduled Messages setup, triggers, shortcodes
- Airbnb Resource Center -- Title guidelines (50 char limit, 32 char mobile cutoff)

### Secondary (MEDIUM confidence)
- [PriceLabs Blog](https://hello.pricelabs.co/blog/airbnb-listing-optimizer-checklist/) -- Listing optimization checklist 2026
- [Hostaway Blog](https://www.hostaway.com/blog/airbnb-guest-messaging-templates/) -- Guest messaging template best practices
- [Beyond Pricing](https://www.beyondpricing.com/blog/airbnb-service-fee-changes-2025) -- Airbnb fee structure changes 2025
- [Complete Hospitality Management](https://completehospitalitymanagement.com/templates-automated-airbnb-messages/) -- Automated message templates 2026
- [Touchstay](https://touchstay.com/blog/airbnb-house-manual-template) -- House manual structure best practices

### Tertiary (LOW confidence)
- Easter/holiday pricing for Sao Paulo region -- no specific competitor data found. R$600/night Easter and R$500/night Labor Day are the locked decisions from user context, validated against the REQUIREMENTS.md range of R$500-700 and R$450-600 respectively.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- single config file change, verified all consumers via grep, interface already supports cleaningFee
- Architecture: HIGH -- impact map is complete and verified against actual code
- Pitfalls: HIGH -- based on actual Airbnb platform behavior and verified code patterns
- Airbnb platform operations: MEDIUM -- based on official Airbnb help articles but platform UI may have changed
- Holiday pricing competitiveness: LOW -- no competitor benchmark data available for Sao Roque Easter 2026

**Research date:** 2026-03-27
**Valid until:** 2026-04-10 (pricing decisions are time-sensitive due to Easter on Apr 17-21)
