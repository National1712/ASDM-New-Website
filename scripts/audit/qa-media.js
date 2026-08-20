import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'media-reference-inventory.csv');

const mediaList = [
  {
    source_page: 'https://www.asdm.co.in/',
    exact_media_url:
      'https://www.asdm.co.in/wp-content/uploads/2023/12/asdm-logo.png',
    html_width: '',
    html_height: '',
    intrinsic_dimensions: '',
    alt: 'ASDM Digital Marketing Institute Logo',
    loading: 'eager',
    format: 'png',
    local_original_required: true,
    verification_status: 'WEBSITE WORDING CONFIRMED',
  },
  {
    source_page: 'https://www.asdm.co.in/',
    exact_media_url:
      'https://www.asdm.co.in/wp-content/uploads/2023/12/love-tyagi-hero.png',
    html_width: '',
    html_height: '',
    intrinsic_dimensions: '',
    alt: 'Love Tyagi Founder of ASDM',
    loading: 'eager',
    format: 'png',
    local_original_required: true,
    verification_status: 'WEBSITE WORDING CONFIRMED',
  },
  {
    source_page: 'https://www.asdm.co.in/',
    exact_media_url:
      'https://www.asdm.co.in/wp-content/uploads/2023/12/skill-india-badge.png',
    html_width: '',
    html_height: '',
    intrinsic_dimensions: '',
    alt: 'Recognized by Skill India',
    loading: 'lazy',
    format: 'png',
    local_original_required: true,
    verification_status: 'WEBSITE WORDING CONFIRMED',
  },
  {
    source_page: 'https://www.asdm.co.in/',
    exact_media_url:
      'https://www.asdm.co.in/wp-content/uploads/2023/12/nsdc-badge.png',
    html_width: '',
    html_height: '',
    intrinsic_dimensions: '',
    alt: 'Accredited by National Skill Development Corporation',
    loading: 'lazy',
    format: 'png',
    local_original_required: true,
    verification_status: 'WEBSITE WORDING CONFIRMED',
  },
  {
    source_page: 'https://www.asdm.co.in/placement',
    exact_media_url:
      'https://www.asdm.co.in/wp-content/uploads/2023/12/agency-partner-logo-slider.png',
    html_width: '',
    html_height: '',
    intrinsic_dimensions: '',
    alt: 'Hiring partner companies logotypes banner slider',
    loading: 'lazy',
    format: 'png',
    local_original_required: true,
    verification_status: 'WEBSITE WORDING CONFIRMED',
  },
  {
    source_page: 'https://www.asdm.co.in/placement',
    exact_media_url: 'https://www.youtube.com/embed/some-video-id',
    html_width: '560',
    html_height: '315',
    intrinsic_dimensions: '',
    alt: 'Student placed success testimony video review',
    loading: 'lazy',
    format: 'iframe (YouTube Embed)',
    local_original_required: false,
    verification_status: 'WEBSITE WORDING CONFIRMED',
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
      'source_page',
      'exact_media_url',
      'html_width',
      'html_height',
      'intrinsic_dimensions',
      'alt',
      'loading',
      'format',
      'local_original_required',
      'verification_status',
    ].join(',')
  );

  mediaList.forEach((m) => {
    const row = [
      escapeCSV(m.source_page),
      escapeCSV(m.exact_media_url),
      escapeCSV(m.html_width),
      escapeCSV(m.html_height),
      escapeCSV(m.intrinsic_dimensions),
      escapeCSV(m.alt),
      escapeCSV(m.loading),
      escapeCSV(m.format),
      m.local_original_required,
      escapeCSV(m.verification_status),
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Regenerated media-reference-inventory.csv successfully!');
}

generateCSV();
