# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at `http://localhost:4321`
- `npm run build` — build static site to `dist/`
- `npm run preview` — preview the production build locally

## Architecture

Single-page Astro site. All content lives in `src/components/` as individual Astro components, assembled in `src/pages/index.astro`. `src/layouts/Layout.astro` wraps the page with `<html>`, global styles, and the theme flash-prevention script.

### Theming

Dark/light mode uses CSS custom properties defined in `src/styles/global.css` under `:root` and `:root.dark`. Tailwind v4 is configured via `@custom-variant dark` in the same CSS file — there is no `tailwind.config.mjs`. The `<html>` element gets a `dark` class toggled by `Header.astro`. An inline script in `Layout.astro` reads `localStorage` before paint to prevent flash.

### Adding content

- **Sections:** Create a new `.astro` component in `src/components/`, import and add it to `src/pages/index.astro`. Add a `fade-in` class to the section element for scroll animation.
- **New pages:** Add a `.astro` file to `src/pages/` — Astro handles routing automatically.
- **Updating placeholder data:** Each component (Skills, Experience, Projects, Contact) has a data array at the top of its frontmatter — edit those directly.

## Deployment

Netlify. Pushing to `main` triggers a deploy automatically once the site is connected in the Netlify dashboard. Config is in `netlify.toml`.
