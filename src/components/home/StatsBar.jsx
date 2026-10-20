import { useEffect, useRef, useState } from 'react'
import { animate, m, useInView, useReducedMotion } from 'motion/react'
import { stats } from '../../data/school'
import { VIEWPORT, fadeUp, staggerContainer } from '../../utils/motion'
import './StatsBar.css'

const numberFormat = new Intl.NumberFormat('en-GB')

/** Counts up from zero to a value like "1,200+" or "98%" once it is on screen. */
function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduceMotion = useReducedMotion()
  const [, digits = '', suffix = ''] = value.match(/^([\d,]+)(.*)$/) ?? []
  const target = Number(digits.replace(/,/g, ''))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion || !target) return undefined
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, reduceMotion, target])

  if (!digits) return <strong>{value}</strong>

  return (
    <strong ref={ref}>
      <span className="visually-hidden">{value}</span>
      <span aria-hidden="true">
        {numberFormat.format(reduceMotion ? target : display)}
        {suffix}
      </span>
    </strong>
  )
}

export default function StatsBar() {
  return (
    <section className="stats" aria-label="School in numbers">
      <div className="container">
        <m.ul
          className="stats__list"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer(0.1)}
        >
          {stats.map((stat) => (
            <m.li key={stat.label} className="stats__item" variants={fadeUp}>
              <CountUp value={stat.value} />
              <span>{stat.label}</span>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  )
}
