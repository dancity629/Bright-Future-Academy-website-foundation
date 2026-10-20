// Shared Motion settings so every animation on the site feels consistent.

export const EASE_OUT = [0.22, 1, 0.36, 1]

export const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' }

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
}

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})

export const hoverLift = { y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }
