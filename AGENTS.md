# Agent Instructions & Guidelines (AGENTS.md)

This document contains instructions, engineering guidelines, and operational boundaries for AI Coding Assistants (Agents) working on this codebase.

## 🧑‍💻 Status & Scope

- **Status**: `APPROVED`
- **Ownership**: Principal Lead Architect & Engineering Team

---

## 🛑 Strict Engineering Rules

All code contributions and agents MUST strictly adhere to the following rules:

1. **Section Isolation**: Never redesign or implement multiple homepage sections in a single task. Tackle sections atomically.
2. **SEO Stability**: Never change existing SEO URLs without a corresponding approved migration entry in `docs/SEO-MIGRATION.md`.
3. **Fact Integrity**: Never invent ASDM statistics, accreditations, student placements, trainer profiles, or marketing claims. Use only approved data from `docs/CONTENT-INVENTORY.md` or official assets.
4. **Asset Compliance**:
   - Never use remote placeholder images (e.g. via `unsplash` urls or placeholder sites) in production components.
   - Use only local approved files located in `public/assets/`.
5. **No Direct Copying**: Never copy layouts, markup, css, assets, or branding elements from reference websites (e.g. Stripe, Apple, Linear, IIDE). Use them only as abstract design guides.
6. **Performance First**:
   - Prefer semantic, static, and server-rendered HTML.
   - Avoid unnecessary client-side JavaScript or bulky animation libraries.
7. **Accessibility & Layout**:
   - Every component must be responsive (mobile-first) and accessible (WCAG 2.2 AA).
   - Ensure all image components have explicit sizes to prevent CLS.
8. **Operational Hygiene**:
   - Every completed task must update the `docs/TASKS.md` and root `CHANGELOG.md`.
   - Do not modify approved components unless the current task explicitly requires changes to them.
   - Do not begin visual homepage implementation until the design system in `docs/DESIGN-SYSTEM.md` is approved.
9. **Phase 6 Design System Lock**:
   - Future sections must use tokens from `src/styles/tokens/` and primitives from `src/components/ui/`.
   - New one-off visual styles require documented justification before implementation.
   - Do not add remote fonts, remote placeholder images, heavy animation dependencies, or frontend frameworks without approval.
   - Keep homepage work atomic: implement only the single section explicitly requested by the owner.
10. **Phase 6.2 Brand Correction Lock**:

- Red is the primary ASDM brand/action colour.
- Purple is a controlled secondary accent.
- Blue must not be used for primary buttons, links, tabs, focus rings, CTAs, or active navigation states.
- Black-background logo files are prohibited in header and footer.
- The approved SVG logo set under `public/assets/brand/` must be used for visible shell logo work.

11. **Homepage Section Registry Lock**:
    - The homepage is built section by section.
    - The registered section order and names may only be changed with explicit owner approval.
    - Each section must preserve the ASDM Signature Design System.

---

## ⚙️ Development Guidelines

- **TypeScript**: Strict mode must remain active. Avoid type assertions (`as any`, `as unknown`) unless absolutely necessary.
- **Linting**: Ensure code changes have no warnings or errors when running `npm run lint`.
- **Formatting**: Format code with Prettier before submitting (`npm run format`).
- **Styles**: Use scoped CSS inside Astro components. Ensure shared tokens are extracted into CSS variables under `src/styles/` rather than adding inline ad-hoc rules.
- **Testing**: Add test specs under `src/tests/` or in colocated `*.test.ts` files. Run `npm run test` to verify.
