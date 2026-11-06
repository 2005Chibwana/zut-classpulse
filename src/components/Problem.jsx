// SCH-4: The identified problem: what goes wrong, who it affects and why it must be fixed.
import Icon from './Icon.jsx';
import './Problem.css';

const issues = [
  {
    icon: 'alert-triangle',
    title: 'Timetable clashes',
    text: 'Two classes land in the same slot or the same room, and nobody notices until students arrive.',
  },
  {
    icon: 'map-pin',
    title: 'Room changes',
    text: 'A lecture moves to another block, but half the class still walks to the old room.',
  },
  {
    icon: 'x-circle',
    title: 'Lecturer cancellations',
    text: 'Students travel to campus for a class that was cancelled hours earlier.',
  },
  {
    icon: 'clipboard',
    title: 'Exam venue confusion',
    text: 'A late venue change leaves students searching for their exam hall on exam day.',
  },
];

const sources = ['WhatsApp groups', 'Noticeboards', 'Word of mouth'];

const affected = [
  {
    icon: 'graduation',
    who: 'Students',
    text: 'Miss lectures and exam details because the update never reached them.',
  },
  {
    icon: 'megaphone',
    who: 'Class representatives',
    text: 'Have no simple way to push a verified change to the right students.',
  },
  {
    icon: 'book-open',
    who: 'Lecturers',
    text: 'Cannot be sure a change they announce reaches everyone in the group.',
  },
];

const impacts = [
  { icon: 'calendar', label: 'Missed lectures' },
  { icon: 'clipboard', label: 'Missed exam information' },
  { icon: 'trending-down', label: 'Lost marks' },
  { icon: 'clock', label: 'Wasted time' },
];

export default function Problem() {
  return (
    <section id="problem" className="section" aria-labelledby="problem-title">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="eyebrow">The problem</p>
          <h2 id="problem-title">Timetable chaos is costing ZUT students time and marks</h2>
          <p className="lead">
            At ZUT, students lose time and marks because of timetable clashes, room changes,
            lecturer cancellations and exam venue confusion.
          </p>
        </header>

        <ul className="problem__issues" role="list">
          {issues.map((issue, index) => (
            <li
              key={issue.title}
              className="card problem__issue"
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <span className="icon-badge icon-badge--amber">
                <Icon name={issue.icon} />
              </span>
              <h3>{issue.title}</h3>
              <p>{issue.text}</p>
            </li>
          ))}
        </ul>

        <div className="problem__scatter" data-reveal>
          <p className="problem__scatter-label">Today, updates are scattered across</p>
          <ul className="problem__sources" role="list">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
          <p className="problem__scatter-note">
            There is no single place students can trust, and class reps and lecturers have no simple
            way to push a verified change to the right students.
          </p>
        </div>

        <div className="problem__grid" data-reveal>
          <div>
            <h3 className="problem__subtitle">Who is affected</h3>
            <ul className="problem__affected" role="list">
              {affected.map((person) => (
                <li key={person.who}>
                  <span className="icon-badge">
                    <Icon name={person.icon} />
                  </span>
                  <div>
                    <strong>{person.who}</strong>
                    <p>{person.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="problem__subtitle">Why it needs fixing</h3>
            <ul className="problem__impacts" role="list">
              {impacts.map((impact) => (
                <li key={impact.label}>
                  <Icon name={impact.icon} size={22} />
                  <span>{impact.label}</span>
                </li>
              ))}
            </ul>
            <p className="problem__why">
              Every missed update is a missed lecture, a lost mark or an hour wasted walking between
              blocks. A small information gap has a real cost on a student&apos;s results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
