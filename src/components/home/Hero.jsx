import { ArrowRight, Award, CalendarDays } from 'lucide-react'
import Button from '../ui/Button'
import SmartImage from '../ui/SmartImage'
import { images } from '../../data/images'
import { school } from '../../data/school'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Nursery · Primary · Secondary in Lekki, Lagos</p>
          <h1 id="hero-title">
            Raising confident learners and <em>future leaders</em>
          </h1>
          <p className="hero__lead">
            At {school.name}, every child is known, challenged and cared for. We combine strong academics, rich
            co-curricular life and timeless values to prepare young Nigerians for a bright future.
          </p>
          <div className="hero__actions">
            <Button to="/admissions" size="lg" icon={ArrowRight}>
              Apply for Admission
            </Button>
            <Button to="/academics" variant="outline" size="lg">
              Explore Academics
            </Button>
          </div>
          <ul className="hero__trust" aria-label="At a glance">
            <li>
              <strong>Est. {school.founded}</strong>
              <span>Trusted by Lagos families</span>
            </li>
            <li>
              <strong>Ages 2–17</strong>
              <span>One continuous journey</span>
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__image-frame">
            <SmartImage
              src={images.hero}
              alt="Pupils learning together in a bright classroom"
              fallbackLabel={school.name}
              eager
            />
          </div>
          <div className="hero__badge hero__badge--top">
            <span className="hero__badge-icon">
              <Award size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>98% credit pass</strong>
              <small>WAEC 2026 (demo figure)</small>
            </span>
          </div>
          <div className="hero__badge hero__badge--bottom">
            <span className="hero__badge-icon hero__badge-icon--gold">
              <CalendarDays size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>Entrance exam</strong>
              <small>Sat, 23 January 2027</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
