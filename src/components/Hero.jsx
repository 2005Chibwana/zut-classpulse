// SCH-3: First screen visitors see: system name, tagline, who built it and two call-to-action buttons.
import { site } from '../data/site.js';
import { teamFirstNames } from '../data/team.js';
import Icon from './Icon.jsx';
import logo from '../assets/zut-logo.jpg';
import heroPhoto from '../assets/campus/hero-ict-centre.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section
      id="top"
      className="hero"
      aria-labelledby="hero-title"
      style={{ '--hero-photo': `url(${heroPhoto})` }}
    >
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__team">
            <span className="hero__pulse" aria-hidden="true" />
            {site.courseCode} project by {teamFirstNames}
          </p>

          <h1 id="hero-title" className="hero__title">
            ZUT Class<span>Pulse</span>
          </h1>
          <p className="hero__subtitle">{site.systemLongName}</p>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__intro">
            Room changes, cancellations, exam venues and clashes, verified and sent straight to the
            students they affect. Built for students, class reps and lecturers at {site.institution}.
          </p>

          <div className="hero__actions">
            <a className="btn btn--accent" href="#team">
              Meet the team
              <Icon name="arrow-right" />
            </a>
            <a className="btn btn--outline-light" href="#contact">
              Contact us
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            className="hero__logo"
            src={logo}
            alt="Zambia University of Technology logo: a blue shield with the letters Z, U, T and a graduation cap, framed by laurel leaves"
            width="280"
            height="280"
          />

          <div className="hero__chips">
            <div className="hero__chip hero__chip--change">
              <span className="hero__chip-icon">
                <Icon name="bell" size={18} />
              </span>
              <span>
                <strong>Room change · Verified</strong>
                <small>LT2 → Block C, Room 12</small>
              </span>
            </div>
            <div className="hero__chip hero__chip--clash">
              <span className="hero__chip-icon">
                <Icon name="alert-triangle" size={18} />
              </span>
              <span>
                <strong>Clash detected</strong>
                <small>Two classes in LT4 at 14:00</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
