# Phase 2: Distribution + Marketing Launch - Context

**Gathered:** 2026-03-28
**Status:** Ready for planning

<domain>
## Phase Boundary

Expand the property from Airbnb-only to 3+ booking platforms (Booking.com, VRBO/AlugueTemporada, TemporadaLivre) with calendar sync and double-booking prevention. Restructure Facebook/Instagram ads from Traffic to Leads/Messages objective with retargeting. Launch Instagram content cadence at 3-4 Reels/week. Start PriceLabs dynamic pricing trial.

Requirements: PRICE-07, DIST-01, DIST-02, DIST-03, DIST-04, DIST-05, ADS-01, ADS-02, ADS-04, ADS-06, INSTA-01, INSTA-02

</domain>

<decisions>
## Implementation Decisions

### Multi-Platform Listing Strategy
- **D-01:** Same base pricing on all platforms (R$280 weekday / R$380 weekend floor from Phase 1) — no channel-specific discounts to prevent guest confusion and rate parity violations
- **D-02:** Adapt descriptions to each platform's norms (Booking.com is more structured/factual, VRBO is more narrative, TemporadaLivre is Portuguese-only) while keeping same core content and all 6 SEO keywords from Phase 1 (sítio, natureza, piscina, churrasco, Sorocaba, São Paulo)
- **D-03:** Use the same 25-30 photos selected in Phase 1 across all platforms, reordered if platform allows different hero image optimization
- **D-04:** Booking.com registration should be started immediately — takes 1-2 weeks for approval (per STATE.md blocker)

### Calendar Sync Approach
- **D-05:** iCal bidirectional sync between Airbnb and Booking.com (both support iCal export/import natively)
- **D-06:** iCal sync between Airbnb and VRBO/AlugueTemporada (VRBO supports iCal)
- **D-07:** TemporadaLivre: manual date blocking as fallback — iCal support is LOW confidence (per STATE.md blocker, may not support sync)
- **D-08:** Import iCal URLs with platform-default refresh intervals — no custom API integration needed
- **D-09:** Create a guide documenting each platform's iCal export URL location and import steps

### Double-Booking Prevention Protocol
- **D-10:** Notification-based workflow: when booking notification arrives on any platform, owner blocks those dates on ALL other platforms within 1 hour
- **D-11:** First confirmed booking wins — if simultaneous bookings occur, earlier confirmation timestamp takes priority, later booking is declined with apology and rebooking offer
- **D-12:** Protocol documented as a step-by-step checklist with platform-specific instructions for blocking dates
- **D-13:** Owner sets up push notifications on phone for all platforms to ensure <1 hour response

### Ad Restructuring (Traffic → Leads/Messages)
- **D-14:** Switch ALL Facebook/Instagram campaigns from Traffic objective to Messages objective — drives WhatsApp/Messenger inquiries for direct booking conversation
- **D-15:** Zero active campaigns using Traffic objective after restructuring (Success Criteria #4)
- **D-16:** Monthly ad budget starting at R$500-800/month with weekly ROI review — ad spend must show clear ROI per project constraints
- **D-17:** Target: R$0.50 or less per qualified lead (per ADS-06 requirement)
- **D-18:** Campaign Budget Optimization (CBO) enabled instead of per-ad-set budgets (ADS-04)
- **D-19:** Create retargeting Custom Audience from website visitors using existing Facebook Pixel + Instagram engagers (ADS-02)
- **D-20:** Ad creative should feature property experience (people enjoying pool/BBQ/nature), not empty rooms
- **D-21:** Manual attribution: "how did you hear about us?" question in guest communication — Meta Pixel cannot track Airbnb conversions (per STATE.md blocker)

### Instagram Content Strategy
- **D-22:** 3-4 Reels per week posting cadence (INSTA-01)
- **D-23:** Content pillars with allocation: Property Experience 30%, Local Discovery 25%, Social Proof 25%, Behind the Scenes 20% (INSTA-02)
- **D-24:** iPhone filming only — no professional video production (per REQUIREMENTS.md Out of Scope)
- **D-25:** Batch production: 2-3 hours of filming produces 2 weeks of scheduled content
- **D-26:** Content calendar template with weekly posting schedule and pillar rotation
- **D-27:** 5-7 Reel concept templates to start (will expand to 10+ in Phase 3 per INSTA-04)

### PriceLabs Dynamic Pricing
- **D-28:** Start PriceLabs free trial with R$280/night floor price configured
- **D-29:** Evaluate PriceLabs impact after 2 weeks — compare suggested prices vs manual pricing
- **D-30:** PriceLabs guide documenting setup, floor price configuration, and market data interpretation

### Claude's Discretion
- Exact Booking.com listing copy (within keyword constraints)
- Exact VRBO/AlugueTemporada listing copy
- TemporadaLivre listing format and details
- Ad creative copy and targeting details
- Instagram Reel concept specifics
- Content calendar layout and format
- PriceLabs configuration details beyond floor price

</decisions>

<canonical_refs>
## Canonical References

No external specs — requirements are fully captured in REQUIREMENTS.md and decisions above.

### Project context
- `.planning/PROJECT.md` — Property details, performance data, Facebook Ads analysis (Traffic objective problem identified)
- `.planning/REQUIREMENTS.md` — Full requirement definitions for PRICE-07, DIST-01 through DIST-05, ADS-01 through ADS-06, INSTA-01 through INSTA-02
- `.planning/ROADMAP.md` — Phase 2 success criteria (5 criteria that must be TRUE)

### Prior phase decisions
- `.planning/phases/01-foundation/01-CONTEXT.md` — Pricing floor (D-01 through D-05), language/tone decisions (D-17, D-18), photo selection (D-09 through D-11), SEO keywords (D-12)

### Phase 1 deliverables (reference for platform listings)
- `.planning/phases/01-foundation/deliverables/listing-title-description.md` — Optimized title/description to adapt for other platforms
- `.planning/phases/01-foundation/deliverables/airbnb-pricing-guide.md` — Pricing structure to replicate on other platforms

### Marketing data
- `marketing/facebook-ads-data/` — Current Facebook ads campaign data (Traffic objective campaigns to restructure)

### Existing code
- `src/data/listing.config.ts` — Current pricing config (already updated in Phase 1: 280/12/27/180)
- `src/lib/ical.ts` — Existing Airbnb iCal parser (may inform multi-platform calendar sync understanding)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/data/listing.config.ts`: Pricing config already updated to new floor in Phase 1 — same values replicate to other platforms
- `src/lib/ical.ts`: Existing iCal parser for Airbnb — demonstrates the iCal sync pattern. Could inform multi-platform iCal documentation
- `.planning/phases/01-foundation/deliverables/listing-title-description.md`: Optimized listing copy — base content for adapting to Booking.com/VRBO descriptions

### Established Patterns
- Phase 1 produced owner-action guides (markdown deliverables) — Phase 2 should follow the same pattern for platform registration, ad setup, and content strategy
- Bilingual content (Portuguese primary, English secondary) — established in Phase 1 guest templates

### Integration Points
- Website already has Facebook Pixel integrated (`NEXT_PUBLIC_FB_PIXEL_ID` in layout.tsx) — retargeting audience creation leverages this existing integration
- Airbnb iCal URL already configured in `listing.config.ts` — documented for cross-platform sync setup
- Google Analytics 4 already tracking website visitors — can inform audience targeting

</code_context>

<specifics>
## Specific Ideas

- Booking.com registration takes 1-2 weeks — must be started in first days of Phase 2, not delayed until all guides are complete
- Facebook Ads analysis shows current Traffic campaigns have "Below average — Bottom 10-20%" conversion ranking — restructuring to Messages objective is urgent
- Best performing ad (Traffic_Ad_4) had R$0.33-0.41/landing page view — use this creative as starting point for Messages-objective campaigns
- TemporadaLivre is a zero-commission subscription model — worth trying even with limited iCal support
- Instagram content should show people enjoying the property, not just empty rooms — the "experience" sells better than the "space"
- Owner has 10-15 hours/week — batch content production is essential, not optional

</specifics>

<deferred>
## Deferred Ideas

- 3-layer ad funnel (Awareness → Consideration → Conversion) — Phase 3 (ADS-03)
- Lookalike audiences from website/Instagram engagers — Phase 3 (ADS-05)
- Content batch production workflow formalization — Phase 3 (INSTA-03)
- 10+ Reel templates/concepts — Phase 3 (INSTA-04), start with 5-7 in Phase 2
- Channel manager software (Hospitable/Stays.net) — v2, only if >8 bookings/month
- Direct booking system via WhatsApp — v2 (ADV-01)

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-distribution-marketing-launch*
*Context gathered: 2026-03-28*
