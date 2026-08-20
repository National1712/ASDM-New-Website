import fs from 'fs';
import path from 'path';

const outputDir = 'C:\\xampp\\htdocs\\asdm-new-web\\docs\\strategy';
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

// 1. AUDIENCE-PRIORITIES.md
const audiencePrioritiesContent = `# Audience Priorities (AUDIENCE-PRIORITIES.md)

This document prioritizes the primary target audiences for the ASDM website, mapping their anxieties, decision criteria, proof requirements, and landing page priorities.

---

## 👥 Audience Profiles & Matrix

### 1. Graduates & Job Seekers (Primary Priority)
* **Goal**: Acquire digital marketing skills to secure a corporate job or agency role.
* **Main Anxiety**: "Will this course actually get me placed? What if I spend money and remain unemployed?"
* **Decision Criteria**: Placement track records, recruiter brands, hands-on learning, batch durations.
* **Proof Required**: Verified student placement grids, hiring partner logo lists, case studies of student projects.
* **Likely Program Interest**: Professional Program in Advance Digital Marketing (12-month career track).
* **Device Behaviour**: Mobile-first discovery; desktop-first during curriculum comparison.
* **Primary CTA**: Book Counselling / Demo Class
* **Secondary CTA**: Download Syllabus
* **Content That May Confuse Them**: Academic theory overviews, dense corporate coding modules.
* **Homepage Priority**: Critical (High visibility hero placement).
* **Dedicated Page Requirement**: Yes (Course Details page).

### 2. Working Professionals (Secondary Priority)
* **Goal**: Upskill to transition careers or achieve promotions.
* **Main Anxiety**: "Can I manage batches alongside my current job timings?"
* **Decision Criteria**: Flexible batch timings, weekend schedules, remote hybrid availability, practical tool mastery.
* **Proof Required**: Class schedules, trainer credentials, certification recognition.
* **Likely Program Interest**: AI Integrated Advanced Digital Marketing Program (5-month track).
* **Device Behaviour**: Mobile-only during evening hours.
* **Primary CTA**: Request Call / Callback
* **Secondary CTA**: Download Curriculum
* **Content That May Confuse Them**: Full-time internship commitments.
* **Homepage Priority**: High.
* **Dedicated Page Requirement**: Yes (Course Details page).

### 3. Business Owners & Entrepreneurs (Medium Priority)
* **Goal**: Master digital channels to scale their own business or manage marketing agencies.
* **Main Anxiety**: "Is this course too academic? Will I learn tools I can directly apply to my store/agency?"
* **Decision Criteria**: Shopify, Google Ads, and SEO practical modules.
* **Proof Required**: Live project audits, case studies, trainer industry backgrounds.
* **Likely Program Interest**: E-Commerce Marketing Course (3-month track) or Advanced SEO.
* **Device Behaviour**: Desktop-first.
* **Primary CTA**: Book Consultation
* **Secondary CTA**: View Projects
* **Content That May Confuse Them**: Job placement guarantees.
* **Homepage Priority**: Medium.
* **Dedicated Page Requirement**: Yes (Specialized course routes).

### 4. Parents (Medium Priority)
* **Goal**: Ensure their child receives a recognized certification and job security.
* **Main Anxiety**: "Is this institute government-recognized? Is the tuition fee safe?"
* **Decision Criteria**: Government certifications, physical center safety, placements.
* **Proof Required**: Skill India & NSDC co-branding certificates, center lab photos.
* **Likely Program Interest**: Professional Career Tracks.
* **Device Behaviour**: Desktop or joint mobile review with child.
* **Primary CTA**: Book Campus Visit
* **Secondary CTA**: Call Campus
* **Content That May Confuse Them**: Complex digital tool terminology.
* **Homepage Priority**: High (placement and accreditation blocks).
* **Dedicated Page Requirement**: No (covered on homepage and contact pages).
`;

// 2. WEBSITE-JOBS.md
const websiteJobsContent = `# Website Jobs (WEBSITE-JOBS.md)

This document defines the key "jobs" the ASDM website must perform, detailing user and business needs, dependencies, and success metrics.

---

## 🏛️ Website Jobs Framework

### 1. Help Visitors Identify the Right Program
* **User Need**: Contrast course tracks (duration, career vs short-term, online vs offline) without choice paralysis.
* **Business Need**: Route prospects to the correct admission queue.
* **Page Type Responsible**: Homepage & Program Hub page.
* **Required Evidence**: Program taxonomy parameters.
* **Conversion Event**: Clicks on course detail path or syllabus downloads.
* **SEO Relevance**: Link juice distribution across course routes.
* **Content Dependency**: Course duration summaries.
* **Asset Dependency**: Distinctive course vectors.
* **Success Metric**: Reduction in program hub page exit rates.
* **Current Limitation**: Vague course divisions in current marketing sheets.

### 2. Demonstrate Practical Learning Clearly
* **User Need**: Verification that training involves actual live budgets and software tools.
* **Business Need**: Overcome competitor stock claims.
* **Page Type Responsible**: Course details page.
* **Required Evidence**: Live campaigns case studies.
* **Conversion Event**: Crochure downloads.
* **SEO Relevance**: Rich contextual keyword indexing.
* **Content Dependency**: Verified student campaign metrics.
* **Asset Dependency**: Screenshots of real campaign dashboards.
* **Success Metric**: Higher lead conversion on pages detailing student projects.
* **Current Limitation**: Local asset inventories lack verified screenshot folders.

### 3. Generate Counselling Enquiries
* **User Need**: Easy, low-friction path to ask questions.
* **Business Need**: Maintain a steady volume of qualified sales leads.
* **Page Type Responsible**: All pages.
* **Required Evidence**: Trust indicators near forms.
* **Conversion Event**: Form submissions.
* **SEO Relevance**: Conversion rate optimization (CRO).
* **Content Dependency**: Standard form fields.
* **Asset Dependency**: Security trust SVGs.
* **Success Metric**: Enquiries conversion rate above 3% on mobile.
* **Current Limitation**: No lead data to measure baseline rates.

### 4. Support Local City Campuses (Ahmedabad HO, Naroda, Surat)
* **User Need**: Find office location, local schedules, and direct manager lines.
* **Business Need**: Drive physical foot traffic to local centers.
* **Page Type Responsible**: Location landing pages.
* **Required Evidence**: Google Maps overlays and physical coordinates.
* **Conversion Event**: Direct campus calls.
* **SEO Relevance**: High organic search authority for local intent (Ahmedabad, Surat).
* **Content Dependency**: Location-specific landmarks.
* **Asset Dependency**: Real lab photos.
* **Success Metric**: Increase in local physical demo bookings.
* **Current Limitation**: Missing photos of physical classrooms.
`;

// 3. POSITIONING-FRAMEWORK.md
const positioningFrameworkContent = `# Positioning Framework (POSITIONING-FRAMEWORK.md)

This document analyzes ASDM's positioning and presents 3 distinct strategic territories for stakeholder evaluation.

---

## 🎯 Positioning Analysis

* **Current Public Positioning**: General digital marketing training with generic claims.
* **Desired Future Positioning**: Premium, high-performance local training academy anchored in live budgets and government certifications.
* **Core Audience Promise**: Acquire practical, career-ready digital marketing skills through live budgets, co-branded NSDC accreditations, and direct mentorship.
* **AI & Digital Marketing Relationship**: Digital marketing foundation training is the primary core, with AI integrated as a critical modern accelerator rather than a standalone gimmick.
* **Premium-Brand Interpretation**: Generous layouts, clear spacings, visual restraint, and strict information hierarchy.
* **Claims That Cannot Yet Be Used**: Any unverified placement numbers or salary packages.
* **Language to Avoid**: "100% Placement Guarantee", "Earn 50k Freelancing", "India's Best Institute", "Become an Expert overnight".

---

## 🗺️ Brand Positioning Territories (Candidates)

### Territory 1: The Practical Live-Budget Academy (Recommended)
* **Strategic Idea**: Focus completely on the reality of learning via live campaign budgets. "Don't just study digital marketing. Run it with real money."
* **Audience**: Career switchers, Entrepreneurs, Graduates.
* **Strength**: Instantly differentiates ASDM from purely theoretical online courses.
* **Risk**: High asset dependency on real campaign snapshots and account verifications.
* **Required Proof**: Logs of budgets allocated, case studies.
* **Visual Implication**: Dashboard panels, browser viewports showing live metrics.
* **Content Implication**: Focus on campaign briefs and client deliverables.
* **Why Original**: Very few local institutes allocate actual advertising budgets to students.

### Territory 2: The Government-Accredited Professional Track
* **Strategic Idea**: Focus on government recognition and career security. "Skill India & NSDC certified career tracks."
* **Audience**: Parents, College Graduates.
* **Strength**: High trust anchor, appeals to price-sensitive families looking for formal credentials.
* **Risk**: High dependency on compliance rules.
* **Required Proof**: Co-branded NSDC certificate layouts.
* **Visual Implication**: Clean, official borders, institutional trust indicators.
* **Content Implication**: Focus on syllabus modules aligned with national skill standards.
* **Why Original**: Leverages formal government recognition directly near action areas.

### Territory 3: The AI-Accelerated Marketing Hub
* **Strategic Idea**: Focus on modern tool integration. "Modern digital marketing accelerated by AI workflows."
* **Audience**: Freelancers, tech-savvy working professionals.
* **Strength**: Appeals to modern tech trends.
* **Risk**: Fast deprecation of tool suites; requires frequent syllabus updates.
* **Required Proof**: Case studies of AI-generated campaigns.
* **Visual Implication**: High-precision grid layout, tech-focused dark card accents.
* **Content Implication**: Detailed modules listing modern AI tool integrations (ChatGPT, Midjourney).
* **Why Original**: Positions ASDM as forward-thinking.
`;

// 4. PROGRAM-TAXONOMY.md
const programTaxonomyContent = `# Program Taxonomy (PROGRAM-TAXONOMY.md)

This document establishes the user-friendly grouping and segmentation model for ASDM's program offerings.

---

## 🏛️ Proposed Grouping Dimensions

### 1. Career Programs (Long-Term Mastery)
* **User Need**: Complete career transformation with placement support.
* **Included Programs**: Professional Program in Advance Digital Marketing (12 Months).
* **Excluded Programs**: 3-month short courses.
* **Qualification Level**: Graduates, freshers looking for full placements.
* **Delivery Mode**: Classroom offline.
* **Location**: Ahmedabad HO, Surat Vesu.
* **Comparison Attributes**: Includes agency internship and full placement registry.
* **Naming Risk**: Must not be confused with short certification tracks.

### 2. Certification Programs (Short-Term Skills)
* **User Need**: Skill up in specific digital channels within a shorter timeframe.
* **Included Programs**: AI Integrated Advanced Digital Marketing Program (5 Months), E-Commerce Marketing (3 Months), Advanced SEO.
* **Excluded Programs**: 12-month professional tracks.
* **Qualification Level**: Working professionals, business owners.
* **Delivery Mode**: Classroom offline or hybrid.
* **Location**: Ahmedabad HO, Surat, Online.
* **Comparison Attributes**: Flexible timings, tools-focused certifications.
* **Naming Risk**: Needs clear differentiator markers.
`;

// 5. PROGRAM-COMPARISON-MODEL.csv
const programComparisonCSV = [
  [
    'program_id',
    'current_name',
    'proposed_group',
    'duration',
    'mode',
    'location',
    'suitable_for',
    'primary_outcome',
    'prerequisite',
    'internship_status',
    'placement_status',
    'certification_status',
    'verification_status',
    'homepage_visibility',
    'comparison_priority',
    'notes',
  ],
  [
    'PROG-ADM-12',
    'Professional Program in Advance Digital Marketing',
    'Career Program',
    '12 Months',
    'Classroom Offline',
    'Ahmedabad HO; Surat',
    'Graduates; Job Seekers',
    'Agency Placement',
    'Graduation / 12th',
    '100% Agency Internship Included',
    'Placement Registry',
    'NSDC Co-Branded Certificate',
    'READY WITH LIMITATIONS',
    'true',
    '1',
    'Main career track.',
  ],
  [
    'PROG-ADM-05',
    'AI Integrated Advanced Digital Marketing Program',
    'Certification Program',
    '5 Months',
    'Classroom / Hybrid',
    'Ahmedabad; Surat; Mumbai Online',
    'Working Professionals',
    'Skill Upgrade',
    'None',
    'Optional',
    'Skill Support',
    'ASDM Certificate',
    'READY WITH LIMITATIONS',
    'true',
    '2',
    'AI accelerated program.',
  ],
  [
    'PROG-ECO-03',
    'E-Commerce Marketing Course',
    'Certification Program',
    '3 Months',
    'Classroom / Online',
    'Ahmedabad; Surat',
    'Entrepreneurs; Shopify store owners',
    'Store Launch',
    'None',
    'None',
    'Business Support',
    'ASDM Certificate',
    'READY WITH LIMITATIONS',
    'true',
    '3',
    'Shopify focus.',
  ],
]
  .map((r) => r.map(escapeCSV).join(','))
  .join('\n');

// 6. CTA-HIERARCHY.md
const ctaHierarchyContent = `# CTA & Conversion Hierarchy (CTA-HIERARCHY.md)

This document establishes the user-readiness levels, page locations, and layout treatments for all call-to-actions.

---

## 🧭 Conversion Levels

### 1. Primary Conversion (High-Commitment)
* **CTAs**: "Book Free Demo Class", "Schedule Counselling Session".
* **User Readiness**: Ready to visit campus or schedule a call.
* **Ideal Page Location**: Hero section right block, campus guides, page footer form.
* **Required Trust Nearby**: NSDC accreditation badge, Star ratings, verified student count.
* **Expected Fields**: Full Name, Mobile Number, Select Center (Ahmedabad HO, Naroda, Surat), Select Batch Timing.
* **Mobile Treatment**: Sticky bottom CTA button ("Book Demo") triggering full-screen overlay modal.
* **Desktop Treatment**: Inline form panel or popup overlay modal.
* **Tracking Requirement**: Custom event tracking on form submission.
* **Potential Friction**: OTP validation requirements (to be tested for dropoffs).
* **Compliance Consideration**: Compliance checks to avoid pre-checked marketing newsletter boxes.

### 2. Secondary Conversion (Medium-Commitment)
* **CTAs**: "Download Syllabus", "View Batch Schedules".
* **User Readiness**: Researching modules and timeline fit.
* **Ideal Page Location**: Course details header, program switcher cards.
* **Required Trust Nearby**: Tool logos list.
* **Expected Fields**: Email Address, Mobile Number (short form).
* **Mobile Treatment**: Sticky top bar CTA ("Download Syllabus").
* **Desktop Treatment**: Floating header CTA.

### 3. Lower-Commitment Actions (Discovery)
* **CTAs**: "Watch Student Story", "View Student Projects", "Explore Campuses".
* **User Readiness**: Exploring credibility.
* **Ideal Page Location**: Portfolio grids, testimonial rows.
* **Mobile Treatment**: Horizontal card swipes.
* **Desktop Treatment**: Hover elements.
`;

// 7. PROOF-ARCHITECTURE.md
const proofArchitectureContent = `# Proof Architecture (PROOF-ARCHITECTURE.md)

This document maps various social proof elements to specific user anxieties and page locations.

---

## 🏛️ Proof Mappings

### 1. Student Project Portfolio
* **Anxiety Addressed**: "Will I get real, practical practice?"
* **Evidence Requirement**: Verified screenshots of student Shopify builds and local SEO analytics.
* **Current Availability**: Mapped under student-work folder (requires QA approval).
* **Verification Status**: Candidate assets pending admin sign-off.
* **Homepage Role**: Central grid below program switcher.
* **Course-Page Role**: Detail section showing specific deliverables matching the course (e.g. Shopify mock for E-commerce course).
* **CTA Proximity Hypothesis**: Positioned immediately next to the primary form to reduce form abandonment.
* **Compliance Risk**: Minimal. Ensure student details are cleared.

### 2. Placement Success Stories
* **Anxiety Addressed**: "Will this help my career/get me a job?"
* **Evidence Requirement**: Verified student name, course completed, and company placed.
* **Current Availability**: Program registries (7,000+ placements).
* **Verification Status**: Locked.
* **Homepage Role**: Recruiter slider and success stories grid.
* **Course-Page Role**: Salary partner indicators.
* **CTA Proximity Hypothesis**: Placed immediately below lead gateways.
* **Compliance Risk**: Must formally obtain student consent.

### 3. NSDC / Skill India Accreditation
* **Anxiety Addressed**: "Is this institute recognized and credible?"
* **Evidence Requirement**: Signed government partnership logo.
* **Current Availability**: Available under public/assets/skill-india/.
* **Verification Status**: Confirmed.
* **Homepage Role**: Header accreditation ribbon & hero block support.
* **Course-Page Role**: Co-branded certification section.
* **CTA Proximity Hypothesis**: Positioned adjacent to form submit action.
* **Compliance Risk**: Institutional use must follow exact brand usage guidelines.
`;

// 8. HOMEPAGE-PURPOSE.md
const homepagePurposeContent = `# Homepage Primary Purpose (HOMEPAGE-PURPOSE.md)

This document establishes the strategic, business, and SEO parameters of the redesigned homepage.

---

## 🎯 Homepage Strategic Parameters

* **Homepage Primary Audience**: College graduates and career switchers looking for offline digital marketing courses.
* **Homepage Primary Search Intent**: Local commercial intent (e.g., \`digital marketing course in ahmedabad\`, \`digital marketing training in surat\`).
* **Homepage Primary Business Goal**: Capture qualified local counselling leads and drive branch visits.
* **Homepage Primary Conversion**: Demo class registrations and campus visit requests.
* **Homepage Secondary Goals**: Program path routing, trust building, and brand positioning presentation.
* **Ahmedabad Keyword Responsibility**: Primary anchor. The homepage must maintain primary responsibility for the main Ahmedabad keyword, linking to the dedicated \`/campuses/ahmedabad\` sub-page for localized landmark and maps detail.
* **Relationship with Dedicated Ahmedabad Pages**: The homepage represents the primary commercial hub, while \`/campuses/ahmedabad\` provides the unique localized batched schedules and map navigation directions to avoid keyword overlap.
* **Unresolved SEO Questions**: Google Search Console historical traffic and landing page conversion baseline statistics require stakeholder access to configure final redirect hierarchies.
`;

// 9. HOMEPAGE-ARCHITECTURE.md
const homepageArchitectureContent = `# Homepage Architecture (HOMEPAGE-ARCHITECTURE.md)

This document details the recommended and alternate section sequences for the redesigned homepage.

---

## 🗺️ Recommended Sequence (Journey Hypothesis)

### Section 1: Header & Navigation
* **Sequence**: 1
* **Purpose**: Page navigation, path discovery.
* **User Question**: "How do I explore this site?"
* **Content**: Logo, dropdown courses menu, call button.
* **Accessibility**: Screen reader skip link enabled.
* **Dependency**: Menu taxonomy.

### Section 2: Hero Section
* **Sequence**: 2
* **Purpose**: Primary value proposition and path discovery.
* **User Question**: "What is this institute, and where can I study?"
* **Content**: Tagline H1, course format switch links, NSDC badges.
* **CTA Role**: Book Free Demo.
* **SEO Role**: Primary keyword anchor.
* **Mobile Behaviour**: Stack layout.

### Section 3: Trust Ribbon (Recruiter Logos)
* **Sequence**: 3
* **Purpose**: Establish immediate corporate trust.
* **User Question**: "Is this a reputable business?"
* **Content**: Muted monochrome partner logos.
* **Asset**: SVGs.
* **Mobile Behaviour**: Horizontal swipe slider.

### Section 4: Program Switcher Grid
* **Sequence**: 4
* **Purpose**: Path routing to course detail sub-pages.
* **User Question**: "What tracks can I study?"
* **Content**: Segmented toggles, program summaries (duration, mode, outcome).
* **CTA**: View Details.
* **SEO Role**: Site architecture linking.
* **Originality Safeguard**: Muted borders. No diagonal grids.

### Section 5: Student Project Showcase (Practical Proof)
* **Sequence**: 5
* **Purpose**: Validate live campaign budget claims.
* **User Question**: "What can I actually build?"
* **Content**: Screenshots of student campaign dashboards and Shopify sites.
* **Originality Safeguard**: Simple browser bounds mock.

### Section 6: Placement Success stories
* **Sequence**: 6
* **Purpose**: Social proof validation.
* **User Question**: "Who hires from ASDM?"
* **Content**: Outcome cards (student name, course, company).
* **Asset**: Portraits (consent required).

### Section 7: Campus Experience (Center Switcher)
* **Sequence**: 7
* **Purpose**: Local trust and batch discovery.
* **User Question**: "Where are the physical classrooms?"
* **Content**: Map switchers for Ahmedabad and Surat.
* **Mobile Behaviour**: Stack addresses vertically.

### Section 8: FAQ Accordions
* **Sequence**: 8
* **Purpose**: Resolve final friction queries.
* **User Question**: "What about timings, fees, eligibility?"
* **Content**: Accordions.
* **SEO Role**: FAQ schema injection.

### Section 9: Final Conversion CTA
* **Sequence**: 9
* **Purpose**: Lead capture.
* **User Question**: "How do I start?"
* **Content**: Short form: Name, Email, Phone, Center, Batch.
* **Mobile Behaviour**: Full screen trigger overlay modal.

---

## 🗺️ Alternate Sequence (Trust-First Journey Hypothesis)
1. Header & Navigation
2. Hero Section
3. Trust Ribbon (Recruiter Logos)
4. Placement Success stories (Shifted up to validate placements immediately)
5. Program Switcher Grid
6. Student Project Showcase
7. Campus Experience Switcher
8. FAQ Accordions
9. Final Conversion CTA
10. Footer
`;

// 10. HOMEPAGE-CONTENT-BUDGET.md
const homepageContentBudgetContent = `# Homepage Content Budget (HOMEPAGE-CONTENT-BUDGET.md)

This document establishes the content density guidelines and limits for the redesigned homepage.

---

## 📊 Content Limits & Governance

* **Primary Navigation Header Items**: Maximum 5 links (Home, Courses, Placements, Campuses, Contact). *Reason: Minimize header cognitive load.*
* **Hero Slogans/Messages**: Maximum 1 main H1 and 1 supporting sub-header. *Reason: Apple-inspired typographic restraint.*
* **Hero CTAs**: Maximum 2 buttons (one primary Book Demo, one secondary Explore). *Reason: Avoid conflicting conversion paths.*
* **Top-Level Program Cards**: Maximum 3 featured course cards. *Reason: Focus on core curriculum tracks.*
* **Primary Statistics**: Maximum 4 metric callouts. *Reason: Visual breathing room.*
* **Placement Stories**: Maximum 6 featured outcome profiles. *Reason: Prevent scroll fatigue on social proof.*
* **Student Project Screenshots**: Maximum 3 portfolio displays. *Reason: Keep page payload under budget limits.*
* **Trainer Profiles**: Maximum 3 featured trainer cards. *Reason: Highlight leading instructors without bloat.*
* **Accreditation Awards**: Maximum 2 government accreditations (Skill India, NSDC). *Reason: Focus on high-value trust anchors.*
* **FAQ Items**: Maximum 6 collapsible accordion rows. *Reason: Direct users to full FAQ pages for long lists.*
* **Paragraph Length**: Maximum 3 lines per paragraph (approx. 45-60 words). *Reason: Mobile legibility.*
* **Heading Width**: Maximum 12 words. *Reason: Prevent wrapping lines on portrait screens.*
* **Competing Card Styles**: Maximum 2 distinct card shapes. *Reason: Establish uniform visual system.*
`;

// 11. MOBILE-EXPERIENCE.md
const mobileExperienceContent = `# Mobile Experience Strategy (MOBILE-EXPERIENCE.md)

This document details mobile-first usability parameters, navigation patterns, and performance constraints.

---

## 📱 Mobile UX Guidelines

* **Header Behaviour**: Sticky minimal layout containing the brand logo, a hamburger menu, and a phone call icon.
* **Navigation Behaviour**: Hamburger menu triggers a full-width overlay modal containing generous tap targets (minimum height 48px).
* **Hero Priority**: Text heading stacked above a static student group graphic. Ambient video loops are deactivated to save mobile bandwidth.
* **CTA Persistence**: Simple floating bottom button ("Book Demo") that animates cleanly when scrolled past the hero section.
* **Program Comparison**: Avoid side-by-side tables. Convert comparisons into collapsible vertical parameters.
* **Card Stacking**: Multi-column desktop grids collapse into single-column vertical stacks.
* **Accordions**: Enforce a minimum touch-target height of 48px for syllabus and FAQ headers.
* **Media Loading**: Native lazy loading active on all below-fold images. Specify dimensions in HTML to prevent Cumulative Layout Shift (CLS).
* **Video Behaviour**: Disable autoplay. Defer loading of video modal containers.
* **Form Behaviour**: Use standard input elements with labels stacked vertically. Avoid multi-step forms on mobile.
* **Horizontal Scroll**: Horizontal overflow scroll is allowed *only* on touch-swipe card lists (such as the recruiter logo ribbon or student portfolio displays), indicated by a subtle gradient fade on the right margin.
* **Motion Reduction**: Respect prefers-reduced-motion media queries, deactivating scale zooms and entrance transitions.
* **Performance Constraints**: Target total mobile page weight under 300KB (compressed).
`;

// 12. HOMEPAGE-DEPENDENCIES.csv
const homepageDependenciesCSV = [
  [
    'section_id',
    'section_name',
    'content_required',
    'content_source',
    'factual_verification_required',
    'local_asset_required',
    'asset_available',
    'missing_asset',
    'owner_action_required',
    'can_design_with_placeholder_structure',
    'can_publish_without_dependency',
    'status',
    'notes',
  ],
  [
    'SEC-HERO',
    'Hero Section',
    'Course tracks checklist',
    'Program catalogs',
    'true',
    'Classroom candid photo',
    'false',
    'High-res cohort image',
    'true',
    'true',
    'false',
    'ASSET BLOCKED',
    'Requires photography shoot.',
  ],
  [
    'SEC-TRUST',
    'Trust Ribbon',
    'Verified recruiter company names',
    'Placement registry',
    'true',
    'Hiring company SVGs',
    'true',
    'None',
    'false',
    'true',
    'true',
    'READY WITH LIMITATIONS',
    'Muted partner SVGs verified.',
  ],
  [
    'SEC-SWITCH',
    'Program switcher',
    'Course summaries & durations',
    'Course details',
    'true',
    'Course badge SVGs',
    'true',
    'None',
    'false',
    'true',
    'true',
    'READY WITH LIMITATIONS',
    'Taxonomy mapped.',
  ],
  [
    'SEC-PROJECT',
    'Student showcase',
    'Campaign briefs & Shopify links',
    'Student portfolios',
    'true',
    'Browser screenshots',
    'false',
    'Student work images',
    'true',
    'true',
    'false',
    'CONTENT BLOCKED',
    'Requires portfolio approvals.',
  ],
  [
    'SEC-OUTCOME',
    'Success stories',
    'Placed student profiles & consent',
    'Placement registry',
    'true',
    'Student portrait photos',
    'false',
    'Student face avatars',
    'true',
    'true',
    'false',
    'CLAIMS BLOCKED',
    'Requires owner consent log.',
  ],
  [
    'SEC-CAMPUS',
    'Campus switcher',
    'Classroom capacities & coordinates',
    'Center manager directory',
    'true',
    'Classroom photos',
    'false',
    'Surat & Naroda lab photos',
    'true',
    'true',
    'false',
    'ASSET BLOCKED',
    'Requires campus shoots.',
  ],
  [
    'SEC-FAQ',
    'FAQs',
    'TIMING & FEES FAQ blocks',
    'General FAQs',
    'true',
    'None',
    'true',
    'None',
    'false',
    'true',
    'true',
    'READY WITH LIMITATIONS',
    'FAQ text verified.',
  ],
]
  .map((r) => r.map(escapeCSV).join(','))
  .join('\n');

// 13. HOMEPAGE-EXCLUSIONS.md
const homepageExclusionsContent = `# Homepage Exclusion Register (HOMEPAGE-EXCLUSIONS.md)

This register logs elements, claims, visual styles, and copy blocks that **must not appear** on the redesigned ASDM homepage to protect credibility and comply with advertising standards.

---

## 🚫 Prohibited Homepage Elements

### 1. Unverified Claims & Statistics
* **Excluded**: "100% Placement Guarantee". *Reason: Compliance risk under ASCI guidelines.*
* **Excluded**: Placements counts exceeding 7,000+ unless certified registries are provided. *Reason: Mismatch with internal audit data.*
* **Excluded**: Slogans claiming "India's Best Institute" or "Ahmedabad's No. 1 Academy". *Reason: Non-verifiable comparative claims.*

### 2. Low-Performance Visuals & Interactions
* **Excluded**: Auto-playing video backgrounds with sound enabled. *Reason: Visual noise and mobile speed penalty.*
* **Excluded**: Endless scrolling recruiter marquees containing dozens of heavy colored logos. *Reason: Causes layout shift (CLS) and page weight bloat.*
* **Excluded**: Fake countdown timers or artificial seat counters. *Reason: Deceptive conversion tricks.*

### 3. Visual & Code Duplications
* **Excluded**: Visual diagonal grids or diagonal layout shapes copied directly from Stripe. *Reason: Originality safeguard (ADR-006).*
* **Excluded**: Western corporate stock photos displaying models in clean boardrooms. *Reason: Fails Ahmedabad local authenticity rules.*
* **Excluded**: Multiple competing primary CTA buttons in the hero section. *Reason: Prevents split-conversion focus.*
`;

// 14. EXPERIENCE-DECISIONS.md
const experienceDecisionsContent = `# Experience Decision Log (EXPERIENCE-DECISIONS.md)

This log tracks architectural and design strategy decisions for the ASDM website redesign.

---

## 🧾 Decision Register

### DEC-001: Establish Program Switcher Component
* **Decision**: Implement an interactive, tab-based switcher component on the homepage to segment Career Programs from Certification Skills.
* **Status**: \`ACCEPTED FOR DESIGN SYSTEM\`
* **Evidence**: IIDE interactive selector tabs (\`EVI-IIDE-HOME\`).
* **Business Rationale**: Prevents choice paralysis and directs graduates and professionals to appropriate paths.
* **User Rationale**: Simplifies comparison of duration and outcomes.
* **SEO Implication**: Provides clean internal architecture links to Course Detail pages.
* **Performance Implication**: Pure CSS switcher layout reduces JS dependencies.
* **Accessibility Implication**: Enforce standard ARIA tab controls.
* **Risk**: Low.
* **Reversal Condition**: Low engagement tracking.
* **Owner Approval**: Required.

### DEC-002: Distinguish Ahmedabad HO and Naroda Routes
* **Decision**: Create separate, dedicated contact and location landing sub-pages for the Ahmedabad HO and Naroda branches rather than merging them under a single Ahmedabad path.
* **Status**: \`ACCEPTED FOR DESIGN SYSTEM\`
* **Evidence**: TOPS branch targeting structures (\`EVI-TOPS-AMD\`).
* **Business Rationale**: Naroda has a distinct student draw; separating them improves localized conversions.
* **User Rationale**: Provides clear landmarks and transport instructions for each campus.
* **SEO Implication**: Target highly specific local search intent (e.g. \`digital marketing course Naroda\`).
* **Performance Implication**: None.
* **Accessibility Implication**: Independent physical map overlays.
* **Risk**: Medium (thin content risk if batch details are identical).
* **Reversal Condition**: Consolidated search volumes.
* **Owner Approval**: Required.

### DEC-003: Mumbai Online Campaign Disclosure
* **Decision**: Explicitly label all Mumbai target marketing copy and campaigns as "100% Live Online Campus" to prevent misleading local users about a physical classroom branch.
* **Status**: \`PROPOSED\`
* **Evidence**: ASDM business coordinates audit.
* **Business Rationale**: Prevents student dropoffs and legal compliance issues.
* **User Rationale**: Clarifies study commitments before registration.
* **SEO Implication**: Align targets to online course keywords.
* **Risk**: Low.
* **Owner Approval**: Required.
`;

// 15. DESIGN-SYSTEM-INPUT-BRIEF.md
const designSystemInputBriefContent = `# Design System Input Brief (DESIGN-SYSTEM-INPUT-BRIEF.md)

This brief outlines the layout, density, and interactive requirements the design system must support. It does not define final visual styling tokens.

---

## 🎨 Design System Requirements

### 1. Brand Perception & Visual Tone
* **Tone**: Professional, high-precision, clean, educational, trustworthy.
* **Whitespace**: Generous vertical paddings (section spacers between 96px and 128px) to establish a premium feel.
* **Contrast**: High contrast ratios on all text elements (minimum 4.5:1 for body copy).

### 2. Component Layout Frameworks
* **Max-Width Grid**: A consistent 1200px container width for all main content columns.
* **Interactive switcher components**: Support tab-selectors that switch active layout blocks without reloading.
* **Curriculum Accordions**: Support keyboard-accessible expand/collapse panels with touch targets of at least 48x48px.
* **Student Work Showcase Cards**: Layouts displaying screenshots with a clear border radius and subtitle tags.
* **Accreditation Badges Row**: Horizontal layouts that align small, unified monochrome SVG government logos.
* **Location Map Switchers**: Tabbed layouts that embed maps alongside campus contact details.

### 3. Mobile & Accessibility Constraints
* **Menu**: Hamburger drawer containing accordion navigation links.
* **Touch Targets**: Minimum 48px heights on all interactive buttons.
* **Motion restrictions**: Core variables must support immediate reduced-motion overrides.
* **Video**: Defer loading of video modal containers.
`;

// 16. ASDM-EXPERIENCE-STRATEGY.md
const asdmExperienceStrategyContent = `# ASDM Experience Strategy (ASDM-EXPERIENCE-STRATEGY.md)

This document establishes the unified experience strategy for the ASDM website redesign, converting verified audits, positioning territories, and program comparison frameworks into a locked roadmap.

---

## 📈 Roadmap & Executive Summary

* **Executive Summary**: The redesigned ASDM website must move away from generic marketing declarations and present a credible, premium educational hub. Strategy is prioritized over visual decoration. Live budget audits, verified student screenshot portfolios, and separate branch routes will anchor local Ahmedabad and Surat trust.
* **Recommendation**: \`READY WITH STRATEGIC LIMITATIONS\`
* **Strategic Limitation**: visual design execution can proceed, provided unverified placement numbers and student testimonials remain locked pending owner document logs.

---

## 🗂️ Strategy Frameworks Index

1. **Audience Matrix**: graduates and professionals are the primary priority. Detailed under [AUDIENCE-PRIORITIES.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/AUDIENCE-PRIORITIES.md).
2. **Website Jobs**: help visitors select paths and capture physical enquiries. Detailed under [WEBSITE-JOBS.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/WEBSITE-JOBS.md).
3. **Positioning Territories**: The Practical Live-Budget Academy is the recommended territory. Detailed under [POSITIONING-FRAMEWORK.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/POSITIONING-FRAMEWORK.md).
4. **Program Taxonomy**: split Career Programs from Certification Skills. Mapped under [PROGRAM-TAXONOMY.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/PROGRAM-TAXONOMY.md) and [PROGRAM-COMPARISON-MODEL.csv](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/PROGRAM-COMPARISON-MODEL.csv).
5. **CTA Hierarchy**: "Book Free Demo Class" is the primary high-commitment conversion. Mapped under [CTA-HIERARCHY.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/CTA-HIERARCHY.md).
6. **Proof Strategy**: student work showcase and NSDC badges sit near forms. Mapped under [PROOF-ARCHITECTURE.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/PROOF-ARCHITECTURE.md).
7. **Homepage Purpose & Sequence**: primary keyword anchor for Ahmedabad/Surat local intent. Mapped under [HOMEPAGE-PURPOSE.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/HOMEPAGE-PURPOSE.md) and [HOMEPAGE-ARCHITECTURE.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/HOMEPAGE-ARCHITECTURE.md).
8. **Mobile Strategy**: sticky bottom CTA, disable video autoplay, and enforce 48px touch targets. Detailed under [MOBILE-EXPERIENCE.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/MOBILE-EXPERIENCE.md).
9. **Exclusions Registry**: banned unverified claims and autoplay animations. Detailed under [HOMEPAGE-EXCLUSIONS.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/HOMEPAGE-EXCLUSIONS.md).
10. **Experience Decision Registry**: logs low-risk accepted decisions. Detailed under [EXPERIENCE-DECISIONS.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/EXPERIENCE-DECISIONS.md).
11. **Design System Brief**: outlines density and layout needs. Detailed under [DESIGN-SYSTEM-INPUT-BRIEF.md](file:///C:/xampp/htdocs/asdm-new-web/docs/strategy/DESIGN-SYSTEM-INPUT-BRIEF.md).

---

## 🔒 Content & Asset Blockers

Design-system token setup and page shell planning can proceed. However, visual copywriting and coding must not proceed to homepage execution until:
1. **Hero Classroom Candid Cohort Photo** is shot/delivered (Asset Blocked).
2. **Ahmedabad HO & Surat campus interior photos** are delivered (Asset Blocked).
3. **Student screenshot portfolio links** are verified (Content Blocked).
4. **Alumni placement outcome consent** is logged (Claims Blocked).
`;

function generate() {
  console.log('Generating Phase 5 Strategy files...');

  fs.writeFileSync(
    path.join(outputDir, 'AUDIENCE-PRIORITIES.md'),
    audiencePrioritiesContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'WEBSITE-JOBS.md'),
    websiteJobsContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'POSITIONING-FRAMEWORK.md'),
    positioningFrameworkContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'PROGRAM-TAXONOMY.md'),
    programTaxonomyContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'PROGRAM-COMPARISON-MODEL.csv'),
    programComparisonCSV,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'CTA-HIERARCHY.md'),
    ctaHierarchyContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'PROOF-ARCHITECTURE.md'),
    proofArchitectureContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'HOMEPAGE-PURPOSE.md'),
    homepagePurposeContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'HOMEPAGE-ARCHITECTURE.md'),
    homepageArchitectureContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'HOMEPAGE-CONTENT-BUDGET.md'),
    homepageContentBudgetContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'MOBILE-EXPERIENCE.md'),
    mobileExperienceContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'HOMEPAGE-DEPENDENCIES.csv'),
    homepageDependenciesCSV,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'HOMEPAGE-EXCLUSIONS.md'),
    homepageExclusionsContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'EXPERIENCE-DECISIONS.md'),
    experienceDecisionsContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'DESIGN-SYSTEM-INPUT-BRIEF.md'),
    designSystemInputBriefContent,
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, 'ASDM-EXPERIENCE-STRATEGY.md'),
    asdmExperienceStrategyContent,
    'utf8'
  );

  console.log('Successfully generated all 16 experience strategy files!');
}

generate();
