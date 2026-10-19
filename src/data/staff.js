// DEMO CONTENT: these staff members are fictional.
// Replace names, roles, bios and photos with real, consented staff details.
// `photo` is optional; cards fall back to initials when it is empty.

export const staff = [
  {
    id: 'adaeze-okonkwo',
    name: 'Mrs. Adaeze Okonkwo',
    role: 'Principal',
    department: 'Leadership',
    qualifications: 'M.Ed Educational Leadership, University of Lagos',
    bio: 'Over 20 years in school leadership, committed to academic excellence and the wellbeing of every child.',
    photo: '',
    featured: true,
  },
  {
    id: 'babatunde-adeyemi',
    name: 'Mr. Babatunde Adeyemi',
    role: 'Vice Principal, Academics',
    department: 'Secondary School',
    qualifications: 'B.Sc Physics, M.Sc Science Education',
    bio: 'Leads curriculum and examinations, and coaches the school’s award-winning science team.',
    photo: '',
    featured: true,
  },
  {
    id: 'halima-bello',
    name: 'Mrs. Halima Bello',
    role: 'Head of Primary',
    department: 'Primary School',
    qualifications: 'B.Ed Primary Education, Ahmadu Bello University',
    bio: 'Champions literacy and creative learning, and introduced coding to every primary class.',
    photo: '',
    featured: true,
  },
  {
    id: 'funmilayo-ogunleye',
    name: 'Mrs. Funmilayo Ogunleye',
    role: 'Head of Nursery',
    department: 'Nursery School',
    qualifications: 'NCE Early Childhood Care, Montessori Diploma',
    bio: 'Creates joyful, nurturing classrooms where our youngest learners grow in confidence.',
    photo: '',
    featured: true,
  },
]

export const featuredStaff = staff.filter((member) => member.featured)
