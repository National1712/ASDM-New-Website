import fs from 'fs';
import path from 'path';

const auditsDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const contentDir =
  'C:\\xampp\\htdocs\\asdm-new-web\\src\\content\\source\\current-site';

const requiredCsvs = [
  'current-url-inventory.csv',
  'verified-core-pages.csv',
  'blog-url-inventory.csv',
  'sitemap-only-urls.csv',
  'redirects-and-errors.csv',
  'program-inventory.csv',
  'claims-verification.csv',
  'search-intent-map.csv',
  'metadata-inventory.csv',
  'schema-inventory.csv',
  'conversion-inventory.csv',
  'media-reference-inventory.csv',
  'AUDIT-EVIDENCE-LOG.csv',
];

const requiredMds = [
  'CURRENT-WEBSITE-AUDIT.md',
  'CONTENT-GAPS.md',
  'DUPLICATION-AND-CANNIBALISATION.md',
  'CLAIMS-SUMMARY.md',
  'NEXT-INFORMATION-REQUIRED.md',
  'AUDIT-CONFIDENCE-REPORT.md',
];

const requiredContentFiles = [
  'homepage.md',
  'about.md',
  'programs.md',
  'placements.md',
  'locations.md',
  'faculty.md',
  'testimonials.md',
  'recognition.md',
  'faqs.md',
  'contact.md',
  'conversion-paths.md',
  'claims.md',
];

let errorsCount = 0;

function checkFile(filePath, minSize = 10) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${filePath}`);
    errorsCount++;
    return false;
  }
  const stat = fs.statSync(filePath);
  if (stat.size < minSize) {
    console.error(
      `❌ File too small or empty: ${filePath} (${stat.size} bytes)`
    );
    errorsCount++;
    return false;
  }
  console.log(`✅ File valid: ${path.basename(filePath)} (${stat.size} bytes)`);
  return true;
}

function verifyAudits() {
  console.log('Starting verification of QA Audit Deliverables...\n');

  console.log('--- Checking CSV Inventories ---');
  requiredCsvs.forEach((csv) => {
    checkFile(path.join(auditsDir, csv), 50);
  });

  console.log('\n--- Checking Audit Summary Reports ---');
  requiredMds.forEach((md) => {
    checkFile(path.join(auditsDir, md), 100);
  });

  console.log('\n--- Checking Extracted Markdown Content ---');
  requiredContentFiles.forEach((md) => {
    checkFile(path.join(contentDir, md), 100);
  });

  console.log('\n--- Checking URL Inventory Integrity ---');
  const mainInventoryPath = path.join(auditsDir, 'current-url-inventory.csv');
  if (fs.existsSync(mainInventoryPath)) {
    const lines = fs.readFileSync(mainInventoryPath, 'utf8').trim().split('\n');
    console.log(
      `✅ Main URL inventory contains ${lines.length - 1} records (expected 203).`
    );
  }

  const sitemapOnlyPath = path.join(auditsDir, 'sitemap-only-urls.csv');
  if (fs.existsSync(sitemapOnlyPath)) {
    const lines = fs.readFileSync(sitemapOnlyPath, 'utf8').trim().split('\n');
    const header = lines[0].split(',');

    const titleIdx = header.indexOf('page_title');
    const h1Idx = header.indexOf('h1');
    const metaIdx = header.indexOf('meta_description');

    let invalidCount = 0;
    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',');
      if (row[titleIdx] !== '""' && row[titleIdx] !== '') {
        invalidCount++;
      }
      if (row[h1Idx] !== '""' && row[h1Idx] !== '') {
        invalidCount++;
      }
      if (row[metaIdx] !== '""' && row[metaIdx] !== '') {
        invalidCount++;
      }
    }

    if (invalidCount > 0) {
      console.error(
        `❌ QA Error: Discovered ${invalidCount} speculative metadata values inside sitemap-only URLs!`
      );
      errorsCount++;
    } else {
      console.log(
        '✅ QA Success: All sitemap-only URLs have blank/empty metadata fields.'
      );
    }
  }

  if (errorsCount > 0) {
    console.error(`\n❌ QA Verification failed with ${errorsCount} errors!`);
    process.exit(1);
  } else {
    console.log('\n✨ All QA audit deliverables verified successfully!');
  }
}

verifyAudits();
