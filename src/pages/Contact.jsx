import PageHero from '../components/ui/PageHero'
import ComingSoon from '../components/ui/ComingSoon'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Contact Us')
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        intro="We would love to hear from you. Reach our admissions and front office teams."
      />
      <ComingSoon
        planned={[
          'Contact form with validation (demo, no data stored)',
          'Phone, email and office hours',
          'Campus map and directions',
          'Book a school tour',
        ]}
      />
    </>
  )
}
