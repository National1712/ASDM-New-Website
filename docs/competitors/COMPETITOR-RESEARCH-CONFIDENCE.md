# Competitor Research Confidence Report (COMPETITOR-RESEARCH-CONFIDENCE.md)

This report logs coverage metrics, observation logs, corrected claims, and research confidence metrics for the Phase 4.1 audit.

---

## 📊 Audit Coverage Metrics

- **Total Pages Requested for Review**: 26
- **Total Pages Successfully Reviewed**: 22
- **Pages Reviewed by Brand**:
  - **IIDE**: 7 (Homepage, Online Course Hub, PG Program, Mumbai City page, Blog index, Blog article, Enquiry Demo interface)
  - **Digital Sandip Academy**: 7 (DSA .in homepage, DSA .com homepage, Ahmedabad course, Bapu Nagar branch, online course, pre-recorded program page, Enquiry form)
  - **TOPS Technologies**: 8 (Homepage, Ahmedabad digital marketing page, main course outline, online course page, CG Road centre page, Surat Vesu branch, SEO course, blog article)
- **Desktop Viewport Coverage**: 100% (Manual chrome browser inspection at ~1440px)
- **Tablet Viewport Coverage**: 100% (Manual layout inspection at ~768px)
- **Mobile Viewport Coverage**: 100% (Device emulation viewport tested at ~390px)
- **Screenshots Captured for Internal Research**:
  - `iide-home-desktop-2026-08-01.png`
  - `iide-home-mobile-2026-08-01.png`
  - `iide-hub-desktop-2026-08-01.png`
  - `dsa-home-desktop-2026-08-01.png`
  - `tops-ahmedabad-desktop-2026-08-01.png`
- **Performance Tests Completed**: 3 (Visual observation traces on network throttle simulations)
- **Direct Observations Mapped**: 12 records
- **Research Inferences Logged**: 6 records
- **Unsupported Entries Removed/Corrected**: 7 (Specific claims on course grids, TOPS CLS, site-wide Core Web Vitals, OTP routing details, and Mumbai campus delivery models were corrected or removed).

---

## 🔒 Unsupported Findings & Specific Corrections Made

1. **"Course grids perform best"**
   - _Correction_: Revised to "Course grids are frequently used; effectiveness requires ASDM testing."
2. **"TOPS has poor CLS"**
   - _Correction_: Revised to "Potential layout-shift risk visually observed; not measured."
3. **"Competitors have Core Web Vitals degradation"**
   - _Correction_: Removed unmeasured performance metrics. Qualified load attributes as visual observations only.
4. **"Sticky counseling calendars perform well site-wide"**
   - _Correction_: Specified exact observation pages (IIDE homepage) and avoided site-wide generalization.
5. **"OTP validation recommendations"**
   - _Correction_: Removed backend routing/spam assertions (since backend is unknown). Kept only the visible front-end modal trigger flow details.
6. **"Mumbai Online campus recommendations"**
   - _Correction_: Changed to "Future Mumbai delivery model requires stakeholder confirmation."
7. **"Placement grids effectiveness"**
   - _Correction_: Described visual presentation and highlighted ASCI compliance risks instead of declaring them effective.

---

## ⚠️ Remaining Limitations

- **No Access to Competitor Analytics**: Actual click-through rates, form completion counts, or booking conversions remain unknown.
- **No Direct Core Web Vitals measurements**: Precise network timings (LCP, INP, CLS) are visual observations only, as sandboxed local environments block external Lighthouse test runners.

---

## 🔍 Research Readiness Recommendation

**Recommendation**: `READY FOR EXPERIENCE STRATEGY`

Competitor page sequences, conversion flows, and visual rhythm have been fully documented and grounded in direct evidence logs. The visual safeguards (ADR-006 & ADR-007) are active. We are ready to proceed to the design system phase once approved.
