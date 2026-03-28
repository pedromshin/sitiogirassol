# Meta Ads 3-Layer Funnel Setup Guide: Awareness, Consideration, Conversion

**For:** Sitio Girassol (@sitiogirassol.sp)
**Date:** March 2026
**Objective:** Build a complete 3-layer Meta Ads funnel that takes cold audiences from awareness to booking conversations on WhatsApp, plus create lookalike audiences from website visitors and Instagram engagers to expand reach.
**Requirements covered:** ADS-03 (3-layer funnel), ADS-05 (lookalike audiences)
**Builds on:** Phase 2 Facebook Ads Restructuring Guide (Messages_WhatsApp_v1 campaign, Custom Audiences)

---

## 1. Strategy Overview -- The 3-Layer Funnel

The 3-layer funnel is a system that moves people from "never heard of Sitio Girassol" to "sending a WhatsApp message to book." Each layer has a specific job, a specific audience, and a specific budget allocation.

```
                    LAYER 1: AWARENESS (60% budget)
                 ┌─────────────────────────────────────┐
                 │  Cold audiences see your Reels/videos │
                 │  Goal: Maximize reach in Sao Paulo    │
                 │  Campaign: Awareness_Reels_v1         │
                 │  Budget: R$12/day (at R$20/day total) │
                 └──────────────────┬──────────────────┘
                                    │
                     People who watched >50% of your video,
                     visited your profile, or engaged
                                    │
                                    ▼
                    LAYER 2: CONSIDERATION (25% budget)
                 ┌─────────────────────────────────────┐
                 │  Warm audiences see property details   │
                 │  Goal: Deepen interest (carousel, etc) │
                 │  Campaign: Consideration_Retarget_v1   │
                 │  Budget: R$5/day (at R$20/day total)  │
                 └──────────────────┬──────────────────┘
                                    │
                     People who engaged with Layer 2 ads,
                     visited the website, or saved posts
                                    │
                                    ▼
                    LAYER 3: CONVERSION (15% budget)
                 ┌─────────────────────────────────────┐
                 │  Hot audiences get direct WhatsApp CTA │
                 │  Goal: Start booking conversations     │
                 │  Campaign: Conversion_Messages_v1      │
                 │  Budget: R$3/day (at R$20/day total)  │
                 └─────────────────────────────────────┘
```

### Why This Structure Works

- **Layer 1 (60% budget)** builds your audience pipeline. Without cold reach, Layers 2 and 3 have nobody to target. This is the engine.
- **Layer 2 (25% budget)** warms people up. They already know your property exists; now show them details, reviews, and reasons to book.
- **Layer 3 (15% budget)** converts. These people have seen your property multiple times. A direct WhatsApp CTA is all they need to start a booking conversation.

### Budget Allocation at Different Spend Levels

| Total Daily Spend | Layer 1 (60%) | Layer 2 (25%) | Layer 3 (15%) | Monthly Total |
|-------------------|---------------|---------------|---------------|---------------|
| R$20/day          | R$12/day      | R$5/day       | R$3/day       | R$600/month   |
| R$25/day          | R$15/day      | R$6.25/day    | R$3.75/day    | R$750/month   |
| R$27/day          | R$16.20/day   | R$6.75/day    | R$4.05/day    | R$810/month   |

---

## 2. Prerequisites -- What Must Exist Before Starting

Before creating the funnel, verify that these items from Phase 2 are in place:

### Required from Phase 2

- [ ] **Custom Audience "Website Visitors - 180d"** -- Created in Phase 2, Step 2. Tracks all visitors to sitiogirassol.org via Facebook Pixel.
- [ ] **Custom Audience "Instagram Engagers - 180d"** -- Created in Phase 2, Step 2. Tracks all people who engaged with @sitiogirassol.sp.
- [ ] **Campaign "Messages_WhatsApp_v1"** -- Created in Phase 2, Step 3. This campaign will be restructured as Layer 3 (NOT duplicated).
- [ ] **Facebook Pixel active on sitiogirassol.org** -- Configured via `NEXT_PUBLIC_FB_PIXEL_ID` environment variable. Verify at: Meta Events Manager > Pixels > Your Pixel > "Last Active" should show a recent date.
- [ ] **WhatsApp Business account linked to Meta** -- Set up in Phase 2 for Messages campaign. Verify at: Meta Business Suite > Settings > Linked accounts > WhatsApp.

### How to Verify Each Prerequisite

**Check Custom Audiences:**
1. Go to **Meta Ads Manager** at [business.facebook.com](https://business.facebook.com)
2. Navigate to: Hamburger menu (top-left) > **All tools** > **Audiences**
3. You should see both "Website Visitors - 180d" and "Instagram Engagers - 180d" listed
4. Status should be "Ready" (if it says "Too small," the audience has fewer than 1,000 people -- this is addressed in Step 1 below)

**Check Facebook Pixel:**
1. Go to **Meta Events Manager** at [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
2. Select your Pixel
3. Under "Overview," look for "Last Activity" -- it should show activity within the last 24-48 hours
4. If the Pixel is not active, verify the website is live at sitiogirassol.org

**Check Messages Campaign:**
1. In **Ads Manager** > **Campaigns** tab
2. Look for "Messages_WhatsApp_v1" -- it should exist (active or paused)
3. This campaign will be restructured in Step 5 of this guide

> **STOP HERE** if any prerequisite is missing. Go back to the Phase 2 Facebook Ads Restructuring Guide and complete the missing steps before proceeding.

---

## 3. Step 1 -- Check Source Audience Sizes

Before creating lookalike audiences, you must check whether your source audiences (Website Visitors and Instagram Engagers) have reached the minimum threshold of **1,000 people**. Meta requires at least 100 people to create a lookalike, but recommends 1,000-5,000 for meaningful results.

### Instructions

1. Go to **Meta Ads Manager** > **Audiences**
   - Direct URL: [business.facebook.com/adsmanager/audiences](https://business.facebook.com/adsmanager/audiences)
2. Find **"Website Visitors - 180d"** in the audience list
3. Look at the **"Size"** column -- this shows how many people are in the audience
4. Write down the number: Website Visitors = ________
5. Find **"Instagram Engagers - 180d"** in the audience list
6. Write down the number: Instagram Engagers = ________

### Decision Tree

```
Website Visitors >= 1,000  AND/OR  Instagram Engagers >= 1,000?
    │
    ├── YES (one or both >= 1,000) ──> Proceed to Step 2 (create Lookalike Audiences)
    │   Create a lookalike ONLY from the audience(s) that are >= 1,000
    │
    └── NO (BOTH are < 1,000) ──> Skip Step 2 entirely
        Go directly to Step 3 and use interest-based targeting only
        Come back to Step 2 when an audience reaches 1,000
```

### Verification

- [ ] Checked size of "Website Visitors - 180d": ________ people
- [ ] Checked size of "Instagram Engagers - 180d": ________ people
- [ ] Decision made: [ ] Create lookalikes (proceed to Step 2) / [ ] Skip to Step 3 (interest-based only)

> **If both audiences are under 1,000:** This is normal for a property that has been marketing for only 1-2 months. Interest-based targeting (Step 3, Ad Set 3) will be your primary audience while the source audiences grow. Continue posting Reels and driving website traffic -- the audiences will grow over time.

---

## 4. Step 2 -- Create Lookalike Audiences

Lookalike audiences tell Meta: "Find me more people who look like my website visitors / Instagram engagers." This expands your reach to new people who are statistically similar to those who already showed interest in Sitio Girassol.

> **Skip this step if BOTH source audiences are < 1,000 people (from Step 1).**

### Audience A: Lookalike from Website Visitors

1. Go to **Meta Ads Manager** > **Audiences**
   - Direct URL: [business.facebook.com/adsmanager/audiences](https://business.facebook.com/adsmanager/audiences)
2. Click **Create Audience** > **Lookalike Audience**
3. In the "Create a Lookalike Audience" dialog:
   - **Source:** Select **"Website Visitors - 180d"** from the dropdown
   - **Location:** Type **"Brazil"** and select it (Brasil)
   - **Audience size:** Move the slider to **1-3%**
     - 1% = most similar to your website visitors (smaller audience, higher quality)
     - 3% = slightly broader (larger audience, still relevant)
     - The slider lets you pick any value between 1% and 3% -- start at **1%** if your source audience is 1,000-5,000, or **3%** if your source is smaller
4. Audience name: **"Lookalike - Website Visitors 1-3% Brazil"**
5. Click **Create Audience**
6. Wait -- the audience takes 24-48 hours to fully populate. Status will show "Populating" and then "Ready."

### Audience B: Lookalike from Instagram Engagers

1. In **Audiences**, click **Create Audience** > **Lookalike Audience**
2. In the dialog:
   - **Source:** Select **"Instagram Engagers - 180d"** from the dropdown
   - **Location:** **Brazil** (Brasil)
   - **Audience size:** **1-3%** (same setting as Audience A)
3. Audience name: **"Lookalike - Instagram Engagers 1-3% Brazil"**
4. Click **Create Audience**
5. Wait 24-48 hours for the audience to populate

### Important Warning: Lookalike Auto-Expansion

Since late 2024, Meta auto-expands lookalike audiences beyond the specified percentage for performance-oriented campaign objectives (like Sales, Leads, and App Promotion). This means:

- **The 1-3% you set is a starting signal, NOT a hard boundary.** Meta's algorithm may expand beyond 3% if it finds better performance opportunities in a broader audience.
- **This is normal behavior** -- it does not mean your settings are wrong.
- **How to monitor:** Watch your CPM (cost per 1,000 impressions) and reach numbers. If reach dramatically exceeds the estimated audience size shown when you created the lookalike, Meta has expanded beyond your specified percentage.
- **What to do:** Focus on creative quality over audience precision. Meta's algorithm will find the right people if your creative (Reels, images, ad copy) resonates. If CPM spikes without proportional engagement, your creative needs refreshing -- not your audience settings.

### If Only ONE Source Audience is >= 1,000

Only create the lookalike for the audience that meets the threshold. For example:
- Website Visitors = 1,500 and Instagram Engagers = 400 --> Create ONLY "Lookalike - Website Visitors 1-3% Brazil"
- In Step 3, you will still have an interest-based ad set as a fallback for the missing lookalike

### Verification

- [ ] "Lookalike - Website Visitors 1-3% Brazil" created (or skipped because source < 1,000)
- [ ] "Lookalike - Instagram Engagers 1-3% Brazil" created (or skipped because source < 1,000)
- [ ] Both created audiences show "Populating" or "Ready" status in the Audiences tab
- [ ] Waited 24-48 hours before using lookalike audiences in campaigns (if freshly created)

---

## 5. Step 3 -- Create Layer 1 Campaign (Awareness)

Layer 1 is the top of the funnel. Its job is to show your property to as many relevant people as possible in Sao Paulo state. You will repurpose your best-performing Instagram Reels as ad creative.

### Campaign Level Settings

1. Go to **Meta Ads Manager** > Click **+ Create** (green button)
2. Choose campaign objective: **Awareness** (or **Reach** if Awareness is not available in your account)

> **CRITICAL: Special Ad Category WARNING**
>
> When creating the campaign, Meta will ask: "Does this ad fall under a Special Ad Category?"
>
> **DO NOT select "Housing."** Sitio Girassol is a short-term vacation rental (tourism/hospitality), NOT residential housing. Selecting Housing would severely restrict your targeting options -- no age targeting, no gender targeting, forced minimum radius on location targeting.
>
> **How to frame your ads to avoid auto-flagging:**
> - USE these words: "reservar" (book/reserve), "visitar" (visit), "fim de semana" (weekend), "ferias" (vacation), "hospedagem" (hosting/accommodation)
> - AVOID these words: "alugar" (rent), "morar" (live), "residencia" (residence), "aluguel" (rental as in housing)
>
> **If your ads get flagged as Housing:**
> 1. Go to Ads Manager > select the flagged ad > click "Request Review"
> 2. In the appeal, explain: "This is a short-term vacation rental (less than 30 days), operating as a tourism/hospitality business. It is not residential housing."
> 3. Provide your Airbnb listing URL as evidence: https://www.airbnb.com/rooms/1345960842338220775
> 4. Appeals are usually reviewed within 24-48 hours

3. Campaign name: **"Awareness_Reels_v1"**
4. **Enable "Advantage Campaign Budget" (CBO)** -- toggle this ON at the campaign level
5. Set daily budget: **R$12/day** (this is 60% of R$20/day total funnel budget)
   - If your total daily budget is R$25/day, set this to R$15/day
   - If your total daily budget is R$27/day, set this to R$16.20/day
6. Bidding strategy: **Lowest cost** (default)
7. Click **Next** to proceed to ad set configuration

### Ad Set 1: "LAL_WebVisitors" (Lookalike - Website Visitors)

> **Skip this ad set if the "Website Visitors - 180d" source audience is < 1,000 people or if you skipped Step 2.**

1. Ad set name: **"LAL_WebVisitors"**
2. Audience: Select **"Lookalike - Website Visitors 1-3% Brazil"** (created in Step 2)
3. Location narrowing: Add **Sao Paulo** (state) to narrow the lookalike to your geographic area
4. Age: **25-55**
5. Gender: **All**
6. Placements: **Advantage+ placements** (let Meta optimize where ads appear -- Feed, Stories, Reels, Explore)
7. Click **Next** or save this ad set

### Ad Set 2: "LAL_InstaEngagers" (Lookalike - Instagram Engagers)

> **Skip this ad set if the "Instagram Engagers - 180d" source audience is < 1,000 people or if you skipped Step 2.**

1. Ad set name: **"LAL_InstaEngagers"**
2. Audience: Select **"Lookalike - Instagram Engagers 1-3% Brazil"** (created in Step 2)
3. Location narrowing: Add **Sao Paulo** (state)
4. Age: **25-55**
5. Gender: **All**
6. Placements: **Advantage+ placements**

### Ad Set 3: "Interest_SP" (Interest-Based Targeting -- Always Active)

This ad set uses interest-based targeting and runs as a **baseline** -- always active regardless of whether lookalike audiences exist. It serves as both a fallback (if lookalikes are not ready) and a comparison benchmark.

1. Ad set name: **"Interest_SP"**
2. Audience -- configure manually (no Custom or Lookalike Audience):
   - **Location:** Sao Paulo (state) -- select "Estado de Sao Paulo"
   - **Age:** 25-55
   - **Gender:** All
   - **Detailed targeting (Interests):** Add ALL of the following interests:
     - "Viagem" (Travel)
     - "Turismo" (Tourism)
     - "Natureza" (Nature)
     - "Aluguel de temporada" (Vacation rental)
     - "Piscina" (Swimming pool)
     - "Churrasco" (BBQ)
     - "Fim de semana" (Weekend)
     - "Ecoturismo" (Ecotourism)
     - "Interior de Sao Paulo" (Sao Paulo countryside) -- if available
3. Placements: **Advantage+ placements**

> **Tip:** When entering interests, type the Portuguese word and select from the suggestions. If an exact match is not available, select the closest alternative. Not all terms may be available -- add as many as you can find.

### Creative for Layer 1: Repurpose Best-Performing Reels

Layer 1 uses your best organic Instagram Reels as ad creative. This is smart because these Reels have already proven they resonate with your audience.

**How to find your best-performing Reels:**

1. Open **Instagram** > Go to your profile (@sitiogirassol.sp)
2. Tap **Professional Dashboard** > **Content insights**
3. Filter by **Reels**
4. Sort by **Reach** (highest first)
5. Your top 2-3 Reels by reach are your best ad creative candidates

**How to use a Reel as ad creative:**

1. In **Ads Manager**, when creating an ad within an ad set:
   - Click **"Use existing post"** > **"Select post"**
   - Switch to the **Instagram** tab
   - Select one of your top-performing Reels from the list
   - This uses the existing Reel as the ad creative (including all engagement signals)
2. Alternatively, download the Reel and upload as a new video:
   - Open the Reel in Instagram > tap the three dots (...) > **Save** (this saves to your camera roll)
   - In Ads Manager, click **"Create ad"** > Upload the saved video
   - This approach lets you modify the ad copy without changing the original Reel

**Ad copy (Portuguese):**

- **Primary text:** "Fuja da rotina. Sitio com piscina, churrasqueira e muita natureza a 1h de SP. Perfeito para seu proximo fim de semana. Saiba mais pelo link ou WhatsApp."
- **Headline:** "Sitio Girassol -- Seu Refugio Pertinho de SP"
- **Description:** "Piscina, churrasqueira, 4 quartos. Ate 15 hospedes."
- **CTA button:** "Learn More" or "Send Message" (test both)

> **Create 2 ads per ad set:** One using your #1 performing Reel, one using your #2 performing Reel. Meta will automatically show the better performer more often.

### Verification

- [ ] Campaign **"Awareness_Reels_v1"** created with Awareness (or Reach) objective
- [ ] **Advantage Campaign Budget (CBO)** is toggled ON
- [ ] Daily budget set to **R$12/day** (or 60% of your total daily budget)
- [ ] **Housing Special Ad Category is NOT selected**
- [ ] Ad Set 1 "LAL_WebVisitors" configured with Lookalike audience (or skipped if source < 1,000)
- [ ] Ad Set 2 "LAL_InstaEngagers" configured with Lookalike audience (or skipped if source < 1,000)
- [ ] Ad Set 3 "Interest_SP" configured with interest-based targeting (always present)
- [ ] Each ad set has 2 ads using top-performing Instagram Reels
- [ ] All ad copy is in Portuguese
- [ ] Campaign status shows "Active" after publishing

---

## 6. Step 4 -- Create Layer 2 Campaign (Consideration)

Layer 2 retargets people who already interacted with Layer 1 content. These people know your property exists -- now show them detailed information to deepen their interest.

> **TIMING: Launch Layer 2 one week AFTER Layer 1 starts.** Layer 1 needs time to generate video viewers and engagers before Layer 2 has anyone to retarget. If you launch both simultaneously, Layer 2 will have empty audiences and waste budget.

### Before Creating Layer 2: Create the Video Viewers Custom Audience

You need a new Custom Audience of people who watched more than 50% of your Layer 1 ad videos. This audience does not exist yet -- you create it now and it will populate automatically as Layer 1 runs.

1. Go to **Meta Ads Manager** > **Audiences**
2. Click **Create Audience** > **Custom Audience**
3. Select source: **Video**
4. In the "Video Custom Audience" dialog:
   - **Engagement type:** Select **"People who watched at least 50% of your video"**
   - **Videos:** Click **"Choose videos"** > Select ALL videos from the **"Awareness_Reels_v1"** campaign ad sets
     - You can search by campaign name or scroll through your ad videos
     - Select every video creative used in Layer 1
   - **Retention:** **30 days**
5. Audience name: **"Video Viewers 50pct - Awareness Ads - 30d"**
6. Click **Create Audience**

> **This audience will start empty** and grow as Layer 1 runs. After 1 week of Layer 1 activity, it should have enough people for Layer 2 to target effectively.

### Campaign Level Settings

1. Go to **Meta Ads Manager** > Click **+ Create**
2. Choose campaign objective: **Engagement** (or **Traffic** if Engagement is not available)
3. Campaign name: **"Consideration_Retarget_v1"**
4. **Enable "Advantage Campaign Budget" (CBO)**
5. Set daily budget: **R$5/day** (this is 25% of R$20/day total)
   - If total daily is R$25/day, set this to R$6.25/day
6. Bidding strategy: **Lowest cost** (default)
7. **Schedule:** Set start date to **1 week after Layer 1 launch date**
   - Example: If Layer 1 launched on April 1, set Layer 2 start date to April 8
8. Click **Next**

### Ad Set 1: "VideoViewers_50pct"

1. Ad set name: **"VideoViewers_50pct"**
2. Audience: Select **"Video Viewers 50pct - Awareness Ads - 30d"** (created above)
3. Location: **Sao Paulo** (state)
4. Age: **25-55**
5. Gender: **All**
6. Placements: **Advantage+ placements**

### Ad Set 2: "InstaEngagers_Recent"

1. Ad set name: **"InstaEngagers_Recent"**
2. Audience: Select the existing **"Instagram Engagers - 180d"** Custom Audience (created in Phase 2)
3. Location: **Sao Paulo** (state)
4. Age: **25-55**
5. Gender: **All**
6. Placements: **Advantage+ placements**

### Ad Set 3: "WebVisitors_Recent"

1. Ad set name: **"WebVisitors_Recent"**
2. Audience: Select the existing **"Website Visitors - 180d"** Custom Audience (created in Phase 2)
3. Location: **Sao Paulo** (state)
4. Age: **25-55**
5. Gender: **All**
6. Placements: **Advantage+ placements**

### Creative for Layer 2: Property Details and Social Proof

Layer 2 creative should be DIFFERENT from Layer 1. Layer 1 used your top Reels (emotional, scroll-stopping). Layer 2 shows more detail to help people imagine actually staying at the property.

**Recommended creative formats:**

**Ad A (All ad sets): Carousel -- Property Highlights**
- Format: **Carousel** (multiple images)
- Card 1: Pool -- aerial or someone swimming (the #1 selling point)
- Card 2: Churrasqueira/BBQ area -- ideally with food being prepared
- Card 3: Nature view / garden / green space around the property
- Card 4: Bedrooms -- clean, well-lit, inviting
- Card 5: Sunset or exterior wide shot showing the full property
- Each card headline: Short descriptor ("Piscina privativa", "Churrasqueira completa", "Natureza exuberante", "Quartos aconchegantes", "Seu proximo fim de semana")
- CTA button on each card: "Send Message"

**Ad B (All ad sets): Testimonial/Detail Static Image**
- Format: **Single image**
- Use a high-quality property photo with a text overlay of a guest review
- Example overlay: "Lugar incrivel! Voltaremos com certeza." -- Avaliacao do Airbnb
- Include property specs in the description

**Ad copy for Layer 2 (Portuguese):**

- **Primary text:** "Piscina, churrasqueira, 4 quartos e natureza exuberante. Ate 15 hospedes. A partir de R$280/noite. Perfeito para familias e grupos de amigos. Fale conosco pelo WhatsApp para verificar disponibilidade."
- **Headline:** "Sitio Completo para Seu Grupo"
- **Description:** "A 1h de SP. Piscina, churrasqueira, natureza. Reserve pelo WhatsApp."
- **CTA button:** "Send Message"

### Verification

- [ ] Custom Audience "Video Viewers 50pct - Awareness Ads - 30d" created
- [ ] Campaign **"Consideration_Retarget_v1"** created with Engagement (or Traffic) objective
- [ ] **CBO** is toggled ON
- [ ] Daily budget set to **R$5/day** (or 25% of total)
- [ ] Campaign **start date is 1 week after Layer 1 launch**
- [ ] Ad Set 1 "VideoViewers_50pct" configured
- [ ] Ad Set 2 "InstaEngagers_Recent" configured with existing Custom Audience
- [ ] Ad Set 3 "WebVisitors_Recent" configured with existing Custom Audience
- [ ] Each ad set has 2 ads (Carousel + Testimonial/Detail)
- [ ] Creative is DIFFERENT from Layer 1 (more detailed, less awareness-oriented)
- [ ] Campaign shows "Active" or "Scheduled" status

---

## 7. Step 5 -- Restructure Phase 2 Campaign as Layer 3 (Conversion)

> **IMPORTANT: Do NOT create a new campaign.** Layer 3 is your existing "Messages_WhatsApp_v1" campaign from Phase 2, restructured with adjusted budget and audience targeting. Creating a new campaign would lose all the learnings and data Meta has accumulated.

### Why Restructure Instead of Recreate?

- Meta's algorithm has learned from your Phase 2 campaign data (which audiences respond, which creative works)
- A new campaign starts from zero -- "Learning Phase" again, wasting 2-4 days of budget
- The Messages_WhatsApp_v1 campaign already has the correct objective (Messages/WhatsApp)
- You just need to adjust the budget and audience mix to fit the funnel role

### Step 5a: Rename the Campaign

1. Go to **Meta Ads Manager** > **Campaigns** tab
2. Find **"Messages_WhatsApp_v1"**
3. Click on the campaign name to edit it
4. Rename to: **"Conversion_Messages_v1"**
5. Save

### Step 5b: Adjust the Budget

1. Click on **"Conversion_Messages_v1"** to open campaign settings
2. Under **Advantage Campaign Budget**, change the daily budget to **R$3/day** (15% of R$20/day total)
   - If total daily is R$25/day, set this to R$3.75/day
   - If total daily is R$27/day, set this to R$4.05/day
3. Save changes

> **WARNING: Budget Starvation Risk**
>
> R$3/day is BELOW Meta's recommended minimum of R$10/day for Messages campaigns. This means Meta's algorithm may struggle to optimize effectively. Watch for these signs:
>
> - **"Learning Limited"** status in Ads Manager for 5+ consecutive days
> - Fewer than **1 WhatsApp message per day** for 5 consecutive days
> - Zero delivery (no impressions) on some days
>
> **If you see these signs, take action:**
> 1. First try: Increase total budget to R$25/day and adjust Layer 3 to R$3.75/day
> 2. If still starved: Reallocate to a **50/25/25** split (take budget from Layer 1):
>    - Layer 1: R$10/day (50%)
>    - Layer 2: R$5/day (25%)
>    - Layer 3: R$5/day (25%)
> 3. If still not enough: Merge Layer 3 budget into Layer 2 and let Layer 2 use the "Send Message" CTA instead

### Step 5c: Pause the Cold Audience Ad Set

In Phase 2, your Messages campaign had 3 ad sets:
1. Retargeting - Website Visitors (warm)
2. Retargeting - Instagram Engagers (warm)
3. Local Interest - Sao Paulo (cold)

Layer 3's job is to convert WARM audiences, not to prospect cold ones. Cold prospecting is now handled by Layer 1.

1. In the campaign, go to the **Ad Sets** tab
2. Find **"Local Interest - Sao Paulo"** (Ad Set 3 from Phase 2)
3. **Pause** this ad set by clicking the toggle to OFF
4. Keep the two retargeting ad sets **active**

### Step 5d: (Optional) Add a Layer 2 Engagers Ad Set

To create a true funnel connection between Layer 2 and Layer 3, you can add a new ad set that targets people who engaged with Layer 2 ads.

1. In **"Conversion_Messages_v1"** campaign, click **+ Create** at the ad set level
2. Ad set name: **"Layer2_Engagers"**
3. Create a Custom Audience first:
   - Go to **Audiences** > **Create Audience** > **Custom Audience**
   - Source: **Facebook Page** or **Instagram Account**
   - Condition: **People who engaged with any post or ad** > select Layer 2 campaign posts
   - Retention: **30 days**
   - Name: **"Layer 2 Ad Engagers - 30d"**
4. Back in the ad set, select this new Custom Audience
5. Conversion location: **WhatsApp**
6. Placements: **Advantage+ placements**

### Step 5e: Update Layer 3 Ad Creative

Layer 3 creative should be the most direct and action-oriented. These people have seen your property in Layers 1 and 2. Now push for the booking conversation.

**Ad copy for Layer 3 (Portuguese):**

- **Primary text:** "Ja conhece o Sitio Girassol? Reserve seu fim de semana a partir de R$280. Piscina, churrasqueira e natureza a 1h de SP. Fale comigo agora pelo WhatsApp!"
- **Headline:** "Reserve Agora -- Vagas Limitadas"
- **Description:** "Sitio completo para ate 15 hospedes. Fale pelo WhatsApp."
- **CTA button:** "Send WhatsApp Message"

**Alternative ad copy for urgency:**

- **Primary text:** "Ultimas datas disponiveis em abril! Sitio com piscina a 1h de SP. A partir de R$280/noite para ate 15 hospedes. Quer reservar? Me chama no WhatsApp!"
- **Headline:** "Abril Quase Lotado -- Garanta Sua Data"
- **CTA button:** "Send WhatsApp Message"

### Step 5f: Set Launch Timing

Layer 3 should be active **2 weeks after Layer 1 launch** (and 1 week after Layer 2). If the campaign is currently active from Phase 2, you can keep it running -- just implement the budget and audience changes described above when you launch Layer 2.

**Timing options:**

- **Option A (Campaign already active):** Make the changes (rename, budget, pause cold ad set) when Layer 2 launches. This keeps some conversion activity running continuously.
- **Option B (Campaign currently paused):** Unpause the campaign 2 weeks after Layer 1 launches, with all changes already applied.

### Verification

- [ ] Campaign renamed from "Messages_WhatsApp_v1" to **"Conversion_Messages_v1"**
- [ ] Daily budget adjusted to **R$3/day** (or 15% of total)
- [ ] CBO remains **ON**
- [ ] "Local Interest - Sao Paulo" cold ad set is **paused**
- [ ] Retargeting ad sets (Website Visitors + Instagram Engagers) remain **active**
- [ ] (Optional) "Layer2_Engagers" ad set added
- [ ] Ad creative updated with direct WhatsApp CTA and urgency messaging
- [ ] Campaign status: "Active" or "Scheduled" (depending on timing option chosen)

---

## 8. Step 6 -- Staggered Launch Timeline

**Do NOT launch all 3 layers at the same time.** The funnel must be staggered because each layer feeds the next.

### Visual Timeline

```
WEEK 1                        WEEK 2                        WEEK 3
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ Launch Layer 1 ONLY │  │ Launch Layer 2       │  │ Restructure Layer 3 │
│                     │  │ + Layer 1 continues  │  │ + All 3 layers      │
│ Awareness_Reels_v1  │  │ Consider_Retarget_v1 │  │ Conversion_Msgs_v1  │
│ Budget: R$12/day    │  │ Budget: R$5/day      │  │ Budget: R$3/day     │
│                     │  │                      │  │                     │
│ Total: R$12/day     │  │ Total: R$17/day      │  │ Total: R$20/day     │
│ Monthly: ~R$360     │  │ Monthly: ~R$510      │  │ Monthly: ~R$600     │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

### Why Stagger?

| Week | What Happens | Why |
|------|-------------|-----|
| Week 1 | Layer 1 only (R$12/day) | Layer 1 needs to accumulate video viewers and engagers. After 1 week, the "Video Viewers 50pct" Custom Audience will have enough people for Layer 2 to target. |
| Week 2 | Add Layer 2 (R$12 + R$5 = R$17/day) | Layer 2 retargets the engaged audience from Week 1. These people already saw your Reels -- now show them property details and reviews. Meanwhile, Layer 1 keeps feeding new people into the pipeline. |
| Week 3 | Add Layer 3 (R$12 + R$5 + R$3 = R$20/day) | Layer 3 converts the warmed-up audience. By now, people have seen your property in Layers 1 and 2. A direct WhatsApp CTA converts the most interested ones into booking conversations. |

### Implementation Checklist

- [ ] **Day 1:** Launch Layer 1 (Awareness_Reels_v1) at R$12/day
- [ ] **Day 1:** Create "Video Viewers 50pct - Awareness Ads - 30d" Custom Audience (it will populate as Layer 1 runs)
- [ ] **Day 7-8:** Launch Layer 2 (Consideration_Retarget_v1) at R$5/day
- [ ] **Day 7-8:** Review Layer 1 metrics (is it generating reach and video views?)
- [ ] **Day 14-15:** Restructure/Activate Layer 3 (Conversion_Messages_v1) at R$3/day
- [ ] **Day 14-15:** Pause cold ad set in Layer 3
- [ ] **Day 14-15:** Full funnel operational at R$20/day total

### Budget Ramp-Up Summary

| Period | Active Layers | Daily Spend | Cumulative Spend (4 weeks) |
|--------|--------------|-------------|---------------------------|
| Week 1 | Layer 1 only | R$12/day | R$84 |
| Week 2 | Layer 1 + 2 | R$17/day | R$84 + R$119 = R$203 |
| Week 3 | All 3 layers | R$20/day | R$203 + R$140 = R$343 |
| Week 4 | All 3 layers | R$20/day | R$343 + R$140 = R$483 |

First month total: approximately R$483 (under the R$500-800/month budget).

---

## 9. Step 7 -- Weekly Performance Review

Review your funnel performance every week on the SAME day. This is not optional -- ad campaigns that are "set and forget" waste money. The funnel requires active management.

### Weekly KPI Review Table

Copy this table and fill it out every week:

| Metric | Layer 1 (Awareness) | Layer 2 (Consideration) | Layer 3 (Conversion) |
|--------|--------------------|-----------------------|---------------------|
| **Spend this week** | R$ _____ | R$ _____ | R$ _____ |
| **CPM** (Cost per 1,000 impressions) | Target: < R$30 | -- | -- |
| **Reach** (unique people) | Growing WoW? Y/N | -- | -- |
| **Video views >50%** | _____ (feeds Layer 2) | -- | -- |
| **CPC** (Cost per click) | -- | Target: < R$1.00 | -- |
| **Engagement rate** | -- | Target: > 2% | -- |
| **Website clicks** | -- | _____ | -- |
| **CPL** (Cost per message) | -- | -- | Target: < R$5.00 |
| **Messages received** | -- | -- | _____ |
| **Bookings attributed** | -- | -- | _____ |

### Where to Find Each Metric

1. Go to **Ads Manager** > Select the campaign you want to review
2. Click **"Columns: Performance"** dropdown > Select **"Customize columns"**
3. Add these columns:
   - CPM (Cost per 1,000 impressions)
   - Reach
   - ThruPlay (for video views)
   - CPC (Cost per link click)
   - CTR (Click-through rate)
   - Messaging conversations started
   - Cost per messaging conversation started
4. Set the date range to **"Last 7 days"** for weekly review

### Decision Framework: When to Adjust

**When to shift budgets:**

| Signal | Action |
|--------|--------|
| Layer 1 CPM > R$30 consistently | Refresh creative (new Reels) or narrow audience |
| Layer 2 CPC > R$1.00 consistently | Test new carousel/creative; check if audience is too small |
| Layer 3 CPL > R$5.00 consistently | Check if warm audiences are large enough; consider 50/25/25 budget split |
| Layer 3 "Learning Limited" for 5+ days | Increase Layer 3 budget (take from Layer 1) to 50/25/25 split |
| One layer dramatically outperforming others | Gradually shift 5-10% budget toward the outperformer |

**When to refresh creative:**

| Signal | Action |
|--------|--------|
| Frequency > 3.0 on any ad set | Same people seeing your ad 3+ times. Swap creative. |
| CTR drops below 0.5% after 1 week | Creative is no longer stopping scrolls. Try new Reels/images. |
| 2-3 weeks since campaign launch | Proactively refresh even if metrics are stable -- creative fatigue is inevitable. |

**When to pause an ad set:**

| Signal | Action |
|--------|--------|
| CTR < 0.5% after 1 full week | Pause ad set, create replacement with different targeting or creative |
| CPL > 2x your target for 1 week | Pause ad set, let CBO redirect budget to better performers |
| Zero conversions after 2 weeks | Pause ad set -- audience may be too small or creative is wrong |

### Anti-Pattern Warning

**Do NOT set and forget.** The 60/25/15 budget split is a STARTING POINT. After 2-4 weeks of data:
- If Layer 1 is generating lots of video viewers but Layer 3 is starved, shift to 50/25/25
- If Layer 2 is outperforming Layer 1 on engagement, the funnel is working -- maintain or increase total budget
- If Layer 3 is getting great CPL but Layer 1 reach is flat, maintain the 60/25/15 split (the pipeline needs feeding)

Review EVERY week. Adjust EVERY 2 weeks. Refresh creative EVERY 2-3 weeks.

---

## 10. Troubleshooting

### Problem 1: Ads Rejected -- "Housing Special Ad Category"

**Symptoms:** Ad rejected with a message about "housing policy" or "special ad category." Targeting options become restricted (no age, no gender, forced location radius).

**Cause:** Meta's automated system flagged your vacation rental ad as a housing ad.

**Fix:**
1. **Appeal immediately:**
   - In Ads Manager, find the rejected ad
   - Click "Request Review" or "Appeal"
   - Write: "This ad promotes a short-term vacation rental (stays under 30 days), which is a tourism/hospitality service, not residential housing. The property is listed on Airbnb as a vacation rental: https://www.airbnb.com/rooms/1345960842338220775"
2. **Prevent future flags:**
   - Remove words like "alugar" (rent), "moradia" (housing), "residencia" from all ad copy
   - Use "reservar" (book), "visitar" (visit), "hospedagem" (stay), "ferias" (vacation) instead
   - Frame ads as tourism experiences, not real estate
3. **If appeal is denied:**
   - Accept the Housing category restrictions for that specific campaign
   - Targeting will be limited but ads can still run
   - Create a NEW campaign without the housing flag using careful language
   - Note: Housing category restrictions remove age/gender targeting and force broader location -- your ads will still reach people, just with less precision

### Problem 2: Lookalike Audiences Are Too Small or "Too Small to Use"

**Symptoms:** Lookalike audience shows "Audience too small" or "< 1,000" in the Audiences tab.

**Cause:** Your source audience (Website Visitors or Instagram Engagers) does not have enough people yet.

**Fix:**
1. Check the source audience size (Step 1 of this guide)
2. If source < 1,000, do NOT use lookalikes yet -- use the "Interest_SP" ad set only
3. To grow your source audiences faster:
   - Post more Reels on Instagram (grows Instagram Engagers)
   - Share your website link in Instagram Stories and bio (grows Website Visitors)
   - Keep Layer 1 running -- it drives profile visits which feed the Instagram Engagers audience
4. Check back in 2-4 weeks -- source audiences should grow as your marketing runs

### Problem 3: Layer 3 Getting Zero Messages / "Learning Limited"

**Symptoms:** Conversion_Messages_v1 shows "Learning Limited" status, zero or near-zero WhatsApp messages received for multiple days.

**Cause:** R$3/day budget is below Meta's R$10/day minimum recommendation for Messages optimization.

**Fix (escalating steps):**
1. **Wait 5 days** -- sometimes the algorithm needs time, especially with small budgets
2. **Increase total budget to R$25/day** -- gives Layer 3 R$3.75/day (still tight but marginally better)
3. **Shift to 50/25/25 allocation:**
   - Layer 1: R$10/day (50%)
   - Layer 2: R$5/day (25%)
   - Layer 3: R$5/day (25%)
   - This gives Layer 3 enough to optimize while still feeding the top of funnel
4. **If still not working:** Merge Layer 3's audience into Layer 2 and add "Send Message" CTA to Layer 2 ads. Effectively running a 2-layer funnel (Awareness + Conversion) until total budget is high enough for 3 layers.

### Problem 4: Lookalike Audience Showing Much Larger Reach Than Expected

**Symptoms:** Your 1-3% lookalike audience was estimated at 2M people, but your campaign is reaching 5M+ people.

**Cause:** Meta's lookalike auto-expansion feature (active since late 2024) is expanding your audience beyond the 1-3% you specified to find better performance.

**Fix:**
1. **This is expected behavior** -- not a bug. Meta is trying to find the best results.
2. Monitor **CPM and engagement rate**:
   - If CPM stays under R$30 and engagement is healthy --> let Meta expand. It is finding good people.
   - If CPM spikes above R$30 and engagement drops --> your creative is not resonating with the expanded audience. Refresh your creative with new Reels.
3. If you want tighter control, test adding an **Advantage+ Audience** ad set alongside the lookalike as a comparison. Advantage+ uses Meta's AI to find the right audience without specifying a seed.

### Problem 5: Ads Not Delivering (Zero Impressions)

**Symptoms:** Campaign is "Active" but an ad set shows zero impressions after 24 hours.

**Cause:** Usually an audience or budget issue.

**Fix:**
1. Check audience size -- is it > 1,000 people?
2. Check budget -- is the ad set's minimum budget met? (generally R$1/day minimum per ad set)
3. Check if the ad was rejected -- look for error icons next to the ad
4. Check if scheduling is set incorrectly (wrong start date, wrong time zone)
5. If CBO is enabled, Meta may be allocating all budget to other ad sets. Check which ad sets are getting the spend -- if one ad set gets zero, its audience or creative may be weaker.

---

## 11. Seasonal Considerations

The funnel must adapt to seasonal demand patterns. Sitio Girassol's demand follows clear patterns:

### April (Shoulder Season) -- CURRENT PRIORITY

- **Easter weekend (April 17-21):** Premium pricing opportunity. Update Layer 3 ad copy to push Easter availability:
  - "Pascoa no Sitio Girassol! Piscina, churrasqueira e natureza para toda a familia. Ultimas vagas -- reserve agora pelo WhatsApp!"
- **Tiradentes holiday (April 21):** Extended weekend, another booking opportunity
- **Ad focus:** Urgency messaging ("ultimas datas", "quase lotado") + holiday-specific hooks
- **Budget:** Maintain or increase to R$25/day during April to maximize shoulder season bookings

### May-September (Low Season) -- Shift Messaging

- **Ad copy pivot:** Change from "escape the heat" to "escape the cold" / winter getaway messaging
  - Layer 1: "Fuja do frio da cidade! Sitio com lareira, churrasqueira e natureza a 1h de SP."
  - Layer 2: Focus on cozy indoor amenities, hot meals, stargazing, bonfire (if applicable)
  - Layer 3: Price-sensitive messaging -- "A partir de R$280/noite" + weekend deals
- **Content pivot:** Photograph/film winter-appropriate content (cozy interiors, warm lighting, hot chocolate, BBQ in cool weather)
- **Budget:** Consider reducing to R$17/day (R$500/month) if bookings slow significantly. Do NOT stop running ads entirely -- maintaining awareness during low season means you are ahead when high season returns.
- **Labor Day (May 1-2):** Target this holiday weekend specifically in Layer 3

### October-March (High Season) -- Scale Up

- **When demand returns (October+):**
  - Increase total budget to R$25-27/day
  - Layer 1 creative: golden-hour pool shots, summer Reels, outdoor lifestyle content
  - Layer 3: Can reduce urgency language -- demand is natural
- **Christmas/New Year (Dec-Jan):** Premium pricing, book 2-3 months in advance
  - Start running "Reserve seu Natal/Reveillon" ads by October

### Creative Refresh Calendar

| Month | Layer 1 Creative Theme | Layer 2 Detail Focus | Layer 3 Urgency Hook |
|-------|----------------------|---------------------|--------------------|
| April | Easter Reels, autumn nature | Easter availability, property details | "Ultimas vagas Pascoa!" |
| May-Jun | Winter getaway, cozy vibes | Indoor amenities, food/BBQ | "Fuja do frio -- reserve!" |
| Jul-Aug | Mid-winter escape, stargazing | Competitive pricing, group discounts | "A partir de R$280 -- inverno especial" |
| Sep-Oct | Spring awakening, pool prep | Pool season approaching, green nature | "Piscina em breve -- reserve com antecedencia!" |
| Nov-Dec | Summer heat, pool lifestyle | Holiday availability, premium experience | "Reserve Natal/Reveillon agora!" |
| Jan-Mar | Peak summer, full experience | Reviews from holiday guests | "Ultimas datas verao!" |

---

## 12. Quick Reference Card

| Item | Value |
|------|-------|
| **Layer 1 Campaign** | Awareness_Reels_v1 |
| **Layer 1 Objective** | Awareness / Reach |
| **Layer 1 Budget** | 60% of total (R$12/day at R$20/day) |
| **Layer 1 Ad Sets** | LAL_WebVisitors, LAL_InstaEngagers, Interest_SP |
| **Layer 2 Campaign** | Consideration_Retarget_v1 |
| **Layer 2 Objective** | Engagement / Traffic |
| **Layer 2 Budget** | 25% of total (R$5/day at R$20/day) |
| **Layer 2 Ad Sets** | VideoViewers_50pct, InstaEngagers_Recent, WebVisitors_Recent |
| **Layer 3 Campaign** | Conversion_Messages_v1 (restructured from Messages_WhatsApp_v1) |
| **Layer 3 Objective** | Engagement > Messages |
| **Layer 3 Budget** | 15% of total (R$3/day at R$20/day) |
| **Layer 3 Ad Sets** | Existing retargeting ad sets + optional Layer2_Engagers |
| **Total Daily Budget** | R$20/day starting (R$600/month) |
| **Stagger** | Week 1: L1 only, Week 2: +L2, Week 3: +L3 |
| **Lookalike Audiences** | "Lookalike - Website Visitors 1-3% Brazil", "Lookalike - Instagram Engagers 1-3% Brazil" |
| **Source Threshold** | 1,000+ users before creating lookalikes |
| **Housing Category** | DO NOT SELECT -- frame as tourism |
| **Weekly Review** | Same day every week -- fill KPI table |
| **Creative Refresh** | Every 2-3 weeks or when frequency > 3 |
| **Budget Starvation Fix** | Shift to 50/25/25 if Layer 3 shows "Learning Limited" |
| **Attribution** | Manual: "Como voce nos encontrou?" |

---

## 13. Full Implementation Checklist

Complete these in order. Check off each item as you finish:

### Phase A: Preparation (Before Week 1)
- [ ] Verified all Phase 2 prerequisites exist (Section 2)
- [ ] Checked source audience sizes (Step 1)
- [ ] Created lookalike audiences if source >= 1,000 (Step 2)
- [ ] Waited 24-48 hours for lookalike audiences to populate

### Phase B: Week 1 -- Layer 1 Launch
- [ ] Created "Awareness_Reels_v1" campaign (Step 3)
- [ ] CBO enabled, R$12/day budget set
- [ ] Housing Special Ad Category NOT selected
- [ ] 3 ad sets configured (LAL_WebVisitors, LAL_InstaEngagers, Interest_SP)
- [ ] 2 ads per ad set using top-performing Instagram Reels
- [ ] Campaign published and showing "Active" status
- [ ] Created "Video Viewers 50pct - Awareness Ads - 30d" Custom Audience (for Layer 2)

### Phase C: Week 2 -- Layer 2 Launch
- [ ] Reviewed Layer 1 Week 1 metrics (CPM, reach, video views)
- [ ] Created "Consideration_Retarget_v1" campaign (Step 4)
- [ ] CBO enabled, R$5/day budget set
- [ ] 3 ad sets configured (VideoViewers_50pct, InstaEngagers_Recent, WebVisitors_Recent)
- [ ] 2 ads per ad set (Carousel + Testimonial)
- [ ] Campaign published and showing "Active" status

### Phase D: Week 3 -- Layer 3 Restructure
- [ ] Renamed "Messages_WhatsApp_v1" to "Conversion_Messages_v1" (Step 5)
- [ ] Budget adjusted to R$3/day
- [ ] Cold ad set ("Local Interest - Sao Paulo") paused
- [ ] Retargeting ad sets remain active
- [ ] (Optional) "Layer2_Engagers" ad set added
- [ ] Ad creative updated with direct WhatsApp CTA and urgency messaging
- [ ] Full funnel operational: R$12 + R$5 + R$3 = R$20/day

### Phase E: Ongoing (Every Week)
- [ ] Weekly KPI review completed (Step 7 table)
- [ ] Budget adjustments made if needed
- [ ] Creative refreshed if frequency > 3 or CTR < 0.5%
- [ ] Manual attribution tracking updated ("Como voce nos encontrou?")
- [ ] Seasonal ad copy updated as needed (Section 11)

---

*Guide created for Sitio Girassol -- Phase 3: Growth Engine*
*Requirements: ADS-03 (3-layer funnel), ADS-05 (lookalike audiences)*
*References: D-01 through D-11 from 03-CONTEXT.md*
*Builds on: Phase 2 Facebook Ads Restructuring Guide (Messages_WhatsApp_v1, Custom Audiences)*
