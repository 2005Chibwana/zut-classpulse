// SCH-9: All ten team members with their photo, name, responsibility, GitHub link and bio.
// The details come from src/data/team.js, so edit that file, not this one.
import { useEffect, useRef, useState } from 'react';
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

function Avatar({ member, large = false }) {
  const className = `team__avatar${large ? ' team__avatar--large' : ''}`;
  if (member.photo) {
    return (
      <img
        className={className}
        src={member.photo}
        alt={`Photo of ${member.name}`}
        width={large ? 120 : 88}
        height={large ? 120 : 88}
        loading="lazy"
      />
    );
  }
  return (
    <span className={className} aria-hidden="true">
      {initials(member.name)}
    </span>
  );
}

function GitHubLink({ username, name }) {
  if (!isFilled(username)) return null;
  return (
    <a
      className="team__github"
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="github" size={16} />
      <span>@{username}</span>
      <span className="visually-hidden"> ({name} on GitHub, opens in a new tab)</span>
    </a>
  );
}

export default function Team() {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);

  // Open the bio pop-up whenever a member is picked.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  const closeBio = () => dialogRef.current?.close();

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
              <Avatar member={member} />
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
              <span className="team__task">{member.task}</span>
              <div className="team__actions">
                {member.bio && (
                  <button type="button" className="team__bio-btn" onClick={() => setActive(member)}>
                    Read bio
                    <span className="visually-hidden"> of {member.name}</span>
                  </button>
                )}
                <GitHubLink username={member.github} name={member.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bio pop-up. Closes with Esc, the close button, or a click outside the box. */}
      <dialog
        ref={dialogRef}
        className="team__dialog"
        aria-labelledby="bio-title"
        onClose={() => setActive(null)}
        onClick={(event) => event.target === event.currentTarget && closeBio()}
      >
        {active && (
          <div className="team__dialog-body">
            <button type="button" className="team__dialog-close" onClick={closeBio}>
              <Icon name="x" size={20} />
              <span className="visually-hidden">Close bio</span>
            </button>
            <div className="team__dialog-head">
              <Avatar member={active} large />
              <div>
                <h3 id="bio-title">{active.name}</h3>
                <p className="team__role">{active.role}</p>
                <span className="team__task">{active.task}</span>
              </div>
            </div>
            <p className="team__bio">{active.bio}</p>
            <GitHubLink username={active.github} name={active.name} />
          </div>
        )}
      </dialog>
    </section>
  );
}
