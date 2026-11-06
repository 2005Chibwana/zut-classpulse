// SCH-2: Sticky navigation bar with links to every section and a mobile menu.
import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import logo from '../assets/zut-logo.jpg';
import './Navbar.css';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#preview', label: 'Preview' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact', cta: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key, or when the screen gets wide.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Main">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="ZUT logo" width="40" height="40" />
          <span>
            ZUT <strong>ClassPulse</strong>
          </span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <Icon name={open ? 'x' : 'menu'} />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <ul id="nav-menu" className={`navbar__links${open ? ' is-open' : ''}`}>
          {links.map((link) => (
            <li key={link.href} className={link.cta ? 'navbar__cta' : undefined}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
