# Asset Guidelines

Status: `PHASE 6 FOUNDATION UPDATED`
Last updated: 2026-08-01

## Production Rules

- Use local files from `public/assets/` only.
- Do not use remote placeholder images, stock-photo hotlinks, or CDN-hosted references in production components.
- Do not modify original local assets during audit or foundation work.
- Every image component must provide explicit dimensions or a stable aspect-ratio wrapper.
- Production font files must be WOFF2 and self-hosted only after licensing is documented.

## Current Phase 6 Usage

- `src/components/ui/Logo.astro` uses the approved SVG set under `public/assets/brand/`.
- Header usage resolves to `/assets/brand/asdm-logo-primary.svg` on light surfaces.
- Footer usage resolves to `/assets/brand/asdm-logo-white.svg` on the dark footer surface.
- Compact symbol usage resolves to `/assets/brand/asdm-symbol.svg`.
- `src/components/ui/ResponsiveMedia.astro` provides controlled image-ratio treatment.
- `/design-system` uses local sample media only and remains internal/noindex.

## Logo Rules

- Do not use `250x87 asdm logo.webp` in header or footer because it carries a visible black background.
- Do not reintroduce the temporary `250x87 asdm logo.png` fallback in the visible header or footer.
- Keep SVG logo dimensions explicit and width-controlled in CSS so aspect ratio is preserved and layout shift is avoided.
- Do not automatically remove logo backgrounds during implementation work.

## Future Additions

Any new media use must identify the source asset, intended page section, sizing requirements, consent status where relevant, and compression plan before public launch.
