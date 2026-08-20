import { describe, it, expect } from 'vitest';
import fs from 'node:fs';

const root = new URL('../../', import.meta.url);
const source = (filePath: string) => new URL(filePath, root);

describe('ASDM Design System Foundations', () => {
  it('verifies required token files exist', () => {
    [
      'src/styles/tokens/colors.css',
      'src/styles/tokens/typography.css',
      'src/styles/tokens/spacing.css',
      'src/styles/tokens/layout.css',
      'src/styles/tokens/effects.css',
      'src/styles/tokens/motion.css',
    ].forEach((filePath) => {
      expect(fs.existsSync(source(filePath))).toBe(true);
    });
  });

  it('verifies design-system page exists and remains noindex', () => {
    const content = fs.readFileSync(
      source('src/pages/design-system.astro'),
      'utf8'
    );
    expect(content.includes('noindex={true}')).toBe(true);
  });

  it('verifies no remote font or remote placeholder assets are used in the shell', () => {
    const files = [
      'src/layouts/BaseLayout.astro',
      'src/pages/design-system.astro',
      'src/components/global/SiteHeader.astro',
      'src/components/global/SiteFooter.astro',
    ];

    files.forEach((filePath) => {
      const content = fs.readFileSync(source(filePath), 'utf8');
      expect(content).not.toMatch(
        /fonts\.googleapis|fonts\.gstatic|unsplash|placehold\.(it|co)|placeholder\.com/i
      );
    });
  });

  it('verifies header accessibility hooks for mobile navigation', () => {
    const content = fs.readFileSync(
      source('src/components/global/MobileNavigation.astro'),
      'utf8'
    );
    expect(content).toContain('aria-expanded="false"');
    expect(content).toContain('aria-controls="mobile-menu"');
    expect(content).toContain("e.key === 'Escape'");
    expect(content).toContain('firstFocusable?.focus()');
  });

  it('verifies the Phase 6.3 red-led SVG logo correction is enforced', () => {
    const colors = fs.readFileSync(
      source('src/styles/tokens/colors.css'),
      'utf8'
    );
    const logo = fs.readFileSync(
      source('src/components/ui/Logo.astro'),
      'utf8'
    );
    const header = fs.readFileSync(
      source('src/components/global/SiteHeader.astro'),
      'utf8'
    );
    const footer = fs.readFileSync(
      source('src/components/global/SiteFooter.astro'),
      'utf8'
    );
    const visibleShell = `${logo}${header}${footer}`;

    expect(colors).toContain('--brand-primary: #e1262f');
    expect(colors).toContain('--brand-secondary: #65429b');
    expect(colors).not.toMatch(/#1546d2|#2563eb|#3b82f6|#60a5fa/i);
    expect(logo).toContain('asdm-logo-primary.svg');
    expect(logo).toContain('asdm-logo-white.svg');
    expect(logo).toContain('asdm-symbol.svg');
    expect(visibleShell).not.toContain('250x87 asdm logo.png');
    expect(visibleShell).not.toContain('250x87 asdm logo.webp');
    expect(footer).toContain('variant="inverse"');
  });
});
