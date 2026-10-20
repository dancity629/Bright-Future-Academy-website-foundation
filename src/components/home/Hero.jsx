import { Fragment, useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Award, CalendarDays } from 'lucide-react'
import Button from '../ui/Button'
import SmartImage from '../ui/SmartImage'
import { images } from '../../data/images'
import { school } from '../../data/school'
import { EASE_OUT, fadeUp, staggerContainer } from '../../utils/motion'
import './Hero.css'

const HEADLINE = 'Raising confident learners and'
const HEADLINE_ACCENT = 'future leaders'

const word = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.9, ease: EASE_OUT } },
}

function Words({ text }) {
  return text.split(' ').map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      {i > 0 && ' '}
      <span className="hero__word">
        <m.span className="hero__word-inner" variants={word}>
          {w}
        </m.span>
      </span>
    </Fragment>
  ))
}

function Badge({ className, delay, floatDelay, children }) {
  return (
    <m.div
      className={`hero__badge ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, delay }}
    >
      <m.div
        className="hero__badge-float"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: floatDelay }}
      >
        {children}
      </m.div>
    </m.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section className="hero" aria-labelledby="hero-title" ref={ref}>
      <div className="container hero__grid">
        <m.div className="hero__content" initial="hidden" animate="visible" variants={staggerContainer(0.12, 0.1)}>
          <m.p className="eyebrow hero__eyebrow" variants={fadeUp}>
            Nursery · Primary · Secondary in Lekki, Lagos
          </m.p>
          <m.h1 id="hero-title" variants={staggerContainer(0.06)}>
            <Words text={HEADLINE} />{' '}
            <em>
              <Words text={HEADLINE_ACCENT} />
            </em>
          </m.h1>
          <m.p className="hero__lead" variants={fadeUp}>
            At {school.name}, every child is known, challenged and cared for. We combine strong academics, rich
            co-curricular life and timeless values to prepare young Nigerians for a bright future.
          </m.p>
          <m.div className="hero__actions" variants={fadeUp}>
            <Button to="/admissions" size="lg" icon={ArrowRight}>
              Apply for Admission
            </Button>
            <Button to="/academics" variant="outline" size="lg">
              Explore Academics
            </Button>
          </m.div>
          <m.ul className="hero__trust" aria-label="At a glance" variants={fadeUp}>
            <li>
              <strong>Est. {school.founded}</strong>
              <span>Trusted by Lagos families</span>
            </li>
            <li>
              <strong>Ages 2–17</strong>
              <span>One continuous journey</span>
            </li>
          </m.ul>
        </m.div>

        <div className="hero__media">
          <m.div
            className="hero__outline"
            aria-hidden="true"
            initial={{ opacity: 0, x: -12, y: -12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 0.6 }}
          />
          <m.div
            className="hero__image-frame"
            initial={{ clipPath: 'inset(100% 0% 0% 0% round 200px 200px 24px 24px)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 200px 200px 24px 24px)' }}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 }}
          >
            <m.div className="hero__image-inner" style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}>
              <SmartImage
                src={images.hero}
                alt="Pupils learning together in a bright classroom"
                fallbackLabel={school.name}
                eager
              />
            </m.div>
          </m.div>
          <Badge className="hero__badge--top" delay={0.9} floatDelay={0}>
            <span className="hero__badge-icon">
              <Award size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>98% credit pass</strong>
              <small>WAEC 2026 (demo figure)</small>
            </span>
          </Badge>
          <Badge className="hero__badge--bottom" delay={1.1} floatDelay={3}>
            <span className="hero__badge-icon hero__badge-icon--gold">
              <CalendarDays size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>Entrance exam</strong>
              <small>Sat, 23 January 2027</small>
            </span>
          </Badge>
        </div>
      </div>
    </section>
  )
}
