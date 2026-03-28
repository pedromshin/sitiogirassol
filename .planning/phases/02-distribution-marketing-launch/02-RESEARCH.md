# Phase 2: Distribution + Marketing Launch - Research

**Researched:** 2026-03-27
**Domain:** Multi-platform vacation rental distribution, Meta Ads restructuring, Instagram content strategy, dynamic pricing
**Confidence:** HIGH

## Summary

Phase 2 expands Sitio Girassol from Airbnb-only to 3+ booking platforms (Booking.com, VRBO/AlugueTemporada, TemporadaLivre), restructures Facebook/Instagram ads from Traffic to Messages objective for lead generation, launches Instagram Reels at 3-4/week cadence, and starts PriceLabs dynamic pricing trial. This is primarily an operations/marketing phase producing owner-action guides (markdown deliverables) rather than code changes -- consistent with Phase 1's pattern.

The critical path item is Booking.com registration (1-2 week approval delay), which must start immediately. iCal bidirectional sync is straightforward between Airbnb, Booking.com, and VRBO (all support native iCal import/export). TemporadaLivre does appear to support iCal (contrary to the LOW confidence flag in STATE.md), though the level of support needs confirmation during execution. The ad restructuring from Traffic to Messages/Leads objective is the highest-impact marketing change, as current Traffic campaigns show "Below average - Bottom 10-20%" conversion ranking across all ads.

**Primary recommendation:** Structure plans in 3 tracks -- (1) platform registration + calendar sync, (2) ad restructuring + retargeting, (3) Instagram content + PriceLabs -- because the Booking.com registration blocker means platform work must start first while other tracks can proceed in parallel.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Same base pricing on all platforms (R$280 weekday / R$380 weekend floor from Phase 1) -- no channel-specific discounts to prevent guest confusion and rate parity violations
- **D-02:** Adapt descriptions to each platform's norms (Booking.com is more structured/factual, VRBO is more narrative, TemporadaLivre is Portuguese-only) while keeping same core content and all 6 SEO keywords from Phase 1 (sitio, natureza, piscina, churrasco, Sorocaba, Sao Paulo)
- **D-03:** Use the same 25-30 photos selected in Phase 1 across all platforms, reordered if platform allows different hero image optimization
- **D-04:** Booking.com registration should be started immediately -- takes 1-2 weeks for approval (per STATE.md blocker)
- **D-05:** iCal bidirectional sync between Airbnb and Booking.com (both support iCal export/import natively)
- **D-06:** iCal sync between Airbnb and VRBO/AlugueTemporada (VRBO supports iCal)
- **D-07:** TemporadaLivre: manual date blocking as fallback -- iCal support is LOW confidence (per STATE.md blocker, may not support sync)
- **D-08:** Import iCal URLs with platform-default refresh intervals -- no custom API integration needed
- **D-09:** Create a guide documenting each platform's iCal export URL location and import steps
- **D-10:** Notification-based workflow: when booking notification arrives on any platform, owner blocks those dates on ALL other platforms within 1 hour
- **D-11:** First confirmed booking wins -- if simultaneous bookings occur, earlier confirmation timestamp takes priority, later booking is declined with apology and rebooking offer
- **D-12:** Protocol documented as a step-by-step checklist with platform-specific instructions for blocking dates
- **D-13:** Owner sets up push notifications on phone for all platforms to ensure <1 hour response
- **D-14:** Switch ALL Facebook/Instagram campaigns from Traffic objective to Messages objective -- drives WhatsApp/Messenger inquiries for direct booking conversation
- **D-15:** Zero active campaigns using Traffic objective after restructuring (Success Criteria #4)
- **D-16:** Monthly ad budget starting at R$500-800/month with weekly ROI review -- ad spend must show clear ROI per project constraints
- **D-17:** Target: R$0.50 or less per qualified lead (per ADS-06 requirement)
- **D-18:** Campaign Budget Optimization (CBO) enabled instead of per-ad-set budgets (ADS-04)
- **D-19:** Create retargeting Custom Audience from website visitors using existing Facebook Pixel + Instagram engagers (ADS-02)
- **D-20:** Ad creative should feature property experience (people enjoying pool/BBQ/nature), not empty rooms
- **D-21:** Manual attribution: "how did you hear about us?" question in guest communication -- Meta Pixel cannot track Airbnb conversions (per STATE.md blocker)
- **D-22:** 3-4 Reels per week posting cadence (INSTA-01)
- **D-23:** Content pillars with allocation: Property Experience 30%, Local Discovery 25%, Social Proof 25%, Behind the Scenes 20% (INSTA-02)
- **D-24:** iPhone filming only -- no professional video production (per REQUIREMENTS.md Out of Scope)
- **D-25:** Batch production: 2-3 hours of filming produces 2 weeks of scheduled content
- **D-26:** Content calendar template with weekly posting schedule and pillar rotation
- **D-27:** 5-7 Reel concept templates to start (will expand to 10+ in Phase 3 per INSTA-04)
- **D-28:** Start PriceLabs free trial with R$280/night floor price configured
- **D-29:** Evaluate PriceLabs impact after 2 weeks -- compare suggested prices vs manual pricing
- **D-30:** PriceLabs guide documenting setup, floor price configuration, and market data interpretation

### Claude's Discretion
- Exact Booking.com listing copy (within keyword constraints)
- Exact VRBO/AlugueTemporada listing copy
- TemporadaLivre listing format and details
- Ad creative copy and targeting details
- Instagram Reel concept specifics
- Content calendar layout and format
- PriceLabs configuration details beyond floor price

### Deferred Ideas (OUT OF SCOPE)
- 3-layer ad funnel (Awareness > Consideration > Conversion) -- Phase 3 (ADS-03)
- Lookalike audiences from website/Instagram engagers -- Phase 3 (ADS-05)
- Content batch production workflow formalization -- Phase 3 (INSTA-03)
- 10+ Reel templates/concepts -- Phase 3 (INSTA-04), start with 5-7 in Phase 2
- Channel manager software (Hospitable/Stays.net) -- v2, only if >8 bookings/month
- Direct booking system via WhatsApp -- v2 (ADV-01)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PRICE-07 | Start PriceLabs free trial for dynamic pricing with R$280 floor | PriceLabs offers 30-day free trial, no credit card required. $19.99/listing/month after trial. Direct Airbnb integration via official API. Floor price ("minimum price") is a core feature. |
| DIST-01 | Create and publish Booking.com listing with matching photos, description, and pricing | Registration at join.booking.com, 15-min setup, 1-2 week approval. Commission ~15% (varies by region). Listing copy should be structured/factual per D-02. |
| DIST-02 | Create and publish VRBO/AlugueTemporada listing | AlugueTemporada redirects to VRBO Brasil. Pay-per-booking model: 5% commission + 3% payment processing (~8% total). Listing goes live immediately after setup. |
| DIST-03 | Set up iCal calendar sync between Airbnb, Booking.com, and VRBO | All three platforms support native iCal import/export. Airbnb refreshes every 3 hours, VRBO every 30 minutes. Booking.com export in Extranet > Calendar > Sync Calendars. |
| DIST-04 | Establish manual double-booking prevention protocol (block dates on other platforms within 1 hour) | Protocol must supplement iCal sync (which has 30min-3hr delay). Push notifications on all platform apps are essential. |
| DIST-05 | Research and list on TemporadaLivre (zero-commission subscription model) | Subscription-based (~R$699/year). Evidence suggests iCal support exists through Stays.net integration, but may require manual blocking as fallback. Portuguese-only platform. |
| ADS-01 | Restructure Facebook ad campaigns from Traffic to Leads/Messages objective | Messages objective with WhatsApp destination. Current Traffic_Ad_4 creative (best performer, R$0.33/LPV) provides starting point for new creatives. |
| ADS-02 | Set up retargeting audience from website visitors (Facebook Pixel already installed) | Pixel already integrated in layout.tsx (NEXT_PUBLIC_FB_PIXEL_ID). Create Custom Audience in Ads Manager > Audiences > Website + Instagram engagement sources. |
| ADS-04 | Set up campaign budget optimization (CBO) instead of per-ad-set budgets | Now called "Advantage Campaign Budget" in Meta Ads Manager. Toggle ON at campaign level. Best with 3-5 ad sets of similar audience size. |
| ADS-06 | Define monthly ad budget with clear ROI tracking (target: R$0.50 or less per qualified lead) | R$0.50/lead target is aggressive for Brazil Recreation/Travel (median CPL R$116.8). Achievable with Messages objective + retargeting warm audiences, but requires careful targeting. Manual attribution via "how did you hear" question. |
| INSTA-01 | Establish 3-4 Reels per week posting cadence focused on property experience | 3-5 Reels/week is the 2026 recommended cadence. Watch time and 3-second hold rate are primary algorithm signals. Experience-driven content outperforms property tours. |
| INSTA-02 | Define content pillars -- Property Experience 30%, Local Discovery 25%, Social Proof 25%, Behind the Scenes 20% | Aligns with 2026 best practice of Discovery (50%), Expertise (30%), Connection (20%) pillars. Pillar allocation from D-23 is locked. |
</phase_requirements>

## Standard Stack

This phase produces owner-action guides (markdown deliverables) and no code changes. There is no "standard stack" of libraries -- the deliverables are operational guides for platform registration, ad management, content strategy, and pricing tool setup.

### Platforms and Tools

| Platform/Tool | Purpose | Cost Model | Registration Time |
|---------------|---------|------------|-------------------|
| Booking.com | OTA listing | ~15% commission per booking | 1-2 weeks for approval |
| VRBO/AlugueTemporada | OTA listing | ~8% per booking (5% commission + 3% processing) | Immediate after setup |
| TemporadaLivre | Brazilian listing portal | ~R$699/year subscription, zero commission | 5-10 minutes setup |
| PriceLabs | Dynamic pricing | $19.99/listing/month (30-day free trial) | Immediate, Airbnb direct integration |
| Meta Ads Manager | Ad campaign management | R$500-800/month ad spend budget | Already set up |
| Instagram | Content distribution (Reels) | Free | Already active (@sitiogirassol.sp) |

### Commission/Fee Comparison

| Platform | Commission | Cleaning Fee Included? | iCal Sync | Refresh Rate |
|----------|-----------|------------------------|-----------|--------------|
| Airbnb | ~16% host fee | Yes, in total | Export/Import | Every 3 hours |
| Booking.com | ~15% commission | Must configure separately | Export/Import | Platform-dependent |
| VRBO | ~8% (5% + 3%) | Yes, in total | Export/Import | Every 30 minutes |
| TemporadaLivre | R$699/year flat | Owner configures | Likely supported | TBD |

### Phase 1 Deliverables to Reuse

| Deliverable | Path | Reuse In Phase 2 |
|-------------|------|------------------|
| Listing title/description | `.planning/phases/01-foundation/deliverables/listing-title-description.md` | Base content for adapting to Booking.com, VRBO, TemporadaLivre descriptions |
| Pricing guide | `.planning/phases/01-foundation/deliverables/airbnb-pricing-guide.md` | Pricing values to replicate on other platforms |
| Listing config | `src/data/listing.config.ts` | Amenity list, property specs, photos for cross-platform listings |

## Architecture Patterns

### Deliverable Structure (consistent with Phase 1)

Phase 1 established that deliverables are markdown guides with step-by-step owner instructions. Phase 2 follows the same pattern:

```
.planning/phases/02-distribution-marketing-launch/
  deliverables/
    booking-com-listing-guide.md         # Registration + listing setup
    vrbo-listing-guide.md                # VRBO/AlugueTemporada setup
    temporadalivre-listing-guide.md      # TemporadaLivre setup
    calendar-sync-guide.md              # iCal sync + double-booking protocol
    facebook-ads-restructuring-guide.md  # Traffic->Messages migration
    instagram-content-strategy.md        # Pillars, calendar, Reel concepts
    pricelabs-setup-guide.md            # Dynamic pricing trial setup
```

### Pattern 1: Platform Listing Guide

**What:** Step-by-step registration and listing setup guide for each platform
**When to use:** Each new platform (Booking.com, VRBO, TemporadaLivre)
**Structure:**

```markdown
# [Platform] Listing Guide

## 1. Registration Steps
[Step-by-step with screenshots/URLs]

## 2. Listing Details
### Title (platform-specific)
### Description (adapted from Phase 1 base copy)
### Photos (same 25-30, potentially reordered)
### Pricing (matching Airbnb floor: R$280 weekday, R$380 weekend)
### Cleaning Fee (R$180)
### Discounts (12% weekly, 27% monthly)

## 3. Calendar Setup
[iCal import/export instructions]

## 4. Notification Setup
[Push notification configuration for booking alerts]

## 5. Verification Checklist
[What to confirm before going live]
```

### Pattern 2: Ad Campaign Guide

**What:** Step-by-step Meta Ads Manager instructions for campaign restructuring
**Structure:**

```markdown
# Facebook Ads Restructuring Guide

## 1. Current State (pause/archive existing Traffic campaigns)
## 2. Create New Messages Campaign (with CBO)
## 3. Configure WhatsApp Destination
## 4. Create Retargeting Custom Audience (website + Instagram)
## 5. Ad Creative Guidelines (experience-focused)
## 6. Budget and Bidding (R$500-800/month, CBO)
## 7. ROI Tracking (manual attribution + Meta metrics)
## 8. Weekly Review Checklist
```

### Pattern 3: Content Calendar Template

**What:** Weekly posting schedule with pillar rotation
**Structure:**

```markdown
# Instagram Content Calendar

## Content Pillars
| Pillar | % | Posts/Week | Description |
|--------|---|-----------|-------------|
| Property Experience | 30% | 1 | Pool, BBQ, nature |
| Local Discovery | 25% | 1 | Wineries, restaurants, trails |
| Social Proof | 25% | 1 | Guest moments, reviews |
| Behind the Scenes | 20% | 0-1 | Prep, cleaning, hosting |

## Weekly Template
| Day | Pillar | Reel Concept |
|-----|--------|-------------|

## Reel Concept Templates (5-7)
[Repeatable format descriptions]
```

### Anti-Patterns to Avoid
- **Listing copy-paste across platforms:** Each platform has different norms. Booking.com wants structured/factual, VRBO wants narrative, TemporadaLivre is Portuguese-only. Adapt, do not copy-paste.
- **Setting different prices per platform:** D-01 locks rate parity. Different prices create guest confusion and potential platform policy violations.
- **Relying solely on iCal for double-booking prevention:** iCal sync has 30-minute to 3-hour delays. The manual notification-based protocol (D-10) is essential as a supplement.
- **Running Traffic and Messages campaigns simultaneously:** D-15 requires zero active Traffic campaigns. Fully pause/archive Traffic campaigns before launching Messages campaigns.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Calendar sync | Custom API integration | Native iCal import/export on each platform | Every platform supports iCal natively; custom integration is v2 territory (channel manager) |
| Dynamic pricing | Manual price adjustment spreadsheet | PriceLabs 30-day trial | PriceLabs uses market data, comp analysis, and demand signals. Manual spreadsheets cannot replicate this. |
| Content scheduling | Manual daily posting | Instagram's built-in scheduling (or Meta Business Suite) | Batch-produce, schedule 2 weeks ahead, then monitor |
| Ad audience targeting | Manual interest targeting | Facebook Pixel Custom Audiences + Instagram engagement audiences | Pixel already installed; retargeting warm visitors converts better than cold targeting |
| Multi-platform management | Custom dashboard | Platform apps on phone with push notifications | At 1 property, native apps are sufficient. Channel manager is deferred to v2 (OPS-01) |

**Key insight:** This phase is about leveraging existing platform tools, not building custom solutions. Every platform has built-in features for listing management, calendar sync, and notifications. The deliverables document HOW to use these tools, not build replacements.

## Common Pitfalls

### Pitfall 1: Booking.com Registration Delay
**What goes wrong:** Owner delays registration, listing doesn't go live for 2+ weeks, missing booking opportunities during Easter shoulder season.
**Why it happens:** Registration requires address verification, photos, and platform review. Cannot be expedited.
**How to avoid:** Start registration on Day 1 of Phase 2. Fill in minimal required fields to submit for review. Complete listing details while waiting for approval.
**Warning signs:** No confirmation email from Booking.com within 48 hours of submission.

### Pitfall 2: iCal Sync Delay Causing Double Booking
**What goes wrong:** Guest books on Booking.com, but Airbnb calendar doesn't update for 3 hours. Another guest books same dates on Airbnb.
**Why it happens:** iCal sync is not real-time. Airbnb refreshes every 3 hours, VRBO every 30 minutes.
**How to avoid:** Manual notification-based protocol (D-10). Owner blocks dates on ALL other platforms within 1 hour of any booking notification.
**Warning signs:** Missing booking notifications, delayed phone checks, no push notifications configured.

### Pitfall 3: Ad Budget Burn Without Conversion Tracking
**What goes wrong:** R$500-800/month spent on Messages ads, but no way to track which inquiries became bookings.
**Why it happens:** Meta Pixel cannot track Airbnb bookings. WhatsApp conversations are informal and unstructured.
**How to avoid:** Manual attribution (D-21): "Como voce nos encontrou?" in every guest conversation. Track in a simple spreadsheet: inquiry source, date, conversion Y/N, revenue.
**Warning signs:** Running ads for 2+ weeks with no idea how many bookings resulted.

### Pitfall 4: R$0.50/Lead Target May Be Unrealistic for Cold Audiences
**What goes wrong:** CPL for cold targeting (broad interest audiences) in Brazil Recreation/Travel averages R$116.8 median. Owner gets discouraged by high CPL.
**Why it happens:** Messages objective costs more per result than Traffic, but each result is higher quality. Cold audiences drive up CPL dramatically.
**How to avoid:** Start with retargeting warm audiences (website visitors via Pixel, Instagram engagers). These audiences have much lower CPL because they already know the property. Only expand to cold audiences once warm audience CPL is confirmed at or near R$0.50 target.
**Warning signs:** CPL above R$2.00 on retargeting audiences signals targeting or creative problems.

### Pitfall 5: Instagram Content Burnout
**What goes wrong:** Owner starts posting 4 Reels/week, runs out of ideas by week 3, cadence drops to zero.
**Why it happens:** Creating content daily is unsustainable for someone with 10-15 hours/week total (not just for Instagram).
**How to avoid:** Batch production (D-25): 2-3 hours of filming produces 2 weeks of scheduled content. Use repeatable Reel concept templates so each filming session has a clear shot list. Schedule in advance using Meta Business Suite.
**Warning signs:** Missing posting schedule for 3+ consecutive days.

### Pitfall 6: Pricing Not Matching Across Platforms
**What goes wrong:** Airbnb shows R$280 base, Booking.com shows R$322 (because R$280 + 15% commission loaded onto guest), creating rate disparity.
**Why it happens:** Booking.com commission structure differs from Airbnb. If owner sets "R$280" on Booking.com without understanding whether that's before or after commission, the guest-visible price differs.
**How to avoid:** D-01 locks same base pricing on all platforms. The guide must explain each platform's commission model and how to set prices so the guest-facing rate is equivalent. On Booking.com, set rates such that after commission, the owner receives a comparable amount -- but the guest sees a similar price to Airbnb.
**Warning signs:** Checking listing prices as a guest on each platform and seeing >10% price difference.

### Pitfall 7: TemporadaLivre iCal Uncertainty
**What goes wrong:** Owner signs up for R$699/year subscription, discovers iCal doesn't work as expected, has no calendar sync.
**Why it happens:** TemporadaLivre iCal support was flagged LOW confidence. Evidence suggests iCal exists (via Stays.net integration), but direct native iCal import/export is not confirmed from official docs.
**How to avoid:** Test iCal import before committing to annual subscription. If iCal doesn't work, use manual date blocking (D-07 fallback). At R$699/year (~R$58/month), even with manual blocking, the zero-commission model is worth trying.
**Warning signs:** No iCal import/export option visible in TemporadaLivre dashboard after registration.

## Code Examples

No code changes are required in this phase. The deliverables are operational guides.

### Existing Code Reference: iCal URL

The Airbnb iCal URL is already documented in the codebase at `src/data/listing.config.ts`:

```typescript
// Source: src/data/listing.config.ts lines 139-143
calendar: {
  airbnbIcalUrl:
    "https://www.airbnb.com/calendar/ical/1345960842338220775.ics?t=5807f23cb26b48919e07c0f8e95c05a9",
  blockedDates: [],
},
```

This URL is what gets imported into Booking.com, VRBO, and (potentially) TemporadaLivre for calendar sync.

### Existing Code Reference: Facebook Pixel

The Facebook Pixel is already integrated:

```typescript
// Source: src/app/layout.tsx
// NEXT_PUBLIC_FB_PIXEL_ID environment variable
```

This means the retargeting Custom Audience (ADS-02) can be created immediately in Meta Ads Manager without any code changes.

## Key Platform Registration Details

### Booking.com Registration (DIST-01)

| Step | Action | Notes |
|------|--------|-------|
| 1 | Go to join.booking.com | Free registration |
| 2 | Create partner account (email, name, phone) | Use owner's email |
| 3 | Select property type ("Vacation home / Villa") | Not "Hotel" |
| 4 | Add property address | May require address verification |
| 5 | Add rooms, beds, bathrooms, amenities | Match Airbnb listing |
| 6 | Upload photos (same 25-30 from Phase 1) | Reorder for Booking.com norms |
| 7 | Set pricing (R$280 weekday base) | Account for ~15% commission |
| 8 | Set cleaning fee (R$180) | Configure separately |
| 9 | Set cancellation policy | Match Airbnb policy |
| 10 | Submit for review | 1-2 week wait |

**Commission model:** Booking.com charges ~15% on each confirmed booking. This is host-side only (no guest fee). The owner must decide whether to absorb the commission (lower margin) or adjust the listed price upward to maintain the same net revenue as Airbnb.

**Rate parity consideration (D-01):** The decision locks "same base pricing on all platforms." This means the guest-visible price should be equivalent. Since Airbnb charges ~16% host fee and Booking.com charges ~15% commission, the margins are similar. Setting the same base price on both platforms results in approximately equal net revenue.

### VRBO/AlugueTemporada Registration (DIST-02)

| Step | Action | Notes |
|------|--------|-------|
| 1 | Go to vrbo.com (AlugueTemporada redirects to VRBO Brasil) | Pay-per-booking model |
| 2 | Select "List your property" | Create account if needed |
| 3 | Enter property details (rooms, bathrooms) | Match Airbnb listing |
| 4 | Add property address and verify on map | |
| 5 | Complete onboarding: amenities, photos, description | |
| 6 | Set headline (80 char max on VRBO) | Adapt Phase 1 title |
| 7 | Set nightly rates and cleaning fee | R$280 base + R$180 cleaning |
| 8 | Configure booking policies | Match Airbnb settings |
| 9 | Go live | Immediate after setup |

**Commission model:** 5% commission + 3% payment processing = ~8% total. Lower than Airbnb (16%) and Booking.com (15%). More favorable for the host.

### TemporadaLivre Registration (DIST-05)

| Step | Action | Notes |
|------|--------|-------|
| 1 | Go to temporadalivre.com/anunciar-imovel-de-temporada | Portuguese-only |
| 2 | Create account (5-10 minutes) | Credit card required to activate |
| 3 | Add property details and photos | Same content, Portuguese only |
| 4 | Set pricing | R$280 base + R$180 cleaning |
| 5 | Choose subscription plan | ~R$699/year (~R$58/month) |
| 6 | Test iCal sync if available | Fallback: manual blocking |

**Commission model:** Zero commission. Flat subscription fee only. This is the most cost-effective platform if it generates even 1 booking per year.

## iCal Sync Architecture

### Sync Topology (Hub-and-Spoke with Airbnb as Hub)

```
                Airbnb (Hub)
               /     |      \
     iCal↕    iCal↕   iCal↕(or manual)
             /       |        \
     Booking.com   VRBO   TemporadaLivre
```

Each platform imports Airbnb's iCal URL, and Airbnb imports each platform's iCal URL. This creates bidirectional sync between Airbnb and each platform, but NOT between non-Airbnb platforms directly.

### iCal URL Locations

| Platform | Export URL Location | Import Location |
|----------|-------------------|-----------------|
| Airbnb | Listing > Availability > Link calendars > Export calendar | Listing > Availability > Link calendars > Import calendar |
| Booking.com | Extranet > Calendar > Sync Calendars > Export Calendar | Extranet > Calendar > Sync Calendars > Import |
| VRBO | Calendar sync > Export calendar > Copy URL | Calendar sync > Connect calendars > Import |
| TemporadaLivre | TBD (test during setup) | TBD (test during setup) |

### Sync Timing and Gap Analysis

| Platform Pair | Sync Delay | Gap Risk |
|--------------|-----------|----------|
| Airbnb -> Booking.com | Up to 3 hours (Airbnb refresh) | HIGH -- 3 hours is enough for a double booking |
| Booking.com -> Airbnb | Up to 3 hours | HIGH |
| Airbnb -> VRBO | Up to 30 minutes (VRBO refresh) | MEDIUM -- shorter but still possible |
| VRBO -> Airbnb | Up to 3 hours | HIGH |

**This is why the manual protocol (D-10) is essential.** iCal alone cannot prevent double bookings due to sync delays.

## Meta Ads Restructuring Details

### Current State (from campaign data analysis)

| Campaign | Objective | Spend | Results | CPR | Conversion Ranking |
|----------|-----------|-------|---------|-----|-------------------|
| Manual_Campaign_1 | Traffic (LPV) | R$376.19 | 727 LPVs | R$0.52/LPV | Below avg - Bottom 10-20% |
| Instagram post boosts (4) | Traffic (clicks) | R$10.95 | 24 clicks | R$0.46/click | Not rated |
| **Total** | | **R$387.14** | | | |

**Best performing ad:** Traffic_Ad_4 -- R$0.33-0.41/LPV, "Above average" quality ranking, "Above average" engagement ranking. This creative should be the starting point for Messages campaigns.

### New Campaign Structure

```
Messages Campaign (CBO: R$500-800/month)
├── Ad Set 1: Retargeting (Website Visitors - last 90 days)
│   ├── Ad A: Traffic_Ad_4 creative adapted for Messages CTA
│   └── Ad B: New "experience" creative (people enjoying property)
├── Ad Set 2: Retargeting (Instagram Engagers - last 90 days)
│   ├── Ad A: Carousel of property highlights
│   └── Ad B: Video Reel repurposed as ad
└── Ad Set 3: Local Interest Targeting (Sao Paulo, nature/travel interests)
    ├── Ad A: Hero property photo with WhatsApp CTA
    └── Ad B: Guest testimonial + property showcase
```

### Key Configuration Steps

1. **Pause all existing Traffic campaigns** (D-15: zero active Traffic campaigns)
2. **Create Custom Audiences:**
   - Website Visitors (last 90 days): Ads Manager > Audiences > Create > Custom > Website > All visitors
   - Instagram Engagers (last 90 days): Ads Manager > Audiences > Create > Custom > Instagram account > People who engaged
3. **Create Messages Campaign:**
   - Objective: Messages (now under "Engagement" in new ODAX structure)
   - Conversion location: WhatsApp
   - Connect WhatsApp Business number (5511919295010)
   - Enable Advantage Campaign Budget (CBO)
   - Daily budget: R$20-27/day (R$600-810/month)
4. **Configure 3 ad sets** with similar audience sizes
5. **Create ad creatives** featuring property experience

### CPL Target Analysis

The R$0.50/lead target (D-17, ADS-06) is aggressive but achievable with warm audiences:

| Audience Type | Expected CPL Range | Confidence |
|---------------|-------------------|------------|
| Website retargeting (Pixel) | R$0.30-1.50 | MEDIUM - depends on audience size |
| Instagram engagers | R$0.40-2.00 | MEDIUM |
| Cold interest targeting (Sao Paulo) | R$5.00-50.00+ | HIGH - cold audiences are expensive |

**Recommendation:** Start with retargeting only. If retargeting CPL meets R$0.50 target, gradually expand to cold audiences. If not, adjust target upward and focus on cost-per-booking rather than cost-per-lead.

## Instagram Content Strategy Details

### 2026 Algorithm Priorities (verified)

1. **Watch time** is the primary ranking signal for Reels
2. **3-second hold rate** above 60% outperforms weak holds (below 40%) by 5-10x in reach
3. Instagram's 2026 redesign puts Reels front and center
4. Consistent posting on the same days improves algorithmic reach

### Content Pillar Implementation

| Pillar | % | Posts/Week | Content Ideas |
|--------|---|-----------|---------------|
| Property Experience | 30% | 1 | Morning coffee by the pool, sunset from the balcony, BBQ sizzling, pool splash, fireplace evening |
| Local Discovery | 25% | 1 | Sao Roque wineries, local restaurants, nature trails, road trip from SP, regional markets |
| Social Proof | 25% | 1 | Guest reactions (with permission), review highlights, "happy moments" compilations, before/after cleanup |
| Behind the Scenes | 20% | 0-1 | Pool cleaning, garden maintenance, preparing for guests, property improvements, hosting stories |

### 5-7 Reel Concept Templates

1. **"Morning at the Sitio"** -- 15-30s, calm music, coffee + nature + pool + sunrise sequence. Hook: opening shot of steam rising from coffee cup with nature backdrop.
2. **"POV: You Booked a Weekend Here"** -- 15-30s, POV style, walking through property, ending at pool/BBQ. Hook: text overlay "POV: you finally booked that escape."
3. **"Things to Do in [Sao Roque/Region]"** -- 15-30s, quick cuts of local attractions. Hook: "3 things you didn't know about Sao Roque."
4. **"Guest Reaction"** -- 10-20s, capture genuine guest delight on arrival or at pool. Hook: guest's surprised face/reaction.
5. **"Before/After"** -- 15s, property preparation before guests arrive vs. guests enjoying. Hook: split screen or transition effect.
6. **"What R$280 Gets You"** -- 15-30s, showcase everything included at the nightly rate. Hook: text "What R$280/night looks like" with property tour.
7. **"Sunset Countdown"** -- 10-15s, time-lapse or real-time sunset from the property balcony. Hook: "Sunsets hit different at the sitio."

### Filming Batch Production Workflow (D-25)

```
Session 1 (2-3 hours):
├── Golden hour exteriors (30 min) -- covers concepts 1, 2, 7
├── Pool area shots (30 min) -- covers concepts 1, 2, 6
├── BBQ/kitchen area (20 min) -- covers concept 6
├── Interior walkthrough (20 min) -- covers concepts 2, 5
├── Local area drive-by (30 min if possible) -- covers concept 3
└── Behind the scenes / prep (20 min) -- covers concept 5

Output: 8-12 raw clips -> edit into 6-8 Reels = 2 weeks of content
```

## PriceLabs Setup Details

### Configuration for Sitio Girassol

| Setting | Value | Rationale |
|---------|-------|-----------|
| Minimum price (floor) | R$280/night | Matches Phase 1 ADR floor (D-28) |
| Maximum price (ceiling) | R$700/night | Cap near holiday pricing maximum |
| Base price | R$280/night | Weekday base |
| Weekend adjustment | +35% | R$378 (close to R$380 target) |
| Cleaning fee | R$180 | Fixed, not dynamic |
| Minimum stay | 2 nights | Per LISTING-03 |

### PriceLabs Integration Path

1. Sign up at pricelabs.co (30-day free trial, no credit card)
2. Click "+Add/Reconnect Listings"
3. Select Airbnb from dropdown
4. Authorize PriceLabs via Airbnb OAuth
5. Configure minimum price: R$280
6. Configure maximum price: R$700
7. Enable weekend adjustment
8. Review suggested prices vs. current manual pricing
9. Accept or override per-date suggestions
10. After 2 weeks: evaluate impact (D-29)

### Cost After Trial

$19.99 USD/listing/month (~R$100/month at current rates). ROI justification: if PriceLabs increases ADR by even R$20/night on 10 booked nights/month = R$200/month net gain, exceeding the cost.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Traffic objective ads | Messages/Leads objective ads | Meta ODAX update (2022+, matured 2024-2026) | Higher quality leads, lower waste |
| Manual per-ad-set budgets (ABO) | Campaign Budget Optimization (CBO / Advantage Campaign Budget) | Became default 2023+ | 17% average ROAS lift per Meta data |
| Single-platform listing | Multi-platform with iCal sync | Industry standard 2020+ | 30-50% more visibility, diversified revenue |
| Manual pricing | Dynamic pricing (PriceLabs, Wheelhouse) | Growing adoption 2020+ | Data-driven rate optimization based on demand |
| Feed posts on Instagram | Reels-first content | Instagram redesign 2024-2026 | Reels get 5-10x more reach than static posts |

**Deprecated/outdated:**
- **Traffic objective for bookings:** Traffic drives page views, not conversions. "Below average - Bottom 10-20%" conversion ranking confirms this.
- **ABO (per-ad-set budgets):** CBO outperforms for scaling. ABO is still useful for initial testing, but Phase 2 starts with CBO (D-18).
- **AlugueTemporada.com.br as separate platform:** Now redirects to VRBO Brasil. The brand name persists but the platform is unified under VRBO.

## Open Questions

1. **TemporadaLivre iCal Native Support**
   - What we know: TemporadaLivre integrates with Stays.net channel manager via iCal. This suggests the platform has iCal capability.
   - What's unclear: Whether a standalone host (without Stays.net) can directly import/export iCal URLs in the TemporadaLivre dashboard.
   - Recommendation: Include iCal testing as a step in the TemporadaLivre guide. If native iCal is unavailable, fall back to manual blocking (D-07). R$699/year is still worth it for zero-commission bookings.

2. **Booking.com Price Display with Commission**
   - What we know: Booking.com charges ~15% commission host-side. D-01 requires same base pricing on all platforms.
   - What's unclear: When the owner sets R$280/night on Booking.com, does the guest see R$280 or R$280 + some guest fee? If Booking.com adds a guest-visible markup, the rate parity with Airbnb may be compromised.
   - Recommendation: The guide should instruct the owner to check the guest-visible price after setting R$280 base and adjust if needed to maintain parity.

3. **WhatsApp Business vs. Personal Number for Ads**
   - What we know: Messages objective requires connecting a WhatsApp number. The owner's number is already in listing.config.ts (5511919295010).
   - What's unclear: Whether this is a WhatsApp Business account or personal. WhatsApp Business is required for Messages ads.
   - Recommendation: Guide should include WhatsApp Business setup step if not already configured.

## Environment Availability

Step 2.6: SKIPPED (no external dependencies identified). This phase produces markdown deliverables (owner-action guides), not code. All tools/platforms are web-based and accessed through browsers or mobile apps.

## Project Constraints (from CLAUDE.md)

### Relevant to Phase 2
- **Website code changes are out of scope** -- Phase 2 produces guides, not code changes
- **Owner has 10-15 hours/week** -- Batch production workflow is essential, not optional
- **Ad spend must show clear ROI** -- Manual attribution required since Meta Pixel cannot track Airbnb conversions
- **Conventional commits** -- if any files are committed
- **Phase 1 deliverable pattern** -- Bilingual (Portuguese primary, English secondary) markdown guides with step-by-step instructions

### Not Applicable to Phase 2
- TypeScript/React coding conventions -- no code changes
- TDD/testing requirements -- no code changes
- Immutability patterns -- no code changes

## Sources

### Primary (HIGH confidence)
- Booking.com Partner Registration: [partner.booking.com](https://partner.booking.com/en-us/join) - registration process, commission model
- VRBO Help Center: [help.vrbo.com](https://help.vrbo.com/articles/How-do-I-list-my-property) - listing process, iCal sync
- Airbnb Help Center: [airbnb.com/help/article/99](https://www.airbnb.com/help/article/99) - iCal export/import
- Meta Ads Help: [facebook.com/business/help](https://www.facebook.com/business/help/447934475640650) - Messages ads, WhatsApp setup
- PriceLabs: [hello.pricelabs.co](https://hello.pricelabs.co/plans/) - pricing, features, trial
- Project Facebook Ads Data: `marketing/facebook-ads-data/` - actual campaign performance data analyzed

### Secondary (MEDIUM confidence)
- Booking.com commission rates: Multiple sources (Guesty, Hostaway, Lodgify) consistently cite 15% average
- VRBO host fees: Multiple sources cite 5% + 3% model
- Instagram 2026 algorithm: Multiple marketing sources cite watch time and hold rate as primary signals
- PriceLabs integration: [help.pricelabs.co](https://help.pricelabs.co/portal/en/kb/articles/how-to-integrate-pricelabs-with-airbnb-official-airbnb-integration) - Airbnb integration steps

### Tertiary (LOW confidence)
- TemporadaLivre iCal support: Inferred from Stays.net integration blog post, not confirmed from official TemporadaLivre documentation
- Brazil CPL benchmarks (R$116.8 median): Single source (superads.ai), seasonal variation is high
- R$0.50/lead target achievability: Based on reasoning about warm vs. cold audiences, not verified with vacation rental Messages campaign data

## Metadata

**Confidence breakdown:**
- Platform registration (Booking.com, VRBO): HIGH -- official docs, well-documented processes
- iCal sync architecture: HIGH -- standard protocol, supported by all major platforms
- TemporadaLivre specifics: LOW -- limited official documentation, iCal support uncertain
- Ad restructuring (Messages/CBO): HIGH -- Meta official docs, current best practices
- CPL target (R$0.50): MEDIUM -- achievable with warm audiences, but depends on audience size and creative quality
- Instagram strategy: HIGH -- multiple 2026 sources confirm Reels-first approach and cadence recommendations
- PriceLabs setup: HIGH -- official docs, clear integration path

**Research date:** 2026-03-27
**Valid until:** 2026-04-27 (30 days -- platform features and ad algorithms stable over this period)
