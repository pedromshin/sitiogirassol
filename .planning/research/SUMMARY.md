# Project Research Summary

**Project:** Sitio Girassol Revenue Maximization
**Domain:** Vacation rental marketing optimization (single property, rural SP, Brazil)
**Researched:** 2026-03-27
**Confidence:** HIGH

## Executive Summary

Sitio Girassol is a single rural property near Sorocaba, SP that already generates bookings exclusively through Airbnb. The research across all four files converges on one clear diagnosis: **the property has a pricing and distribution problem, not a demand problem.** Five bookings in March generated R$1,960. Two bookings in December generated R$5,011. The core work is not building new audiences — it is recovering ADR from a 73% post-review collapse, expanding to 2-3 additional platforms, and restructuring ad spend from vanity traffic metrics to lead generation.

The recommended approach is a sequential, dependency-driven rollout across four phases over 5 weeks. Phase 1 fixes the Airbnb foundation (listing, pricing floor, communication templates) before spending a single real on ads or building secondary platforms. This ordering is non-negotiable: listing optimization and pricing are the landing destination for all downstream marketing spend, and a broken destination wastes every resource deployed on top of it. Phase 2 expands distribution to Booking.com with iCal sync. Phase 3 launches a properly structured 3-layer Meta Ads funnel (Awareness → Consideration → Conversion). Phase 4 enters an ongoing optimization loop using weekly KPI reviews.

The critical risks are: (1) a double-booking via iCal sync lag when multi-platform goes live — requires a manual block-on-all-platforms protocol after every booking; (2) continuing to run Facebook Traffic objective ads — R$389 already spent with zero attributable bookings and this will not improve without restructuring; (3) the pricing death spiral — ADR must be raised gradually but immediately or the algorithm permanently labels the property as budget accommodation. None of these are structural limitations; all three are correctable within the first two weeks of execution.

---

## Key Findings

### Recommended Stack

All tooling recommendations favor low-cost or free tools for Phase 1, with paid tools introduced only after revenue validates the spend. The total Phase 1 tool cost is under R$50/month, with ad spend as the only meaningful variable cost.

**Core technologies:**

- **Airbnb (primary OTA):** Already live with 4.5+ stars. Anchor platform. Optimize first before any other action.
- **Booking.com (secondary OTA):** Largest global OTA, strong Brazilian domestic reach. Free to list, 15% commission. Highest-impact expansion after Airbnb.
- **VRBO / AlugueTemporada (tertiary):** 8% host fee — best commission rate of any major platform. Brazilian domestic weekend travelers. List after Booking.com.
- **TemporadaLivre (Brazilian classified):** Small subscription, zero commission on bookings. 12,600+ listings. Low effort, free bookings. List alongside VRBO.
- **iCal sync (calendar management):** Free. Use as primary sync method for Phase 1-2. Upgrade to Hospitable (~R$150/month) only when booking volume exceeds 8 bookings/month across platforms.
- **Meta Business Suite + Meta Ads Manager (advertising):** Free tools. Already connected. Restructure campaigns from Traffic to Leads/Messages objective. R$15-20/day sufficient budget.
- **PriceLabs (dynamic pricing):** R$47.50/month. 30-day free trial. Start in Phase 2 after manual pricing floor is established. Replaces Airbnb Smart Pricing, which is confirmed to underprice.
- **Canva Free + CapCut (content creation):** Free. Sufficient for Reels and social posts without design skills.
- **GA4 + Meta Pixel (analytics):** Already installed on sitiogirassol.org. Use for attribution and retargeting audience building.
- **Wheelhouse Free (pricing intelligence):** Free market analysis tool. Use immediately to understand competitive pricing near Sorocaba before configuring PriceLabs.

**What NOT to use:** Airbnb Smart Pricing (underprices), Google Ads (low ROI at this budget for vacation rentals), channel manager before Phase 3, any paid scheduling tool (Meta Business Suite covers it for free).

---

### Expected Features

**Must have (table stakes) — present before any marketing spend:**

- **Airbnb listing optimization (TS-1):** Title with location + property type + top amenity. 15-20 landscape photos. All amenity fields completed. Instant Book enabled. Open 6+ months of availability. This is gating for everything downstream.
- **Pricing recovery and seasonal strategy (TS-2):** Absolute floor: R$300/night weekends, R$250/night weekdays. Holiday premiums for Semana Santa (Apr 3), Tiradentes (Apr 21), Dia do Trabalho (May 1). Gradual ADR recovery, not a sudden jump.
- **Multi-platform distribution (TS-3):** Booking.com first, then VRBO/AlugueTemporada, then TemporadaLivre. Covers 40-60% of guests who do not search on Airbnb.
- **Guest communication templates (TS-4):** 7-message sequence from booking confirmation through post-stay review request. Airbnb's built-in Scheduled Messages is sufficient — no paid tool needed.
- **Review generation system (TS-5):** Structured mid-stay check-in catches problems before they become bad reviews. Always leave guest review within 24 hours of checkout to trigger reciprocal review.

**Should have (differentiators):**

- **Facebook/Instagram ads restructured for conversions (D-1):** 3-tier funnel: Awareness (cold, 30%) → Consideration (warm, 30%) → Leads (retargeting, 40%). Switch from Traffic to Leads/Messages objective. R$15-20/day budget.
- **Instagram content strategy (D-2):** 60-70% Reels, content pillar rotation (Experience/Property/Local/Social Proof), 3 Reels/week. Batch content creation on property visit days.
- **Dynamic pricing via PriceLabs (D-3):** Automates TS-2 seasonal framework. Direct Airbnb API integration. Start 30-day free trial in Month 2.
- **Shoulder/low season demand generation (D-5):** Remote worker positioning, themed holiday campaigns, 1-night minimum stay for midweek gaps, Festas Juninas and Dia dos Namorados content.

**Defer to v2+:**

- **Direct booking via WhatsApp (D-4):** Needs guest base first (10+ bookings across platforms). Commission savings only meaningful after Airbnb dependency is established.
- **Channel manager (Hospitable):** Not justified until 8+ bookings/month across platforms creates real double-booking risk.
- **Custom booking engine:** Explicitly out of scope. ROI negative at this scale.

---

### Architecture Approach

This is not a software project — it is an operational system of interconnected workflows. The architecture has four components that communicate data between themselves and feed into a weekly owner decision cycle. Everything depends on the Distribution Hub (platform listings + iCal sync) being live and correct before the Marketing Engine (content + ads) is activated, because the listing is the conversion destination for all marketing spend.

**Major components:**

1. **Distribution Hub** — Platform listings, iCal calendar sync, pricing management across Airbnb/Booking.com/Brazilian platforms. Owner time: 2-3 hrs/week.
2. **Marketing Engine** — Three sub-components: (a) Organic Instagram content using a 4-pillar rotation, (b) Meta Ads 3-layer funnel built sequentially over 5 weeks, (c) Listing optimization copy as the shared foundation. Owner time: 4-6 hrs/week.
3. **Operations Flow** — 7-message guest communication sequence, review management protocol, turnover coordination. Owner time: 2-3 hrs/week.
4. **Performance Review System** — Weekly 30-60 min review of occupancy, ADR, ad ROAS, and Instagram engagement. Monthly 2-hour deep review. Decisions flow back to all three components. Owner time: 1-2 hrs/week.

**Total: 9-14 hrs/week — fits within the 10-15 hr/week owner constraint.**

---

### Critical Pitfalls

1. **Double booking via iCal sync lag (CRITICAL):** After every booking on any platform, manually block those dates on all other platforms within 5-10 minutes. iCal propagates up to 3 hours — do not rely on it as primary protection. Add 1-night buffer gap between bookings for cleaning and sync margin. This must be solved before Booking.com goes live.

2. **ADR death spiral from aggressive discounting (CRITICAL):** Already happening. ADR crashed from R$835 to R$178 (73%). Set a non-negotiable floor immediately (R$300 weekends, R$250 weekdays). Raise prices 10% per month — no sudden jumps. Disable Airbnb Smart Pricing. Add value (welcome basket, early check-in) instead of cutting price.

3. **Facebook Traffic objective ads wasting budget (HIGH):** R$389 spent with zero attributable bookings and "Bottom 10-20%" conversion ranking. Stop Traffic campaigns. Switch to Leads objective (collect WhatsApp contacts) or Messages objective (drive DM conversations). Accept that pixel conversion tracking is structurally impossible when bookings happen on Airbnb — use manual "how did you hear about us?" attribution instead.

4. **Meta Pixel conversion tracking impossibility on OTAs (HIGH):** Conversion/Sales objective campaigns will permanently stall in "Learning Limited" status because Airbnb does not allow pixel fires. Do not attempt to run Conversion objective campaigns. Design the entire ad strategy around Leads and Messages objectives with manual attribution.

5. **Booking.com operational differences (MODERATE):** Guests expect hotel-like responsiveness, more flexible cancellation, and Booking.com takes 15% from the host with no guest fee. Set prices 12-18% higher on Booking.com than net Airbnb rate. Start with "Free cancellation to 14 days before" to build initial reviews, then tighten.

---

## Implications for Roadmap

All four research files agree on a sequential 4-phase build order. The dependency chain is strict: listing quality and pricing floor must exist before platform expansion, which must exist before paid ads, which must accumulate audience data before conversion optimization.

### Phase 1: Foundation (Week 1)

**Rationale:** Everything else depends on this. A broken listing with a panic-pricing ADR wastes every dollar spent on ads and every hour spent on content. TS-1 and TS-2 unlock all downstream revenue multipliers.
**Delivers:** Optimized Airbnb listing, pricing floor set, communication templates live, Meta Pixel verified.
**Addresses features:** TS-1 (listing optimization), TS-2 (pricing recovery), TS-4 (communication templates).
**Avoids pitfalls:** ADR death spiral (Pitfall 3), cleaning cost margin destruction (Pitfall 12), emotional review response (Pitfall 7).
**Parallel work:** Begin Booking.com registration (takes 1-2 weeks for approval). Film initial content batch for Instagram.

### Phase 2: Distribution Expansion (Weeks 2-3)

**Rationale:** Once the Airbnb listing is correct, expand distribution using the same content. Booking.com reaches guests who never search Airbnb. iCal sync must be set up properly with the manual block protocol active before Booking.com goes live.
**Delivers:** Booking.com listing live with iCal sync, VRBO/AlugueTemporada and TemporadaLivre listed, pricing spreadsheet calibrated across platforms.
**Addresses features:** TS-3 (multi-platform distribution).
**Avoids pitfalls:** Double booking via iCal lag (Pitfall 1), pricing inconsistency across platforms (Pitfall 5), Booking.com operational surprises (Pitfall 10).

### Phase 3: Marketing Activation (Weeks 2-4, partially parallel with Phase 2)

**Rationale:** Meta Ads Layer 1 (Awareness) launches in Week 2 to start building the pixel retargeting pool. Requires 2-4 weeks of data before Layer 2 and Layer 3 activate. Instagram content cadence starts here to feed ad creative assets and build organic retargeting audience.
**Delivers:** Meta Ads 3-layer funnel scaffolded and launching, Instagram at 3 Reels/week cadence, Wheelhouse free pricing data understood.
**Addresses features:** D-1 (ads restructured), D-2 (Instagram content strategy).
**Avoids pitfalls:** Traffic objective ads (Pitfall 2), pixel conversion impossibility trap (Pitfall 4), boosting posts instead of proper campaigns (Pitfall 11), brochure-style Instagram content (Pitfall 6).

### Phase 4: Optimization Loop (Week 5+, ongoing)

**Rationale:** Only after 4+ weeks of multi-platform data and ad performance data does optimization have meaningful signal. PriceLabs free trial starts here. Meta Ads Layer 3 (Leads/retargeting) activates once the retargeting pool has 1,000+ users.
**Delivers:** PriceLabs dynamic pricing live, Meta Ads fully structured across all 3 layers, weekly KPI review cadence established, shoulder/low season strategy for May-September.
**Addresses features:** D-3 (dynamic pricing), D-5 (shoulder season demand generation), TS-5 (review generation system at scale).
**Avoids pitfalls:** Low season budget waste (Pitfall 8), tax compliance gaps (Pitfall 9).

### Phase Ordering Rationale

- **TS-1 before TS-3:** Multi-platform listing reuses Airbnb content. Optimizing once on Airbnb provides the content for every subsequent platform. Reversing this wastes time.
- **TS-2 before D-1:** Ads drive traffic to a listing. If the listing price is still R$178, conversion campaigns reach the right people at the wrong price. Fix the destination before paying for traffic.
- **Manual iCal block protocol before Booking.com launch:** A single double-booking on a property recovering from a 1-star review could be catastrophic. Zero tolerance.
- **Meta Ads Layer 1 before Layer 2 before Layer 3:** Meta requires ~1,000 users in a custom audience before retargeting serves effectively. The layer sequence is technical, not optional.
- **PriceLabs deferred to Phase 4:** The ARCHITECTURE.md researcher notes only 5 months of owner data — insufficient historical signal for the algorithm to work optimally. The STACK.md and FEATURES.md researchers both recommend PriceLabs but agree a pricing floor and manual framework must come first. This is the one cross-file tension (see conflicts section below).

### Research Flags

Phases likely needing deeper research during planning:

- **Phase 2 (Booking.com setup):** Brazilian-specific cancellation policies, payment timing ("Payments by Booking.com" availability in BR), and commission model nuances need hands-on verification at time of registration. TemporadaLivre iCal support is documented as LOW confidence.
- **Phase 3 (Meta Ads restructure):** The attribution gap between Airbnb bookings and Meta Pixel is structural. The Leads vs Messages objective choice and manual attribution tracking design needs owner input on workflow preference. No single "right answer" from research alone.

Phases with standard patterns (skip additional research):

- **Phase 1 (Airbnb listing optimization):** HIGH confidence across all sources. Airbnb SEO is well-documented. Pricing floor math is straightforward.
- **Phase 4 (PriceLabs setup):** HIGH confidence. Official documentation available. 30-day trial eliminates risk.

---

## Conflicts and Tensions Between Research Files

**Tension 1: When to start dynamic pricing (PriceLabs)**
- FEATURES.md (D-3) and STACK.md recommend starting PriceLabs in "Week 2" / "Phase 2."
- ARCHITECTURE.md recommends deferring dynamic pricing tools entirely until 12 months of data accumulates, citing insufficient historical data for algorithmic optimization.
- **Resolution:** Split the difference. Start PriceLabs free trial in Phase 4 (Week 5), after the manual pricing floor from TS-2 is validated over 3-4 weeks. Use Wheelhouse Free for market intelligence in the interim. This respects the ARCHITECTURE concern while not waiting a full year.

**Tension 2: Facebook ads conversion objective vs Leads objective**
- FEATURES.md (D-1) recommends switching to "Conversions" objective.
- PITFALLS.md (Pitfalls 2 and 4) explicitly warns that Conversions objective is structurally impossible without OTA pixel access, and will permanently stall in "Learning Limited."
- **Resolution:** PITFALLS.md is correct. Use Leads objective (WhatsApp lead capture) or Messages objective. Never use Conversions/Sales objective unless a direct booking engine is added to the website.

**Tension 3: Channel manager timing**
- STACK.md recommends considering Hospitable at 8+ bookings/month.
- ARCHITECTURE.md and FEATURES.md (AF-6) both recommend deferring indefinitely for a single property.
- **Resolution:** The 8 bookings/month trigger from STACK.md is the right threshold. Below that, manual iCal + manual blocking protocol is sufficient. Hospitable is Phase 3+ territory.

---

## Top 5 Actionable Insights

1. **Raise prices now, not gradually from current levels.** The R$178 ADR is not "low season normal" — it is a panic-discount artifact post 1-star review. Set a R$300/night floor on Airbnb this week. Raise to R$400 for holiday weekends (Semana Santa, Tiradentes). This single change could close most of the April R$2k gap with existing confirmed bookings plus 2-3 additional nights at correct pricing.

2. **Stop all Traffic objective Facebook ads immediately.** The R$0.33 CPCs are a trap. Switch to Leads objective with a WhatsApp number capture, or Messages objective to drive DM conversations. Set up a manual "how did you hear about us?" question in every Airbnb booking confirmation message to track attribution without pixel dependency.

3. **List on Booking.com this week and set up the manual block protocol before it goes live.** The registration takes 1-2 weeks for approval — start it today. Write the manual block protocol (a 5-step checklist for what to do within 10 minutes of any booking on any platform) before the listing goes live.

4. **Film a content batch at the property within 7 days.** 30 minutes of filming at golden hour produces 2-3 weeks of Reels content. Without a content library, the Instagram cadence never starts. Everything in Phase 3 depends on having assets ready.

5. **Respond to the existing 1-star review using the VAST framework if not already done.** This is day-one work. Future guests read review responses. A professional, brief, specific response stating what was fixed converts the review from a conversion-killer into a trust signal.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All platform commission rates, tool pricing, and feature sets verified against official documentation. iCal sync behavior confirmed across multiple sources. |
| Features | HIGH | Multi-source verified. Brazilian market data (PriceLabs Brazil report, Airbnb SP data) corroborates the pricing framework. Feature dependencies are internally consistent. |
| Architecture | MEDIUM-HIGH | Distribution and Marketing Engine patterns confirmed at HIGH. Content cadence and pricing tiers need calibration to actual owner workflow — estimated benchmarks, not validated against this property. |
| Pitfalls | HIGH | Critical pitfalls (double booking, ADR spiral, Traffic ads) are all confirmed by actual property data in PROJECT.md. Not theoretical — they are already happening. |

**Overall confidence: HIGH**

### Gaps to Address

- **TemporadaLivre iCal support:** Research rated LOW confidence on Brazilian platform iCal compatibility. Verify at time of registration whether iCal sync is available or if manual blocking is required.
- **Booking.com payment timing in Brazil:** "Payments by Booking.com" availability for Brazilian hosts needs verification in the Partner Hub at registration time.
- **Meta Leads objective conversion rate:** No Brazil-specific data on WhatsApp lead-to-Airbnb-booking conversion rate. Track manually for 30 days before drawing conclusions.
- **Cleaning and turnover cost per booking:** Pricing floors are based on industry estimates (R$200-250/turnover). Owner needs to calculate actual costs to validate the R$300 weekend floor is above breakeven.
- **Airbnb commission model confirmation:** Verify whether Airbnb Brazil is currently on host-only (14-16%) or split model for this specific property. Affects cross-platform pricing calculations.

---

## Sources

### Primary (HIGH confidence)

- Airbnb Host Dashboard and official Airbnb Help Center documentation
- Meta Business Suite and Meta Ads Manager official documentation
- Booking.com Partner Hub official documentation
- PriceLabs official pricing and integration documentation (hello.pricelabs.co)
- Property's own Airbnb performance data via PROJECT.md (view-to-contact, ADR, booking counts)
- Receita Federal official statements on 2026 Reforma Tributaria exemption thresholds

### Secondary (MEDIUM confidence)

- StayFi Best Channel Managers 2026
- BuildUp Bookings Facebook Ads for Vacation Rentals guide
- iGMS Digital Marketing for Vacation Rentals 2026
- PriceLabs Brazil STR Market Performance report
- Rental Scale-Up Airbnb pricing strategy analysis
- Awning Vacation Rental Marketing Strategies 2026

### Tertiary (LOW confidence, needs on-the-ground verification)

- TemporadaLivre platform documentation (iCal support, subscription pricing)
- Stays.net Brazilian channel manager pricing (not fully verified)
- CasaFerias and Chacaras Para Alugar platform traffic estimates

---

*Research completed: 2026-03-27*
*Ready for roadmap: yes*
