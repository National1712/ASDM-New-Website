# ASDM Signature Design System

Status: `APPROVED FOR WEBSITE UI WORK`
Last updated: 2026-08-21

Every new page, section, component, landing page, or UI change in the ASDM website must follow this design system unless an explicit project-level exception is approved.

Before implementing any frontend/UI task, developers and AI coding agents must read this document first.

## Brand Philosophy

ASDM should feel premium, modern, highly professional, sophisticated, technology-forward, conversion-focused, clean, spacious, and trustworthy.

The experience should be closer to premium technology products than a typical colourful coaching institute website: neutral-first surfaces, restrained brand colour, strong typography, precise spacing, and polished interaction details.

## Core Principle

Neutral surfaces, typography, borders, and whitespace create most of the premium feel. Brand colour is used strategically.

Red is the primary action colour. Use it for primary CTAs, selected states, important links, focus elements, small highlights, and meaningful interaction states. Do not make every heading, card, border, icon, or section red.

Purple is a controlled secondary accent. It may support badges, small decorative details, and secondary selected states, but it must never compete with red.

Blue must not be used for primary buttons, links, tabs, focus rings, CTAs, or active navigation states.

## Brand Colours

Use the semantic tokens in `src/styles/tokens/colors.css`.

- Primary red: `#E1262F`
- Primary hover: `#C91F28`
- Primary active: `#AD1821`
- Supporting purple: `#65429B`
- Warm accent: `#F06445`
- Dark charcoal/inverse surface: `#10121A`
- Primary neutral surfaces: white, near-white, subtle greys, and dark text

Approved token files:

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

Do not create a second token system. Add or adjust reusable variables only when the existing token architecture does not already cover the need.

## Typography

Use the existing Inter-compatible typography system from `src/styles/tokens/typography.css`. Do not introduce random font families or remote fonts.

Typography must feel premium and restrained:

- Display and hero text should be large, bold, and readable.
- Section headings should create clear hierarchy without becoming oversized.
- Body text needs comfortable line-height and readable measure.
- Labels and eyebrow text should be understated.
- Avoid excessive uppercase text.
- Letter spacing should remain token-driven and non-negative.

## Spacing

Use the 4px spacing foundation from `src/styles/tokens/spacing.css`.

Preferred values include `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `64`, `80`, and `96` pixels. Avoid arbitrary spacing such as `17px`, `23px`, or `37px` unless a specific visual or technical reason is documented.

## Layout

Header, hero, and major page sections must align to the same site-wide container system.

Use the approved content widths from `src/styles/tokens/layout.css`, especially `--container-standard`, `--container-wide`, `--sp-gutter`, and `--header-height`.

Never allow adjacent sections to use random unrelated max-widths. Maintain generous responsive gutters and prevent horizontal overflow.

## Radius, Borders, And Shadows

Use restrained radius from `src/styles/tokens/effects.css`.

- Cards and surfaces should usually stay at `8px` radius or less unless an approved component requires more.
- Buttons may be moderately rounded but should not feel playful.
- Prefer borders, contrast, and surface hierarchy over heavy shadows.
- Avoid glossy UI, dark drop shadows, excessive floating-card effects, neumorphism, and decorative gradient blobs.

## Surfaces And Gradients

Use white, near-white, subtle neutral grey, and intentional charcoal sections. Avoid unnecessary coloured backgrounds.

Brand gradients may be used only when intentional and restrained. Do not use random multi-colour gradients or make red-to-purple gradients the identity of every section.

## Logo Rules

Use actual ASDM logo assets from `public/assets/brand/`.

- Primary logo: use on white, light grey, and neutral surfaces.
- Inverse white logo: use only on genuinely dark charcoal surfaces.
- Symbol: use only for compact mark contexts.
- Never recreate the logo in text.
- Never distort, recolour, crop, or modify logo proportions.
- Black-background logo files are prohibited in header and footer.

Logo target sizing:

- Desktop header: `clamp(9.0625rem, 10.5vw, 9.6875rem)`
- Mobile header: approximately `8.25rem` to `8.75rem`
- Footer: approximately `10.5rem`
- Mobile footer: approximately `9.75rem`

## Buttons And Links

Primary CTA:

- Red background
- White text
- Premium padding
- Strong but restrained type
- Hover: `#C91F28`
- Active: `#AD1821`
- Accessible focus ring

Secondary CTA:

- Prefer neutral surface, subtle border, and dark text.
- Avoid multiple equally strong CTAs competing in one cluster.

Navigation links should use neutral text by default and red only for meaningful hover, focus, or selected states.

## Components

Prefer existing reusable primitives from `src/components/ui/`:

- `Button`
- `IconButton`
- `TextLink`
- `Badge`
- `Card`
- `Surface`
- `Tabs`
- `Input`
- `Select`
- `Textarea`
- `Checkbox`
- `Radio`
- `FormField`
- `Accordion`
- `Container`
- `Section`
- `Cluster`
- `Stack`
- `ResponsiveMedia`
- `Logo`

Do not create slightly different copies of existing components. New one-off styles require documented justification in `docs/DECISIONS.md` or the active task brief.

## Header Standard

The global header should remain premium, institutional, and conversion-focused.

- Desktop/tablet rendered height target: `76px` to `80px`
- Mobile rendered height target: `66px` to `68px`
- Surface: white or very subtle neutral
- Top accent: none by default; rely on logo, CTA, and hover accents for brand presence
- Border: refined bottom hairline
- Behaviour: sticky is acceptable when visually calm
- Logo: approved primary SVG on the left, visually dominant enough for institutional recognition
- Desktop nav: focused, neutral, medium-weight text grouped close to the logo
- Primary CTA: compact flat red `Enquire Now`
- Secondary utility: avoid desktop phone/divider clusters in the header
- Mobile: logo left, menu trigger right, no phone in the header bar, accessible drawer with nav links and Enquire/Call/WhatsApp actions

Do not use a red, purple, gradient, or heavily shadowed navbar.

## Content Discipline

ASDM uses a verified vs pending content discipline.

Do not invent placement numbers, student counts, salaries, certifications, university affiliations, rankings, reviews, trainer statistics, awards, partnerships, or marketing claims.

Use only approved content from `docs/CONTENT-INVENTORY.md`, `src/content/source/current-site/`, or approved local assets. If a claim is not already approved, leave it out or mark it internally for verification.

## Responsive Design

All components must work on large desktop, desktop, laptop, tablet, mobile, and small mobile.

Requirements:

- No horizontal overflow
- No text clipping
- No navigation collision
- No tiny tap targets
- Stable dimensions for fixed-format UI controls
- Explicit image dimensions to prevent CLS

## Accessibility

Maintain semantic HTML, keyboard navigation, visible focus states, accessible contrast, proper button/link semantics, and meaningful ARIA labels where necessary.

Interactive controls should have touch targets around `44px` or larger.

## Motion

Motion should be subtle and useful. Prefer `150ms` to `250ms` transitions using existing motion tokens. Avoid excessive animation, bouncing elements, distracting scroll effects, and unnecessary parallax.

Respect `prefers-reduced-motion` where motion is more than a simple state transition.

## Homepage Boundary

The homepage is built section by section. Follow `docs/homepage/HOMEPAGE-SECTION-REGISTRY.md`, preserve the registered order and names, and implement only the single section explicitly requested by the owner.

The public foundation homepage remains separate from the internal noindex `/homepage-preview` route until migration is approved.
