import { ArrowRight, Compass, Target } from 'lucide-react'
import Button from '../ui/Button'
import SmartImage from '../ui/SmartImage'
import Reveal from '../ui/Reveal'
import { images } from '../../data/images'
import { school } from '../../data/school'
import { CURRENT_YEAR } from '../../utils/currentYear'
import './AboutPreview.css'

export default function AboutPreview() {
  const years = CURRENT_YEAR - school.founded

  return (
    <section className="section section--white about-preview" aria-labelledby="about-title">
      <div className="container about-preview__grid">
        <Reveal className="about-preview__media">
          <div className="about-preview__main">
            <SmartImage src={images.aboutMain} alt="A teacher guiding students during a lesson" fallbackLabel="Learning together" />
          </div>
          <div className="about-preview__secondary">
            <SmartImage src={images.aboutSecondary} alt="Young pupils reading together" fallbackLabel="Joy of reading" />
          </div>
          <div className="about-preview__years">
            <strong>{years}+</strong>
            <span>years shaping young minds</span>
          </div>
        </Reveal>

        <Reveal className="about-preview__content" delay={120}>
          <p className="eyebrow">About the school</p>
          <h2 id="about-title">A caring community with high expectations</h2>
          <p className="lead">
            Founded in {school.founded}, {school.name} has grown from a small nursery of 30 children into a thriving
            school community of over 1,200 learners.
          </p>
          <p>
            We blend the Nigerian national curriculum with proven international approaches, giving every child a
            strong academic foundation alongside the creativity, character and confidence to thrive anywhere.
          </p>
          <div className="about-preview__pillars">
            <div>
              <Target size={22} aria-hidden="true" />
              <h3>Our mission</h3>
              <p>To provide excellent, values-driven education that unlocks every child’s potential.</p>
            </div>
            <div>
              <Compass size={22} aria-hidden="true" />
              <h3>Our vision</h3>
              <p>To raise principled leaders who will shape Nigeria and the world for good.</p>
            </div>
          </div>
          <Button to="/about" variant="green" icon={ArrowRight}>
            Discover our story
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
