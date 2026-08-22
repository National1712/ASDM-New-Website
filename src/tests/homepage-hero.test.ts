import { describe, it, expect } from 'vitest';
import fs from 'node:fs';

const root = new URL('../../', import.meta.url);
const source = (filePath: string) => new URL(filePath, root);

const registeredSections = [
  'Hero',
  'Trust Strip',
  'Course Snapshot',
  'Why Choose ASDM',
  'Career Opportunities',
  'Who Can Join',
  'Program Facts',
  'Program Comparison',
  'Course Curriculum',
  'AI & Industry Tools',
  'Practical Learning Methodology',
  'Live Projects & Client Work',
  'Trainers & Industry Mentors',
  'Internship, Freelancing & Placement Support',
  'Student Success',
  'Certifications & Recognition',
  'Ahmedabad Campus',
  'Fees, Batches & EMI',
  'FAQs',
  'Final CTA',
  'Global Footer',
];

describe('Phase 7 Homepage Hero Guardrails', () => {
  it('locks all approved homepage sections in the registry', () => {
    const registry = fs.readFileSync(
      source('docs/homepage/HOMEPAGE-SECTION-REGISTRY.md'),
      'utf8'
    );

    registeredSections.forEach((section) => {
      expect(registry).toContain(section);
    });
    expect(registry).toContain('Course Snapshot');
    expect(registry).toContain('Concise program overview');
    expect(registry).toContain('Program Facts');
  });

  it('keeps the public homepage as the foundation page', () => {
    const homepage = fs.readFileSync(source('src/pages/index.astro'), 'utf8');

    expect(homepage).toContain('Foundation Mode Active');
    expect(homepage).not.toContain('HeroSection');
    expect(homepage).not.toContain('Learn Digital Marketing');
  });

  it('adds only a noindex internal hero preview route', () => {
    const preview = fs.readFileSync(
      source('src/pages/homepage-preview.astro'),
      'utf8'
    );

    expect(preview).toContain('noindex={true}');
    expect(preview).toContain('<HeroSection />');
    expect(preview).not.toContain('Trust Strip');
    expect(preview).not.toContain('Course Snapshot');
  });

  it('keeps hero content editable and free of forbidden legacy assets', () => {
    const heroData = fs.readFileSync(
      source('src/data/homepage/hero.ts'),
      'utf8'
    );
    const heroComponent = fs.readFileSync(
      source('src/components/homepage/HeroSection.astro'),
      'utf8'
    );
    expect(heroData).toContain('HomepageHeroContent');
    expect(heroData).toContain(
      "visualAsset: '/assets/homepage/hero/student-hero.jpg'"
    );
    expect(heroData).toContain("assetStatus: 'APPROVED_LOCAL'");
    expect(heroData).toContain('Digital Marketing');
    expect(heroData).toContain('AI Career Course.');
    expect(heroData).not.toContain('BJP-&-ABVP-Internship-1.webp');
    expect(heroComponent).toContain('<h1>');
    expect((heroComponent.match(/<h1/g) || []).length).toBe(1);
    expect(heroComponent).not.toContain('TrustStrip');
  });

  it('uses a replaceable student image with premium proof layout', () => {
    const visual = fs.readFileSync(
      source('src/components/homepage/HeroVisual.astro'),
      'utf8'
    );

    expect(visual).toContain('hero.visualAsset');
    expect(visual).toContain('visual-container');
    expect(visual).toContain('proof-card');
    expect(visual).toContain('tools-panel');
    expect(visual).not.toContain('BJP-&-ABVP-Internship-1.webp');
  });
});
