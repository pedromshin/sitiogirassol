# Testing Patterns

**Analysis Date:** 2026-03-27

## Test Framework

**Status:** No testing framework currently configured

**What's Missing:**
- No test runner installed (Jest, Vitest, Playwright not in dependencies)
- No test configuration files (jest.config.js, vitest.config.ts, playwright.config.ts)
- No test files in codebase (no `.test.ts`, `.spec.ts` files in `src/`)
- No test scripts in `package.json`

**Implication:** Codebase has 0% test coverage currently.

## Recommended Test Framework

**For this Next.js + React project:**
- **Unit/Integration:** Vitest (lighter than Jest, excellent TypeScript support)
- **E2E:** Playwright (supports critical user flows like booking calendar)
- **React Component Testing:** React Testing Library (pairs well with Vitest)

**To implement, add to devDependencies:**
```json
{
  "devDependencies": {
    "vitest": "^1.x",
    "@vitest/ui": "^1.x",
    "@testing-library/react": "^14.x",
    "@testing-library/jest-dom": "^6.x",
    "playwright": "^1.x",
    "@playwright/test": "^1.x"
  }
}
```

## Test File Organization

**Recommended Location:**
- Co-located with source files (same directory as component being tested)
- Naming pattern: `{ComponentName}.test.tsx` for React components, `{module}.test.ts` for utilities

**Proposed Structure:**
```
src/
├── components/
│   ├── sections/
│   │   ├── FeaturesSection.tsx
│   │   └── FeaturesSection.test.tsx       # Co-located test
│   └── ui/
│       ├── BrandIcon.tsx
│       └── BrandIcon.test.tsx
├── lib/
│   ├── pricing.ts
│   └── pricing.test.ts                    # Utility test
└── app/
    └── api/
        └── calendar/blocked/
            ├── route.ts
            └── route.test.ts              # API route test
```

**E2E test location:**
```
e2e/
├── booking.spec.ts                        # Booking flow
├── calendar.spec.ts                       # Calendar interaction
└── navigation.spec.ts                     # Multi-language navigation
```

## Test Structure Pattern

**Vitest + React Testing Library for components:**
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import FeaturesSection from './FeaturesSection'

describe('FeaturesSection', () => {
  it('renders amenities title', () => {
    render(<FeaturesSection />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('toggles accordion on click', async () => {
    const { user } = render(<FeaturesSection />)
    const button = screen.getByRole('button', { name: /expand all/i })
    await user.click(button)
    expect(screen.getByText(/collapse all/i)).toBeInTheDocument()
  })

  it('filters amenities by search term', async () => {
    const { user } = render(<FeaturesSection />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.type(searchInput, 'pool')
    // Assert filtered results
  })
})
```

**Utilities/API routes with Vitest:**
```typescript
import { describe, it, expect } from 'vitest'
import { calculateTotalPrice } from './pricing'

describe('calculateTotalPrice', () => {
  it('calculates price for 1 night without discount', () => {
    const config = {
      nightlyRate: 500,
      weeklyDiscountPercent: 10,
      monthlyDiscountPercent: 20,
      currency: 'BRL' as const,
    }
    const result = calculateTotalPrice(config, new Date('2025-03-01'), new Date('2025-03-02'))
    expect(result.nights).toBe(1)
    expect(result.subtotal).toBe(500)
  })

  it('applies weekly discount for 7+ nights', () => {
    // Test with 7 nights - should apply 10% discount
  })

  it('applies monthly discount for 28+ nights', () => {
    // Test with 28 nights - should apply 20% discount
  })
})
```

## Mocking

**Framework:** Use Vitest's built-in `vi` object or Mock Service Worker (MSW) for HTTP mocking

**Patterns:**

**1. Mock Next.js modules:**
```typescript
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  default: ({ src, alt }: any) => <img src={src} alt={alt} />
}))
```

**2. Mock next-intl for translations:**
```typescript
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en'
}))
```

**3. Mock external APIs (calendar fetch):**
```typescript
import { vi } from 'vitest'
import { fetchBlockedDates } from './ical'

describe('fetchBlockedDates', () => {
  it('returns empty array on fetch error', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))
    const result = await fetchBlockedDates('https://invalid.url')
    expect(result).toEqual([])
  })

  it('parses iCal events correctly', async () => {
    const mockIcal = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Test//Test//EN
BEGIN:VEVENT
DTSTART:20250315
DTEND:20250316
END:VEVENT
END:VCALENDAR`
    global.fetch = vi.fn().mockResolvedValue({
      text: async () => mockIcal
    })
    const result = await fetchBlockedDates('https://test.url')
    expect(result.length).toBeGreaterThan(0)
  })
})
```

**What to Mock:**
- External API calls (calendar, Airbnb data)
- Next.js runtime modules (Image, useRouter, etc.)
- next-intl translation functions (so tests aren't dependent on translations)

**What NOT to Mock:**
- Core utilities being tested (pricing.ts, ical.ts logic)
- Calculation logic (test actual behavior, not mocked behavior)
- Date/time functions (unless testing specific dates)

## Fixtures and Factories

**Test Data Location:**
- Create `src/__tests__/fixtures/` directory for shared test data
- Or use factory functions inline for small datasets

**Pattern - Listing Config Fixture:**
```typescript
// src/__tests__/fixtures/listing.ts
export const mockListingConfig = {
  pricing: {
    nightlyRate: 500,
    weeklyDiscountPercent: 10,
    monthlyDiscountPercent: 20,
    currency: 'BRL' as const,
  },
  amenities: [
    { category: 'Kitchen', items: ['Oven', 'Refrigerator'] }
  ],
  // ... rest of config
}
```

**Pattern - Date Fixtures:**
```typescript
// src/__tests__/fixtures/dates.ts
export const fixtures = {
  oneNightStay: {
    start: new Date('2025-03-01'),
    end: new Date('2025-03-02')
  },
  weekStay: {
    start: new Date('2025-03-01'),
    end: new Date('2025-03-08')
  },
  monthStay: {
    start: new Date('2025-03-01'),
    end: new Date('2025-03-31')
  }
}
```

## Coverage

**Target:** 80%+ coverage (per user guidelines)

**View Coverage:**
```bash
# After setting up Vitest
npm run test:coverage

# View HTML report
open coverage/index.html
```

**Areas to prioritize (in order):**
1. Utility functions (`src/lib/pricing.ts`, `src/lib/ical.ts`) - 100% target
2. API routes (`src/app/api/`) - 100% target
3. Interactive components (`FeaturesSection.tsx`, `CalendarSection.tsx`) - 80% target
4. Presentational components (Footer, Header) - 60% minimum

## Test Types

**Unit Tests:**
- **Scope:** Individual functions, pure utilities
- **Examples:** `calculateTotalPrice`, `parseIcalDate`, `parseIcalBlockedDates`
- **Approach:** Direct function calls, assert output matches expected values
- **Run:** `npm run test`

**Integration Tests:**
- **Scope:** API routes with dependencies (calendar fetch, config access)
- **Examples:** GET `/api/calendar/blocked` endpoint, pricing with multiple discounts
- **Approach:** Test full flow including mocked external calls
- **Run:** `npm run test`

**E2E Tests:**
- **Scope:** Critical user flows (booking flow, calendar interaction, multi-language navigation)
- **Framework:** Playwright
- **Examples:**
  - View property → navigate sections → check calendar availability
  - Search amenities → filter by category → read descriptions
  - Change language → verify translations across all sections
- **Run:** `npm run e2e` (after Playwright setup)

## Configuration Files

**Vitest config (`vitest.config.ts`):**
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/__tests__/']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

**Playwright config (`playwright.config.ts`):**
```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
})
```

## Common Patterns

**Async Testing:**
```typescript
it('fetches blocked dates from calendar', async () => {
  const dates = await fetchBlockedDates('https://test.ics')
  expect(dates.length).toBeGreaterThan(0)
  expect(dates[0]).toBeInstanceOf(Date)
})
```

**Error Testing:**
```typescript
it('returns empty array when fetch fails', async () => {
  vi.mock('fetch', () => vi.fn().mockRejectedValue(new Error('Network error')))
  const result = await fetchBlockedDates('https://invalid.url')
  expect(result).toEqual([])
})

it('throws validation error for invalid input', () => {
  expect(() => {
    throw new Error('Invalid hex: xyz')
  }).toThrow('Invalid hex')
})
```

**Testing state changes (React):**
```typescript
it('toggles expanded state on button click', async () => {
  render(<FeaturesSection />)
  const expandButtons = screen.getAllByRole('button')
  fireEvent.click(expandButtons[0])
  // Assert content is now visible
  await expect(screen.findByText('Pool')).resolves.toBeInTheDocument()
})
```

## Scripts to Add

Add to `package.json`:
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui"
  }
}
```

---

*Testing analysis: 2026-03-27*
