# Bright Future Academy (demo website)

A client-ready demo website for a fictional Nigerian school offering nursery,
primary and secondary education. Frontend only: there is no backend, database,
payment or authentication yet.

**All school details, people, statistics, news and contact information are
fictional sample content and must be replaced before real use.**

## Run it

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

When deploying, configure the host to serve `index.html` for all routes
(single-page app fallback) so deep links like `/academics` work on refresh.

## Stack

React 19 + Vite, React Router, Motion (animations), Lucide icons, plain CSS, self-hosted fonts
(Fraunces and Plus Jakarta Sans via Fontsource).

## Structure

```
src/
  data/            Sample content (school info, navigation, programmes, staff,
                   news, features, image URLs). Replace or swap for an API later.
  styles/          Design tokens (variables.css), base and utility styles
  components/
    layout/        Announcement bar, header/nav, footer, page layout
    ui/            Reusable pieces: Button, Logo, SmartImage, Reveal, cards
    home/          Homepage sections
  pages/           One component per route
  hooks/, utils/   Small helpers
```

## Images

Photos are loaded from Unsplash (see `src/data/images.js`). `SmartImage` shows a
branded fallback if any image fails to load. Replace these with the school's own
photography before launch. Staff cards show initials until real, consented
staff photos are added in `src/data/staff.js`.

## Phase status

- Phase 1 (done): foundation, design system, layout, navigation, homepage,
  placeholder pages for all other routes.
- Next phases: About, Academics, Staff, Admissions, News & Events, Contact,
  Student Portal preview.

## Animations

Animations use [Motion](https://motion.dev) (`motion/react`), loaded through
`LazyMotion` to keep the bundle small. Shared timings live in
`src/utils/motion.js`. `MotionConfig reducedMotion="user"` plus
`useReducedMotion` checks switch off movement for visitors who prefer reduced
motion.
