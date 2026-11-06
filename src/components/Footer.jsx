// SCH-2: Footer with the developers, ZUT, course code, year and contact links.
import { site, contactLinks } from '../data/site.js';
import { teamFullNames } from '../data/team.js';
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
            Built by <strong>{teamFullNames}</strong> for {site.courseCode} {site.courseName}
          </p>
          <p>
            {site.institution} ({site.institutionShort}) · © {site.year}
          </p>
        </div>

        <div className="footer__links">
          <a href={contactHref}>Contact us</a>
          <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={16} />
            Source code
          </a>
          <a href="#top">
            Back to top
            <Icon name="arrow-up" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
