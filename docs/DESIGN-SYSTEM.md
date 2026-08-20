# ASDM Signature Design System

Status: `APPROVED FOR PHASE 6 FOUNDATION`
Last updated: 2026-08-01

The ASDM Signature Design System is the single visual foundation for future ASDM pages. It combines Precision Editorial structure, red-led Digital Energy accents, and Progressive Institution credibility without copying reference sites or finalizing homepage sections.

## Direction

- Premium restraint is the base: neutral surfaces, strong type, deliberate spacing, and minimal decoration.
- Red is the primary brand/action colour and is used for orientation and decisions, not as a blanket background treatment.
- Purple is the controlled secondary accent.
- Blue is not used for primary buttons, links, tabs, focus rings, or CTAs.
- Typography and spacing create most of the identity.
- Dark charcoal surfaces are intentional, primarily for high-contrast sections and the global footer.
- Motion is lightweight, stateful, and respectful of `prefers-reduced-motion`.

## Token Files

- `src/styles/tokens/colors.css`
- `src/styles/tokens/typography.css`
- `src/styles/tokens/spacing.css`
- `src/styles/tokens/layout.css`
- `src/styles/tokens/effects.css`
- `src/styles/tokens/motion.css`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/styles/reset.css`
- `src/styles/utilities.css`

## Component Rule

Future sections must use approved tokens and primitives from `src/components/ui/`. New one-off styles require documented justification in `docs/DECISIONS.md` or the section task brief.

## Logo Rule

Header and footer must not use black-background logo files. The global shell uses SVG assets from `public/assets/brand/`: the primary logo on light header surfaces, the inverse white logo on the dark footer surface, and the symbol only for compact mark contexts.

## Homepage Boundary

The Phase 7 hero is approved only for the internal noindex `/homepage-preview` route. The public foundation homepage remains visually unchanged. Future homepage sections must follow `docs/homepage/HOMEPAGE-SECTION-REGISTRY.md`, use approved tokens and primitives, and preserve the ASDM Signature Design System.
