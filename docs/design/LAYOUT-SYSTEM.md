# Layout and Spacing System

Status: `PHASE 6 FOUNDATION IMPLEMENTED`
Last updated: 2026-08-01

## Token Philosophy

Layout identity comes from a 4px spacing scale, fluid gutters, restrained containers, and controlled line lengths. Not every section should become full width; full-bleed layouts require a visual reason.

## Core Tokens

- Header height: `--header-height`
- Reading width: `--reading-width`
- Heading width: `--heading-width`
- Content width: `--content-width`
- Standard container: `--container-standard`
- Wide container: `--container-wide`
- Maximum visual width: `--container-max`
- Page gutters: `--sp-gutter`
- Section padding: `--sp-section`
- Compact section padding: `--sp-section-compact`

## Grid Rules

- Desktop: use 12-column thinking inside standard or wide containers.
- Tablet: reduce complexity and favor 2-column grids only when content remains readable.
- Mobile: one-column flow with stable touch targets and no horizontal overflow.
- Card grids: use repeatable minmax tracks and consistent gaps.

## Alignment Rules

- Headings should stay under `--heading-width`.
- Paragraphs should stay under `--reading-width`.
- Use Stack and Cluster primitives for vertical rhythm and inline grouping.
- Edge-to-edge exceptions belong to media, immersive tools, or approved storytelling sections only.
