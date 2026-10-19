import { ArrowRight, CalendarCheck } from 'lucide-react'
import Button from '../ui/Button'
import SmartImage from '../ui/SmartImage'
import Reveal from '../ui/Reveal'
import { images } from '../../data/images'
import './AdmissionsCta.css'

const steps = [
  { title: 'Enquire', text: 'Submit an enquiry or visit our admissions office.' },
  { title: 'Assessment', text: 'Your child sits a friendly, age-appropriate assessment.' },
  { title: 'Enrol', text: 'Receive your offer and complete enrolment.' },
]

export default function AdmissionsCta() {
  return (
    <section className="section admissions-cta" aria-labelledby="admissions-cta-title">
      <div className="container">
        <Reveal className="admissions-cta__panel">
          <div className="admissions-cta__bg" aria-hidden="true">
            <SmartImage src={images.admissions} alt="" />
          </div>
          <div className="admissions-cta__content">
            <p className="eyebrow">Admissions 2027/2028</p>
            <h2 id="admissions-cta-title">Give your child a bright start. Places are limited.</h2>
            <p className="admissions-cta__lead">
              We welcome applications into Creche through SSS 2. Join a school where your child is known, inspired and
              prepared for life.
            </p>
            <ol className="admissions-cta__steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="admissions-cta__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>
                    <strong>{step.title}</strong>
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>
            <div className="admissions-cta__actions">
              <Button to="/admissions" size="lg" icon={ArrowRight}>
                Start your application
              </Button>
              <Button to="/contact" variant="light" size="lg" icon={CalendarCheck}>
                Book a school tour
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
