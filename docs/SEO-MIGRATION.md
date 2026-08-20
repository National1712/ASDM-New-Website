# SEO Migration & URL Redirect Map (SEO-MIGRATION.md)

This document ensures that we preserve search engine optimization equity, configure redirects, manage metadata setups, and prevent indexing while the site is in preview mode.

## 📈 Status

- **Status**: `COMPLETE`
- **Last Updated**: 2026-08-01

---

> [!WARNING]
> Nothing in this document is approved for implementation. Redirects, deletions, merges and canonical changes require Search Console, analytics, backlink and stakeholder review.

## 🔒 Safety Measures

- **Noindex Flag**: An initial `<meta name="robots" content="noindex" />` tag is configured on all preview pages until structural audit approval.
- **Strict Verification**: No URL path changes are allowed without checking this document.

---

## 🗺️ Redirect Matrix (Old site -> Redesign site)

This matrix defines the 301 redirect map for the transactional pages from current paths to clean Astro routes.

| Old URL Path                                                               | New Redesign URL Path              | Redirect Type            | Status               |
| :------------------------------------------------------------------------- | :--------------------------------- | :----------------------- | :------------------- |
| `https://www.asdm.co.in/`                                                  | `/`                                | N/A (Direct)             | `EXISTING`           |
| `https://www.asdm.co.in/about-us`                                          | `/about`                           | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/placement`                                         | `/placements`                      | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/contact-us`                                        | `/contact`                         | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/faq`                                               | `/faq`                             | 301 Redirect             | `MERGE CANDIDATE`    |
| `https://www.asdm.co.in/digital-marketing-course-in-surat`                 | `/campuses/surat`                  | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/digital-marketing-course-in-mumbai`                | `/campuses/mumbai`                 | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/seo-course-in-ahmedabad`                           | `/courses/seo-course-in-ahmedabad` | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/ecommerce-course`                                  | `/courses/ecommerce-course`        | 301 Redirect             | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/advace-digital-marketing-program`                  | `/courses/advanced`                | 301 Redirect (Duplicate) | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/professional-program-in-advance-digital-marketing` | `/courses/professional`            | 301 Redirect (Duplicate) | `REDIRECT CANDIDATE` |
| `https://www.asdm.co.in/blog/*`                                            | `https://www.asdm.co.in/blog/*`    | N/A (Preserved)          | `EXISTING`           |

---

## 🏷️ Metadata Guidelines

Every page layout must implement:

- **Title Tag**: Clear format (e.g. `[Page Name] | Ahmedabad School of Digital Marketing (ASDM)`)
- **Meta Description**: Under 160 characters, location-centric, action-oriented.
- **OpenGraph & Twitter Cards**: For clean social shares.
- **Canonical Tags**: Pointing to original production URL.
- **Structured Schema (JSON-LD)**: Course, Organization, and LocalBusiness schema for Ahmedabad and Surat.
