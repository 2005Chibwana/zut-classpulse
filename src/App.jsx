// The whole landing page: every section in order, top to bottom.
// Each section is its own file in src/components/ so each developer owns their files.
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import DesignPreview from './components/DesignPreview.jsx';
import CampusMap from './components/CampusMap.jsx';
import Gallery from './components/Gallery.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

// Fades sections in as they scroll into view. Anything marked with `data-reveal` takes part.
function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Links like /#team should open at that section. The browser tries before React has drawn the
// page, so jump there once everything is on screen.
function useInitialHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id && document.getElementById(id);
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }, []);
}

export default function App() {
  useScrollReveal();
  useInitialHashScroll();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <DesignPreview />
        <CampusMap />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
