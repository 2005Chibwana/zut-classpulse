// SCH-9: The two developers, with photo, role, bio, what they built and a GitHub link.
// The details come from src/data/team.js, so edit that file, not this one.
import { team } from '../data/team.js';
import { isFilled } from '../data/site.js';
import Icon from './Icon.jsx';
import './Team.css';

export default function Team() {
  return (
    <section id="team" className="section section--alt" aria-labelledby="team-title">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="eyebrow">Meet the team</p>
          <h2 id="team-title">The two developers behind ClassPulse</h2>
          <p className="lead">
            Two Software Engineering students at ZUT designed, built and shipped this project, from
            the first commit to the live site.
          </p>
        </header>

        <ul className="team" role="list">
          {team.map((member, index) => (
            <li
              key={member.name}
              className="card profile"
              data-reveal
              style={{ '--reveal-delay': `${index * 120}ms` }}
            >
              <div className="cover profile__cover">
                <img src={member.cover} alt="" width="1000" height="750" loading="lazy" />
              </div>
              <div className="profile__head">
                <img
                  className="profile__photo"
                  src={member.photo}
                  alt={`Photo of ${member.name}`}
                  width="112"
                  height="112"
                  loading="lazy"
                />
                <div>
                  <h3 className="profile__name">{member.name}</h3>
                  <p className="profile__title">{member.title}</p>
                  {isFilled(member.github) && (
                    <a
                      className="profile__github"
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" size={16} />
                      <span>@{member.github}</span>
                      <span className="visually-hidden"> ({member.name} on GitHub, opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="profile__bio">{member.bio}</p>

              <div className="profile__built">
                <h4>Built for ClassPulse</h4>
                <ul role="list">
                  {member.responsibilities.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="profile__tasks" role="list" aria-label="Jira tasks">
                {member.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
