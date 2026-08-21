# Changelog

All notable changes to the ASDM Website Redesign project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🚀 Status Board

- **Current Version**: `0.7.9-alpha.0`
- **Build Status**: `PASSING` (Phase 7.9 header menu trim validation)

## [0.7.9-alpha.0] - 2026-08-21

### Updated

- Removed `Brochure` from the shared main header navigation so it no longer appears in desktop or mobile menus.
- Preserved the existing header structure, CTA actions, dropdown behaviour, and homepage hero unchanged.

## [0.7.8-alpha.0] - 2026-08-21

### Updated

- Rebuilt the desktop global header from the current ASDM navigation hierarchy while avoiding the old live site's visual design.
- Restored the header navigation labels to `Home`, `About Us`, `Digital Marketing Courses`, `Placement`, `Contact Us`, and `Brochure`.
- Removed the rejected desktop phone number utility, vertical divider, top gradient accent line, and `Book Free Counselling` header CTA.
- Added a single compact red `Enquire Now` CTA and kept `Brochure` as a normal navigation item.
- Reworked the Digital Marketing Courses dropdown into a compact 420px menu using existing programme/location route candidates only.
- Switched to mobile navigation at `max-width: 1100px` to avoid crushing the long course label, while preserving drawer actions for `Enquire Now`, `Call ASDM`, and `WhatsApp`.
- Preserved the homepage hero unchanged.

## [0.7.7-alpha.0] - 2026-08-21

### Updated

- Rebuilt the global header composition into a premium institutional layout with a left logo/navigation zone and separated right-side utility zone.
- Added the exact 2px red-to-warm-to-purple top brand accent line while keeping the shell white with a restrained border and blur.
- Updated desktop/tablet header proportions to a 79px rendered shell with 150-165px logo sizing, 24px logo-to-navigation grouping, four focused primary links, and a compact Courses dropdown using existing route candidates only.
- Refined the phone/CTA cluster with a red phone icon, divider, and flat red `Book Free Counselling` button without gradients or heavy shadows.
- Tightened the mobile shell to 67px rendered height, kept the phone out of the mobile header, and preserved the drawer sequence requested by the owner.
- Preserved the homepage hero unchanged.

## [0.7.6-alpha.0] - 2026-08-21

### Updated

- Precision-corrected the global header to better match ASDM's approved information architecture and premium hero quality.
- Reworked desktop navigation to `Courses`, `About ASDM`, `Placements`, and `Contact`, removing the unimplemented `Resources` primary item from the header.
- Added a compact Courses dropdown using route candidates already documented in the project SEO/site architecture: advanced, professional, ecommerce, Ahmedabad, Surat, and all courses.
- Tightened header proportions to a 72px desktop shell and 68px mobile shell, refined logo sizing, phone utility treatment, CTA sizing, and restrained navigation focus/hover states.
- Normalized the typography token stack to the actual available system/inter-compatible stack instead of referencing unloaded local Inter font files.

## [0.7.5-alpha.0] - 2026-08-21

### Added

- Added `docs/AI-UI-INSTRUCTIONS.md` as a concise guardrail for future AI-assisted UI work.

### Updated

- Expanded `docs/DESIGN-SYSTEM.md` into the canonical ASDM visual reference covering brand philosophy, colours, typography, spacing, layout, logo use, components, header standards, responsive behaviour, accessibility, and content discipline.
- Refined the global header into a compact premium sticky shell with focused navigation, approved SVG logo treatment, subtle phone utility, red `Book Free Counselling` CTA, and polished mobile drawer actions.
- Updated primary navigation labels to match the approved header structure while preserving existing route targets.

---

## [0.7.4-alpha.0] - 2026-08-20

### Updated

- Rebuilt the internal `/homepage-preview` hero to match the owner-provided premium screenshot direction while preserving the approved ASDM design system.
- Updated hero copy to the AI-era Ahmedabad course positioning, added the two requested CTAs, and replaced the previous large proof band with a subtle three-item trust row.
- Reworked the right-side visual into a replaceable local student image, ASDM-inspired geometric background, independent HTML proof cards, and a restrained tools panel.
- Avoided unverified numeric placement, partner, salary, and batch claims in the hero until owner-approved records are available.

## [0.7.3-alpha.0] - 2026-08-20

### Updated

- Polished the global header with a premium white surface, larger approved SVG logo sizing, centered five-item navigation, red-led Brochure and phone CTAs, and matching mobile drawer actions.
- Updated primary navigation labels to match the requested classy header direction while preserving existing SEO route targets.
- Used the approved ASDM contact number from the local content source and kept the header within the red-led brand lock.

## [0.7.2-alpha.0] - 2026-08-05

### Added

- Created `TrustStrip.astro` containing the bottom trust stats row with a custom wave SVG divider.
- Generated and added a high-quality cutout student portrait (`student-hero.jpg`) inside the assets folder.

### Updated

- Re-architected `HeroSection.astro` to feature the Google/Meta rating social proof row, aligned typography with design system tokens (using `--fs-h1` and `--lh-heading`), corrected button shapes to match `/design-system` corner rounding, and added the bottom TrustStrip.
- Rebuilt `HeroVisual.astro` to render the red geometric background, cutout student portrait, floating outcome cards, and tools logo bar (all sized with design system tokens).
- Aligned `TrustStrip.astro` statistics and column text to match typography tokens (`--fs-statistics`, `--fs-body-sm`), replaced statement paragraphs with semantic `h3` headings (styled with `--fs-h3` and `--lh-heading`), and added `white-space: nowrap` to prevent text wrapping on statistics value layout columns.
- Updated `src/data/homepage/hero.ts` with exact cloned content, trust stats, tools, and social proof details.
- Updated `src/tests/homepage-hero.test.ts` assertions to validate the new photography assets and visual structure.

## [0.7.1-alpha.0] - 2026-08-01

### Added

- Added `HeroArtworkPlaceholder.astro` for the Phase 7.1 custom-artwork waiting state.
- Added the Phase 7.1 artwork brief and visual QA documentation.

### Updated

- Replaced the rejected Phase 7 hero composition with the approved typed hero copy, natural headline wrapping, and a restrained 52/48 desktop layout.
- Removed hero usage of `BJP-&-ABVP-Internship-1.webp` without deleting the source asset.
- Updated homepage hero tests and project documentation for the placeholder-based hero v2.

## [0.7.0-alpha.0] - 2026-08-01

### Added

- Added Phase 7 homepage section registry, build order, dependencies, and design rules.
- Added typed homepage hero content data in `src/data/homepage/hero.ts`.
- Added `HeroSection`, `HeroVisual`, and `HeroFactRow` components.
- Added internal noindex `/homepage-preview` route containing only the approved shell and hero.
- Added hero design, content, asset requirement, and review documentation.

### Updated

- Updated `ResponsiveMedia.astro` to support explicit image dimensions, loading, decoding, fetch priority, and sizes attributes.
- Updated project docs and AGENTS rules to lock section-by-section homepage implementation.

---

## [0.6.3-alpha.0] - 2026-08-01

### Added

- Added Phase 6.3 final SVG logo integration for primary, inverse, and symbol logo variants.
- Added compact logo-usage examples to the internal `/design-system` route.

### Updated

- Replaced visible temporary PNG logo usage with SVG brand assets in the global shell.
- Cleaned SVG logo exports by tightening viewBox values and removing embedded raster/mask export layers.
- Updated logo docs and tests to prevent PNG/WebP fallback usage in header/footer.

---

## [0.6.2-alpha.0] - 2026-08-01

### Added

- Added Phase 6.2 logo asset review and color QA documentation.
- Added `ADR-010: Red-Led ASDM Brand System and Logo Correction`.
- Added ASDM Brand Balance examples to the internal `/design-system` route.

### Updated

- Rebuilt the design tokens from blue-led to red-led ASDM brand colors with purple as controlled secondary accent.
- Updated buttons, links, badges, forms, tabs, header, mobile navigation, footer, and design-system showcase states to remove blue action styling.
- Replaced the black-background WebP logo usage with the PNG logo as a temporary development fallback.
- Documented the requirement for a transparent SVG or high-resolution transparent logo master.

---

## [0.6.0-alpha.0] - 2026-08-01

### Added

- Completed Phase 6 ASDM Signature Design System foundation.
- Added semantic token architecture for colors, typography, spacing, layout, effects, and motion.
- Added reusable Astro UI primitives under `src/components/ui/`.
- Added global header, desktop navigation, mobile navigation, footer, and neutral navigation data.
- Added `BaseLayout.astro` with metadata props, optional canonical, noindex support, skip link, landmarks, theme attribute, and global styles.
- Added internal `/design-system` route with noindex behavior and neutral sample component states.
- Added focused Vitest coverage for token presence, noindex status, remote asset prevention, and mobile navigation accessibility hooks.

### Updated

- Updated design, component, accessibility, asset, performance, plan, task, and decision documentation for the approved Phase 6 foundation.
- Replaced remote font loading with performance-safe local/system font strategy.
- Switched the logo primitive to use the local ASDM logo asset with explicit dimensions.

---

## [0.5.0-alpha.0] - 2026-08-01

### Added

- Completed **Phase 5 — ASDM Experience Strategy and Homepage Architecture Lock**.
- Generated 16 strategy files under `docs/strategy/`:
  - prioritized target audience profiles (`AUDIENCE-PRIORITIES.md`)
  - core website tasks, dependencies, success metrics (`WEBSITE-JOBS.md`)
  - current vs future positioning frameworks (`POSITIONING-FRAMEWORK.md`)
  - proposed program taxonomy (`PROGRAM-TAXONOMY.md` & `PROGRAM-COMPARISON-MODEL.csv`)
  - planned conversion hierarchies and CTA maps (`CTA-HIERARCHY.md`)
  - mapped proof architecture mapping (`PROOF-ARCHITECTURE.md`)
  - homepage purpose and local keyword alignments (`HOMEPAGE-PURPOSE.md`)
  - recommended and alternate section order frameworks (`HOMEPAGE-ARCHITECTURE.md`)
  - content budget limits (`HOMEPAGE-CONTENT-BUDGET.md`)
  - mobile experience strategy parameters (`MOBILE-EXPERIENCE.md`)
  - content and asset dependency matrix (`HOMEPAGE-DEPENDENCIES.csv`)
  - homepage exclusions register (`HOMEPAGE-EXCLUSIONS.md`)
  - experience decision log register (`EXPERIENCE-DECISIONS.md`)
  - design system input brief (`DESIGN-SYSTEM-INPUT-BRIEF.md`)
  - unified strategic summary report (`ASDM-EXPERIENCE-STRATEGY.md`)
- Mapped **ADR-008: Strategy Before Styling** inside decisions log.

### Updated

- Corrected remaining visual specs and definitive claims inside competitor audit folders (`ASDM-EXPERIENCE-PRINCIPLES.md`, `DRAFT-HOMEPAGE-FRAMEWORK.md`, etc.).
- Updated `docs/PLAN.md`, `docs/TASKS.md`, `docs/PROJECT-BRIEF.md`, `docs/SITE-ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `docs/COMPONENTS.md`, and `docs/PERFORMANCE-BUDGET.md`.

---

## [0.4.1-alpha.0] - 2026-08-01

### Added

- Completed **Phase 4.1 — Competitor Research Evidence QA and Correction**.
- Generated evidence and QA logs under `docs/competitors/`: `COMPETITOR-EVIDENCE-LOG.csv`, `OBSERVATION-RECOMMENDATION-REGISTER.csv`, and `PERFORMANCE-TEST-RUNS.csv`.
- Created [ASDM-EXPERIENCE-PRINCIPLES.md](file:///C:/xampp/htdocs/asdm-new-web/docs/competitors/ASDM-EXPERIENCE-PRINCIPLES.md) establishing 9 core design guidelines.
- Created [COMPETITOR-RESEARCH-CONFIDENCE.md](file:///C:/xampp/htdocs/asdm-new-web/docs/competitors/COMPETITOR-RESEARCH-CONFIDENCE.md) detailing coverage statistics and corrections.
- Formulated [ADR-007: Evidence-Based Competitor Research](file:///C:/xampp/htdocs/asdm-new-web/docs/DECISIONS.md) inside decisions log.

### Updated

- Corrected unmeasured Core Web Vitals speed assertions and generalised placement claims.
- Expanded representative page coverage across IIDE, Digital Sandip Academy, and TOPS Technologies.
- Updated draft frameworks (`DRAFT-HOMEPAGE-FRAMEWORK.md`, `DRAFT-COURSE-PAGE-FRAMEWORK.md`, `DRAFT-LOCATION-PAGE-FRAMEWORK.md`) to include explicit Evidence IDs and visual safeguards.
- Updated `docs/PLAN.md`, `docs/TASKS.md`, `docs/PROJECT-BRIEF.md`, `docs/SITE-ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `docs/COMPONENTS.md`, and `docs/PERFORMANCE-BUDGET.md`.

---

## [0.4.0-alpha.0] - 2026-08-01

### Added

- Completed **Phase 4 — Competitor UX, Content and Landing-Page Architecture Audit**.
- Studied IIDE, Digital Sandip Academy, and TOPS Technologies, creating 13 CSV spreadsheet databases under `docs/competitors/`.
- Created draft visual and structural layout frameworks under `docs/competitors/`: `DRAFT-HOMEPAGE-FRAMEWORK.md`, `DRAFT-COURSE-PAGE-FRAMEWORK.md`, and `DRAFT-LOCATION-PAGE-FRAMEWORK.md`.
- Added `ADR-006: Reference Research Without Design Copying` inside decisions log, protecting visual originality.
- Created `docs/assets/FONT-LICENSING-REGISTER.csv` to track checked-in typography license statuses.

### Updated

- Revised Phase 3 duplicate asset statuses from `DO NOT USE` to `DUPLICATE REVIEW` to comply with owner review policies.
- Updated project roadmap and task trackers in `docs/PLAN.md` and `docs/TASKS.md`.
- Corrected verified core page count terminology in previous documents to "12 verified core pages and 6 verified representative blog samples".

---

## [0.3.0-alpha.0] - 2026-08-01

### Added

- Completed **Phase 3 — Local Asset Inventory, Classification and Content-Source Lock**.
- Scanned 319 local files recursively, computing MD5 hashes and custom binary dimension parsing for JPG/PNG/WebP/GIF/SVG.
- Generated `ASSET-INVENTORY.csv`, `DUPLICATE-ASSETS.csv`, `SECTION-ASSET-MAP.csv`, and `ASSET-RENAMING-PLAN.csv` under `docs/assets/`.
- Exported factual `src/data/asset-manifest.json` and matching `src/types/assets.ts` Type definitions.
- Formulated `CONTENT-SOURCE-LOCK.md` and `MISSING-ASSETS.md` to guide future photography shoots and lock claims verification hierarchies.
- Logged `ADR-005: Local Asset First and Non-Destructive Media Workflow` in Decisions log.

---

## [0.2.1-alpha.0] - 2026-08-01

### Added

- Completed **Phase 2.1 — Audit Quality Assurance, Evidence Validation and Correction**.
- Generated split URL data lists under `docs/audits/`: `verified-core-pages.csv`, `blog-url-inventory.csv`, `sitemap-only-urls.csv`, and `redirects-and-errors.csv`.
- Created [AUDIT-EVIDENCE-LOG.csv](file:///C:/xampp/htdocs/asdm-new-web/docs/audits/AUDIT-EVIDENCE-LOG.csv) mapping 12 core commercial records to source files and extraction dates.
- Created [AUDIT-CONFIDENCE-REPORT.md](file:///C:/xampp/htdocs/asdm-new-web/docs/audits/AUDIT-CONFIDENCE-REPORT.md) detailing coverage statistics and uncertainties.
- Formulated [ADR-004: Audit Evidence and Confidence Standard](file:///C:/xampp/htdocs/asdm-new-web/docs/DECISIONS.md) inside decisions log.

### Updated

- Regenerated `current-url-inventory.csv` with status, final_url, redirect_chain, fetch_status, and evidence_status columns. All sitemap-only posts are cleared of speculative metadata.
- Cleaned and regenerated `claims-verification.csv`, `CLAIMS-SUMMARY.md`, and `claims.md` to reclassify student statistics, experience years, and partner numbers under `REQUIRES INTERNAL BUSINESS PROOF` status.
- Refined `program-inventory.csv` to map explicit/inferred flags and manual confirmation checkboxes.
- Standardized `conversion-inventory.csv` and `media-reference-inventory.csv` to leave hidden implementation details and media resolutions blank or labeled `UNKNOWN`.
- Updated warning notices in `docs/SEO-MIGRATION.md` and `docs/SITE-ARCHITECTURE.md` declaring route decisions as candidates subject to traffic reviews.

---

## [0.2.0-alpha.0] - 2026-08-01

### Added

- Completed **Phase 2 — Current Website Content, URL, SEO, and Claims Audit**.
- Mapped all 202 sitemap and non-sitemap URLs to a structured URL classification dataset under `docs/audits/current-url-inventory.csv`.
- Created detailed program, claims, search-intent, metadata, and schema matrices.
- Extracted 12 structured markdown summaries under `src/content/source/current-site/` (including program syllabus outlines and contact directories).
- Documented student outcome mismatches, duplicate FAQ schema objects, and physical location discrepancies in dedicated reports under `docs/audits/`.
- Written automated node verification script under `scripts/audit/` to parse sitemap parameters.

### Updated

- Scaffolding route maps inside `docs/SITE-ARCHITECTURE.md` to reflect Mumbai Online campus target.
- Redirect matrix entries inside `docs/SEO-MIGRATION.md` for duplicate and obsolete URLs.
- Statistic verification guidelines and ADR index inside `docs/PROJECT-BRIEF.md` and `docs/DECISIONS.md`.

---

## [0.1.0-alpha.0] - 2026-08-01

### Added

- Initialized Astro project with minimal template.
- Configured ESLint Flat Config with Astro & TypeScript plugin support.
- Configured Prettier with `prettier-plugin-astro` plugin.
- Added strict TypeScript compilation compiler options in `tsconfig.json`.
- Added standard scripts in `package.json` for dev, build, lint, format, typecheck, and test.
- Set up directory scaffolding for `src/components`, `src/layouts`, `src/pages`, `src/content`, `src/data`, `src/styles`, `src/utilities`, `src/types`, `src/tests`, `src/scripts`, and `src/documentation`.
- Created structured assets directories under `public/assets/` containing `.gitkeep` files.
- Added initial `src/pages/index.astro` template containing a project-initialised message and `noindex` tag.
- Added comprehensive documentation templates inside `docs/` and root folders.
