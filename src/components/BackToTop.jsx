// A round "back to top" button that appears once you have scrolled down the page.
import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import './BackToTop.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrow-up" size={22} />
      <span className="visually-hidden">Back to top</span>
    </a>
  );
}
