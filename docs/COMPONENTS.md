# Components Catalog

Status: `PHASE 7.1 HERO V2 COMPLETE`
Last updated: 2026-08-01

## Global Shell

- `src/layouts/BaseLayout.astro`: metadata, optional canonical, noindex, theme attribute, skip link, header, footer, and main landmark.
- `src/components/global/SiteHeader.astro`: sticky-capable global header with the primary ASDM SVG logo, desktop navigation, red primary CTA, and mobile navigation trigger.
- `src/components/global/DesktopNavigation.astro`: token-based primary navigation list from `src/data/navigation.ts`.
- `src/components/global/MobileNavigation.astro`: accessible mobile drawer with `aria-expanded`, Escape close, focus handoff, and body-scroll lock.
- `src/components/global/SiteFooter.astro`: high-contrast global footer using the inverse ASDM SVG logo, neutral non-claim content groups, and restrained red accent detail.

## UI Primitives

The foundational primitives live under `src/components/ui/`:

- `Accordion.astro`
- `Badge.astro`
- `Button.astro`
- `Card.astro`
- `Checkbox.astro`
- `Cluster.astro`
- `Container.astro`
- `Divider.astro`
- `Eyebrow.astro`
- `FormField.astro`
- `IconButton.astro`
- `Input.astro`
- `Logo.astro`
- `Radio.astro`
- `ResponsiveMedia.astro`
- `Section.astro`
- `Select.astro`
- `Stack.astro`
- `Surface.astro`
- `Tabs.astro`
- `TextLink.astro`
- `Textarea.astro`

`Logo.astro` supports `variant: 'primary' | 'inverse' | 'symbol'` and `context: 'header' | 'footer' | 'showcase'` so the same SVG source set can render at stable shell and documentation sizes without distortion.

`ResponsiveMedia.astro` supports explicit dimensions, loading, decoding, fetch priority, and sizes attributes for LCP-safe hero imagery while preserving aspect-ratio wrappers.

## Homepage Components

- `src/components/homepage/HeroSection.astro`: section-level homepage hero composition with one semantic H1, editable typed content, CTA hierarchy, and responsive layout.
- `src/components/homepage/HeroVisual.astro`: restrained learning-in-action visual composition using the Phase 7.1 artwork placeholder while final owner-approved artwork is pending.
- `src/components/homepage/HeroArtworkPlaceholder.astro`: CSS-only 6:7/4:5 artwork placeholder with safe area, red-purple structure, grid texture, and no stock/person/claim imagery.
- `src/components/homepage/HeroFactRow.astro`: compact neutral fact row for classroom learning, live projects, and career support.

## Usage Rules

- Use semantic Astro components before adding section-specific markup.
- Keep component CSS scoped.
- Keep form controls explicitly labelled through `FormField` or visible labels.
- Do not add framework dependencies for primitive interactions.
- Do not create homepage-specific slices beyond the one section explicitly approved in the current task.
- Do not use blue as the primary button, link, tab, focus, or CTA color.
- Do not use black-background logo files in the header or footer.
- Do not use the retired temporary PNG logo fallback in the visible global shell.
