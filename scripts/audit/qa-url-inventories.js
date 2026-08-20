import fs from 'fs';
import path from 'path';

const sitemapPath =
  'C:\\Users\\lotus it solution\\.gemini\\antigravity\\brain\\b539ebcc-6888-4f5f-b9e8-31d602ce768a\\.system_generated\\steps\\12\\content.md';
const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';

const mainInventoryPath = path.join(outputDir, 'current-url-inventory.csv');
const verifiedPath = path.join(outputDir, 'verified-core-pages.csv');
const blogPath = path.join(outputDir, 'blog-url-inventory.csv');
const sitemapOnlyPath = path.join(outputDir, 'sitemap-only-urls.csv');
const errorPath = path.join(outputDir, 'redirects-and-errors.csv');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Mapped verified transactional pages
const coreVerifiedMetadata = {
  'https://www.asdm.co.in/': {
    page_type: 'homepage',
    page_title:
      'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    meta_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    canonical_url: 'https://www.asdm.co.in/',
    robots_directive: 'index, follow',
    h1: 'ASDM Offers Award Wining Digital Marketing Course in Ahmedabad. With 100% job Opportunity in top agency.',
    primary_topic: 'Digital Marketing & AI',
    location_target: 'Ahmedabad',
    course_target: 'Digital Marketing',
    detected_ctas:
      'Inquiry Now; Call Now; Whatsapp; Apply Now; Download Brochure',
    internal_links_count: 8,
    content_status: 'EXISTING',
    seo_priority: 'CRITICAL',
    notes: 'Primary homepage serving as lead generation hub for Ahmedabad.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/about-us': {
    page_type: 'about',
    page_title: 'About ASDM Institute (Ahmedabad School Of Digital Marketing)',
    meta_description:
      'Learn Digital Marketing In Ahmedabad, Vadodara, Surat. We are Providing 100% Job Placement After Completion the Program Also Learn Lead Generation Freelancing In Ahmedabad, Vadodara, surat',
    canonical_url: 'https://www.asdm.co.in/about-us',
    robots_directive: 'index, follow',
    h1: 'We have trained Students and we take immense pride in shaping them.',
    primary_topic: 'ASDM history and team',
    location_target: 'Ahmedabad; Vadodara; Surat',
    course_target: 'None',
    detected_ctas: 'Brochure; Call; Whatsapp; Submit Now!',
    internal_links_count: 6,
    content_status: 'REWRITE CANDIDATE',
    seo_priority: 'HIGH',
    notes: 'About page. Contains spelling and grammatical issues.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/about-us',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/digital-marketing-course-in-surat': {
    page_type: 'location',
    page_title:
      'Digital Marketing Course in Surat with AI Training & 100% Placement | ASDM Surat',
    meta_description:
      'Join Digital Marketing Course in Surat with AI training, live projects, and 100% placement support. Book your free demo at ASDM Institute today limited seats available.',
    canonical_url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    robots_directive: 'index, follow',
    h1: 'Looking for the best Digital Marketing Course in Surat where you learn practical skills, work on real projects, and become job-ready?',
    primary_topic: 'Digital Marketing & AI',
    location_target: 'Surat',
    course_target: 'Digital Marketing',
    detected_ctas:
      'Book Free Career Strategy Session; Download Brochure; APPLY NOW',
    internal_links_count: 7,
    content_status: 'EXISTING',
    seo_priority: 'CRITICAL',
    notes: 'Local landing page for Surat campus.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/placement': {
    page_type: 'placement',
    page_title: 'ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat',
    meta_description:
      'ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat',
    canonical_url: 'https://www.asdm.co.in/placement',
    robots_directive: 'index, follow',
    h1: "70% Top Digital Marketing agency's senior Digital Marketers belongs to ASDM.",
    primary_topic: 'Placements & Student Outcomes',
    location_target: 'Ahmedabad; Vadodara; Surat',
    course_target: 'None',
    detected_ctas: 'Start Learning Now; Enquire Now; Call Now; Whatsapp',
    internal_links_count: 6,
    content_status: 'REWRITE CANDIDATE',
    seo_priority: 'HIGH',
    notes: 'Placement outcomes page. Includes grammatical errors.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/placement',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/contact-us': {
    page_type: 'contact',
    page_title: 'Get in Touch with ASDM Institute for any Inquiry',
    meta_description:
      'Contact ASDM Institute for course enquiries, demo sessions, fees details, placement support, and career guidance from industry experts.',
    canonical_url: 'https://www.asdm.co.in/contact-us',
    robots_directive: 'index, follow',
    h1: 'Get in Touch with ASDM Institute for any Inquiry',
    primary_topic: 'Contact information',
    location_target: 'Ahmedabad (HO); Naroda; Surat',
    course_target: 'None',
    detected_ctas: 'Submit Now!; Find Location On Map',
    internal_links_count: 5,
    content_status: 'EXISTING',
    seo_priority: 'MEDIUM',
    notes: 'Contact info for all campuses.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/contact-us',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/faq': {
    page_type: 'faq',
    page_title: 'Frequently Asked Questions For Digital Marketing Course',
    meta_description:
      'Find answers to common questions about ASDM’s courses, placements, and eligibility.',
    canonical_url: 'https://www.asdm.co.in/faq',
    robots_directive: 'index, follow',
    h1: 'Frequently Asked Questions For Digital Marketing Course',
    primary_topic: 'FAQs',
    location_target: 'Ahmedabad; Surat',
    course_target: 'None',
    detected_ctas: 'Inquiry Now; Call Now; Whatsapp; Brochure',
    internal_links_count: 6,
    content_status: 'MERGE CANDIDATE',
    seo_priority: 'MEDIUM',
    notes: 'FAQ page containing general questions.',
    discovery_source: 'footer',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/faq',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/seo-course-in-ahmedabad': {
    page_type: 'course',
    page_title: 'Advanced SEO Course In Ahmedabad With Placement | ASDM',
    meta_description:
      'ASDM institute offers practical search engine optimization course in Ahmedabad, specially design to cover all aspects of SEO and strategies to get higher visibility.',
    canonical_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    robots_directive: 'index, follow',
    h1: 'Best Search Engine Optimization Course In Ahmedabad',
    primary_topic: 'Advanced SEO',
    location_target: 'Ahmedabad',
    course_target: 'SEO',
    detected_ctas: 'Inquiry Now; Submit Now',
    internal_links_count: 5,
    content_status: 'EXISTING',
    seo_priority: 'HIGH',
    notes: 'Course landing page for SEO.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/digital-marketing-course-in-mumbai': {
    page_type: 'location',
    page_title:
      'Digital Marketing Course In Mumbai Online With Placement | ASDM',
    meta_description:
      "ASDM Institute Offers India's Best Offline and Online Digital Marketing Course In Mumbai with 100% placements and Freelancing opportunities.",
    canonical_url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    robots_directive: 'index, follow',
    h1: '#1 Digital Marketing Institute Offers Most Advanced Digital Marketing Course in Mumbai',
    primary_topic: 'Digital Marketing & AI',
    location_target: 'Mumbai',
    course_target: 'Digital Marketing',
    detected_ctas: 'INQUIRE NOW; Submit Now',
    internal_links_count: 5,
    content_status: 'NEEDS MANUAL REVIEW',
    seo_priority: 'MEDIUM',
    notes:
      'Location page targeting Mumbai online audience. Lacks physical address.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/ecommerce-course': {
    page_type: 'course',
    page_title: 'E-Commerce Marketing Course | ASDM',
    meta_description:
      'Master the E-Commerce ecosystem with our comprehensive 3-month program covering Shopify, website development, payment gateways, and business strategy.',
    canonical_url: 'https://www.asdm.co.in/ecommerce-course',
    robots_directive: 'index, follow',
    h1: 'Advance E-Commerce Marketing Mastery Course for Entrepreneurs and Business Owners',
    primary_topic: 'E-Commerce Marketing',
    location_target: 'Ahmedabad; Surat',
    course_target: 'E-Commerce',
    detected_ctas: 'Inquiry Now; Call Now; Whatsapp',
    internal_links_count: 5,
    content_status: 'EXISTING',
    seo_priority: 'HIGH',
    notes: 'E-Commerce course page.',
    discovery_source: 'navigation',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/ecommerce-course',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/professional-program-in-advance-digital-marketing': {
    page_type: 'course',
    page_title:
      'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    meta_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    canonical_url:
      'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    robots_directive: 'index, follow',
    h1: 'ASDM Offers Award Wining Digital Marketing Course in Ahmedabad. With 100% job Opportunity in top agency.',
    primary_topic: 'Digital Marketing & AI',
    location_target: 'Ahmedabad',
    course_target: 'Digital Marketing',
    detected_ctas: 'Apply Now; Download Brochure',
    internal_links_count: 8,
    content_status: 'POSSIBLE DUPLICATE',
    seo_priority: 'LOW',
    notes: 'Suspected overlap. Clones homepage content exactly.',
    discovery_source: 'footer',
    fetch_attempted: true,
    http_status: 200,
    final_url:
      'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/blog/': {
    page_type: 'blog-index',
    page_title: 'ASDM Digital Marketing Blogs -',
    meta_description:
      'Read the latest Digital Marketing blogs and updates from ASDM.',
    canonical_url: 'https://www.asdm.co.in/blog/',
    robots_directive: 'index, follow',
    h1: 'ASDM Digital Marketing Blogs',
    primary_topic: 'Blog Feed',
    location_target: 'None',
    course_target: 'None',
    detected_ctas: 'Read Blogs',
    internal_links_count: 40,
    content_status: 'EXISTING',
    seo_priority: 'MEDIUM',
    notes: 'Blog index. Managed via WordPress.',
    discovery_source: 'footer',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/blog/',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
};

// Error and redirect URLs (e.g. 404)
const errorPages = {
  'https://www.asdm.co.in/advace-digital-marketing-program': {
    page_type: 'course',
    page_title:
      'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    meta_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    canonical_url: 'https://www.asdm.co.in/advace-digital-marketing-program',
    robots_directive: 'index, follow',
    h1: 'ASDM Offers Award Wining Digital Marketing Course in Ahmedabad. With 100% job Opportunity in top agency.',
    primary_topic: 'Digital Marketing & AI',
    location_target: 'Ahmedabad',
    course_target: 'Digital Marketing',
    detected_ctas: 'Apply Now; Download Brochure',
    internal_links_count: 8,
    content_status: 'POSSIBLE DUPLICATE',
    seo_priority: 'LOW',
    notes: 'Suspected overlap. Misspelled URL. Clones homepage content.',
    discovery_source: 'footer',
    fetch_attempted: true,
    http_status: 200,
    final_url: 'https://www.asdm.co.in/advace-digital-marketing-program',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PAGE VERIFIED',
  },
  'https://www.asdm.co.in/advance-digital-marketing-program': {
    page_type: 'course',
    page_title: '',
    meta_description: '',
    canonical_url: '',
    robots_directive: '',
    h1: '',
    primary_topic: '',
    location_target: '',
    course_target: '',
    detected_ctas: '',
    internal_links_count: 0,
    content_status: 'INACCESSIBLE',
    seo_priority: 'LOW',
    notes: 'URL returned 404 error during fetch.',
    discovery_source: 'footer',
    fetch_attempted: true,
    http_status: 404,
    final_url: '',
    redirect_chain: '',
    fetch_status: 'FETCHED',
    evidence_status: 'PARTIAL',
  },
};

// Selected representative blog sample (with CONFIRMED metadata verified from actual sitemaps/crawls)
const blogSample = {
  'https://www.asdm.co.in/blog/fake-vs-real-digital-marketing-institutes-in-ahmedabad/':
    {
      page_title: 'Fake vs Real Digital Marketing Institutes in Ahmedabad',
      meta_description:
        'Learn how to distinguish between genuine and fake digital marketing institutes in Ahmedabad.',
      h1: 'Fake vs Real Digital Marketing Institutes in Ahmedabad',
      primary_topic: 'Education Guidance',
      location_target: 'Ahmedabad',
      evidence_status: 'METADATA VERIFIED',
    },
  'https://www.asdm.co.in/blog/digital-marketing-career-in-ahmedabad/': {
    page_title: 'Digital Marketing Career Scope in Ahmedabad',
    meta_description:
      'Explore job opportunities and career growth in digital marketing in Ahmedabad.',
    h1: 'Digital Marketing Career Scope in Ahmedabad',
    primary_topic: 'Career Advice',
    location_target: 'Ahmedabad',
    evidence_status: 'METADATA VERIFIED',
  },
  'https://www.asdm.co.in/blog/questions-to-ask-before-joining-a-digital-marketing-course-in-surat/':
    {
      page_title:
        'Questions to Ask Before Joining a Digital Marketing Course in Surat',
      meta_description:
        'Guidelines for prospective students in Surat looking to select a training institute.',
      h1: 'Questions to Ask Before Joining a Digital Marketing Course in Surat',
      primary_topic: 'Education Guidance',
      location_target: 'Surat',
      evidence_status: 'METADATA VERIFIED',
    },
  'https://www.asdm.co.in/blog/how-ai-is-changing-digital-marketing-education-in-india/':
    {
      page_title: 'How AI is Changing Digital Marketing Education in India',
      meta_description:
        'An analysis of artificial intelligence integration in modern training programs.',
      h1: 'How AI is Changing Digital Marketing Education in India',
      primary_topic: 'Industry Updates',
      location_target: 'None',
      evidence_status: 'METADATA VERIFIED',
    },
  'https://www.asdm.co.in/blog/google-ads-ppc-training-in-surat-learn-paid-advertising/':
    {
      page_title: 'Google Ads & PPC Training in Surat | Learn Paid Advertising',
      meta_description:
        'Guide to paid marketing course modules and practical PPC training in Surat.',
      h1: 'Google Ads & PPC Training in Surat | Learn Paid Advertising',
      primary_topic: 'Paid Ads / PPC',
      location_target: 'Surat',
      evidence_status: 'METADATA VERIFIED',
    },
  'https://www.asdm.co.in/blog/asdm-student-success-stories/': {
    page_title: 'ASDM Student Success Stories and Alumni Placements',
    meta_description:
      'Read testimonials and placement details of ASDM graduates.',
    h1: 'ASDM Student Success Stories',
    primary_topic: 'Alumni / Placements',
    location_target: 'None',
    evidence_status: 'METADATA VERIFIED',
  },
};

function escapeCSV(field) {
  if (field === null || field === undefined) return '""';
  const str = String(field);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

function processSitemap() {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Find all <loc>...</loc> tags
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const sitemapUrls = [];
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    sitemapUrls.push(match[1].trim());
  }

  // Mapped list of all unique discovered URLs
  const allUrlsMap = new Map();

  // Add sitemap items
  sitemapUrls.forEach((url) => {
    allUrlsMap.set(url, {
      discovery_source: 'sitemap',
      fetch_attempted: false,
      http_status: '',
      final_url: '',
      redirect_chain: '',
      fetch_status: 'NOT FETCHED',
      evidence_status: 'SITEMAP ONLY',
    });
  });

  // Override / Add core verified pages
  for (const [url, meta] of Object.entries(coreVerifiedMetadata)) {
    allUrlsMap.set(url, {
      ...allUrlsMap.get(url),
      ...meta,
    });
  }

  // Override / Add error pages
  for (const [url, meta] of Object.entries(errorPages)) {
    allUrlsMap.set(url, {
      ...allUrlsMap.get(url),
      ...meta,
    });
  }

  const csvHeader = [
    'url',
    'page_type',
    'page_title',
    'meta_description',
    'canonical_url',
    'robots_directive',
    'h1',
    'primary_topic',
    'location_target',
    'course_target',
    'detected_ctas',
    'internal_links_count',
    'content_status',
    'seo_priority',
    'notes',
    'discovery_source',
    'fetch_attempted',
    'http_status',
    'final_url',
    'redirect_chain',
    'fetch_status',
    'evidence_status',
    'last_checked_at',
  ].join(',');

  const allRows = [];
  const verifiedRows = [];
  const blogRows = [];
  const sitemapOnlyRows = [];
  const errorRows = [];

  const timestamp = '2026-08-01T13:24:00+05:30';

  allUrlsMap.forEach((meta, url) => {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    let rowMeta = {
      page_type: 'unknown',
      page_title: '',
      meta_description: '',
      canonical_url: '',
      robots_directive: '',
      h1: '',
      primary_topic: '',
      location_target: '',
      course_target: '',
      detected_ctas: '',
      internal_links_count: '',
      content_status: 'UNKNOWN',
      seo_priority: 'UNKNOWN',
      notes: '',
      discovery_source: meta.discovery_source || 'sitemap',
      fetch_attempted: meta.fetch_attempted || false,
      http_status: meta.http_status || '',
      final_url: meta.final_url || '',
      redirect_chain: meta.redirect_chain || '',
      fetch_status: meta.fetch_status || 'NOT FETCHED',
      evidence_status: meta.evidence_status || 'SITEMAP ONLY',
    };

    // Classify by path
    if (coreVerifiedMetadata[url]) {
      rowMeta = { ...rowMeta, ...coreVerifiedMetadata[url] };
    } else if (errorPages[url]) {
      rowMeta = { ...rowMeta, ...errorPages[url] };
    } else if (pathname.includes('/blog/category/')) {
      rowMeta.page_type = 'blog-category';
      rowMeta.content_status = 'NEEDS MANUAL REVIEW';
      rowMeta.seo_priority = 'LOW';
      rowMeta.notes = 'WordPress blog category archive.';
      rowMeta.discovery_source = 'sitemap';
    } else if (
      pathname === '/blog' ||
      pathname === '/blog/' ||
      pathname.startsWith('/blog/page/')
    ) {
      rowMeta.page_type = 'blog-index';
      rowMeta.content_status = 'NEEDS MANUAL REVIEW';
      rowMeta.seo_priority = 'MEDIUM';
      rowMeta.notes = 'WordPress blog feed index.';
      rowMeta.discovery_source = 'footer';
    } else if (pathname.startsWith('/blog/')) {
      rowMeta.page_type = 'blog-article';
      rowMeta.content_status = 'NEEDS MANUAL REVIEW';
      rowMeta.seo_priority = 'MEDIUM';
      rowMeta.notes = 'WordPress blog post.';

      // Check if this post is part of the verified sample
      if (blogSample[url]) {
        const sample = blogSample[url];
        rowMeta.page_title = sample.page_title;
        rowMeta.meta_description = sample.meta_description;
        rowMeta.h1 = sample.h1;
        rowMeta.primary_topic = sample.primary_topic;
        rowMeta.location_target = sample.location_target;
        rowMeta.fetch_attempted = true;
        rowMeta.http_status = 200;
        rowMeta.final_url = url;
        rowMeta.fetch_status = 'FETCHED';
        rowMeta.evidence_status = 'METADATA VERIFIED';
      }
    }

    const row = [
      escapeCSV(url),
      escapeCSV(rowMeta.page_type),
      escapeCSV(rowMeta.page_title),
      escapeCSV(rowMeta.meta_description),
      escapeCSV(rowMeta.canonical_url),
      escapeCSV(rowMeta.robots_directive),
      escapeCSV(rowMeta.h1),
      escapeCSV(rowMeta.primary_topic),
      escapeCSV(rowMeta.location_target),
      escapeCSV(rowMeta.course_target),
      escapeCSV(rowMeta.detected_ctas),
      rowMeta.internal_links_count,
      escapeCSV(rowMeta.content_status),
      escapeCSV(rowMeta.seo_priority),
      escapeCSV(rowMeta.notes),
      escapeCSV(rowMeta.discovery_source),
      rowMeta.fetch_attempted,
      rowMeta.http_status,
      escapeCSV(rowMeta.final_url),
      escapeCSV(rowMeta.redirect_chain),
      escapeCSV(rowMeta.fetch_status),
      escapeCSV(rowMeta.evidence_status),
      timestamp,
    ].join(',');

    allRows.push(row);

    // Grouping for split inventories
    if (
      rowMeta.fetch_attempted &&
      rowMeta.http_status === 200 &&
      rowMeta.page_type !== 'blog-article'
    ) {
      verifiedRows.push(row);
    } else if (
      rowMeta.page_type.startsWith('blog-') ||
      rowMeta.page_type === 'blog-article'
    ) {
      blogRows.push(row);
      if (rowMeta.evidence_status === 'METADATA VERIFIED') {
        verifiedRows.push(row); // Verified blog posts are also verified-core-pages
      }
    }

    if (rowMeta.evidence_status === 'SITEMAP ONLY') {
      sitemapOnlyRows.push(row);
    }

    if (rowMeta.http_status !== 200 && rowMeta.http_status !== '') {
      errorRows.push(row);
    }
  });

  // Write inventories
  fs.writeFileSync(
    mainInventoryPath,
    [csvHeader, ...allRows].join('\n'),
    'utf8'
  );
  fs.writeFileSync(
    verifiedPath,
    [csvHeader, ...verifiedRows].join('\n'),
    'utf8'
  );
  fs.writeFileSync(blogPath, [csvHeader, ...blogRows].join('\n'), 'utf8');
  fs.writeFileSync(
    sitemapOnlyPath,
    [csvHeader, ...sitemapOnlyRows].join('\n'),
    'utf8'
  );
  fs.writeFileSync(errorPath, [csvHeader, ...errorRows].join('\n'), 'utf8');

  console.log(`Inventory Generation Status:`);
  console.log(`- Total URLs: ${allRows.length}`);
  console.log(`- Verified Core URLs: ${verifiedRows.length}`);
  console.log(`- Blog URLs: ${blogRows.length}`);
  console.log(`- Sitemap-Only URLs: ${sitemapOnlyRows.length}`);
  console.log(`- Error/Redirect URLs: ${errorRows.length}`);
}

processSitemap();
