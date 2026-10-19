import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import Programs from '../components/home/Programs'
import AboutPreview from '../components/home/AboutPreview'
import WhyChoose from '../components/home/WhyChoose'
import FeaturedStaff from '../components/home/FeaturedStaff'
import LatestNews from '../components/home/LatestNews'
import AdmissionsCta from '../components/home/AdmissionsCta'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()

  return (
    <>
      <Hero />
      <StatsBar />
      <Programs />
      <AboutPreview />
      <WhyChoose />
      <FeaturedStaff />
      <LatestNews />
      <AdmissionsCta />
    </>
  )
}
