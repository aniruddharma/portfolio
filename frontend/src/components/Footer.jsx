import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Aniruddha Dharma</h3>
              <p className="text-slate-400">
                Product Experience Lead specializing in AI-powered digital products
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:aniruddharma@gmail.com"
                  className="flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Mail size={18} className="mr-2" />
                  aniruddharma@gmail.com
                </a>
                <a
                  href="tel:+917830933059"
                  className="flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Phone size={18} className="mr-2" />
                  +91 7830933059
                </a>
                <a
                  href="https://www.linkedin.com/in/aniruddharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © {currentYear} Aniruddh Arma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;