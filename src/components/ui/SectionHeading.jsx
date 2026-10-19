import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, intro, align = 'left', id, children }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
      </div>
      {children && <div className="section-heading__aside">{children}</div>}
    </div>
  )
}
