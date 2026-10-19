import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Megaphone, X } from 'lucide-react'
import { announcement } from '../../data/school'
import './AnnouncementBar.css'

const STORAGE_KEY = 'bfa-announcement-dismissed'

function wasDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === announcement.text
  } catch {
    return false
  }
}

export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(wasDismissed)

  if (hidden) return null

  const dismiss = () => {
    setHidden(true)
    try {
      sessionStorage.setItem(STORAGE_KEY, announcement.text)
    } catch {
      // Storage can be unavailable (private mode); dismissal just won't persist.
    }
  }

  return (
    <aside className="announcement" aria-label="School announcement">
      <div className="container announcement__inner">
        <Megaphone size={16} aria-hidden="true" className="announcement__icon" />
        <p className="announcement__text">
          {announcement.text}{' '}
          <Link to={announcement.to} className="announcement__link">
            {announcement.linkLabel}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </p>
        <button type="button" className="announcement__close" onClick={dismiss} aria-label="Dismiss announcement">
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </aside>
  )
}
