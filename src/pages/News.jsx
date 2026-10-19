import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import usePageTitle from '../hooks/usePageTitle'

export default function News() {
  usePageTitle('News & Events')
  return (
    <>
      <PageHero
        eyebrow="What’s happening"
        title="News & Events"
        intro="Stories, achievements and upcoming dates from across our school community."
      />
      <ComingSoon
        planned={[
          'All news articles with category filters',
          'Upcoming events calendar',
          'Photo gallery highlights',
          'Termly newsletters',
        ]}
      />
    </>
  )
}
