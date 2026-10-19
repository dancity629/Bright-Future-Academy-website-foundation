import { stats } from '../../data/school'
import Reveal from '../ui/Reveal'
import './StatsBar.css'

export default function StatsBar() {
  return (
    <section className="stats" aria-label="School in numbers">
      <div className="container">
        <Reveal as="ul" className="stats__list">
          {stats.map((stat) => (
            <li key={stat.label} className="stats__item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
