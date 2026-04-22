# Copilot Instructions for `web`

## Build, lint, and typecheck commands

Run from repository root:

- `npm run dev` — start React Router dev server
- `npm run build` — production build (`react-router build`)
- `npm run start` — serve built app from `./build/server/index.js`
- `npm run typecheck` — generate React Router route types + TypeScript check
- `npm run lint` — lint `./app` with Biome
- `npm run lint:fix` — apply Biome fixes in `./app`
- `npm run format` — format `./app` with Biome

Tests are not configured yet in `package.json` (no test script / test runner wired in this repo).

## High-level architecture

- This is a **React Router v7 framework-mode** app with Vite, and SSR enabled in `react-router.config.ts` (`ssr: true`).
- Route registration is centralized in `app/routes.ts`. Right now it maps only one index route: `routes/home/index.tsx`.
- `app/root.tsx` defines the HTML document shell (`Layout`), global CSS import (`app/app.css`), shared router primitives (`Meta`, `Links`, `Scripts`, `ScrollRestoration`), and the route-level `ErrorBoundary`.
- The home page composes feature components from `app/routes/home/components/*` (`LetterCardEditor`, `LettersCounter`), so feature UI is colocated under each route directory.
- UI primitives live under `app/components/ui` (shadcn-style structure). Styling composition uses:
  - Tailwind CSS v4 + `tw-animate-css`
  - shadcn Tailwind preset import (`@import "shadcn/tailwind.css"`)
  - shared class merge helper `cn()` in `app/lib/utils.ts` (`clsx` + `tailwind-merge`)

## Key conventions in this codebase

- Use the `~/*` path alias for app imports (maps to `./app/*` in `tsconfig.json`), e.g. `~/components/ui/button`.
- Keep route modules in React Router style:
  - default export is route component
  - optional `meta()` export returns route meta descriptors
- Prefer extending existing shadcn-style primitives (e.g. `Button` with `cva` variants + `Slot`) instead of ad-hoc duplicated component patterns.
- Global design tokens and theme variables are centralized in `app/app.css` (OKLCH CSS variables + Tailwind `@theme inline`); prefer using those utility tokens/classes over hardcoded one-off styling systems.
- Formatting/lint expectations are Biome-driven:
  - tabs for indentation
  - single quotes in JS/TS
  - organize imports via Biome actions
- Pre-commit runs `lint-staged` (`.husky/pre-commit`), and staged JS/TS/JSON files are auto-checked/fixed with Biome.
