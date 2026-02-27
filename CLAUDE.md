# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start Next.js dev server (port 3000)
bun run build        # Production build (use to verify compilation)
bun run lint         # ESLint
```

No test runner is configured yet. Use `bun run build` as the primary verification step.

## Architecture

Next.js 15 App Router frontend for the SEO Ultimate platform. Uses **shadcn-admin-kit** (marmelab) on top of **ra-core** for CRUD admin UI, with **BetterAuth** for authentication.

### Routing & Layout

- `src/app/login/` and `src/app/register/` — public auth pages (BetterAuth client)
- `src/app/(admin)/` — protected admin area, each resource has its own folder (rankings, content, competitors, audits, leads, outreach, prompts, gsc, market, settings)
- `src/app/(admin)/layout.tsx` wraps children in `AdminProvidersClient`, which dynamically imports ra-core providers with `ssr: false`
- `src/app/api/auth/[...all]/route.ts` — BetterAuth API handler
- `src/app/api/v1/bff/[...path]/route.ts` — BFF proxy: authenticates session, mints a short-lived JWT (HS256, 1min), forwards to backend at `BACKEND_URL:8020/api/v1/*`

### Data Flow

Browser → Next.js BFF (`/api/v1/bff/*`) → JWT minted server-side → FastAPI backend (`/api/v1/*`)

The `dataProvider` in `src/shared/dataProvider.ts` implements ra-core's DataProvider interface, calling `/api/v1/bff/{resource}`. Backend expects pagination params `page`, `per_page`, `sort`, `order`.

### Auth

- **Server**: `src/lib/auth.ts` — BetterAuth config (SQLite via better-sqlite3, email+password, optional Google OAuth)
- **Client**: `src/lib/auth-client.ts` — exports `signIn`, `signUp`, `signOut`, `useSession`
- **Middleware**: `src/proxy.ts` — redirects unauthenticated users to `/login` (checks `better-auth.session_token` cookie)
- Session cookie-based auth; the BFF proxy converts it to JWT for the backend

### Component Layers

- `src/components/ui/` — shadcn/ui primitives (Button, Card, Input, Table, Sidebar, etc.)
- `src/components/admin/` — shadcn-admin-kit components (List, DataTable, Edit, Create, SimpleForm, TextField, TextInput, etc.). Do not overwrite these unless explicitly asked.
- `src/shared/` — resource-specific pages and shared logic (dashboard, dataProvider, authProvider, i18nProvider)
- `src/hooks/` and `src/lib/` — shared utilities

### Key Conventions

- shadcn style: `new-york`, icon library: `lucide`, CSS variables enabled, base color: `neutral`
- TailwindCSS v4 (PostCSS plugin via `@tailwindcss/postcss`)
- `tsconfig.json`: `verbatimModuleSyntax` must be `false` for shadcn-admin-kit compatibility
- Path alias: `@/` → `src/`
- All admin pages are client components (`"use client"`) since ra-core is client-side only
- i18n: English + French via ra-i18n-polyglot
