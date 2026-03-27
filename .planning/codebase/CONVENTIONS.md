# Coding Conventions

**Analysis Date:** 2026-03-27

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `FeaturesSection.tsx`, `BrandIcon.tsx`)
- Configuration files: camelCase (e.g., `listing.config.ts`, `amenities.config.ts`)
- Utility modules: camelCase (e.g., `pricing.ts`, `ical.ts`)
- Styles/CSS: hyphen-case (e.g., `theme-vars.css`)
- Scripts: camelCase with dashes for clarity (e.g., `generate-theme-css.ts`, `optimize-hero-images.ts`)

**Functions:**
- camelCase for all functions (e.g., `calculateTotalPrice`, `fetchBlockedDates`, `parseIcalDate`)
- Use descriptive names indicating action/purpose
- Private utility functions: prefix with description (e.g., `parseIcalBlockedDates`, `parseIcalDate`)

**Variables:**
- camelCase for all variables and constants
- UPPERCASE_SNAKE_CASE for constants that should never change (e.g., `HERO_BG_IMAGES`, `ROTATE_INTERVAL_MS`)
- Single-letter variables acceptable only in tight loops (e.g., `for (let i = 0; ...`)

**Types:**
- PascalCase for all types and interfaces (e.g., `ListingConfig`, `PhotoCategory`, `BrandIconProps`)
- Use explicit type exports (e.g., `export type PhotoCategory = ...`)
- Props types follow pattern `{ComponentName}Props` (e.g., `BrandIconProps`)

## Code Style

**Formatting:**
- ESLint configured via `next/core-web-vitals` rules (`/.eslintrc.json`)
- No explicit Prettier config; relies on Next.js defaults
- Indentation: 2 spaces (inferred from codebase)
- Line length: No enforced limit, but typical files stay under 250 lines

**Linting:**
- Next.js ESLint config: `extends: "next/core-web-vitals"`
- All components follow React best practices
- TypeScript strict mode enabled in `tsconfig.json`

## Import Organization

**Order:**
1. React/Next.js core imports (e.g., `import Image from "next/image"`)
2. Third-party libraries (e.g., `import { useTranslations } from "next-intl"`, `import { motion } from "framer-motion"`)
3. Internal config/data (e.g., `import { listingConfig } from "@/data/listing.config"`)
4. Internal components/utilities (e.g., `import BrandIcon from "@/components/ui/BrandIcon"`)
5. Internal types (e.g., `import type { Locale } from "@/data/amenities.config"`)
6. CSS imports (placed at end)

**Example from `FeaturesSection.tsx`:**
```typescript
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { AMENITY_CATEGORIES } from "@/data/amenities.config";
import type { Locale } from "@/data/amenities.config";
```

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use aliases for all internal imports (never relative imports like `../`)

## Error Handling

**Patterns:**
- Try-catch blocks for async operations (e.g., `fetchBlockedDates`)
- Silent error recovery where appropriate (return empty array/object instead of throwing)
  ```typescript
  try {
    const dates = await fetchBlockedDates(url);
    return NextResponse.json({ dates: dates.map((d) => d.toISOString()) });
  } catch {
    return NextResponse.json({ dates: [] });  // Silent recovery
  }
  ```
- Validation with explicit null checks
  ```typescript
  if (!url) {
    return NextResponse.json({ dates: [] });
  }
  ```
- Throw errors only in critical utility functions with descriptive messages
  ```typescript
  if (!m) throw new Error(`Invalid hex: ${hex}`);
  ```

## Logging

**Framework:** Console logging not used in production code; analytics handled via Vercel Analytics and SpeedInsights

**Patterns:**
- No console.log statements in component/library code
- Scripts use `console.log` for build output (e.g., `console.log("Generated:", outPath)`)
- Server-side API errors silently return safe defaults rather than exposing stack traces

## Comments

**When to Comment:**
- File header comments for scripts explaining purpose (e.g., `/** Generates theme-vars.css ... */`)
- Inline comments for non-obvious logic or workarounds
- JSDoc comments on exported functions and types (though not consistently applied)

**JSDoc/TSDoc:**
- Used selectively on key exports (e.g., `calculateTotalPrice`)
- Configuration objects sometimes documented in comments (e.g., `/** Fetch and parse iCal from Airbnb ... */`)

**Example:**
```typescript
/**
 * Fetch and parse iCal from Airbnb to get blocked dates.
 * Add airbnbIcalUrl to listing.config.ts calendar section.
 */
export async function fetchBlockedDates(icalUrl: string): Promise<Date[]> {
  // implementation
}
```

## Function Design

**Size:** Typical functions 15-50 lines; larger functions broken into helpers
- `calculateTotalPrice` in `pricing.ts`: 30 lines
- `parseIcalBlockedDates` in `ical.ts`: 35 lines
- Large components delegate to smaller utilities

**Parameters:**
- Named parameters over positional (use destructuring for props)
  ```typescript
  export default function BrandIcon({ size = 32, className = "" }: BrandIconProps)
  ```
- Type annotations explicit (no implicit `any`)

**Return Values:**
- Explicit return types on exported functions
- Objects with clear structure (e.g., pricing calculations return typed object with `nights`, `subtotal`, `total`)
- Null/empty returns for failures (not errors)

## Module Design

**Exports:**
- Default exports for React components
  ```typescript
  export default function FeaturesSection() { ... }
  ```
- Named exports for utility functions and types
  ```typescript
  export async function fetchBlockedDates(icalUrl: string): Promise<Date[]>
  export type ListingConfig = { ... }
  ```

**Barrel Files:**
- Used in `src/lib/design-system/` index for re-exporting related utilities
- Example: `src/lib/design-system/index.ts` exports `colors`, `flattenColors`

## TypeScript Patterns

**Type Safety:**
- All function parameters typed explicitly
- Return types inferred where obvious, explicit on public APIs
- Discriminated unions used (e.g., `locale?: "pt" | "es" | "en"`)
- Record types for multi-language content: `Record<string, string>`

**Immutability:**
- Spread operator for state updates
  ```typescript
  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  ```
- Object.assign pattern not observed; prefer spread
- Configuration objects treated as immutable (listed config is read-only throughout app)

## Client vs Server Components

**"use client" directive:**
- Added to components using React hooks (useState, useEffect, useMemo, useTranslations)
- Examples: `FeaturesSection.tsx`, `Hero3D.tsx`, `Footer.tsx`, `CalendarSection.tsx`

**Server components:**
- API routes in `src/app/api/` are server-side by default
- Middleware in `src/middleware.ts`
- Layout components (`app/layout.tsx`) are server-rendered

## Styling Conventions

**Tailwind CSS:**
- Primary styling via Tailwind utility classes
- Theme colors via CSS variables generated from design system
- Color tokens: `text-white`, `bg-forest-dark`, `border-white/10`, `text-accent-gold`
- Spacing: Tailwind scale (e.g., `px-4`, `py-3.5`, `gap-3`, `mb-8`)
- Responsive prefixes: `sm:`, `md:` for breakpoints

**Component Structure:**
- No scoped CSS modules; global CSS in `src/app/globals.css`
- Theme colors defined in `src/lib/theme-colors.ts`
- Design tokens in `src/lib/design-system/`

---

*Convention analysis: 2026-03-27*
