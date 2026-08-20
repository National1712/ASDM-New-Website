import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'program-inventory.csv');

const programs = [
  {
    course_name: 'AI Integrated Advanced Digital Marketing Program',
    duration:
      '5 Months / 12 Months (Explicitly stated on home, Conflicting: Surat FAQ says 4 months)',
    fee: 'Not found (Surat FAQ mentions 40k-90k range, but central fee is not found)',
    locations:
      'Ahmedabad (HO); Naroda; Surat (Inferred from contact and campus menu, requires confirmation)',
    syllabus_highlights:
      'SEO; Social Media Marketing; Google Ads (PPC); Email Marketing; Affiliate Marketing; AI Marketing Tools (Explicitly stated)',
    certifications: '15+ International Certifications (Explicitly stated)',
    claims:
      'Earn 50,000+ as a Freelancer in 3 Months; 100% Practical Training; 100% Placement Assistance (Explicitly stated)',
    conflicting_details:
      'Surat FAQ lists duration as 4 months. Fees are not listed on primary course routes.',
    name_evidence_url: 'https://www.asdm.co.in/',
    duration_evidence_url: 'https://www.asdm.co.in/',
    fee_evidence_url: 'Not found',
    placement_evidence_url: 'https://www.asdm.co.in/',
    certification_evidence_url: 'https://www.asdm.co.in/',
    confidence: 'MEDIUM',
    manual_confirmation_required: true,
  },
  {
    course_name: 'Professional Program in Advance Digital Marketing',
    duration:
      '12 Months (Inferred from track switches, Not found on specific page code)',
    fee: 'Not found',
    locations:
      'Ahmedabad (HO); Naroda; Surat (Inferred, requires confirmation)',
    syllabus_highlights:
      'Not found (Specific page clones the homepage, so distinct curriculum details are not found)',
    certifications: 'Not found (Specific page clones homepage)',
    claims: 'Not found (Specific page clones homepage)',
    conflicting_details:
      'The specific page is an exact code duplicate of the homepage, so no distinct professional program details exist.',
    name_evidence_url:
      'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    duration_evidence_url: 'Not found',
    fee_evidence_url: 'Not found',
    placement_evidence_url: 'Not found',
    certification_evidence_url: 'Not found',
    confidence: 'LOW',
    manual_confirmation_required: true,
  },
  {
    course_name: 'Advanced SEO Course',
    duration: 'Not found',
    fee: 'Not found',
    locations: 'Ahmedabad (Explicitly stated)',
    syllabus_highlights:
      'Google Algorithms; On-Page & Off-Page SEO; Local SEO; Schema Markup; Technical SEO Audits; Link Building (Explicitly stated)',
    certifications:
      'Google Search Ads Certification; ASDM SEO Specialisation Certificate (Explicitly stated)',
    claims:
      '1,00,000+ Placement Partners (Conflicting); 50,000+ Students Trained (Conflicting); Work on Live Search Projects (Explicitly stated)',
    conflicting_details:
      'Claims 50,000 trained and 1,000 partners on this page, which directly conflicts with the homepage stats.',
    name_evidence_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    duration_evidence_url: 'Not found',
    fee_evidence_url: 'Not found',
    placement_evidence_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    certification_evidence_url:
      'https://www.asdm.co.in/seo-course-in-ahmedabad',
    confidence: 'MEDIUM',
    manual_confirmation_required: true,
  },
  {
    course_name: 'E-Commerce Marketing Course',
    duration: '3 Months (Explicitly stated)',
    fee: 'Not found',
    locations:
      'Ahmedabad; Surat (Inferred from form dropdown, requires confirmation)',
    syllabus_highlights:
      'Shopify Store Development; Payment Gateway Integration; Order Fulfillment; Google Shopping Ads; Amazon & Flipkart Selling; E-Commerce SEO (Explicitly stated)',
    certifications: 'ASDM E-Commerce Mastery Certification (Explicitly stated)',
    claims:
      'Earn 1,00,000+ as E-Commerce Expert in 3 Months; 25+ Full time E-Commerce trainers; 100+ E-Commerce Partners (Explicitly stated)',
    conflicting_details:
      'Claims 25+ E-Commerce trainers (overlapping with digital trainers count). Prompts ₹1,00,000+ income guarantee.',
    name_evidence_url: 'https://www.asdm.co.in/ecommerce-course',
    duration_evidence_url: 'https://www.asdm.co.in/ecommerce-course',
    fee_evidence_url: 'Not found',
    placement_evidence_url: 'https://www.asdm.co.in/ecommerce-course',
    certification_evidence_url: 'https://www.asdm.co.in/ecommerce-course',
    confidence: 'HIGH',
    manual_confirmation_required: true,
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
      'course_name',
      'duration',
      'fee',
      'locations',
      'syllabus_highlights',
      'certifications',
      'claims',
      'conflicting_details',
      'name_evidence_url',
      'duration_evidence_url',
      'fee_evidence_url',
      'placement_evidence_url',
      'certification_evidence_url',
      'confidence',
      'manual_confirmation_required',
    ].join(',')
  );

  programs.forEach((p) => {
    const row = [
      escapeCSV(p.course_name),
      escapeCSV(p.duration),
      escapeCSV(p.fee),
      escapeCSV(p.locations),
      escapeCSV(p.syllabus_highlights),
      escapeCSV(p.certifications),
      escapeCSV(p.claims),
      escapeCSV(p.conflicting_details),
      escapeCSV(p.name_evidence_url),
      escapeCSV(p.duration_evidence_url),
      escapeCSV(p.fee_evidence_url),
      escapeCSV(p.placement_evidence_url),
      escapeCSV(p.certification_evidence_url),
      escapeCSV(p.confidence),
      p.manual_confirmation_required,
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Regenerated program-inventory.csv successfully!');
}

generateCSV();
