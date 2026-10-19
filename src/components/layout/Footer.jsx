import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import SocialIcon from '../ui/SocialIcon'
import { school } from '../../data/school'
import { footerNav } from '../../data/navigation'
import { CURRENT_YEAR } from '../../utils/currentYear'
import './Footer.css'

export default function Footer() {
  const { contact } = school

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>{school.summary}</p>
          <ul className="site-footer__socials" aria-label="Social media">
            {school.socials.map((social) => (
              <li key={social.network}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} (opens in a new tab)`}>
                  <SocialIcon network={social.network} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__col" aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="site-footer__heading">Explore</h2>
          <ul>
            {footerNav.explore.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-labelledby="footer-academics">
          <h2 id="footer-academics" className="site-footer__heading">Academics</h2>
          <ul>
            {footerNav.academics.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Get in touch</h2>
          <address className="site-footer__contact">
            <p>
              <MapPin size={18} aria-hidden="true" />
              <span>
                {contact.address.map((line) => (
                  <span key={line} className="site-footer__line">{line}</span>
                ))}
              </span>
            </p>
            <p>
              <Phone size={18} aria-hidden="true" />
              <span>
                {contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="site-footer__line">
                    {phone}
                  </a>
                ))}
              </span>
            </p>
            <p>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              <Clock size={18} aria-hidden="true" />
              <span>{contact.hours}</span>
            </p>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            © {CURRENT_YEAR} {school.name}. All rights reserved.
          </p>
          <p className="site-footer__demo">
            Demo website: the school, people, contact details and statistics shown are fictional sample content.
          </p>
        </div>
      </div>
    </footer>
  )
}
