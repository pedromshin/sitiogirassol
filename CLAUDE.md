<!-- GSD:project-start source:PROJECT.md -->
## Project

**Sítio Girassol Revenue Maximization**

A revenue optimization project for Sítio Girassol, a vacation rental property near Sorocaba (~1-2 hours from São Paulo), Brazil. The property is listed on Airbnb (ID: 1345960842338220775) with a website at sitiogirassol.org and Instagram @sitiogirassol.sp. The goal is to build a robust digital presence across multiple platforms and aggressively increase booking revenue from the existing property through data-driven marketing, multi-platform distribution, pricing optimization, and content strategy.

**Core Value:** Hit R$ 4,000 revenue by end of April 2026 and R$ 7,000 by end of May 2026 through optimized marketing, expanded platform presence, and strategic pricing — using the marketing data to make every decision.

### Constraints

- **Time**: Owner has 10-15 hours/week for marketing/management
- **Budget**: Ad spend must show clear ROI — flexible amount but returns must justify cost
- **Platform**: Currently Airbnb-only, expanding to Booking.com and Brazilian platforms
- **Capacity**: Single property, 1 group at a time — revenue ceiling is ~30 bookable nights/month
- **Timeline**: R$ 4k by April 30, R$ 7k by May 31 — 34 days to April target, 65 days to May target
- **Starting point**: R$ 2,000+ already confirmed for April
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.5.0 - Main application code and configuration
- React 18.2.0 - UI components and rendering
- JavaScript - Build scripts and utilities
- Python 3.x (in scripts) - Data processing in `scripts/` for image optimization and Airbnb data extraction
- CSS/SCSS - Styling via Tailwind
## Runtime
- Node.js (implied by Next.js 14.2.5 and npm)
- Next.js 14.2.5 - React meta-framework for full-stack app
- npm - Lockfile: `package-lock.json` present
## Frameworks
- Next.js 14.2.5 - Full-stack React framework with App Router, API routes, middleware
- React 18.2.0 - Core UI library
- React DOM 18.2.0 - DOM rendering
- next-intl 3.19.0 - Multi-language support (en, pt, es). Plugin in `next.config.mjs`; routing at `src/i18n/routing.ts`, middleware at `src/middleware.ts`
- Three.js 0.163.0 - 3D scene rendering
- @react-three/fiber 8.15.12 - React renderer for Three.js
- @react-three/drei 9.92.7 - Utilities for fiber (OrbitControls used in `src/components/sections/Scene3D.tsx`)
- Framer Motion 11.3.28 - React animation library
- GSAP 3.12.5 - Animation framework for advanced motion control
- Swiper 11.1.4 - Touch-friendly carousel component
- react-date-range 2.0.1 - Date range picker for calendar bookings
- date-fns 3.3.1 - Date manipulation and formatting
- node-ical 0.16.1 - iCal parser for Airbnb calendar blocking
- @vercel/analytics 1.6.1 - Vercel analytics integration in `src/app/layout.tsx`
- @vercel/speed-insights 1.3.1 - Core Web Vitals monitoring
- Google Analytics 4 - Configured via `NEXT_PUBLIC_GA4_ID` env var in `src/app/layout.tsx`
- Facebook Pixel - Configured via `NEXT_PUBLIC_FB_PIXEL_ID` env var in `src/app/layout.tsx`
## Build & Development
- Webpack (Next.js bundler) - Implicit via Next.js
- PostCSS 8.4.38 - CSS transformation pipeline
- Tailwind CSS 3.4.4 - Utility-first CSS framework via `tailwind.config.ts`
- Autoprefixer 10.4.19 - Browser vendor prefixes
- tsx 4.19.0 - TypeScript runtime for scripts; runs TS scripts in `scripts/`
- ESLint 8.57.0 - Code linting; config at `.eslintrc.json`
- eslint-config-next 14.2.5 - Next.js ESLint rules
- jimp 1.6.0 - Image manipulation library
- to-ico 1.1.5 - Convert images to .ico format
- Scripts: `scripts/generate-icons.ts`, `scripts/optimize-hero-images.ts` prebuild image assets
- TypeScript 5.5.0 - Strict type checking; config at `tsconfig.json` with ES2017 target, JSX preserve mode
## Key Dependencies
- next 14.2.5 - Core framework (framework + router + middleware + API routes)
- react 18.2.0 - UI rendering
- next-intl 3.19.0 - Internationalization (required for multi-language support)
- three + @react-three/* - 3D hero section rendering
- @vercel/analytics - Server-side analytics to Vercel
- @vercel/speed-insights - Core Web Vitals monitoring
- Google Analytics 4 - Event tracking (site-wide via global script)
- Facebook Pixel - Conversion tracking for paid ads (site-wide via global script)
- react-date-range - Booking calendar UI
- node-ical - Airbnb calendar sync via iCal feed (parsed in `src/lib/ical.ts`)
## Configuration
- `.env` variables (NEXT_PUBLIC_* for client-side exposure):
- `prebuild` npm script runs:
- Dev: `next dev` (localhost:3000)
- Build: `next build` → `.next/` output
- Start: `next start` - Production server
- Lint: `next lint` - ESLint via Next.js
- Google Fonts imported in runtime via `next/font/google`:
## Platform Requirements
- Node.js 18+ (implied by Next.js 14 and TypeScript 5.5)
- npm (lockfile managed)
- Python 3.x (for scripts in `/scripts/`)
- Vercel (inferred from @vercel/analytics, @vercel/speed-insights integration)
- Remote image optimization enabled in `next.config.mjs`: `images.remotePatterns` allows https/http from any hostname
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- Components: PascalCase (e.g., `FeaturesSection.tsx`, `BrandIcon.tsx`)
- Configuration files: camelCase (e.g., `listing.config.ts`, `amenities.config.ts`)
- Utility modules: camelCase (e.g., `pricing.ts`, `ical.ts`)
- Styles/CSS: hyphen-case (e.g., `theme-vars.css`)
- Scripts: camelCase with dashes for clarity (e.g., `generate-theme-css.ts`, `optimize-hero-images.ts`)
- camelCase for all functions (e.g., `calculateTotalPrice`, `fetchBlockedDates`, `parseIcalDate`)
- Use descriptive names indicating action/purpose
- Private utility functions: prefix with description (e.g., `parseIcalBlockedDates`, `parseIcalDate`)
- camelCase for all variables and constants
- UPPERCASE_SNAKE_CASE for constants that should never change (e.g., `HERO_BG_IMAGES`, `ROTATE_INTERVAL_MS`)
- Single-letter variables acceptable only in tight loops (e.g., `for (let i = 0; ...`)
- PascalCase for all types and interfaces (e.g., `ListingConfig`, `PhotoCategory`, `BrandIconProps`)
- Use explicit type exports (e.g., `export type PhotoCategory = ...`)
- Props types follow pattern `{ComponentName}Props` (e.g., `BrandIconProps`)
## Code Style
- ESLint configured via `next/core-web-vitals` rules (`/.eslintrc.json`)
- No explicit Prettier config; relies on Next.js defaults
- Indentation: 2 spaces (inferred from codebase)
- Line length: No enforced limit, but typical files stay under 250 lines
- Next.js ESLint config: `extends: "next/core-web-vitals"`
- All components follow React best practices
- TypeScript strict mode enabled in `tsconfig.json`
## Import Organization
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use aliases for all internal imports (never relative imports like `../`)
## Error Handling
- Try-catch blocks for async operations (e.g., `fetchBlockedDates`)
- Silent error recovery where appropriate (return empty array/object instead of throwing)
- Validation with explicit null checks
- Throw errors only in critical utility functions with descriptive messages
## Logging
- No console.log statements in component/library code
- Scripts use `console.log` for build output (e.g., `console.log("Generated:", outPath)`)
- Server-side API errors silently return safe defaults rather than exposing stack traces
## Comments
- File header comments for scripts explaining purpose (e.g., `/** Generates theme-vars.css ... */`)
- Inline comments for non-obvious logic or workarounds
- JSDoc comments on exported functions and types (though not consistently applied)
- Used selectively on key exports (e.g., `calculateTotalPrice`)
- Configuration objects sometimes documented in comments (e.g., `/** Fetch and parse iCal from Airbnb ... */`)
## Function Design
- `calculateTotalPrice` in `pricing.ts`: 30 lines
- `parseIcalBlockedDates` in `ical.ts`: 35 lines
- Large components delegate to smaller utilities
- Named parameters over positional (use destructuring for props)
- Type annotations explicit (no implicit `any`)
- Explicit return types on exported functions
- Objects with clear structure (e.g., pricing calculations return typed object with `nights`, `subtotal`, `total`)
- Null/empty returns for failures (not errors)
## Module Design
- Default exports for React components
- Named exports for utility functions and types
- Used in `src/lib/design-system/` index for re-exporting related utilities
- Example: `src/lib/design-system/index.ts` exports `colors`, `flattenColors`
## TypeScript Patterns
- All function parameters typed explicitly
- Return types inferred where obvious, explicit on public APIs
- Discriminated unions used (e.g., `locale?: "pt" | "es" | "en"`)
- Record types for multi-language content: `Record<string, string>`
- Spread operator for state updates
- Object.assign pattern not observed; prefer spread
- Configuration objects treated as immutable (listed config is read-only throughout app)
## Client vs Server Components
- Added to components using React hooks (useState, useEffect, useMemo, useTranslations)
- Examples: `FeaturesSection.tsx`, `Hero3D.tsx`, `Footer.tsx`, `CalendarSection.tsx`
- API routes in `src/app/api/` are server-side by default
- Middleware in `src/middleware.ts`
- Layout components (`app/layout.tsx`) are server-rendered
## Styling Conventions
- Primary styling via Tailwind utility classes
- Theme colors via CSS variables generated from design system
- Color tokens: `text-white`, `bg-forest-dark`, `border-white/10`, `text-accent-gold`
- Spacing: Tailwind scale (e.g., `px-4`, `py-3.5`, `gap-3`, `mb-8`)
- Responsive prefixes: `sm:`, `md:` for breakpoints
- No scoped CSS modules; global CSS in `src/app/globals.css`
- Theme colors defined in `src/lib/theme-colors.ts`
- Design tokens in `src/lib/design-system/`
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Server-side rendering with dynamic client components via `next/dynamic`
- Internationalization (i18n) middleware-based routing with `next-intl`
- Configuration-driven content via centralized data files
- Vercel Analytics and performance monitoring integrated
- Theme customization system with design tokens
## Layers
- Purpose: Render landing page sections with rich visuals, animations, and interactivity
- Location: `src/components/`
- Contains: React components organized by type (sections, layout, UI, decorations, SEO)
- Depends on: Data configs, design system, utilities
- Used by: Page components in `src/app/`
- Purpose: Handle URL routing, locale management, and page orchestration
- Location: `src/app/`, `src/app/[locale]/`
- Contains: Layout files, page components, API routes
- Depends on: Middleware, i18n routing, component sections
- Used by: Next.js runtime
- Purpose: Single source of truth for listing content, amenities, pricing, and metadata
- Location: `src/data/`
- Contains: `listing.config.ts` (property details, pricing, photos, copy in multiple languages), `amenities.config.ts`
- Depends on: None
- Used by: Components throughout the app for rendering content
- Purpose: Shared business logic for pricing calculations, calendar parsing, theming, and design system derivation
- Location: `src/lib/`
- Contains: `pricing.ts` (discount/fee logic), `ical.ts` (Airbnb calendar fetching), `theme-colors.ts`, design system modules
- Depends on: External libraries (date-fns, node-ical)
- Used by: Components and API routes
- Purpose: Enable multi-language support with locale-based routing
- Location: `src/i18n/`
- Contains: `routing.ts` (locale configuration), `navigation.ts` (link builders), `request.ts` (request utilities)
- Depends on: `next-intl`
- Used by: Middleware and all page components
- Purpose: Server-side proxies and data endpoints
- Location: `src/app/api/`
- Contains: Minimal API routes (currently only `/calendar/blocked` for Airbnb iCal integration)
- Depends on: Data configs, utilities
- Used by: Client-side components via fetch
## Data Flow
- Minimal state: Configuration is immutable, stored in `src/data/`
- Client-side component state for UI interactions (calendar selection, theme toggling)
- No global state management library needed for this simple property listing
## Key Abstractions
- Purpose: Centralized data structure defining all property metadata, pricing, amenities, photos, and multi-language content
- Examples: `src/data/listing.config.ts`
- Pattern: Single TypeScript object export with strongly-typed interfaces (`ListingConfig`, `PhotoCategory`)
- Content includes: Meta tags, hero copy, pricing (nightly, weekly %, monthly %), calendar iCal URL, photo array, property specs, amenities by category, informational sections, nearby places, location maps
- Purpose: Generate theme colors, derive color variations, and flatten to CSS variables
- Examples: `src/lib/design-system/color-math.ts`, `src/lib/design-system/derive-colors.ts`, `src/lib/design-system/forest-tokens.ts`
- Pattern: Programmatic color derivation from seed color; flattened to CSS custom properties for Tailwind theming
- Used by: `tailwind.config.ts` at build time, `src/lib/theme-colors.ts` for runtime access
- Purpose: Page-level visual sections organized by feature (Hero, Gallery, Features, Calendar, CTA, etc.)
- Examples: `src/components/sections/Hero3D.tsx`, `src/components/sections/CalendarSection.tsx`, `src/components/sections/FeaturesSection.tsx`
- Pattern: Dynamically imported in page component with `next/dynamic` for performance (most set `ssr: false`)
- Design: Each section self-contains data fetching, state management, and rendering
## Entry Points
- Location: `src/app/layout.tsx` and `src/app/[locale]/page.tsx`
- Triggers: HTTP request to `/`, `/en`, `/pt`
- Responsibilities:
- Location: `src/app/api/calendar/blocked/route.ts`
- Triggers: GET request to `/api/calendar/blocked`
- Responsibilities:
- Locations: `scripts/generate-theme-css.ts`, `scripts/generate-icons.ts`, `scripts/optimize-hero-images.ts`
- Triggers: `npm run prebuild` before production build
- Responsibilities:
## Error Handling
- API route catches errors and returns empty data: `catch { return NextResponse.json({ dates: [] }) }`
- iCal fetch failure returns empty array rather than throwing
- Missing environment variables (GA4_ID, FB_PIXEL_ID) are checked before script injection; missing vars are skipped
- Calendar section handles missing iCal URL gracefully
## Cross-Cutting Concerns
- No centralized logging library detected
- Error handling via silent fallbacks and empty data responses
- Opportunity: Add server-side logging for API errors and monitoring
- Configuration objects are typed via TypeScript interfaces but not runtime-validated
- iCal parsing delegates to `node-ical` library (external validation)
- No Zod/Pydantic validation layer at system boundaries
- Not applicable; public-facing marketing site with no auth required
- `next-intl` middleware routes by locale (en/pt)
- All marketing copy stored in `ListingConfig` as `Record<string, string>` objects (language keys)
- Components access locale-specific strings from config
- Vercel Analytics for performance metrics
- Google Analytics 4 for conversion tracking (GA4 script injected if `NEXT_PUBLIC_GA4_ID` set)
- Facebook Pixel for ad retargeting (injected if `NEXT_PUBLIC_FB_PIXEL_ID` set)
- CSS variables generated from design system at build time
- Tailwind CSS uses custom color palette
- Runtime theme color picker available in UI components
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
