# ASDM Website Redesign

Premium, high-performance website redesign for ASDM (Ahmedabad School of Digital Marketing).

## 🚀 Project Overview

The goal of this project is to build a premium, highly customised, high-performance web experience for ASDM. The design prioritises information hierarchy, typographic precision, and smooth micro-animations, ensuring an exceptional educational program presentation.

- **Production URL**: TBD
- **Project Status**: `IN PROGRESS` (Foundation Phase)
- **Principal Software Architect & Lead**: Antigravity (AI Coding Assistant) / User Team

---

## 🛠️ Tech Stack

- **Core**: [Astro (v5)](https://astro.build/) - Static site generation, minimal client-side JS
- **Language**: [TypeScript](https://www.typescript.org/) (Strict Mode)
- **Styling**: Component-scoped CSS (or governed Tailwind setup)
- **Testing**: [Vitest](https://vitest.dev/)
- **Formatting & Linting**: ESLint + Prettier

---

## 🧞 Project Commands

All commands are run from the root of the project:

| Command             | Action                                                |
| :------------------ | :---------------------------------------------------- |
| `npm run dev`       | Starts local dev server at `localhost:4321`           |
| `npm run build`     | Builds your production static site to `./dist/`       |
| `npm run preview`   | Previews your local production build before deploying |
| `npm run lint`      | Lints the project files using ESLint                  |
| `npm run typecheck` | Runs TypeScript and Astro compiler check              |
| `npm run format`    | Runs Prettier to auto-format all codebase files       |
| `npm run test`      | Runs the test suite via Vitest                        |

---

## 📂 Codebase & Folder Architecture

```text
/
├── docs/                 # Architectural and specifications documentation
├── public/               # Static public assets
│   └── assets/           # Structured asset folders (brand, campuses, testimonials, etc.)
├── src/
│   ├── components/       # Reusable components
│   ├── layouts/          # Astro pages layouts
│   ├── pages/            # Page routing structure
│   ├── content/          # Content collections (markdown/YAML databases)
│   ├── data/             # Static json/ts configurations
│   ├── styles/           # Global styles and tokens
│   ├── utilities/        # Helper utility functions
│   ├── types/            # Global typescript typings
│   ├── tests/            # Test specs and mocks
│   └── scripts/          # Helper/runner scripts
├── package.json
├── tsconfig.json
├── eslint.config.js
└── .prettierrc
```

---

## 📖 Documentation Directory

Refer to these architectural blueprints inside the `docs/` folder:

- [PROJECT-BRIEF.md](file:///c:/xampp/htdocs/asdm-new-web/docs/PROJECT-BRIEF.md) - Project goals, references, and boundaries
- [PLAN.md](file:///c:/xampp/htdocs/asdm-new-web/docs/PLAN.md) - Phased roadmap and release strategy
- [TASKS.md](file:///c:/xampp/htdocs/asdm-new-web/docs/TASKS.md) - Active task tracking board
- [DESIGN-SYSTEM.md](file:///c:/xampp/htdocs/asdm-new-web/docs/DESIGN-SYSTEM.md) - Typography, spacing, layout, and visual tokens
- [CONTENT-INVENTORY.md](file:///c:/xampp/htdocs/asdm-new-web/docs/CONTENT-INVENTORY.md) - Copy inventory, courses data, and schemas
- [SITE-ARCHITECTURE.md](file:///c:/xampp/htdocs/asdm-new-web/docs/SITE-ARCHITECTURE.md) - Navigation, site map, and Astro page routes
- [SEO-MIGRATION.md](file:///c:/xampp/htdocs/asdm-new-web/docs/SEO-MIGRATION.md) - Redirect mappings and metadata setup
- [PERFORMANCE-BUDGET.md](file:///c:/xampp/htdocs/asdm-new-web/docs/PERFORMANCE-BUDGET.md) - Lighthouse, LCP, CLS, and bundle weight limits
- [ACCESSIBILITY.md](file:///c:/xampp/htdocs/asdm-new-web/docs/ACCESSIBILITY.md) - WCAG 2.2 AA checklists and design system details
- [ASSET-GUIDELINES.md](file:///c:/xampp/htdocs/asdm-new-web/docs/ASSET-GUIDELINES.md) - Dimensions, extensions, compressions, and folders
- [COMPONENTS.md](file:///c:/xampp/htdocs/asdm-new-web/docs/COMPONENTS.md) - Reusable components catalog and APIs
- [TESTING.md](file:///c:/xampp/htdocs/asdm-new-web/docs/TESTING.md) - Test architecture, coverage, and tools configuration
- [DEPLOYMENT.md](file:///c:/xampp/htdocs/asdm-new-web/docs/DEPLOYMENT.md) - Build pipelines, environment variables, hosting configurations
- [DECISIONS.md](file:///c:/xampp/htdocs/asdm-new-web/docs/DECISIONS.md) - Architecture Decision Records (ADR)
