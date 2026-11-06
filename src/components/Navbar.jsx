// SCH-2: Sticky navigation bar. Highlights the section you are reading and has a full-width
// menu on phones (closes with Esc, a tap outside, or picking a link).
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import logo from '../assets/zut-logo.jpg';
import './Navbar.css';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#preview', label: 'Preview' },
  { href: '#campus', label: 'Campus map' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact', cta: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  // Close the menu with Esc or when the screen gets wide; stop the page scrolling behind it.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1100 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Add a shadow once the page is scrolled, and fill the reading-progress bar.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link for the section in the middle of the screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setCurrent(`#${entry.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
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

        <ul id="nav-menu" className="navbar__links">
          {links.map((link) => (
            <li key={link.href} className={link.cta ? 'navbar__cta' : undefined}>
              <a
                href={link.href}
                aria-current={current === link.href ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar__progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      {open && <div className="navbar__backdrop" aria-hidden="true" onClick={() => setOpen(false)} />}
    </header>
  );
}
