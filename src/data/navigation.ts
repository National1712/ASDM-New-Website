export interface NavItem {
  label: string;
  href: string;
}

export interface CourseNavItem extends NavItem {
  description: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Courses', href: '/courses' },
  { label: 'About ASDM', href: '/about' },
  { label: 'Placements', href: '/placements' },
  { label: 'Contact', href: '/contact' },
];

export const courseNavigation = {
  programmes: [
    {
      label: 'Advanced Digital Marketing Program',
      href: '/courses/advanced',
      description: 'AI-integrated classroom programme',
    },
    {
      label: 'Professional Digital Marketing Course',
      href: '/courses/professional',
      description: 'Longer advanced programme track',
    },
    {
      label: 'E-Commerce Marketing Course',
      href: '/courses/ecommerce-course',
      description: 'Specialised ecommerce marketing route',
    },
  ],
  locations: [
    {
      label: 'Ahmedabad',
      href: '/courses',
      description: 'Primary classroom course hub',
    },
    {
      label: 'Surat',
      href: '/campuses/surat',
      description: 'Surat campus course route',
    },
  ],
  allCourses: {
    label: 'View All Courses',
    href: '/courses',
  },
};

export const footerNavigation = {
  programs: [
    { label: 'Program overview', href: '/courses' },
    { label: 'Course categories', href: '/courses' },
    { label: 'Batch enquiry', href: '/contact' },
  ],
  company: [
    { label: 'About ASDM', href: '/about' },
    { label: 'Student work', href: '/student-work' },
    { label: 'Campuses', href: '/campuses' },
  ],
  resources: [
    { label: 'Resources', href: '/resources' },
    { label: 'Student support', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};
