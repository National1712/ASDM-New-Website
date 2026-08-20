import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'metadata-inventory.csv');

const pageMetadataList = [
  {
    url: 'https://www.asdm.co.in/',
    meta_title:
      'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    meta_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    og_title: 'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    og_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/about-us',
    meta_title: 'About ASDM Institute (Ahmedabad School Of Digital Marketing)',
    meta_description:
      'Learn Digital Marketing In Ahmedabad, Vadodara, Surat. We are Providing 100% Job Placement After Completion the Program Also Learn Lead Generation Freelancing In Ahmedabad, Vadodara, surat',
    og_title: 'About ASDM Institute (Ahmedabad School Of Digital Marketing)',
    og_description:
      'Learn Digital Marketing In Ahmedabad, Vadodara, Surat. We are Providing 100% Job Placement After Completion the Program Also Learn Lead Generation Freelancing In Ahmedabad, Vadodara, surat',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    meta_title:
      'Digital Marketing Course in Surat with AI Training & 100% Placement | ASDM Surat',
    meta_description:
      'Join Digital Marketing Course in Surat with AI training, live projects, and 100% placement support. Book your free demo at ASDM Institute today limited seats available.',
    og_title:
      'Digital Marketing Course in Surat with AI Training & 100% Placement | ASDM Surat',
    og_description:
      'Join Digital Marketing Course in Surat with AI training, live projects, and 100% placement support. Book your free demo at ASDM Institute today limited seats available.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/placement',
    meta_title: 'ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat',
    meta_description:
      'ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat',
    og_title: 'ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat',
    og_description:
      'ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/contact-us',
    meta_title: 'Get in Touch with ASDM Institute for any Inquiry',
    meta_description:
      'Contact ASDM Institute for course enquiries, demo sessions, fees details, placement support, and career guidance from industry experts.',
    og_title: 'Get in Touch with ASDM Institute for any Inquiry',
    og_description:
      'Contact ASDM Institute for course enquiries, demo sessions, fees details, placement support, and career guidance from industry experts.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/faq',
    meta_title: 'Frequently Asked Questions For Digital Marketing Course',
    meta_description:
      'Find answers to common questions about ASDM’s courses, placements, and eligibility.',
    og_title: 'Frequently Asked Questions For Digital Marketing Course',
    og_description:
      'Find answers to common questions about ASDM’s courses, placements, and eligibility.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    meta_title: 'Advanced SEO Course In Ahmedabad With Placement | ASDM',
    meta_description:
      'ASDM institute offers practical search engine optimization course in Ahmedabad, specially design to cover all aspects of SEO and strategies to get higher visibility.',
    og_title: 'Advanced SEO Course In Ahmedabad With Placement | ASDM',
    og_description:
      'ASDM institute offers practical search engine optimization course in Ahmedabad, specially design to cover all aspects of SEO and strategies to get higher visibility.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    meta_title:
      'Digital Marketing Course In Mumbai Online With Placement | ASDM',
    meta_description:
      "ASDM Institute Offers India's Best Offline and Online Digital Marketing Course In Mumbai with 100% placements and Freelancing opportunities.",
    og_title: 'Digital Marketing Course In Mumbai Online With Placement | ASDM',
    og_description:
      "ASDM Institute Offers India's Best Offline and Online Digital Marketing Course In Mumbai with 100% placements and Freelancing opportunities.",
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/ecommerce-course',
    meta_title: 'E-Commerce Marketing Course | ASDM',
    meta_description:
      'Master the E-Commerce ecosystem with our comprehensive 3-month program covering Shopify, website development, payment gateways, and business strategy.',
    og_title: 'E-Commerce Marketing Course | ASDM',
    og_description:
      'Master the E-Commerce ecosystem with our comprehensive 3-month program covering Shopify, website development, payment gateways, and business strategy.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/advace-digital-marketing-program',
    meta_title:
      'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    meta_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    og_title: 'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    og_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
  },
  {
    url: 'https://www.asdm.co.in/professional-program-in-advance-digital-marketing',
    meta_title:
      'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    meta_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    og_title: 'Digital Marketing Course in Ahmedabad with AI | ASDM Institute',
    og_description:
      'Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.',
    og_image: 'https://www.asdm.co.in/images/Banner_01_First.jpg',
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
      'url',
      'meta_title',
      'meta_description',
      'meta_title_length',
      'meta_description_length',
      'og_title',
      'og_description',
      'og_image',
    ].join(',')
  );

  pageMetadataList.forEach((m) => {
    const row = [
      escapeCSV(m.url),
      escapeCSV(m.meta_title),
      escapeCSV(m.meta_description),
      m.meta_title.length,
      m.meta_description.length,
      escapeCSV(m.og_title),
      escapeCSV(m.og_description),
      escapeCSV(m.og_image),
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Generated metadata-inventory.csv successfully!');
}

generateCSV();
