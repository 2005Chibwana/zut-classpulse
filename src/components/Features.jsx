// SCH-7: Feature cards, each with a campus photo cover, an icon, what the feature does and its benefit.
import Icon from './Icon.jsx';
import timetablePhoto from '../assets/covers/timetable-student.jpg';
import livePostsPhoto from '../assets/covers/live-posts-block.jpg';
import verifiedPhoto from '../assets/covers/verified-building.jpg';
import alertsPhoto from '../assets/covers/alerts-phone.jpg';
import clashPhoto from '../assets/covers/clash-detector.jpg';
import todayPhoto from '../assets/covers/room-change-path.jpg';
import examPhoto from '../assets/covers/exam-updates-ict.jpg';
import trustedPhoto from '../assets/covers/trusted-avenue.jpg';
import './Features.css';

const features = [
  {
    icon: 'calendar',
    title: 'Personal daily timetable',
    text: 'Choose programme, year and group once. ClassPulse shows only your classes.',
    benefit: 'No more digging through a full faculty timetable.',
    photo: timetablePhoto,
    alt: 'A student with a backpack walking to class along a stone path',
  },
  {
    icon: 'edit',
    title: 'Live change posts',
    text: 'Class reps and lecturers post room changes, cancellations and exam venues in seconds.',
    benefit: 'Updates come straight from the people who know.',
    photo: livePostsPhoto,
    alt: 'A long two-storey red-brick teaching block',
  },
  {
    icon: 'shield-check',
    title: 'Verified before it goes live',
    text: 'A second rep or lecturer, or several students, must confirm a change first.',
    benefit: 'Rumours and typos never reach your timetable.',
    photo: verifiedPhoto,
    alt: 'A modern white campus building behind a wide lawn',
  },
  {
    icon: 'bell',
    title: 'SMS and WhatsApp-style alerts',
    text: 'Only the students in the affected group are notified.',
    benefit: 'You hear about a change before you leave for class.',
    photo: alertsPhoto,
    alt: 'A student checking his phone beside the tree-lined avenue',
  },
  {
    icon: 'alert-triangle',
    title: 'Clash detector',
    text: 'Flags two classes booked at the same time or in the same room.',
    benefit: 'Clashes get fixed early, not at the lecture-room door.',
    photo: clashPhoto,
    alt: 'Tall jacaranda trees beside a white building on the main avenue',
  },
  {
    icon: 'smartphone',
    title: 'Simple Today screen',
    text: 'Today’s classes, changes and warnings on one screen.',
    benefit: 'One glance tells you where to go next.',
    photo: todayPhoto,
    alt: 'A paved campus path leading between lawns to a building',
  },
  {
    icon: 'clipboard',
    title: 'Exam venue updates',
    text: 'Exam venue changes are highlighted so they cannot be missed.',
    benefit: 'Turn up at the right hall, on time, on exam day.',
    photo: examPhoto,
    alt: 'The ICT Centre of Excellence on a sunny day',
  },
  {
    icon: 'layers',
    title: 'One trusted source',
    text: 'Replaces scattered WhatsApp groups, noticeboards and word of mouth.',
    benefit: 'Everyone in the class sees the same, correct information.',
    photo: trustedPhoto,
    alt: 'The main avenue shaded by tall green trees',
  },
];

export default function Features() {
  return (
    <section id="features" className="section section--alt" aria-labelledby="features-title">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="eyebrow">Features &amp; benefits</p>
          <h2 id="features-title">Everything you need to never miss a class change</h2>
          <p className="lead">
            Each feature solves one part of the problem for students, class reps and lecturers.
          </p>
        </header>

        <ul className="features" role="list">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className="card feature"
              data-reveal
              style={{ '--reveal-delay': `${(index % 4) * 80}ms` }}
            >
              <div className="cover feature__cover">
                <img src={feature.photo} alt={feature.alt} width="720" height="450" loading="lazy" />
              </div>
              <div className="feature__body">
                <span className="icon-badge feature__icon">
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
              </div>
            </li>
          ))}
        </ul>
        <p className="features__hint" aria-hidden="true">
          Swipe to see all {features.length} features →
        </p>
      </div>
    </section>
  );
}
