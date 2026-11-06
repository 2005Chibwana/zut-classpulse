// SCH-7: Feature cards, each with an icon, what the feature does and the benefit to the user.
import Icon from './Icon.jsx';
import './Features.css';

const features = [
  {
    icon: 'calendar',
    title: 'Personal daily timetable',
    text: 'Choose programme, year and group once. ClassPulse shows only your classes.',
    benefit: 'No more digging through a full faculty timetable.',
  },
  {
    icon: 'edit',
    title: 'Live change posts',
    text: 'Class reps and lecturers post room changes, cancellations and exam venues in seconds.',
    benefit: 'Updates come straight from the people who know.',
  },
  {
    icon: 'shield-check',
    title: 'Verified before it goes live',
    text: 'A second rep or lecturer, or several students, must confirm a change first.',
    benefit: 'Rumours and typos never reach your timetable.',
  },
  {
    icon: 'bell',
    title: 'SMS and WhatsApp-style alerts',
    text: 'Only the students in the affected group are notified.',
    benefit: 'You hear about a change before you leave for class.',
  },
  {
    icon: 'alert-triangle',
    title: 'Clash detector',
    text: 'Flags two classes booked at the same time or in the same room.',
    benefit: 'Clashes get fixed early, not at the lecture-room door.',
  },
  {
    icon: 'smartphone',
    title: 'Simple Today screen',
    text: 'Today’s classes, changes and warnings on one screen.',
    benefit: 'One glance tells you where to go next.',
  },
  {
    icon: 'clipboard',
    title: 'Exam venue updates',
    text: 'Exam venue changes are highlighted so they cannot be missed.',
    benefit: 'Turn up at the right hall, on time, on exam day.',
  },
  {
    icon: 'layers',
    title: 'One trusted source',
    text: 'Replaces scattered WhatsApp groups, noticeboards and word of mouth.',
    benefit: 'Everyone in the class sees the same, correct information.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section section--alt" aria-labelledby="features-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Features &amp; benefits</p>
          <h2 id="features-title">Everything you need to never miss a class change</h2>
          <p className="lead">
            Each feature solves one part of the problem for students, class reps and lecturers.
          </p>
        </header>

        <ul className="features" role="list">
          {features.map((feature) => (
            <li key={feature.title} className="card feature">
              <span className="icon-badge">
                <Icon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p className="feature__text">{feature.text}</p>
              <p className="feature__benefit">
                <Icon name="check" size={18} />
                <span>
                  <span className="visually-hidden">Benefit: </span>
                  {feature.benefit}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
