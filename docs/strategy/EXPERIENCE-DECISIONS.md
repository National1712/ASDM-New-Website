# Experience Decision Log (EXPERIENCE-DECISIONS.md)

This log tracks architectural and design strategy decisions for the ASDM website redesign.

---

## 🧾 Decision Register

### DEC-001: Establish Program Switcher Component

- **Decision**: Implement an interactive, tab-based switcher component on the homepage to segment Career Programs from Certification Skills.
- **Status**: `ACCEPTED FOR DESIGN SYSTEM`
- **Evidence**: IIDE interactive selector tabs (`EVI-IIDE-HOME`).
- **Business Rationale**: Prevents choice paralysis and directs graduates and professionals to appropriate paths.
- **User Rationale**: Simplifies comparison of duration and outcomes.
- **SEO Implication**: Provides clean internal architecture links to Course Detail pages.
- **Performance Implication**: Pure CSS switcher layout reduces JS dependencies.
- **Accessibility Implication**: Enforce standard ARIA tab controls.
- **Risk**: Low.
- **Reversal Condition**: Low engagement tracking.
- **Owner Approval**: Required.

### DEC-002: Distinguish Ahmedabad HO and Naroda Routes

- **Decision**: Create separate, dedicated contact and location landing sub-pages for the Ahmedabad HO and Naroda branches rather than merging them under a single Ahmedabad path.
- **Status**: `ACCEPTED FOR DESIGN SYSTEM`
- **Evidence**: TOPS branch targeting structures (`EVI-TOPS-AMD`).
- **Business Rationale**: Naroda has a distinct student draw; separating them improves localized conversions.
- **User Rationale**: Provides clear landmarks and transport instructions for each campus.
- **SEO Implication**: Target highly specific local search intent (e.g. `digital marketing course Naroda`).
- **Performance Implication**: None.
- **Accessibility Implication**: Independent physical map overlays.
- **Risk**: Medium (thin content risk if batch details are identical).
- **Reversal Condition**: Consolidated search volumes.
- **Owner Approval**: Required.

### DEC-003: Mumbai Online Campaign Disclosure

- **Decision**: Explicitly label all Mumbai target marketing copy and campaigns as "100% Live Online Campus" to prevent misleading local users about a physical classroom branch.
- **Status**: `PROPOSED`
- **Evidence**: ASDM business coordinates audit.
- **Business Rationale**: Prevents student dropoffs and legal compliance issues.
- **User Rationale**: Clarifies study commitments before registration.
- **SEO Implication**: Align targets to online course keywords.
- **Risk**: Low.
- **Owner Approval**: Required.
