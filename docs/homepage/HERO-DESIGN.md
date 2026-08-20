# Hero Design

Status: `PHASE 7.1 IMPLEMENTED`
Last updated: 2026-08-01

## Concept

The hero uses a premium editorial split: direct course proposition on the left and a disciplined custom-artwork placeholder on the right. It follows the approved ASDM red-led design system, avoids blue-led action styling, and keeps the visual composition restrained.

## Layout

- Desktop: Approximately 52% copy and 48% visual.
- Tablet: Balanced two-column composition at 1024px; single-column stack below narrow tablet widths.
- Mobile: Copy first, primary CTA prominent, secondary CTA quieter, fact row wraps vertically, visual placeholder below copy.

## Visual System

- One 6:7 premium design placeholder for final ASDM hero artwork.
- One primary artwork frame, up to two supporting frame outlines, visible safe area, and subtle pending-artwork label.
- Controlled red/purple accents through tokens.
- Subtle line/grid texture through CSS only.
- No real/fake person, photo, card collage, glassmorphism, ratings, fake counters, brand marquees, certification badges, or competitor visual patterns.

## Motion

CSS-only restrained entry motion:

- Eyebrow enters subtly.
- H1 reveals as one block.
- Visual composition fades/translates.
- `prefers-reduced-motion` disables hero motion.
