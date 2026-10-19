import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import { programs } from '../data/programs'
import './Academics.css'

export default function Academics() {
  usePageTitle('Academics')
  return (
    <>
      <PageHero
        eyebrow="Learning at every stage"
        title="Academics"
        intro="Nursery, Primary and Secondary programmes that build knowledge, skills and character step by step."
      />
      <ComingSoon
        planned={[
          'Curriculum overview and subjects for each stage',
          'Timetable, class sizes and assessment approach',
          'Clubs, sports and co-curricular activities',
          'Examination results and university destinations',
        ]}
      >
        <div className="academics-overview">
          {programs.map((program) => (
            <article key={program.id} id={program.id} className="academics-overview__item">
              <span className="academics-overview__icon">
                <Icon name={program.icon} size={22} />
              </span>
              <div>
                <h2>{program.title}</h2>
                <p className="academics-overview__meta">
                  {program.ages} · {program.classes}
                </p>
                <p>{program.summary}</p>
              </div>
            </article>
          ))}
          <p className="academics-overview__cta">
            Ready to apply? Visit <Link to="/admissions">Admissions</Link>.
          </p>
        </div>
      </ComingSoon>
    </>
  )
}
