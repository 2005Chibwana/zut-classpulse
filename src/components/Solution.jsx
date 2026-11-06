// SCH-5: The proposed system: its name, purpose, intended users and how it solves the problem.
import { site } from '../data/site.js';
import Icon from './Icon.jsx';
import './Solution.css';

const users = [
  {
    icon: 'graduation',
    who: 'Students',
    text: 'Pick programme, year and group once, then check one Today screen and get alerts.',
  },
  {
    icon: 'megaphone',
    who: 'Class reps',
    text: 'Post a change in seconds and confirm changes posted by other reps.',
  },
  {
    icon: 'book-open',
    who: 'Lecturers',
    text: 'Announce room changes, cancellations and exam venues to exactly the right group.',
  },
];

const fixes = [
  {
    problem: 'Updates scattered across WhatsApp, noticeboards and word of mouth',
    fix: 'One hub with a personal timetable for every programme, year and group',
  },
  {
    problem: 'Rumours and mistakes spread as fast as real changes',
    fix: 'A change goes live only after a second rep or lecturer, or several students, confirm it',
  },
  {
    problem: 'Students find out after walking to the wrong room',
    fix: 'SMS or WhatsApp-style alerts go straight to the affected group',
  },
  {
    problem: 'Clashes are only discovered when two classes meet at one door',
    fix: 'A clash detector flags double-booked times and rooms automatically',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section section--alt" aria-labelledby="solution-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Our solution</p>
          <h2 id="solution-title">One trusted place for every timetable change</h2>
          <p className="lead">
            {site.systemName} turns scattered messages into verified updates that reach the right
            students, at the right time.
          </p>
        </header>

        <div className="solution__top">
          <div className="solution__identity">
            <p className="solution__label">System name</p>
            <h3 className="solution__name">{site.systemName}</h3>
            <p className="solution__longname">{site.systemLongName}</p>

            <p className="solution__label">Purpose</p>
            <p className="solution__purpose">
              To make sure every ZUT student always knows where and when their next class or exam
              really is. Class reps and lecturers post changes, the changes are verified, and
              students are alerted straight away.
            </p>
          </div>

          <div>
            <p className="solution__label solution__label--dark">Intended users</p>
            <ul className="solution__users" role="list">
              {users.map((user) => (
                <li key={user.who} className="card">
                  <span className="icon-badge">
                    <Icon name={user.icon} />
                  </span>
                  <div>
                    <h4>{user.who}</h4>
                    <p>{user.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="solution__fixes">
          <h3>How it fixes the problem</h3>
          <ul role="list">
            {fixes.map((row) => (
              <li key={row.fix} className="solution__fix">
                <p className="solution__before">
                  <Icon name="x-circle" size={20} />
                  <span>
                    <span className="visually-hidden">Problem: </span>
                    {row.problem}
                  </span>
                </p>
                <Icon name="arrow-right" size={20} className="solution__arrow" />
                <p className="solution__after">
                  <Icon name="check-circle" size={20} />
                  <span>
                    <span className="visually-hidden">ClassPulse: </span>
                    {row.fix}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
