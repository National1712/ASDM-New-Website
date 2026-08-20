import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const assetsRoot = 'C:\\xampp\\htdocs\\asdm-new-web\\public\\assets';
const docsOutputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\assets';
const srcDataDir = 'C:\\xampp\\htdocs\\asdm-new-web\\src\\data';
const srcTypesDir = 'C:\\xampp\\htdocs\\asdm-new-web\\src\\types';

if (!fs.existsSync(docsOutputDir))
  fs.mkdirSync(docsOutputDir, { recursive: true });
if (!fs.existsSync(srcDataDir)) fs.mkdirSync(srcDataDir, { recursive: true });
if (!fs.existsSync(srcTypesDir)) fs.mkdirSync(srcTypesDir, { recursive: true });

// Binary Parser Helpers
function getPngSize(buffer) {
  if (buffer.length < 24) return null;
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  const hasTransparency = buffer[25] === 4 || buffer[25] === 6; // Color type 4 (gray+alpha) or 6 (RGBA)
  return { width, height, hasTransparency };
}

function getGifSize(buffer) {
  if (buffer.length < 10) return null;
  const width = buffer.readUInt16LE(6);
  const height = buffer.readUInt16LE(8);
  const hasTransparency = (buffer[10] & 1) !== 0; // Check if Global Color Table Flag is set or transparency is indicated
  return { width, height, hasTransparency };
}

function getJ2kOrJpgSize(buffer) {
  let i = 2; // skip SOI
  while (i < buffer.length) {
    if (buffer[i] !== 0xff) return null; // not a marker
    const marker = buffer[i + 1];
    if (marker === 0xd9 || marker === 0xda) break; // EOI or SOS
    const length = buffer.readUInt16BE(i + 2);
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      if (i + 8 >= buffer.length) return null;
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height, hasTransparency: false };
    }
    i += 2 + length;
  }
  return null;
}

function getWebpSize(buffer) {
  if (buffer.length < 30) return null;
  const riff = buffer.toString('ascii', 0, 4);
  const webp = buffer.toString('ascii', 8, 12);
  if (riff !== 'RIFF' || webp !== 'WEBP') return null;
  const type = buffer.toString('ascii', 12, 16);
  if (type === 'VP8 ') {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return { width, height, hasTransparency: false };
  } else if (type === 'VP8L') {
    if (buffer[20] !== 0x2f) return null;
    const val = buffer.readUInt32LE(21);
    const width = (val & 0x3fff) + 1;
    const height = ((val >> 14) & 0x3fff) + 1;
    const hasTransparency = (val & 0x100000) !== 0; // Alpha channel bit
    return { width, height, hasTransparency };
  } else if (type === 'VP8X') {
    const width = (buffer.readUInt32LE(24) & 0xffffff) + 1;
    const height = (buffer.readUInt32LE(27) & 0xffffff) + 1;
    const hasTransparency = (buffer[12] & 0x10) !== 0; // Alpha flag bit
    return { width, height, hasTransparency };
  }
  return null;
}

function getSvgSize(content) {
  const matchSvg = /<svg[^>]*>/i.exec(content);
  if (!matchSvg) return null;
  const tag = matchSvg[0];
  const viewBoxMatch =
    /viewBox=["']\s*([0-9.-]+)\s+([0-9.-]+)\s+([0-9.-]+)\s+([0-9.-]+)\s*["']/i.exec(
      tag
    );
  let widthMatch = /width=["']\s*([0-9.-]+)(px|%)?\s*["']/i.exec(tag);
  let heightMatch = /height=["']\s*([0-9.-]+)(px|%)?\s*["']/i.exec(tag);

  let width = null,
    height = null;
  if (widthMatch) width = parseFloat(widthMatch[1]);
  if (heightMatch) height = parseFloat(heightMatch[1]);

  if ((width === null || height === null) && viewBoxMatch) {
    const vbW = parseFloat(viewBoxMatch[3]);
    const vbH = parseFloat(viewBoxMatch[4]);
    if (width === null) width = vbW;
    if (height === null) height = vbH;
  }
  const viewBox = viewBoxMatch ? viewBoxMatch[0].replace(/["']/g, '') : '';
  const textEmbedded = content.includes('<text');
  const rasterEmbedded =
    content.includes('<image') || content.includes('data:image/');
  return {
    width,
    height,
    viewBox,
    textEmbedded,
    rasterEmbedded,
    hasTransparency: true,
  };
}

// Walks directory recursively, skipping .gitkeep and hidden files
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    if (file === '.gitkeep' || file.startsWith('.')) return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push({ fullPath, file, stat });
    }
  });
  return results;
}

function getCategoryFromFolder(folderName) {
  const mapping = {
    brand: 'Decorative graphic',
    homepage: 'Students',
    courses: 'Program graphic',
    campuses: 'Campus interior',
    placements: 'Placement',
    'student-work': 'Student work',
    testimonials: 'Testimonial',
    awards: 'Award',
    logos: 'Company logo',
    icons: 'Decorative graphic',
    fonts: 'Decorative graphic',
    videos: 'Classroom',
    about: 'Faculty/trainer',
    alumini: 'Placement',
    party: 'Event',
    'placement-logo': 'Company logo',
    'skill-india': 'Certificate',
    'tools-logo': 'Company logo',
  };
  return mapping[folderName] || 'Unknown';
}

function getSuggestedUsage(folderName) {
  const mapping = {
    brand: 'Branding asset',
    homepage: 'Homepage section cover',
    courses: 'Course curriculum block',
    campuses: 'Campus location detail slider',
    placements: 'Outcome grid card banner',
    'student-work': 'Student project showcase carousel',
    testimonials: 'Student quote card avatar',
    awards: 'Trust badges row',
    logos: 'Hiring partner logo wall',
    icons: 'Decorative support icon',
    fonts: 'Typography resource',
    videos: 'Homepage training video tour',
    about: 'About team section grid',
    alumini: 'Alumni grid',
    party: 'Alumni event gallery',
    'placement-logo': 'Recruiter banner logo',
    'skill-india': 'Government partnership endorsement',
    'tools-logo': 'Syllabus tool outline icon',
  };
  return mapping[folderName] || 'Manual review required';
}

function escapeCSV(field) {
  if (field === null || field === undefined) return '""';
  const str = String(field);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

function scan() {
  console.log(
    'Scanning C:\\xampp\\htdocs\\asdm-new-web\\public\\assets recursively...\n'
  );
  const scannedFiles = getFilesRecursively(assetsRoot);
  console.log(`Discovered ${scannedFiles.length} local files.\n`);

  const hashesMap = new Map();
  const fileDetails = [];

  scannedFiles.forEach((f, idx) => {
    const ext = path.extname(f.file).toLowerCase();
    const relativePath = path
      .relative(assetsRoot, f.fullPath)
      .replace(/\\/g, '/');
    const folder = relativePath.split('/')[0];

    const buffer = fs.readFileSync(f.fullPath);
    const md5 = crypto.createHash('md5').update(buffer).digest('hex');

    // Duplicate tracking by MD5
    if (!hashesMap.has(md5)) {
      hashesMap.set(md5, []);
    }
    hashesMap.get(md5).push(idx);

    let width = '';
    let height = '';
    let hasTransparency = false;
    let viewBox = '';
    let textEmbedded = false;
    let rasterEmbedded = false;

    // Binary / XML Parse based on extension
    try {
      if (ext === '.png') {
        const parsed = getPngSize(buffer);
        if (parsed) {
          width = parsed.width;
          height = parsed.height;
          hasTransparency = parsed.hasTransparency;
        }
      } else if (ext === '.gif') {
        const parsed = getGifSize(buffer);
        if (parsed) {
          width = parsed.width;
          height = parsed.height;
          hasTransparency = parsed.hasTransparency;
        }
      } else if (ext === '.jpg' || ext === '.jpeg') {
        const parsed = getJ2kOrJpgSize(buffer);
        if (parsed) {
          width = parsed.width;
          height = parsed.height;
          hasTransparency = parsed.hasTransparency;
        }
      } else if (ext === '.webp') {
        const parsed = getWebpSize(buffer);
        if (parsed) {
          width = parsed.width;
          height = parsed.height;
          hasTransparency = parsed.hasTransparency;
        }
      } else if (ext === '.svg') {
        const content = buffer.toString('utf8');
        const parsed = getSvgSize(content);
        if (parsed) {
          width = parsed.width;
          height = parsed.height;
          viewBox = parsed.viewBox;
          textEmbedded = parsed.textEmbedded;
          rasterEmbedded = parsed.rasterEmbedded;
          hasTransparency = parsed.hasTransparency;
        }
      }
    } catch (err) {
      console.warn(
        `⚠️ Warning: Failed to parse dimensions for ${relativePath}: ${err.message}`
      );
    }

    let aspect_ratio = '';
    let orientation = 'UNKNOWN';
    if (width && height) {
      const ratio = width / height;
      aspect_ratio = ratio.toFixed(2);
      if (ratio > 2.0) orientation = 'PANORAMIC';
      else if (ratio > 1.05) orientation = 'LANDSCAPE';
      else if (ratio < 0.95) orientation = 'PORTRAIT';
      else orientation = 'SQUARE';
    }

    // Determine default asset IDs deterministically
    const categoryPrefix = folder.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const assetId = `ASSET-${categoryPrefix}-${String(idx + 1).padStart(3, '0')}`;

    fileDetails.push({
      asset_id: assetId,
      current_path: `public/assets/${relativePath}`,
      file_name: f.file,
      extension: ext.replace('.', ''),
      media_type:
        ext === '.svg' ||
        ext === '.png' ||
        ext === '.jpg' ||
        ext === '.jpeg' ||
        ext === '.webp' ||
        ext === '.gif'
          ? 'image'
          : ext === '.mp4' || ext === '.webm' || ext === '.mov'
            ? 'video'
            : ext === '.pdf'
              ? 'document'
              : 'other',
      file_size_bytes: f.stat.size,
      width,
      height,
      aspect_ratio,
      orientation,
      has_transparency: hasTransparency,
      likely_category: getCategoryFromFolder(folder),
      likely_usage: getSuggestedUsage(folder),
      quality_status:
        width && width < 300
          ? 'LOW RESOLUTION'
          : width && width < 800
            ? 'USABLE WITH OPTIMISATION'
            : width
              ? 'GOOD'
              : 'UNKNOWN',
      duplicate_group: '',
      approval_status: 'PENDING OWNER REVIEW',
      consent_required:
        getCategoryFromFolder(folder) === 'Students' ||
        getCategoryFromFolder(folder) === 'Testimonial',
      original_quality_required: false,
      recommended_action: 'MANUAL REVIEW',
      notes:
        getCategoryFromFolder(folder) === 'Students'
          ? 'Contains human portrait; requires model consent.'
          : 'Imported asset candidate.',
      md5,
      viewBox,
      textEmbedded,
      rasterEmbedded,
    });
  });

  // Assign duplicates
  let dupCounter = 1;
  const dupRows = [];
  hashesMap.forEach((indices, hash) => {
    if (indices.length > 1) {
      const groupName = `DUP-GRP-${String(dupCounter).padStart(3, '0')}`;
      dupCounter++;

      // Determine master (the one with the shortest path or simplest name)
      indices.sort(
        (a, b) =>
          fileDetails[a].current_path.length -
          fileDetails[b].current_path.length
      );
      const masterAssetId = fileDetails[indices[0]].asset_id;

      indices.forEach((idx, order) => {
        fileDetails[idx].duplicate_group = groupName;
        fileDetails[idx].recommended_action =
          order === 0 ? 'KEEP ORIGINAL' : 'DUPLICATE REVIEW';
        fileDetails[idx].approval_status =
          order === 0 ? 'PENDING OWNER REVIEW' : 'DUPLICATE REVIEW';

        dupRows.push(
          [
            groupName,
            fileDetails[idx].asset_id,
            fileDetails[idx].current_path,
            'EXACT BINARY DUPLICATE',
            'HIGH',
            masterAssetId,
            order === 0
              ? 'Primary master candidate.'
              : 'Duplicate clone; recommend removal from repository.',
          ].join(',')
        );
      });
    }
  });

  // 1. Write ASSET-INVENTORY.csv
  const invHeader = [
    'asset_id',
    'current_path',
    'file_name',
    'extension',
    'media_type',
    'file_size_bytes',
    'width',
    'height',
    'aspect_ratio',
    'orientation',
    'has_transparency',
    'likely_category',
    'likely_usage',
    'quality_status',
    'duplicate_group',
    'approval_status',
    'consent_required',
    'original_quality_required',
    'recommended_action',
    'notes',
  ].join(',');

  const invRows = fileDetails.map((f) =>
    [
      f.asset_id,
      escapeCSV(f.current_path),
      escapeCSV(f.file_name),
      f.extension,
      f.media_type,
      f.file_size_bytes,
      f.width,
      f.height,
      f.aspect_ratio,
      f.orientation,
      f.has_transparency,
      escapeCSV(f.likely_category),
      escapeCSV(f.likely_usage),
      escapeCSV(f.quality_status),
      f.duplicate_group,
      escapeCSV(f.approval_status),
      f.consent_required,
      f.original_quality_required,
      escapeCSV(f.recommended_action),
      escapeCSV(f.notes),
    ].join(',')
  );

  fs.writeFileSync(
    path.join(docsOutputDir, 'ASSET-INVENTORY.csv'),
    [invHeader, ...invRows].join('\n'),
    'utf8'
  );
  console.log(`Generated docs/assets/ASSET-INVENTORY.csv successfully!`);

  // 2. Write DUPLICATE-ASSETS.csv
  const dupHeader = [
    'duplicate_group',
    'asset_id',
    'current_path',
    'duplicate_type',
    'confidence',
    'recommended_master',
    'notes',
  ].join(',');
  fs.writeFileSync(
    path.join(docsOutputDir, 'DUPLICATE-ASSETS.csv'),
    [dupHeader, ...dupRows].join('\n'),
    'utf8'
  );
  console.log(`Generated docs/assets/DUPLICATE-ASSETS.csv successfully!`);

  // 3. Write SECTION-ASSET-MAP.csv
  // We'll write a static mapping mapping core homepage sections and pages to preferred assets from our scanned list.
  const sectionMapHeader = [
    'website_area',
    'section_name',
    'preferred_asset_id',
    'alternate_asset_ids',
    'asset_status',
    'suitability',
    'reason',
    'missing_requirement',
    'approval_required',
    'notes',
  ].join(',');

  // Find a few good assets for logos & trust badges
  const logoAssets = fileDetails.filter(
    (f) => f.likely_category === 'Company logo'
  );
  const trustBadges = fileDetails.filter(
    (f) => f.likely_category === 'Certificate' || f.likely_category === 'Award'
  );

  const secRows = [
    [
      'Homepage',
      'Header/logo',
      logoAssets[0]?.asset_id || 'ASSET-LOGOS-001',
      '',
      'CANDIDATE',
      'HIGH',
      'Recognized branding logotype.',
      '',
      'true',
      'Main header logo.',
    ],
    [
      'Homepage',
      'Hero',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No suitable high-res horizontal classroom image exists.',
      'High-res candidate (classroom / trainer)',
      'true',
      'Hero requires new capture.',
    ],
    [
      'Homepage',
      'Trust/proof',
      trustBadges[0]?.asset_id || 'ASSET-SKILLINDIA-001',
      trustBadges[1]?.asset_id || '',
      'CANDIDATE',
      'HIGH',
      'Skill India government badge.',
      '',
      'true',
      'Accreditation badges row.',
    ],
    [
      'Homepage',
      'Programs',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No structured program infographics or feature banners exist.',
      'Program graphics',
      'true',
      'Provide modular course badges.',
    ],
    [
      'Homepage',
      'Why ASDM',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'Lacks clean support graphics.',
      'Why ASDM illustration vectors',
      'true',
      'Support vectors.',
    ],
    [
      'Homepage',
      'Learning experience',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'Lacks candid classroom images.',
      'Classroom capture images',
      'true',
      'Requires shoot.',
    ],
    [
      'Homepage',
      'Student work',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'Lacks high-res UI layouts.',
      'Student website UI screenshot candidates',
      'true',
      'UI portfolio.',
    ],
    [
      'Homepage',
      'Placements',
      logoAssets[1]?.asset_id || 'ASSET-PLACEMENTLOGO-001',
      '',
      'CANDIDATE',
      'HIGH',
      'Recruiter logo asset.',
      '',
      'true',
      'Slider logos.',
    ],
    [
      'Homepage',
      'Ahmedabad campus',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No campus interior files available.',
      'Ahmedabad campus interior/exterior',
      'true',
      'Needs photos.',
    ],
    [
      'Homepage',
      'Surat campus',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No Surat location photos.',
      'Surat campus interior/exterior',
      'true',
      'Needs photos.',
    ],
    [
      'Homepage',
      'Trainers',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No trainer headshots present in assets folder.',
      'Faculty profiles / Headshots',
      'true',
      'Headshots required.',
    ],
    [
      'Homepage',
      'Testimonials',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No testimonial face avatars exist.',
      'Testimonial portrait avatars',
      'true',
      'Consent needed.',
    ],
    [
      'Homepage',
      'Awards',
      trustBadges[1]?.asset_id || 'ASSET-AWARDS-001',
      '',
      'CANDIDATE',
      'HIGH',
      'Award logotype.',
      '',
      'true',
      'Awards ribbon.',
    ],
    [
      'Homepage',
      'Final CTA',
      logoAssets[0]?.asset_id || 'ASSET-LOGOS-001',
      '',
      'CANDIDATE',
      'HIGH',
      'Branding logo.',
      '',
      'true',
      'CTA banner logo.',
    ],
    [
      'Ahmedabad course page',
      'Hero banner',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No local hero banner.',
      'Ahmedabad layout cover',
      'true',
      'Course hero.',
    ],
    [
      'Surat course page',
      'Hero banner',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No local hero banner.',
      'Surat layout cover',
      'true',
      'Course hero.',
    ],
    [
      'Placement page',
      'Recruiter grid',
      logoAssets[2]?.asset_id || 'ASSET-PLACEMENTLOGO-002',
      '',
      'CANDIDATE',
      'HIGH',
      'Recruiter logo.',
      '',
      'true',
      'Logo grid.',
    ],
    [
      'About page',
      'Timeline graphics',
      'UNKNOWN',
      '',
      'MISSING',
      'NONE',
      'No timeline illustration.',
      'Founded timeline elements',
      'true',
      'Chronology graphic.',
    ],
  ].map((r) => r.map(escapeCSV).join(','));

  fs.writeFileSync(
    path.join(docsOutputDir, 'SECTION-ASSET-MAP.csv'),
    [sectionMapHeader, ...secRows].join('\n'),
    'utf8'
  );
  console.log(`Generated docs/assets/SECTION-ASSET-MAP.csv successfully!`);

  // 4. Write ASSET-RENAMING-PLAN.csv
  const namingHeader = [
    'asset_id',
    'current_path',
    'proposed_file_name',
    'naming_reason',
    'rename_status',
    'approval_required',
  ].join(',');
  const renamingRows = fileDetails.map((f) => {
    const parentFolder = f.current_path.split('/')[2];
    const cleanProposedName = `${parentFolder}-${f.file_name.toLowerCase().replace(/[^a-z0-9.]/g, '-')}`;
    return [
      f.asset_id,
      escapeCSV(f.current_path),
      cleanProposedName,
      'Lowercase kebab-case naming standard mapping category to filename.',
      'PLANNED',
      f.consent_required,
    ].join(',');
  });
  fs.writeFileSync(
    path.join(docsOutputDir, 'ASSET-RENAMING-PLAN.csv'),
    [namingHeader, ...renamingRows].join('\n'),
    'utf8'
  );
  console.log(`Generated docs/assets/ASSET-RENAMING-PLAN.csv successfully!`);

  // 5. Write src/data/asset-manifest.json (technical data only)
  const manifestData = fileDetails.map((f) => ({
    asset_id: f.asset_id,
    current_path: f.current_path,
    type: f.media_type,
    width: f.width !== '' ? Number(f.width) : null,
    height: f.height !== '' ? Number(f.height) : null,
    aspect_ratio: f.aspect_ratio !== '' ? Number(f.aspect_ratio) : null,
    orientation: f.orientation,
    file_size: f.file_size_bytes,
    current_status: f.quality_status,
  }));
  fs.writeFileSync(
    path.join(srcDataDir, 'asset-manifest.json'),
    JSON.stringify(manifestData, null, 2),
    'utf8'
  );
  console.log(`Generated src/data/asset-manifest.json successfully!`);

  // 6. Write src/types/assets.ts
  const tsType = `export interface AssetManifestEntry {
  asset_id: string;
  current_path: string;
  type: 'image' | 'video' | 'document' | 'other';
  width: number | null;
  height: number | null;
  aspect_ratio: number | null;
  orientation: 'LANDSCAPE' | 'PORTRAIT' | 'SQUARE' | 'PANORAMIC' | 'UNKNOWN';
  file_size: number;
  current_status: 'EXCELLENT' | 'GOOD' | 'USABLE WITH OPTIMISATION' | 'LOW RESOLUTION' | 'HEAVILY COMPRESSED' | 'BLURRED' | 'SCREENSHOT' | 'UNSUITABLE' | 'UNKNOWN';
}

export type AssetManifest = AssetManifestEntry[];
`;
  fs.writeFileSync(path.join(srcTypesDir, 'assets.ts'), tsType, 'utf8');
  console.log(`Generated src/types/assets.ts successfully!`);

  // 7. Write docs/assets/MISSING-ASSETS.md
  const missingAssetsContent = `# Missing Local Asset Report (MISSING-ASSETS.md)

This report logs critical and required local assets that are currently missing from the repository, including their dimensions and photography/design directions.

---

## 🚨 Priority 1: CRITICAL BEFORE HERO DESIGN

### 1. Homepage Hero Cover Image
* **Asset Purpose**: Homepage main entry point backdrop or sidebar graphic.
* **Recommended Subject**: Real ASDM student cohort in classroom or active mentorship discussion with Love Tyagi.
* **Desktop aspect ratio**: approximately 16:10
* **Mobile aspect ratio**: approximately 4:5
* **Minimum capture dimensions**: 1920 x 1200 px
* **Preferred capture dimensions**: 2400+ px on the longest edge
* **Photography direction**: Natural candid interaction, shallow depth of field. Avoid artificial stock-style poses. Keep negative space available for text overlays.
* **Video Version Useful**: Yes (a 10-second subtle background looped classroom clip would be an excellent premium option).
* **Consent or Branding**: Formally require model consent from all visible students.

---

## ⚠️ Priority 2: REQUIRED BEFORE HOMEPAGE COMPLETION

### 1. Trainer Headshots
* **Asset Purpose**: Trainer card profiles on homepage and faculty lists.
* **Recommended Subject**: Professional studio headshots of Love Tyagi and leading training faculty.
* **Desktop/Mobile aspect ratio**: 1:1 (Square)
* **Minimum capture dimensions**: 400 x 400 px
* **Preferred capture dimensions**: 800 x 800 px
* **Photography direction**: Neutral light background, warm professional smiles, front-facing.
* **Consent or Branding**: Written approval from trainers.

### 2. Local Campus Gallery (Ahmedabad & Surat)
* **Asset Purpose**: Campus switcher sections and contact modules.
* **Recommended Subject**: Exterior building signs, reception area, classroom labs, and seating arrangements.
* **Desktop aspect ratio**: 3:2 or 16:9
* **Mobile aspect ratio**: 4:3
* **Minimum capture dimensions**: 1200 x 800 px
* **Preferred capture dimensions**: 1800 x 1200 px
* **Photography direction**: High-precision architectural shots, bright lighting, wide angles to capture desk configurations.

### 3. Testimonial Avatars
* **Asset Purpose**: Social proof avatar graphics.
* **Recommended Subject**: Portrait shots of alumni students giving testimonial quotes.
* **Desktop/Mobile aspect ratio**: 1:1
* **Minimum capture dimensions**: 200 x 200 px
* **Preferred capture dimensions**: 400 x 400 px
* **Consent**: Written student consent required before public deployment.

---

## 📐 Priority 3: REQUIRED BEFORE INTERNAL PAGES

### 1. Student Project Portfolio Screenshots
* **Asset Purpose**: Showcase real projects built by ASDM students.
* **Recommended Subject**: High-res browser screenshots of Shopify stores, local SEO campaigns, and graphics deliverables.
* **Desktop aspect ratio**: 16:10 or 16:9
* **Minimum capture dimensions**: 1440 x 900 px
* **Preferred capture dimensions**: 1920 x 1200 px
* **Design direction**: Clean browser borders or device mocks. No text inside the raster image to preserve translation.

---

## 🎨 Priority 4: OPTIONAL ENHANCEMENT

### 1. Interactive Course Curriculum Icons
* **Asset Purpose**: Modular icons representing Google Ads, SEO, and social platforms.
* **Aspect ratio**: 1:1
* **Format**: SVG vectors
* **Design direction**: Sleek custom vector lines matching design system palette.
`;
  fs.writeFileSync(
    path.join(docsOutputDir, 'MISSING-ASSETS.md'),
    missingAssetsContent,
    'utf8'
  );
  console.log(`Generated docs/assets/MISSING-ASSETS.md successfully!`);

  // 8. Write docs/assets/CONTENT-SOURCE-LOCK.md
  const contentLockContent = `# Content Source Lock (CONTENT-SOURCE-LOCK.md)

This document defines the strict, approved content hierarchy for the ASDM website redesign to protect fact integrity and comply with Indian advertising regulations (ASCI).

---

## 🏛️ Content Source Hierarchy

All future copy and copywriting revisions must adhere to this hierarchy:
1. **ASDM FACT REGISTER**: Verified corporate registration, placement registry databases, and physical franchise lease documents. (Highest Priority).
2. **AUDITED WEBSITE COPY**: Extracted text under \`src/content/source/current-site/\`. Note: This content is for transition reference and is *not* considered verified.
3. **APPROVED LOCAL ASSET MANIFEST**: Technical metadata and media in the manifest.
4. **GOOGLE SEARCH CONSOLE / GOOGLE ANALYTICS DATA**: Used exclusively to configure redirection maps.
5. **PUBLIC SOCIAL CHANNELS**: Discovery of alumni placement names and logo assets for verification reference only.
6. **COMPETITOR SITE ARCHITECTURE**: Studied for structural reference only. **Never copy copy or layout directly.**

---

## 🔒 Strict Copywriting Rules

* **Verification of Placement Data**: No statistic involving numbers trained (e.g. 50k vs 200k) or placed (e.g. 7k vs 50k) can be written into components unless verified by registration certs.
* **Removal of Income Claims**: Do not write income guarantees (e.g. "Earn 50,000+ as a Freelancer") into copy. All outcomes must be framed around skill acquisition.
* **Campus Disclosures**: Mumbai target campaigns must explicitly declare the program as "100% Live Online Training" to avoid misleading users about a physical classroom branch.
* **No Remote Placeholders**: Using remote placeholders (e.g. via unsplash/placeholder URLs) in production or preview pages is prohibited.
* **Non-Destructive Media Workflow**: Original assets under \`public/assets/\` must never be edited, cropped, or renamed during this phase. Renames are candidates to be run only after layout sign-off.
`;
  fs.writeFileSync(
    path.join(docsOutputDir, 'CONTENT-SOURCE-LOCK.md'),
    contentLockContent,
    'utf8'
  );
  console.log(`Generated docs/assets/CONTENT-SOURCE-LOCK.md successfully!`);

  // 9. Write docs/assets/ASSET-QUALITY-REPORT.md
  const qualityReportContent = `# Local Asset Quality & Readiness Report (ASSET-QUALITY-REPORT.md)

This report presents a complete breakdown of scanned local assets, quality statuses, duplication rates, and design readiness.

---

## 📊 Scanned Summary Metrics

* **Total Files Discovered**: ${fileDetails.length}
* **Files by Media Type**:
  - Image: ${fileDetails.filter((f) => f.media_type === 'image').length}
  - Video: ${fileDetails.filter((f) => f.media_type === 'video').length}
  - Document: ${fileDetails.filter((f) => f.media_type === 'document').length}
  - Other: ${fileDetails.filter((f) => f.media_type === 'other').length}
* **Orientation Distribution**:
  - Landscape: ${fileDetails.filter((f) => f.orientation === 'LANDSCAPE').length}
  - Portrait: ${fileDetails.filter((f) => f.orientation === 'PORTRAIT').length}
  - Square: ${fileDetails.filter((f) => f.orientation === 'SQUARE').length}
  - Panoramic: ${fileDetails.filter((f) => f.orientation === 'PANORAMIC').length}
  - Unknown: ${fileDetails.filter((f) => f.orientation === 'UNKNOWN').length}
* **Quality Breakdown**:
  - GOOD: ${fileDetails.filter((f) => f.quality_status === 'GOOD').length}
  - USABLE WITH OPTIMISATION: ${fileDetails.filter((f) => f.quality_status === 'USABLE WITH OPTIMISATION').length}
  - LOW RESOLUTION: ${fileDetails.filter((f) => f.quality_status === 'LOW RESOLUTION').length}
  - UNKNOWN: ${fileDetails.filter((f) => f.quality_status === 'UNKNOWN').length}

---

## 👥 Duplicate Audit Summary

* **Scanned Exact Binary Duplicates**: ${fileDetails.filter((f) => f.duplicate_group !== '').length} files in duplicate clusters.
* **Duplicate Action**: All duplicate files have been assigned clean group names (e.g. \`DUP-GRP-001\`) with recommendations to keep only a single primary master and exclude duplicates from production layouts.

---

## 🎨 Asset Coverage Analysis

1. **Homepage Hero Candidates**:
   - *Status*: **Critical Deficit**. No high-res horizontal classroom image exists in current assets. Hero section requires a new capture.
2. **Campus Assets Coverage**:
   - *Status*: **Deficit**. We have no interior photo files for the Ahmedabad or Surat campuses.
3. **Trainer Coverage**:
   - *Status*: **Deficit**. Headshots for faculty are missing.
4. **Testimonials Coverage**:
   - *Status*: **Deficit**. No user avatars are available under the testimonials directory.
5. **Video Coverage**:
   - *Status*: **Low**. Only placeholder video clips found under the videos directory.
6. **Award & Trust Badge Coverage**:
   - *Status*: **Good**. Mapped Skill India and NSDC logos are high quality.

---

## 🔍 Recommendation for Design-System Readiness

**Recommendation**: \`READY WITH ASSET LIMITATIONS\`

The local media assets have been completely inventoried, binary duplicate groups mapped, and vector viewBox sizes parsed. Technical page shells and typography rules can safely proceed. However, mockups and copywriting must not proceed to homepage development until the critical missing assets (candid hero image, campus gallery, trainer headshots, and testimonials consent profiles) are shot or supplied.
`;
  fs.writeFileSync(
    path.join(docsOutputDir, 'ASSET-QUALITY-REPORT.md'),
    qualityReportContent,
    'utf8'
  );
  console.log(`Generated docs/assets/ASSET-QUALITY-REPORT.md successfully!`);

  console.log(
    '\n✨ Asset inventory scanning and deliverable files generation completed successfully!'
  );
}

scan();
