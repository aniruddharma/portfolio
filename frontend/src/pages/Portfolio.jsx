import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { FullPageShimmer } from '../components/ShimmerLoading';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Scroll-to-top button — shows after 400px, hides ONLY when back near top (<80px)
// Hysteresis prevents the "disappears 0.5s after scrolling" flicker
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else if (window.scrollY < 80) {
        setVisible(false);
      }
      // Between 80–400px: keep current state — no flicker
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-slate-800 hover:bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100"
      data-testid="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
};

const Portfolio = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return <FullPageShimmer />;
  }

  if (error && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loading Portfolio</h2>
          <p className="text-slate-600 mb-4">
            Google Sheets integration will work automatically on Vercel.
          </p>
          <p className="text-sm text-slate-500">
            Current preview uses fallback data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <Header />
      <Hero data={data} />
      <About />
      <Experience data={data} />
      <Projects data={data} />
      <Skills data={data} />
      <Education data={data} />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
