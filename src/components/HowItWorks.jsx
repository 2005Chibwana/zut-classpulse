// SCH-6: The five-step flow from choosing a group to the clash check, plus the Phase 2 "Coming next" card.
import Icon from './Icon.jsx';
import './HowItWorks.css';

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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" aria-labelledby="how-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">From “the room changed” to every student knowing, in five steps</h2>
          <p className="lead">
            Changes are posted by the people who know, checked by a second person, then delivered to
            exactly the students they affect.
          </p>
        </header>

        <ol className="steps" role="list">
          {steps.map((step, index) => (
            <li key={step.title} className="steps__item">
              <div className="steps__marker">
                <span className="steps__number" aria-hidden="true">
                  {index + 1}
                </span>
              </div>
              <div className="card steps__card">
                <span className="icon-badge">
                  <Icon name={step.icon} />
                </span>
                <h3>
                  <span className="visually-hidden">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="phase2" aria-labelledby="phase2-title">
          <span className="phase2__badge">Coming next · Phase 2</span>
          <div className="phase2__body">
            <h3 id="phase2-title">Find the room, not just the room code</h3>
            <p>
              After launch we plan a <strong>room-code lookup</strong> so “C12” or “LT4” means
              something to first-years, and a <strong>“Take me there”</strong> link that opens the
              room on a campus map.
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
