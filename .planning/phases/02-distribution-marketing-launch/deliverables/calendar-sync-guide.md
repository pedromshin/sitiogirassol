# Calendar Sync & Double-Booking Prevention Guide

**Date:** 2026-03-28
**Priority:** CRITICAL -- Set up iCal sync as soon as each platform listing goes live
**Estimated time:** 20-30 minutes per platform pair + 10 minutes for notification setup

---

## 1. Overview -- Why Both iCal AND Manual Protocol Are Needed

iCal calendar sync is the standard method for keeping availability consistent across booking platforms. However, iCal sync has **significant delays** that create a window for double bookings:

- **Airbnb** refreshes imported iCal feeds every **3 hours**
- **VRBO** refreshes imported iCal feeds every **30 minutes**
- **Booking.com** refresh intervals vary (typically 1-3 hours)

**What this means in practice:** A guest books on Booking.com at 2:00 PM. That booking will NOT appear as blocked on Airbnb until up to 3 hours later (5:00 PM). During those 3 hours, another guest could book the same dates on Airbnb -- creating a double booking.

**Solution:** iCal sync handles 95% of calendar blocking automatically. The manual double-booking prevention protocol (Section 4) closes the remaining gap by requiring you to manually block dates on all other platforms within 1 hour of any booking.

### Sync Topology -- Hub-and-Spoke with Airbnb as Hub

```
                    ┌─────────────────────┐
                    │   Airbnb (Hub)       │
                    │   Primary Calendar   │
                    └──────┬──────────────┘
                           │
              ┌────────────┼────────────────┐
              │            │                │
    ┌─────────▼──┐  ┌──────▼─────┐  ┌──────▼──────────┐
    │ Booking.com│  │    VRBO    │  │ TemporadaLivre  │
    │  iCal sync │  │  iCal sync │  │ iCal or manual  │
    └────────────┘  └────────────┘  └─────────────────┘

All platforms sync bidirectionally with Airbnb.
Airbnb is the "hub" -- all bookings ultimately reflect there.
```

**Important:** Platforms do NOT sync directly with each other. If a guest books on VRBO, iCal updates Airbnb, and then Airbnb's iCal updates Booking.com. This chain means delays can compound (up to 6 hours in worst case: 30 min VRBO->Airbnb + 3 hours Airbnb->Booking.com).

---

## 2. Airbnb iCal Export URL

Your Airbnb iCal export URL is already configured in the website codebase. This is the URL you will import into all other platforms:

```
https://www.airbnb.com/calendar/ical/1345960842338220775.ics?t=5807f23cb26b48919e07c0f8e95c05a9
```

**Where to find this URL in Airbnb (if you need to re-copy it):**

1. Go to [Airbnb Host Dashboard](https://www.airbnb.com/hosting)
2. Click on your listing
3. Go to **Availability** (or **Calendar**)
4. Click **Link calendars** (or **Connect calendars**)
5. Click **Export calendar**
6. Copy the URL that appears

**Do NOT share this URL publicly.** It contains a token (`t=5807f23...`) that grants read access to your calendar. Only paste it into trusted booking platforms.

---

## 3. Platform-by-Platform iCal Setup

### 3a. Airbnb <-> Booking.com (Bidirectional Sync)

**Step 1: Export your Booking.com iCal URL**

1. Log in to [Booking.com Extranet](https://admin.booking.com/)
2. Go to **Calendar** (or **Rates & Availability**)
3. Click **Sync calendars** (or look for a calendar sync/connection option)
4. Click **Export Calendar**
5. Copy the iCal URL that Booking.com provides
6. Save this URL -- you will paste it into Airbnb

**Step 2: Import Booking.com iCal into Airbnb**

1. Go to [Airbnb Host Dashboard](https://www.airbnb.com/hosting) > your listing
2. Go to **Availability** > **Link calendars**
3. Click **Import calendar**
4. Paste the Booking.com iCal URL you copied in Step 1
5. Give it a name: "Booking.com"
6. Save

**Step 3: Import Airbnb iCal into Booking.com**

1. Go to Booking.com Extranet > **Calendar** > **Sync calendars**
2. Click **Import Calendar** (or **Add calendar**)
3. Paste the Airbnb iCal URL:
   ```
   https://www.airbnb.com/calendar/ical/1345960842338220775.ics?t=5807f23cb26b48919e07c0f8e95c05a9
   ```
4. Give it a name: "Airbnb"
5. Save

**Sync delay:** Up to 3 hours (limited by Airbnb's iCal refresh rate). Use the platform's default refresh interval -- do not try to set custom intervals.

---

### 3b. Airbnb <-> VRBO (Bidirectional Sync)

**Step 1: Export your VRBO iCal URL**

1. Log in to your VRBO owner dashboard
2. Go to **Calendar** (or **Calendar sync**)
3. Look for **Export calendar** or **Connect calendars**
4. Copy the iCal export URL that VRBO provides
5. Save this URL

**Step 2: Import VRBO iCal into Airbnb**

1. Go to [Airbnb Host Dashboard](https://www.airbnb.com/hosting) > your listing
2. Go to **Availability** > **Link calendars**
3. Click **Import calendar**
4. Paste the VRBO iCal URL you copied in Step 1
5. Give it a name: "VRBO"
6. Save

**Step 3: Import Airbnb iCal into VRBO**

1. Go to VRBO owner dashboard > **Calendar sync** (or **Connect calendars**)
2. Click **Import calendar** (or **Add external calendar**)
3. Paste the Airbnb iCal URL:
   ```
   https://www.airbnb.com/calendar/ical/1345960842338220775.ics?t=5807f23cb26b48919e07c0f8e95c05a9
   ```
4. Give it a name: "Airbnb"
5. Save

**Sync delay:** VRBO refreshes every 30 minutes (faster than Airbnb). However, the Airbnb side still takes up to 3 hours to refresh VRBO's feed.

---

### 3c. Airbnb <-> TemporadaLivre (Test iCal, Manual Fallback)

TemporadaLivre's iCal support is uncertain. Test during setup and fall back to manual blocking if needed.

**If TemporadaLivre supports iCal import:**

1. Log in to your TemporadaLivre dashboard
2. Look for **Calendar**, **Sync**, or **iCal** settings
3. If an **Import calendar** option exists, paste the Airbnb iCal URL:
   ```
   https://www.airbnb.com/calendar/ical/1345960842338220775.ics?t=5807f23cb26b48919e07c0f8e95c05a9
   ```
4. Save

**If TemporadaLivre supports iCal export:**

1. Find and copy the TemporadaLivre iCal export URL
2. Import it into Airbnb: **Availability** > **Link calendars** > **Import calendar**
3. Give it a name: "TemporadaLivre"
4. Save

**If TemporadaLivre does NOT support iCal:**

- Use **manual blocking only** (Section 4 below applies to all bookings)
- When a booking arrives on any platform, manually block the dates on TemporadaLivre's calendar
- When a booking arrives on TemporadaLivre, manually block the dates on Airbnb, Booking.com, and VRBO

**Note:** Even without iCal, TemporadaLivre's zero-commission subscription model (approximately R$699/year) makes manual calendar management worthwhile. A single extra booking from the platform pays for the annual subscription.

---

## 4. Double-Booking Prevention Protocol

This is a **step-by-step checklist** you follow every time a booking is confirmed on ANY platform. iCal sync alone cannot prevent double bookings due to the 30-minute to 3-hour sync delays described in Section 1.

### Step 1: Enable Push Notifications on ALL Platforms

Set this up ONCE, before you start receiving bookings on multiple platforms:

**Airbnb:**
1. Open the Airbnb app on your phone
2. Go to **Profile** > **Settings** (gear icon)
3. Tap **Notifications**
4. Enable **Booking confirmations** -- set to ON
5. Enable **Booking requests** -- set to ON
6. Set a distinctive notification sound so you can identify Airbnb bookings by sound

**Booking.com (Pulse app):**
1. Download the **Booking.com Pulse** app (this is the host management app)
2. Log in with your Booking.com Extranet credentials
3. Go to **Settings** > **Notifications**
4. Enable **All booking notifications** -- set to ON
5. Enable **New reservation alerts** -- set to ON
6. Set a different notification sound from Airbnb

**VRBO (VRBO Owner app):**
1. Download the **VRBO Owner** app
2. Log in with your VRBO host credentials
3. Go to **Settings** > **Notifications**
4. Enable **Booking notifications** -- set to ON
5. Enable **Booking requests** -- set to ON
6. Set a third distinctive notification sound

**TemporadaLivre:**
1. Check TemporadaLivre settings for email notifications
2. Enable all booking-related email notifications
3. Set up email push notifications on your phone for the email address used on TemporadaLivre
4. Since TemporadaLivre may not have a mobile app, email is the primary notification channel

**Why distinctive sounds matter:** When you hear a notification, you immediately know which platform received the booking, so you know which OTHER platforms to block.

### Step 2: When You Receive a Booking Notification -- Act Within 1 Hour

**Within 1 hour of receiving any booking confirmation**, open ALL OTHER platforms and manually block the booked dates:

**If the booking came from Airbnb:**
- Open Booking.com Extranet > Calendar > Select the booked dates > **Close room** (or **Block dates**)
- Open VRBO dashboard > Calendar > Select the booked dates > **Block**
- Open TemporadaLivre > Calendar > Select the booked dates > **Mark as unavailable**

**If the booking came from Booking.com:**
- Open Airbnb > Calendar > Select the booked dates > **Block**
- Open VRBO dashboard > Calendar > Select the booked dates > **Block**
- Open TemporadaLivre > Calendar > Select the booked dates > **Mark as unavailable**

**If the booking came from VRBO:**
- Open Airbnb > Calendar > Select the booked dates > **Block**
- Open Booking.com Extranet > Calendar > Select the booked dates > **Close room**
- Open TemporadaLivre > Calendar > Select the booked dates > **Mark as unavailable**

**If the booking came from TemporadaLivre:**
- Open Airbnb > Calendar > Select the booked dates > **Block**
- Open Booking.com Extranet > Calendar > Select the booked dates > **Close room**
- Open VRBO dashboard > Calendar > Select the booked dates > **Block**

**Why 1 hour?** The fastest iCal sync (VRBO) takes 30 minutes. By blocking within 1 hour, you close the window before iCal even has a chance to sync -- ensuring zero double bookings.

### Step 3: Handle Simultaneous / Overlapping Bookings

If two bookings arrive for **overlapping dates** on different platforms (this is rare but possible during the sync delay window):

**Rule: First confirmed booking wins.**

1. Check the confirmation timestamps on both platforms
2. The booking with the **earlier confirmation time** is honored
3. Contact the guest with the **later booking** immediately

**Template message for the guest who must be declined (in Portuguese):**

```
Ola [NOME]! Infelizmente houve um conflito de datas e esta reserva
nao podera ser confirmada. Pedimos sinceras desculpas pelo
inconveniente. Gostaríamos de oferecer [DATAS_ALTERNATIVAS] como
opcao alternativa. Pode nos dizer se funciona para voce?
```

**Template message (in English):**

```
Hi [NAME]! Unfortunately there was a date conflict and this
reservation cannot be confirmed. We sincerely apologize for the
inconvenience. We would like to offer [ALTERNATIVE_DATES] as an
alternative option. Would that work for you?
```

**Steps after declining:**
1. Apologize sincerely -- this is not the guest's fault
2. Offer the nearest available weekend or dates
3. Suggest they rebook for those alternative dates
4. If the guest is upset, offer a small discount (5-10%) on the alternative dates as a goodwill gesture
5. Process any refund required by the platform's policies

**Prevention tip:** The more consistently you follow the 1-hour blocking protocol in Step 2, the less likely simultaneous bookings become. After the first few weeks of multi-platform operation, this scenario becomes extremely rare.

---

## 5. Sync Timing Reference Table

| Platform Pair | Export From | Import Into | Max Sync Delay | Manual Block Deadline |
|--------------|------------|-------------|----------------|----------------------|
| Airbnb -> Booking.com | Airbnb iCal URL | Booking.com Extranet | Up to 3 hours | Within 1 hour |
| Booking.com -> Airbnb | Booking.com iCal URL | Airbnb Link Calendars | Up to 3 hours | Within 1 hour |
| Airbnb -> VRBO | Airbnb iCal URL | VRBO Calendar Sync | Up to 30 min | Within 1 hour |
| VRBO -> Airbnb | VRBO iCal URL | Airbnb Link Calendars | Up to 3 hours | Within 1 hour |
| Airbnb -> TemporadaLivre | Airbnb iCal URL | TBD (test during setup) | TBD | Within 1 hour |
| TemporadaLivre -> Airbnb | TBD (test during setup) | Airbnb Link Calendars | TBD | Within 1 hour |

**Key insight:** The "Manual Block Deadline" of 1 hour is always shorter than the maximum sync delay. This is intentional -- manual blocking acts as a safety net that closes the gap before iCal sync even kicks in.

---

## 6. Weekly Calendar Audit (Recommended)

Once a week (suggested: Sunday evening), do a quick audit across all platforms:

1. Open Airbnb calendar and note all blocked/booked dates for the next 4 weeks
2. Open Booking.com calendar and verify the same dates are blocked
3. Open VRBO calendar and verify the same dates are blocked
4. Open TemporadaLivre calendar and verify the same dates are blocked
5. If any discrepancy is found, manually correct it immediately

This takes 5-10 minutes and catches any iCal sync failures or missed manual blocks.

---

## 7. Verification Checklist

Complete this checklist after setting up iCal sync for each platform:

### iCal Setup
- [ ] Airbnb iCal URL copied (from Section 2 above or from Airbnb dashboard)
- [ ] Booking.com iCal URL exported and imported into Airbnb
- [ ] Airbnb iCal URL imported into Booking.com
- [ ] VRBO iCal URL exported and imported into Airbnb
- [ ] Airbnb iCal URL imported into VRBO
- [ ] TemporadaLivre iCal tested (result: works / manual only)

### Notifications
- [ ] Airbnb app: booking confirmation push notifications enabled
- [ ] Booking.com Pulse app: all booking notifications enabled
- [ ] VRBO Owner app: booking notifications enabled
- [ ] TemporadaLivre: email notifications enabled

### Protocol
- [ ] Double-booking prevention protocol read and understood
- [ ] Simultaneous booking resolution procedure understood
- [ ] Decline message template saved in phone notes for quick access
- [ ] Weekly calendar audit added to Sunday routine

### Sync Verification Test
- [ ] Block a test date on Airbnb
- [ ] After 30 minutes, check if the date appears blocked on VRBO (should be blocked)
- [ ] After 3 hours, check if the date appears blocked on Booking.com (should be blocked)
- [ ] Unblock the test date on all platforms after verification

---

## Quick Reference Card (Print This)

**When a booking notification arrives:**

1. Note which platform it came from
2. Within 1 hour, open the other 3 platforms
3. Block the same dates on each platform
4. Done -- iCal will sync the rest automatically

**If two bookings overlap:**

1. Earlier confirmation timestamp wins
2. Contact the later guest with apology + alternative dates
3. Process refund per platform policy

**Weekly audit (Sunday evening):**

1. Compare calendars across all 4 platforms
2. Fix any discrepancies immediately

---

*This guide corresponds to decisions D-05, D-06, D-07, D-08, D-09, D-10, D-11, D-12, and D-13 from Phase 2 Context.*
*Requirements covered: DIST-03 (iCal sync), DIST-04 (double-booking prevention protocol)*
