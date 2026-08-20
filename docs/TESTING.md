# Testing Architecture (TESTING.md)

This document establishes the testing strategy, coverage thresholds, testing environments, and test validation scripts.

## 📈 Status

- **Status**: `NOT STARTED`
- **Last Updated**: 2026-08-01

---

## 🧪 Testing Strategies

Our tests are grouped into three primary targets:

1. **Unit Testing**:
   - Focuses on TypeScript helper functions (`src/utilities/`), date formatters, schema validations, and static calculation configs.
   - Run via Vitest.
2. **Component Testing (To be decided)**:
   - Verifies rendering of UI elements, conditional prop classes, and accessibility tags.
3. **Integration & Build Checks**:
   - Ensures that Astro compiles pages, routing pathways, and content collections schemas correctly.

---

## 🏃 Running Tests

- Run test suite once: `npm run test`
- Run test suite in watch mode: `npx vitest`

---

## 📊 Coverage Guidelines

- All utility files must target **85%+** test coverage.
- Configuration schemas (e.g. course validations) must have corresponding error/success mock tests.
