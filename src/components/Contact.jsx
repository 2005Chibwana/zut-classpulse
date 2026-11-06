// SCH-10: Contact section with working email, WhatsApp and GitHub links.
// The contact details come from src/data/site.js.
import { site, contactLinks } from '../data/site.js';
import Icon from './Icon.jsx';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact" data-reveal>
          <p className="eyebrow contact__eyebrow">Contact</p>
          <h2 id="contact-title">Questions, ideas, or want ClassPulse for your class?</h2>
          <p className="contact__text">
            We would love to hear from ZUT students, class reps and lecturers. Send us your
            questions, feedback or timetable stories, and we will get back to you.
          </p>

          <div className="contact__actions">
            {contactLinks.email && (
              <a className="btn btn--accent" href={contactLinks.email}>
                <Icon name="mail" />
                Email {site.contact.email}
              </a>
            )}
            {contactLinks.whatsapp && (
              <a
                className="btn btn--accent"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="message-circle" />
                Chat on WhatsApp
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            )}
            <a
              className="btn btn--outline-light"
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
              Ask us on GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
