# Responsive System

Status: `PHASE 6 FOUNDATION IMPLEMENTED`
Last updated: 2026-08-01

## Breakpoint Philosophy

Breakpoints are based on layout needs, not device brands. The system should be reviewed around `1440`, `1024`, `768`, `390`, and `320` pixel viewport widths.

## Rules

- Navigation switches to the mobile drawer at narrow layout widths.
- Typography uses `clamp()` for major display and heading scales.
- Containers use fluid gutters through `--sp-gutter`.
- Forms stack cleanly on mobile and preserve labelled controls.
- Media uses stable aspect-ratio wrappers.
- Touch targets should use `--touch-target` or an equivalent 44px to 48px minimum.
- Long labels must wrap without forcing horizontal overflow.
- Reduced motion must preserve information and state.

## Footer

Footer columns stack into a single column on small screens while preserving heading hierarchy and link grouping.
