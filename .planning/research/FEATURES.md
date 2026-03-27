# Feature Landscape

**Domain:** Vacation rental revenue maximization (rural property near Sao Paulo, Brazil)
**Researched:** 2026-03-27
**Overall confidence:** HIGH (multi-source verified across industry guides, platform docs, and Brazil-specific data)

---

## Table Stakes

Features the property MUST have or is actively losing money. Missing any of these means leaving revenue on the table every single week.

### TS-1: Airbnb Listing Optimization

| Aspect | Detail |
|--------|--------|
| **Why Expected** | Airbnb's algorithm ranks on quality, popularity, and price. An unoptimized listing gets buried. With 28,000+ active listings in SP state, you compete for every search result slot. |
| **Complexity** | Low -- 3-5 hours one-time, 30 min/week maintenance |
| **Current Gap** | ADR crashed from R$424-835 to R$178 after 1-star review. Listing likely needs title, description, and photo refresh. |

**Specific actions:**
- **Title formula:** Location + Property Type + Top Amenity. Example: "Sitio com Piscina e Churrasqueira - 1h de SP" (not generic "Beautiful Country House")
- **Description:** Lead with experience, not specs. First 500 characters are critical for SEO. Include keywords: sitio, chacara, interior SP, natureza, piscina, churrasqueira, final de semana
- **Photos:** Minimum 15-20 high-res landscape images (1200x800px minimum). Airbnb crops vertical photos awkwardly. Include: pool, BBQ area, nature views, bedrooms, common areas, exterior at golden hour
- **Amenities list:** Complete every single field. Missing amenities hurt search ranking. Even small items (towels, iron, first aid kit) affect algorithm placement
- **Instant Book:** Enable it. Directly boosts search ranking. Listings with Instant Book appear higher in results
- **Response rate:** Maintain 90%+ within 24 hours. Below this disqualifies Superhost and tanks ranking
- **Calendar:** Open availability 6+ months ahead. Cannot appear in search if dates are blocked

**Dependencies:** None -- do this first before any marketing spend.

### TS-2: Pricing Recovery and Seasonal Strategy

| Aspect | Detail |
|--------|--------|
| **Why Expected** | ADR of R$178 (March) vs R$424-835 (Nov-Jan) means the property is massively underpriced. Competitors in interior SP charge R$1,800-8,500 for weekend rentals at comparable sitios. Every night booked at R$178 is money lost. |
| **Complexity** | Medium -- 4-6 hours setup, then 1 hour/week monitoring |
| **Current Gap** | CRITICAL. Property books at fire-sale prices. Must raise rates strategically. |

**Specific pricing framework:**

| Period | Strategy | Target ADR |
|--------|----------|------------|
| **Holidays (Semana Santa Apr 3, Tiradentes Apr 21, Dia do Trabalho May 1)** | Premium pricing. 2-night minimum. No discounts. | R$600-800/night |
| **Weekends (Fri-Sun)** | Standard competitive pricing | R$400-500/night |
| **Midweek (Mon-Thu)** | Reduced rate to fill gaps, target remote workers | R$250-350/night |
| **Last-minute (<7 days out)** | 10-15% discount vs. standard rate. Earning 85% beats earning 0%. | Varies |

**Length-of-stay discounts (Airbnb standard):**
- Weekly (7+ nights): 10-15% discount (minimum 10% to show badge in search results)
- Monthly (28+ nights): 25-30% discount (targets remote workers in low season)
- Early bird (1+ month ahead): 3-5% discount (triggers search visibility badge)
- Last-minute (<7 days): 10-15% discount (triggers "deal" badge in search)

**Holiday calendar for pricing (April-May 2026):**
- Apr 3 (Fri): Sexta-Feira Santa -- long weekend, premium price
- Apr 21 (Tue): Tiradentes -- "ponte" (bridge day) likely, premium price
- May 1 (Fri): Dia do Trabalho -- 3-day weekend, premium price
- May 10 (Sun): Dia das Maes -- marketing angle, not a holiday

**Dependencies:** TS-1 (listing must be optimized before raising prices, or higher prices with poor listing = no bookings).

### TS-3: Multi-Platform Distribution

| Aspect | Detail |
|--------|--------|
| **Why Expected** | Being on Airbnb only means missing 40-60% of potential guests who search on Booking.com, Vrbo/AlugueTemporada, or Brazilian platforms. Booking.com alone has massive market share in Brazil. |
| **Complexity** | Medium -- 8-12 hours initial setup across platforms, then ongoing calendar sync |
| **Current Gap** | 100% of bookings through Airbnb. Zero diversification. |

**Platform priority (ordered by impact):**

1. **Booking.com** -- Largest OTA globally, huge in Brazil. Join Genius program when eligible (29% more bookings, 24% more revenue). Commission: 15-18% but access to massive demand pool. Setup: 2-4 hours.
2. **AlugueTemporada / Vrbo** -- AlugueTemporada is Vrbo's Brazilian brand. Strong for sitio/chacara market. Listing through Vrbo automatically covers AlugueTemporada. Commission: ~8% host-only or split model. Setup: 2-3 hours.
3. **TemporadaLivre** -- Brazil's largest vacation rental classified. 12,600+ properties. Lower tech, more direct (WhatsApp-based bookings). Free to list, negotiation-based. Setup: 1-2 hours.
4. **CasaFerias** -- Brazilian platform for sitios specifically. Niche audience that searches specifically for this property type. Setup: 1-2 hours.

**Calendar sync strategy:** Use Airbnb iCal export to sync calendars across platforms manually (free). If double-booking risk is high, consider a channel manager (Hospitable ~R$200/month or manual iCal sync for free).

**Dependencies:** TS-1 (listing content prepared once, reused across platforms). TS-2 (pricing strategy defined before listing on new platforms).

### TS-4: Guest Communication Templates

| Aspect | Detail |
|--------|--------|
| **Why Expected** | 90% response rate within 24 hours is required for Superhost. Consistent communication before/during/after stay drives 5-star reviews. Industry data: automated messaging handles 70-80% of guest communications. |
| **Complexity** | Low -- 3-4 hours to create templates, then they run automatically |
| **Current Gap** | No automated communication system. Manual responses eat into 10-15 hr/week budget. |

**Essential message templates (7 messages per booking):**

| Timing | Message | Purpose |
|--------|---------|---------|
| Booking confirmed | Welcome + excitement + "any questions?" | Set positive tone |
| 3 days before check-in | Directions, check-in instructions, house rules, WhatsApp number | Reduce anxiety, prevent issues |
| Check-in day | "Welcome! Let me know if you need anything" | Show attentiveness |
| Day 2 of stay | "Everything ok? Anything I can help with?" | Catch problems BEFORE they become bad reviews |
| Check-out day | Thank you + check-out reminder + "safe travels" | Warm close |
| 1 day after check-out | "Thanks for staying! Your review means a lot to us as hosts" | Trigger review |
| After guest reviews | Leave guest review (reciprocity triggers their review) | Review generation |

**Tool:** Airbnb's built-in "Scheduled Messages" feature is free. Use it before paying for Hospitable ($40/month) or iGMS. For a single listing, built-in tools are sufficient.

**Dependencies:** None -- can be set up immediately.

### TS-5: Review Recovery and Generation

| Aspect | Detail |
|--------|--------|
| **Why Expected** | Reviews are the single biggest Airbnb ranking factor. The 1-star review crash is resolved but the rating needs rebuilding. Every 5-star review pushes the average up. Superhost requires 4.8+ average rating. |
| **Complexity** | Low -- baked into communication templates, 15 min/guest |
| **Current Gap** | Rating recovering but needs consistent 5-star reviews to rebuild credibility and re-qualify for Superhost (assessed April 1, July 1). |

**Review generation system:**
- **Never ask for "5 stars" directly.** This backfires. Instead, frame it: "If anything wasn't perfect, please let me know so I can fix it before you review"
- **Educate subtly:** "On Airbnb, anything below 5 stars counts as negative for hosts -- if there's anything I can improve, I'd love to hear it directly"
- **Review first:** Always leave a guest review within 24 hours. This triggers the guest's review prompt and creates reciprocity
- **Timing:** Request review when emotions are positive -- after a great stay, not after a problem
- **Mid-stay check-in:** The Day 2 message (TS-4) catches problems before they become 3-star reviews. Resolving issues during the stay converts potential negatives into "host was so responsive!" 5-star reviews

**Target:** 10+ stays with 4.8+ average within 12 months = Superhost status. Superhosts earn 64% more on average.

**Dependencies:** TS-4 (communication templates are the vehicle for review generation).

---

## Differentiators

Features that create competitive advantage. Not expected by every guest, but significantly increase revenue and booking rate when present.

### D-1: Facebook/Instagram Ads Optimized for Conversions (Not Traffic)

| Aspect | Detail |
|--------|--------|
| **Value Proposition** | Current ads spend R$389 optimizing for traffic (landing page views) with "Below average - Bottom 10-20%" conversion ranking. Switching to conversion-optimized campaigns targets people likely to BOOK, not just click. |
| **Complexity** | Medium -- 6-8 hours to restructure campaigns, then 2-3 hours/week optimization |
| **Investment** | R$300-600/month ad spend (5-10% of target revenue) |

**Campaign structure (3-tier funnel):**

**Tier 1: Retargeting (60% of budget, highest ROI)**
- Audience: Website visitors (past 60 days via Meta Pixel), Instagram engagers, past guests
- Objective: "Conversions" (NOT traffic)
- Creative: Carousel ads showing property highlights, video walkthrough Reels
- Why first: 2-3x higher conversion rate than cold audiences. Retargeting is the highest-ROI campaign for vacation rentals

**Tier 2: Lookalike Audiences (30% of budget)**
- Audience: 1-3% lookalike of website visitors and past bookers
- Objective: "Conversions"
- Geographic target: Sao Paulo city + ABC region + Campinas + Sorocaba metro (1-2 hour drive radius)
- Interest targeting: Travel, Airbnb, natureza, churrasco, final de semana, sítio, interior SP
- Creative: Video Reels showing the experience (pool day, sunset BBQ, nature morning)

**Tier 3: Awareness (10% of budget, only when retargeting pool is too small)**
- Objective: Reach or Video Views
- Purpose: Feed the retargeting pool with warm prospects
- Creative: Best-performing Reels repurposed as ads

**Key changes from current setup:**
- Change campaign objective from "Traffic" to "Conversions"
- Set up proper conversion events in Meta Pixel (WhatsApp click, booking inquiry, contact form)
- Stop optimizing for landing page views (vanity metric)
- A/B test creatives (2-3 variations per ad set)
- Budget: R$15-20/day is sufficient for a single property

**Ad creative best practices:**
- Images: Bright, vivid colors. Include smiling people. Pool + people > empty pool
- Video: 15-30 seconds. Hook in first 3 seconds. Show experience, not just property
- Copy: 125 characters primary text max. Lead with "Fuja de SP nesse feriado" or "Seu final de semana no interior"
- CTA: "Saiba Mais" or "Enviar Mensagem" (WhatsApp)

**Dependencies:** TS-1 (listing must be optimized as the landing destination). Meta Pixel must be properly installed on website (already done per PROJECT.md).

### D-2: Instagram Content Strategy

| Aspect | Detail |
|--------|--------|
| **Value Proposition** | Instagram is the primary discovery platform for travel in Brazil. 76% of people trust user-generated content more than branded content. Reels reach 5-10x more new accounts than static posts. A consistent presence builds trust that converts browsers into bookers. |
| **Complexity** | Medium -- 4-6 hours/week ongoing (can batch-create content on weekends) |
| **Current Gap** | "Incipient" Instagram presence. Needs content strategy and consistent posting. |

**Content pillars (4 recurring themes):**

| Pillar | % of Posts | Content Type | Examples |
|--------|-----------|--------------|---------|
| **Experience/Lifestyle** | 40% | Reels, carousels | Sunset at the pool, morning coffee with nature sounds, BBQ sizzling, hammock relaxation |
| **Property Showcase** | 25% | Reels, photos | Room tours, pool angles, garden walks, aerial views, night ambiance |
| **Local/Destination** | 20% | Reels, stories | Nearby attractions, restaurants, trails, "what to do near us", driving route from SP |
| **Social Proof** | 15% | Stories, posts | Guest photos (with permission), review screenshots, "we just hosted X family!", before/after prep |

**Posting cadence (realistic for 10-15 hr/week total budget):**
- **Reels:** 3 per week (primary growth driver). Keep 15-30 seconds. Strong 3-second hook
- **Stories:** 3-5 per week (keep existing followers engaged). Behind-the-scenes, polls, countdowns to availability
- **Carousel posts:** 1 per week (saveable content like "5 things to do near us" or "what to pack for a sitio weekend")
- **Total: 7-9 pieces of content per week** -- batch-create on weekends between guests

**Instagram-specific tactics:**
- Bio link: Direct to WhatsApp or website booking page (not Airbnb -- save the commission)
- Hashtags: #sitiosp #alugueltemporada #interiordesp #finaldesemana #fugadacidade #sitiocompiscina #chacarasp #naturezasp (10-15 per post, mix niche and broad)
- Location tag: Always tag the municipality + "Interior de Sao Paulo"
- Reels audio: Use trending Brazilian audio. Check "audio trending" tab before posting
- Post timing: 6-8 PM weekdays (Sao Paulo commuters dreaming of escape), 9-11 AM weekends

**Content batch strategy:** When guests check out, spend 30 minutes capturing content: clean pool shot, fresh bed setup, golden hour exterior, BBQ area ready. This provides weeks of content from a single session.

**Dependencies:** None -- start immediately. Feeds into D-1 (Instagram engagement audience for retargeting ads).

### D-3: Dynamic Pricing Tool

| Aspect | Detail |
|--------|--------|
| **Value Proposition** | Dynamic pricing tools increase revenue 15-36% by automatically adjusting rates based on demand, seasonality, day-of-week, lead time, and competitor pricing. A Brazil-based manager reported measurable increases in ADR and profitability. |
| **Complexity** | Low -- 2-3 hours setup, then fully automated |
| **Investment** | PriceLabs: R$47.50/month per listing (30-day free trial, no credit card required) |

**Why PriceLabs specifically:**
- Supports Brazil market data and Brazilian holidays
- Integrates directly with Airbnb (official API)
- R$47.50/month for 1 listing -- pays for itself if it generates one extra booking/month
- Automatically handles: holiday premiums, last-minute discounts, day-of-week pricing, seasonal adjustments, competitor-based pricing
- 30-day free trial = test during April with zero risk

**Alternative:** Airbnb Smart Pricing is free but consistently underprices. Every industry source advises against relying on it alone. PriceLabs or Beyond Pricing are the standard tools.

**Dependencies:** TS-2 (must understand your pricing floor and ceiling before configuring the tool).

### D-4: Direct Booking via WhatsApp

| Aspect | Detail |
|--------|--------|
| **Value Proposition** | WhatsApp is Brazil's universal communication app. Direct bookings save 14-16% Airbnb commission. Even converting 25% of bookings to direct saves R$100-200/month at target revenue levels. |
| **Complexity** | Low-Medium -- 3-4 hours setup, then natural part of guest communication |
| **Current Gap** | All bookings through Airbnb. No direct booking channel. |

**Implementation (no booking engine needed -- out of scope per PROJECT.md):**
- Add WhatsApp Business number to: Instagram bio, website, Facebook page, all platform message signatures (after initial contact)
- When guests inquire on Airbnb, complete FIRST booking on-platform (builds reviews). For REPEAT guests, offer direct booking via WhatsApp at 5-10% discount (still saves money vs. Airbnb commission)
- Payment: PIX (instant, free, universal in Brazil) or bank transfer
- Calendar: Manually block dates across platforms when direct booking confirmed

**WhatsApp Business setup:**
- Professional profile with property photos
- Automated greeting message with availability link
- Quick replies for common questions (pricing, directions, amenities, check-in times)
- Catalog feature to show property photos and rates

**Dependencies:** TS-3 (multi-platform presence drives initial guest acquisition; WhatsApp captures repeat bookings). TS-5 (reviews on Airbnb/Booking.com build trust that makes guests willing to book direct).

### D-5: Shoulder/Low Season Demand Generation

| Aspect | Detail |
|--------|--------|
| **Value Proposition** | Historical data shows near-zero bookings May-September under previous management. Converting even 4-5 weekends during low season at R$400/night adds R$3,200-4,000 in otherwise dead months. |
| **Complexity** | Medium -- requires creative marketing and pricing adjustments |

**Tactics for April-September:**
- **Reduce minimum stay:** Drop from 2-night to 1-night during weekdays (accommodate quick escapes)
- **Remote worker packages:** Highlight fast WiFi, quiet workspace, weekly rates with 15-20% discount. "Work from the sitio" positioning
- **Holiday-specific campaigns:** Create Facebook/Instagram ad campaigns 2-3 weeks before each holiday (Tiradentes Apr 21, Dia do Trabalho May 1, Corpus Christi Jun 4)
- **Midweek pricing:** R$200-300/night midweek vs R$400-500 weekends. Fill gaps
- **Themed experiences:** "Winter BBQ weekend" (June-August), "Dia dos Namorados escape" (June 12), "Festas Juninas no sitio" (June)
- **Feriado targeting:** Every Brazilian "ponte" (bridge holiday where Tuesday/Thursday holidays create 4-day weekends) is a premium booking opportunity

**Dependencies:** TS-2 (pricing strategy), D-1 (ads to drive demand), D-2 (Instagram content to build awareness).

---

## Anti-Features

Things to deliberately NOT build or do. These waste the owner's limited 10-15 hours/week.

### AF-1: Do NOT Build a Custom Booking Engine

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Out of scope per PROJECT.md. A booking engine requires payment processing, calendar management, legal compliance, and ongoing maintenance. For a single property, the ROI is negative. | Use Airbnb/Booking.com for new guests (they handle payments, disputes, insurance). Use WhatsApp + PIX for repeat guests. |

### AF-2: Do NOT Optimize for Traffic in Facebook Ads

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Current campaigns optimize for "Landing Page Views" with conversion ranking "Bottom 10-20%." Traffic campaigns bring clickers, not bookers. This is literally burning money -- R$389 spent with zero attributable bookings. | Switch ALL campaigns to "Conversions" objective. Even if CPC is higher, cost-per-booking will be lower. A R$5 click that books is worth more than 100 R$0.33 clicks that bounce. |

### AF-3: Do NOT Post Generic Property Photos on Instagram

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Static property photos get minimal engagement in 2026. The algorithm buries them. Empty-room photos feel cold and don't trigger the emotional "I want to be there" response. | Post experience content: people enjoying the pool, food sizzling on the BBQ, sunset timelapse, morning birdsong Reel. Show the FEELING, not the furniture. |

### AF-4: Do NOT Use Airbnb Smart Pricing Alone

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Airbnb's Smart Pricing systematically underprices properties. It optimizes for Airbnb's booking volume, not your revenue. Multiple industry sources explicitly warn against relying on it. The current R$178 ADR may be partly caused by Smart Pricing undervaluing the property. | Use PriceLabs (R$47.50/month) or manually set prices using the seasonal framework in TS-2. Smart Pricing can be used as a FLOOR reference, never as the actual price. |

### AF-5: Do NOT Spend Time on SEO for the Website

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Organic search for a single vacation rental property takes 6-12 months to gain traction, competes with Airbnb/Booking.com's domain authority, and drives minimal bookings for a niche property. Website code changes are explicitly out of scope. | Use the website as a landing page for Facebook/Instagram ads and a credibility validator. Instagram and platform listings are the discovery channels. |

### AF-6: Do NOT Pay for a Channel Manager Yet

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Channel managers (Hostaway, Guesty, etc.) cost R$150-400/month and are designed for multi-property managers. For 1 listing, manual iCal sync across 2-3 platforms is manageable in 15-30 minutes/week. | Use free iCal export from Airbnb to sync calendars to Booking.com and other platforms. If double-bookings become a persistent problem (unlikely with 1 property), then consider a channel manager. |

### AF-7: Do NOT Host Events or Parties

| Why Avoid | What to Do Instead |
|-----------|-------------------|
| Explicitly out of scope per PROJECT.md. Events require permits, insurance, noise management, higher cleaning costs, and significantly more time. Risk of property damage and neighbor complaints. | Position as a relaxation/nature retreat, not a party venue. "Exclusive for your group" is the selling point. |

---

## Feature Dependencies

```
TS-1 (Listing Optimization)
  |
  +---> TS-2 (Pricing Strategy)
  |       |
  |       +---> D-3 (Dynamic Pricing Tool -- automates TS-2)
  |       |
  |       +---> D-5 (Shoulder Season -- uses pricing framework)
  |
  +---> TS-3 (Multi-Platform Distribution -- reuses listing content)
  |       |
  |       +---> D-4 (Direct Booking -- captures repeat guests from platforms)
  |
  +---> D-1 (Facebook/Instagram Ads -- listing is the landing destination)

TS-4 (Communication Templates) ---> TS-5 (Review Generation)
                                       |
                                       +---> Superhost Status (4.8+ rating, 10+ stays)

D-2 (Instagram Content) ---> D-1 (Ads -- uses content as creative, builds retargeting pool)
```

---

## MVP Recommendation (April Target: R$4,000)

**Context:** R$2,000+ already confirmed for April. Need R$2,000 more in ~34 days.

### Week 1 Priority (Immediate Impact)

1. **TS-2: Fix pricing NOW.** Raise rates for remaining April dates, especially Semana Santa (Apr 3) and Tiradentes (Apr 21) weekends to R$600-800/night. This alone could close the R$2k gap with 3-4 nights at proper pricing.
2. **TS-1: Refresh Airbnb listing.** Update title with keywords, improve first 5 photos, complete all amenity fields. Takes 3-5 hours.
3. **TS-4: Set up communication templates** in Airbnb's built-in scheduled messages. Takes 2 hours.

### Week 2 Priority (Revenue Multiplication)

4. **D-1: Restructure Facebook/Instagram ads** from traffic to conversions. Create retargeting campaign for website visitors. Budget R$15-20/day.
5. **D-3: Start PriceLabs free trial.** Let it optimize pricing for remaining April and all of May.
6. **TS-3: List on Booking.com.** Second-highest impact platform after Airbnb.

### Week 3-4 Priority (Sustainable Growth)

7. **D-2: Start Instagram content cadence.** Begin with 3 Reels/week.
8. **TS-3: List on AlugueTemporada/Vrbo and TemporadaLivre.**
9. **D-5: Launch shoulder season campaigns** for May holidays (Dia do Trabalho May 1).

### Defer to Later

- **D-4 (Direct Booking via WhatsApp):** Needs guest base first. Start after 10+ bookings across platforms.
- **AF-6 (Channel Manager):** Not needed until multi-platform bookings create sync headaches.

---

## Revenue Model

| Scenario | April | May | Assumptions |
|----------|-------|-----|-------------|
| **Current trajectory** | R$2,800 | R$3,500 | 2 more bookings at R$178 ADR + confirmed R$2k |
| **With TS-1 + TS-2 (pricing fix)** | R$3,800 | R$5,500 | Same bookings but at R$350-500 ADR |
| **With TS-1 + TS-2 + D-1 (ads)** | R$4,200 | R$6,500 | 1-2 more bookings from conversion-optimized ads |
| **Full system (all table stakes + differentiators)** | R$4,500+ | R$7,000+ | Multi-platform distribution + proper pricing + active marketing |

**The pricing fix alone likely closes most of the gap.** The property already generates bookings (5 in March, confirmed April bookings). The problem is not demand -- it is pricing.

---

## Sources

### Platform & Pricing Strategy
- [Airbnb Weekly/Monthly Discounts Help Center](https://www.airbnb.com/help/article/1233)
- [Airbnb Superhost Requirements](https://www.airbnb.com/help/article/828)
- [PriceLabs Dynamic Pricing](https://hello.pricelabs.co/) -- R$47.50/month per listing in Brazil
- [Airbnb Pricing Strategy - Rental Scale-Up](https://www.rentalscaleup.com/airbnb-pricing-strategy-tools-and-tactics/)
- [Dynamic Pricing Revenue Increase 15-36%](https://www.rakidzich.com/articles/dynamic-pricing-airbnb-guide)
- [Hospitable Airbnb Discounts Guide](https://hospitable.com/airbnb-discounts)

### Facebook/Instagram Ads
- [Facebook Ads for Vacation Rentals - Rental Systems](https://www.rentalsystems.com/guides/facebook-ads-vacation-rentals)
- [BuildUp Bookings - Facebook Ads Guide](https://www.buildupbookings.com/blog/facebook-ads-for-vacation-rental-marketers/)
- [BuildUp Bookings - 2026 STR Marketing Guide](https://www.buildupbookings.com/blog/short-term-rental-marketing/)
- [Vacation Rental Marketing Budget Guide](https://www.buildupbookings.com/blog/vacation-rental-marketing-budget/) -- 5-12% of revenue

### Instagram Content Strategy
- [Instagram for Vacation Rentals - Stays.net](https://stays.net/blog/instagram-para-aluguel-de-temporada/)
- [Vacation Rental Content Ideas 2026 - DirectBookMe](https://directbookme.co/blog/vacation-rental-content-ideas-for-social-media/)
- [Instagram Reels Growth Strategy 2026](https://www.truefuturemedia.com/articles/instagram-reels-reach-2026-business-growth-guide)
- [55 Instagram Tips for Vacation Rentals - Lodgify](https://www.lodgify.com/guides/instagram-tips/)

### Listing Optimization
- [Airbnb SEO Guide 2026 - Guestable](https://www.guestable.com/blog/airbnb-seo-guide-how-to-boost-your-airbnb-listing/)
- [Airbnb SEO Tips - Awning](https://awning.com/post/airbnb-seo-listing-optimization)
- [Booking.com Ranking Optimization - Hostaway](https://www.hostaway.com/blog/how-to-optimize-your-listing-on-booking-com/)

### Brazilian Market
- [AlugueTemporada (Vrbo Brazil)](https://casatemporada.com)
- [TemporadaLivre](https://www.temporadalivre.com/en) -- 12,600+ properties
- [CasaFerias](https://www.casaferias.com.br/vacation-rentals)
- [Chacaras para Alugar](https://chacarasparaalugar.com.br/) -- SP interior-specific platform
- [Brazil STR Market Performance - PriceLabs](https://hello.pricelabs.co/brazil-short-term-vacation-rental-market-performance/)
- [Feriados 2026 Brasil](https://www.melhoresdestinos.com.br/feriados-2026-calendario.html)

### Guest Communication & Reviews
- [Guest Messaging Automation 2026 - Aeve AI](https://www.aeve.ai/blog/automating-guest-messaging-vacation-rentals-2026)
- [How to Ask for Reviews - Hostfully](https://www.hostfully.com/blog/how-to-ask-guests-for-airbnb-reviews/)
- [Airbnb Review Tips - Host Tools](https://hosttools.com/blog/short-term-rental-tips/good-airbnb-review-example/)

### Direct Booking Strategy
- [Direct Bookings Complete Guide 2026](https://www.nowistay.com/ressources/direct-bookings-vacation-rental-complete-guide)
- [OTA Commission Rates - Hostaway](https://www.hostaway.com/blog/commission-rates-airbnb-vrbo/)
- [Shoulder Season Guide - Hospitable](https://hospitable.com/shoulder-season)

### Vacation Rental Marketing (General)
- [Vacation Rental Marketing Strategies 2026 - Awning](https://awning.com/post/vacation-rental-marketing-strategies-2026)
- [Digital Marketing for Vacation Rentals 2026 - iGMS](https://www.igms.com/digital-marketing-for-vacation-rentals/)
- [Sao Paulo Airbnb Market Analysis - AirROI](https://www.airroi.com/report/world/brazil/s%C3%A3o-paulo/s%C3%A3o-paulo)
