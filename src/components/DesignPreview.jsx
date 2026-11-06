// SCH-8: A static, non-working picture of the planned Today screen, with one change alert and one clash warning.
import Icon from './Icon.jsx';
import './DesignPreview.css';

const classes = [
  { time: '08:00', code: 'BSE2201', name: 'Software Eng. Foundations', room: 'Block C, Rm 12', tag: 'Moved', tone: 'change' },
  { time: '10:00', code: 'STA2101', name: 'Statistics', room: 'LT1', tag: 'Cancelled', tone: 'cancel' },
  { time: '14:00', code: 'MAT2201', name: 'Linear Algebra', room: 'LT4', tag: 'Clash', tone: 'clash' },
  { time: '14:00', code: 'CSC2202', name: 'Data Structures', room: 'LT4', tag: 'Clash', tone: 'clash' },
];

const legend = [
  {
    tone: 'change',
    title: 'Verified change alert',
    text: 'Room changes, cancellations and exam venues appear first, showing who confirmed them.',
  },
  {
    tone: 'clash',
    title: 'Clash warning',
    text: 'Two classes at the same time or in the same room are flagged before anyone walks there.',
  },
  {
    tone: 'class',
    title: 'Your classes, already updated',
    text: 'Today’s timetable for your programme, year and group, with every change applied.',
  },
];

export default function DesignPreview() {
  return (
    <section id="preview" className="section" aria-labelledby="preview-title">
      <div className="container preview">
        <div className="preview__copy">
          <header className="section-header section-header--left" data-reveal>
            <p className="eyebrow">Design preview</p>
            <h2 id="preview-title">The Today screen, at a glance</h2>
            <p className="lead">
              This is the main screen students will see. Everything needed before walking to class
              sits on one screen.
            </p>
          </header>

          <ul className="preview__legend" role="list">
            {legend.map((item) => (
              <li key={item.title}>
                <span className={`preview__dot preview__dot--${item.tone}`} aria-hidden="true" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="preview__figure" data-reveal>
          <div className="phone">
            <div className="phone__notch" aria-hidden="true" />
            <div className="phone__screen">
              <div className="phone__status" aria-hidden="true">
                <span>9:41</span>
                <span className="phone__signal">
                  <i />
                  <i />
                  <i />
                </span>
              </div>

              <div className="phone__header">
                <p className="phone__title">Today</p>
                <p className="phone__meta">Thursday · BSE Year 2 · Group B</p>
              </div>

              <div className="phone__body">
                <div className="alert alert--change">
                  <span className="alert__icon">
                    <Icon name="bell" size={16} />
                  </span>
                  <div>
                    <p className="alert__label">Room change · Verified</p>
                    <p className="alert__text">BSE2201 moved from LT2 to Block C, Room 12</p>
                    <p className="alert__meta">Confirmed by a second class rep · 5 min ago</p>
                  </div>
                </div>

                <div className="alert alert--clash">
                  <span className="alert__icon">
                    <Icon name="alert-triangle" size={16} />
                  </span>
                  <div>
                    <p className="alert__label">Clash detected</p>
                    <p className="alert__text">MAT2201 and CSC2202 are both in LT4 at 14:00</p>
                    <p className="alert__meta">Class reps have been notified</p>
                  </div>
                </div>

                <p className="phone__section">Your classes</p>
                <ul className="phone__classes" role="list">
                  {classes.map((item) => (
                    <li key={item.code} className={`phone__class phone__class--${item.tone}`}>
                      <span className="phone__time">{item.time}</span>
                      <span className="phone__info">
                        <span className="phone__code">
                          {item.code} <span className="phone__name">{item.name}</span>
                        </span>
                        <span className="phone__room">{item.room}</span>
                      </span>
                      <span className={`phone__tag phone__tag--${item.tone}`}>{item.tag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="phone__tabs" aria-hidden="true">
                <span className="is-active">
                  <Icon name="home" size={18} />
                  Today
                </span>
                <span>
                  <Icon name="calendar" size={18} />
                  Week
                </span>
                <span>
                  <Icon name="bell" size={18} />
                  Alerts
                </span>
                <span>
                  <Icon name="user" size={18} />
                  Me
                </span>
              </div>
            </div>
          </div>
          <figcaption>
            <strong>Design preview.</strong> A static picture of the planned Today screen, not a
            working app.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
