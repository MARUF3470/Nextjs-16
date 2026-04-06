# AGENTS.md
This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling and runtime
- Package manager: npm (lockfile: `package-lock.json`)
- Framework: Next.js 16 (App Router) + React 19 + TypeScript
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss` and global CSS in `app/globals.css`

## Commands used in this repo
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Run production server: `npm run start`
- Lint: `npm run lint`
- Type-check (no npm script is defined, use directly): `npx tsc --noEmit`
- Lint a single file: `npx eslint app/page.tsx`

## Testing status
- There is currently no test runner configured and no test files in the repository.
- A "run single test" command does not exist yet in this codebase.

## High-level architecture
- App entrypoint is `app/layout.tsx` and `app/page.tsx` (App Router, no `src/` directory).
- `app/layout.tsx` composes global UI and providers:
  - global fonts and base styles
  - shared navigation (`components/NavBar.tsx`)
  - animated background (`components/LightRays.tsx`)
  - analytics provider and pageview tracking (`components/PostHogProvider.tsx`, `components/PostHogPageView.tsx`)
- `app/page.tsx` renders the landing page by mapping static event data from `lib/constants.ts` into `components/EventCard.tsx`.
- `lib/` holds shared utilities/data:
  - `lib/utils.ts` provides `cn()` class-merging helper (`clsx` + `tailwind-merge`)
  - `lib/constants.ts` currently contains the event dataset used by the home page
- `public/` stores static assets used by `next/image` (icons and event images).

## Analytics and environment variables
- PostHog is initialized on the client in `components/PostHogProvider.tsx`.
- Required public env vars for analytics:
  - `NEXT_PUBLIC_POSTHOG_KEY`
  - `NEXT_PUBLIC_POSTHOG_HOST`
- Pageview capture is handled manually in `components/PostHogPageView.tsx` (autocapture for pageviews is disabled in init config).

## Repo-specific implementation notes
- This project uses Next.js 16; do not assume older Next.js behavior.
- If Next.js behavior is unclear, check the versioned docs bundled in `node_modules/next/dist/docs/` and follow deprecation guidance.
