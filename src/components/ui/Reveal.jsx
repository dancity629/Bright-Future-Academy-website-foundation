import { m } from 'motion/react'
import { EASE_OUT, VIEWPORT } from '../../utils/motion'

/** Fades and lifts its children into place when they scroll into view. */
export default function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE_OUT, delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
