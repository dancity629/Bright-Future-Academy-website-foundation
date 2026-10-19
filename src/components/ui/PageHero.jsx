import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import './PageHero.css'

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="page-hero__crumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">
              <ChevronRight size={14} aria-hidden="true" />
              {title}
            </li>
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 id="page-title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
    </section>
  )
}
