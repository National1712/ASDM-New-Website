# Accessibility Specification

Status: `PHASE 7.1 HERO V2 IMPLEMENTED`
Last updated: 2026-08-01

## Implemented

- Skip link in `src/layouts/BaseLayout.astro`.
- Semantic `header`, `nav`, `main`, and `footer` landmarks.
- Visible `:focus-visible` global outline using the semantic focus token.
- Mobile navigation exposes `aria-expanded`, `aria-controls`, `role="dialog"`, and Escape close behavior.
- Mobile navigation moves focus into the drawer on open and returns focus to the trigger on Escape.
- Form primitives support explicit labels through `FormField`.
- Accordion and tabs use native buttons with ARIA disclosure or tab state.
- Reduced-motion preferences are respected in `src/styles/reset.css`.
- Colors are semantic and designed for WCAG 2.2 AA contrast targets.
- `/homepage-preview` contains one semantic H1 in the hero.
- Hero CTAs are keyboard-accessible links with visible inherited focus states.
- Hero facts are exposed as a labelled list.
- Hero visual placeholder is exposed as a single labelled graphic and does not depend on image alt text while final artwork is pending.
- Hero motion is CSS-only and disabled under `prefers-reduced-motion`.
- Hero text wraps safely on narrow mobile viewports.

## Ongoing Manual Checks

- Keyboard tab order at each new section.
- Screen-reader review for any future dynamic content.
- Text zoom at 200 percent.
- Color contrast after real photography or campaign artwork is introduced.
- Final screen-reader review after owner-approved production hero photography is selected.
