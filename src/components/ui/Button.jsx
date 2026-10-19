import { Link } from 'react-router-dom'
import './Button.css'

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
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
