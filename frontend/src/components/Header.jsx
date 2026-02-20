import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            Aniruddh Arma
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Education
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Education
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;