---
phase: quick
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/app/layout.tsx
  - src/components/sections/Hero3D.tsx
  - src/app/[locale]/page.tsx
  - next.config.mjs
autonomous: true
requirements: [PERF-01]

must_haves:
  truths:
    - "Lighthouse mobile performance score is 80+"
    - "LCP hero image loads faster via preload and reduced quality"
    - "Material Symbols font does not block initial render"
    - "Below-fold sections lazy-load their JS bundles"
  artifacts:
    - path: "src/app/layout.tsx"
      provides: "Non-render-blocking Material Symbols font, LCP image preload"
    - path: "src/components/sections/Hero3D.tsx"
      provides: "Optimized hero images with lower quality and proper priority"
    - path: "src/app/[locale]/page.tsx"
      provides: "Lazy-loaded below-fold sections with ssr:false"
    - path: "next.config.mjs"
      provides: "Image device sizes tuned for actual viewport widths"
  key_links:
    - from: "src/app/layout.tsx"
      to: "Material Symbols CSS"
      via: "media=print onload hack for async CSS"
      pattern: "media.*print.*onload"
    - from: "src/components/sections/Hero3D.tsx"
      to: "next/image"
      via: "quality and sizes props"
      pattern: "quality.*[34]0"
---

<objective>
Fix mobile Lighthouse performance score from 57 to 80+ by addressing the top bottlenecks: render-blocking CSS, oversized hero images, and unnecessary JS loading for below-fold sections.

Purpose: Faster page load directly improves mobile user experience and SEO ranking for a vacation rental property site that depends on organic search traffic.
Output: Optimized layout, hero, and page files that eliminate render-blocking resources and reduce initial payload.
</objective>

<execution_context>
@$HOME/.claude/get-shit-done/workflows/execute-plan.md
@$HOME/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@src/app/layout.tsx
@src/components/sections/Hero3D.tsx
@src/app/[locale]/page.tsx
@next.config.mjs
@src/components/layout/AnalyticsScripts.tsx
</context>

<tasks>

<task type="auto">
  <name>Task 1: Eliminate render-blocking CSS and preload LCP image</name>
  <files>src/app/layout.tsx</files>
  <action>
In `src/app/layout.tsx`, make these changes to the `<head>` section:

1. **Convert Material Symbols stylesheet to non-render-blocking load.** Replace the current preload+stylesheet pair for Material Symbols with:
   - A `<link>` with `rel="preload"` `as="style"` (keep existing)
   - Change the second `<link rel="stylesheet">` to use the media-swap pattern: `media="print"` with `onLoad="this.media='all'"` — this prevents render-blocking while still loading the font.
   - Add a `<noscript>` fallback with the normal stylesheet for no-JS users.

2. **Preload the LCP hero image.** Add a `<link rel="preload">` for the first hero image (`/bg/DSC_0559.JPG`) using Next.js image optimization URL format:
   ```
   <link rel="preload" as="image" href="/_next/image?url=%2Fbg%2FDSC_0559.JPG&w=1080&q=40" fetchPriority="high" />
   ```
   Place this before the Material Symbols links. Use `w=1080` and `q=40` to match the optimized image that will be served on mobile.

Do NOT change the Meta Pixel, GA, or Vercel analytics — those are already correctly deferred.
  </action>
  <verify>
    <automated>cd /Users/kaszek/Desktop/sitiogirassol/sitiogirassol-main && npx next lint --file src/app/layout.tsx</automated>
  </verify>
  <done>Material Symbols font loads asynchronously without blocking render. LCP hero image is preloaded. No render-blocking external stylesheets remain in `<head>`.</done>
</task>

<task type="auto">
  <name>Task 2: Optimize hero images and lazy-load below-fold sections</name>
  <files>src/components/sections/Hero3D.tsx, src/app/[locale]/page.tsx, next.config.mjs</files>
  <action>
**Hero3D.tsx changes:**

1. **Reduce image quality from 60 to 40.** Change `quality={60}` to `quality={40}` on all hero `<Image>` components. At full-viewport sizes behind a dark overlay, q=40 is visually indistinguishable from q=60 but saves ~30% bandwidth.

2. **Set proper sizes attribute.** Keep `sizes="100vw"` — it is correct for full-bleed hero images.

3. **Ensure only the first image has `priority={true}`.** The current code already does `priority={i === 0}` which is correct. No change needed here.

4. **Reduce the number of pre-rendered adjacent slides from 3 to 2.** Currently renders prev+current+next (3 images). Change the visibility logic to only render `currentIndex` and `next` (2 images). This avoids downloading an extra large image on initial load. Specifically, remove the `prev` calculation and only check `i === currentIndex || i === next`:
   ```tsx
   const next = (currentIndex + 1) % HERO_BG_IMAGES.length;
   const isVisible = i === currentIndex || i === next;
   ```

**page.tsx changes:**

5. **Make StatsFooterBar and MetricsSection lazy with ssr:false.** These are below-the-fold and don't need SSR. Change:
   ```tsx
   const StatsFooterBar = dynamic(() => import("@/components/sections/StatsFooterBar"), { ssr: false, loading: () => <div className="h-24 bg-forest-dark" /> });
   const MetricsSection = dynamic(() => import("@/components/sections/MetricsSection"), { ssr: false, loading: () => <div className="h-96 bg-forest-dark" /> });
   ```
   Also change FeaturesSection and LocationSection to `ssr: false` with skeleton loading divs — they are well below the fold and their framer-motion JS is heavy:
   ```tsx
   const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), { ssr: false, loading: () => <div className="h-96 bg-forest-dark" /> });
   const LocationSection = dynamic(() => import("@/components/sections/LocationSection"), { ssr: false, loading: () => <div className="h-96 bg-forest-dark" /> });
   ```

**next.config.mjs changes:**

6. **Add `deviceSizes` and `imageSizes` to the images config** to ensure Next.js generates optimized widths matching common mobile viewports:
   ```js
   images: {
     formats: ["image/avif", "image/webp"],
     minimumCacheTTL: 31536000,
     deviceSizes: [640, 750, 828, 1080, 1200],
     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
     remotePatterns: [
       { protocol: "https", hostname: "**" },
       { protocol: "http", hostname: "**" },
     ],
   },
   ```
   This trims the default `deviceSizes` (which includes 1920, 2048, 3840) so Next.js doesn't generate unnecessarily large variants for a site primarily viewed on mobile.
  </action>
  <verify>
    <automated>cd /Users/kaszek/Desktop/sitiogirassol/sitiogirassol-main && npx next lint --file src/components/sections/Hero3D.tsx --file src/app/\\[locale\\]/page.tsx && npx next build 2>&1 | tail -20</automated>
  </verify>
  <done>Hero images serve at quality 40 saving ~30% bandwidth. Only 2 hero slides pre-rendered instead of 3. Below-fold sections (StatsFooterBar, MetricsSection, FeaturesSection, LocationSection) lazy-load with ssr:false, reducing initial JS payload by deferring framer-motion bundles. Next.js image config tuned for mobile-first device sizes. Build completes without errors.</done>
</task>

</tasks>

<verification>
After both tasks complete:
1. `npx next build` succeeds without errors
2. Run local Lighthouse audit: `npx next start` then Chrome DevTools Lighthouse on mobile preset
3. Verify LCP image loads with q=40 in Network tab
4. Verify Material Symbols CSS is not in "Render-blocking resources" audit
5. Verify below-fold section JS chunks load lazily (check Network waterfall)
</verification>

<success_criteria>
- Lighthouse mobile performance score reaches 80+ (from 57)
- No render-blocking external CSS in Lighthouse audit
- LCP time improves from 9.4s toward sub-4s range
- FCP improves from 5.0s toward sub-3s range
- Build passes without errors
- No visual regressions — hero carousel works, all sections render correctly
</success_criteria>

<output>
After completion, create `.planning/quick/260404-oib-improve-lighthouse-performance-score-fix/260404-oib-SUMMARY.md`
</output>
