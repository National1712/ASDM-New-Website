# Mobile Experience Strategy (MOBILE-EXPERIENCE.md)

This document details mobile-first usability parameters, navigation patterns, and performance constraints.

---

## 📱 Mobile UX Guidelines

- **Header Behaviour**: Sticky minimal layout containing the brand logo, a hamburger menu, and a phone call icon.
- **Navigation Behaviour**: Hamburger menu triggers a full-width overlay modal containing generous tap targets (minimum height 48px).
- **Hero Priority**: Text heading stacked above a static student group graphic. Ambient video loops are deactivated to save mobile bandwidth.
- **CTA Persistence**: Simple floating bottom button ("Book Demo") that animates cleanly when scrolled past the hero section.
- **Program Comparison**: Avoid side-by-side tables. Convert comparisons into collapsible vertical parameters.
- **Card Stacking**: Multi-column desktop grids collapse into single-column vertical stacks.
- **Accordions**: Enforce a minimum touch-target height of 48px for syllabus and FAQ headers.
- **Media Loading**: Native lazy loading active on all below-fold images. Specify dimensions in HTML to prevent Cumulative Layout Shift (CLS).
- **Video Behaviour**: Disable autoplay. Defer loading of video modal containers.
- **Form Behaviour**: Use standard input elements with labels stacked vertically. Avoid multi-step forms on mobile.
- **Horizontal Scroll**: Horizontal overflow scroll is allowed _only_ on touch-swipe card lists (such as the recruiter logo ribbon or student portfolio displays), indicated by a subtle gradient fade on the right margin.
- **Motion Reduction**: Respect prefers-reduced-motion media queries, deactivating scale zooms and entrance transitions.
- **Performance Constraints**: Target total mobile page weight under 300KB (compressed).
