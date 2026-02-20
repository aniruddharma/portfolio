import React from 'react';
import { Button } from './ui/button';
import { Download, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download functionality - Connect to backend');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-5xl font-bold">
              AD
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Aniruddha Dharma
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Product Experience Lead
          </p>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Driving digital transformation through AI-powered products at Airtel. 
            Specialized in building scalable solutions that impact millions of users daily.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="mailto:aniruddharma@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={20} />
              <span>aniruddharma@gmail.com</span>
            </a>
            <a href="tel:+917830933059" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200">
              <Phone size={20} />
              <span>+91 7830933059</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg"
            >
              Get in Touch
            </Button>
            <a
              href="https://www.linkedin.com/in/aniruddharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 text-lg"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;