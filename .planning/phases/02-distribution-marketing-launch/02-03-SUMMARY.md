---
phase: 02-distribution-marketing-launch
plan: 03
subsystem: marketing
tags: [meta-ads, facebook, instagram, whatsapp, reels, content-strategy, retargeting]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: "Optimized listing title/description, pricing floor (R$280/R$380), Facebook Pixel integration"
provides:
  - "Facebook Ads restructuring guide: Traffic to Messages migration with CBO and retargeting"
  - "Instagram content strategy: 4 pillars, weekly calendar, 7 Reel templates, batch filming guide"
affects: [03-growth-engine]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Owner-action guide pattern: step-by-step markdown with verification checklists"
    - "Pillar-based content strategy with percentage allocation"

key-files:
  created:
    - ".planning/phases/02-distribution-marketing-launch/deliverables/facebook-ads-restructuring-guide.md"
    - ".planning/phases/02-distribution-marketing-launch/deliverables/instagram-content-strategy.md"
  modified: []

key-decisions:
  - "Messages objective over Leads for WhatsApp-native booking conversations in Brazil"
  - "180-day retention for Custom Audiences to maximize audience size while site is new"
  - "Start ad spend at R$20/day (R$600/month) within the R$500-800/month budget range"
  - "7 Reel concept templates covering all 4 pillars with repeatable formats"

patterns-established:
  - "Batch content production: 2-3 hour filming sessions produce 2 weeks of content"
  - "Manual attribution via 'Como voce nos encontrou?' question for cross-platform ROI tracking"
  - "Weekly review checklists for both ad performance and content performance"

requirements-completed: [ADS-01, ADS-02, ADS-04, ADS-06, INSTA-01, INSTA-02]

# Metrics
duration: 6min
completed: 2026-03-28
---

# Phase 02 Plan 03: Ads & Content Strategy Summary

**Meta Ads restructuring from Traffic to Messages with CBO, retargeting Custom Audiences, and Instagram content strategy with 4 pillars, 7 Reel templates, and batch filming workflow**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-28T00:39:33Z
- **Completed:** 2026-03-28T00:46:00Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments

- Complete Facebook Ads migration guide: pause Traffic campaigns, create retargeting Custom Audiences (website visitors via Pixel + Instagram engagers), launch Messages campaign with CBO at R$500-800/month, WhatsApp destination, R$0.50 CPL target, and manual attribution tracking
- Complete Instagram content strategy: 4 content pillars (Property Experience 30%, Local Discovery 25%, Social Proof 25%, Behind the Scenes 20%), 4-week rolling calendar template, 7 repeatable Reel concept templates with shot lists and hooks, batch filming guide, iPhone filming tips, hashtag strategy, and guest permission process

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Facebook Ads restructuring guide** - `cb5b906` (docs)
2. **Task 2: Create Instagram content strategy document** - `1654746` (docs)

## Files Created/Modified

- `.planning/phases/02-distribution-marketing-launch/deliverables/facebook-ads-restructuring-guide.md` - Complete guide to migrate from Traffic to Messages objective with 3 ad sets, CBO, retargeting audiences, creative guidelines, budget/ROI tracking, and weekly review checklist (471 lines)
- `.planning/phases/02-distribution-marketing-launch/deliverables/instagram-content-strategy.md` - Content strategy with 4 pillars, weekly calendar template, 7 Reel concept templates with shot lists/hooks/captions/hashtags, batch filming guide, iPhone tips, hashtag strategy, guest permission process (621 lines)

## Decisions Made

- **Messages over Leads objective:** Messages drives WhatsApp conversations directly, which is the dominant communication channel in Brazil. Leads would require a form, adding friction.
- **180-day Custom Audience retention:** The website and Instagram are still growing -- 180 days maximizes audience size. Shorter windows (90d, 30d) can be tested once presence matures.
- **Starting at R$20/day:** Conservative start within the R$500-800/month range allows 2 weeks of data before scaling up or down.
- **7 Reel concept templates (not 5):** Hit the upper end of the D-27 range (5-7) to give the owner maximum variety before Phase 3 expands to 10+.

## Deviations from Plan

None -- plan executed exactly as written.

## Known Stubs

None -- both deliverables are complete guides ready for owner execution.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required. Both deliverables are owner-action guides for Meta Ads Manager and Instagram.

## Next Phase Readiness

- Ads restructuring guide is ready for owner to execute immediately (pause Traffic, create audiences, launch Messages campaign)
- Instagram content strategy is ready for owner to start filming (all concepts, shot lists, and calendar provided)
- Best-performing Reels can be repurposed as ad creative for Ad Set 2 (documented in both guides)
- Phase 3 (Growth Engine) will expand from 7 to 10+ Reel templates (INSTA-04) and add 3-layer ad funnel (ADS-03)

## Self-Check: PASSED

- All 3 files found (2 deliverables + 1 summary)
- Both task commits verified (cb5b906, 1654746)

---
*Phase: 02-distribution-marketing-launch*
*Completed: 2026-03-28*
