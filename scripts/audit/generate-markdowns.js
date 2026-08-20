import fs from 'fs';
import path from 'path';

const outputDir =
  'C:\\xampp\\htdocs\\asdm-new-web\\src\\content\\source\\current-site';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = {
  'homepage.md': `# Homepage Content Summary

- **Title**: Digital Marketing Course in Ahmedabad with AI | ASDM Institute
- **Meta Description**: Join ASDM’s practical Digital Marketing Course in Ahmedabad covering SEO, Google Ads, Social Media, AI tools and live projects. Explore curriculum, batches, fees and placement assistance.
- **H1 Heading**: ASDM Offers Award Wining Digital Marketing Course in Ahmedabad. With 100% job Opportunity in top agency.

## Key Sections & Copy
1. **Hero**: Focuses on "Award Winning Digital Marketing Course in Ahmedabad" and being an "AI Powered" course.
2. **Main Statistics Block**:
   - 14+ Years in Digital Marketing Education
   - 2,00,000+ Students Trained
   - 50,000+ Placements Across India
   - 4.9+ Rated Digital Marketing Institute in Ahmedabad
3. **Core Learning Tracks**:
   - AI Integrated Advanced Digital Marketing Program (Fast-track)
   - Professional Digital Marketing Course with Advanced AI (Deep mastery + internship)
4. **Awards & Affiliations**:
   - ZEE 24 "Top Digital Marketing Institute" in 2023
   - Global Icon Award
   - NSDC, Skill India, and Ministry of Skill Development & Entrepreneurship partnerships
5. **Additional Statistics/Claims**:
   - "Earn 50,000+ as a Freelancer in just 3 Months"
   - "700+ Placement Partners Across Globe"
   - "150+ hours live lecture"
   - "Only digital marketing institute who is having 25+ Full time Digital marketing trainer"
`,

  'about.md': `# About Us Content Summary

- **Title**: About ASDM Institute (Ahmedabad School Of Digital Marketing)
- **Meta Description**: Learn Digital Marketing In Ahmedabad, Vadodara, Surat. We are Providing 100% Job Placement After Completion the Program Also Learn Lead Generation Freelancing In Ahmedabad, Vadodara, surat
- **H1 Heading**: We have trained Students and we take immense pride in shaping them.

## Key Content
1. **Founding & Vision**: Founded by Mr. Love Tyagi in 2014. Timeline lists progress from 2014 (first batch) up to 2023 (Zee 24 award).
2. **Love Tyagi Bio**:
   - Founder and Director of ASDM.
   - Mentored 2.5 Lakh+ students.
   - 5+ years of digital marketing experience prior to founding ASDM in 2014.
   - Associated with Google and Microsoft campaigns.
3. **Corporate Training**: Claims to train employees of brands like Tata, Reliance, and local institutes.
4. **Core Philosophy**: Focuses on practical application, live projects, and bridging the gap between traditional syllabus and active market trends.
`,

  'programs.md': `# Programs & Courses Summary

## 1. AI Integrated Advanced Digital Marketing Program
- **Format**: Fast-track execution.
- **Duration**: listed on homepage as 5 Months or 12 Months depending on track.
- **Topics**: SEO, Social Media, Google Ads, Email Marketing, Content Creation, and AI Marketing tools.

## 2. Professional Digital Marketing Course with Advanced AI
- **Format**: Deep mastery + internship + outcome focus.
- **Duration**: Usually 12-month professional track.
- **Topics**: Core digital modules plus advanced automation, client handling, and live project internship.

## 3. Advanced SEO Course in Ahmedabad
- **Format**: Core SEO modules.
- **Duration**: Unspecified (likely 2-3 months).
- **Topics**: Google search algorithms, on-page/off-page SEO, local SEO, Schema markup, Google Search Console, and keyword research.

## 4. E-Commerce Marketing Mastery Course
- **Format**: Entrepreneur and business owner focus.
- **Duration**: 3 Months.
- **Claims**: "Earn 1,00,000+ as an E-Commerce Expert in just 3 Months".
- **Topics**: Shopify store development, payment gateway integration (Razorpay, Stripe), fulfillment, Ecommerce SEO, Google Shopping ads, and Amazon marketplace.

## 5. Surat Local Digital Marketing Course
- **Duration**: Approx 4 Months.
`,

  'placements.md': `# Placements & Student Outcomes Summary

- **Title**: ASDM Provide 100% Placement In Ahmedabad | Vadodara | Surat
- **H1 Heading**: 70% Top Digital Marketing agency's senior Digital Marketers belongs to ASDM.

## Key Placement Statistics
1. **Homepage Statistic**: 50,000+ Placements Across India.
2. **Placement Page Statistic**: 7,000+ Placement Delivered.
3. **Recruiter Partners**:
   - Placement page text: "100+ Active Placement Partners".
   - Placement page graphics: "700+ Recruiter/Placement Partners".
   - SEO Ahmedabad page text: "1,00,000+ Placement Partners".
   - E-Commerce course page text: "100+ E-Commerce Partners".
4. **Salary Packages**:
   - Homepage: "Average salary package of a Digital marketing executive is 2,50,000 - 5,00,000 for freshers."
   - Homepage placement section: "ASDM provides you the package of 4-5 lakhs p.a for freshers. Highest salary packages go up to 8,00,000 - 12,00,000."
5. **Recruiting Companies Listed**:
   - Lists logos of top MNCs and local agencies (e.g. Tata, Reliance, Tech Mahindra, local Gujarat agencies).
`,

  'locations.md': `# Campus Locations Summary

ASDM operates multiple physical campuses in Gujarat and targets other cities online.

## 1. Ahmedabad (Head Office)
- **Address**: 217, Shangrila Arcade, near Shyamal Cross Rd, above First Cry, Shyamal, Ahmedabad, Gujarat 380015.
- **Phone**: +91 9327967701 / +91 9016970734
- **Email**: info@asdm.co.in
- **Map Link**: https://g.page/asdm-institute?share

## 2. Naroda Campus
- **Address**: 101, Business hub, Airport Rd, near Kubernagar, opposite Ved Banglows, Nana Chiloda, Ahmedabad, Gujarat 382330.
- **Phone**: +91 9327967701
- **Email**: info@asdm.co.in
- **Map Link**: https://maps.app.goo.gl/f8qQ6WyjpviNi4HX8

## 3. Surat Campus
- **Address**: 501 Solaris Cube, Besides Rajoo India, Behind Rahulraj Mall, Maharana Pratap Rd, Vesu, Rundh, Gujarat 395007.
- **Phone**: +91 9327967701 / +91 9016970734
- **Email**: info@asdm.co.in
- **Map Link**: https://g.page/asdminstitutesurat?share

## 4. Mumbai (Online / Non-physical)
- **Status**: Targeted via location landing page but contains no physical office address. Contact form routes to Ahmedabad or Surat.
`,

  'faculty.md': `# Faculty & Trainers Summary

## 1. Mr. Love Tyagi (Founder & Lead Trainer)
- **Title**: Founder & Director of ASDM.
- **Credentials**: Google & Microsoft Certified Digital Marketer.
- **Key Claims**: Mentored 2,50,000+ students; 14+ years of industry experience; active corporate trainer.

## 2. General Trainer Claims
- **Total Trainers**: Homepage claims ASDM has "25+ Full time Digital marketing trainers" and the E-Commerce page claims "25+ Full time E-Commerce Marketing trainers".
- **Experience**: Discovered trainers are claimed to have 5+ years of practical corporate experience in SEO, Paid Campaigns, and Social Media.
`,

  'testimonials.md': `# Student Testimonials Summary

Testimonials are presented as textual quotes and YouTube video embeds across different landing pages.

## Video Testimonials (YouTube Embeds)
1. **ASDM Review**: https://www.youtube.com/embed/XxLOaLzsesI
2. **ASDM Student Review (Startup focus)**: https://www.youtube.com/embed/cHLQEQ7r7rM
3. **Manali (Student Testimonial)**: https://www.youtube.com/embed/DkQDbwVEhC4
4. **Shraddha (Student Testimonial)**: https://www.youtube.com/embed/_buo4cs45Cw
5. **Student Journey**: https://www.youtube.com/embed/q-xuX3sYBZs
6. **Student Review**: https://www.youtube.com/embed/nro48oMIJQE
7. **Student Testimonial**: https://www.youtube.com/embed/k_UjCGNUkFQ
8. **General Player**: https://www.youtube.com/embed/6xX7YZt6YU0

## Text Testimonials
- Aligned to freshers starting careers, entrepreneurs establishing startups, and freelancers securing projects on Upwork and Freelancer.com.
`,

  'recognition.md': `# Recognition, Certifications, and Affiliations

ASDM lists multiple credentials to validate its course offerings.

## Government Affiliations
- **Ministry of Skill Development & Entrepreneurship**: Nationally recognized skill curricula.
- **Skill India Mission**: Associated partner.
- **National Skill Development Corporation (NSDC)**: Affiliate certification course provider.

## Industry Awards
- **ZEE 24 "Top Digital Marketing Institute" in 2023**: Awarded by Gujarat's ZEE channel.
- **Global Icon Award**: Awarded for Excellence in Digital Marketing Education.

## Professional Certifications Offered
ASDM claims to provide "15+ International Certifications" upon completion, including:
- Google Ads Certifications (Search, Display, Mobile, Shopping)
- Google Analytics Certification (GA4)
- Facebook Blueprint Certification preparation
- ASDM Course Completion Certificate
`,

  'faqs.md': `# FAQs Summary

## General Digital Marketing FAQs
1. **What skills can I gain?** SEO, social media, paid advertising, Google Ads, content marketing, email marketing, analytics, and affiliate marketing.
2. **Is digital marketing a good career in Ahmedabad/Surat?** Yes, high demand due to business digitalization. Average salary of freshers is \u20b92.5L to \u20b95L.
3. **Can I learn alongside my job?** Yes, flexible evening and weekend batches are available.
4. **Can I learn in 3 months?** Yes, intensive fast-track options are available.
5. **What is the qualification required?** No specific educational prerequisite, but basic computer skills and basic English command are necessary.

## Course Cost & Fees FAQs
- **ASDM Surat Course Fee**: Ranges between \u20b940,000 to \u20b990,000 depending on modules, certification, and AI training inclusion. Exact pricing decided after counselling.
`,

  'contact.md': `# Contact Details and Forms Summary

## Physical Campus Contact Info
- **Main Head Office**: 217, Shangrila Arcade, Shyamal Cross Rd, Ahmedabad. Phone: +91 9327967701.
- **Naroda**: 101, Business Hub, nana chiloda, Airport Road, Ahmedabad. Phone: +91 9327967701.
- **Surat**: 501 Solaris Cube, Vesu, Surat. Phone: +91 9327967701 / +91 9016970734.
- **WhatsApp Channel**: +91 9327967701

## Central Support Email
- info@asdm.co.in / asdmofficial@gmail.com
`,

  'conversion-paths.md': `# Conversion Paths Summary

## Sticky Conversion Bars
Discovered on mobile and desktop layout:
- **Call Now**: Triggers \\\`tel:+919016970734\\\`
- **WhatsApp**: Triggers chat at \\\`https://wa.me/919327967701?text=Inquiry%20for%20digital%20marketing%20course\\\`
- **Enquire Now**: Opens modal form.

## Enquiry & Brochure Download Form Fields
- **Name**: Required text input.
- **Email**: Required email format.
- **WhatsApp Phone Number**: Required tel format, between 10 and 15 digits.
- **Select Center**: Dropdown options:
  - \`AHMEDABAD\`
  - \`SURAT\`
  *(Note: Naroda is excluded in select lists; Mumbai is also excluded).*

## Form Actions & API Endpoints
- Standard Enquiry: Submits to \\\`/mail-send\\\` action.
- Brochure Request (OTP Route): Submits to \\\`/otp-send\\\`.
- OTP Validation Form: Input field \\\`otp\\\`, submits to \\\`/otpverification\\\`.
`,

  'claims.md': `# Claims and Statistic Verification Summary

This sheet compiles all prominent statistics, accreditations, and outcomes displayed on the ASDM website, noting inconsistencies across different landing pages.

## Discovered Statistic Mismatches
1. **Students Trained**:
   - *2,00,000+* (Homepage, Surat page)
   - *50,000+* (SEO Course Ahmedabad page)
   - *2,50,000+* (Love Tyagi biography)
2. **Placement Metrics**:
   - *50,000+ Placements* (Homepage)
   - *7,000+ Placements Delivered* (Placement page)
3. **Corporate Placement Partners**:
   - *100+ Active Partners* (Placement page body text)
   - *700+ Recruiter Partners* (Placement page graphic block)
   - *1,000+ Partners* (SEO Ahmedabad course page)
   - *100+ E-Commerce Partners* (E-Commerce course page)
4. **Establishment / Experience Duration**:
   - *14+ Years in Digital Education* (Homepage, est. ~2012)
   - *Founded in 2014* (About Us page history timeline)
   - *Love Tyagi 5 Years of experience before 2014* (est. ~2009)
5. **Average Salary Packages for Freshers**:
   - *2,50,000 - 5,00,000 p.a.* (Homepage & Surat FAQ)
   - *4,00,000 - 5,00,000 p.a.* (Ahmedabad FAQ / Placement section)
`,
};

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Extracted: ${filename}`);
}

console.log('Markdown extraction completed!');
