import { m, useScroll, useSpring } from 'motion/react'
import './ScrollProgress.css'

/** Thin gold bar along the top of the viewport showing reading progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })
  return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}
