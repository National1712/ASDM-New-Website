# Draft Location Page Framework (DRAFT-LOCATION-PAGE-FRAMEWORK.md)

This document outlines the proposed layout framework for branch-specific city landing pages (e.g. Ahmedabad HO, Surat Vesu, Mumbai Online).

---

## 🗺️ Location Page Section Sequence

### 1. Localized Hero (Search Intent Capture)

- **Evidence IDs**: `EVI-TOPS-AMD`, `EVI-DSA-HOME`
- **ASDM-Specific Business Reason**: Capture local offline search queries from users looking for digital marketing training near their neighborhood.
- **Content Dependency**: Confirmed branch name and address.
- **Asset Dependency**: Branch campus exterior photo.
- **SEO Purpose**: Primary anchor for local intent queries: `digital marketing course in surat`, `digital marketing training in ahmedabad`.
- **Conversion Hypothesis**: A headline displaying the local neighborhood and batch start times improves conversions.
- **Testing Requirement**: Run visual regression checks to check stack behavior on mobile screens.
- **Originality Safeguard**: Use standard clean layout. Do not copy TOPS Orange header layouts.

---

### 2. Campus Gallery (Physical Tour)

- **Evidence IDs**: `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Reassure students of physical lab access, computer seating, and study spaces.
- **Content Dependency**: Verified lab facilities checklist.
- **Asset Dependency**: Actual interior photos of physical classrooms (no stock files).
- **SEO Purpose**: Visual schema relevance for local business profiles.
- **Conversion Hypothesis**: Displaying real physical classrooms reduces enrollment hesitation by 10%.
- **Testing Requirement**: All photos must have explicit widths and heights to prevent CLS.
- **Originality Safeguard**: Muted borders. Do not copy Stripe skewed cards.

---

### 3. Local Testimonials & Placements

- **Evidence IDs**: `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Demonstrate hiring success in local companies within the same city.
- **Content Dependency**: Verified list of placed students from the specific branch.
- **Asset Dependency**: Local student avatar portraits.
- **SEO Purpose**: Content depth.
- **Conversion Hypothesis**: Testimonials specifying the local hiring agency (e.g. "Placed at Ahmedabad SEO Agency") build high social proof.
- **Testing Requirement**: Formal written model consent is required before public deployment.
- **Originality Safeguard**: Plain typographic grid design.

---

### 4. Interactive Route Maps & Campus Landmark Directions

- **Evidence IDs**: `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Guide prospective students to travel to the campus easily for offline batch visits.
- **Content Dependency**: Landmark details (e.g. "Next to CG Road Metro Station").
- **Asset Dependency**: None.
- **SEO Purpose**: Local business coordinate mapping.
- **Conversion Hypothesis**: Clear landmark details reduce center location queries.
- **Testing Requirement**: Map scripts must be deferred or lazy-loaded to prevent page block.
- **Originality Safeguard**: Clean embed blocks.

---

### 5. Local Branch Batch Schedule

- **Evidence IDs**: `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Transparently display upcoming batch timings for morning, afternoon, and evening slots.
- **Content Dependency**: Branch batch calendar.
- **Asset Dependency**: None.
- **SEO Purpose**: High keyword search match for offline training.
- **Conversion Hypothesis**: Displaying batch schedules reduces support query cycles.
- **Testing Requirement**: Table element must scale without horizontal scroll overflow.
- **Originality Safeguard**: CSS grid styling.

---

### 6. Local Center Manager Contact Info

- **Evidence IDs**: `EVI-TOPS-AMD`
- **ASDM-Specific Business Reason**: Primary route to connect prospects directly to the campus head.
- **Content Dependency**: Branch manager contact numbers.
- **Asset Dependency**: None.
- **SEO Purpose**: Local business NAP (Name, Address, Phone) consistency.
- **Conversion Hypothesis**: A direct tap-to-call number increases mobile lead conversions by 15%.
- **Testing Requirement**: Touch target size of 48px for telephone anchors.
- **Originality Safeguard**: Flat, solid card designs.
