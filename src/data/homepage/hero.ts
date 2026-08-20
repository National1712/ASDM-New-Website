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
  visualAsset: string;
  visualAlt: string;
  assetStatus: HeroAssetStatus;
  floatingCards: {
    label: string;
    detail: string;
    icon: 'batches' | 'partners' | 'outcomes';
  }[];
  tools: {
    name: string;
    icon: 'google-ads' | 'meta-ads' | 'chatgpt' | 'ga4' | 'seo' | 'canva';
  }[];
};

export const homepageHero: HomepageHeroContent = {
  eyebrow: {
    highlight: 'DIGITAL MARKETING + AI',
    rest: 'AHMEDABAD | SINCE 2014',
  },
  heading: {
    main: 'Digital Marketing Course in Ahmedabad',
    accent: 'Built for the AI Era.',
  },
  valueStatement: 'Learn. Build. Perform. Get Industry-Ready.',
  description:
    'Master Digital Marketing through live classroom training, real campaigns, AI-powered workflows and practical projects - guided by specialists across SEO, Google Ads, Meta Ads, Content, Analytics and more.',
  primaryCTA: {
    label: 'Explore Courses',
    href: '/courses',
  },
  secondaryCTA: {
    label: 'Book Free Counselling',
    href: '/contact',
  },
  trustRow: [
    {
      value: 'Since 2014',
      label: 'Digital Marketing Education',
    },
    {
      value: 'Google + Meta',
      label: 'Certification Preparation',
    },
    {
      value: 'NSDC + Skill India',
      label: 'Recognised Training Ecosystem',
    },
  ],
  visualAsset: '/assets/homepage/hero/student-hero.jpg',
  visualAlt: 'ASDM student learning digital marketing with a laptop',
  assetStatus: 'APPROVED_LOCAL',
  floatingCards: [
    {
      label: 'Batches',
      detail: 'Classroom learning cohorts',
      icon: 'batches',
    },
    {
      label: 'Partner Network',
      detail: 'Placement support ecosystem',
      icon: 'partners',
    },
    {
      label: 'Documented Outcomes',
      detail: 'Career records pending final audit',
      icon: 'outcomes',
    },
  ],
  tools: [
    { name: 'Google Ads', icon: 'google-ads' },
    { name: 'Meta Ads', icon: 'meta-ads' },
    { name: 'ChatGPT', icon: 'chatgpt' },
    { name: 'GA4', icon: 'ga4' },
    { name: 'SEO', icon: 'seo' },
    { name: 'Canva', icon: 'canva' },
  ],
};
