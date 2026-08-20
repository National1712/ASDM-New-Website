import fs from 'fs';
import path from 'path';

const sitemapPath =
  'C:\\Users\\lotus it solution\\.gemini\\antigravity\\brain\\b539ebcc-6888-4f5f-b9e8-31d602ce768a\\.system_generated\\steps\\12\\content.md';

function parseSitemap() {
  const content = fs.readFileSync(sitemapPath, 'utf8');

  // Find all <loc>...</loc> tags
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1].trim());
  }

  console.log(`Total URLs found in sitemap: ${urls.length}`);

  const categories = {
    homepage: [],
    about: [],
    course: [],
    location: [],
    placement: [],
    faq: [],
    contact: [],
    'blog-index': [],
    'blog-article': [],
    'blog-category': [],
    utility: [],
    unknown: [],
  };

  urls.forEach((url) => {
    // Normalise
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    if (pathname === '/' || pathname === '') {
      categories.homepage.push(url);
    } else if (pathname === '/about-us' || pathname === '/about-us/') {
      categories.about.push(url);
    } else if (pathname === '/placement' || pathname === '/placement/') {
      categories.placement.push(url);
    } else if (pathname === '/contact-us' || pathname === '/contact-us/') {
      categories.contact.push(url);
    } else if (pathname === '/faq' || pathname === '/faq/') {
      categories.faq.push(url);
    } else if (pathname.includes('/blog/category/')) {
      categories['blog-category'].push(url);
    } else if (pathname === '/blog' || pathname === '/blog/') {
      categories['blog-index'].push(url);
    } else if (pathname.startsWith('/blog/page/')) {
      categories['blog-index'].push(url);
    } else if (pathname.startsWith('/blog/')) {
      // blog articles usually have paths under /blog/ or sitemap index
      if (pathname.includes('sitemap_index.xml')) {
        categories.utility.push(url);
      } else {
        categories['blog-article'].push(url);
      }
    } else if (
      pathname === '/seo-course-in-ahmedabad' ||
      pathname === '/seo-course-in-ahmedabad/' ||
      pathname === '/ecommerce-course' ||
      pathname === '/ecommerce-course/'
    ) {
      categories.course.push(url);
    } else if (
      pathname.includes('-course-in-') ||
      pathname.includes('-program-in-') ||
      pathname.includes('-program')
    ) {
      // Let's see if it's course or location
      if (
        pathname.includes('surat') ||
        pathname.includes('mumbai') ||
        pathname.includes('vadodara')
      ) {
        categories.location.push(url);
      } else {
        categories.course.push(url);
      }
    } else {
      categories.unknown.push(url);
    }
  });

  for (const [cat, items] of Object.entries(categories)) {
    console.log(`- ${cat}: ${items.length} URLs`);
  }

  // Print first 5 of each category
  console.log('\nSample URLs:');
  for (const [cat, items] of Object.entries(categories)) {
    if (items.length > 0) {
      console.log(`[${cat}]:`);
      items.slice(0, 3).forEach((i) => console.log(`  - ${i}`));
    }
  }
}

parseSitemap();
