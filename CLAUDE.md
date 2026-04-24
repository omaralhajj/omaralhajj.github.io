# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at `http://localhost:4321`
- `npm run build` — build static site to `dist/`
- `npm run preview` — preview the production build locally

## Architecture

Personal portfolio site built with Astro 5 + Tailwind v4 + TypeScript. No framework components (React/Vue/Svelte) — everything is `.astro` or plain TypeScript.

```
src/
  components/     # One .astro file per section/widget
  content/blog/   # MDX blog posts (Astro content collections)
  i18n/           # Translation strings (en.ts, da.ts, index.ts)
  layouts/        # Layout.astro — single shared HTML shell
  pages/          # index.astro (home), blog/index.astro, blog/[slug].astro
  styles/         # global.css — design tokens + base styles
  terminal/       # Interactive terminal widget (pure TypeScript)
    commands/     # One file per command (CatCommand.ts, etc.)
    registry.ts   # CommandRegistry — maps name → Command
    types.ts      # TerminalContext, Command base class
    tree.ts       # FileNode / DirectoryNode type definitions
    VirtualFileTree.ts  # In-memory VFS with path tracking
```

`src/pages/index.astro` assembles all section components in order: Header → Hero → About → Skills → Experience → Projects → BlogPreview → BlogSidebar → Contact → Footer.

`src/layouts/Layout.astro` wraps pages with `<html>`, global CSS, theme flash-prevention, language persistence, and the Terminal overlay.

### Routing

- `/` — home page (`src/pages/index.astro`)
- `/blog` — post list (`src/pages/blog/index.astro`)
- `/blog/[slug]` — individual post (`src/pages/blog/[slug].astro`)

## Theming

Dark/light mode uses CSS custom properties in `src/styles/global.css`:

- Light tokens: defined on `:root`
- Dark tokens: defined on `:root.dark`
- Key tokens: `--color-bg`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-card`, `--color-hover-surface`, `--color-accent` (`#6366f1` light / `#818cf8` dark)

Tailwind v4 is configured via `@custom-variant dark (&:where(.dark, .dark *))` in `global.css` — there is **no** `tailwind.config.mjs`. Use `dark:` Tailwind utilities or reference the CSS variables directly.

The `<html>` element gets a `dark` class toggled by a script in `Header.astro`. An inline script in `Layout.astro` reads `localStorage['theme']` before first paint to prevent flash. Persist the preference with `localStorage.setItem('theme', 'dark' | 'light')`.

## Internationalization (i18n)

Two languages: English (`en`) and Danish (`da`). Default: English. Persisted in `localStorage['lang']`.

**Translation files:** `src/i18n/en.ts` and `src/i18n/da.ts` export plain objects. `src/i18n/index.ts` exports a `getTranslations(lang)` helper.

**In templates:** add a `data-i18n="key"` attribute to any element whose text should be translated. A script in `Layout.astro` queries all `[data-i18n]` elements and swaps their `textContent` when the language is toggled.

**Adding a translation key:**
1. Add the key + English string to `src/i18n/en.ts`
2. Add the key + Danish string to `src/i18n/da.ts`
3. Add `data-i18n="your_key"` to the element in the component

**Existing key namespaces:** nav_*, hero_*, about_*, skills_*, experience_*, projects_*, blog_*, contact_*

## Scroll Animations

Add `class="fade-in"` to any section or element. An Intersection Observer in `src/pages/index.astro` adds the `visible` class when the element enters the viewport, which triggers the opacity + translateY transition defined in `global.css`.

Active nav-link highlighting is also handled in `index.astro`: each section needs an `id` matching a nav link's `href` fragment, and the nav link needs `data-nav="section-id"`.

## Blog (Content Collections)

Posts live in `src/content/blog/` as `.mdx` files. The collection schema is in `src/content.config.ts`.

**Frontmatter schema:**
```typescript
{
  title: string
  description: string
  date: Date
  draft?: boolean   // default false — draft posts are excluded from listings
}
```

`BlogPreview.astro` shows the top 3 posts (mobile only, `xl:hidden`). `BlogSidebar.astro` shows the top 5 posts in a sticky sidebar (desktop only, `hidden xl:flex`). Both filter `draft: true`.

## Components

All components are data-only (no external API calls at build time). Data arrays live at the **top of the frontmatter** (`---` block) of each component — edit them directly.

| Component | Key data | Notes |
|-----------|----------|-------|
| `Header.astro` | `navLinks[]` | Theme + language toggles; sticky |
| `Hero.astro` | Inline text | Name, tagline, body paragraph |
| `About.astro` | Inline text | Two paragraphs, i18n |
| `Skills.astro` | `skillGroups[]` | Spotlight card effect on hover |
| `Experience.astro` | `experience[]` | Optional `highlights[]` per role |
| `Projects.astro` | `projects[]` | Optional `devblog` URL per project |
| `Contact.astro` | `links[]` | Copy-to-clipboard button |
| `Footer.astro` | Current year | Auto-computed |
| `Terminal.astro` | Commands via registry | See Terminal section |

**Spotlight card effect** (used in Skills and Projects): a `::before` pseudo-element with a radial gradient follows the cursor via a `mousemove` listener that sets `--mouse-x` / `--mouse-y` CSS custom properties on the card.

## Terminal Widget

An interactive terminal overlay accessible via **Ctrl+K** or clicking the terminal button. Built entirely in TypeScript with no external dependencies.

### Architecture

```
Terminal.astro          # DOM, state machine (closed/open/minimized), drag logic
terminal/types.ts       # TerminalContext interface, Command abstract base class
terminal/registry.ts    # CommandRegistry — instantiates + executes commands
terminal/VirtualFileTree.ts  # In-memory FS, tracks cwd, resolves paths
terminal/tree.ts        # FileNode / DirectoryNode type definitions
terminal/commands/      # One file per command
```

### Adding a new command

1. Create `src/terminal/commands/MyCommand.ts`:
   ```typescript
   import type { TerminalContext } from '../types';
   import { Command } from '../types';

   export class MyCommand extends Command {
     name = 'mycmd';
     description = 'What it does';

     execute(args: string[], ctx: TerminalContext): void {
       ctx.print('output line');
       ctx.printHTML('<span style="color:#818cf8">colored</span>');
     }
   }
   ```
2. Import and register it in `src/terminal/registry.ts`.

**`TerminalContext` methods:** `print(text)`, `printHTML(html)`, `clear()`, `close()`, `commands` (Map), `vfs` (VirtualFileTree instance).

### Virtual File System

Defined in `src/terminal/VirtualFileTree.ts`. The tree is hardcoded:
```
~/
  about.txt
  contact.txt
  experience/
    experience.txt
  projects/
    projects.txt
```

File content can be a `string` or a `() => string` function (evaluated at read time). To add files/directories, edit the tree initialisation in `VirtualFileTree.ts`.

### Terminal features

- **Tab completion:** command names and file/directory paths (for `cd`), with common-prefix completion and double-tab to list all matches
- **History:** Arrow Up/Down navigates command history
- **Drag:** title bar is draggable, clamped to viewport

## Styling Conventions

- Use Tailwind utility classes for layout and spacing.
- Use CSS custom properties (`var(--color-*)`) for theme-aware colours — do not hardcode hex values in components.
- The `.col` class (defined in `global.css`) centres content with `max-width: var(--content-width)` and responsive horizontal padding — use it as the inner wrapper for section content.
- Fonts: `--font-sans` (Inter) for body text, `--font-mono` (JetBrains Mono) for code, terminal output, section labels, and the site logo.
- Blog prose styles live in the `.prose` class in `global.css`.

## Deployment

GitHub Actions workflow at `.github/workflows/deployment.yml` builds and deploys on push to `main`. The site is hosted at `https://alhajj.dev` (CNAME configured). Site base URL is set in `astro.config.mjs`.
