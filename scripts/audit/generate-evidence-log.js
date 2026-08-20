import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'AUDIT-EVIDENCE-LOG.csv');

const logEntries = [
  {
    evidence_id: 'ev-homepage',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/',
    source_url: 'https://www.asdm.co.in/',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, canonical_url, robots_directive, h1',
    unsupported_fields:
      'exact placement statistics (claims 50,000+ vs placement page 7,000+)',
    confidence: 'MEDIUM',
    notes:
      'Served as main entrance. Basic metadata validated, student and placement statistics require owner verification.',
  },
  {
    evidence_id: 'ev-about',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/about-us',
    source_url: 'https://www.asdm.co.in/about-us',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, canonical_url, robots_directive, h1',
    unsupported_fields:
      'founding year vs founder experience timelines (contradictory)',
    confidence: 'MEDIUM',
    notes:
      'Contains critical spelling and grammar mistakes. History details require manual business confirmation.',
  },
  {
    evidence_id: 'ev-surat',
    audit_file: 'verified-core-pages.csv',
    record_identifier:
      'https://www.asdm.co.in/digital-marketing-course-in-surat',
    source_url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, canonical_url, robots_directive, h1',
    unsupported_fields:
      'offline campus physical address details (none listed in page content, checked footer)',
    confidence: 'HIGH',
    notes:
      'Surat localized landing page. Features a unique course strategy session CTA.',
  },
  {
    evidence_id: 'ev-placement',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/placement',
    source_url: 'https://www.asdm.co.in/placement',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, h1, testimonial items',
    unsupported_fields:
      'exact placement count (claims 7,000+ placements vs homepage 50,000+)',
    confidence: 'MEDIUM',
    notes:
      'Testimonials list actual company placements, but placement statistics clash with homepage.',
  },
  {
    evidence_id: 'ev-contact',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/contact-us',
    source_url: 'https://www.asdm.co.in/contact-us',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, h1, address elements',
    unsupported_fields:
      'Naroda physical location details (missing from form dropdown selections)',
    confidence: 'HIGH',
    notes: 'Contains physical map links and locations directory.',
  },
  {
    evidence_id: 'ev-faq',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/faq',
    source_url: 'https://www.asdm.co.in/faq',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, h1, FAQ markup list',
    unsupported_fields: 'none',
    confidence: 'HIGH',
    notes:
      'FAQ page containing general questions. Candidate for global FAQ layout merge.',
  },
  {
    evidence_id: 'ev-seo',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    source_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, h1, curriculum list',
    unsupported_fields:
      'exact student placement partners (claims 1000+ vs placement page 700)',
    confidence: 'MEDIUM',
    notes: 'Course-specific page for SEO targeting Ahmedabad.',
  },
  {
    evidence_id: 'ev-mumbai',
    audit_file: 'verified-core-pages.csv',
    record_identifier:
      'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    source_url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields: 'url, page_type, page_title, meta_description, h1',
    unsupported_fields:
      'physical address details (none found, target is online)',
    confidence: 'MEDIUM',
    notes:
      'Targeting online audience in Mumbai but contains offline claims in copy. High risk.',
  },
  {
    evidence_id: 'ev-ecommerce',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/ecommerce-course',
    source_url: 'https://www.asdm.co.in/ecommerce-course',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields:
      'url, page_type, page_title, meta_description, h1, curriculum list',
    unsupported_fields: 'income outcomes (claims Earn 1,00,000+ freelancer)',
    confidence: 'HIGH',
    notes: '3-month e-commerce course landing page.',
  },
  {
    evidence_id: 'ev-advace-program',
    audit_file: 'verified-core-pages.csv',
    record_identifier:
      'https://www.asdm.co.in/advace-digital-marketing-program',
    source_url: 'https://www.asdm.co.in/advace-digital-marketing-program',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields: 'url, page_type, page_title, h1, content block',
    unsupported_fields: 'unique program syllabus (clones homepage exactly)',
    confidence: 'LOW',
    notes: 'Cloned page on misspelled URL. Candidate for redirection.',
  },
  {
    evidence_id: 'ev-professional-program',
    audit_file: 'verified-core-pages.csv',
    record_identifier:
      'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    source_url:
      'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields: 'url, page_type, page_title, h1, content block',
    unsupported_fields: 'unique program syllabus (clones homepage exactly)',
    confidence: 'LOW',
    notes: 'Cloned page. Candidate for redirection.',
  },
  {
    evidence_id: 'ev-blog-index',
    audit_file: 'verified-core-pages.csv',
    record_identifier: 'https://www.asdm.co.in/blog/',
    source_url: 'https://www.asdm.co.in/blog/',
    evidence_type: 'Fetched page HTML source',
    extraction_date: '2026-08-01',
    extraction_method: 'Axios fetch / HTML parse',
    verified_fields: 'url, page_type, page_title, h1',
    unsupported_fields: 'none',
    confidence: 'HIGH',
    notes: 'WordPress index route. Serves blog articles feed.',
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
      'evidence_id',
      'audit_file',
      'record_identifier',
      'source_url',
      'evidence_type',
      'extraction_date',
      'extraction_method',
      'verified_fields',
      'unsupported_fields',
      'confidence',
      'notes',
    ].join(',')
  );

  logEntries.forEach((e) => {
    const row = [
      escapeCSV(e.evidence_id),
      escapeCSV(e.audit_file),
      escapeCSV(e.record_identifier),
      escapeCSV(e.source_url),
      escapeCSV(e.evidence_type),
      escapeCSV(e.extraction_date),
      escapeCSV(e.extraction_method),
      escapeCSV(e.verified_fields),
      escapeCSV(e.unsupported_fields),
      escapeCSV(e.confidence),
      escapeCSV(e.notes),
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Generated AUDIT-EVIDENCE-LOG.csv successfully!');
}

generateCSV();
