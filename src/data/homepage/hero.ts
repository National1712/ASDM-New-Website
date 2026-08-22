export type HeroCTA = {
  label: string;
  href: string;
};

export type HeroAssetStatus =
  'APPROVED_LOCAL' | 'TEMPORARY_LOCAL' | 'ASSET_REQUIRED';

export type HomepageHeroContent = {
  eyebrow: {
    highlight: string;
    rest: string;
  };
  heading: {
    main: string;
    accent: string;
  };
  valueStatement: string;
  description: string;
  primaryCTA: HeroCTA;
  secondaryCTA: HeroCTA;
  trustRow: {
    value: string;
    label: string;
  }[];
  proofPoints: string[];
  visualAsset: string;
  visualAlt: string;
  assetStatus: HeroAssetStatus;
  floatingCards: {
    metric: string;
    label: string;
    detail: string;
    icon: 'students' | 'partners' | 'package' | 'batches' | 'calendar';
  }[];
  tools: {
    name: string;
    icon: 'google-ads' | 'meta-ads' | 'seo' | 'analytics' | 'chatgpt';
  }[];
};

export const homepageHero: HomepageHeroContent = {
  eyebrow: {
    highlight: 'DIGITAL MARKETING + AI',
    rest: 'AHMEDABAD · SINCE 2014',
  },
  heading: {
    main: 'Digital Marketing',
    accent: 'Course in Ahmedabad',
  },
  valueStatement:
    'Ahmedabad classroom training with live projects and placement support.',
  description:
    'Learn digital marketing in Ahmedabad through guided campaigns, AI-powered workflows, SEO, Social Media, Google Ads, Performance Marketing and real project execution.',
  primaryCTA: {
    label: 'Explore Courses',
    href: '/courses',
  },
  secondaryCTA: {
    label: 'Book Free Career Counselling',
    href: '/contact',
  },
  proofPoints: [
    'Classroom Training',
    'Live Projects',
    'AI-Integrated Learning',
    'Placement Support',
  ],
  trustRow: [
    {
      value: 'Trusted by Students.',
      label: 'Proven by Results.',
    },
    {
      value: '₹3–5 LPA',
      label: 'Average Package',
    },
    {
      value: '1,456+',
      label: 'Batches Conducted',
    },
    {
      value: '2,500+',
      label: 'Placement Partners',
    },
    {
      value: '25+',
      label: 'Trainers & Mentors',
    },
  ],
  visualAsset: '/assets/homepage/hero/student-hero.jpg',
  visualAlt: 'ASDM student learning digital marketing with a laptop',
  assetStatus: 'APPROVED_LOCAL',
  floatingCards: [
    {
      metric: '1,00,000+',
      label: 'Registered Students',
      detail: 'Registered Students',
      icon: 'students',
    },
    {
      metric: '2,500+',
      label: 'Placement Partners',
      detail: 'Placement Partners',
      icon: 'partners',
    },
    {
      metric: '₹1.16 Crore',
      label: 'Highest Documented Package',
      detail: 'Highest Documented Package',
      icon: 'package',
    },
    {
      metric: '1,456+',
      label: 'Batches Conducted',
      detail: 'Batches Conducted',
      icon: 'batches',
    },
    {
      metric: 'Since 2014',
      label: 'Digital Marketing Education',
      detail: 'Digital Marketing Education',
      icon: 'calendar',
    },
  ],
  tools: [
    { name: 'Google Ads', icon: 'google-ads' },
    { name: 'Meta Ads', icon: 'meta-ads' },
    { name: 'SEO', icon: 'seo' },
    { name: 'Analytics', icon: 'analytics' },
    { name: 'ChatGPT', icon: 'chatgpt' },
  ],
};
