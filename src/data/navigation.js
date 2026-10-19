// Single source of truth for site routes used by the header and footer.

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Our Staff', to: '/staff' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const ctaNav = {
  admissions: { label: 'Admissions', to: '/admissions' },
  portal: { label: 'Student Portal', to: '/portal' },
}

export const footerNav = {
  explore: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Staff', to: '/staff' },
    { label: 'News & Events', to: '/news' },
    { label: 'Admissions', to: '/admissions' },
    { label: 'Student Portal', to: '/portal' },
    { label: 'Contact Us', to: '/contact' },
  ],
  academics: [
    { label: 'Nursery School', to: '/academics#nursery' },
    { label: 'Primary School', to: '/academics#primary' },
    { label: 'Secondary School', to: '/academics#secondary' },
  ],
}
