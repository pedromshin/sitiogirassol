# Phase 3: Growth Engine - Research

**Researched:** 2026-03-27
**Domain:** Meta Ads funnel strategy, lookalike audiences, Instagram content production workflows, revenue tracking
**Confidence:** HIGH

## Summary

Phase 3 builds a repeatable marketing system on top of the Phase 2 foundation (Messages campaign, Custom Audiences, 7 Reel templates, content pillars). The four requirements break into two domains: Meta Ads advancement (3-layer funnel + lookalike audiences) and Instagram content systematization (batch workflow + expanded templates). All deliverables are owner-action guides -- no code changes.

The most significant research finding is that Meta's lookalike audience feature, while still available in 2026, is being superseded by Advantage+ audience targeting. The CONTEXT.md decision (D-08 through D-11) to create traditional lookalike audiences remains viable, but the guide must address the reality that Meta now auto-expands lookalike audiences beyond the specified percentage for performance goals like Sales, Leads, and App Promotion. Additionally, the minimum source audience threshold of 1,000+ (D-11) is appropriate -- Meta requires 100 minimum but recommends 1,000-5,000 for meaningful results.

A critical pitfall to address: vacation rental ads on Facebook MAY trigger Meta's Housing Special Ad Category restrictions, which would limit targeting options (no age/gender targeting, broader location radius). The guide must instruct the owner to NOT select the housing category when creating campaigns, since short-term vacation rental advertising is tourism/hospitality, not housing. However, if Meta auto-flags the ads, the guide needs a fallback plan.

**Primary recommendation:** Deliver 4 standalone guides -- (1) 3-layer funnel setup guide, (2) lookalike audience creation guide, (3) content batch production workflow checklist, (4) expanded Reel template library -- plus a revenue tracking Google Sheets template.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Layer 1 (Awareness): Reels/video reach campaigns -- repurpose best-performing Instagram Reels as ad creative. Objective: maximize reach to cold audiences in Sao Paulo state
- **D-02:** Layer 2 (Consideration): Retarget users who engaged with Layer 1 content (video views >50%, profile visits, post saves). Custom Audience from Instagram engagers + website visitors
- **D-03:** Layer 3 (Conversion): Messages/WhatsApp campaigns targeting Layer 2 engagers -- drives direct booking conversations. Builds on Phase 2's Messages objective setup (D-14)
- **D-04:** Budget allocation: 60% Layer 1 (Awareness) / 25% Layer 2 (Consideration) / 15% Layer 3 (Conversion) -- top-heavy to build audience pipeline during shoulder season
- **D-05:** Total monthly budget stays at R$500-800/month (carried from Phase 2 D-16) -- split across 3 layers
- **D-06:** Each layer has its own campaign in Meta Ads Manager with CBO (Advantage Campaign Budget) enabled per Phase 2 D-18
- **D-07:** Layer performance tracked weekly: Layer 1 (CPM, reach), Layer 2 (CPC, engagement rate), Layer 3 (CPL, messages received)
- **D-08:** Source audiences: Website visitors (Facebook Pixel, already installed) + Instagram profile engagers (last 90 days)
- **D-09:** Lookalike similarity: 1-3% for Brazil -- broader reach given limited geographic area (Sao Paulo state focus)
- **D-10:** Create 2 lookalike audiences: one from website visitors, one from Instagram engagers -- test both against each other in Layer 1
- **D-11:** Minimum source audience size: wait for 1,000+ website visitors or Instagram engagers before creating lookalikes (if not yet reached, use interest-based targeting as interim)
- **D-12:** Formalized 5-step workflow: Plan (select concepts from template library) -> Film (2-3 hour batch session) -> Edit (CapCut free tier) -> Schedule (Meta Business Suite) -> Post (follow content calendar)
- **D-13:** Each batch session targets 6-8 Reels (covers 2 weeks at 3-4/week cadence from Phase 2 D-22)
- **D-14:** Equipment: iPhone only (carried from Phase 2 D-24), natural lighting preferred, stabilization with tripod/selfie stick
- **D-15:** Editing: CapCut free tier for cuts, text overlays, trending audio -- keep edits under 15 minutes per Reel
- **D-16:** Scheduling: Use Meta Business Suite's built-in scheduler for consistent posting times
- **D-17:** Workflow documented as a repeatable checklist the owner can follow in 10-15 hours/week (per project constraints)
- **D-18:** Expand from Phase 2's 7 Reel concepts to 10+ by adding 3-4 new templates
- **D-19:** New templates should cover gaps in content pillars -- focus on Social Proof (guest testimonials, review highlights) and Local Discovery (nearby attractions, seasonal activities)
- **D-20:** Each template includes: concept name, hook (first 3 seconds), shot list, caption template, hashtags, estimated filming time
- **D-21:** Templates designed to be repeatable with variations -- same structure, different content each time
- **D-22:** Simple Google Sheets spreadsheet with weekly entries
- **D-23:** Columns: Week, Platform (Airbnb/Booking.com/VRBO/TemporadaLivre/Direct), Revenue (R$), Nights Booked, ADR, Ad Spend, Leads Generated, Source
- **D-24:** Monthly summary row with totals and running cumulative toward R$4k (April) and R$7k (May) targets
- **D-25:** Simple formulas: ROI = (Revenue - Ad Spend) / Ad Spend, Cost per Booking = Ad Spend / Bookings from Ads
- **D-26:** Template provided as a deliverable the owner can copy to Google Sheets

### Claude's Discretion
- Exact ad copy for each funnel layer
- Specific interest-based targeting categories for Layer 1
- Exact Reel template concepts for the 3-4 new additions
- Google Sheets formatting and layout
- Specific CapCut editing techniques to recommend

### Deferred Ideas (OUT OF SCOPE)
- Direct booking system via WhatsApp with payment processing -- v2 (ADV-01)
- Guest referral program -- v2 (ADV-02)
- Corporate retreat packages -- v2 (ADV-03)
- Channel manager software -- v2, only if >8 bookings/month (OPS-01)
- Automated PriceLabs API integration -- v2 (OPS-02)
- Guest CRM for re-marketing -- v2 (OPS-03)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ADS-03 | Create 3-layer ad funnel -- Layer 1: Awareness (Reels/video reach), Layer 2: Consideration (retargeting engaged users), Layer 3: Conversion (Leads/Messages to past engagers) | Meta Ads full-funnel framework research confirms 3-campaign structure with CBO. Budget allocation of 60/25/15 aligns with industry best practice for awareness-heavy funnels during audience-building phase. Housing Special Ad Category is a critical pitfall to address. |
| ADS-05 | Create lookalike audiences from website visitors and Instagram engagers | Lookalike audiences still available in 2026 but Meta now auto-expands them for performance goals. Minimum 100 source users required (1,000+ recommended). 1-3% similarity for Brazil is appropriate. Advantage+ audience is the recommended alternative if lookalikes underperform. |
| INSTA-03 | Create content batch production workflow (film 2-3 hours, produce 2 weeks of content) | CapCut free tier supports 1080p export without watermark (only end card, removable). Meta Business Suite scheduling limited to 29 days ahead and 90-second Reels. 5-step workflow (Plan/Film/Edit/Schedule/Post) is standard for creator batch production. |
| INSTA-04 | Develop 10+ Reel templates/concepts that can be repeated with variations | Phase 2 delivered 7 templates. Need 3-4 new templates focused on Social Proof and Local Discovery pillars (D-19). Templates should include seasonal/low-season hooks since May-September is low season requiring proactive content. |
</phase_requirements>

## Standard Stack

### Core (All Free Tools)
| Tool | Version/Tier | Purpose | Why Standard |
|------|-------------|---------|--------------|
| Meta Ads Manager | Current (2026) | 3-layer funnel campaign creation, audience management | Only platform for managing Facebook/Instagram ads campaigns |
| Meta Business Suite | Free | Reel scheduling, content calendar, analytics | Free native tool for scheduling Instagram content |
| CapCut | Free tier | Reel video editing, text overlays, transitions | Free 1080p export, no watermark, AI auto-edit (5/month) |
| Google Sheets | Free | Revenue tracking spreadsheet | Owner already uses Google ecosystem, simple formulas |
| WhatsApp Business | Free | Conversion endpoint for Layer 3 ads | Already set up in Phase 2 for Messages campaign |

### Supporting
| Tool | Purpose | When to Use |
|------|---------|-------------|
| Instagram Insights | Performance metrics per Reel | Weekly review of which concepts perform best |
| Facebook Pixel | Website visitor tracking for audiences | Already installed; feeds Custom and Lookalike audiences |
| iPhone Camera | Filming | Already established in Phase 2; 1080p at 30fps |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CapCut free | Instagram built-in editor | Less feature-rich but zero learning curve; fine for simple cuts |
| Meta Business Suite scheduler | Later/Buffer/Planoly | Paid tools with better UX, but free tier handles the need |
| Google Sheets | Notion/Airtable | More powerful but adds complexity; Sheets is simplest for owner |
| Traditional Lookalike Audiences | Advantage+ Audience | Meta recommends Advantage+ but lookalikes give more explicit control; try both |

## Architecture Patterns

### Deliverable Structure (Follows Phase 1 and Phase 2 Pattern)
```
.planning/phases/03-growth-engine/
  deliverables/
    meta-ads-funnel-guide.md           # 3-layer funnel setup (ADS-03 + ADS-05)
    content-batch-workflow.md          # Batch production checklist (INSTA-03)
    reel-templates-expanded.md         # 10+ templates library (INSTA-04)
    revenue-tracking-template.md       # Google Sheets template (D-22 through D-26)
```

### Pattern 1: 3-Layer Funnel Campaign Architecture
**What:** Three separate campaigns in Meta Ads Manager, one per funnel layer, each with CBO enabled
**When to use:** When building an audience pipeline from cold to warm to hot

**Campaign structure:**
```
Campaign 1: "Awareness_Reels_v1" (Reach/Awareness objective)
  Budget: 60% of total (~R$12/day at R$20/day total)
  Ad Sets:
    - Lookalike (Website Visitors) -- if source >= 1,000
    - Lookalike (Instagram Engagers) -- if source >= 1,000
    - Interest-Based (Sao Paulo state) -- always active as baseline
  Creative: Top-performing Instagram Reels repurposed as ads

Campaign 2: "Consideration_Retarget_v1" (Engagement/Traffic objective)
  Budget: 25% of total (~R$5/day)
  Ad Sets:
    - Video Viewers (>50% watch time from Campaign 1)
    - Instagram Engagers (Custom Audience from Phase 2)
    - Website Visitors (Custom Audience from Phase 2)
  Creative: Property detail carousels, testimonial videos

Campaign 3: "Conversion_Messages_v1" (Messages/Engagement objective)
  Budget: 15% of total (~R$3/day)
  Ad Sets:
    - Campaign 2 Engagers (retarget from consideration layer)
    - Combined Warm Audience (all engaged users)
  Creative: Direct CTA to WhatsApp, price-anchored messaging
  NOTE: This replaces/evolves Phase 2's "Messages_WhatsApp_v1" campaign
```

### Pattern 2: Content Batch Production Cycle
**What:** Bi-monthly filming session producing 2 weeks of scheduled content
**When to use:** Every 2 weeks, or whenever the scheduled content queue drops below 1 week

**Workflow:**
```
Step 1: PLAN (30 min)
  - Select 6-8 concepts from template library
  - Match to content calendar pillar rotation
  - Prep shot list for batch session

Step 2: FILM (2-3 hours)
  - Follow shot lists per template
  - Film at golden hour for best lighting
  - Capture 8-12 raw clips minimum

Step 3: EDIT (1.5-2 hours, ~15 min per Reel)
  - CapCut: trim, add text overlays, trending audio
  - Export at 1080p vertical (9:16)
  - Delete CapCut end card before final export

Step 4: SCHEDULE (30 min)
  - Meta Business Suite: upload all 6-8 Reels
  - Set posting times (7-9 AM or 6-8 PM Brasilia)
  - Add captions and hashtags from templates

Step 5: POST & REVIEW (ongoing, 15 min/day)
  - Respond to comments within 2 hours
  - Track performance in Instagram Insights weekly
  - Flag top performers for ad creative repurposing
```

### Pattern 3: Revenue Tracking Feedback Loop
**What:** Weekly spreadsheet update that connects ad spend to booking revenue
**When to use:** Every week on a fixed day (same day as Phase 2's weekly review)

### Anti-Patterns to Avoid
- **Launching all 3 funnel layers simultaneously with equal budget:** The awareness layer needs 2-4 weeks to build audience volume before retargeting layers have enough people to target effectively. Start Layer 1 first, Layer 2 after 1 week, Layer 3 after 2 weeks.
- **Creating lookalike audiences from tiny source pools:** With < 1,000 source users, lookalikes will be unreliable. Use interest-based targeting as the interim solution (per D-11).
- **Filming content daily instead of batching:** Unsustainable at 10-15 hrs/week total. The batch model (2 sessions/month) is the only viable pattern.
- **Setting and forgetting funnel budgets:** The 60/25/15 split is a starting point. After 2-4 weeks of data, the owner should shift budget toward whichever layer is underperforming relative to its goals.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Reel editing | Complex multi-tool editing pipeline | CapCut free tier | Single app handles cuts, text, audio, transitions at 1080p |
| Content scheduling | Manual daily posting | Meta Business Suite scheduler | Batch schedule 2 weeks at once; consistent posting times |
| Audience creation | Manual audience lists | Meta Ads Manager audience tools | Custom + Lookalike audiences auto-update from Pixel and engagement |
| Revenue tracking formulas | Complex Excel/accounting software | Simple Google Sheets with 3 formulas | ROI, Cost per Booking, and cumulative total are the only metrics needed |
| Ad creative | Professional video production | Repurpose organic Reels as ad creative | Best-performing organic content = proven creative; no extra production needed |

**Key insight:** Every tool in this phase is free. The owner's constraint is time (10-15 hrs/week), not budget. The system must minimize time per task, not cost.

## Common Pitfalls

### Pitfall 1: Housing Special Ad Category Flag
**What goes wrong:** Meta's automated systems may flag vacation rental ads as housing ads, which restricts targeting (no age/gender/ZIP code targeting, forced radius expansion).
**Why it happens:** Meta's housing ad detection looks for keywords like "rental," "accommodation," "stay." Vacation rental ads contain these terms.
**How to avoid:** (1) Do NOT select "Housing" as a Special Ad Category when creating campaigns. (2) Frame ad copy as tourism/experience ("fim de semana no sitio") not housing ("aluguel de sitio"). (3) Avoid words like "alugar" or "morar" in primary text. Use "reservar" (reserve/book) and "visitar" (visit) instead. (4) If ads get flagged, appeal through Ads Manager, explaining these are short-term vacation stays (< 30 days), not residential housing.
**Warning signs:** Ad rejected with "housing policy" message; targeting options suddenly limited in ad set configuration.

### Pitfall 2: Lookalike Audience Auto-Expansion
**What goes wrong:** Since late 2024, Meta auto-expands lookalike audiences beyond the specified percentage (1-3%) for performance goals like Sales, Leads, and App Promotion. The audience the owner sets is treated as a suggestion, not a boundary.
**Why it happens:** Meta's shift toward Advantage+ and AI-driven targeting means traditional audience boundaries are loosening.
**How to avoid:** (1) Accept that 1-3% is a starting signal, not a hard boundary. (2) Monitor delivery metrics -- if CPM spikes or engagement drops, the audience has expanded too far. (3) Consider using Advantage+ audience as an alternative ad set alongside the lookalike to compare performance. (4) Focus on creative quality over audience precision -- Meta's algorithm will find the right people if the creative is compelling.
**Warning signs:** Reach numbers dramatically exceed the estimated audience size; CPM increases without proportional engagement.

### Pitfall 3: Layer 3 Budget Starvation
**What goes wrong:** At 15% of R$20/day, Layer 3 gets only ~R$3/day. Meta's minimum recommended daily budget for Messages campaigns is R$10/day. Below that, the algorithm cannot optimize effectively.
**Why it happens:** The 60/25/15 split is appropriate for awareness-building, but the absolute numbers are small at R$20/day total.
**How to avoid:** (1) Start with R$20/day total as planned, but monitor Layer 3 delivery closely. (2) If Layer 3 gets fewer than 1 message/day for 5 consecutive days, reallocate: shift to 50/25/25 or consolidate Layer 3 into Phase 2's existing Messages campaign. (3) Consider keeping Phase 2's Messages_WhatsApp_v1 campaign running AS Layer 3 instead of creating a new campaign, just adjusting its audience targeting.
**Warning signs:** Layer 3 showing "Learning Limited" status in Ads Manager; zero messages received for multiple days.

### Pitfall 4: CapCut Free Tier Pro-Template Watermarks
**What goes wrong:** Using Pro templates or certain premium effects in CapCut free tier permanently embeds a watermark on exported videos.
**Why it happens:** CapCut monetizes through Pro subscriptions; some templates are paywalled despite appearing available.
**How to avoid:** (1) Only use templates and effects clearly marked as "Free" in CapCut. (2) Preview the export before posting -- check for watermarks. (3) Stick to basic editing: cuts, text overlays, free music, and transitions. These core features work without watermarks. (4) Always delete the CapCut end card before exporting (it adds a branded outro).
**Warning signs:** "Pro" badge on templates; watermark visible in preview before export.

### Pitfall 5: Content Fatigue from Repeating Templates
**What goes wrong:** After 4-6 weeks of posting from the same templates, engagement drops because the audience recognizes the format.
**Why it happens:** Instagram's algorithm may reduce distribution of content that looks too similar to previous posts.
**How to avoid:** (1) Vary the hook (first 3 seconds) significantly even when using the same template structure. (2) Rotate between templates -- never post the same template concept two weeks in a row. (3) Monitor "3-second hold rate" in Insights -- if it drops below 40% for a concept, retire it temporarily. (4) Plan to add 2-3 new templates every 2 months based on performance data.
**Warning signs:** Declining views week-over-week on a specific concept; 3-second hold rate dropping.

### Pitfall 6: Revenue Attribution Confusion
**What goes wrong:** Owner can't tell which bookings came from ads vs. organic Instagram vs. platform search, making ROI calculation impossible.
**Why it happens:** Meta Pixel cannot track conversions on Airbnb/Booking.com. Multiple touchpoints make attribution inherently fuzzy.
**How to avoid:** (1) Continue Phase 2's manual attribution ("Como voce nos encontrou?" in every guest conversation). (2) Track the source column rigorously in the revenue spreadsheet. (3) Accept that attribution will be approximate -- the goal is directional insight (ads generating leads? yes/no), not precise per-channel ROAS. (4) Compare weeks with ad spend to weeks without to see lift.
**Warning signs:** Source column empty on most rows; owner stops asking the attribution question.

## Code Examples

Not applicable -- Phase 3 produces no code changes. All deliverables are owner-action guides (markdown documents) following the established Phase 1/2 pattern.

### Relevant Existing Infrastructure
- Facebook Pixel already installed via `NEXT_PUBLIC_FB_PIXEL_ID` in `src/app/layout.tsx` -- feeds website visitor Custom and Lookalike audiences
- GA4 already installed via `NEXT_PUBLIC_GA4_ID` -- provides supplementary analytics
- Phase 2 Custom Audiences already created: "Website Visitors - 180d" and "Instagram Engagers - 180d" -- these are the source populations for Lookalike audiences

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Static Lookalike Audiences (hard boundaries) | Advantage+ Audience (AI-driven, auto-expanding) | Late 2024 - 2025 | Lookalikes still work but Meta auto-expands them; consider Advantage+ as alternative |
| Manual audience segmentation per ad set | CBO + Advantage+ placements | 2023-2024 | Let Meta's algorithm optimize; provide audience suggestions not boundaries |
| 30-hashtag Instagram strategy | 5-10 highly relevant hashtags | 2024-2025 | Instagram processes hashtags from caption; fewer relevant tags outperform spam |
| Daily content posting | Batch production with scheduling | Ongoing trend | Creators who batch 2x/month and schedule outperform daily posters in consistency |
| CapCut fully free | CapCut freemium with Pro upsells | 2025 | Core editing free, but Pro templates add watermarks; stick to free features |

**Deprecated/outdated:**
- **Traffic objective for vacation rentals:** Already addressed in Phase 2; Messages objective is the correct choice
- **30-hashtag Instagram strategy:** 2026 algorithm favors fewer (5-10), more relevant hashtags
- **Manual ad set budget allocation (ABO):** CBO is now the default recommendation from Meta for most campaign types

## Open Questions

1. **Housing Special Ad Category applicability in Brazil**
   - What we know: In the US, Meta enforces housing restrictions that limit targeting. Vacation rentals are in a gray area -- they are tourism, not housing, but contain "rental" keywords.
   - What's unclear: Whether Meta's auto-detection enforces housing restrictions in Brazil specifically. Brazil may not be fully covered by the strictest US housing ad rules.
   - Recommendation: Do NOT select housing category. If ads get flagged, appeal. Include this guidance prominently in the funnel guide.

2. **Source audience size for Lookalike creation**
   - What we know: Website and Instagram Custom Audiences were created in Phase 2 with 180-day retention. The website has been live for months; Instagram has been posting.
   - What's unclear: Whether the source audiences have reached the 1,000+ threshold needed for reliable lookalikes.
   - Recommendation: The guide must include a step to CHECK audience size before creating lookalikes. If under 1,000, use interest-based targeting as interim (per D-11).

3. **Phase 2 Messages campaign transition to Layer 3**
   - What we know: Phase 2 created "Messages_WhatsApp_v1" with 3 ad sets (2 retargeting + 1 cold). Phase 3's Layer 3 serves the same function.
   - What's unclear: Whether to pause Phase 2's campaign and create a new one, or restructure the existing campaign as Layer 3.
   - Recommendation: Restructure (don't recreate). Pause the cold ad set from Phase 2, keep retargeting ad sets, adjust budget to 15% allocation. Document this as an explicit transition step.

## Seasonal Context

**Critical timing consideration:** Phase 3 launches in late March / early April 2026.

| Month | Season | Implication for Phase 3 |
|-------|--------|------------------------|
| April | Shoulder | Layer 1 awareness campaigns must run NOW to build audience pipeline |
| May-Sep | Low season | Content and ads must shift to "escape the cold" / "winter getaway" messaging |
| Easter (Apr 17-21) | Holiday premium | Short-term revenue opportunity; ads should push Easter availability |
| Labor Day (May 1-2) | Holiday | Another booking window; target in Layer 3 messaging |

The awareness layer (Layer 1) is time-sensitive -- it must start immediately to accumulate enough engaged users for Layers 2 and 3 to target before low season hits.

## Sources

### Primary (HIGH confidence)
- Meta Business Help Center -- Lookalike Audiences, Custom Audiences, CBO, Advantage+ Audience
- [CapCut Pricing 2026 analysis](https://bigvu.tv/blog/capcut-pricing-2026-free-vs-pro-included-alternatives/) -- Free tier capabilities and limitations
- [Meta Business Suite scheduling guide](https://socialbee.com/blog/schedule-reels-on-instagram/) -- Scheduling limitations (29 days, 90-second Reels)

### Secondary (MEDIUM confidence)
- [Meta Ads full-funnel framework 2026](https://www.stackmatix.com/blog/meta-ads-funnel-strategy/) -- 3-campaign structure, budget allocation patterns
- [Facebook Lookalike Audiences 2026 guide](https://blog.adnabu.com/facebook/facebook-lookalike-audiences/) -- Minimum audience sizes, creation steps
- [Advantage+ audience targeting 2026](https://alexneiman.com/meta-advantage-plus-audience-targeting-2026/) -- Lookalike auto-expansion behavior
- [Jon Loomer - Meta advertising changes 2025](https://www.jonloomer.com/meta-advertising-changes-2025/) -- Lookalike expansion for performance goals
- [Vacation rental shoulder season marketing](https://hospitable.com/shoulder-season) -- Low season strategies

### Tertiary (LOW confidence)
- Housing Special Ad Category applicability for vacation rentals in Brazil -- no authoritative source confirms or denies coverage in Brazil specifically. Multiple US-focused sources suggest vacation rentals are in a gray area. Needs validation by attempting campaign creation.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- All tools are free, well-documented, and already partially in use from Phase 2
- Architecture (funnel structure): HIGH -- 3-campaign structure with separate objectives is the standard Meta Ads funnel pattern, well-documented across multiple sources
- Architecture (budget split): MEDIUM -- 60/25/15 is the user's locked decision and aligns with industry ranges (50-60% awareness is common), but absolute budget of R$20/day may cause Layer 3 starvation
- Pitfalls: HIGH -- Housing category, lookalike expansion, and CapCut watermarks are well-documented issues
- Content workflow: HIGH -- Batch production with CapCut + MBS scheduling is the standard creator workflow in 2026
- Revenue tracking: HIGH -- Simple Google Sheets with 3 formulas; no complexity risk

**Research date:** 2026-03-27
**Valid until:** 2026-04-30 (Meta Ads features change frequently; re-verify if execution delayed beyond April)
