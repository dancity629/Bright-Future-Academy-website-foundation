import { Outlet, useLocation } from 'react-router-dom'
import { m } from 'motion/react'
import AnnouncementBar from './AnnouncementBar'
import Header from './Header'
import Footer from './Footer'
import ScrollManager from './ScrollManager'
import ScrollProgress from './ScrollProgress'
import { EASE_OUT } from '../../utils/motion'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollManager />
      <ScrollProgress />
      <AnnouncementBar />
      <Header />
      <main id="main" tabIndex={-1}>
        {/* Re-keyed per route so each page eases in on navigation. */}
        <m.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: EASE_OUT }}>
          <Outlet />
        </m.div>
      </main>
      <Footer />
    </>
  )
}
