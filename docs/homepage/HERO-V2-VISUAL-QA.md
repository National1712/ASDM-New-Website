# Hero V2 Visual QA

Status: `PHASE 7.1 REVIEW`
Last updated: 2026-08-01

## Review Checklist

- Headline width: Targeted to approximately `740-800px` on desktop through a `49rem` max width.
- Line breaks: Natural wrapping with no forced `<br>` tags.
- First viewport: Desktop hero is vertically centered with CTA and trust line visible.
- CTA visibility: Primary and secondary CTAs remain above the fold at tested desktop sizes.
- Content-to-visual balance: Desktop grid uses an approximate `52/48` content/visual relationship.
- Background depth: Warm off-white base with subtle red edge glow, soft purple visual-side depth, and fine grid texture.
- Placeholder professionalism: Placeholder includes a 6:7 frame, internal safe area, geometric corners, restrained red-purple detail, and pending-artwork label.
- Mobile length: Copy appears first, CTA/trust line follow, placeholder stacks below.
- Header integration: Approved header is preserved.
- Typography consistency: H1 uses red-system typography with corrected size, line height, and project-safe zero tracking.
- Visual originality: No IIDE/TOPS shapes, assets, layouts, claims, source code, or copy are used.

## Screenshot Evidence

Saved under `docs/homepage/screenshots/hero-v2/`:

- `hero-v2-desktop-1440.png`
- `hero-v2-desktop-1280.png`
- `hero-v2-tablet-1024.png`
- `hero-v2-tablet-768.png`
- `hero-v2-mobile-390.png`
- `hero-v2-mobile-375.png`
- `hero-v2-mobile-320.png`
- `hero-v2-first-viewport.png`
- `hero-v2-typography-detail.png`
- `hero-v2-placeholder-detail.png`
- `hero-v2-viewport-checks.json`

## Measured Results

- 1440px desktop: 3-line H1, `64.08px` font size, `64.08px` line height, CTA and trust line visible, footer not visible.
- 1280px desktop: 3-line H1, `56.96px` font size, CTA and trust line visible, footer not visible.
- 1024px tablet: 3-line H1, balanced two-column layout, CTA and trust line visible.
- 390px mobile: 4-line H1, stacked actions, trust line visible, no horizontal overflow.
- 375px mobile: 4-line H1, stacked actions, trust line visible, no horizontal overflow.
- 320px mobile: 4-line H1, stacked actions, trust line visible, no horizontal overflow.
- Hero image count: `0`.
- Rejected BJP/ABVP asset usage: `false`.
- Extra homepage sections detected: `false`.

## Open Items

- Final custom ASDM hero artwork is still required before public launch.
- Owner should review the placeholder as an art-direction target, not as final photography.
