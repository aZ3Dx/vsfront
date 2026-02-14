# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VSFront is a static marketing website for Visual Studio, a photography and audiovisual production agency based in Peru. Built with **Astro 5** + **React 19** + **TypeScript** + **Tailwind CSS v4**.

## Commands

- **Dev server:** `pnpm dev` (runs with `--host` for external access)
- **Build:** `pnpm build` (runs `astro check` then `astro build`)
- **Preview build:** `pnpm preview`
- **Type check only:** `npx astro check`
- **Format:** `npx prettier --write .` (configured with astro, tailwind, and import-organizing plugins)

## Architecture

### Routing & Pages
- Astro file-based routing in `src/pages/`
- Dynamic routes: `servicios/[slug].astro`, `servicios/[slug]/portafolio.astro`, `blogs/[slug].astro`
- Routes use `getStaticPaths()` pulling from constants or content collections

### Data Layer
- **No database or API** — all data is hardcoded in `src/consts/`
- `services.ts` (~50KB) is the primary data source containing all service definitions, images, and portfolio media
- `clients.ts`, `comments.ts`, `questions.ts`, `socialMedias.ts` for other static data
- Blog posts are MDX files in `src/content/blogs/` using Astro content collections (schema in `src/content.config.ts`)

### Component Organization
- `src/sections/` — full-width page sections (Header, Footer, Hero, Services, Comments, etc.)
- `src/components/` — reusable UI components (Button, Gallery, Member, BlogCard, etc.)
- `src/layouts/Layout.astro` — base page wrapper with head, header, footer, WhatsApp button
- Most components are `.astro`; React (`.tsx`) used only when client-side interactivity is needed

### Media & Images
- External CDN: `https://assets.visualstudio.pe` (configured via `MEDIA_URL` in `.env`)
- Image variants: `_thumb.webp` for thumbnails, `_highres.webp` for full resolution
- `MediaFile` type: `{ url, type: 'image'|'video', alt, orientation: 'landscape'|'portrait' }`
- SVGs imported as React components via `*.svg?react` syntax (vite-plugin-svgr)

### Styling
- Tailwind CSS v4 with custom theme in `src/styles/globals.css`
- Fonts: Outfit Variable (body), Fraunces Variable (headings)
- Brand colors: beige1 (`#faeee0`), beige2 (`#ffe6c9`), midnight (`#191d24`)

### Animations
- GSAP + ScrollTrigger for scroll-triggered animations (inline `<script>` blocks in Astro components)
- Embla Carousel for auto-playing image carousels

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

## Language
- All UI text is in **Spanish**. HTML lang is `es`.
- No i18n library — single-language site.
