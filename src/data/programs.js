import { images } from './images'

// DEMO CONTENT: programme details are sample data.
export const programs = [
  {
    id: 'nursery',
    title: 'Nursery School',
    ages: 'Ages 2 to 5',
    classes: 'Creche, Pre-Nursery, Nursery 1 and 2',
    summary:
      'A warm, play-based start where little ones build early literacy, numeracy and social confidence through Montessori-inspired learning.',
    highlights: ['Phonics and early reading', 'Sensory and outdoor play', 'Small classes with two carers'],
    image: images.nursery,
    icon: 'Blocks',
  },
  {
    id: 'primary',
    title: 'Primary School',
    ages: 'Ages 6 to 11',
    classes: 'Primary 1 to 6',
    summary:
      'A rich Nigerian and British blended curriculum that develops strong foundations in English, Mathematics, Science and the creative arts.',
    highlights: ['Common Entrance preparation', 'Coding and ICT from Primary 1', 'Music, French and Yoruba'],
    image: images.primary,
    icon: 'BookOpen',
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    ages: 'Ages 11 to 17',
    classes: 'JSS 1 to SSS 3',
    summary:
      'Rigorous academics, modern laboratories and leadership opportunities that prepare students for WAEC, NECO, JAMB and international study.',
    highlights: ['Science, Arts and Commercial tracks', 'WAEC, NECO and JAMB preparation', 'Career and university guidance'],
    image: images.secondary,
    icon: 'GraduationCap',
  },
]
