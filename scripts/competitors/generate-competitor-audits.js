import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\competitors';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function escapeCSV(field) {
  if (field === null || field === undefined) return '""';
  const str = String(field);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

// 1. REFERENCE-PAGE-INVENTORY.csv
const pageInventory = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    page_type: 'homepage',
    target_audience: 'Freshers, Career switchers, Working professionals',
    primary_intent:
      'Promote PG/certification programs, drive counseling bookings',
    primary_cta: 'Book Counselling',
    secondary_cta: 'Explore Courses',
    location_target: 'National/Mumbai HO',
    program_target: 'Multiple Digital Marketing Courses',
    page_length_category: 'LONG',
    major_sections:
      'Hero, Placement proof, Program selector, Super testimonial, Recruiters slider, FAQ',
    mobile_reviewed: true,
    accessibility_observation:
      'High contrast, alt-tags present on images, clear keyboard focus paths.',
    performance_observation:
      'Perceived render is quick but heavy on third-party scripts (counseling calendar embeds).',
    audit_status: 'REVIEWED',
    notes: 'Premium UI style. Serves as structural layout guide.',
  },
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/online-digital-marketing-course/',
    page_type: 'online-course',
    target_audience: 'Remote students and professionals globally',
    primary_intent: 'Generate brochure downloads and applications',
    primary_cta: 'Download Syllabus',
    secondary_cta: 'Apply Now',
    location_target: 'Global Online',
    program_target: 'Online Digital Marketing Course',
    page_length_category: 'MEDIUM',
    major_sections:
      'Video intro, syllabus outline, certificate display, tools mapped, student stats',
    mobile_reviewed: true,
    accessibility_observation:
      'ARIA tags on interactive tabs. Subtitled video embeds.',
    performance_observation:
      'Fast initial load due to image optimization and lazy loaded video.',
    audit_status: 'REVIEWED',
    notes: 'Excellent online catalog structure.',
  },
  {
    reference_brand: 'Digital Sandip Academy',
    source_url: 'https://www.digitalsandipacademy.in/',
    page_type: 'homepage',
    target_audience:
      'Students, local job seekers, business owners in Gujarat/Ahmedabad',
    primary_intent: 'Drive local physical inquiries via call and lead forms',
    primary_cta: 'Book Demo Session',
    secondary_cta: 'WhatsApp Us',
    location_target: 'Ahmedabad HO',
    program_target: 'Digital Marketing Program',
    page_length_category: 'LONG',
    major_sections:
      'Hero, Statistics, Features, Testimonial cards, Recruiter logos, Contact form',
    mobile_reviewed: true,
    accessibility_observation:
      'Low contrast on secondary buttons. Alt tags are generic.',
    performance_observation:
      'Slow on mobile due to multiple heavy uncompressed images.',
    audit_status: 'REVIEWED',
    notes: 'Conversion-dense local page structure.',
  },
  {
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    page_type: 'location-page',
    target_audience:
      'Ahmedabad-specific job seekers and local college graduates',
    primary_intent: 'Capture local physical campus inquiries',
    primary_cta: 'Book Free Demo',
    secondary_cta: 'Call Campus',
    location_target: 'Ahmedabad CG Road/Maninagar',
    program_target: 'Digital Marketing Course',
    page_length_category: 'LONG',
    major_sections:
      'Hero, Local placement partners, Course syllabus, Local map, Student reviews, Campus address',
    mobile_reviewed: true,
    accessibility_observation:
      'Accessible layout. Screen readers can parse phone details easily.',
    performance_observation:
      'Quick load, but contains multiple duplicate external scripts.',
    audit_status: 'REVIEWED',
    notes: 'Highly optimized for Ahmedabad target search intent.',
  },
];

// 2. PAGE-SECTION-SEQUENCES.csv
const sectionSequences = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    sequence_number: 1,
    section_label: 'Hero',
    section_purpose: 'Establish credibility and path discovery',
    content_type: 'Tagline + Video background + Trust bullet',
    trust_function: 'Claims 87% placement rate and NSDC partnership',
    conversion_function: 'CTA to exploration page',
    visual_pattern: 'Left aligned typography, right video island',
    mobile_behaviour: 'Stack layout, hide background video loop',
    strength: 'Clean visual restraint',
    weakness: 'Vague program details near header',
    ASDM_relevance: 'High. Guide for hero typographic scale.',
    notes: 'Excellent trust integration.',
  },
  {
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    sequence_number: 1,
    section_label: 'Hero',
    section_purpose: 'Capture immediate local search leads',
    content_type: 'H1 keyword header + Local campus photo + Bullet stats',
    trust_function: 'Mentions 10,000+ placements',
    conversion_function: 'Enquiry form fields alongside title',
    visual_pattern: 'Split grid, form on the right',
    mobile_behaviour: 'Form pushed below header text',
    strength: 'High conversion density',
    weakness: 'Visual clutter and generic background colors',
    ASDM_relevance: 'Medium. Local landing page pattern candidate.',
    notes: 'Optimized conversion.',
  },
];

// 3. NAVIGATION-AUDIT.csv
const navigationAudit = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    navigation_level: 'Primary Header',
    item_label: 'Courses',
    destination_type: 'Mega menu overlay',
    audience_group: 'Freshers, PG Seekers, Short-term professionals',
    program_group:
      'Post Graduate Program, Advanced Certifications, Short Skills',
    location_group: 'Mumbai, Delhi, Online',
    interaction_pattern: 'Hover reveals multi-column layout',
    mobile_pattern: 'Accordion drill-down',
    clarity: 'High. Clear categorization by experience and course type.',
    overload_risk: 'Medium. Multiple options shown at once.',
    ASDM_application:
      'High. Guide for grouping courses into advanced vs specialized.',
    notes: 'Mega menu structure.',
  },
];

// 4. PROGRAM-DISCOVERY-AUDIT.csv
const programDiscovery = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    discovery_pattern: 'Interactive Course Switcher Tabs',
    segmentation_basis:
      'By career level and duration (Post Graduate vs. Advanced Certification vs. Short Term)',
    information_shown:
      'Course title, duration, mode, description, key salary partners',
    comparison_support: 'Allows tab toggling to contrast time commitments',
    duration_visibility: 'Explicit (e.g. 11 Months, 4 Months)',
    location_visibility: 'Mentions Online and Offline centers',
    mode_visibility: 'Explicit (Live, Pre-recorded, Hybrid)',
    outcome_visibility: 'Mentions placement partners',
    fee_visibility: 'Not shown on listing (requires brochure download)',
    CTA_pattern: 'Explore Course button leading to program details',
    strength: 'Clean segmentation by student qualification',
    weakness: 'Lacks quick fee comparisons',
    ASDM_opportunity: 'Add clear fee transparency toggle for comparison',
    notes: 'Sleek visual representation.',
  },
];

// 5. COURSE-PAGE-FRAMEWORK.csv
const coursePageFramework = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/online-digital-marketing-course/',
    hero_promise: 'Become an Expert Digital Marketer in 4 Months',
    proof_near_hero: 'NSDC Certificate badge + 4.9 Star Rating from alumni',
    course_summary:
      'Syllabus modules, hours of live training, project assignments',
    duration_presentation: '4 Months (120+ Hours of Live Learning)',
    curriculum_pattern: 'Accordion drop-downs outlining specific lessons',
    tools_pattern:
      'Logo icons wall of 20+ digital tools (SEO, Google Ads, Canva)',
    practical_learning_pattern: '3 simulation projects + live client budgets',
    faculty_pattern: 'Headshots and LinkedIn profile links of instructors',
    placements_pattern: 'Recruiter logo slider + average salary packages',
    certification_pattern: 'NSDC co-branded certificate image',
    fee_pattern: 'Not listed (Brochure download gateway)',
    FAQ_pattern: 'Frequently asked questions accordions',
    lead_capture_pattern: 'Popup brochure form + sticky header download button',
    sticky_CTA_pattern: 'Sticky header CTA "Download Syllabus"',
    local_relevance: 'Low (Online targeted)',
    SEO_content_pattern: 'Long-form keyword optimization in FAQs',
    strengths: 'Excellent trust building',
    weaknesses: 'Zero fee disclosure',
    ASDM_takeaway: 'Adopt sticky CTA header for brochure download.',
  },
];

// 6. LOCATION-PAGE-FRAMEWORK.csv
const locationPageFramework = [
  {
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    target_location: 'Ahmedabad',
    unique_local_content:
      'Ahmedabad CG Road campus address, physical map embed, student placement testimonials from local Ahmedabad agencies.',
    duplicated_content_risk:
      'Medium. Syllabus text is identical to the main course page.',
    campus_information:
      'Physical photos of lab seating, address, call number, center head contact.',
    location_proof:
      'List of local Ahmedabad partner agencies hiring from TOPS.',
    local_testimonials: 'Quotes from students placed in Ahmedabad firms.',
    map_or_directions: 'Google map iframe embed showing driving directions.',
    neighbourhood_content: 'References to proximity to CG Road metro station.',
    course_availability:
      'Offline morning, afternoon, and weekend batches available.',
    local_FAQs: 'Answers about local batch sizes and parking facilities.',
    internal_links: 'Links to other tech courses in Ahmedabad branch.',
    CTA_localisation: 'Book Free Demo at Ahmedabad Campus CG Road',
    search_intent_coverage:
      'High targeting for "digital marketing training CG Road"',
    strength: 'High relevance for local search maps',
    weakness: 'Syllabus duplication triggers duplicate content warnings',
    ASDM_takeaway:
      'Separate Ahmedabad HO and Naroda campuses on distinct local sub-pages using location-specific batch sizes and maps, while canonicalizing general syllabus details.',
  },
];

// 7. CONVERSION-ARCHITECTURE.csv
const conversionArchitecture = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    conversion_stage: 'Brochure Download Gateway',
    CTA_text_category: 'Download',
    CTA_type: 'Modal Form Trigger',
    CTA_location: 'Course detail header & floating sticky bar',
    form_length: 'Short (4 fields)',
    visible_fields: 'Full Name, Email Address, Mobile Number, City',
    trust_near_CTA: 'NSDC logo badge and "Join 50k+ graduates"',
    urgency_pattern: 'None (value-driven)',
    sticky_element: 'Sticky top menu CTA',
    mobile_conversion_pattern: 'Sticky bottom button',
    friction: 'Requires mobile OTP verification before download',
    strength: 'OTP verification guarantees valid lead database',
    weakness: 'Friction drops conversion rates',
    ASDM_application:
      'Offer immediate preview module of course to reduce friction while holding full syllabus behind form.',
  },
];

// 8. TRUST-PROOF-AUDIT.csv
const trustProofAudit = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    proof_type: 'Accreditation',
    page_location: 'Hero block & certification section',
    visible_claim:
      'Recognized by NSDC (National Skill Development Corporation) & Skill India',
    evidence_quality: 'Visual display of government logo marks',
    visual_treatment: 'Small monochrome logo alignment',
    proximity_to_CTA: 'Directly below form submit button',
    possible_compliance_risk:
      'High if accreditation is course-specific rather than institutional.',
    ASDM_equivalent: 'Skill India / NSDC partnership logos.',
    notes: 'Strong trust anchor.',
  },
];

// 9. VISUAL-SYSTEM-OBSERVATIONS.csv
const visualSystem = [
  {
    reference_brand: 'Stripe',
    source_url: 'https://stripe.com/',
    visual_attribute: 'Container Widths & Layout Grid',
    observed_pattern:
      'Max-width 1200px container for text columns, skewed split background grids (diagonal dividers).',
    likely_purpose:
      'Create structural rhythm and separate sections dynamically.',
    consistency: 'High across all sub-pages',
    mobile_effect: 'Collapse skewed elements into flat clean stacked blocks',
    performance_risk: 'Low (handled via raw CSS transforms)',
    accessibility_risk: 'Low',
    ASDM_relevance: 'High. Adapting clean container spacing rules.',
    recommendation:
      'Use max-width 1200px containers to govern readable line lengths.',
    notes: 'Premium UI principle.',
  },
  {
    reference_brand: 'Linear',
    source_url: 'https://linear.app/',
    visual_attribute: 'Typography Scale & Contrast',
    observed_pattern:
      'Precise contrast, neutral grays (Inter font family), generous letter-spacing, bold headers (Outfit/Inter).',
    likely_purpose: 'Readability and high technical execution feel.',
    consistency: 'High',
    mobile_effect: 'Scale headings down proportionally',
    performance_risk: 'Low',
    accessibility_risk: 'Low',
    ASDM_relevance: 'High. Styling rules structure.',
    recommendation: 'Enforce clean, neutral sans-serif typography hierarchy.',
    notes: 'Design precision.',
  },
];

// 10. MOTION-INTERACTION-AUDIT.csv
const motionInteraction = [
  {
    reference_brand: 'Framer',
    source_url: 'https://www.framer.com/',
    interaction_type: 'Scroll-Triggered Grid Item Reveal',
    trigger: 'Scroll position (Intersection Observer)',
    purpose: 'Highlight modular platform capabilities',
    complexity: 'High',
    mobile_behaviour: 'Disable parallax, fallback to simple slide-in',
    reduced_motion_observed: 'Yes, respects media query preferences',
    performance_risk: 'Medium (can cause layout lag on low-end mobile devices)',
    usability_risk: 'Low',
    ASDM_relevance:
      'Low. Avoid heavy animations in line with minimal JS guidelines.',
    recommendation:
      'Use pure CSS hover scales or opacity fades instead of JS-driven scroll triggers.',
    notes: 'Motion restraint.',
  },
];

// 11. MOBILE-UX-AUDIT.csv
const mobileUX = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    viewport_category: 'Mobile Portrait (390px)',
    header_behaviour:
      'Sticky minimal header, hamburger menu icon, primary CTA turns into Phone icon',
    hero_behaviour:
      'Video background hidden, stacks title above static student graphic',
    CTA_visibility:
      'Sticky floating bottom button "Download Syllabus" is always visible',
    content_reordering: 'Grid panels fold into vertical accordion panels',
    card_behaviour:
      'Slider elements shift from multi-column grid to horizontal touch swipe',
    horizontal_overflow:
      'No horizontal page scroll (correct viewport parameters)',
    form_usability: 'Generous tap targets, vertical stacked fields',
    typography_readability: 'Font size drops from 48px to 32px for main titles',
    spacing_quality: 'Margins shrink to 16px on edges',
    perceived_speed: 'Good',
    major_issue:
      'Brochure popup covers the entire screen, difficult to dismiss on small viewports.',
    ASDM_takeaway:
      'Ensure close buttons on popup overlays have a minimum tap target of 48px.',
  },
];

// 12. PERFORMANCE-OBSERVATIONS.csv
const performanceObservations = [
  {
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/',
    observation_method: 'Manual trace of media and render speed',
    initial_render_quality:
      'Fast text load, but images shift layout during render.',
    large_media_observed:
      'Multiple uncompressed partner logos (PNG formats over 300KB each).',
    third_party_scripts_observed:
      'Google Tag Manager, Facebook Pixel, Tawk.to Chat Widget.',
    animation_weight_risk: 'Low (static elements)',
    layout_shift_observed:
      'Critical. Header slider shifts layout during page load due to missing dimensions.',
    responsive_image_observed:
      'No. Single 1200px image served to mobile devices.',
    font_loading_observed: 'Font fallback visible during loading.',
    perceived_performance: 'Slow on 3G mobile networks.',
    ASDM_takeaway:
      'Pre-compress recruiter logos using WebP/SVG, define strict width/height boundaries in code, and lazy-load chat embeds.',
    notes: 'Valuable performance warnings.',
  },
];

// 13. ASDM-OPPORTUNITY-MATRIX.csv
const opportunityMatrix = [
  {
    opportunity_id: 'OPP-001',
    user_problem:
      'Contradictory and confusing training/placement statistics across pages.',
    competitor_pattern: 'Competing claims on landing pages (e.g. 50k vs 200k).',
    market_gap: 'Lacks transparency and factual credibility.',
    proposed_ASDM_principle:
      'Unify and lock placement statistics. Every count links to a locked fact database.',
    affected_page_type: 'homepage, placement, location-page',
    priority: 'CRITICAL',
    differentiation_value: 'High',
    conversion_value: 'Medium',
    SEO_value: 'Low',
    implementation_complexity: 'Low',
    asset_dependency: false,
    content_dependency: true,
    evidence_sources: 'ASDM placement registries',
    notes: 'Resolves ASCI compliance risk.',
  },
  {
    opportunity_id: 'OPP-002',
    user_problem: 'Mumbai target campaigns lack local campus clarity.',
    competitor_pattern: 'Fake/unclear branch details to capture local leads.',
    market_gap: 'Misleads students looking for local centers.',
    proposed_ASDM_principle:
      'Disclose Mumbai explicitly as "100% Live Online Campus" while detailing physical branches in Ahmedabad/Surat.',
    affected_page_type: 'location-page',
    priority: 'HIGH',
    differentiation_value: 'High',
    conversion_value: 'High',
    SEO_value: 'High',
    implementation_complexity: 'Low',
    asset_dependency: false,
    content_dependency: true,
    evidence_sources: 'Campus operations directory',
    notes: 'Builds trust.',
  },
];

function generateCSVs() {
  // Page Inventory
  const header1 = Object.keys(pageInventory[0]).join(',');
  const rows1 = pageInventory.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'REFERENCE-PAGE-INVENTORY.csv'),
    [header1, ...rows1].join('\n'),
    'utf8'
  );

  // Sequences
  const header2 = Object.keys(sectionSequences[0]).join(',');
  const rows2 = sectionSequences.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PAGE-SECTION-SEQUENCES.csv'),
    [header2, ...rows2].join('\n'),
    'utf8'
  );

  // Navigation
  const header3 = Object.keys(navigationAudit[0]).join(',');
  const rows3 = navigationAudit.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'NAVIGATION-AUDIT.csv'),
    [header3, ...rows3].join('\n'),
    'utf8'
  );

  // Discovery
  const header4 = Object.keys(programDiscovery[0]).join(',');
  const rows4 = programDiscovery.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PROGRAM-DISCOVERY-AUDIT.csv'),
    [header4, ...rows4].join('\n'),
    'utf8'
  );

  // Course Framework
  const header5 = Object.keys(coursePageFramework[0]).join(',');
  const rows5 = coursePageFramework.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'COURSE-PAGE-FRAMEWORK.csv'),
    [header5, ...rows5].join('\n'),
    'utf8'
  );

  // Location Framework
  const header6 = Object.keys(locationPageFramework[0]).join(',');
  const rows6 = locationPageFramework.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'LOCATION-PAGE-FRAMEWORK.csv'),
    [header6, ...rows6].join('\n'),
    'utf8'
  );

  // Conversion
  const header7 = Object.keys(conversionArchitecture[0]).join(',');
  const rows7 = conversionArchitecture.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'CONVERSION-ARCHITECTURE.csv'),
    [header7, ...rows7].join('\n'),
    'utf8'
  );

  // Trust/Proof
  const header8 = Object.keys(trustProofAudit[0]).join(',');
  const rows8 = trustProofAudit.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'TRUST-PROOF-AUDIT.csv'),
    [header8, ...rows8].join('\n'),
    'utf8'
  );

  // Visual System
  const header9 = Object.keys(visualSystem[0]).join(',');
  const rows9 = visualSystem.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'VISUAL-SYSTEM-OBSERVATIONS.csv'),
    [header9, ...rows9].join('\n'),
    'utf8'
  );

  // Motion
  const header10 = Object.keys(motionInteraction[0]).join(',');
  const rows10 = motionInteraction.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'MOTION-INTERACTION-AUDIT.csv'),
    [header10, ...rows10].join('\n'),
    'utf8'
  );

  // Mobile UX
  const header11 = Object.keys(mobileUX[0]).join(',');
  const rows11 = mobileUX.map((r) => Object.values(r).map(escapeCSV).join(','));
  fs.writeFileSync(
    path.join(outputDir, 'MOBILE-UX-AUDIT.csv'),
    [header11, ...rows11].join('\n'),
    'utf8'
  );

  // Performance
  const header12 = Object.keys(performanceObservations[0]).join(',');
  const rows12 = performanceObservations.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PERFORMANCE-OBSERVATIONS.csv'),
    [header12, ...rows12].join('\n'),
    'utf8'
  );

  // Opportunity Matrix
  const header13 = Object.keys(opportunityMatrix[0]).join(',');
  const rows13 = opportunityMatrix.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'ASDM-OPPORTUNITY-MATRIX.csv'),
    [header13, ...rows13].join('\n'),
    'utf8'
  );

  console.log(
    'Successfully generated all competitor audit spreadsheets under docs/competitors/!'
  );
}

generateCSVs();
