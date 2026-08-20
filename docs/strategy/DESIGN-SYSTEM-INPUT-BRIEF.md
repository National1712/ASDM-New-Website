# Design System Input Brief (DESIGN-SYSTEM-INPUT-BRIEF.md)

This brief outlines the layout, density, and interactive requirements the design system must support. It does not define final visual styling tokens.

---

## 🎨 Design System Requirements

### 1. Brand Perception & Visual Tone

- **Tone**: Professional, high-precision, clean, educational, trustworthy.
- **Whitespace**: Generous vertical paddings (section spacers between 96px and 128px) to establish a premium feel.
- **Contrast**: High contrast ratios on all text elements (minimum 4.5:1 for body copy).

### 2. Component Layout Frameworks

- **Max-Width Grid**: A consistent 1200px container width for all main content columns.
- **Interactive switcher components**: Support tab-selectors that switch active layout blocks without reloading.
- **Curriculum Accordions**: Support keyboard-accessible expand/collapse panels with touch targets of at least 48x48px.
- **Student Work Showcase Cards**: Layouts displaying screenshots with a clear border radius and subtitle tags.
- **Accreditation Badges Row**: Horizontal layouts that align small, unified monochrome SVG government logos.
- **Location Map Switchers**: Tabbed layouts that embed maps alongside campus contact details.

### 3. Mobile & Accessibility Constraints

- **Menu**: Hamburger drawer containing accordion navigation links.
- **Touch Targets**: Minimum 48px heights on all interactive buttons.
- **Motion restrictions**: Core variables must support immediate reduced-motion overrides.
- **Video**: Defer loading of video modal containers.
