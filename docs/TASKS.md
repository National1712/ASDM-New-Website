# Tasks Tracking Board

Status: `PHASE 7.2 HERO CLONE COMPLETE`
Last updated: 2026-08-05

## Summary

- Complete: 13
- In progress: 0
- Not started: 4
- Blocked: 0

## Completed Tasks

### TASK-001: Repository Foundation

Status: `COMPLETE`

Initialized Astro, TypeScript, ESLint, Prettier, source folders, asset folders, and foundation index route.

### TASK-002: Website Content, URL, SEO and Claims Audit

Status: `COMPLETE`

Audited current site content, routes, claims, metadata, schemas, and conversion paths.

### TASK-003: Audit Quality Assurance and Correction

Status: `COMPLETE`

Corrected speculative audit outputs, added evidence logs, and marked unresolved claims as requiring owner proof.

### TASK-004: Local Asset Inventory and Content Lock

Status: `COMPLETE`

Scanned local assets, generated asset manifest data, and documented non-destructive asset rules.

### TASK-005: Competitor UX and Premium Reference Audit

Status: `COMPLETE`

Mapped competitor and premium-reference principles without copying layouts, code, copy, or assets.

### TASK-006: Competitor Research QA

Status: `COMPLETE`

Separated observations from recommendations and added evidence-based research safeguards.

### TASK-007: Experience Strategy Foundation

Status: `COMPLETE`

Created strategy inputs while keeping unsupported claims out of implementation.

### TASK-008: Phase 6 Design System, Header and Footer Foundation

Status: `COMPLETE`

Created ASDM Signature System docs, semantic CSS tokens, global style architecture, UI primitives, internal `/design-system` page, global header, global footer, base layout, navigation data, and focused tests.

### TASK-008A: Phase 6.2 Red-Led Brand System and Logo Correction

Status: `COMPLETE`

Rebuilt blue-led tokens into red-led ASDM brand tokens, retained purple as secondary accent, rejected the black-background WebP logo for UI use, selected the PNG logo as a temporary development fallback, updated header/footer/design-system states, and documented logo replacement requirements.

### TASK-008B: Phase 6.3 Final SVG Logo Integration and Shell Polish

Status: `COMPLETE`

Validated and cleaned the primary, inverse, and symbol SVG logo files, integrated them through `Logo.astro`, replaced the visible temporary PNG fallback in the global shell, added compact logo-usage guidance to `/design-system`, and captured final logo QA screenshots.

### TASK-009: Phase 7 Homepage Section Registry and Premium Hero

Status: `COMPLETE`

Locked the homepage section registry and build order, created the internal noindex `/homepage-preview` route, implemented only the hero section using approved ASDM tokens and primitives, avoided unverified claims and competitor assets, and documented hero content, design, asset requirements, and review notes.

### TASK-009A: Phase 7.1 Hero Typography, Composition and Placeholder Redesign

Status: `COMPLETE`

Replaced the rejected hero implementation with exact approved hero copy, natural H1 wrapping, a restrained 52/48 desktop composition, and an intentional CSS-only final-artwork placeholder. The public homepage remains unchanged and no Trust Strip or later homepage section was created.

### TASK-009B: Phase 7.2 Hero Cloned Section Redesign

Status: `COMPLETE`

Redesigned the `/homepage-preview` hero section to visually clone the owner-provided design. Generated a transparent-style student cutout image, built interactive floating cards showing course statistics, integrated the tools logo bar, and built the bottom TrustStrip with wavy edge. Aligned all section typography (heading scales, stats, labels) to strict design system tokens (e.g. `--fs-h1`, `--fs-h3`, `--fs-statistics`), enforced semantic H3 elements on TrustStrip statements to resolve line-height spacing issues, prevented stat-value layout column wrapping, and restored the approved button shape corner radius (`var(--radius-md)`). All Vitest checks passed.

### TASK-009C: Phase 7.3 Premium Global Header Polish

Status: `COMPLETE`

Refined only the global header to follow the approved ASDM Signature Design System with a premium white shell, enlarged approved SVG logo treatment, focused five-item navigation, red-led brochure and phone CTAs, and matching mobile drawer actions. Used the approved contact number from `src/content/source/current-site/contact.md` and avoided black-background logo assets, remote assets, or new visual dependencies.

### TASK-009D: Phase 7.4 Premium Hero Redesign From Owner Screenshot

Status: `COMPLETE`

Rebuilt only the internal homepage hero preview to follow the owner-provided premium education/technology composition: exact AI-era H1 hierarchy, value statement, long-form practical training description, red-led primary CTA, outlined counselling CTA, subtle three-item trust row, ASDM-inspired red geometric visual device, replaceable local student image, three independent HTML proof cards, and a restrained tools panel. Kept unverified numeric claims out of the hero until approved records are provided.

## Not Started

### TASK-010: Content Collection Setup

Status: `NOT STARTED`

Create typed content schemas only after owner-approved content fields are confirmed.

### TASK-011: Public Page Shell Migration

Status: `NOT STARTED`

Migrate public pages into `BaseLayout` when route and content decisions are approved.

### TASK-012: Owner-Selected Next Homepage Section

Status: `NOT STARTED`

Implement only the single section explicitly selected by the owner after Phase 7 hero review. Do not proceed automatically to Trust Strip.

### TASK-013: Launch Verification and Optimization

Status: `NOT STARTED`

Run full accessibility, browser, performance, and SEO verification before launch.
