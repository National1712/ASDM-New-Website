# Premium Reference Principles (PREMIUM-REFERENCE-PRINCIPLES.md)

This document outlines structural, visual, and architectural principles analyzed from industry-leading digital product websites. We translate these into practical guidelines for the ASDM redesign.

---

##  Apple

- **Exact Page Reviewed**: `https://www.apple.com/iphone-15-pro/`
- **Exact Observation**: Large hero graphic, massive display typography scale, and very short three-word feature descriptions (e.g. "Titanium. Strong. Light. Pro.").
- **Why Relevant to ASDM**: Guides landing page layouts, emphasizing the main tagline while using white space to direct attention to details.
- **Why Direct Copying Would Fail**: Apple is showcasing a high-end physical product; ASDM is an educational institute. Students require curriculum details, batch timings, and local classroom context that Apple's layout excludes.
- **Performance Risk**: Large raster graphics cause LCP delay if sizes and aspect ratios are not pre-defined in code.
- **Accessibility Risk**: Squeezing text overlays into large hero images can fail WCAG AA contrast standards.
- **ASDM-Specific Interpretation**: Keep tags and taglines short. Use Outfit/Inter typography for main titles, while retaining standard sections for syllabus details.

---

## 💳 Stripe

- **Exact Page Reviewed**: `https://stripe.com/en-in/payments`
- **Exact Observation**: Skewed diagonal background dividers (`transform: skewY(-12deg)`), max-width 1200px container columns, and subtle micro-translate card animations on hover.
- **Why Relevant to ASDM**: Guides spacing and alignment rules for course cards and feature blocks.
- **Why Direct Copying Would Fail**: Stripe's diagonal shapes and blue/purple hues represent a corporate payments tool. Copying them directly would make the ASDM brand feel derivative.
- **Performance Risk**: Skewed CSS transforms can trigger GPU redraws and scroll lag on older mobile devices if layout constraints are not specified.
- **Accessibility Risk**: Screen readers must be able to parse columns sequentially when layout flows are shifted.
- **ASDM-Specific Interpretation**: Adopt the max-width 1200px container layout. Keep background shapes flat and simple, using primary colors (e.g., brand blue) strictly on primary CTA buttons.

---

## 📐 Linear

- **Exact Page Reviewed**: `https://linear.app/features`
- **Exact Observation**: Dark slate theme, thin 1px border lines around cards, outfit font family, and generous letter-spacing.
- **Why Relevant to ASDM**: Guides typographic hierarchy and subtle card design rules.
- **Why Direct Copying Would Fail**: Linear is a software tool targeting tech developers. A cold, dark-mode-first aesthetic lacks the warm, welcoming presentation required by local students and parents visiting an academy.
- **Performance Risk**: CSS-only layouts have zero runtime performance risk.
- **Accessibility Risk**: Dark-gray text on dark backgrounds often drops below the WCAG 4.5:1 contrast ratio.
- **ASDM-Specific Interpretation**: Adapt the precise 1px border design for layout grids, but use a clean, high-contrast light theme.

---

## 🎨 Framer

- **Exact Page Reviewed**: `https://www.framer.com/showcase/`
- **Exact Observation**: Subtle zoom transforms on card images and card border color changes on cursor hover.
- **Why Relevant to ASDM**: Guides hover states and interactive selectors.
- **Why Direct Copying Would Fail**: Framer's site uses complex interactive layout animations that cause Cumulative Layout Shift (CLS) if copied blindly.
- **Performance Risk**: JS-driven scroll triggers block the main rendering thread.
- **Accessibility Risk**: Users with vestibulocochlear preferences require reduced-motion overrides.
- **ASDM-Specific Interpretation**: Enforce CSS-only transitions (`transition: transform 0.2s`). Disable hovers on mobile portrait viewports.

---

## ⚡ Vercel

- **Exact Page Reviewed**: `https://vercel.com/templates`
- **Exact Observation**: Monochrome black-and-white grid template layout with consistent borders and clear focus rings around links.
- **Why Relevant to ASDM**: Guides layout consistency across city sub-pages.
- **Why Direct Copying Would Fail**: The monochrome look is too clinical for a career training center. It needs student portraits and campus interior details.
- **Performance Risk**: Fast default render.
- **Accessibility Risk**: Requires distinct focus states on all interactive elements.
- **ASDM-Specific Interpretation**: Use a consistent layout template for all local campus landing pages to present a credible brand, but inject local branch details (maps, manager contact) to keep them relevant.
