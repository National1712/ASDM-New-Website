# Logo Asset Review

Status: `PHASE 6.3 REVIEWED`
Last updated: 2026-08-01

## Summary

`public/assets/brand/` now contains the approved SVG logo set for the global shell and design-system usage examples. The previous temporary PNG fallback is no longer used in the visible header or footer.

## Reviewed Files

| File                                        | Format | ViewBox           | Size     | Transparency | Raster/image data | Fonts | Hidden layers | Shell suitability                      |
| ------------------------------------------- | ------ | ----------------- | -------- | ------------ | ----------------- | ----- | ------------- | -------------------------------------- |
| `public/assets/brand/asdm-logo-primary.svg` | SVG    | `120 360 850 370` | 12,494 B | Transparent  | None              | None  | None          | Approved for header and light surfaces |
| `public/assets/brand/asdm-logo-white.svg`   | SVG    | `120 350 890 380` | 12,379 B | Transparent  | None              | None  | None          | Approved for dark footer surfaces      |
| `public/assets/brand/asdm-symbol.svg`       | SVG    | `140 420 800 260` | 2,473 B  | Transparent  | None              | None  | None          | Approved for compact symbol usage      |

## Validation Notes

- The primary SVG was cleaned to remove embedded raster export data and unnecessary mask/export layers.
- All SVGs use transparent backgrounds and have no black rectangle, external font dependency, filter, mask, clipping layer, or embedded bitmap.
- The viewBox values were tightened to remove excessive square-canvas padding without clipping the logo artwork.
- Brand colors present in the final vector set include ASDM red `#EC3338`, ASDM purple `#66348E`, and supporting charcoal `#373435`.
- Text appears as vector paths and does not depend on installed fonts.

## Final Usage

- Header and mobile header use `asdm-logo-primary.svg` on light surfaces.
- Footer uses `asdm-logo-white.svg` on the dark footer surface.
- The design-system logo block shows primary, inverse, and symbol variants at compact, aspect-ratio-preserved sizes.

## Retired Assets

- `public/assets/logos/250x87 asdm logo.png` remains in the local inventory but is not used by `Logo.astro`, the visible header, or the footer.
- `public/assets/logos/250x87 asdm logo.webp` remains rejected for visible UI because it carries a visible black background.
