# ASDM Experience Principles (ASDM-EXPERIENCE-PRINCIPLES.md)

This document establishes the 9 core experience principles that will govern the design system, page frameworks, and components execution for the ASDM website redesign.

---

## 🧾 Experience Principles Index

1. [Confidence Through Restraint](#1-confidence-through-restraint)
2. [Real Work Over Generic Claims](#2-real-work-over-generic-claims)
3. [Programs Made Easy to Compare](#3-programs-made-easy-to-compare)
4. [Proof Near Decisions](#4-proof-near-decisions)
5. [Ahmedabad-First Authenticity](#5-ahmedabad-first-authenticity)
6. [Mobile Counselling Without Interruption](#6-mobile-counselling-without-interruption)
7. [Motion That Explains, Not Decorates](#7-motion-that-explains-not-decorates)
8. [Fast by Default](#8-fast-by-default)
9. [Consistency Across Landing Pages](#9-consistency-across-landing-pages)

---

## 1. Confidence Through Restraint

- **User Problem Solved**: Clutter and chaotic marketing banners that distract from core program details.
- **Business Purpose**: Build a premium, high-value educational brand identity.
- **Reference Evidence**: Apple and Stripe principles (`EVI-IIDE-HOME`).
- **ASDM-Specific Interpretation**: Establish value through clean space, generous padding, and high typographic contrast.
- **Design Implication**: Use neutral background layers and consistent margins to guide typographic visual balance.
- **Content Implication**: Keep taglines and descriptions short (maximum 3 lines per paragraph).
- **Performance Implication**: Zero runtime JS required for grid layouts.
- **Mobile Implication**: Collapse grids into clean single-column stacks with consistent margins.
- **What to Avoid**: Avoid cluttered, colorful card backgrounds or visual color noise.
- **Validation Method**: Design review against style guide contrast checkers.

---

## 2. Real Work Over Generic Claims

- **User Problem Solved**: Lack of credibility on outcomes and placement statistics.
- **Business Purpose**: Formally demonstrate practical skill acquisition to parents and students.
- **Reference Evidence**: TOPS Technologies partner logs (`EVI-TOPS-AMD`).
- **ASDM-Specific Interpretation**: Highlight live client campaigns and real website builds designed by students.
- **Design Implication**: Grid showcase layouts containing screenshot previews of student work.
- **Content Implication**: Short summaries detailing the project brief and student role.
- **Performance Implication**: Lazy load screenshots. Use WebP/AVIF file formats.
- **Mobile Implication**: Stacks portfolios into a simple swipeable horizontal list.
- **What to Avoid**: Never use stock vectors or generic laptop placeholder graphics.
- **Validation Method**: Admin verification of student portfolio URLs.

---

## 3. Programs Made Easy to Compare

- **User Problem Solved**: Choice paralysis when trying to choose between digital marketing tracks.
- **Business Purpose**: Help students select the optimal program for their qualification level (PG vs. short certification).
- **Reference Evidence**: IIDE interactive selector tabs (`EVI-IIDE-HOME`).
- **ASDM-Specific Interpretation**: Provide a clear switcher tab highlighting duration, batch type, and outcome differences.
- **Design Implication**: Segmented toggle control panels shifting focus between program detail cards.
- **Content Implication**: Keep program cards focused on three facts: duration, target student, and physical vs online availability.
- **Performance Implication**: Pure CSS tab controls or lightweight static markup.
- **Mobile Implication**: Stack tabs vertically or convert selector into horizontal swipe controls.
- **What to Avoid**: Avoid massive side-by-side matrices on narrow viewports.
- **Validation Method**: User path click analytics monitoring; ASDM validation is required.

---

## 4. Proof Near Decisions

- **User Problem Solved**: Hesitation when submitting personal contact details on lead forms.
- **Business Purpose**: Maximize conversion rates on counseling registrations.
- **Reference Evidence**: IIDE syllabus gateway form (`EVI-IIDE-HUB`).
- **ASDM-Specific Interpretation**: Align trust credentials directly alongside form action areas.
- **Design Implication**: Government-approved logo credentials positioned in proximity to form submit buttons.
- **Content Implication**: Support copy: "Skill India Accredited Partner. Your data is secure."
- **Performance Implication**: SVG format for badges under 5KB.
- **Mobile Implication**: Badges remain stacked cleanly below the primary button.
- **What to Avoid**: Placing trust badges exclusively on remote header sections.
- **Validation Method**: A/B form conversion testing; requires ASDM validation.

---

## 5. Ahmedabad-First Authenticity

- **User Problem Solved**: General online courses feel distant; students target local physical classrooms.
- **Business Purpose**: Capture dominant local search intent.
- **Reference Evidence**: TOPS Technologies local campus photo integrations (`EVI-TOPS-AMD`).
- **ASDM-Specific Interpretation**: Highlight the local physical campus environment (Ahmedabad HO, Naroda, Surat Vesu).
- **Design Implication**: Branch-specific sub-pages showing actual lab photos, landmark guides, and local map layers.
- **Content Implication**: Details on parking space, Metro proximity, and physical branch office lines.
- **Performance Implication**: Lazy-load Google Map iframe scripts.
- **Mobile Implication**: Prioritize direct tap-to-call branch manager buttons.
- **What to Avoid**: Avoid thin city pages with duplicate syllabus descriptions.
- **Validation Method**: Local organic search ranking monitoring; requires ASDM validation.

---

## 6. Mobile Counselling Without Interruption

- **User Problem Solved**: Mobile viewport screens covered by overlapping modals and sticky callouts.
- **Business Purpose**: Provide a fast, usable mobile experience.
- **Reference Evidence**: IIDE popup overlay issues on mobile portrait (`EVI-IIDE-HOME`).
- **ASDM-Specific Interpretation**: Restrict modals to user-triggered clicks only. No automated timer popups.
- **Design Implication**: Simple sticky bottom CTA bar that animates cleanly when scrolled. Close target targets must be 48x48px minimum.
- **Content Implication**: Minimal form copy (max 5 fields).
- **Performance Implication**: Zero runtime layout recalculations.
- **Mobile Implication**: Full-screen modal overlay triggers only on "Book Seat" click.
- **What to Avoid**: Do not trigger automated page entry overlays or intrusive cookie banners.
- **Validation Method**: Mobile accessibility audit (WCAG 2.2 AA).

---

## 7. Motion That Explains, Not Decorates

- **User Problem Solved**: Visual lag, scroll distraction, and accessibility triggers for motion-sensitive users.
- **Business Purpose**: Keep layout execution lightweight and fast.
- **Reference Evidence**: Framer scroll reveal scroll lag (`EVI-IIDE-HOME`).
- **ASDM-Specific Interpretation**: Enforce strict motion boundaries.
- **Design Implication**: Subtle scale/opacity transforms on interactive hovers only.
- **Content Implication**: Text remains completely stationary.
- **Performance Implication**: CSS-only transitions (`transition: transform 0.2s`).
- **Mobile Implication**: Disable all hover effects.
- **What to Avoid**: Avoid scroll-triggered javascript parallax libraries.
- **Validation Method**: Lighthouse accessibility audit.

---

## 8. Fast by Default

- **User Problem Solved**: Page load drops on low-bandwidth mobile networks.
- **Business Purpose**: Retain traffic and satisfy Core Web Vitals targets.
- **Reference Evidence**: Digital Sandip Academy image weights (`EVI-DSA-HOME`).
- **ASDM-Specific Interpretation**: Pre-compile all assets.
- **Design Implication**: Define layout boundaries in code to eliminate Cumulative Layout Shift (CLS).
- **Content Implication**: Use self-hosted vector graphics for icons.
- **Performance Implication**: Serve next-gen AVIF/WebP assets using Astro's image compilation.
- **Mobile Implication**: Load smaller mobile-sized asset versions.
- **What to Avoid**: Never check uncompressed raw PNG files into public assets.
- **Validation Method**: Automated Lighthouse build testing.

---

## 9. Consistency Across Landing Pages

- **User Problem Solved**: Disjointed brand experience when navigating between course listings and city pages.
- **Business Purpose**: Present a credible corporate presentation.
- **Reference Evidence**: TOPS Technologies city template duplication (`EVI-TOPS-AMD`).
- **ASDM-Specific Interpretation**: Build pages using a modular layouts structure.
- **Design Implication**: Uniform typographic layout variables across all sub-pages.
- **Content Implication**: Structure syllabus descriptions under canonical routes.
- **Performance Implication**: Shared CSS tokens are cached on first load.
- **Mobile Implication**: Consistent header/footer transitions.
- **What to Avoid**: Designing custom ad-hoc visual components for single city routes.
- **Validation Method**: Visual regression tests.
