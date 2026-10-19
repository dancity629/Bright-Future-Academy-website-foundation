import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import StaffCard from '../ui/StaffCard'
import Button from '../ui/Button'
import { featuredStaff } from '../../data/staff'
import './FeaturedStaff.css'

export default function FeaturedStaff() {
  return (
    <section className="section featured-staff" aria-labelledby="staff-title">
      <div className="container">
        <SectionHeading
          id="staff-title"
          eyebrow="Meet our leaders"
          title="Dedicated educators who know every child"
          intro="Our experienced, qualified team brings warmth and expertise to every classroom."
        >
          <Button to="/staff" variant="outline" icon={ArrowRight}>
            Meet all staff
          </Button>
        </SectionHeading>
        <ul className="featured-staff__grid">
          {featuredStaff.map((member, index) => (
            <Reveal as="li" key={member.id} delay={index * 100}>
              <StaffCard member={member} />
            </Reveal>
          ))}
        </ul>
        <p className="featured-staff__note">
          <span className="demo-pill">Demo content</span> Staff profiles are fictional and will be replaced with real
          team members.
        </p>
      </div>
    </section>
  )
}
