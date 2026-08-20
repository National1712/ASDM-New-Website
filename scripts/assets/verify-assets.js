import fs from 'fs';
import path from 'path';

const assetsDocsDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\assets';
const srcDataDir = 'C:\\xampp\\htdocs\\asdm-new-web\\src\\data';
const srcTypesDir = 'C:\\xampp\\htdocs\\asdm-new-web\\src\\types';

const requiredCsvs = [
  'ASSET-INVENTORY.csv',
  'DUPLICATE-ASSETS.csv',
  'SECTION-ASSET-MAP.csv',
  'ASSET-RENAMING-PLAN.csv',
];

const requiredMds = [
  'MISSING-ASSETS.md',
  'CONTENT-SOURCE-LOCK.md',
  'ASSET-QUALITY-REPORT.md',
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

function verifyAssets() {
  console.log('Starting verification of Asset Inventory Deliverables...\n');

  console.log('--- Checking CSV Databases ---');
  requiredCsvs.forEach((csv) => {
    checkFile(path.join(assetsDocsDir, csv), 50);
  });

  console.log('\n--- Checking MD Reports ---');
  requiredMds.forEach((md) => {
    checkFile(path.join(assetsDocsDir, md), 100);
  });

  console.log('\n--- Checking Manifest & Types ---');
  checkFile(path.join(srcDataDir, 'asset-manifest.json'), 100);
  checkFile(path.join(srcTypesDir, 'assets.ts'), 100);

  console.log('\n--- Checking Manifest Data Integrity ---');
  const manifestPath = path.join(srcDataDir, 'asset-manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      console.log(
        `✅ Asset manifest parsed successfully with ${manifest.length} records.`
      );

      // Ensure no business claims, alt text, or personal names are present
      let invalidCount = 0;
      manifest.forEach((entry) => {
        if (
          entry.alt !== undefined ||
          entry.student_name !== undefined ||
          entry.claim !== undefined
        ) {
          invalidCount++;
        }
      });

      if (invalidCount > 0) {
        console.error(
          `❌ QA Error: Found ${invalidCount} prohibited meta properties (alt text, student names, or claims) in asset-manifest.json!`
        );
        errorsCount++;
      } else {
        console.log(
          '✅ QA Success: Asset manifest contains only factual technical information.'
        );
      }
    } catch (err) {
      console.error(`❌ Manifest parse error: ${err.message}`);
      errorsCount++;
    }
  }

  if (errorsCount > 0) {
    console.error(
      `\n❌ Asset QA Verification failed with ${errorsCount} errors!`
    );
    process.exit(1);
  } else {
    console.log('\n✨ All Phase 3 asset deliverables verified successfully!');
  }
}

verifyAssets();
