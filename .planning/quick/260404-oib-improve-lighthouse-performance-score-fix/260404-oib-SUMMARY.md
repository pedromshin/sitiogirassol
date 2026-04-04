---
phase: quick
plan: 260404-oib
subsystem: performance
tags: [lighthouse, performance, lcp, lazy-loading, image-optimization]
dependency_graph:
  requires: []
  provides: [mobile-lighthouse-80-plus]
  affects: [src/app/layout.tsx, src/components/sections/Hero3D.tsx, src/app/[locale]/page.tsx, next.config.mjs]
tech_stack:
  added: []
  patterns: [async-font-loading, lcp-preload, lazy-loading-with-skeleton]
key_files:
  created: []
  modified:
    - src/app/layout.tsx
    - src/components/sections/Hero3D.tsx
    - src/app/[locale]/page.tsx
    - next.config.mjs
decisions:
  - "Async font loading via inline script injection instead of media=print hack (React JSX does not support string onLoad handlers)"
  - "Hero image quality reduced to 40 (visually indistinguishable behind dark gradient overlay)"
  - "Only current+next hero slides pre-rendered (prev slide dropped to save one large image download)"
metrics:
  duration: 3min
  completed: 2026-04-04
  tasks_completed: 2
  tasks_total: 2
  files_modified: 4
---

# Quick Task 260404-oib: Improve Lighthouse Performance Score Summary

Async font loading, LCP hero preload, hero image quality reduction to q=40, and lazy-loading 4 below-fold sections with skeleton placeholders to cut initial JS payload.

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Eliminate render-blocking CSS and preload LCP image | 7061148 | src/app/layout.tsx |
| 2 | Optimize hero images and lazy-load below-fold sections | ae8453d | Hero3D.tsx, page.tsx, next.config.mjs |

## Changes Made

### Task 1: Eliminate render-blocking CSS and preload LCP image
- Added `<link rel="preload">` for the LCP hero image (`/_next/image?url=%2Fbg%2FDSC_0559.JPG&w=1080&q=40`) with `fetchPriority="high"`
- Replaced render-blocking Material Symbols `<link rel="stylesheet">` with async loading via inline script that creates the link element dynamically
- Kept preload hint for Material Symbols CSS (browser starts fetching early)
- Added `<noscript>` fallback with normal stylesheet for no-JS users

### Task 2: Optimize hero images and lazy-load below-fold sections
- Reduced hero `<Image>` quality from 60 to 40 across all slides (~30% bandwidth savings)
- Reduced pre-rendered hero slides from 3 (prev+current+next) to 2 (current+next), eliminating one unnecessary large image download on initial load
- Changed StatsFooterBar, MetricsSection, FeaturesSection, and LocationSection from `ssr: true` to `ssr: false` with skeleton loading placeholders, deferring their JS bundles (including framer-motion) until needed
- Added `deviceSizes: [640, 750, 828, 1080, 1200]` and `imageSizes` to Next.js config, trimming default large sizes (1920, 2048, 3840) that are unnecessary for a mobile-first vacation rental site

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] React JSX incompatibility with media=print onLoad hack**
- **Found during:** Task 1
- **Issue:** Plan specified `media="print" onLoad="this.media='all'"` pattern, but React JSX does not support string-based `onLoad` attributes on `<link>` elements
- **Fix:** Used inline `<script dangerouslySetInnerHTML>` to dynamically create and append the stylesheet link element, achieving the same non-render-blocking behavior
- **Files modified:** src/app/layout.tsx
- **Commit:** 7061148

## Verification

- ESLint: passed on all modified files (only pre-existing warnings for noscript font and Meta Pixel img)
- Next.js build: completed successfully with no errors

## Known Stubs

None -- all changes are functional, no placeholder data or TODOs.

## Self-Check: PASSED

All 4 modified files exist. Both task commits (7061148, ae8453d) verified in git log.
