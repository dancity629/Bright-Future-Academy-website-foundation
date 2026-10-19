import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import { features } from '../../data/features'
import './WhyChoose.css'

export default function WhyChoose() {
  return (
    <section className="section section--green why" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          id="why-title"
          eyebrow="Why choose us"
          title="Everything your child needs to flourish"
          intro="Parents choose Bright Future Academy for results they can see and a community they can trust."
          align="center"
        />
        <ul className="why__grid">
          {features.map((feature, index) => (
            <Reveal as="li" key={feature.title} className="why__item" delay={(index % 3) * 100}>
              <span className="why__icon">
                <Icon name={feature.icon} size={24} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
