# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro ... # Run Astro CLI commands (e.g. astro add, astro check)
```

## Architecture

This is an **Astro 6** project using **Tailwind CSS v4** (via the `@tailwindcss/vite` plugin — no `tailwind.config.*` file; config lives in CSS).

**Routing**: Astro uses file-based routing under `src/pages/`. Each `.astro` file becomes a page route.

**Styling**: Tailwind is imported once via `src/styles/input.css` (`@import "tailwindcss"`) and pulled into pages that need it. No global stylesheet is injected in the layout — pages must import it explicitly.

**Layout pattern**: `src/layouts/Layout.astro` wraps pages with the base HTML shell (head, title "Tirtey Reisen", favicon). Pages use `<Layout>` and inject content via the `<slot />`.

**TypeScript**: Strict mode (`astro/tsconfigs/strict`). Type stubs for Astro are in `.astro/types.d.ts`.
