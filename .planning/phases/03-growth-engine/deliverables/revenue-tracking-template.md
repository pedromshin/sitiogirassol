# Revenue Tracking Template: Sitio Girassol

**Date:** March 2026
**Decisions:** D-22, D-23, D-24, D-25, D-26 from 03-CONTEXT.md
**Tool:** Google Sheets (free)
**Update frequency:** Weekly (10-15 minutes, same day as ad performance review)

---

## 1. Overview

This template provides a Google Sheets spreadsheet the owner fills weekly to track revenue progress toward the two primary targets:

- **April target:** R$4,000 total revenue
- **May target:** R$7,000 cumulative revenue (April + May combined)

The spreadsheet tracks revenue by platform, calculates ROI on ad spend, and shows cost per booking -- giving directional insight into which marketing channels generate returns.

**Time investment:** 15-20 minutes to create the spreadsheet initially. 10-15 minutes per week to update.

---

## 2. Google Sheets Setup

### Step-by-Step Creation

1. Open Google Sheets at [sheets.google.com](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"Sitio Girassol - Revenue Tracker 2026"**
4. Create 3 tabs at the bottom of the sheet:
   - Tab 1: **"Weekly Data"** (rename the default "Sheet1")
   - Tab 2: **"Monthly Summary"** (click the "+" icon to add)
   - Tab 3: **"Dashboard"** (click the "+" icon to add)

---

## 3. Tab 1: Weekly Data

This is where you log raw data every week. One row per platform per week.

### Column Layout

| Column | Header | Description | Format |
|--------|--------|-------------|--------|
| A | **Week** | Week identifier | Text (e.g., "Apr W1") |
| B | **Platform** | Booking source | Text (Airbnb / Booking.com / VRBO / TemporadaLivre / Direct-WhatsApp) |
| C | **Revenue (R$)** | Total received for that platform that week | Currency (R$) |
| D | **Nights Booked** | Number of nights booked (not number of bookings) | Number |
| E | **ADR (R$)** | Average Daily Rate | Formula (see below) |
| F | **Ad Spend (R$)** | Total Meta Ads spend for the week | Currency (R$) |
| G | **Leads Generated** | WhatsApp messages received from ads | Number |
| H | **Source** | "Como voce nos encontrou?" response | Text |

### Formulas

- **Column E (ADR):** In cell E2, enter: `=IF(D2>0, C2/D2, "-")`
  - This calculates Revenue / Nights. If nights = 0, it shows "-" instead of an error.
  - Copy this formula down for all rows.

### Sample Data (8 Example Rows)

Enter these headers in Row 1, then the sample data starting in Row 2:

| Week | Platform | Revenue (R$) | Nights Booked | ADR (R$) | Ad Spend (R$) | Leads Generated | Source |
|------|----------|-------------|---------------|----------|---------------|-----------------|--------|
| Apr W1 | Airbnb | 840 | 3 | 280 | 140 | 5 | Airbnb Search |
| Apr W1 | Direct-WhatsApp | 560 | 2 | 280 | - | - | Facebook Ad |
| Apr W2 | Airbnb | 1,120 | 4 | 280 | 140 | 7 | Airbnb Search |
| Apr W2 | Booking.com | 380 | 2 | 190 | - | - | Booking.com Search |
| Apr W3 | Airbnb | 560 | 2 | 280 | 140 | 4 | Instagram |
| Apr W3 | Direct-WhatsApp | 840 | 3 | 280 | - | - | Indicacao |
| Apr W4 | Airbnb | 280 | 1 | 280 | 140 | 6 | Airbnb Search |
| Apr W4 | TemporadaLivre | 400 | 2 | 200 | - | - | TemporadaLivre Search |

**Notes on sample data:**
- Ad Spend is recorded once per week (not per platform) -- put it on the Airbnb row or a separate "Ads" row
- "Leads Generated" counts WhatsApp messages received from ads that week
- Source is the answer to "Como voce nos encontrou?" from the guest
- ADR column auto-calculates from Revenue / Nights formula

---

## 4. Tab 2: Monthly Summary

This tab aggregates weekly data into monthly totals and tracks progress toward revenue targets.

### Column Layout

| Column | Header | Description |
|--------|--------|-------------|
| A | **Month** | Month name |
| B | **Total Revenue (R$)** | Sum of all platform revenue for the month |
| C | **Total Nights** | Sum of all nights booked for the month |
| D | **Average ADR (R$)** | Total Revenue / Total Nights |
| E | **Total Ad Spend (R$)** | Sum of all ad spend for the month |
| F | **Total Leads** | Sum of leads generated for the month |
| G | **Bookings from Ads** | Count of bookings attributed to ads (manual count) |
| H | **ROI** | Return on ad investment |
| I | **Cost per Booking (R$)** | Ad spend per booking from ads |
| J | **Cumulative Revenue (R$)** | Running total across all months |
| K | **Target (R$)** | Revenue target for this period |
| L | **Gap (R$)** | Difference between target and cumulative |

### Formulas (Exact Google Sheets Formulas)

Enter these in Row 2 (April row). Adjust cell references for subsequent months.

**Cell B2 (Total Revenue):**
```
=SUMPRODUCT(('Weekly Data'!A:A="Apr W1"+'Weekly Data'!A:A="Apr W2"+'Weekly Data'!A:A="Apr W3"+'Weekly Data'!A:A="Apr W4"+'Weekly Data'!A:A="Apr W5")*'Weekly Data'!C:C)
```
Alternative simpler formula:
```
=SUMIFS('Weekly Data'!C:C, 'Weekly Data'!A:A, "Apr*")
```

**Cell C2 (Total Nights):**
```
=SUMIFS('Weekly Data'!D:D, 'Weekly Data'!A:A, "Apr*")
```

**Cell D2 (Average ADR):**
```
=IF(C2>0, B2/C2, "-")
```

**Cell E2 (Total Ad Spend):**
```
=SUMIFS('Weekly Data'!F:F, 'Weekly Data'!A:A, "Apr*")
```

**Cell F2 (Total Leads):**
```
=SUMIFS('Weekly Data'!G:G, 'Weekly Data'!A:A, "Apr*")
```

**Cell G2 (Bookings from Ads):** Enter manually -- count the number of bookings where Source contains "Facebook Ad" or "Instagram" in the Weekly Data tab.

**Cell H2 (ROI):**
```
=IF(E2>0, (B2-E2)/E2, "-")
```
Format this cell as **Percentage**. This calculates (Revenue - Ad Spend) / Ad Spend.
- ROI of 100% = you made back double what you spent
- ROI of 500% = every R$1 spent generated R$6 in revenue
- ROI below 0% = you spent more than you earned (problem)

**Cell I2 (Cost per Booking):**
```
=IF(G2>0, E2/G2, "-")
```
This calculates Total Ad Spend / Bookings from Ads. Lower is better.

**Cell J2 (Cumulative Revenue):**
```
=SUM(B$2:B2)
```
Copy this down for each month -- it creates a running total.

**Cell K2 (Target):**
- April (Row 2): Enter `4000`
- May (Row 3): Enter `7000`
- June onward: Set targets as desired

**Cell L2 (Gap):**
```
=K2-J2
```
- **Conditional formatting:** Select column L, go to Format > Conditional Formatting:
  - Rule 1: If value <= 0, set background to **green** (target met or exceeded)
  - Rule 2: If value > 0, set background to **red** (still below target)

### Sample Monthly Summary

| Month | Revenue | Nights | ADR | Ad Spend | Leads | Bookings from Ads | ROI | Cost/Booking | Cumulative | Target | Gap |
|-------|---------|--------|-----|----------|-------|-------------------|-----|-------------|------------|--------|-----|
| April | 4,980 | 19 | 262 | 560 | 22 | 3 | 789% | R$187 | 4,980 | 4,000 | -980 |
| May | 3,200 | 12 | 267 | 600 | 18 | 2 | 433% | R$300 | 8,180 | 7,000 | -1,180 |

---

## 5. Tab 3: Dashboard

A simple visual summary for quick weekly checks.

### Dashboard Layout

**Row 1-2: Current Status (Large Font)**
- Cell A1: "RECEITA ACUMULADA" (Cumulative Revenue)
- Cell B1: `='Monthly Summary'!J2` (or latest cumulative cell) -- format in **24pt bold font**

**Row 4-5: April Progress**
- Cell A4: "META ABRIL: R$4,000"
- Cell B4: `='Monthly Summary'!J2` (April cumulative)
- Cell C4: `=B4/4000*100` (Progress percentage, format as "XX%")

**Row 7-8: May Progress**
- Cell A7: "META MAIO: R$7,000"
- Cell B7: `='Monthly Summary'!J3` (May cumulative -- update after May data entry)
- Cell C7: `=B7/7000*100` (Progress percentage)

**Row 10-11: Current Month ROI**
- Cell A10: "ROI DO MES"
- Cell B10: `='Monthly Summary'!H2` (current month ROI) -- format as percentage, **18pt font**

### Optional: Simple Bar Chart

If you are comfortable with Google Sheets charts:

1. Select the Week column (A) and Revenue column (C) from the Weekly Data tab
2. Go to **Insert > Chart**
3. Select **Bar chart** or **Column chart**
4. Title: "Receita Semanal por Plataforma"
5. This gives a visual of revenue by week, making trends easy to spot

---

## 6. How to Update Weekly

Complete this checklist every week on the same day (recommended: Friday or Sunday). Takes 10-15 minutes.

### Weekly Update Checklist

- [ ] **Airbnb:** Log into Airbnb host dashboard > Performance > Revenue. Record this week's revenue and nights booked in the Weekly Data tab.
- [ ] **Booking.com:** Log into Booking.com extranet > Analytics > Revenue. Record revenue and nights.
- [ ] **VRBO:** Log into VRBO owner dashboard > Reservations. Record revenue and nights.
- [ ] **TemporadaLivre:** Log into TemporadaLivre > Reservas. Record revenue and nights.
- [ ] **Direct-WhatsApp:** Check WhatsApp Business for any direct bookings processed this week. Record revenue and nights.
- [ ] **Meta Ads:** Open Meta Ads Manager > Billing. Record total ad spend for the week in the Ad Spend column.
- [ ] **Leads:** Count WhatsApp messages received from ads this week (check the WhatsApp conversation list).
- [ ] **Source:** For any NEW bookings this week, record the answer to "Como voce nos encontrou?" in the Source column.
- [ ] **Monthly Summary:** Check the Monthly Summary tab. Is cumulative revenue on track toward the target?
- [ ] **Gap Check:** If the Gap column shows more than R$1,000 below target pace, consider:
  - Increasing ad spend by R$5-10/day temporarily
  - Adjusting the funnel (push more budget to Layer 3 for direct conversions)
  - Offering a mid-week discount to fill empty nights
  - Sending follow-up messages to recent WhatsApp leads who did not book

---

## 7. Attribution Guidance

### The Core Problem

Meta Pixel CANNOT track conversions on Airbnb, Booking.com, VRBO, or TemporadaLivre. When a guest sees your ad and then books on Airbnb, Meta has no way to know the booking happened. This means automated ROI tracking is impossible.

### The Solution: Manual Attribution

**Always ask guests "Como voce nos encontrou?" during the first conversation.** This is the ONLY way to connect ad spend to bookings.

### How to Ask

- On Airbnb: Include in your first message after booking: "A proposito, como voce nos encontrou? Sempre bom saber!"
- On Booking.com: Same approach in the first message
- On WhatsApp (direct bookings): Ask during the booking conversation
- Record the answer in the Source column of the Weekly Data tab

### Common Responses and What They Mean

| Response | Record As | Attribution |
|----------|-----------|-------------|
| "Vi no Airbnb" / "Pesquisei no Airbnb" | Airbnb Search | Organic (not from ads) |
| "Vi no Instagram" / "Vi um video no Instagram" | Instagram | Could be organic or ad-driven |
| "Vi um anuncio no Facebook" / "Vi no Facebook" | Facebook Ad | Ad-driven (count toward Bookings from Ads) |
| "Amigo indicou" / "Parente recomendou" | Indicacao | Word-of-mouth (organic) |
| "Pesquisei no Google" | Google | Organic search |
| "Vi no Booking.com" | Booking.com Search | Platform organic |
| Other / unclear | Outro | Unknown |

### Accept Approximate Attribution

- The goal is **directional insight** -- are ads generating leads that become bookings? Yes or no?
- You will never have precise per-channel ROAS. That is OK.
- **Compare weeks with ad spend to weeks without** to see if there is a measurable lift in inquiries and bookings.
- If you are spending R$560/month on ads and seeing 2-3 bookings attributed to ads (R$1,500-2,500 revenue), ads are working.
- If you are spending R$560/month and seeing 0 bookings attributed to ads, adjust the funnel or pause spending.

---

## 8. Template Ready to Copy

### Weekly Data Tab -- Complete Headers

Copy these exact headers into Row 1 of the "Weekly Data" tab:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Week | Platform | Revenue (R$) | Nights Booked | ADR (R$) | Ad Spend (R$) | Leads Generated | Source |

### Monthly Summary Tab -- Complete Headers

Copy these exact headers into Row 1 of the "Monthly Summary" tab:

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Month | Total Revenue (R$) | Total Nights | Average ADR (R$) | Total Ad Spend (R$) | Total Leads | Bookings from Ads | ROI | Cost per Booking (R$) | Cumulative Revenue (R$) | Target (R$) | Gap (R$) |

### Monthly Summary Tab -- Pre-fill Rows

| Month | Target (R$) |
|-------|-------------|
| April | 4,000 |
| May | 7,000 |
| June | (set after May) |
| July | (set after June) |

### Formula Quick Reference

| Cell | Formula | Purpose |
|------|---------|---------|
| E2 (Weekly Data) | `=IF(D2>0, C2/D2, "-")` | ADR calculation |
| B2 (Monthly Summary) | `=SUMIFS('Weekly Data'!C:C, 'Weekly Data'!A:A, "Apr*")` | Monthly revenue total |
| C2 (Monthly Summary) | `=SUMIFS('Weekly Data'!D:D, 'Weekly Data'!A:A, "Apr*")` | Monthly nights total |
| D2 (Monthly Summary) | `=IF(C2>0, B2/C2, "-")` | Monthly ADR |
| E2 (Monthly Summary) | `=SUMIFS('Weekly Data'!F:F, 'Weekly Data'!A:A, "Apr*")` | Monthly ad spend total |
| F2 (Monthly Summary) | `=SUMIFS('Weekly Data'!G:G, 'Weekly Data'!A:A, "Apr*")` | Monthly leads total |
| H2 (Monthly Summary) | `=IF(E2>0, (B2-E2)/E2, "-")` | ROI = (Revenue - Ad Spend) / Ad Spend |
| I2 (Monthly Summary) | `=IF(G2>0, E2/G2, "-")` | Cost per Booking = Ad Spend / Bookings from Ads |
| J2 (Monthly Summary) | `=SUM(B$2:B2)` | Cumulative revenue (running total) |
| L2 (Monthly Summary) | `=K2-J2` | Gap to target (green if <= 0, red if > 0) |

---

*Revenue tracking template created for Sitio Girassol -- Phase 3: Growth Engine*
*Decisions: D-22, D-23, D-24, D-25, D-26 from 03-CONTEXT.md*
*Research reference: Pitfall 6 (Revenue Attribution Confusion) from 03-RESEARCH.md*
