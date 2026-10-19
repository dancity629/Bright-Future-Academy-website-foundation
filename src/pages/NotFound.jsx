import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import usePageTitle from '../hooks/usePageTitle'
import './NotFound.css'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="section not-found">
      <div className="container">
        <p className="not-found__code">404</p>
        <h1>We couldn’t find that page</h1>
        <p className="lead">The page may have moved, or the link may be incorrect.</p>
        <Button to="/" variant="green" icon={ArrowRight}>
          Go to the homepage
        </Button>
      </div>
    </section>
  )
}
