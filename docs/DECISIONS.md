# Architecture Decision Records (ADR) (DECISIONS.md)

This document tracks major architectural decisions, their context, alternatives considered, and consequences.

## 📈 Status

- **Status**: `IN PROGRESS`
- **Last Updated**: 2026-08-01

---

## 🧾 ADR Index

- [ADR-001: Selection of Astro as Frontend Framework](#adr-001-selection-of-astro-as-frontend-framework)
- [ADR-002: Vitest for Unit Testing](#adr-002-vitest-for-unit-testing)
- [ADR-003: Reconcile Placement Statistics and Remove Direct Income Claims](#adr-003-reconcile-placement-statistics-and-remove-direct-income-claims)
- [ADR-004: Audit Evidence and Confidence Standard](#adr-004-audit-evidence-and-confidence-standard)
- [ADR-005: Local Asset First and Non-Destructive Media Workflow](#adr-005-local-asset-first-and-non-destructive-media-workflow)
- [ADR-006: Reference Research Without Design Copying](#adr-006-reference-research-without-design-copying)
- [ADR-007: Evidence-Based Competitor Research](#adr-007-evidence-based-competitor-research)
- [ADR-008: Strategy Before Styling](#adr-008-strategy-before-styling)
- [ADR-009: ASDM Signature Design System](#adr-009-asdm-signature-design-system)
- [ADR-010: Red-Led ASDM Brand System and Logo Correction](#adr-010-red-led-asdm-brand-system-and-logo-correction)

---

## ADR-001: Selection of Astro as Frontend Framework

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

ASDM requires a high-performance web presentation platform that delivers instant page load times (Core Web Vitals LCP < 1.8s) and is search engine optimize friendly (SEO). A typical Single Page App (SPA) framework (like client-side React) sends too much JavaScript, which hurts performance on low-end mobile networks in India (3G/4G).

### Decision

Use **Astro** for static page output.

- SSG compiles pages to pure HTML/CSS.
- Minimal client-side JS is delivered, dramatically reducing LCP.
- High SEO compliance with custom head attributes and metadata layouts.

### Consequences

- Interactive components requiring client-side logic must use islands (`client:load`, etc.) or custom native Web Components.
- We must maintain strict build pipeline checks to ensure JS size budgets are not exceeded.

---

## ADR-002: Vitest for Unit Testing

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

We need a lightweight, fast, and modern unit testing suite that integrates seamlessly with Vite/Astro build tooling.

### Decision

Use **Vitest**.

- Shared configuration with Vite/Astro.
- ESM support out of the box.
- Extremely fast execution speeds.

### Consequences

- We do not need heavy Jest boilerplate configurations.

---

## ADR-003: Reconcile Placement Statistics and Remove Direct Income Claims

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

The current public website presents significant data contradictions (e.g. 50k placements vs. 7k placements; 200k students vs. 50k students). It also lists aggressive income guarantees (e.g. "Earn 50,000+ as freelancer in 3 months") which raise legal compliance risks under Indian advertising standards (ASCI).

### Decision

1. **Reconciliation**: We will centralize and standardize all placement and student enrollment figures inside unified Astro layout components. The values must match verified administrative records.
2. **ASCI Compliance**: We will remove all direct income guarantees from the copy.
3. **Location Clarity**: Mumbai targeting will be clearly labeled as "100% Live Online Training" to reflect the absence of a physical campus in Mumbai.

### Consequences

- Copywriting and design execution phases will only use the unified verified numbers.
- Prevents misleading claims while maintaining strong conversion hooks through skills mastery.

---

## ADR-004: Audit Evidence and Confidence Standard

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

To prevent incorrect assumptions, errors, or placeholder copy during the migration, we require a strict evidence standard for all page, route, and claim audits.

### Decision

We enforce the following rules for all website auditing deliverables:

1. **Sitemap Discovery Limitation**: Discovering a URL path inside a sitemap XML or navigation list is not proof of page verification. Sitemap-only URLs must not have generated metadata, headings, or content classifications.
2. **Claim Verification Restriction**: The repetition of a marketing claim or statistic on the public website is not proof of a business fact. Contradictory metrics or claims involving student placement percentages, earnings, or partner counts must default to `REQUIRES INTERNAL BUSINESS PROOF` until official registries are provided.
3. **GSC Redirect Prerequisite**: No redirect path, deletion, or canonical consolidation is considered approved. All options are labeled as candidates pending Google Search Console traffic, backlink profile, and stakeholder reviews.
4. **Form/Media Integrity**: Hidden implementation details (like backend CRM routing or SMS OTP dispatch actions) and missing media image dimensions remain blank or marked `UNKNOWN`.

### Consequences

- The audit dataset is highly reliable, with clear boundaries between confirmed facts and inferred suggestions.
- Prevents the generation of dummy/fake copy.

---

## ADR-005: Local Asset First and Non-Destructive Media Workflow

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

We need to manage local assets in `public/assets/` safely and non-destructively, ensuring that sitemap references and social channels are only treated as discovery references, original local media remains the preferred production source, and consent is tracked separately.

### Decision

1. **Local Assets First**: Original local media under `public/assets/` is the preferred production source.
2. **Social and Website URLs as Discovery References Only**: Social-media and remote website media links represent reference points for discovery only, not production sources.
3. **Non-Destructive Inspection**: Asset scanning and metadata extraction must never modify, compress, crop, or rename original files during inventory stages.
4. **Layout-Driven Derivation**: Production derivatives (compressed, resized, or optimized formats) will only be generated after final layout requirements are approved by stakeholders.
5. **Separate Consent Tracking**: Public-use approvals and model consent constraints will be tracked independently from technical suitability logs to prevent legal issues.

### Consequences

- Assures full asset preservation during project execution.
- Production build pipelines will use the clean `asset-manifest.json` dataset to plan layouts.

---

## ADR-006: Reference Research Without Design Copying

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

We study selected education competitors and premium digital-product reference websites to understand layout practices and user expectations. However, to prevent copyright, compliance, and originality issues, we must establish strict boundaries to avoid copying or reproducing competitor designs.

### Decision

1. **Research Boundary**: Competitor research is used exclusively to understand user journeys, page layouts, and market conventions.
2. **Principles, Not Templates**: Premium references (Apple, Stripe, etc.) provide abstract layout principles, not design templates.
3. **Distinctive Layouts & Visuals Protected**: Distinctive layouts, copywriting headlines, illustrations, motion scripts, and branding elements must not be copied.
4. **Business Purpose Mapped**: Every ASDM component built must have a documented business purpose.
5. **Authentic Differentiation**: ASDM differentiation must be visible in real student work, practical learning project cases, campus local experience descriptions, and verified placement outcome tables.
6. **ASDM-Specific Rationale**: Final visual design choices require documented, ASDM-specific rationale.

### Consequences

- Assures complete visual and code originality for the redesigned site.
- Comply with copyright and intellectual property standards.

---

## ADR-007: Evidence-Based Competitor Research

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

To prevent speculative layout decisions or copying unverified claims, we require all competitor findings and recommendations to be rigorously mapped to verified evidence.

### Decision

We enforce the following rules for all competitor auditing deliverables:

1. **Source Page Requirement**: Every material competitor observation must link to a specific source page URL inside our evidence log.
2. **Observation-Recommendation Isolation**: Competitor observations, research inferences, and ASDM recommendations must remain strictly separate in distinct fields.
3. **No Assumed Effectiveness**: Common usage of a layout or pattern by competitors (e.g. course grids, calendar popups) is not proof of conversion effectiveness. All recommendations must be qualified as requiring testing.
4. **Performance Measurement Guard**: Visual inspection is not Core Web Vitals measurement. No metrics (LCP, CLS, etc.) can be claimed without documented test runs; visual anomalies are labeled as potential risks only.
5. **Business Justification**: Competitor patterns require ASDM-specific business justification before adoption.
6. **Originality & Value Review**: Final design choices require documented originality, accessibility, performance, and user-value reviews.

### Consequences

- Assures all design proposals are grounded in verifiable research.
- Protects the project from copying low-quality or non-converting competitor conventions.

---

## ADR-008: Strategy Before Styling

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

To prevent premature decorative choices (such as specific colors, typography weight styles, or animations) from overriding the structural and conversion goals of the ASDM website, we must formally lock down information and experience strategy before initiating the visual design system.

### Decision

We enforce the following rules for all website experience architecture planning:

1. **Strategy Priority**: The experience architecture (audience priority, jobs framework, and CTA maps) is locked before visual tokens (hex codes, typography assets) are created.
2. **Fact & User Support**: Design and layout choices must directly support verified user anxieties and business objectives mapped during the audit phase.
3. **Hypothesis Standard**: Competitor conventions (such as course switchers, floating widgets) are classified as hypotheses requiring ASDM testing, not proven facts.
4. **Dependency Constraints**: Content availability and local asset inventory boundaries directly shape component structure and limits.
5. **SEO Integrity**: Core SEO keyword mappings and branch routes (e.g. separate Ahmedabad and Naroda pages) must be structurally preserved.
6. **No Visual Compensations**: Visual style elements cannot be used to compensate for an unclear, non-intuitive page taxonomy or layout order.

### Consequences

- Ensures components built are functional and support conversions.
- Minimizes redesign cycles during styling stages.
- Preserves local organic search positions.

---

## ADR-009: ASDM Signature Design System

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

We need a consistent, responsive, high-performance visual design system that reflects ASDM's premium educational brand values and keeps components reusable across all future landing pages.

### Decision

We enforce the following rules for all visual styling and component design:

1. **ASDM Originality**: The design system is completely original to ASDM, avoiding direct copying of Apple, Stripe, Linear, Framer, or Vercel layouts.
2. **Premium Restraint Base**: Base containers and pages use editorial spacing, generous vertical whitespace, and high typographic contrast.
3. **Intentional Accent Color**: Brand primary color is used selectively to highlight CTAs and interactive focus indicators, preventing colored background bloat.
4. **Typographic Identity**: Visual hierarchy is created primarily through typography (Plus Jakarta Sans for display, Inter for body) and clean padding ratios.
5. **Reusable UI Primitives**: Components must work across future landing pages and be built from primitives under `src/components/ui/`.
6. **Controlled Motion**: Motion remains lightweight, purposeful, dependency-free, and immediately honors `prefers-reduced-motion`.
7. **Accessibility First**: Accessibility and performance are core visual-quality requirements, including visible focus, skip links, labelled controls, semantic landmarks, and low JavaScript weight.
8. **Approved Section Inputs**: Homepage sections must use approved tokens and primitives.
9. **One-Off Style Guard**: New one-off visual styles require documented justification before implementation.

### Consequences

- Guarantees complete visual and semantic consistency across sub-pages.
- Maximizes page speeds by eliminating heavy libraries and remote production font requests.
- Prevents layout shifts.

---

## ADR-010: Red-Led ASDM Brand System and Logo Correction

- **Status**: `APPROVED`
- **Date**: 2026-08-01

### Context

The owner rejected the Phase 6 blue-led direction and black-background logo treatment.

### Decision

1. Red is the primary ASDM brand and action color.
2. Purple is retained as a controlled secondary accent.
3. Blue is not used for primary buttons, links, tabs, focus rings, CTAs, or active navigation states.
4. Black and charcoal support typography and selected inverse surfaces.
5. Header and footer must not use black-background logo files.
6. The current PNG logo is a temporary development fallback only.
7. A transparent SVG or high-resolution transparent raster logo is required for final approval.

### Consequences

- Future sections must inherit the red-led tokens.
- Any reintroduction of blue as a brand/action color requires a new owner decision.
- Logo replacement remains a required brand asset task before public launch.
