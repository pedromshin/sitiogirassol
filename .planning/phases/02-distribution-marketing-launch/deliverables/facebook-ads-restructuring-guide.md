# Facebook Ads Restructuring Guide: Traffic to Messages Migration

**For:** Sitio Girassol (@sitiogirassol.sp)
**Date:** March 2026
**Objective:** Migrate all Facebook/Instagram ad campaigns from Traffic (Landing Page Views) to Messages (WhatsApp conversations) to generate qualified booking inquiries instead of anonymous website clicks.

---

## 1. Why Restructure -- Current Problems

Your current Facebook/Instagram ad campaigns are optimized for **Traffic** (Landing Page Views). This means Meta shows your ads to people who are most likely to **click a link** -- NOT people who are most likely to **book a stay**. The result: lots of clicks, zero trackable bookings.

### Current Campaign Performance

| Campaign | Objective | Spend | Results | Cost Per Result | Conversion Ranking |
|----------|-----------|-------|---------|-----------------|-------------------|
| Manual_Campaign_1 | Traffic (LPV) | R$376.19 | 727 LPVs | R$0.52/LPV | Below average - Bottom 10-20% |
| Instagram boosts (4) | Traffic (clicks) | R$10.95 | 24 clicks | R$0.46/click | Not rated |
| **Total** | | **R$387.14** | **751 interactions** | | |

### The Problem

- **"Below average - Bottom 10-20%" conversion ranking** on ALL Traffic campaigns -- this means Meta's own algorithm recognizes these ads are underperforming at converting people
- **R$387.14 spent with zero trackable bookings** -- Traffic objective sends people to the website, but there is no way to track if they then go to Airbnb and book
- **Traffic objective optimizes for clickers, not bookers** -- Meta finds people who habitually click links (often "link clickers" who never buy anything)
- **No direct communication channel** -- website visitors arrive and leave without any way to follow up or answer questions

### The Solution: Messages Objective

The **Messages objective** optimizes for people who will **start a WhatsApp conversation**. This gives you:

1. **Direct contact with potential guests** -- you can answer questions, share availability, and close bookings in real time
2. **Higher quality leads** -- someone who sends a WhatsApp message is more interested than someone who clicks a link
3. **Conversation = relationship** -- you can follow up, send photos, offer deals
4. **Measurable results** -- you can count conversations and track which ones become bookings
5. **WhatsApp is the dominant communication channel in Brazil** -- guests are comfortable using it

---

## 2. Step 1 -- Pause All Existing Traffic Campaigns

**Goal:** Zero active campaigns using the Traffic objective. You must do this BEFORE creating new Messages campaigns to avoid budget competition.

### Instructions

1. Go to **Meta Ads Manager** at [business.facebook.com](https://business.facebook.com) > Ads Manager
2. In the **Campaigns** tab, you will see your active campaigns listed
3. Look for **Manual_Campaign_1** and any other active campaigns using the Traffic objective
4. Select ALL active Traffic campaigns by checking the checkbox next to each one
5. Click the **toggle switch** next to each campaign to turn it OFF (or select all and click the "Pause" button in the toolbar)
6. **DO NOT delete** these campaigns -- keep them paused for performance reference. You can always review their data later.
7. Also check for any active Instagram post boosts:
   - Go to your Instagram profile (@sitiogirassol.sp)
   - Check each recent post for "View Insights" > "Promotions"
   - End any active boost promotions

### Verification

- [ ] Go to Ads Manager > Campaigns tab
- [ ] Filter by "Status: Active"
- [ ] Confirm: **zero active campaigns** appear
- [ ] All previous Traffic campaigns show "Paused" status

> **Important:** Complete this step BEFORE proceeding to Step 2. Running Traffic and Messages campaigns simultaneously wastes budget because they compete for the same audience.

---

## 3. Step 2 -- Create Retargeting Custom Audiences

**Goal:** Build two Custom Audiences from people who already know your property -- website visitors (via Facebook Pixel) and Instagram engagers. These "warm" audiences convert better and cost less per lead than cold audiences.

### Audience 1: Website Visitors (Facebook Pixel)

The Facebook Pixel is already installed on sitiogirassol.org (configured via the `NEXT_PUBLIC_FB_PIXEL_ID` environment variable in the website code). This means Meta has been tracking everyone who visits your website. Now you need to create an audience from those visitors.

**Steps:**

1. Go to **Ads Manager** > **Audiences** (in the left sidebar, or navigate to business.facebook.com/adsmanager/audiences)
2. Click **Create Audience** > **Custom Audience**
3. Select source: **Website**
4. In the "Website Custom Audience" dialog:
   - Website: Select your Pixel (it should be pre-selected)
   - Events: **All website visitors**
   - Retention: **180 days** (set this to the maximum to capture as many visitors as possible since the site is relatively new)
5. Audience name: **"Website Visitors - 180d"**
6. Click **Create Audience**

> **Note:** This audience updates automatically. As more people visit sitiogirassol.org, the audience grows. You do not need to recreate it.

### Audience 2: Instagram Engagers

**Steps:**

1. In **Audiences**, click **Create Audience** > **Custom Audience**
2. Select source: **Instagram account**
3. In the dialog:
   - Select your Instagram account: **@sitiogirassol.sp**
   - Condition: **People who engaged with your professional account** (this includes likes, comments, shares, saves, and profile visits)
   - Retention: **180 days**
4. Audience name: **"Instagram Engagers - 180d"**
5. Click **Create Audience**

> **Note:** Like the website audience, this audience updates automatically as more people engage with your Instagram content.

### Why 180 Days?

Your website and Instagram presence are still growing. Using 180 days maximizes the audience size. As your presence matures (6+ months), you can experiment with shorter windows (90 days, 30 days) for more recently engaged audiences.

### Verification

- [ ] Custom Audience "Website Visitors - 180d" created and visible in Audiences section
- [ ] Custom Audience "Instagram Engagers - 180d" created and visible in Audiences section
- [ ] Both audiences show "Populating" or a number (it may take up to 48 hours to fully populate)

---

## 4. Step 3 -- Create Messages Campaign

**Goal:** Create a new campaign optimized for WhatsApp conversations (Messages objective) with Advantage Campaign Budget (CBO) enabled.

### Campaign Level Settings

1. In **Ads Manager**, click **+ Create** (green button)
2. Choose campaign objective: **Engagement** (in the new ODAX structure, Messages is under Engagement)
3. When prompted for conversion location, select: **Messaging apps**
4. Campaign name: **"Messages_WhatsApp_v1"**
5. **Enable "Advantage Campaign Budget"** (this is CBO -- Campaign Budget Optimization)
   - This lets Meta automatically distribute budget to the best-performing ad sets
   - This is more efficient than manually setting budgets per ad set
   - Per ADS-04: CBO is required for this campaign structure
6. Set daily budget: **R$20/day** to start (equals R$600/month -- within the R$500-800/month budget range)
   - After 2 weeks of data, you can increase to R$27/day (R$810/month) if results are good
   - Or decrease to R$17/day (R$500/month) if you need to be more conservative
7. Bidding strategy: **Lowest cost** (default -- this is the best starting strategy)
8. Click **Next** to proceed to ad set configuration

### Budget Summary

| Setting | Value | Monthly Equivalent |
|---------|-------|-------------------|
| Starting daily budget | R$20/day | R$600/month |
| Minimum daily budget | R$17/day | R$500/month |
| Maximum daily budget | R$27/day | R$810/month |
| Bidding strategy | Lowest cost | -- |
| Budget type | Advantage Campaign Budget (CBO) | -- |

---

## 5. Step 4 -- Configure Ad Sets

**Goal:** Create 3 ad sets targeting different audience segments. CBO (Advantage Campaign Budget) will automatically distribute the daily budget to whichever ad set performs best.

### Ad Set 1: "Retargeting - Website Visitors"

1. Ad set name: **"Retargeting - Website Visitors"**
2. Conversion location: **WhatsApp**
3. Messaging app: **WhatsApp**
4. Connect your WhatsApp number:
   - You must have **WhatsApp Business** installed (not regular WhatsApp)
   - If you currently use personal WhatsApp, convert to WhatsApp Business first:
     - Download "WhatsApp Business" from App Store / Google Play
     - It will migrate your existing number and conversations
     - This is free and uses the same phone number
   - Connect your WhatsApp Business number in the ad set settings
5. Audience: Select **"Website Visitors - 180d"** Custom Audience (created in Step 2)
6. Placements: **Advantage+ placements** (let Meta optimize where your ads appear)
7. Click **Next** or save this ad set

### Ad Set 2: "Retargeting - Instagram Engagers"

1. Ad set name: **"Retargeting - Instagram Engagers"**
2. Conversion location: **WhatsApp**
3. Messaging app: **WhatsApp** (same number as Ad Set 1)
4. Audience: Select **"Instagram Engagers - 180d"** Custom Audience
5. Placements: **Advantage+ placements**

### Ad Set 3: "Local Interest - Sao Paulo"

1. Ad set name: **"Local Interest - Sao Paulo"**
2. Conversion location: **WhatsApp**
3. Messaging app: **WhatsApp** (same number)
4. Audience -- configure manually (no Custom Audience):
   - **Location:** Sao Paulo metropolitan area (set 100km radius from Sao Paulo city center)
   - **Age:** 25-55
   - **Interests:** Select interests related to:
     - Nature tourism / Ecoturismo
     - Vacation rentals / Aluguel de temporada
     - Weekend getaway / Fim de semana
     - Countryside / Interior
     - Churrasco / BBQ
     - Swimming pool / Piscina
5. Placements: **Advantage+ placements**

> **Important note about Ad Set 3:** This is a "cold" audience -- people who have never interacted with your property. The cost per lead (CPL) will be higher than the retargeting ad sets. **If CPL exceeds R$5.00 after 1 week, pause this ad set and let CBO reallocate the budget to the retargeting ad sets.**

### Ad Set Summary

| Ad Set | Audience Type | Expected CPL | Action Threshold |
|--------|---------------|-------------|-----------------|
| 1. Website Visitors | Warm (retargeting) | R$0.30-1.50 | Keep running if CPL < R$2.00 |
| 2. Instagram Engagers | Warm (retargeting) | R$0.40-2.00 | Keep running if CPL < R$2.00 |
| 3. Local Interest - SP | Cold (prospecting) | R$5.00-50.00+ | Pause if CPL > R$5.00 after 1 week |

---

## 6. Step 5 -- Create Ad Creative

**Goal:** Create compelling ads that drive WhatsApp conversations. Each ad set gets 2 ads (A/B test). Meta will automatically show the better-performing ad more often.

### Creative Principles

1. **Feature the EXPERIENCE, not empty rooms** -- Show people enjoying the pool, BBQ, nature. Guests book experiences, not square meters.
2. **Strong hook in first 3 seconds** -- Use text overlay or a striking visual that stops the scroll. The first 3 seconds determine if someone watches or scrolls past.
3. **Clear CTA (Call to Action):** "Envie uma mensagem no WhatsApp" / "Fale conosco no WhatsApp" / "Reserve pelo WhatsApp"
4. **Use Portuguese as the primary language** -- Your target audience is Brazilian. English is secondary.
5. **Show the property in use** -- If possible, include photos or videos of real guests (with permission) or the owner enjoying the space.

### Ad A (Use for ALL 3 ad sets): Adapted from Best-Performing Traffic_Ad_4

Your Traffic_Ad_4 had the best performance metrics:
- **R$0.33-0.41 per landing page view** (lowest CPR of all ads)
- **"Above average" quality ranking**
- **"Above average" engagement ranking**

This creative works -- the audience responds to it. Now adapt it for WhatsApp:

1. Use the **same image/video** from Traffic_Ad_4
2. **Change the CTA** from "Learn More" / "Visit Website" to **"Send WhatsApp Message"**
3. Add **text overlay** to the creative: "Reserve pelo WhatsApp" or "Fale conosco no WhatsApp"
4. Update the **primary text** (caption) to encourage messaging:
   - Example: "Sitio com piscina, churrasqueira e muita natureza a 1h de SP. Quer saber mais? Fale com a gente no WhatsApp!"
5. When someone clicks the ad, Meta will open WhatsApp with a pre-filled message. Configure a **greeting message** like:
   - "Ola! Vi o anuncio do Sitio Girassol e quero saber mais sobre disponibilidade e precos."

### Ad B Options (Vary by Ad Set)

**Ad Set 1 (Website Visitors) -- Carousel Ad:**
- Format: **Carousel** (multiple images)
- Cards: 4-5 property highlights
  - Card 1: Pool (aerial or person swimming)
  - Card 2: BBQ/churrasqueira area (ideally with food)
  - Card 3: Nature view / garden
  - Card 4: Bedroom / interior
  - Card 5: Sunset or exterior shot
- Each card headline: Short description ("Piscina privativa", "Churrasqueira completa", etc.)
- CTA button on each card: "Send WhatsApp Message"

**Ad Set 2 (Instagram Engagers) -- Video/Reel Ad:**
- Format: **Single Video** (15-30 seconds)
- Use a Reel from your Instagram content strategy (see Instagram Content Strategy document)
- Repurpose your best-performing Reel as an ad
- If you do not have Reels yet, create a simple slideshow video from your best photos with music
- CTA: "Send WhatsApp Message"

**Ad Set 3 (Local Interest - SP) -- Hero Image Ad:**
- Format: **Single Image**
- Use your best property photo -- the one that shows the pool + exterior in golden hour light
- **Text overlay on the image:**
  - Line 1: "Sitio com Piscina a 1h de SP"
  - Line 2: "A partir de R$280/noite"
  - Line 3: "Fale conosco no WhatsApp"
- Primary text: "Seu proximo fim de semana pode ser aqui. Piscina, churrasqueira, natureza e tranquilidade. Reserve pelo WhatsApp!"
- CTA button: "Send WhatsApp Message"

---

## 7. Budget and ROI Tracking

### Monthly Budget

| Item | Range | Starting Value |
|------|-------|---------------|
| Monthly ad spend | R$500 - R$800/month | R$600/month (R$20/day) |
| Starting period | First 2 weeks | Evaluate performance before adjusting |
| Increase condition | CPL under target AND bookings converting | Increase to R$27/day (R$810/month) |
| Decrease condition | CPL over target OR no bookings converting | Decrease to R$17/day (R$500/month) |

### Target: Cost Per Lead (CPL)

**Target CPL: R$0.50 or less per qualified lead**

A "qualified lead" is someone who sends a WhatsApp message asking about:
- Availability for specific dates
- Pricing or discounts
- Property details or amenities
- How to book

Messages like "oi" or spam do NOT count as qualified leads.

**Where to check CPL:** In Meta Ads Manager, look at the "Cost per messaging conversation started" metric for each ad set.

| Audience | Target CPL | Alert Threshold | Action |
|----------|-----------|----------------|--------|
| Retargeting (Website + Instagram) | R$0.50 or less | Above R$2.00 | Review creative and audience settings |
| Cold (Local Interest) | R$5.00 or less | Above R$5.00 | Pause ad set after 1 week |

### Manual Attribution (Critical -- Meta Pixel CANNOT Track Airbnb Bookings)

Meta Pixel is installed on sitiogirassol.org, but it **cannot** track what happens after someone leaves your website and goes to Airbnb, Booking.com, or any other platform to actually book. This means Meta Ads Manager will NEVER show you "bookings" or "revenue" from your ads.

**The ONLY way to measure true ad ROI is manual attribution.**

**How to do it:**

Add this question to EVERY guest conversation (in WhatsApp, Airbnb messages, or any other channel):

> **"Como voce nos encontrou?"**
> (How did you find us?)

Then track responses in a simple spreadsheet:

| Data | Nome | Fonte (Instagram / Facebook / Google / Indicacao / Airbnb Busca) | Plataforma de Reserva (Airbnb / Booking / WhatsApp) | Valor (R$) | Converteu? (Sim/Nao) |
|------|------|-------|---------------------|-------|-----------|
| 2026-04-01 | Maria Silva | Facebook Ad | Airbnb | R$840 | Sim |
| 2026-04-02 | Joao Santos | Instagram | WhatsApp direto | R$560 | Sim |
| 2026-04-03 | Ana Costa | Facebook Ad | -- | -- | Nao |

**Review this spreadsheet weekly** to calculate:
- **Cost per booking** = Total ad spend that week / Number of bookings attributed to ads
- **Ad-attributed revenue** = Sum of "Valor" where Fonte = Facebook Ad or Instagram Ad
- **ROAS (Return on Ad Spend)** = Ad-attributed revenue / Total ad spend

### Weekly Review Checklist

Complete this checklist every week on the SAME day (pick a day and stick to it):

- [ ] **Budget check:** Total spend this week vs. budget target (stay within R$500-800/month)
- [ ] **CPL check per ad set:** Is each ad set meeting its CPL target?
  - Retargeting ad sets: target R$0.50 or less (alert at R$2.00)
  - Cold ad set: target R$5.00 or less (pause if exceeded)
- [ ] **Ad performance:** Which ads have the best engagement? Keep winners, pause losers.
  - Look at: CTR (Click-Through Rate), messaging conversations started, quality ranking
  - If one ad has 2x the conversations of another, consider pausing the lower performer and creating a new variant
- [ ] **WhatsApp conversations:** How many new conversations started this week from ads?
- [ ] **Attribution tracking:** Update the manual tracking spreadsheet with any new guest conversations
  - Add the "Como voce nos encontrou?" question to every conversation
- [ ] **Bookings attributed to ads:** Count bookings where the source was Facebook/Instagram
- [ ] **Cost per booking:** Calculate total ad spend / bookings from ads
- [ ] **Adjust budget:** Based on results, increase, maintain, or decrease daily spend

---

## 8. WhatsApp Business Setup

If you are using personal WhatsApp, you need to convert to WhatsApp Business before launching the Messages campaign.

### Why WhatsApp Business?

- Required by Meta for Messages-objective ads
- Free to use (same phone number, same conversations)
- Adds business features: business profile, automated greeting, quick replies, catalog
- Your existing conversations will be preserved during the switch

### Setup Steps

1. Download **WhatsApp Business** from App Store or Google Play
2. Open the app and accept terms
3. It will detect your existing WhatsApp number and offer to migrate
4. Follow the migration steps (this transfers your chats and settings)
5. Set up your business profile:
   - Business name: **Sitio Girassol**
   - Category: **Travel & Tourism** or **Vacation Rental**
   - Description: "Sitio com piscina, churrasqueira e natureza a 1h de SP. Perfeito para fim de semana em familia ou amigos."
   - Address: Property address
   - Website: sitiogirassol.org
   - Instagram: @sitiogirassol.sp
6. Set up an **automated greeting message:**
   - Go to Settings > Business tools > Greeting message
   - Enable greeting message
   - Text: "Ola! Obrigado por entrar em contato com o Sitio Girassol! Vou responder o mais rapido possivel. Enquanto isso, visite nosso site: sitiogirassol.org"

---

## 9. Campaign Launch Checklist

Before clicking "Publish" on your Messages campaign, verify everything:

### Pre-Launch Verification

- [ ] All existing Traffic campaigns are **paused** (zero active Traffic campaigns)
- [ ] Custom Audience **"Website Visitors - 180d"** created and populating
- [ ] Custom Audience **"Instagram Engagers - 180d"** created and populating
- [ ] Messages campaign **"Messages_WhatsApp_v1"** created
- [ ] **Advantage Campaign Budget (CBO)** is enabled at the campaign level
- [ ] Daily budget set to **R$20/day** (starting value)
- [ ] Bidding strategy: **Lowest cost**
- [ ] **WhatsApp Business** installed and connected as messaging destination
- [ ] **3 ad sets** configured:
  - [ ] Ad Set 1: Retargeting - Website Visitors (Custom Audience)
  - [ ] Ad Set 2: Retargeting - Instagram Engagers (Custom Audience)
  - [ ] Ad Set 3: Local Interest - Sao Paulo (manual targeting)
- [ ] Each ad set has **2 ads** (Ad A + Ad B)
- [ ] Ad creative features **property experience** (people enjoying pool/BBQ/nature), NOT empty rooms
- [ ] All ads have **WhatsApp CTA** ("Send WhatsApp Message")
- [ ] WhatsApp **greeting message** is configured in WhatsApp Business
- [ ] **Attribution tracking spreadsheet** created with columns:
  - Data | Nome | Fonte | Plataforma de Reserva | Valor | Converteu?
- [ ] **Weekly review day** chosen and calendar reminder set: _____________ (day of week)

### Post-Launch (First 48 Hours)

- [ ] Ads showing "Active" status (not "In Review" or "Rejected")
- [ ] At least some impressions and reach showing in Ads Manager
- [ ] Check WhatsApp for incoming messages from ad clicks
- [ ] Respond to all WhatsApp messages within 1 hour during waking hours

### After 1 Week

- [ ] Review CPL per ad set
- [ ] Pause Ad Set 3 (cold) if CPL > R$5.00
- [ ] Review ad creative performance -- pause underperformers
- [ ] Update manual attribution spreadsheet
- [ ] Calculate preliminary cost per booking

---

## 10. Troubleshooting

### "Ad Rejected" or "In Review" for Too Long

- Check ad text for restricted words (avoid "guaranteed," "promise," health claims)
- Ensure images follow Meta's text-in-image guidelines (text should not cover >20% of the image)
- If stuck in review >48 hours, submit an appeal through Ads Manager

### Low Impressions / No Delivery

- Check if your audience size is too small (Custom Audiences may need time to populate)
- Ensure daily budget is at least R$10/day (too low and Meta cannot optimize)
- Check that your WhatsApp Business number is properly connected

### High CPL on Retargeting Ad Sets

- If CPL > R$2.00 on retargeting, your Creative may need refreshing
- Try different images/videos
- Test different primary text / captions
- Check audience size -- if very small (<500 people), Meta cannot optimize effectively

### No WhatsApp Messages Coming In

- Verify WhatsApp Business is connected in ad settings
- Check if the greeting message is working (ask a friend to click a test ad)
- Ensure your phone has notifications enabled for WhatsApp Business
- Check if messages are going to a different WhatsApp number than expected

---

## Quick Reference Card

| Item | Value |
|------|-------|
| Campaign name | Messages_WhatsApp_v1 |
| Objective | Engagement > Messages |
| Budget type | Advantage Campaign Budget (CBO) |
| Daily budget | R$20-27/day |
| Monthly budget | R$500-800/month |
| CPL target (retargeting) | R$0.50 or less |
| CPL alert (retargeting) | Above R$2.00 |
| CPL target (cold) | R$5.00 or less |
| CPL alert (cold) | Pause if above R$5.00 after 1 week |
| Attribution method | Manual: "Como voce nos encontrou?" |
| Weekly review | Same day every week |
| Ad sets | 3 (2 retargeting + 1 cold) |
| Ads per ad set | 2 (A/B test) |
| CTA | Send WhatsApp Message |
| Custom Audiences | Website Visitors - 180d, Instagram Engagers - 180d |

---

*Guide created for Sitio Girassol -- Phase 2: Distribution + Marketing Launch*
*References: D-14, D-15, D-16, D-17, D-18, D-19, D-20, D-21 from 02-CONTEXT.md*
*Requirements: ADS-01, ADS-02, ADS-04, ADS-06*
