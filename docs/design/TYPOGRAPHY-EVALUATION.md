# Typography Evaluation

Status: `PHASE 6 TYPOGRAPHY SELECTED`
Last updated: 2026-08-01

## Candidates Reviewed

- Inter: strong body readability, excellent UI numerals, broad operating-system fallback compatibility, open-source and self-hostable.
- Manrope: expressive and modern, but slightly softer for long-form education content.
- Plus Jakarta Sans: strong display personality, but using a second family adds font weight and delivery complexity.
- Geist: precise and technical, but less familiar on varied Indian student devices.
- Instrument Sans: editorial and refined, but less proven as an all-purpose UI family.
- Sora: distinctive display quality, but too stylized for restrained institutional use.
- DM Sans: readable and friendly, but less sharp for ASDM's premium-technical ambition.

## Selected Direction

Use an Inter-compatible single-family direction through semantic tokens:

- Display and headings: `--font-display`
- Body and UI: `--font-body`
- Current implementation: system fallbacks with Inter naming, no remote font request.
- Future option: add a self-hosted Inter variable WOFF2 file after license and size review.

## Rationale

Inter best balances display confidence, body readability, numeral quality, small-screen rendering, variable-font support, licensing safety, and performance. A single family reduces visual noise and avoids unnecessary font payload in Phase 6.

## Token Coverage

Implemented semantic scales include display, heading, body, label, caption, eyebrow-compatible, button, navigation, and statistics-ready values through `src/styles/tokens/typography.css`.
