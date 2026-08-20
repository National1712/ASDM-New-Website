# Draft Homepage Framework (DRAFT-HOMEPAGE-FRAMEWORK.md)

This document outlines the proposed research-backed layout sequence for the redesigned ASDM homepage. Every section includes explicit evidence references, business reasoning, and visual safeguards.

---

## 🗺️ Homepage Section Sequence & Wireframe Specifications

### 1. Brand & Career Promise (Hero Section)

- **Evidence IDs**: `EVI-IIDE-HOME`, `EVI-DSA-HOME`
- **ASDM-Specific Business Reason**: Establish ASDM as a premium training provider for digital skills immediately upon arrival, avoiding vague marketing jargon.
- **Content Dependency**: Confirmed course track names (Advanced Digital Marketing Program vs. E-Commerce).
- **Asset Dependency**: `public/assets/logos/asdm-logo.png`
- **SEO Purpose**: Primary page anchor for keywords: `digital marketing course in ahmedabad`, `digital marketing institute in ahmedabad`.
- **Conversion Hypothesis**: Providing immediate selector buttons for batch formats increases the CTR to syllabus downloads by 15%.
- **Testing Requirement**: A/B test typography sizes and CTA copy variations.
- **Originality Safeguard**: Use left-aligned dark-slate typography with generous whitespace. Do not copy IIDE's diagonal swipe divider or DSA's neon yellow button colors.

---

### 2. Immediate Trust (Trust Ribbon)

- **Evidence IDs**: `EVI-IIDE-HOME`, `EVI-DSA-HOME`
- **ASDM-Specific Business Reason**: Reduce student skepticism about job placement by anchoring the header in verified metrics.
- **Content Dependency**: Verified aggregate placement counts.
- **Asset Dependency**: Monochrome corporate SVG recruiter logos.
- **SEO Purpose**: Establishes domain authority signals via partner company name mentions.
- **Conversion Hypothesis**: Placing corporate placement partners above the fold increases user session duration by conveying corporate credibility.
- **Testing Requirement**: Run visual regression checks to verify that SVGs scale correctly without layout shift.
- **Originality Safeguard**: Logos must be displayed as a single flat, muted monochrome row. No orange/red decorative ribbons.

---

### 3. Program Discovery Hub (Course Switcher)

- **Evidence IDs**: `EVI-IIDE-HOME`
- **ASDM-Specific Business Reason**: Guide students to the optimal course track based on their time commitment and professional goals, preventing choice paralysis.
- **Content Dependency**: Mapped curriculum syllabus summaries.
- **Asset Dependency**: Distinctive vector course icons.
- **SEO Purpose**: Inbound link architecture to Course Detail pages.
- **Conversion Hypothesis**: Interactive switcher tabs separating long-term professional tracks from short skills courses reduce page bounce rate.
- **Testing Requirement**: Track click mapping on selector tabs.
- **Originality Safeguard**: Built as simple CSS switcher cards. Do not copy IIDE megamenu program divisions.

---

### 4. Why ASDM (Value Pillars)

- **Evidence IDs**: `EVI-IIDE-HOME`, `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Differentiate ASDM from generic online certifications by highlighting NSDC government partnership and live client budget training.
- **Content Dependency**: Verified NSDC accreditation certificate numbers.
- **Asset Dependency**: Lightweight custom SVG vector support icons.
- **SEO Purpose**: Contextual keyword reinforcement for "practical digital marketing training".
- **Conversion Hypothesis**: Displaying concrete practical project parameters increases brochure click-through rates.
- **Testing Requirement**: Accessibility review for text-screen contrast.
- **Originality Safeguard**: Enforce Linear-inspired grid borders (1px neutral gray). Do not copy TOPS orange-bullet list layouts.

---

### 5. Student Work Showcase (Portfolio Grid)

- **Evidence IDs**: `EVI-DSA-HOME`, `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Provide concrete, visible proof of student capabilities.
- **Content Dependency**: Approved list of student-built shopify store links.
- **Asset Dependency**: Clean browser border screenshots of student-built websites.
- **SEO Purpose**: Unique local page content relevance.
- **Conversion Hypothesis**: Allowing users to expand and view real student websites reduces form abandonment.
- **Testing Requirement**: Set explicit width/height parameters on images to prevent Cumulative Layout Shift (CLS).
- **Originality Safeguard**: Screenshots are presented inside flat, unstyled browser windows. Do not copy Stripe skewed cards.

---

### 6. Placement Outcomes (Success Stories)

- **Evidence IDs**: `EVI-TOPS-AMD`, `EVI-IIDE-HOME`
- **ASDM-Specific Business Reason**: Demonstrate hiring success.
- **Content Dependency**: Approved alumni placement registry data.
- **Asset Dependency**: Verified student portrait avatars.
- **SEO Purpose**: Content depth for placement queries.
- **Conversion Hypothesis**: Cards showing student name, course completed, and hiring agency build high social proof.
- **Testing Requirement**: Formal written model consent is required before public deployment.
- **Originality Safeguard**: Cards use simple dark gray text profiles. Do not copy TOPS orange ribbon overlay design.

---

### 7. Campus Experience (Center Switcher)

- **Evidence IDs**: `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Reassure students of physical lab access and local face-to-face mentorship.
- **Content Dependency**: Campus landmark directions and coordinates.
- **Asset Dependency**: Actual lab photos of Ahmedabad HO, Naroda, and Surat Vesu.
- **SEO Purpose**: Local SEO maps indexing.
- **Conversion Hypothesis**: Switcher tabs for local branches increase local phone inquiries by 20%.
- **Testing Requirement**: Google Maps API lazy load performance check.
- **Originality Safeguard**: Use standard clean campus photos. No stock vectors.

---

### 8. Verification & Accreditation

- **Evidence IDs**: `EVI-IIDE-HOME`
- **ASDM-Specific Business Reason**: Solidify ASDM's position as a government-aligned training institute.
- **Content Dependency**: Signed Skill India partnership details.
- **Asset Dependency**: Government partner logos.
- **SEO Purpose**: Brand authority signals.
- **Conversion Hypothesis**: Placing government credentials above the final CTA reduces lead form friction.
- **Testing Requirement**: Verify SVG scaling on mobile viewports.
- **Originality Safeguard**: Logos placed in a simple, flat row.

---

### 9. Final Counseling CTA

- **Evidence IDs**: `EVI-IIDE-HUB`, `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Primary gateway to capture prospects who have read the homepage.
- **Content Dependency**: Center dropdown list coordinates.
- **Asset Dependency**: None.
- **SEO Purpose**: Page endpoint optimization.
- **Conversion Hypothesis**: A short form containing only 5 fields (Name, Email, Mobile, Course, Center) increases submission rates.
- **Testing Requirement**: Modal close targets must be at least 48x48px on mobile.
- **Originality Safeguard**: Clean input containers. Do not copy TOPS Orange design.
