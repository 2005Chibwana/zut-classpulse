// SCH-2: Footer with the team name, ZUT, course code, year and a contact link.
import { site, contactLinks } from '../data/site.js';
import Icon from './Icon.jsx';
import logo from '../assets/zut-logo.jpg';
import './Footer.css';

export default function Footer() {
  const contactHref = contactLinks.email || contactLinks.whatsapp || '#contact';

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="ZUT logo" width="48" height="48" />
          <div>
            <p className="footer__name">
              ZUT <strong>ClassPulse</strong>
            </p>
            <p className="footer__tagline">{site.tagline}</p>
          </div>
        </div>

        <div className="footer__meta">
          <p>
            Built by <strong>{site.teamName}</strong> for {site.courseCode} {site.courseName}
          </p>
          <p>
            {site.institution} ({site.institutionShort}) · © {site.year}
          </p>
        </div>

        <div className="footer__links">
          <a href={contactHref}>Contact the team</a>
          <a href="#top">
            Back to top
            <Icon name="arrow-up" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
