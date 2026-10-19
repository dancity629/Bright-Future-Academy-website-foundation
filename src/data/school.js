// DEMO CONTENT: Bright Future Academy is a fictional school.
// Every name, address, phone number and statistic below is sample data
// and must be replaced with the client's real details before launch.

export const school = {
  name: 'Bright Future Academy',
  shortName: 'BFA',
  motto: 'Excellence · Integrity · Service',
  founded: 2008,
  summary:
    'A co-educational day school in Lekki, Lagos offering nursery, primary and secondary education built on the Nigerian curriculum, enriched with global best practice.',
  contact: {
    address: ['14 Unity Crescent, Off Admiralty Way', 'Lekki Phase 1, Lagos State, Nigeria'],
    phones: ['+234 801 234 5678', '+234 809 876 5432'],
    email: 'info@brightfutureacademy.example',
    admissionsEmail: 'admissions@brightfutureacademy.example',
    hours: 'Monday to Friday, 7:30am to 4:00pm',
  },
  socials: [
    { label: 'Facebook', network: 'facebook', href: 'https://facebook.com/' },
    { label: 'Instagram', network: 'instagram', href: 'https://instagram.com/' },
    { label: 'YouTube', network: 'youtube', href: 'https://youtube.com/' },
    { label: 'X (Twitter)', network: 'x', href: 'https://x.com/' },
  ],
}

export const announcement = {
  text: 'Admissions are open for the 2027/2028 session. First entrance examination: Saturday, 23 January 2027.',
  linkLabel: 'Apply now',
  to: '/admissions',
}

export const stats = [
  { value: '18', label: 'Years of excellence' },
  { value: '1,200+', label: 'Happy learners' },
  { value: '85', label: 'Qualified teachers' },
  { value: '98%', label: 'WAEC credit pass rate' },
]
