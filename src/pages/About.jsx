import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import usePageTitle from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About Us')
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Us"
        intro="Our story, mission, values and the people and places that make Bright Future Academy special."
      />
      <ComingSoon
        planned={[
          'Our history since 2008 and the proprietor’s welcome',
          'Mission, vision and core values',
          'Facilities tour: classrooms, laboratories, library and sports',
          'Accreditation and partnerships',
        ]}
      />
    </>
  )
}
