import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'claims-verification.csv');

const claims = [
  {
    claim: '2,00,000+ Students Trained',
    source_url: 'https://www.asdm.co.in/',
    consistency: 'Inconsistent',
    conflicting_sources:
      'https://www.asdm.co.in/seo-course-in-ahmedabad (claims 50,000+); Love Tyagi Bio (claims 2.5L+)',
    verification_status: 'REQUIRES INTERNAL BUSINESS PROOF',
    recommended_action:
      'Perform internal database audit of registrations. Select a single verified historical figure and enforce it across all pages.',
    exact_source_url: 'https://www.asdm.co.in/',
    exact_visible_wording: '2,00,000+ Students Trained',
    page_section: 'Hero statistics block',
    extraction_method: 'Manual review of page text',
    source_count: 2,
    evidence_status: 'CONFLICTING WEBSITE WORDING',
    internal_proof_required: true,
  },
  {
    claim: '50,000+ Placements Across India',
    source_url: 'https://www.asdm.co.in/',
    consistency: 'Inconsistent',
    conflicting_sources:
      'https://www.asdm.co.in/placement (claims 7,000+ Placements Delivered)',
    verification_status: 'REQUIRES INTERNAL BUSINESS PROOF',
    recommended_action:
      'Audit placement officer records to count exact unique placements. Correct the homepage to prevent misleading figures.',
    exact_source_url: 'https://www.asdm.co.in/',
    exact_visible_wording: '50,000+ Placements Across India',
    page_section: 'Hero statistics block',
    extraction_method: 'Manual review of page text',
    source_count: 2,
    evidence_status: 'CONFLICTING WEBSITE WORDING',
    internal_proof_required: true,
  },
  {
    claim: '7,000+ Placement Delivered',
    source_url: 'https://www.asdm.co.in/placement',
    consistency: 'Inconsistent',
    conflicting_sources: 'https://www.asdm.co.in/ (claims 50,000+ Placements)',
    verification_status: 'REQUIRES INTERNAL BUSINESS PROOF',
    recommended_action:
      'Verify placement registries. Standardize all placement numbers to this lower, more probable figure pending proof.',
    exact_source_url: 'https://www.asdm.co.in/placement',
    exact_visible_wording: '7,000+ Placement Delivered',
    page_section: 'Page main statistics block',
    extraction_method: 'Manual review of page text',
    source_count: 1,
    evidence_status: 'CONFLICTING WEBSITE WORDING',
    internal_proof_required: true,
  },
  {
    claim: '1,000+ Placement Partners',
    source_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    consistency: 'Inconsistent',
    conflicting_sources:
      'https://www.asdm.co.in/placement (claims 100+ active partners in text, 700+ in graphics); https://www.asdm.co.in/ecommerce-course (claims 100+ E-Commerce partners)',
    verification_status: 'REQUIRES INTERNAL BUSINESS PROOF',
    recommended_action:
      'Export hiring partner company directory. Unify partner count across all courses to the verified number.',
    exact_source_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    exact_visible_wording: '1,000+ Placement Partners',
    page_section: 'Statistics block',
    extraction_method: 'Manual review of page text',
    source_count: 1,
    evidence_status: 'CONFLICTING WEBSITE WORDING',
    internal_proof_required: true,
  },
  {
    claim: '14+ Years in Digital Marketing Education',
    source_url: 'https://www.asdm.co.in/',
    consistency: 'Inconsistent',
    conflicting_sources:
      'https://www.asdm.co.in/about-us (claims founded in 2014, which indicates 12 years of history. Founder experience is listed since 2009).',
    verification_status: 'REQUIRES INTERNAL BUSINESS PROOF',
    recommended_action:
      'Disclose founder experience separate from corporate institute founding year (2014) to maintain truth in advertising.',
    exact_source_url: 'https://www.asdm.co.in/',
    exact_visible_wording: '14+ Years in Digital Marketing Education',
    page_section: 'Hero statistics block',
    extraction_method: 'Manual review of page text',
    source_count: 2,
    evidence_status: 'CONFLICTING WEBSITE WORDING',
    internal_proof_required: true,
  },
  {
    claim: 'Earn 50,000+ as a Freelancer in just 3 Months',
    source_url: 'https://www.asdm.co.in/',
    consistency: 'Inconsistent',
    conflicting_sources:
      'https://www.asdm.co.in/ecommerce-course (claims Earn 1,00,000+ as E-Commerce Expert in 3 Months)',
    verification_status: 'REQUIRES LEGAL REVIEW',
    recommended_action:
      'Remove all direct income guarantees to ensure compliance with ASCI and consumer protection rules. Rephrase to highlight freelancing skill acquisition.',
    exact_source_url: 'https://www.asdm.co.in/',
    exact_visible_wording: 'Earn 50,000+ as a Freelancer in just 3 Months',
    page_section: 'Feature highlight boxes',
    extraction_method: 'Manual review of page text',
    source_count: 2,
    evidence_status: 'CONFLICTING WEBSITE WORDING',
    internal_proof_required: true,
  },
  {
    claim:
      'ASDM is recognized by Ministry of Skill Development, Skill India, and NSDC',
    source_url: 'https://www.asdm.co.in/ecommerce-course',
    consistency: 'Consistent',
    conflicting_sources: 'None',
    verification_status: 'REQUIRES INTERNAL BUSINESS PROOF',
    recommended_action:
      'Obtain official registration certificates from NSDC/Skill India to keep in the legal archive. Retain on site.',
    exact_source_url: 'https://www.asdm.co.in/ecommerce-course',
    exact_visible_wording:
      'ASDM is proudly recognized by India’s top government skill development organizations... Ministry of Skill Development... Skill India... NSDC',
    page_section: 'Government recognition section',
    extraction_method: 'Manual review of page text',
    source_count: 2,
    evidence_status: 'WEBSITE WORDING CONFIRMED',
    internal_proof_required: true,
  },
];

function escapeCSV(field) {
  if (field === null || field === undefined) return '""';
  const str = String(field);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

function generateCSV() {
  const csvRows = [];
  csvRows.push(
    [
      'claim',
      'source_url',
      'consistency',
      'conflicting_sources',
      'verification_status',
      'recommended_action',
      'exact_source_url',
      'exact_visible_wording',
      'page_section',
      'extraction_method',
      'source_count',
      'evidence_status',
      'internal_proof_required',
    ].join(',')
  );

  claims.forEach((c) => {
    const row = [
      escapeCSV(c.claim),
      escapeCSV(c.source_url),
      escapeCSV(c.consistency),
      escapeCSV(c.conflicting_sources),
      escapeCSV(c.verification_status),
      escapeCSV(c.recommended_action),
      escapeCSV(c.exact_source_url),
      escapeCSV(c.exact_visible_wording),
      escapeCSV(c.page_section),
      escapeCSV(c.extraction_method),
      c.source_count,
      escapeCSV(c.evidence_status),
      c.internal_proof_required,
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Regenerated claims-verification.csv successfully!');
}

generateCSV();
