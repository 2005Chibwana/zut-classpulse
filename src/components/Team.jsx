// SCH-9: All ten team members with their name, responsibility and GitHub profile link.
// The names and usernames come from src/data/team.js, so edit that file, not this one.
import { team } from '../data/team.js';
import { site, isFilled } from '../data/site.js';
import Icon from './Icon.jsx';
import './Team.css';

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

export default function Team() {
  return (
    <section id="team" className="section section--alt" aria-labelledby="team-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Meet the team</p>
          <h2 id="team-title">The people behind {site.systemName}</h2>
          <p className="lead">
            {site.teamName}: ten {site.courseCode} students, each owning one part of the project from
            the first commit to the live site.
          </p>
        </header>

        <ul className="team" role="list">
          {team.map((member) => (
            <li key={member.task} className="card team__card">
              <span className="team__avatar" aria-hidden="true">
                {initials(member.name)}
              </span>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
              <span className="team__task">{member.task}</span>
              {isFilled(member.github) && (
                <a
                  className="team__github"
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" size={16} />
                  <span>@{member.github}</span>
                  <span className="visually-hidden"> on GitHub (opens in a new tab)</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
