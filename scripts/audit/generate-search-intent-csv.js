import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'search-intent-map.csv');

const mappings = [
  {
    url: 'https://www.asdm.co.in/',
    target_keyword: 'digital marketing course in ahmedabad',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Primary target is Ahmedabad. Severe cannibalisation from `/advace-digital-marketing-program` and `/professional-program-in-advance-digital-marketing`.',
  },
  {
    url: 'https://www.asdm.co.in/about-us',
    target_keyword: 'about asdm institute',
    search_intent: 'navigational',
    local_targeting_overlap:
      'None (Brand-specific navigational page serving all campuses).',
  },
  {
    url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    target_keyword: 'digital marketing course in surat',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Primary target is Surat. Contains some Ahmedabad FAQ content, but structurally isolated for Surat local intent.',
  },
  {
    url: 'https://www.asdm.co.in/placement',
    target_keyword: 'asdm placements recruiter list',
    search_intent: 'navigational',
    local_targeting_overlap:
      'None. Combines outcomes across Ahmedabad and Surat.',
  },
  {
    url: 'https://www.asdm.co.in/contact-us',
    target_keyword: 'asdm campus locations phone numbers',
    search_intent: 'navigational',
    local_targeting_overlap:
      'Lists addresses and maps for Ahmedabad (HO), Naroda, and Surat.',
  },
  {
    url: 'https://www.asdm.co.in/faq',
    target_keyword: 'digital marketing course questions',
    search_intent: 'informational',
    local_targeting_overlap:
      'Contains duplicate FAQ entries from both Ahmedabad and Surat pages.',
  },
  {
    url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    target_keyword: 'seo course in ahmedabad',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Focuses purely on Ahmedabad. Minor overlap with general digital marketing course search intent.',
  },
  {
    url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    target_keyword: 'digital marketing course in mumbai',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Targets Mumbai online market. Overlaps with local offline programs because meta description claims "offline and online".',
  },
  {
    url: 'https://www.asdm.co.in/ecommerce-course',
    target_keyword: 'ecommerce marketing course',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Aims at Ahmedabad and Surat students but targets broad keyword.',
  },
  {
    url: 'https://www.asdm.co.in/advace-digital-marketing-program',
    target_keyword: 'digital marketing course in ahmedabad',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Severe 100% overlap/cannibalisation with the homepage since it is an exact content clone.',
  },
  {
    url: 'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    target_keyword: 'digital marketing course in ahmedabad',
    search_intent: 'transactional',
    local_targeting_overlap:
      'Severe 100% overlap/cannibalisation with the homepage since it is an exact content clone.',
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
    ['url', 'target_keyword', 'search_intent', 'local_targeting_overlap'].join(
      ','
    )
  );

  mappings.forEach((m) => {
    const row = [
      escapeCSV(m.url),
      escapeCSV(m.target_keyword),
      escapeCSV(m.search_intent),
      escapeCSV(m.local_targeting_overlap),
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Generated search-intent-map.csv successfully!');
}

generateCSV();
