# Duplication & Keyword Cannibalisation Report (DUPLICATION-AND-CANNIBALISATION.md)

This report details structural URL duplication, keyword cannibalisation, and duplicate content areas found on the current ASDM website.

## 👥 Suspected Content Overlaps (Near-Duplicate Candidates)

The audit identified two URLs that are suspected near-duplicate candidates containing identical copies of the homepage code and content:

1. `https://www.asdm.co.in/advace-digital-marketing-program` (misspelled `advace`)
2. `https://www.asdm.co.in/professional-program-in-advance-digital-marketing`

### ⚠️ Suspected Implications:

- Both pages represent a shared search intent with the homepage (`https://www.asdm.co.in/`) for the primary query `"digital marketing course in ahmedabad"`.
- This suspected overlap suggests that search engines may split page rank and crawl equity among these pages, resulting in suboptimal search performance for the main domain. This requires GSC comparison and backlink review to confirm.
- Users navigating the site footer links are served identical homepage content instead of specific, detailed syllabi for these two programs.

---

## 🗺️ Search Intent Overlaps

For details of the intent mapping, see the [Search Intent Map Spreadsheet](file:///C:/xampp/htdocs/asdm-new-web/docs/audits/search-intent-map.csv).

| URL                                   | Target Keyword                        | Search Intent        | Cannibalisation / Overlap Risk                                                                            |
| ------------------------------------- | ------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------- |
| `/`                                   | digital marketing course in ahmedabad | Shared Search Intent | **Critical**: Overlapping with `/advace-...` and `/professional-...` (requires manual content comparison) |
| `/digital-marketing-course-in-surat`  | digital marketing course in surat     | Shared Search Intent | Low. Geographically targeted, but shares generic FAQ content.                                             |
| `/digital-marketing-course-in-mumbai` | digital marketing course in mumbai    | Shared Search Intent | Medium. Overlaps with offline programs due to claiming "offline" course options in metadata.              |
| `/seo-course-in-ahmedabad`            | seo course in ahmedabad               | Shared Search Intent | Low. Focused keyword.                                                                                     |

---

## 🔄 Suspected Duplicate FAQ Schema

- The `/faq` page, the homepage, the Surat page, and the Mumbai page all include similar FAQ blocks.
- Google guidelines advise against serving duplicate schema.org `FAQPage` markup across multiple pages of a single site.
- Currently, identical question objects (e.g. "Is digital marketing a good career?", "Can I study part-time?") are repeated in page-specific schema blocks, which requires manual content comparison and correction.

---

## 💡 Proposed Migration Candidates (Requires GSC & Stakeholder Review)

- **Proposed Redirect Candidates**: Consider redirecting `/advace-digital-marketing-program` and `/professional-program-in-advance-digital-marketing` to a proposed primary URL candidate inside the new Astro app (such as `/courses/advanced` or `/courses/professional`), pending backlink and GSC traffic review.
- **Proposed Schema Consolidation**: Candidate action is to move general digital marketing FAQs to a single global FAQ layout, and leave only highly localized questions (like Surat-specific batch timings or campus address) on the respective location page schemas.
