import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'schema-inventory.csv');

const schemas = [
  {
    url: 'https://www.asdm.co.in/',
    schema_type: 'Organization; WebSite; FAQPage; Product',
    properties_found:
      'Organization (name, alternateName, url, logo, contactPoint, sameAs); WebSite (name, url, potentialAction); FAQPage (mainEntity Q&A list); Product (name, image, description, brand, offers, aggregateRating)',
    validation_issues:
      'Product schema lacks "sku" and "review" fields. FAQPage answers contain raw HTML markup. Product aggregateRating (93,480 ratings, 9.9 value) is extremely high and duplicate across pages.',
  },
  {
    url: 'https://www.asdm.co.in/about-us',
    schema_type: 'Organization; WebSite',
    properties_found:
      'Organization (name, url, logo, contactPoint, sameAs); WebSite (name, url, potentialAction)',
    validation_issues:
      'No LocalBusiness or EducationalOrganization schema present.',
  },
  {
    url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    schema_type: 'Organization; WebSite; FAQPage; Product',
    properties_found:
      'Organization (name, url, logo, contactPoint, sameAs); WebSite (name, url, potentialAction); FAQPage (Surat specific questions); Product (name, image, description, offers, aggregateRating)',
    validation_issues:
      'Aggregate rating counts (93,480) match the homepage exactly. No local Surat branch LocalBusiness schema mapping.',
  },
  {
    url: 'https://www.asdm.co.in/placement',
    schema_type: 'Organization; WebSite',
    properties_found:
      'Organization (name, url, logo, contactPoint); WebSite (name, url)',
    validation_issues: 'Lacks student outcome or placement schemas.',
  },
  {
    url: 'https://www.asdm.co.in/contact-us',
    schema_type: 'Organization; WebSite',
    properties_found: 'Organization (name, url, logo); WebSite (name, url)',
    validation_issues:
      'Lacks LocalBusiness schema mapping for the multiple physical campuses (Ahmedabad Shyamal, Naroda, Surat).',
  },
  {
    url: 'https://www.asdm.co.in/faq',
    schema_type: 'Organization; WebSite; FAQPage',
    properties_found:
      'Organization (name, url); WebSite (name, url); FAQPage (mainEntity general Q&A list)',
    validation_issues:
      'Main entity questions overlap extensively with the localized FAQ schemas on Surat/Ahmedabad landing pages.',
  },
  {
    url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    schema_type: 'Organization; WebSite; FAQPage; Product',
    properties_found:
      'Organization (name, url); WebSite (name, url); FAQPage (mainEntity); Product (name, image, offers, aggregateRating)',
    validation_issues:
      'Lacks specific Course schema. Product schema aggregate rating is duplicated (93,480 ratings, 9.9 ratingValue).',
  },
  {
    url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    schema_type: 'Organization; WebSite; FAQPage; Product',
    properties_found:
      'Organization (name, alternateName, url, logo, contactPoint, sameAs); WebSite (name, url, potentialAction); FAQPage (Mumbai specific Q&As); Product (name, image, description, brand, offers, aggregateRating)',
    validation_issues:
      'Lacks LocalBusiness schema since there is no physical campus in Mumbai. Product rating is identical to other pages (93,480 ratings, 9.9 ratingValue).',
  },
  {
    url: 'https://www.asdm.co.in/ecommerce-course',
    schema_type: 'Organization; WebSite',
    properties_found: 'Organization (name, url); WebSite (name, url)',
    validation_issues:
      'Lacks Course or Product schema despite being a course details page.',
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
    ['url', 'schema_type', 'properties_found', 'validation_issues'].join(',')
  );

  schemas.forEach((s) => {
    const row = [
      escapeCSV(s.url),
      escapeCSV(s.schema_type),
      escapeCSV(s.properties_found),
      escapeCSV(s.validation_issues),
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Generated schema-inventory.csv successfully!');
}

generateCSV();
