# PriceLabs Dynamic Pricing Setup Guide

**Date:** 2026-03-28
**Priority:** Set up after all platform listings are live (Airbnb, Booking.com, VRBO)
**Estimated time:** 15-20 minutes for initial setup, 5 minutes/week for review

---

## 1. What is PriceLabs and Why Use It

### The Problem with Manual Pricing

Currently, Sitio Girassol uses manual pricing set in Phase 1:
- **Weekday base:** R$280/night
- **Weekend rate:** R$380/night (35% premium)
- **Holiday pricing:** R$500-600/night (manually set per date)

This works, but manual pricing cannot react to:
- Competitor price changes in the Sao Roque / Sorocaba region
- Local events that drive demand (festivals, long weekends, school holidays)
- Seasonal demand shifts within a single month
- Last-minute availability gaps that could be filled at optimized rates

### What PriceLabs Does

PriceLabs is a dynamic pricing tool that adjusts your nightly rates automatically based on:
- **Market demand:** How many travelers are searching for your area on specific dates
- **Competitor pricing:** What similar properties in Sao Roque / Sorocaba charge per night
- **Local events:** Festivals, conferences, and holidays that drive demand spikes
- **Seasonality:** Historical booking patterns for your region
- **Day-of-week patterns:** Weekend vs weekday demand differences
- **Lead time:** How far in advance guests are booking (last-minute vs early planners)

### Cost and ROI

| Item | Amount |
|------|--------|
| Free trial | 30-day free trial, no credit card required |
| Monthly cost (after trial) | $19.99 per listing per month (~R$100/month at current exchange rate) |
| Break-even | If PriceLabs increases ADR by R$10/night on 10 booked nights = R$100/month (covers the cost) |
| Realistic upside | R$20-50/night ADR increase on high-demand dates = R$200-500/month net gain |

**ROI justification:** Even a modest R$20/night average increase on 10 booked nights per month generates R$200/month in additional revenue -- double the ~R$100/month tool cost. PriceLabs pays for itself if it identifies even ONE high-demand period you would have underpriced manually.

---

## 2. Registration and Airbnb Integration

### Step-by-Step Account Creation

1. Go to [pricelabs.co](https://www.pricelabs.co/)
2. Click **"Start Free Trial"** (top right corner)
3. The trial is 30 days and does NOT require a credit card
4. Create your account:
   - Enter your email address
   - Choose a password
   - Complete any verification steps
5. You will be taken to your PriceLabs dashboard

### Connecting Your Airbnb Listing

1. In the PriceLabs dashboard, click **"+Add/Reconnect Listings"** (or **"Connect your listings"**)
2. From the dropdown menu, select **"Airbnb"**
3. You will be redirected to Airbnb's authorization page
4. Log in to Airbnb if prompted
5. Click **"Allow"** or **"Authorize"** to grant PriceLabs access to your listing
6. You will be redirected back to PriceLabs
7. Your **Sitio Girassol** listing should appear automatically in the dashboard
8. Click on the listing to open its pricing configuration

**Note:** PriceLabs connects via Airbnb's official OAuth API. It can read your calendar and update your pricing, but it cannot modify your listing description, photos, or other settings. You can revoke access at any time from Airbnb Settings > Security > Connected Apps.

---

## 3. Pricing Configuration

Configure these settings for Sitio Girassol in PriceLabs. These values match the Phase 1 pricing strategy while allowing PriceLabs to optimize within safe bounds.

### Core Pricing Settings

| Setting | Value | Why |
|---------|-------|-----|
| Minimum price (floor) | R$280/night | Matches Phase 1 ADR floor -- PriceLabs will NEVER suggest a price below this (per D-28) |
| Maximum price (ceiling) | R$700/night | Caps near holiday pricing maximum from Phase 1 (Easter was R$600, this allows slight upside) |
| Base price | R$280/night | Starting point for PriceLabs dynamic adjustments |
| Weekend adjustment | +35% | Targets approximately R$378/night (close to the R$380 weekend target from Phase 1) |
| Cleaning fee | R$180 | Fixed fee, not dynamically adjusted by PriceLabs |
| Minimum stay | 2 nights | Per LISTING-03 minimum stay policy |

### How to Set Each Value

1. Click on your listing in the PriceLabs dashboard
2. Go to **"Pricing Settings"** or **"Customization"**
3. Find **"Minimum Price"** and enter **280**
4. Find **"Maximum Price"** and enter **700**
5. Find **"Base Price"** and enter **280**
6. Find **"Weekend Pricing"** or **"Day-of-week adjustments"**:
   - Set Friday adjustment: **+35%**
   - Set Saturday adjustment: **+35%**
7. Enter the cleaning fee of **R$180** if PriceLabs has a field for it (some plans sync this from Airbnb)
8. Verify minimum stay is set to **2 nights**
9. Click **Save**

### Additional Settings to Configure

**Last-minute discounts:**
- Enable "Last minute discounts" ONLY if occupancy is below 50% for the next 7 days
- Set the last-minute discount maximum to 10% (so the floor remains R$252, still above R$280 x 0.9 = R$252)
- **Better approach:** Disable last-minute discounts entirely for now. The R$280 floor is already competitive.

**Automatic discounts protection:**
- Disable any automatic discount feature that would push the effective nightly rate below the R$280 floor
- Check for "Orphan day pricing" -- this can be useful (it helps fill single-night gaps between bookings) but ensure it respects your R$280 minimum

**Orphan day pricing:**
- Enable this feature if available
- It automatically adjusts pricing for isolated available nights between two bookings
- Ensures those gap nights are priced attractively enough to fill without going below your floor

---

## 4. Understanding PriceLabs Suggestions

PriceLabs will show you a calendar view with a suggested price for each night. Here is how to read it:

### Color Coding

- **Green** = PriceLabs suggests a price HIGHER than your base (high demand detected)
- **Red** = PriceLabs suggests a price LOWER than your base (low demand, but will NOT go below your R$280 floor)
- **Yellow/Neutral** = Price is near your base rate

### Manual Review Mode (First 2 Weeks)

**IMPORTANT: Do NOT enable auto-sync immediately.** For the first 2 weeks, use PriceLabs in manual review mode:

1. Each day (or every few days), open PriceLabs and review the suggested prices
2. Compare PriceLabs suggestions against your current Airbnb prices
3. Look for patterns:
   - Which dates does PriceLabs price significantly higher? (These are high-demand periods you may not have identified)
   - Which dates does PriceLabs price at the R$280 floor? (These are low-demand periods -- your current pricing is already optimal)
   - Are the weekend premiums reasonable? (Should be close to R$380)
4. If you agree with a suggestion, you can manually apply it on Airbnb
5. If a suggestion seems wrong, note it and monitor over time

**Why manual first:** You need to build trust in the tool before letting it change your prices automatically. After 2 weeks, you will have enough data to decide whether auto-sync is safe.

### What NOT to Do

- Do NOT enable "Sync prices" or "Auto-sync" during the first 2 weeks
- Do NOT override the R$280 minimum price
- Do NOT set a base price lower than R$280 "to see what happens"
- Do NOT ignore PriceLabs suggestions entirely -- the whole point is to learn from its market data

---

## 5. Market Data Features

PriceLabs provides valuable market intelligence beyond just pricing suggestions.

### Market Dashboard

1. In PriceLabs, navigate to **"Market Dashboard"** (or **"Neighborhood Data"**)
2. PriceLabs will show you:
   - **Average nightly rates** for comparable properties in the Sao Roque / Sorocaba region
   - **Occupancy rates** -- how full similar properties are
   - **Demand trends** -- upcoming dates with high or low demand
   - **Competitor count** -- how many similar properties are listed

### How to Use Market Data

**Compare PriceLabs suggestions against your Phase 1 pricing:**

| Date Type | Phase 1 Price | PriceLabs Suggests | Interpretation |
|-----------|---------------|-------------------|----------------|
| Weekday | R$280 | Higher | High demand -- could charge more |
| Weekday | R$280 | R$280 (floor) | Low demand -- your pricing is correct |
| Weekend | R$380 | Higher | Weekend demand is strong -- room to increase |
| Weekend | R$380 | R$280 (floor) | Unusual -- investigate (maybe a low-season weekend) |
| Holiday | R$500-600 | Higher | You may be underpricing holidays |
| Holiday | R$500-600 | Similar | Your holiday pricing is on target |

**Look for patterns over 2 weeks:**
- Which days/weeks does PriceLabs consistently price higher? Those are high-demand periods you should always premium-price.
- Are there specific event-driven spikes? Note these for future manual pricing even if you stop using PriceLabs.

---

## 6. 2-Week Evaluation (per D-29)

After using PriceLabs for 2 weeks (even in manual review mode), evaluate whether to continue with auto-sync or cancel the trial.

### Evaluation Date

Set a reminder in your calendar for **14 days after you create the PriceLabs account**. On that date, review the metrics below.

### Evaluation Criteria

| Metric | How to Check | Good Sign | Bad Sign |
|--------|-------------|-----------|----------|
| Suggested vs actual price | PriceLabs calendar view | Suggestions are in the R$280-500 range for regular dates, R$500-700 for holidays | Suggestions consistently at R$280 floor (tool adds no value) or above R$700 (unrealistic) |
| Market data quality | Market Dashboard > Competitor count | Shows 5+ competitors in the Sao Roque / Sorocaba area | Shows 0-2 competitors (limited data = unreliable suggestions) |
| Booking rate | Airbnb dashboard > Performance | Same or better booking rate than before PriceLabs | Significantly worse (unlikely in manual mode) |
| ADR trend | Compare recent bookings to Phase 1 pricing | ADR trending up from the R$280 base | ADR stuck at floor across all dates |
| Price variation | Review suggested prices across 30 days | Meaningful variation (R$280-500+ range) | All prices identical (tool is not adding intelligence) |

### Decision After 2 Weeks

**Continue with auto-sync ($19.99/month) IF:**
- Suggestions are reasonable (R$280-700 range)
- Market data shows 5+ competitors (reliable data)
- You can see clear high-demand periods where PriceLabs would charge more than your manual pricing
- The tool has identified at least 2-3 pricing opportunities you would have missed manually

**Cancel trial and continue with manual pricing IF:**
- Suggestions are erratic (wildly different from day to day without clear reason)
- Market data is thin (0-2 competitors in the area)
- All suggestions are at the R$280 floor (tool adds no value for your market)
- You find the interface confusing or time-consuming to review

**If you cancel:** No payment is taken. Simply stop using the tool. Continue with the Phase 1 manual pricing (R$280 weekday / R$380 weekend / R$500-600 holidays). You can always try again later if more competitors enter the market.

---

## 7. Connecting Additional Platforms (After Trial Period)

If you decide to continue with PriceLabs and have active listings on Booking.com and VRBO, PriceLabs can manage pricing across all platforms from a single dashboard.

### How to Connect Booking.com

1. In PriceLabs dashboard, click **"+Add/Reconnect Listings"**
2. Select **"Booking.com"** from the dropdown
3. Follow the authorization process
4. Your Booking.com listing should appear alongside your Airbnb listing
5. Apply the same pricing settings (R$280 floor, R$700 ceiling, +35% weekends)

### How to Connect VRBO

1. In PriceLabs dashboard, click **"+Add/Reconnect Listings"**
2. Select **"VRBO"** from the dropdown
3. Follow the authorization process
4. Apply the same pricing settings

**Important:** Connecting additional platforms is optional during the free trial. Start with Airbnb only for the 2-week evaluation, then add other platforms if you decide to continue.

---

## 8. Verification Checklist

Complete this checklist during setup:

### Account Setup
- [ ] PriceLabs account created at pricelabs.co (free trial, no credit card required)
- [ ] Airbnb listing connected via OAuth authorization
- [ ] Sitio Girassol listing appears in PriceLabs dashboard

### Pricing Configuration
- [ ] Minimum price (floor) set to R$280
- [ ] Maximum price (ceiling) set to R$700
- [ ] Base price set to R$280
- [ ] Weekend adjustment set to +35% (Friday and Saturday)
- [ ] Cleaning fee R$180 entered (or confirmed synced from Airbnb)
- [ ] Minimum stay confirmed at 2 nights

### Safety Settings
- [ ] Auto-sync is OFF (manual review mode for first 2 weeks)
- [ ] No automatic discounts that would push below R$280 floor
- [ ] Last-minute discounts disabled or capped above floor

### Review
- [ ] Calendar view reviewed -- suggested prices are within R$280-700 range
- [ ] Market Dashboard checked -- competitors visible in the area
- [ ] 2-week evaluation date set in calendar: [Date of setup + 14 days]

---

## Quick Reference

| Setting | Value |
|---------|-------|
| Floor price | R$280/night (NEVER lower) |
| Ceiling price | R$700/night |
| Weekend premium | +35% (targets ~R$378) |
| Cleaning fee | R$180 (fixed) |
| Minimum stay | 2 nights |
| Auto-sync | OFF for first 2 weeks |
| Monthly cost | $19.99/listing (~R$100/month) after 30-day free trial |
| Evaluation date | 14 days after setup |

---

*This guide corresponds to decisions D-28, D-29, and D-30 from Phase 2 Context.*
*Requirement covered: PRICE-07 (Start PriceLabs free trial for dynamic pricing with R$280 floor)*
*Pricing values reference: Phase 1 airbnb-pricing-guide.md (R$280 weekday / R$380 weekend / R$180 cleaning fee)*
