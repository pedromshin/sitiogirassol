# Architecture Patterns

**Domain:** Vacation Rental Marketing System (Single Property)
**Researched:** 2026-03-27

## Recommended Architecture

A single-property vacation rental marketing system is not a software application -- it is a set of interconnected operational workflows backed by platform tools and manual cadences. The "architecture" maps how information flows between booking platforms, content channels, advertising systems, and the owner's decision-making process.

### System Overview

```
                        +-------------------+
                        |   OWNER (10-15    |
                        |   hrs/week)       |
                        +--------+----------+
                                 |
              +------------------+------------------+
              |                  |                   |
    +---------v------+  +-------v--------+  +-------v--------+
    | DISTRIBUTION   |  | MARKETING      |  | OPERATIONS     |
    | (Where guests  |  | (How guests    |  | (How guests    |
    |  find you)     |  |  discover you) |  |  experience    |
    |                |  |                |  |  the stay)     |
    +-------+--------+  +-------+--------+  +-------+--------+
            |                    |                   |
    +-------v--------+  +-------v--------+  +-------v--------+
    | - Airbnb       |  | - Instagram    |  | - Guest comms  |
    | - Booking.com  |  | - Facebook Ads |  | - Check-in     |
    | - Brazilian    |  | - Website      |  | - Reviews      |
    |   platforms    |  |   (passive)    |  | - Turnover     |
    | - Calendar     |  | - Google Ads   |  |                |
    |   sync (iCal)  |  |   (future)    |  |                |
    +----------------+  +----------------+  +----------------+
```

### Component Boundaries

| Component | Responsibility | Communicates With | Owner Time |
|-----------|---------------|-------------------|------------|
| **Distribution Hub** | Calendar sync, pricing, listing optimization across platforms | Marketing (drives traffic to listings), Operations (booking triggers guest flow) | 2-3 hrs/week |
| **Marketing Engine** | Content creation, ad campaigns, audience building | Distribution (sends traffic to listings), Performance Review (provides metrics) | 4-6 hrs/week |
| **Operations Flow** | Guest communication, review management, turnover coordination | Distribution (booking data triggers messages), Performance Review (review scores) | 2-3 hrs/week |
| **Performance Review** | KPI tracking, pricing decisions, budget allocation | All components (data in), Owner decisions (actions out) | 1-2 hrs/week |

---

## Component 1: Distribution Hub

### What It Is

The central system that keeps calendars, pricing, and availability synchronized across all booking platforms. For a single property, this is the foundation everything else depends on.

### Architecture Decision: iCal Sync (Not Channel Manager)

For a single property with 3-4 platforms, use **free iCal calendar synchronization** rather than paying for a channel manager (Smoobu at ~EUR 28/month, Lodgify at ~USD 30/month).

**Rationale:**
- One property eliminates the complexity that justifies channel manager costs
- iCal sync is native to both Airbnb and Booking.com (free, built-in)
- Sync delay (up to 2-3 hours) is acceptable for a single property that books one group at a time
- Manual pricing updates across 3-4 platforms take 15-20 minutes when prices change
- Save EUR 28+/month that can go toward ad spend instead

**When to upgrade to channel manager:** If the owner adds a second property OR if double-booking incidents occur more than once.

### Platform Hierarchy

```
PRIMARY:    Airbnb (established listing, reviews, rating)
                |
                | iCal export/import (bidirectional)
                v
SECONDARY:  Booking.com (new listing, broader European/Brazilian reach)
                |
                | iCal export/import (bidirectional)
                v
TERTIARY:   TemporadaLivre / AlugueTemporada (Brazilian domestic market)
                |
                | Manual calendar blocking (if no iCal support)
```

### Calendar Sync Flow

```
Booking on Airbnb
    --> Airbnb calendar updates immediately
    --> iCal feed updates (minutes)
    --> Booking.com polls iCal (up to 2-3 hours)
    --> Booking.com blocks dates automatically
    --> Brazilian platforms: manual block OR iCal if supported

Booking on Booking.com
    --> Booking.com calendar updates immediately
    --> iCal feed updates
    --> Airbnb polls iCal (syncs within hours)
    --> Brazilian platforms: manual block
```

**Critical limitation:** iCal only syncs blocked/available dates. It does NOT sync prices. Prices must be managed manually on each platform.

### Pricing Sub-Component

```
Owner sets base prices (manual, spreadsheet-assisted)
    --> Update Airbnb pricing calendar
    --> Update Booking.com extranet pricing
    --> Update Brazilian platform pricing (if applicable)
    --> Adjust based on weekly performance review
```

**Pricing tiers** (based on project data and seasonal patterns):

| Season | Months | Pricing Strategy |
|--------|--------|-----------------|
| Peak | Dec-Jan | Premium pricing, minimum 2-night stay |
| High | Nov, Feb-Mar | Above-average, standard minimums |
| Shoulder | Apr, Oct | Active discounting, lower minimums, promotional pushes |
| Low | May-Sep | Aggressive pricing, no minimum stay, heavy marketing |

**Decision: No dynamic pricing tool for now.** Tools like PriceLabs (starting ~USD 20/month) are designed for market-driven algorithmic pricing. With only 5 months of owner data (Nov 2025-Mar 2026), there is insufficient historical data for algorithms to work well. Instead, use manual seasonal pricing informed by competitor analysis and weekly performance reviews. Revisit dynamic pricing tools after accumulating 12 months of data under current management.

---

## Component 2: Marketing Engine

### Sub-Components

The marketing engine has three distinct sub-components that feed each other:

```
+------------------+     +------------------+     +------------------+
| ORGANIC CONTENT  | --> | PAID ADVERTISING | --> | LISTING          |
| (Instagram)      |     | (Meta Ads)       |     | OPTIMIZATION     |
|                  |     |                  |     | (Airbnb/B.com)   |
| Builds audience  |     | Amplifies reach  |     | Converts traffic |
| Creates assets   |     | Drives traffic   |     | to bookings      |
+------------------+     +------------------+     +------------------+
        |                         |                        |
        +------------+------------+                        |
                     |                                     |
              +------v------+                       +------v------+
              | WEBSITE     |                       | BOOKING     |
              | (Landing)   | ------ traffic -----> | PLATFORMS   |
              | Pixel fires |                       | (Convert)   |
              +-------------+                       +-------------+
```

### 2A: Organic Content (Instagram)

**Architecture: Content Pillar System**

Organize all content around 4 pillars, rotating through them. This prevents "what do I post?" paralysis and ensures variety.

| Pillar | Content Type | % of Posts | Examples |
|--------|-------------|------------|---------|
| **Property Experience** | Reels/carousels showing amenities in use | 30% | Pool at sunset, BBQ setup, morning coffee on the porch |
| **Local Discovery** | Destination content, nearby attractions | 25% | Sorocaba restaurants, waterfall hikes, local markets, off-road trails |
| **Social Proof** | Guest testimonials, reviews, UGC | 25% | Guest stories, review screenshots, guest photos (with permission) |
| **Behind the Scenes** | Owner personality, property prep, seasonal updates | 20% | Getting the property ready, garden maintenance, new amenity reveals |

**Posting cadence for 10-15 hr/week constraint:**

| Format | Frequency | Time Investment |
|--------|-----------|----------------|
| Reels | 2-3/week | 1-2 hours each (filming + editing) |
| Stories | 3-5/week | 15-20 min each |
| Feed posts (carousels/statics) | 1-2/week | 30-45 min each |
| **Total** | **6-10 pieces/week** | **~4-5 hrs/week** |

**Content production workflow:**

```
BATCH (Weekend/designated day):
    Film 3-5 Reels in one session at property
    Take 10-15 photos for feed posts and stories
    Save to content library folder
        |
        v
SCHEDULE (1 hour, once/week):
    Pick from content library
    Write captions (use saved caption templates)
    Schedule via Meta Business Suite (free)
        |
        v
DAILY (10-15 min):
    Post 1 story from library or real-time
    Respond to comments and DMs
    Engage with 5-10 local/travel accounts
```

### 2B: Paid Advertising (Meta Ads)

**Architecture: Three-Layer Funnel**

The current setup runs traffic-optimized campaigns. This must shift to a proper funnel with conversion optimization. The funnel has three layers that build on each other sequentially.

```
LAYER 1: AWARENESS (Cold Audiences)
    Campaign objective: "Awareness" or "Traffic"
    Audiences: Interest-based (sao paulo, nature, bbq, weekend getaway)
                + Lookalike (1-3%) based on website visitors
    Creative: Reels/videos showing property experience
    Budget: 30% of ad spend
    Goal: Build pixel audience, grow retargeting pools
    KPI: CPM, reach, video views, landing page views
        |
        | Users visit website, pixel fires
        v
LAYER 2: CONSIDERATION (Warm Audiences)
    Campaign objective: "Traffic" or "Engagement"
    Audiences: Website visitors (7-30 days)
               + Instagram/Facebook engagers (30 days)
               + Video viewers (50%+ watched)
    Creative: Carousel ads with amenities, testimonials, seasonal offers
    Budget: 30% of ad spend
    Goal: Deepen interest, drive repeat website visits
    KPI: CTR, cost per landing page view, engagement rate
        |
        | Users show booking intent
        v
LAYER 3: CONVERSION (Hot Audiences)
    Campaign objective: "Conversions" (once pixel has enough data)
    Audiences: Website visitors (1-7 days)
               + People who viewed booking/pricing page
               + Engaged with 3+ posts
    Creative: Urgency-based ("Weekend dates filling up"), direct CTAs
    Budget: 40% of ad spend
    Goal: Drive actual bookings
    KPI: Cost per booking, ROAS
        |
        v
    EXCLUSIONS: Exclude past bookers from awareness/consideration
                Exclude recent website visitors from awareness
```

**Critical dependency: Meta Pixel must be properly configured BEFORE running conversion campaigns.**

The project already has Facebook Pixel and GA4 integrated on the website. The architecture requires:

1. Verify Pixel fires correctly on all pages
2. Set up custom conversions for key actions (WhatsApp click, booking inquiry, calendar page view)
3. Build up Pixel data with awareness/traffic campaigns first (minimum ~1,000 events)
4. Only then switch bottom-funnel campaigns to "Conversions" objective

**Minimum audience sizes for retargeting:** Meta requires approximately 1,000 users in a custom audience before retargeting campaigns will serve effectively. This means Layer 1 must run for 2-4 weeks before Layer 2 can activate.

**Naming convention:**
```
[Funnel Stage]_[Audience]_[Creative Type]_[Date]
Example: AWARE_ColdInterest_ReelPoolBBQ_Apr26
Example: CONV_Retarget7d_UrgencyWeekend_Apr26
```

### 2C: Listing Optimization

```
Airbnb Listing
    --> Title: keyword-optimized (sítio, Sorocaba, pool, BBQ, nature)
    --> Photos: professional, first 5 most critical
    --> Description: benefit-focused, not feature-focused
    --> Pricing: competitive for shoulder/low season
    --> Settings: Instant Book ON, flexible cancellation in low season
    --> Response rate: maintain Superhost-eligible metrics

Booking.com Listing
    --> Mirror Airbnb content with platform-specific adaptations
    --> Photos: same set, possibly different lead photo
    --> Description: shorter, more direct (Booking.com users scan faster)
    --> Pricing: can be slightly different (account for 15% commission vs Airbnb ~14%)
```

---

## Component 3: Operations Flow

### Guest Communication Timeline

```
BOOKING CONFIRMED (automated where platform allows)
    --> Confirmation message + welcome
    --> "What to expect" overview
    |
    | 7 days before check-in
    v
PRE-ARRIVAL (semi-automated template)
    --> Detailed directions (with GPS coordinates)
    --> Check-in instructions (key/lockbox code)
    --> House rules reminder
    --> "What to bring" suggestions
    |
    | Check-in day
    v
CHECK-IN (manual touch point)
    --> Welcome message via WhatsApp
    --> "Everything OK?" check after 2-3 hours
    |
    | During stay
    v
MID-STAY (manual, optional for 2+ night stays)
    --> "How's everything going? Need anything?"
    |
    | Check-out day
    v
CHECK-OUT (semi-automated)
    --> Check-out reminder with instructions
    --> Thank you message
    |
    | 1-2 days after
    v
POST-STAY (critical for reviews)
    --> "Thank you" + review request
    --> Ask permission to share photos on Instagram
    --> Offer return guest discount (for direct booking next time)
```

**Platform-specific considerations:**
- **Airbnb:** Messages stay in-app (Airbnb restricts external links/contact info sharing)
- **Booking.com:** Guests often book closer to arrival, need faster pre-arrival communication
- **Brazilian platforms:** WhatsApp is the standard communication channel in Brazil
- **WhatsApp:** Use for all direct communication; create saved reply templates

### Review Management Flow

```
Guest checks out
    --> Owner leaves review within 24 hours (triggers reciprocal review)
    --> If guest hasn't reviewed in 5 days: send gentle reminder
    --> All reviews get a response (positive: thank + specific mention;
        negative: acknowledge + explain fix)
    --> Feed positive reviews into Instagram content (Social Proof pillar)
```

---

## Component 4: Performance Review System

### Weekly Review (30-60 minutes, same day each week)

```
DASHBOARD CHECK (15 min):
    1. Bookings this week (count, revenue, source platform)
    2. Occupancy next 30 days (% booked)
    3. Ad spend vs results (impressions, clicks, cost per click)
    4. Instagram metrics (reach, engagement, follower growth)
        |
        v
DECISIONS (15 min):
    5. Pricing adjustments needed? (occupancy too low = lower price)
    6. Ad budget reallocation? (shift spend to what's working)
    7. Content working? (double down on high-engagement formats)
        |
        v
ACTIONS (15-30 min):
    8. Update prices on platforms if needed
    9. Adjust ad budgets/audiences if needed
    10. Plan next week's content batch
```

### Monthly Review (2 hours, end of month)

```
REVENUE ANALYSIS:
    - Total revenue vs target
    - Revenue by platform (Airbnb vs Booking.com vs direct)
    - ADR trend (is it going up or down?)
    - Occupancy rate
    - RevPAN (Revenue Per Available Night)
        |
        v
MARKETING ROI:
    - Total ad spend
    - Cost per booking (by funnel layer)
    - Best performing ad creatives
    - Instagram growth rate and engagement rate
    - Website traffic (GA4)
        |
        v
OPERATIONAL HEALTH:
    - Average review score
    - Response time metrics
    - Any operational issues to fix
        |
        v
NEXT MONTH PLAN:
    - Revenue target
    - Pricing strategy adjustments
    - Marketing budget allocation
    - Content theme focus
```

### Key Performance Indicators (KPIs)

| KPI | Frequency | Target | Source |
|-----|-----------|--------|--------|
| Monthly Revenue | Monthly | R$4k Apr, R$7k May | Platform dashboards |
| Occupancy Rate | Weekly | 50%+ shoulder, 70%+ high | Calendar count |
| ADR (Average Daily Rate) | Weekly | R$400+ weekends, R$250+ weekdays | Platform data |
| RevPAN | Monthly | Trending upward | Revenue / available nights |
| Ad ROAS | Weekly | 3x+ (R$3 revenue per R$1 spent) | Meta Ads Manager |
| Cost per Booking | Monthly | Under R$100 | Ad spend / bookings from ads |
| Instagram Engagement Rate | Weekly | 3%+ | Instagram Insights |
| Review Score | Monthly | 4.5+ stars | Platform averages |
| Response Rate | Weekly | Under 1 hour | Platform metrics |

---

## Information Flow Map

This diagram shows how data flows between all components:

```
                     BOOKING DATA
    Airbnb ----+
    Booking ---|---> Calendar Sync ---> Availability across platforms
    BR plats --+         |
                         |
                    Revenue data
                         |
                         v
                  PERFORMANCE REVIEW  <---- Instagram Insights
                         |            <---- Meta Ads Manager
                         |            <---- GA4 / Website analytics
                         |
                    Decisions flow out:
                         |
              +----------+----------+
              |          |          |
              v          v          v
         PRICING    AD BUDGET   CONTENT
         UPDATE     REALLOC     STRATEGY
              |          |          |
              v          v          v
         Platform    Meta Ads    Instagram
         calendars   Manager     posts
```

### Key Dependencies (What Blocks What)

| Dependency | Blocks | Why |
|------------|--------|-----|
| Airbnb listing optimized | Booking.com listing | Mirror content from optimized Airbnb listing |
| Booking.com listing live | iCal sync | Need both endpoints to connect calendars |
| Meta Pixel verified | Conversion campaigns | Need working pixel before optimizing for conversions |
| 1,000+ pixel events | Retargeting campaigns | Meta needs minimum audience to serve retargeting ads |
| Content library (photos/videos) | Instagram strategy | Cannot post without assets |
| Guest communication templates | Multi-platform operations | Need templates before scaling to more platforms |
| 4+ weeks of ad data | Performance-based optimization | Need baseline data to make informed adjustments |

---

## Suggested Build Order

Based on dependencies and the revenue targets (R$4k by April 30 = 34 days), the build order prioritizes immediate revenue impact.

### Phase 1: Foundation (Week 1)
**Must be sequential:**
1. Optimize Airbnb listing (title, description, photos, pricing)
2. Set up guest communication templates (booking confirmation through post-stay)
3. Implement seasonal pricing on Airbnb (April shoulder strategy)
4. Verify Meta Pixel is firing correctly on website

**Can be parallel with above:**
- Begin Booking.com registration (takes 1-2 weeks for approval)
- Film initial content batch at property (photos + video for 2 weeks of content)

### Phase 2: Channel Expansion (Weeks 2-3)
**Sequential (depends on Phase 1):**
1. Booking.com listing goes live (once approved)
2. Set up iCal bidirectional sync between Airbnb and Booking.com
3. Set Booking.com pricing (aligned with Airbnb strategy)

**Parallel:**
- Launch Meta Ads Layer 1 (Awareness) to build pixel audience
- Start Instagram posting cadence (3-5 posts/week)
- Register on TemporadaLivre (free listing)

### Phase 3: Marketing Acceleration (Weeks 3-4)
**Sequential (depends on pixel data from Phase 2):**
1. Activate Meta Ads Layer 2 (Retargeting website visitors)
2. Set up custom conversions in Meta Events Manager

**Parallel:**
- Continue Instagram cadence (now with performance data to guide content)
- First weekly performance review
- Adjust pricing based on booking pace

### Phase 4: Optimization Loop (Week 5+, ongoing)
**All parallel, driven by weekly reviews:**
- Activate Meta Ads Layer 3 (Conversion optimization) once pixel data is sufficient
- A/B test ad creatives based on performance data
- Refine pricing based on 30+ days of multi-platform data
- Monthly deep review and strategy adjustment
- Scale what works, cut what doesn't

### Parallel vs Sequential Summary

```
WEEK 1:  [Airbnb optimization] + [Booking.com registration] + [Content filming]
         [Communication templates] + [Pixel verification]

WEEK 2:  [Booking.com listing] --> [iCal sync setup]
         [Meta Ads Layer 1 LAUNCH] + [Instagram cadence START]
         [TemporadaLivre registration]

WEEK 3:  [Meta Ads Layer 2 ACTIVATE] (needs pixel data from Week 2)
         [Custom conversions setup]
         [First weekly review] --> [Pricing adjustments]

WEEK 4:  [Continue all channels] + [Second weekly review]
         [First monthly review at end of April]

WEEK 5+: [Meta Ads Layer 3 ACTIVATE] (needs conversion data)
         [Ongoing optimization loop]
```

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Optimizing Ads for Traffic Instead of Conversions
**What:** Running all ad campaigns with "Traffic" objective (current state).
**Why bad:** Facebook shows ads to people who click links, NOT people who book. High click volume, low booking rate. Current conversion ranking is "Bottom 10-20%."
**Instead:** Shift to conversion-optimized campaigns as soon as pixel data supports it. Start with traffic only to build pixel audience, then switch.

### Anti-Pattern 2: Channel Manager for One Property
**What:** Paying EUR 28+/month for a channel manager when you have one property.
**Why bad:** The time saved (minutes per week for calendar sync) doesn't justify the cost. That money is better spent on ads.
**Instead:** Use free iCal sync. Reassess if a second property is added or if double-bookings become a problem.

### Anti-Pattern 3: Posting Without a System
**What:** Posting on Instagram whenever inspiration strikes.
**Why bad:** Inconsistent posting kills algorithmic reach. Running out of content mid-week leads to gaps.
**Instead:** Batch content creation, use a content pillar rotation, schedule in advance.

### Anti-Pattern 4: Same Price Everywhere, All Year
**What:** Setting one nightly rate and leaving it unchanged.
**Why bad:** Overpriced in low season means empty nights. Underpriced in high season means leaving money on the table.
**Instead:** Seasonal pricing tiers + weekly adjustment based on booking pace (occupancy-based strategy).

### Anti-Pattern 5: Ignoring Booking.com's Different Guest Behavior
**What:** Copy-pasting Airbnb approach directly to Booking.com.
**Why bad:** Booking.com guests book closer to arrival, expect faster responses, and comparison-shop more aggressively.
**Instead:** Shorter minimum stays on Booking.com, faster response times, competitive pricing, and different cancellation policy (more flexible).

### Anti-Pattern 6: Running All Funnel Layers Simultaneously from Day One
**What:** Launching awareness + retargeting + conversion campaigns on the same day.
**Why bad:** No retargeting audience exists yet. Conversion campaigns with no pixel data will perform poorly and waste budget.
**Instead:** Layer 1 first (2-3 weeks), then Layer 2, then Layer 3. Build audiences before retargeting them.

---

## Scalability Considerations

| Concern | At 1 Property (Now) | At 2-3 Properties | At 5+ Properties |
|---------|---------------------|-------------------|-----------------|
| Calendar sync | Free iCal | Channel manager (Smoobu) | Full PMS (Hostaway/Guesty) |
| Pricing | Manual seasonal + weekly review | PriceLabs dynamic pricing | PriceLabs + revenue manager |
| Guest comms | Templates + manual WhatsApp | Automated messaging tool | PMS with unified inbox |
| Content | Owner-produced, batch filming | Hire part-time content creator | Content agency |
| Ads | Owner-managed Meta Ads | Hire freelance ads manager | Marketing agency |
| Time investment | 10-15 hrs/week (owner) | 20+ hrs/week or hire help | Full-time staff needed |

---

## Realistic Time Budget (10-15 hrs/week)

| Activity | Hours/Week | When |
|----------|-----------|------|
| Content creation (filming, editing, posting) | 3-4 | Batch on property visit days |
| Guest communication (all platforms) | 2-3 | Daily, 15-20 min windows |
| Ad management (review, adjust) | 1-2 | Twice/week, 30-60 min each |
| Performance review | 1 | Weekly, fixed day/time |
| Pricing updates | 0.5-1 | During weekly review |
| Platform maintenance (listings, responses to inquiries) | 1-2 | Daily, brief checks |
| **Total** | **8.5-13** | Fits within 10-15 hr constraint |

---

## Sources

- [Rental Ninja - iCal Sync Without Channel Manager](https://try.rental-ninja.com/blog/how-to-sync-your-airbnb-and-booking-com-calendars-without-a-channel-manager-using-ical-avoiding-overbookings)
- [Booking.com Partner Help - Calendar Sync](https://partner.booking.com/en-us/help/rates-availability/extranet-calendar/syncing-your-bookingcom-calendar-third-party-calendars)
- [BuildUp Bookings - Facebook Ads for Vacation Rentals](https://www.buildupbookings.com/blog/facebook-ads-for-vacation-rental-marketers/)
- [Meta Ads Full-Funnel Strategy 2026](https://www.metamktgagency.com/blog/meta-ads-full-funnel-strategy)
- [Stackmatix - Meta Ads Funnel Strategy 2026](https://www.stackmatix.com/blog/meta-ads-funnel-strategy)
- [Awning - Vacation Rental Marketing Strategies 2026](https://awning.com/post/vacation-rental-marketing-strategies-2026)
- [Guesty - Instagram for Short-Term Rentals](https://www.guesty.com/blog/how-to-use-instagram-to-market-your-short-term-rental/)
- [Hostfully - Automated Messaging Templates](https://www.hostfully.com/blog/automated-messaging-vacation-rentals/)
- [Key Data Dashboard - Vacation Rental KPIs](https://www.keydatadashboard.com/blog/vacation-rental-data-101-top-kpis)
- [Hostfully - Vacation Rental KPIs](https://www.hostfully.com/blog/vacation-rental-kpis/)
- [PriceLabs - Dynamic Pricing](https://hello.pricelabs.co/blog/vacation-rental-revenue-metrics/)
- [Smoobu - Channel Manager Pricing](https://www.smoobu.com/en/)
- [TemporadaLivre](https://www.temporadalivre.com/en)
- [Rentals United - iCal Sync Guide](https://rentalsunited.com/blog/airbnb-calendar-sync/)

**Confidence levels:**
- Distribution architecture (iCal sync, platform hierarchy): HIGH -- verified with official Airbnb and Booking.com documentation
- Marketing funnel structure (Meta Ads 3-layer): HIGH -- consistent across multiple authoritative sources and 2026-dated guides
- Content strategy (pillars, cadence): MEDIUM -- general best practices confirmed, but optimal cadence for this specific property/market is untested
- Pricing strategy (seasonal tiers): MEDIUM -- based on 5 months of owner data, needs validation with 12+ months
- Time budget allocation: MEDIUM -- estimates based on industry benchmarks, will need calibration to owner's actual workflow
- Brazilian platform integration (TemporadaLivre): LOW -- limited specific documentation found, needs hands-on verification
