// DEMO CONTENT: sample news and events. Replace with real school updates.
// Dates are ISO strings so a future API can supply the same shape.

export const news = [
  {
    id: 'inter-house-sports-2026',
    title: 'Green House wins the 2026 Inter-House Sports Festival',
    category: 'Sports',
    date: '2026-10-10',
    excerpt:
      'Parents and guests filled the stands as students competed in track, field and relay events, with Green House taking the trophy.',
  },
  {
    id: 'science-fair-2026',
    title: 'SSS 2 students take first place at the Lagos Schools Science Fair',
    category: 'Achievement',
    date: '2026-09-26',
    excerpt:
      'Our team’s low-cost water purification project impressed judges and earned the top prize among 40 participating schools.',
  },
  {
    id: 'cultural-day-2026',
    title: 'Cultural Day: celebrating the richness of Nigeria',
    category: 'Event',
    date: '2026-11-13',
    excerpt:
      'Join us for food, music, dance and drama as pupils showcase cultures from across the nation. Parents are warmly invited.',
  },
]

export const latestNews = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)
