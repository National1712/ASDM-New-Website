# Deployment & CI/CD Pipeline (DEPLOYMENT.md)

This document lists environment requirements, build hooks, hosting targets, and deployment steps.

## 📈 Status

- **Status**: `NOT STARTED`
- **Last Updated**: 2026-08-01

---

## 🚀 Target Environments

- **Production Environment**: Hosting target (e.g. Vercel, Netlify, or Cloudflare Pages) pointing to the main branch.
- **Staging / Preview**: Automated builds triggered from Pull Requests.

---

## ⚙️ CI Build Verification Checklist

Before merge into main branch, the CI pipeline runs:

1. `npm ci` - Clean install of dependencies.
2. `npm run format` (Check) - Verify files conform to Prettier rules.
3. `npm run lint` - Run ESLint code checks.
4. `npm run typecheck` - Run TypeScript compiler checks and Astro validation.
5. `npm run test` - Execute unit tests.
6. `npm run build` - Compile production assets to `dist/`.

---

## 🔒 Security & Environment Variables

- Keep secret keys (e.g. CRM webhooks, newsletter signup API keys) strictly in `.env` files (never commit to git).
- Inject variables through the hosting provider's build dashboard.
- A `.env.example` file must be maintained at the root.
