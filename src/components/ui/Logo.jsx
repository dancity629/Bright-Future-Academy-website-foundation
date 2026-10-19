import { Link } from 'react-router-dom'
import { school } from '../../data/school'
import './Logo.css'

export function Crest({ size = 44 }) {
  return (
    <svg className="crest" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 2 43 9v14c0 11.5-8 19.6-19 23C13 42.6 5 34.5 5 23V9l19-7Z" fill="#164E36" />
      <path d="M24 5.5 40 11.4V23c0 9.6-6.6 16.5-16 19.6C14.6 39.5 8 32.6 8 23V11.4l16-5.9Z" fill="none" stroke="#DDAA42" strokeWidth="1.5" />
      <path d="M24 13.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5 1.6-3.3Z" fill="#DDAA42" />
      <path d="M13 27.5c3.8-1.6 7.5-1.3 11 1 3.5-2.3 7.2-2.6 11-1v8c-3.8-1.6-7.5-1.3-11 1-3.5-2.3-7.2-2.6-11-1v-8Z" fill="#F8F7F0" />
      <path d="M24 28.5v8" stroke="#164E36" strokeWidth="1.2" />
    </svg>
  )
}

export default function Logo({ inverse = false }) {
  return (
    <Link to="/" className={`logo ${inverse ? 'logo--inverse' : ''}`} aria-label={`${school.name}, home`}>
      <Crest />
      <span className="logo__text">
        <span className="logo__name">{school.name}</span>
        <span className="logo__motto">{school.motto}</span>
      </span>
    </Link>
  )
}
