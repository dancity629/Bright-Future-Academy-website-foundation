import { Construction } from 'lucide-react'
import Button from './Button'
import './ComingSoon.css'

/** Placeholder body for pages scheduled for a later build phase. */
export default function ComingSoon({ planned = [], children }) {
  return (
    <section className="section">
      <div className="container">
        {children}
        <div className="coming-soon">
          <span className="coming-soon__icon">
            <Construction size={28} aria-hidden="true" />
          </span>
          <div>
            <p className="demo-pill">Coming in the next phase</p>
            <h2 className="coming-soon__title">This page is being prepared</h2>
            <p>The full page will include:</p>
            <ul className="coming-soon__list">
              {planned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="coming-soon__actions">
              <Button to="/" variant="outline" size="sm">
                Back to home
              </Button>
              <Button to="/contact" variant="green" size="sm">
                Contact the school
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
