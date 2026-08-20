import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\audits';
const outputPath = path.join(outputDir, 'conversion-inventory.csv');

const conversions = [
  {
    conversion_point_id: 'conv-sticky-call',
    url: 'https://www.asdm.co.in/',
    conversion_type: 'sticky-bar',
    cta_text: 'Call Now',
    form_fields: 'None',
    validation_behavior: 'None',
    destination_or_action: 'tel:+919016970734',
    visible_attributes: 'href="tel:+919016970734"',
    observable_confirmation: 'Launches native dialer',
  },
  {
    conversion_point_id: 'conv-sticky-wa',
    url: 'https://www.asdm.co.in/',
    conversion_type: 'sticky-bar',
    cta_text: 'Whatsapp',
    form_fields: 'None',
    validation_behavior: 'None',
    destination_or_action:
      'https://wa.me/919327967701?text=Inquiry%20for%20digital%20marketing%20course',
    visible_attributes: 'href="https://wa.me/919327967701?text=..."',
    observable_confirmation: 'Redirects to external WhatsApp chat API',
  },
  {
    conversion_point_id: 'conv-sticky-enquire',
    url: 'https://www.asdm.co.in/',
    conversion_type: 'sticky-bar',
    cta_text: 'Enquire Now',
    form_fields: 'None',
    validation_behavior: 'None',
    destination_or_action: 'Triggers Enquiry Modal onload',
    visible_attributes: 'class="click1"',
    observable_confirmation: 'Opens modal form layout via JavaScript',
  },
  {
    conversion_point_id: 'conv-modal-enquiry',
    url: 'https://www.asdm.co.in/',
    conversion_type: 'modal-form',
    cta_text: 'Submit Now!',
    form_fields: 'name, email, number, center',
    validation_behavior: 'HTML input constraints (browser native)',
    destination_or_action: 'mail-send',
    visible_attributes: 'action="mail-send" method="post"',
    observable_confirmation: 'Form POST request. CRM lead routing is UNKNOWN.',
  },
  {
    conversion_point_id: 'conv-modal-brochure',
    url: 'https://www.asdm.co.in/',
    conversion_type: 'modal-form',
    cta_text: 'Submit Now!',
    form_fields: 'name, email, number, center',
    validation_behavior: 'Required fields; WhatsApp pattern: [0-9]{10,15}',
    destination_or_action: 'otp-send',
    visible_attributes: 'action="otp-send" method="post"',
    observable_confirmation:
      'Form POST request. SMS dispatcher routing is UNKNOWN.',
  },
  {
    conversion_point_id: 'conv-otp-verification',
    url: 'https://www.asdm.co.in/',
    conversion_type: 'modal-form',
    cta_text: 'Submit Now!',
    form_fields: 'otp',
    validation_behavior: 'Input number checks',
    destination_or_action: 'otpverification',
    visible_attributes: 'action="otpverification" method="post"',
    observable_confirmation:
      'Form POST request. Verification verification check is UNKNOWN.',
  },
  {
    conversion_point_id: 'conv-body-enquiry-surat',
    url: 'https://www.asdm.co.in/digital-marketing-course-in-surat',
    conversion_type: 'body-form',
    cta_text: 'Book Free Career Strategy Session',
    form_fields: 'name, email, number, center',
    validation_behavior: 'Browser native input checks',
    destination_or_action: 'mail-send',
    visible_attributes: 'action="mail-send" method="post"',
    observable_confirmation:
      'Form POST request. Lead routing and thank you page are UNKNOWN.',
  },
  {
    conversion_point_id: 'conv-body-enquiry-seo',
    url: 'https://www.asdm.co.in/seo-course-in-ahmedabad',
    conversion_type: 'body-form',
    cta_text: 'Submit Now!',
    form_fields: 'name, email, number, center',
    validation_behavior: 'Browser native input checks',
    destination_or_action: 'mail-send',
    visible_attributes: 'action="mail-send" method="post"',
    observable_confirmation: 'Form POST request. Lead routing is UNKNOWN.',
  },
  {
    conversion_point_id: 'conv-body-enquiry-mumbai',
    url: 'https://www.asdm.co.in/digital-marketing-course-in-mumbai',
    conversion_type: 'body-form',
    cta_text: 'Submit Now',
    form_fields: 'name, email, number, center',
    validation_behavior: 'Browser native input checks',
    destination_or_action: 'mail-send',
    visible_attributes: 'action="mail-send" method="post"',
    observable_confirmation: 'Form POST request. Lead routing is UNKNOWN.',
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
      'conversion_point_id',
      'url',
      'conversion_type',
      'cta_text',
      'form_fields',
      'validation_behavior',
      'destination_or_action',
      'visible_attributes',
      'observable_confirmation',
    ].join(',')
  );

  conversions.forEach((c) => {
    const row = [
      escapeCSV(c.conversion_point_id),
      escapeCSV(c.url),
      escapeCSV(c.conversion_type),
      escapeCSV(c.cta_text),
      escapeCSV(c.form_fields),
      escapeCSV(c.validation_behavior),
      escapeCSV(c.destination_or_action),
      escapeCSV(c.visible_attributes),
      escapeCSV(c.observable_confirmation),
    ].join(',');
    csvRows.push(row);
  });

  fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf8');
  console.log('Regenerated conversion-inventory.csv successfully!');
}

generateCSV();
