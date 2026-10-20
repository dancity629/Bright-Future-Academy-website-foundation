import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../ui/SmartImage'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import { hoverLift } from '../../utils/motion'
import { programs } from '../../data/programs'
import './Programs.css'

export default function Programs() {
  return (
    <section className="section programs" aria-labelledby="programs-title">
      <div className="container">
        <SectionHeading
          id="programs-title"
          eyebrow="Our schools"
          title="One school, three stages of growth"
          intro="From first words to final exams, each stage is designed around how children learn best at that age."
          align="center"
        />
        <div className="programs__grid">
          {programs.map((program, index) => (
            <Reveal as="article" key={program.id} className="program-card" delay={index * 120} whileHover={hoverLift}>
              <div className="program-card__media">
                <SmartImage src={program.image} alt={`${program.title} pupils at Bright Future Academy`} fallbackLabel={program.title} />
                <span className="program-card__ages">{program.ages}</span>
              </div>
              <div className="program-card__body">
                <span className="program-card__icon">
                  <Icon name={program.icon} size={22} />
                </span>
                <h3>{program.title}</h3>
                <p className="program-card__classes">{program.classes}</p>
                <p>{program.summary}</p>
                <ul className="program-card__list">
                  {program.highlights.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={`/academics#${program.id}`} className="text-link program-card__link">
                  Learn more<span className="visually-hidden"> about our {program.title}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
