import React from 'react';
import { Download } from 'lucide-react';
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

const FloatingResumeButton = ({ resumeUrl }) => {
  if (!resumeUrl) return null;

  const handleClick = () => {
    let href = resumeUrl;
    if (resumeUrl.includes('drive.google.com')) {
      const match = resumeUrl.match(/\/d\/([^\/\?]+)/);
      if (match) href = `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-blue-300/50"
      data-testid="floating-resume-btn"
      title="Download Resume"
    >
      <Download size={18} />
      <span className="hidden sm:inline">Download Resume</span>
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

  const resumeUrl = data?.personalInfo?.Resume_PDF_URL || '';

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
      <FloatingResumeButton resumeUrl={resumeUrl} />
    </div>
  );
};

export default Portfolio;
