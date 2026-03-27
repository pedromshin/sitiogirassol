# Phase 1: Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-27
**Phase:** 01-foundation
**Areas discussed:** Pricing floor strategy, Holiday premium pricing, Listing optimization approach, Guest communication templates, Website config sync
**Mode:** Auto (--auto flag — all decisions auto-selected using recommended defaults)

---

## Pricing Floor Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| R$280 weekday / R$380 weekend | Requirements-specified floor rates | ✓ |

**User's choice:** [auto] R$280 weekday / R$380 weekend as specified in requirements (recommended default)

| Option | Description | Selected |
|--------|-------------|----------|
| 10% weekly discount | Conservative reduction | |
| 12% weekly discount | Midpoint of 10-15% range | ✓ |
| 15% weekly discount | Maximum of specified range | |

**User's choice:** [auto] 12% (midpoint of 10-15% range)

| Option | Description | Selected |
|--------|-------------|----------|
| 25% monthly discount | Conservative reduction | |
| 27% monthly discount | Midpoint of 25-30% range | ✓ |
| 30% monthly discount | Maximum of specified range | |

**User's choice:** [auto] 27% (midpoint of 25-30% range)

| Option | Description | Selected |
|--------|-------------|----------|
| R$150 cleaning fee | Lower end, less deterrent | |
| R$180 cleaning fee | Midpoint of R$150-200 range | ✓ |
| R$200 cleaning fee | Higher end, stronger deterrent | |

**User's choice:** [auto] R$180 (midpoint of R$150-200 range)

---

## Holiday Premium Pricing

| Option | Description | Selected |
|--------|-------------|----------|
| R$500/night Easter | Lower end of R$500-700 range | |
| R$600/night Easter | Midpoint — competitive for holiday | ✓ |
| R$700/night Easter | Premium — may reduce bookings | |

**User's choice:** [auto] R$600/night (midpoint of R$500-700 range)

| Option | Description | Selected |
|--------|-------------|----------|
| R$450/night Labor Day | Lower end of R$450-600 range | |
| R$500/night Labor Day | Midpoint — balanced approach | ✓ |
| R$600/night Labor Day | Higher end | |

**User's choice:** [auto] R$500/night (midpoint of R$450-600 range)

---

## Listing Optimization Approach

| Option | Description | Selected |
|--------|-------------|----------|
| Audit existing 270 photos | Select best 25-30, prioritize golden-hour pool/exterior | ✓ |
| Commission new photo shoot | Out of scope per requirements | |

**User's choice:** [auto] Audit existing photos — select best 25-30

| Option | Description | Selected |
|--------|-------------|----------|
| 2-night minimum stay | As specified in LISTING-03 | ✓ |
| No minimum | Risks low-value 1-night stays | |

**User's choice:** [auto] 2-night minimum as specified

---

## Guest Communication Templates

| Option | Description | Selected |
|--------|-------------|----------|
| Portuguese primary + English key info | Matches guest demographics | ✓ |
| Portuguese only | May alienate international guests | |
| Bilingual full text | More effort, diminishing returns | |

**User's choice:** [auto] Portuguese primary with key phrases in English

| Option | Description | Selected |
|--------|-------------|----------|
| Warm and professional | Friendly host personality, clear info | ✓ |
| Formal/corporate | Too impersonal for vacation rental | |
| Ultra casual | May undermine trust | |

**User's choice:** [auto] Warm and professional

---

## Website Config Sync

| Option | Description | Selected |
|--------|-------------|----------|
| Update listing.config.ts | Keep website and Airbnb pricing consistent | ✓ |
| Leave website as-is | Creates price mismatch — confusing | |

**User's choice:** [auto] Update listing.config.ts to match new Airbnb pricing

---

## Claude's Discretion

- Exact listing title wording (within keyword constraints)
- Exact listing description copy
- Photo selection from 270 available (within guidelines)
- House manual formatting and structure
- Guest template exact wording (within tone/content guidelines)

## Deferred Ideas

- PriceLabs dynamic pricing — Phase 2
- Booking.com expansion — Phase 2
- Ad restructuring — Phase 2
- Professional photo shoot — Out of scope
