import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import usePageTitle from '../hooks/usePageTitle'

export default function Staff() {
  usePageTitle('Our Staff')
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="Our Staff"
        intro="The qualified, caring educators and support staff behind every child’s progress."
      />
      <ComingSoon
        planned={[
          'Leadership team profiles',
          'Teaching staff by school and department',
          'Search and filter by subject or role',
          'Our approach to teacher training',
        ]}
      />
    </>
  )
}
