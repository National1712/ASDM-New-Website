# Content Inventory & Copywriting Guidelines (CONTENT-INVENTORY.md)

This document maps out the approved content structure, course program architecture, content collections schemas, and copy constraints for the ASDM Website Redesign.

## 📈 Status

- **Status**: `COMPLETE (QA Audited)`
- **Last Updated**: 2026-08-01

---

## 🔒 Copywriting Integrity Rules

- **No Fictional Placement Stats**: Only use verified placement numbers (e.g. 7,000+ placements delivered). Reconcile the 50,000+ vs 7,000+ mismatch.
- **Accreditation and Affiliations**: Only display legally verified affiliations with government skill initiatives (Skill India, NSDC, Ministry of Skill Development).
- **Truth in Outcomes**: Do not publish income guarantees (e.g., "Earn 50,000+ as freelancer"). Frame outcomes around skills mastery.
- **Design System Exemption**: Design-system planning and setup may proceed with unresolved claims, provided disputed claims remain excluded from styling rules or are clearly marked as pending verification.

---

## 📦 Content Collections Schemas

We plan to use Astro's native `content` collections. The schemas are validated via Zod under `src/content/config.ts`.

### 1. Courses Collection Schema

- `id`: string (slug)
- `title`: string
- `duration`: string (e.g. "3 Months")
- `mode`: enum ("Online", "Offline", "Hybrid")
- `syllabus`: array of modules
- `certification`: string
- `placementsPartnerCount`: number
- `isFeatured`: boolean

### 2. Placements Collection Schema

- `studentName`: string
- `companyPlaced`: string
- `salaryPackage`: string (optional)
- `testimonial`: string
- `courseCompleted`: string (reference course ID)
- `image`: string (local path)

### 3. Testimonials Collection Schema

- `author`: string
- `role`: string (e.g. "Student / SEO Manager")
- `content`: string
- `rating`: number
- `avatar`: string (local path)

---

## 📝 Content Catalog (Audited)

All content extracted during the audit is mapped into raw source files under `src/content/source/current-site/` for migration reference.

1. **AI Integrated Advanced Digital Marketing Program**
   - _Target_: Students, freshers, entrepreneurs.
   - _Duration_: 5 months.
   - _Focus_: SEO, Social Media, Google Ads, Email, and AI tools.
2. **Professional Program in Advance Digital Marketing**
   - _Target_: Deep career track.
   - _Duration_: 12 months (includes agency internship).
3. **Advanced SEO Course**
   - _Target_: SEO specialisation in Ahmedabad.
   - _Duration_: Unspecified.
4. **E-Commerce Marketing Course**
   - _Target_: E-Commerce store setup (Shopify focus).
   - _Duration_: 3 months.
