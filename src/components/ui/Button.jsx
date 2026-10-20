import { Link } from 'react-router-dom'
import { m } from 'motion/react'
import './Button.css'

const MotionLink = m.create(Link)

const interactions = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
}

/**
 * Renders a router <Link> when `to` is given, an <a> for `href`,
 * and a <button> otherwise, all sharing the same styles.
 */
export default function Button({ to, href, variant = 'primary', size = 'md', icon: Icon, className = '', children, ...rest }) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={18} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...interactions} {...rest}>
        {content}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <m.a href={href} className={classes} {...interactions} {...rest}>
        {content}
      </m.a>
    )
  }

  return (
    <m.button type="button" className={classes} {...interactions} {...rest}>
      {content}
    </m.button>
  )
}
