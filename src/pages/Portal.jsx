import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import usePageTitle from '../hooks/usePageTitle'

export default function Portal() {
  usePageTitle('Student Portal')
  return (
    <>
      <PageHero
        eyebrow="Preview"
        title="Student Portal"
        intro="A preview of the secure portal where students and parents will view results, timetables and notices."
      />
      <ComingSoon
        planned={[
          'Demo sign-in screen (no real authentication yet)',
          'Sample student dashboard with timetable and notices',
          'Sample results and attendance views',
          'Clear labelling that all student data is fictional',
        ]}
      />
    </>
  )
}
