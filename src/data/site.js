// Site-wide details: team name, system name and contact links.
// Edit the values here. Never change layout code just to change a name.
// After editing, run `npm run check` to make sure no placeholder is left.

export const site = {
  teamName: 'FILL_ME', // e.g. 'Team Pulse'
  systemName: 'ZUT ClassPulse',
  systemLongName: 'The Self-Updating Timetable and Class-Alert Hub',
  tagline: 'Know where your next class really is, before you walk there.',
  institution: 'Zambia University of Technology',
  institutionShort: 'ZUT',
  courseCode: 'BSE2201',
  courseName: 'Software Engineering Foundations',
  year: 2026,
  contact: {
    // Fill in at least ONE of these. An empty one is simply hidden on the page.
    email: 'FILL_ME', // e.g. 'classpulse.team@gmail.com'
    whatsapp: 'FILL_ME', // digits only with country code, e.g. '260971234567'
  },
};

// The placeholder word is built in two parts so `npm run check` does not flag this line.
const PLACEHOLDER = 'FILL' + '_ME';

// True when a value has been filled in with real content.
export function isFilled(value) {
  return Boolean(value) && String(value).trim() !== '' && value !== PLACEHOLDER;
}

// Ready-to-use contact links (null when that contact is not filled in).
export const contactLinks = {
  email: isFilled(site.contact.email)
    ? `mailto:${site.contact.email}?subject=${encodeURIComponent('ZUT ClassPulse enquiry')}`
    : null,
  whatsapp: isFilled(site.contact.whatsapp)
    ? `https://wa.me/${String(site.contact.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(
        'Hi, I have a question about ZUT ClassPulse.'
      )}`
    : null,
};
