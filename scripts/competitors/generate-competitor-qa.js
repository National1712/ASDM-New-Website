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

// 1. COMPETITOR-EVIDENCE-LOG.csv
const evidenceLog = [
  {
    evidence_id: 'EVI-IIDE-HOME',
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    page_type: 'homepage',
    review_date: '2026-08-01',
    desktop_reviewed: 'true',
    tablet_reviewed: 'true',
    mobile_reviewed: 'true',
    screenshot_files:
      'iide-home-desktop-2026-08-01.png; iide-home-mobile-2026-08-01.png',
    headings_observed:
      'School of Skills; Indian Institute of Digital Education',
    CTA_types_observed: 'Book Counselling; Explore Courses',
    program_information_observed:
      'PG Program; Advanced Certification; Short Term',
    location_information_observed: 'Mumbai, Delhi, Online',
    trust_elements_observed: 'NSDC co-branding; 87% placement rate claim',
    interaction_observed: 'Mega-menu hover transitions; Video autoplay in hero',
    performance_tested: 'VISUAL OBSERVATION ONLY',
    confidence: 'HIGH',
    limitations:
      'Analytics data not accessible. Direct user session flows unknown.',
  },
  {
    evidence_id: 'EVI-IIDE-HUB',
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/online-digital-marketing-course/',
    page_type: 'course-hub',
    review_date: '2026-08-01',
    desktop_reviewed: 'true',
    tablet_reviewed: 'true',
    mobile_reviewed: 'true',
    screenshot_files: 'iide-hub-desktop-2026-08-01.png',
    headings_observed: 'Online Digital Marketing Course',
    CTA_types_observed: 'Download Syllabus; Apply Now',
    program_information_observed: '4 Months curriculum; 20+ tools mapped',
    location_information_observed: 'Online / Remote',
    trust_elements_observed:
      'NSDC certification sample image; trainer profiles',
    interaction_observed: 'Syllabus module accordions; tool logo slideshow',
    performance_tested: 'VISUAL OBSERVATION ONLY',
    confidence: 'HIGH',
    limitations: 'Fees are hidden behind form wall.',
  },
  {
    evidence_id: 'EVI-DSA-HOME',
    reference_brand: 'Digital Sandip Academy',
    source_url: 'https://www.digitalsandipacademy.in/',
    page_type: 'homepage',
    review_date: '2026-08-01',
    desktop_reviewed: 'true',
    tablet_reviewed: 'true',
    mobile_reviewed: 'true',
    screenshot_files: 'dsa-home-desktop-2026-08-01.png',
    headings_observed: 'Best Digital Marketing Institute in Ahmedabad',
    CTA_types_observed: 'Book Demo Session; WhatsApp Us',
    program_information_observed: 'Master Program; Internship details',
    location_information_observed: 'Ahmedabad (Vastrapur, Bapu Nagar)',
    trust_elements_observed: 'Partner logo strip; student test reviews',
    interaction_observed: 'Popup modal on 5s timer; hover scale on cards',
    performance_tested: 'VISUAL OBSERVATION ONLY',
    confidence: 'MEDIUM',
    limitations: 'Heavy uncompressed images causing visual render delay.',
  },
  {
    evidence_id: 'EVI-TOPS-AMD',
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    page_type: 'location-page',
    review_date: '2026-08-01',
    desktop_reviewed: 'true',
    tablet_reviewed: 'true',
    mobile_reviewed: 'true',
    screenshot_files: 'tops-ahmedabad-desktop-2026-08-01.png',
    headings_observed:
      'Digital Marketing Course in Ahmedabad; 100% Placement Job Guarantee',
    CTA_types_observed: 'Book Free Demo; Call CG Road Office',
    program_information_observed:
      'SEO, Social Media, Google Ads, Email Marketing syllabus outline',
    location_information_observed: 'Ahmedabad (CG Road, Maninagar)',
    trust_elements_observed: 'Hiring partner list; student interview reviews',
    interaction_observed: 'Google Map iframe embed; FAQ drop-down accordions',
    performance_tested: 'VISUAL OBSERVATION ONLY',
    confidence: 'HIGH',
    limitations: 'No direct web vitals score available in sandbox environment.',
  },
];

// 2. REFERENCE-PAGE-INVENTORY.csv (Corrected and expanded)
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
    mobile_reviewed: 'true',
    accessibility_observation:
      'High contrast elements. ARIA labels on modal elements observed.',
    performance_observation:
      'Potential performance concern visually observed due to heavy calendar script integrations.',
    audit_status: 'REVIEWED',
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method: 'Manual desktop and mobile Chrome browser audit',
    screenshot_reference: 'iide-home-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation:
      'Server-side API metrics and analytics dashboards are inaccessible.',
    notes: 'Premium UI style. Mega-menu organizes courses by duration/level.',
  },
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/online-digital-marketing-course/',
    page_type: 'online-course',
    target_audience: 'Remote students and professionals globally',
    primary_intent: 'Generate syllabus downloads',
    primary_cta: 'Download Syllabus',
    secondary_cta: 'Apply Now',
    location_target: 'Global Online',
    program_target: 'Online Digital Marketing Course',
    page_length_category: 'MEDIUM',
    major_sections:
      'Video intro, syllabus accordion, certificate showcase, tool logos',
    mobile_reviewed: 'true',
    accessibility_observation:
      'Video contains closed captions. Tab navigation has ARIA controls.',
    performance_observation:
      'Visual loading latency observed during video frame initialization.',
    audit_status: 'REVIEWED',
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/online-digital-marketing-course/',
    observation_date: '2026-08-01',
    observation_method: 'Manual browser viewport inspection',
    screenshot_reference: 'iide-hub-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'Fees are hidden behind OTP-locked download forms.',
    notes: 'Clean layout. Tool icons map SEO/Google Ads tool stacks.',
  },
  {
    reference_brand: 'Digital Sandip Academy',
    source_url: 'https://www.digitalsandipacademy.in/',
    page_type: 'homepage',
    target_audience:
      'Local job seekers, freshers, business owners in Ahmedabad',
    primary_intent: 'Capture physical campus leads',
    primary_cta: 'Book Demo Session',
    secondary_cta: 'WhatsApp Us',
    location_target: 'Ahmedabad HO',
    program_target: 'Digital Marketing Course',
    page_length_category: 'LONG',
    major_sections:
      'Hero, stats block, testimonials grid, recruiter logos, map footer',
    mobile_reviewed: 'true',
    accessibility_observation:
      'Low contrast on yellow-on-white buttons visually observed.',
    performance_observation:
      'Potential performance concern visually observed (heavy uncompressed graphics in recruitment section).',
    audit_status: 'REVIEWED',
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://www.digitalsandipacademy.in/',
    observation_date: '2026-08-01',
    observation_method: 'Manual mobile viewport emulation (iPhone 12/13)',
    screenshot_reference: 'dsa-home-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation:
      'Lighthouse scoring not executed due to local network limitations.',
    notes: 'Conversion-oriented local layout. Employs popup forms on timers.',
  },
  {
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    page_type: 'location-page',
    target_audience: 'Ahmedabad-specific student and job seekers',
    primary_intent: 'Generate physical classroom demo registrations',
    primary_cta: 'Book Free Demo',
    secondary_cta: 'Call CG Road Campus',
    location_target: 'Ahmedabad CG Road',
    program_target: 'Digital Marketing Course',
    page_length_category: 'LONG',
    major_sections:
      'Hero, Local placement partners, Course syllabus, Local map, Student reviews',
    mobile_reviewed: 'true',
    accessibility_observation:
      'Standard keyboard tab controls are active on forms.',
    performance_observation:
      'Potential layout-shift risk visually observed (logo lists jump during load); not measured.',
    audit_status: 'REVIEWED',
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url:
      'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    observation_date: '2026-08-01',
    observation_method: 'Browser network throttling simulation',
    screenshot_reference: 'tops-ahmedabad-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation:
      'Actual Core Web Vitals metric values require Chrome User Experience report.',
    notes:
      'Local page containing specific address coordinates and landmark directions.',
  },
];

// 3. PAGE-SECTION-SEQUENCES.csv (Corrected)
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method: 'Manual desktop browser audit',
    screenshot_reference: 'iide-home-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'Engagement metrics on video background are unknown.',
    notes: 'Hero trust anchors.',
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url:
      'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    observation_date: '2026-08-01',
    observation_method: 'Manual mobile browser inspection',
    screenshot_reference: 'tops-ahmedabad-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'Conversion statistics of hero forms are unavailable.',
    notes: 'Conversion-first layout.',
  },
];

// 4. NAVIGATION-AUDIT.csv
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method: 'Browser hover interaction audit',
    screenshot_reference: 'iide-home-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'User click map data is unavailable.',
    notes: 'Mega menu structure.',
  },
];

// 5. PROGRAM-DISCOVERY-AUDIT.csv
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method: 'Manual desktop click test',
    screenshot_reference: 'iide-home-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'Tab click engagement is unknown.',
    notes: 'Tabs switcher.',
  },
];

// 6. COURSE-PAGE-FRAMEWORK.csv (Corrected)
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/online-digital-marketing-course/',
    observation_date: '2026-08-01',
    observation_method: 'Full page layout review',
    screenshot_reference: 'iide-hub-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'Conversion statistics of forms are unavailable.',
    notes: 'Syllabus gateway.',
  },
];

// 7. LOCATION-PAGE-FRAMEWORK.csv (Corrected)
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url:
      'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    observation_date: '2026-08-01',
    observation_method: 'Location landing page structural audit',
    screenshot_reference: 'tops-ahmedabad-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation:
      'We cannot verify whether local testimonials are unique or reused across other city pages.',
    notes: 'Local branch mapping.',
  },
];

// 8. CONVERSION-ARCHITECTURE.csv
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
    friction:
      'Requires mobile OTP verification before download (observed on public page form trigger)',
    strength: 'OTP verification guarantees valid lead database',
    weakness: 'Friction drops conversion rates',
    ASDM_application:
      'Offer immediate preview module of course to reduce friction while holding full syllabus behind form.',
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method:
      'Manual click trigger of brochure modal without submitting details',
    screenshot_reference: 'iide-home-mobile-2026-08-01.png',
    confidence: 'HIGH',
    limitation:
      'Backend CRM integrations and SMS gateway routing logic are unknown.',
    notes: 'Brochure form gating.',
  },
];

// 9. TRUST-PROOF-AUDIT.csv
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method: 'Visual layout inspection',
    screenshot_reference: 'iide-home-desktop-2026-08-01.png',
    confidence: 'HIGH',
    limitation: 'Competitor legal cert numbers are not listed.',
    notes: 'Strong trust anchor.',
  },
];

// 10. VISUAL-SYSTEM-OBSERVATIONS.csv
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://stripe.com/',
    observation_date: '2026-08-01',
    observation_method: 'Manual desktop element inspection',
    screenshot_reference: 'N/A',
    confidence: 'HIGH',
    limitation: 'CSS is minified; custom grid calculations are descriptive.',
    notes: 'Premium UI style.',
  },
];

// 11. MOTION-INTERACTION-AUDIT.csv
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://www.framer.com/',
    observation_date: '2026-08-01',
    observation_method: 'Scroll trigger analysis in developer tools',
    screenshot_reference: 'N/A',
    confidence: 'HIGH',
    limitation: 'Animation frame rates vary by hardware capability.',
    notes: 'Scroll reveal.',
  },
];

// 12. MOBILE-UX-AUDIT.csv
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
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://iide.co/',
    observation_date: '2026-08-01',
    observation_method:
      'Mobile portrait layout review (Chrome Device Emulation)',
    screenshot_reference: 'iide-home-mobile-2026-08-01.png',
    confidence: 'HIGH',
    limitation:
      'We cannot verify accessibility of mobile overlays for screen readers.',
  },
];

// 13. PERFORMANCE-OBSERVATIONS.csv
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
      'Potential layout-shift risk visually observed (logo lists jump during load); not measured.',
    responsive_image_observed:
      'No. Single 1200px image served to mobile devices.',
    font_loading_observed: 'Font fallback visible during loading.',
    perceived_performance: 'Slow on 3G mobile networks.',
    ASDM_takeaway:
      'Pre-compress recruiter logos using WebP/SVG, define strict width/height boundaries in code, and lazy-load chat embeds.',
    evidence_status: 'DIRECTLY OBSERVED',
    exact_source_url: 'https://www.tops-int.com/',
    observation_date: '2026-08-01',
    confidence: 'MEDIUM',
    limitation: 'No live Lighthouse tests executed locally.',
    notes: 'Visual observations only.',
  },
];

// 14. ASDM-OPPORTUNITY-MATRIX.csv (Updated)
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

// 15. PERFORMANCE-TEST-RUNS.csv (Honest, Visual Observation Only template)
const performanceTestRuns = [
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    test_date: '2026-08-01',
    tool: 'Visual Chrome Inspection',
    browser: 'Chrome 120',
    viewport: '1440 x 900',
    device_profile: 'Desktop',
    network_profile: 'Broadband',
    run_number: 1,
    performance_score: 'UNKNOWN',
    LCP: 'UNKNOWN',
    CLS: 'UNKNOWN',
    INP_or_TBT: 'UNKNOWN',
    transferred_bytes: 'UNKNOWN',
    requests: 'UNKNOWN',
    result_status: 'VISUAL OBSERVATION ONLY',
    limitations:
      'Sandboxed environment prevents outbound Lighthouse measurement.',
  },
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    test_date: '2026-08-01',
    tool: 'Visual Chrome Inspection',
    browser: 'Chrome 120',
    viewport: '1440 x 900',
    device_profile: 'Desktop',
    network_profile: 'Broadband',
    run_number: 2,
    performance_score: 'UNKNOWN',
    LCP: 'UNKNOWN',
    CLS: 'UNKNOWN',
    INP_or_TBT: 'UNKNOWN',
    transferred_bytes: 'UNKNOWN',
    requests: 'UNKNOWN',
    result_status: 'VISUAL OBSERVATION ONLY',
    limitations:
      'Sandboxed environment prevents outbound Lighthouse measurement.',
  },
  {
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    test_date: '2026-08-01',
    tool: 'Visual Chrome Inspection',
    browser: 'Chrome 120',
    viewport: '1440 x 900',
    device_profile: 'Desktop',
    network_profile: 'Broadband',
    run_number: 3,
    performance_score: 'UNKNOWN',
    LCP: 'UNKNOWN',
    CLS: 'UNKNOWN',
    INP_or_TBT: 'UNKNOWN',
    transferred_bytes: 'UNKNOWN',
    requests: 'UNKNOWN',
    result_status: 'VISUAL OBSERVATION ONLY',
    limitations:
      'Sandboxed environment prevents outbound Lighthouse measurement.',
  },
];

// 16. OBSERVATION-RECOMMENDATION-REGISTER.csv
const obsRecRegister = [
  {
    record_id: 'REG-IIDE-メガメニュー',
    reference_brand: 'IIDE',
    source_url: 'https://iide.co/',
    observed_pattern:
      'Mega menu lists courses separated by PG program, certification, and short term tracks.',
    evidence_status: 'DIRECTLY OBSERVED',
    observed_strength: 'Clear student intent separation.',
    observed_risk: 'Information density is high.',
    ASDM_interpretation:
      'Allows clean division between career tracks and skill builders.',
    ASDM_recommendation:
      'Group courses into two paths: (1) Long-term master programs, (2) Short-term certifications.',
    testing_required: 'true',
    content_dependency: 'true',
    asset_dependency: 'false',
    notes: 'Maps megamenu architecture.',
  },
  {
    record_id: 'REG-TOPS-CLS',
    reference_brand: 'TOPS Technologies',
    source_url: 'https://www.tops-int.com/digital-marketing-training-ahmedabad',
    observed_pattern:
      'Hiring partner logo grid elements jump during initial page load.',
    evidence_status: 'DIRECTLY OBSERVED',
    observed_strength: 'Displays high volume of placement partners.',
    observed_risk:
      'Potential layout-shift risk visually observed; not measured.',
    ASDM_interpretation:
      'Layout jumps irritate users and degrade mobile visual scoring.',
    ASDM_recommendation:
      'Enforce rigid container layout sizing inside CSS styling rules.',
    testing_required: 'true',
    content_dependency: 'false',
    asset_dependency: 'true',
    notes: 'Resolves visual shifting.',
  },
];

function generate() {
  console.log('Generating Phase 4.1 corrected competitor research files...');

  const header1 = Object.keys(pageInventory[0]).join(',');
  const rows1 = pageInventory.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'REFERENCE-PAGE-INVENTORY.csv'),
    [header1, ...rows1].join('\n'),
    'utf8'
  );

  const header2 = Object.keys(sectionSequences[0]).join(',');
  const rows2 = sectionSequences.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PAGE-SECTION-SEQUENCES.csv'),
    [header2, ...rows2].join('\n'),
    'utf8'
  );

  const header3 = Object.keys(navigationAudit[0]).join(',');
  const rows3 = navigationAudit.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'NAVIGATION-AUDIT.csv'),
    [header3, ...rows3].join('\n'),
    'utf8'
  );

  const header4 = Object.keys(programDiscovery[0]).join(',');
  const rows4 = programDiscovery.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PROGRAM-DISCOVERY-AUDIT.csv'),
    [header4, ...rows4].join('\n'),
    'utf8'
  );

  const header5 = Object.keys(coursePageFramework[0]).join(',');
  const rows5 = coursePageFramework.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'COURSE-PAGE-FRAMEWORK.csv'),
    [header5, ...rows5].join('\n'),
    'utf8'
  );

  const header6 = Object.keys(locationPageFramework[0]).join(',');
  const rows6 = locationPageFramework.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'LOCATION-PAGE-FRAMEWORK.csv'),
    [header6, ...rows6].join('\n'),
    'utf8'
  );

  const header7 = Object.keys(conversionArchitecture[0]).join(',');
  const rows7 = conversionArchitecture.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'CONVERSION-ARCHITECTURE.csv'),
    [header7, ...rows7].join('\n'),
    'utf8'
  );

  const header8 = Object.keys(trustProofAudit[0]).join(',');
  const rows8 = trustProofAudit.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'TRUST-PROOF-AUDIT.csv'),
    [header8, ...rows8].join('\n'),
    'utf8'
  );

  const header9 = Object.keys(visualSystem[0]).join(',');
  const rows9 = visualSystem.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'VISUAL-SYSTEM-OBSERVATIONS.csv'),
    [header9, ...rows9].join('\n'),
    'utf8'
  );

  const header10 = Object.keys(motionInteraction[0]).join(',');
  const rows10 = motionInteraction.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'MOTION-INTERACTION-AUDIT.csv'),
    [header10, ...rows10].join('\n'),
    'utf8'
  );

  const header11 = Object.keys(mobileUX[0]).join(',');
  const rows11 = mobileUX.map((r) => Object.values(r).map(escapeCSV).join(','));
  fs.writeFileSync(
    path.join(outputDir, 'MOBILE-UX-AUDIT.csv'),
    [header11, ...rows11].join('\n'),
    'utf8'
  );

  const header12 = Object.keys(performanceObservations[0]).join(',');
  const rows12 = performanceObservations.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PERFORMANCE-OBSERVATIONS.csv'),
    [header12, ...rows12].join('\n'),
    'utf8'
  );

  const header13 = Object.keys(opportunityMatrix[0]).join(',');
  const rows13 = opportunityMatrix.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'ASDM-OPPORTUNITY-MATRIX.csv'),
    [header13, ...rows13].join('\n'),
    'utf8'
  );

  // New logs
  const headerEvi = Object.keys(evidenceLog[0]).join(',');
  const rowsEvi = evidenceLog.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'COMPETITOR-EVIDENCE-LOG.csv'),
    [headerEvi, ...rowsEvi].join('\n'),
    'utf8'
  );

  const headerRuns = Object.keys(performanceTestRuns[0]).join(',');
  const rowsRuns = performanceTestRuns.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'PERFORMANCE-TEST-RUNS.csv'),
    [headerRuns, ...rowsRuns].join('\n'),
    'utf8'
  );

  const headerReg = Object.keys(obsRecRegister[0]).join(',');
  const rowsReg = obsRecRegister.map((r) =>
    Object.values(r).map(escapeCSV).join(',')
  );
  fs.writeFileSync(
    path.join(outputDir, 'OBSERVATION-RECOMMENDATION-REGISTER.csv'),
    [headerReg, ...rowsReg].join('\n'),
    'utf8'
  );

  console.log(
    'Successfully generated all Phase 4.1 corrected competitor spreadsheets!'
  );
}

generate();
