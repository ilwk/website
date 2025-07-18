# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Starts local dev server at localhost:4321 with host binding
- `npm run build` - Type checks with `astro check` then builds for production
- `npm run preview` - Preview production build locally
- `astro check` - Type check the codebase (runs automatically before build)

## Architecture Overview

This is an Astro-based blog/portfolio website with the following key architectural patterns:

### Content Collections
- **Blog posts**: `src/content/blog/` - Markdown files with frontmatter (title, description, date, draft)
- **Work experience**: `src/content/work/` - Timeline entries (company, role, dateStart, dateEnd)
- **Projects**: `src/content/projects/` - Portfolio items (title, description, date, demoURL, repoURL)

All collections are type-safe via Zod schemas defined in `src/content/config.ts`.

### Component Architecturecl
- **Layout**: `src/layouts/PageLayout.astro` - Main page wrapper
- **Components**: `src/components/` - Reusable Astro components (no React/Vue)
- **Pages**: `src/pages/` - File-based routing with dynamic routes for content collections

### Styling & Configuration
- **Tailwind CSS v4**: Configured via Vite plugin (`@tailwindcss/vite`)
- **Typography**: Uses `@tailwindcss/typography` for markdown content
- **Theme**: Shiki syntax highlighting with "one-dark-pro" theme
- **Path aliases**: `@/*` maps to `./src/*` in TypeScript

### Key Files
- `src/consts.ts` - Site configuration constants
- `astro.config.ts` - Astro configuration with MDX, sitemap, and Tailwind
- `src/content/config.ts` - Content collection schemas
- `src/utils/index.ts` - Utility functions

### Integrations
- MDX support for enhanced markdown
- Sitemap generation
- RSS feed at `/rss.xml`
- TypeScript with strict configuration