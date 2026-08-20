# Motion System

Status: `PHASE 6 FOUNDATION IMPLEMENTED`
Last updated: 2026-08-01

## Principles

- Motion explains hierarchy or state.
- Motion must not delay information.
- No scroll hijacking.
- No constant decorative movement.
- No animation dependency in Phase 6.
- Prefer `opacity`, `transform`, `background-color`, `border-color`, and `color`.
- Respect `prefers-reduced-motion`.

## Tokens

- Instant: `--mot-instant`
- Fast: `--mot-fast`
- Standard: `--mot-standard`
- Deliberate: `--mot-deliberate`
- Entrance easing: `--ease-entrance`
- Exit easing: `--ease-exit`
- Emphasis easing: `--ease-emphasis`

## Current Usage

Buttons, links, cards, tabs, accordions, and mobile navigation use short CSS transitions or small native JavaScript state changes.
