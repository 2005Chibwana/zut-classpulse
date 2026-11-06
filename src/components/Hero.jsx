// SCH-3: First screen visitors see: system name, tagline, who built it, two call-to-action
// buttons and a "live updates" panel that shows what ClassPulse does at a glance.
import { site } from '../data/site.js';
import { teamFirstNames } from '../data/team.js';
import Icon from './Icon.jsx';
import logo from '../assets/zut-logo.jpg';
import heroPhoto from '../assets/campus/hero-ict-centre.jpg';
import './Hero.css';

const trust = [
  { icon: 'shield-check', text: 'Verified by a second rep' },
  { icon: 'bell', text: 'SMS and WhatsApp-style alerts' },
  { icon: 'alert-triangle', text: 'Automatic clash checks' },
];

const updates = [
  { tone: 'change', icon: 'bell', label: 'Room change · Verified', text: 'BSE2201 moved: LT2 → Block C, Room 12', time: 'now' },
  { tone: 'cancel', icon: 'x-circle', label: 'Cancelled', text: 'STA2101 at 10:00 will not hold today', time: '8 min' },
  { tone: 'clash', icon: 'alert-triangle', label: 'Clash detected', text: 'MAT2201 and CSC2202 both in LT4 at 14:00', time: '12 min' },
  { tone: 'exam', icon: 'clipboard', label: 'Exam venue · Verified', text: 'BSE2201 test moved to the Main Hall, Fri 09:00', time: '1 h' },
];

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
            <a className="btn btn--accent btn--lg" href="#team">
              Meet the team
              <Icon name="arrow-right" />
            </a>
            <a className="btn btn--outline-light btn--lg" href="#contact">
              Contact us
            </a>
          </div>

          <ul className="hero__trust" role="list">
            {trust.map((item) => (
              <li key={item.text}>
                <Icon name={item.icon} size={18} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="live" role="group" aria-label="Example of live ClassPulse updates">
          <div className="live__head">
            <img src={logo} alt="ZUT logo" width="40" height="40" />
            <div className="live__title">
              <strong>Today at ZUT</strong>
              <span>BSE Year 2 · Group B</span>
            </div>
            <span className="live__badge">
              <span className="live__dot" aria-hidden="true" />
              Live
            </span>
          </div>

          <ul className="live__list" role="list">
            {updates.map((update, index) => (
              <li key={update.label} className={`live__item live__item--${update.tone}`} style={{ '--i': index }}>
                <span className="live__icon">
                  <Icon name={update.icon} size={18} />
                </span>
                <div className="live__copy">
                  <p className="live__label">{update.label}</p>
                  <p className="live__text">{update.text}</p>
                </div>
                <span className="live__time">{update.time}</span>
              </li>
            ))}
          </ul>

          <p className="live__foot">
            <Icon name="check-circle" size={16} />
            Every update is verified before it reaches you
          </p>
        </div>
      </div>
    </section>
  );
}
