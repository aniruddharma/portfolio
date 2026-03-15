import React from 'react';
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
    </div>
  );
};

export default Portfolio;