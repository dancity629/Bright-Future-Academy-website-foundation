import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import usePageTitle from '../hooks/usePageTitle'

export default function Admissions() {
  usePageTitle('Admissions')
  return (
    <>
      <PageHero
        eyebrow="Join our community"
        title="Admissions"
        intro="Everything you need to know about joining Bright Future Academy for the 2027/2028 session."
      />
      <ComingSoon
        planned={[
          'Step-by-step admissions process and key dates',
          'Entry requirements for each class',
          'School fees overview (demo figures)',
          'Online application and enquiry form (demo, no data stored)',
        ]}
      />
    </>
  )
}
