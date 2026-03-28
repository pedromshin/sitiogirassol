# Phase 3: Growth Engine - Context

**Gathered:** 2026-03-28
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the advanced marketing system that sustains bookings through shoulder and low season: 3-layer Meta Ads funnel (Awareness → Consideration → Conversion), lookalike audiences from website visitors and Instagram engagers, formalized content batch production workflow, and 10+ repeatable Reel templates. Track revenue weekly to ensure R$4,000 by April 30 and on track for R$7,000 by May 31.

Requirements: ADS-03, ADS-05, INSTA-03, INSTA-04

</domain>

<decisions>
## Implementation Decisions

### 3-Layer Meta Ads Funnel (ADS-03)
- **D-01:** Layer 1 (Awareness): Reels/video reach campaigns — repurpose best-performing Instagram Reels as ad creative. Objective: maximize reach to cold audiences in São Paulo state
- **D-02:** Layer 2 (Consideration): Retarget users who engaged with Layer 1 content (video views >50%, profile visits, post saves). Custom Audience from Instagram engagers + website visitors
- **D-03:** Layer 3 (Conversion): Messages/WhatsApp campaigns targeting Layer 2 engagers — drives direct booking conversations. Builds on Phase 2's Messages objective setup (D-14)
- **D-04:** Budget allocation: 60% Layer 1 (Awareness) / 25% Layer 2 (Consideration) / 15% Layer 3 (Conversion) — top-heavy to build audience pipeline during shoulder season
- **D-05:** Total monthly budget stays at R$500-800/month (carried from Phase 2 D-16) — split across 3 layers
- **D-06:** Each layer has its own campaign in Meta Ads Manager with CBO (Advantage Campaign Budget) enabled per Phase 2 D-18
- **D-07:** Layer performance tracked weekly: Layer 1 (CPM, reach), Layer 2 (CPC, engagement rate), Layer 3 (CPL, messages received)

### Lookalike Audiences (ADS-05)
- **D-08:** Source audiences: Website visitors (Facebook Pixel, already installed) + Instagram profile engagers (last 90 days)
- **D-09:** Lookalike similarity: 1-3% for Brazil — broader reach given limited geographic area (São Paulo state focus)
- **D-10:** Create 2 lookalike audiences: one from website visitors, one from Instagram engagers — test both against each other in Layer 1
- **D-11:** Minimum source audience size: wait for 1,000+ website visitors or Instagram engagers before creating lookalikes (if not yet reached, use interest-based targeting as interim)

### Content Batch Production Workflow (INSTA-03)
- **D-12:** Formalized 5-step workflow: Plan (select concepts from template library) → Film (2-3 hour batch session) → Edit (CapCut free tier) → Schedule (Meta Business Suite) → Post (follow content calendar)
- **D-13:** Each batch session targets 6-8 Reels (covers 2 weeks at 3-4/week cadence from Phase 2 D-22)
- **D-14:** Equipment: iPhone only (carried from Phase 2 D-24), natural lighting preferred, stabilization with tripod/selfie stick
- **D-15:** Editing: CapCut free tier for cuts, text overlays, trending audio — keep edits under 15 minutes per Reel
- **D-16:** Scheduling: Use Meta Business Suite's built-in scheduler for consistent posting times
- **D-17:** Workflow documented as a repeatable checklist the owner can follow in 10-15 hours/week (per project constraints)

### Reel Template Expansion (INSTA-04)
- **D-18:** Expand from Phase 2's 7 Reel concepts to 10+ by adding 3-4 new templates
- **D-19:** New templates should cover gaps in content pillars — focus on Social Proof (guest testimonials, review highlights) and Local Discovery (nearby attractions, seasonal activities)
- **D-20:** Each template includes: concept name, hook (first 3 seconds), shot list, caption template, hashtags, estimated filming time
- **D-21:** Templates designed to be repeatable with variations — same structure, different content each time (e.g., "Guest Review of the Week" can run every week)

### Revenue Tracking System
- **D-22:** Simple Google Sheets spreadsheet with weekly entries
- **D-23:** Columns: Week, Platform (Airbnb/Booking.com/VRBO/TemporadaLivre/Direct), Revenue (R$), Nights Booked, ADR, Ad Spend, Leads Generated, Source ("how did you hear about us?")
- **D-24:** Monthly summary row with totals and running cumulative toward R$4k (April) and R$7k (May) targets
- **D-25:** Simple formulas: ROI = (Revenue - Ad Spend) / Ad Spend, Cost per Booking = Ad Spend / Bookings from Ads
- **D-26:** Template provided as a deliverable the owner can copy to Google Sheets

### Claude's Discretion
- Exact ad copy for each funnel layer
- Specific interest-based targeting categories for Layer 1
- Exact Reel template concepts for the 3-4 new additions
- Google Sheets formatting and layout
- Specific CapCut editing techniques to recommend

</decisions>

<canonical_refs>
## Canonical References

No external specs — requirements are fully captured in REQUIREMENTS.md and decisions above.

### Project context
- `.planning/PROJECT.md` — Revenue targets (R$4k April, R$7k May), current performance data, owner time constraint (10-15 hrs/week)
- `.planning/REQUIREMENTS.md` — ADS-03 (3-layer funnel), ADS-05 (lookalike audiences), INSTA-03 (batch workflow), INSTA-04 (10+ templates)
- `.planning/ROADMAP.md` — Phase 3 success criteria (4 criteria that must be TRUE)

### Prior phase decisions
- `.planning/phases/01-foundation/01-CONTEXT.md` — Pricing floor (R$280/R$380), Portuguese primary language, warm professional tone
- `.planning/phases/02-distribution-marketing-launch/02-CONTEXT.md` — Messages objective (D-14), R$500-800/month budget (D-16), CBO (D-18), Custom Audiences (D-19), experience-focused creative (D-20), manual attribution (D-21), 3-4 Reels/week (D-22), content pillars 30/25/25/20 (D-23), iPhone filming (D-24), batch production (D-25), 7 Reel concepts (D-27)

### Phase 2 deliverables (build upon)
- `.planning/phases/02-distribution-marketing-launch/deliverables/facebook-ads-restructuring-guide.md` — Messages campaign setup, Custom Audiences, CBO — Phase 3 adds funnel layers on top
- `.planning/phases/02-distribution-marketing-launch/deliverables/instagram-content-strategy.md` — 7 Reel templates, content calendar, pillar allocation — Phase 3 expands to 10+ and formalizes workflow

### Marketing data
- `marketing/facebook-ads-data/` — Facebook ads campaign data for baseline comparison

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- No code changes in Phase 3 — all deliverables are owner-action guides and templates
- Website already has Facebook Pixel (`NEXT_PUBLIC_FB_PIXEL_ID`) and GA4 (`NEXT_PUBLIC_GA4_ID`) — these power the lookalike audience source data

### Established Patterns
- Phase 1 and 2 both produced markdown deliverable guides — Phase 3 follows the same pattern
- Each deliverable is a standalone, actionable document the owner can execute independently

### Integration Points
- Facebook Pixel data feeds into Custom Audiences and Lookalike Audiences
- Instagram Reels content feeds into Layer 1 ad creative
- Phase 2's Messages campaign becomes Layer 3 in the funnel
- Revenue tracking spreadsheet aggregates data from all platforms set up in Phases 1-2

</code_context>

<specifics>
## Specific Ideas

- The 3-layer funnel builds ON TOP of Phase 2's Messages campaign — Phase 2's campaign becomes Layer 3, and Layers 1-2 are new additions feeding into it
- April is shoulder season — the awareness layer (Layer 1) must start immediately to build the audience pipeline before low season (May-Sep)
- Revenue tracking is the feedback loop — without it, the owner can't know if ad spend is working and adjust
- Content batch production is the sustainability mechanism — if filming feels like a chore, the owner won't maintain the cadence

</specifics>

<deferred>
## Deferred Ideas

- Direct booking system via WhatsApp with payment processing — v2 (ADV-01)
- Guest referral program — v2 (ADV-02)
- Corporate retreat packages — v2 (ADV-03)
- Channel manager software — v2, only if >8 bookings/month (OPS-01)
- Automated PriceLabs API integration — v2 (OPS-02)
- Guest CRM for re-marketing — v2 (OPS-03)

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-growth-engine*
*Context gathered: 2026-03-28*
