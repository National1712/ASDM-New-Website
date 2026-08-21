export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Courses', href: '/courses' },
  { label: 'Why ASDM', href: '/about' },
  { label: 'Placements', href: '/placements' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

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
