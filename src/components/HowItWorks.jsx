// SCH-6: An interactive walkthrough of the five-step flow, plus the Phase 2 "Coming next" card.
// The steps play automatically while the section is on screen; tapping a step takes control.
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import './HowItWorks.css';

const STEP_MS = 4500;

const steps = [
  {
    icon: 'sliders',
    title: 'Choose your group',
    text: 'A student picks programme, year and group once and gets a personal daily timetable.',
  },
  {
    icon: 'edit',
    title: 'Post a change',
    text: 'A class rep or lecturer posts an update, for example “LT2 moved to Block C Room 12”.',
  },
  {
    icon: 'shield-check',
    title: 'Verify it',
    text: 'The change goes live only after a second rep or lecturer, or several students, confirm it.',
  },
  {
    icon: 'bell',
    title: 'Alert the class',
    text: 'Everyone in the affected group sees it on the Today screen and gets an SMS or WhatsApp-style alert.',
  },
  {
    icon: 'alert-triangle',
    title: 'Check for clashes',
    text: 'The clash detector flags two classes at the same time or in the same room.',
  },
];

// The small example picture shown for each step.
function Demo({ index }) {
  if (index === 0) {
    return (
      <div className="demo">
        <div className="demo__pickers">
          {[
            ['Programme', 'Software Engineering'],
            ['Year', 'Year 2'],
            ['Group', 'Group B'],
          ].map(([label, value], i) => (
            <div key={label} className="demo__picker" style={{ '--d': `${i * 0.25}s` }}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <p className="demo__result demo__result--ok" style={{ '--d': '0.9s' }}>
          <Icon name="check-circle" size={20} />
          Your timetable is ready: 4 classes today
        </p>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="demo">
        <div className="demo__card">
          <p className="demo__card-label">New change · Class rep</p>
          <dl className="demo__fields">
            <div style={{ '--d': '0.1s' }}>
              <dt>Course</dt>
              <dd>BSE2201</dd>
            </div>
            <div style={{ '--d': '0.35s' }}>
              <dt>Change</dt>
              <dd>LT2 → Block C, Room 12</dd>
            </div>
            <div style={{ '--d': '0.6s' }}>
              <dt>When</dt>
              <dd>Today, 08:00</dd>
            </div>
          </dl>
          <span className="demo__button" style={{ '--d': '0.9s' }}>
            <Icon name="send" size={16} />
            Post change
          </span>
        </div>
        <p className="demo__result demo__result--wait" style={{ '--d': '1.3s' }}>
          <Icon name="clock" size={20} />
          Waiting for verification
        </p>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="demo">
        <div className="demo__card">
          <p className="demo__card-label">BSE2201 moved to Block C, Room 12</p>
          <ul className="demo__checks" role="list">
            <li style={{ '--d': '0.2s' }}>
              <Icon name="check-circle" size={20} />
              Posted by class rep
            </li>
            <li style={{ '--d': '1s' }}>
              <Icon name="check-circle" size={20} />
              Confirmed by a second class rep
            </li>
          </ul>
          <div className="demo__meter" aria-hidden="true">
            <span />
          </div>
        </div>
        <p className="demo__result demo__result--ok" style={{ '--d': '1.5s' }}>
          <Icon name="shield-check" size={20} />
          Verified, now live
        </p>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="demo">
        <div className="demo__sms">
          <p className="demo__sms-from">ClassPulse</p>
          <p className="demo__bubble" style={{ '--d': '0.2s' }}>
            BSE2201 at 08:00 has moved to <strong>Block C, Room 12</strong>. Verified by 2 class reps.
          </p>
          <p className="demo__bubble demo__bubble--small" style={{ '--d': '0.8s' }}>
            Reply MAP for directions.
          </p>
        </div>
        <p className="demo__result demo__result--info" style={{ '--d': '1.3s' }}>
          <Icon name="bell" size={20} />
          Sent only to BSE Year 2, Group B
        </p>
      </div>
    );
  }

  return (
    <div className="demo">
      <ul className="demo__clash" role="list">
        <li style={{ '--d': '0.1s' }}>
          <span>14:00</span>
          <strong>MAT2201</strong>
          <em>LT4</em>
        </li>
        <li style={{ '--d': '0.4s' }}>
          <span>14:00</span>
          <strong>CSC2202</strong>
          <em>LT4</em>
        </li>
      </ul>
      <p className="demo__result demo__result--clash" style={{ '--d': '0.9s' }}>
        <Icon name="alert-triangle" size={20} />
        Clash: same room, same time. Class reps notified.
      </p>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);

  // Do not auto-play for people who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  // Only play while the section is on screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !sectionRef.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView) return undefined;
    const timer = setTimeout(() => setActive((i) => (i + 1) % steps.length), STEP_MS);
    return () => clearTimeout(timer);
  }, [playing, inView, active]);

  // Keep the active step visible in the sideways-scrolling list on phones.
  useEffect(() => {
    const list = tabsRef.current;
    const tab = list?.children[active];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.clientWidth) / 2, behavior: 'smooth' });
  }, [active]);

  const choose = (index) => {
    setActive(index);
    setPlaying(false);
  };

  const onTabKey = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const next = (active + (event.key === 'ArrowRight' ? 1 : -1) + steps.length) % steps.length;
    choose(next);
    document.getElementById(`how-tab-${next}`)?.focus();
  };

  const step = steps[active];

  return (
    <section id="how-it-works" className="section" aria-labelledby="how-title" ref={sectionRef}>
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">From “the room changed” to every student knowing, in five steps</h2>
          <p className="lead">Tap a step to see it in action, or let it play through.</p>
        </header>

        <div className="how" data-reveal>
          <div className="how__tabs" role="tablist" aria-label="Steps" ref={tabsRef} onKeyDown={onTabKey}>
            {steps.map((s, index) => (
              <button
                key={s.title}
                id={`how-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-controls="how-panel"
                tabIndex={index === active ? 0 : -1}
                className={`how__tab${index === active ? ' is-active' : ''}${index < active ? ' is-done' : ''}`}
                onClick={() => choose(index)}
              >
                <span className="how__num">{index + 1}</span>
                <span className="how__tab-text">
                  <span className="how__tab-title">{s.title}</span>
                  <span className="how__tab-desc">{s.text}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="how__panel" role="tabpanel" id="how-panel" aria-labelledby={`how-tab-${active}`}>
            <div className="how__panel-head">
              <span className="icon-badge">
                <Icon name={step.icon} />
              </span>
              <div>
                <p className="how__count">
                  Step {active + 1} of {steps.length}
                </p>
                <h3>{step.title}</h3>
              </div>
            </div>
            <p className="how__panel-text">{step.text}</p>

            <div className="how__stage" key={active}>
              <Demo index={active} />
            </div>

            <div className="how__controls">
              <button
                type="button"
                className="how__ctrl"
                onClick={() => choose((active - 1 + steps.length) % steps.length)}
              >
                <Icon name="chevron-left" size={20} />
                <span className="visually-hidden">Previous step</span>
              </button>
              <button type="button" className="how__ctrl how__ctrl--play" onClick={() => setPlaying((p) => !p)}>
                <Icon name={playing ? 'pause' : 'play'} size={18} />
                <span>{playing ? 'Pause' : 'Play'}</span>
              </button>
              <button type="button" className="how__ctrl" onClick={() => choose((active + 1) % steps.length)}>
                <Icon name="chevron-right" size={20} />
                <span className="visually-hidden">Next step</span>
              </button>
              <div className="how__progress" aria-hidden="true">
                <span
                  key={`${active}-${playing && inView}`}
                  className={playing && inView ? 'is-running' : ''}
                  style={{ '--step-ms': `${STEP_MS}ms` }}
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="phase2" aria-labelledby="phase2-title" data-reveal>
          <span className="phase2__badge">Coming next · Phase 2</span>
          <div className="phase2__body">
            <h3 id="phase2-title">Find the room, not just the room code</h3>
            <p>
              A <strong>room-code lookup</strong> so “C12” or “LT4” means something to first-years,
              and a <strong>“Take me there”</strong> link that opens the room on a campus map.{' '}
              <a href="#campus">Try the map preview below.</a>
            </p>
          </div>
          <div className="phase2__icons" aria-hidden="true">
            <span className="icon-badge icon-badge--amber">
              <Icon name="search" />
            </span>
            <span className="icon-badge icon-badge--amber">
              <Icon name="navigation" />
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
