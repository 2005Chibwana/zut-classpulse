// The whole landing page: every section in order, top to bottom.
// Each section is its own file in src/components/ so each team member owns one file.
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import DesignPreview from './components/DesignPreview.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
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
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
