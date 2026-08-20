# Accessibility Implementation

Status: `PHASE 6 FOUNDATION IMPLEMENTED`
Last updated: 2026-08-01

## Implemented Controls

- Skip link is the first focusable control in `BaseLayout`.
- `main` landmark uses `id="main-content"`.
- Global focus-visible styling is tokenized.
- Header navigation has separate desktop and mobile landmarks.
- Mobile drawer uses `aria-expanded`, `aria-controls`, `role="dialog"`, `aria-modal`, Escape close, focus movement, and body-scroll lock.
- Form controls are explicitly labelled through `FormField`.
- Error messages use `role="alert"`.
- Tabs use `role="tablist"`, `role="tab"`, `aria-selected`, and `role="tabpanel"`.
- Accordions use native buttons and disclosure state.
- Reduced-motion support is global.

## Verification Notes

Automated lint, typecheck, and Vitest checks cover token files, noindex route status, remote asset prevention, and mobile navigation accessibility hooks. Manual browser checks remain required whenever new public sections are introduced.
