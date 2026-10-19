import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { latestNews } from '../../data/news'
import { formatDate } from '../../utils/formatDate'
import './LatestNews.css'

export default function LatestNews() {
  return (
    <section className="section section--white latest-news" aria-labelledby="news-title">
      <div className="container">
        <SectionHeading
          id="news-title"
          eyebrow="News & events"
          title="Life at Bright Future Academy"
          intro="Celebrating achievements, milestones and upcoming moments in our school calendar."
        >
          <Button to="/news" variant="outline" icon={ArrowRight}>
            All news & events
          </Button>
        </SectionHeading>
        <div className="latest-news__grid">
          {latestNews.map((item, index) => (
            <Reveal as="article" key={item.id} className="news-card" delay={index * 100}>
              <div className="news-card__date" aria-hidden="true">
                <span>{formatDate(item.date, { day: '2-digit' })}</span>
                <span>{formatDate(item.date, { month: 'short' })}</span>
              </div>
              <div className="news-card__body">
                <p className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <span className="news-card__full-date">
                    <CalendarDays size={14} aria-hidden="true" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </span>
                </p>
                <h3>
                  <Link to="/news" className="news-card__link">
                    {item.title}
                  </Link>
                </h3>
                <p className="news-card__excerpt">{item.excerpt}</p>
                <span className="text-link" aria-hidden="true">
                  Read more <ArrowRight size={16} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="latest-news__note">
          <span className="demo-pill">Demo content</span> Sample stories for demonstration.
        </p>
      </div>
    </section>
  )
}
