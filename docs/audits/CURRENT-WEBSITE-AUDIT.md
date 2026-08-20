# ASDM Website Redesign Audit — Current Website Audit (CURRENT-WEBSITE-AUDIT.md)

This document provides a holistic summary of the content, technical, and SEO audits performed on the live ASDM website (`https://www.asdm.co.in/`).

## 📊 Sitemap & URL Breakdown

A complete scan of the sitemap and site navigation structures revealed:

- **Total Discovered URLs**: 202 URLs.
- **Transactional Pages (11)**:
  - Homepage (`/`)
  - About Us (`/about-us`)
  - Placement Page (`/placement`)
  - Contact Us (`/contact-us`)
  - FAQ Page (`/faq`)
  - Location Landing Pages (Surat, Mumbai)
  - Course-Specific Pages (SEO Course, E-Commerce Course)
  - Duplicate Landing Pages (`/advace-digital-marketing-program` and `/professional-program-in-advance-digital-marketing`)
- **Blog Section (191)**:
  - 180 individual blog posts hosted under WordPress (`/blog/post-slug/`)
  - 3 blog feed index pages
  - 7 category pages
  - 1 sitemap utility file

For a detailed row-by-row mapping of all URLs, see the [URL Inventory Spreadsheet](file:///C:/xampp/htdocs/asdm-new-web/docs/audits/current-url-inventory.csv).

---

## 🛠️ Technical SEO Findings

### 1. Indexing & Canonicals

- Transactional pages use self-referential canonical tags, and robots directives are configured to `index, follow`.
- However, two duplicate paths exist: `/advace-digital-marketing-program` (misspelled) and `/professional-program-in-advance-digital-marketing`. Both are indexed and duplicate the homepage, leading to internal competition.

### 2. Schema Markup

- The website uses four primary JSON-LD schema structures: `Organization`, `WebSite`, `FAQPage`, and `Product`.
- **Product Schema issues**: The aggregate rating count (`93,480` reviews with a `9.9` rating) is duplicated identically on multiple pages. The schema also lacks standard fields (`sku` and `review`), triggering validator warnings.
- **FAQ Schema issues**: Raw HTML layout characters (like list tags) are directly printed inside JSON answers, which can corrupt schema parsers.
- **LocalBusiness Schema gaps**: No schema exists to specify physical branch locations (Ahmedabad HO, Naroda, Surat Vesu) to anchor local search intent.

For the full schema mapping and errors, see the [Schema Inventory Spreadsheet](file:///C:/xampp/htdocs/asdm-new-web/docs/audits/schema-inventory.csv).

---

## 📈 Conversion Optimization & Leads

ASDM utilizes a combination of sticky bars and pop-ups to capture leads:

- **Primary Channels**:
  - Direct calls (`tel:+919016970734` and campus-specific lines).
  - WhatsApp redirect (`+919327967701`) with a prefilled inquiry message.
  - Interactive popup modals capturing: Name, Email, Phone, and Select Center.
- **OTP Validation**: Requesting a brochure triggers an OTP sequence submitting to `/otp-send` and verifying via `/otpverification`.
- **Gaps**:
  - The "Select Center" form dropdown lists only `AHMEDABAD` and `SURAT`. Naroda is excluded, and Mumbai leads are routed to the other two branches.

For details on all lead forms and actions, see the [Conversion Inventory Spreadsheet](file:///C:/xampp/htdocs/asdm-new-web/docs/audits/conversion-inventory.csv).
