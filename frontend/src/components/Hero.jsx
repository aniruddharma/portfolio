import React from 'react';
import { Button } from './ui/button';
import { Download, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Hero = ({ data }) => {
  const personalInfo = data?.personalInfo || {};
  const { toast } = useToast();

  // Convert Google Drive URLs to thumbnail URLs for display in <img> tags
  const getDisplayUrl = (url) => {
    if (!url) return null;
    const fileViewMatch = url.match(/drive\.google\.com\/file\/d\/([^\/\?]+)/);
    if (fileViewMatch) return `https://drive.google.com/thumbnail?id=${fileViewMatch[1]}&sz=w400`;
    const ucMatch = url.match(/drive\.google\.com\/uc\?.*?id=([^&]+)/);
    if (ucMatch) return `https://drive.google.com/thumbnail?id=${ucMatch[1]}&sz=w400`;
    return url;
  };
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Try multiple key formats in case sheet column has spaces vs underscores
    const resumeUrl = personalInfo.Resume_PDF_URL
      || personalInfo['Resume_PDF_URL']
      || personalInfo.Resume_URL;

    if (resumeUrl) {
      let href = resumeUrl;
      if (resumeUrl.includes('drive.google.com')) {
        const match = resumeUrl.match(/\/d\/([^\/\?]+)/);
        if (match) href = `https://drive.google.com/uc?export=download&id=${match[1]}`;
      }
      // Anchor element approach avoids popup-blocker issues
      const a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      toast({
        title: 'Resume Coming Soon',
        description: 'Please connect via LinkedIn or email in the meantime.',
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
              <img 
                src={getDisplayUrl(personalInfo.Profile_Photo_URL) || 'https://customer-assets.emergentagent.com/job_work-profile-11/artifacts/syuhafk4_Screenshot_20260220_130403_Drive.jpg'} 
                alt={personalInfo.Name || 'Aniruddha Dharma'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            {personalInfo.Name || 'Aniruddha Dharma'}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-600 font-semibold mb-5">
            {personalInfo.Title || 'Product Experience Lead'}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-7 max-w-2xl mx-auto leading-relaxed px-2">
            {personalInfo.Bio || 'Driving digital transformation through AI-powered products at Airtel. Specialized in building scalable solutions that impact millions of users daily.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-7">
            <a href={`mailto:${personalInfo.Email || 'aniruddharma@gmail.com'}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">
              <Mail size={18} />
              <span className="hidden sm:inline">{personalInfo.Email || 'aniruddharma@gmail.com'}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href={`tel:${personalInfo.Phone || '+917830933059'}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">
              <Phone size={18} />
              <span>{personalInfo.Phone || '+91 7830933059'}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm sm:text-base"
              data-testid="download-resume-btn"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 text-sm sm:text-base"
              data-testid="get-in-touch-btn"
            >
              Get in Touch
            </Button>
            <a
              href={personalInfo.LinkedIn_URL || 'https://www.linkedin.com/in/aniruddharma'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-5 py-2.5 text-sm sm:text-base"
              >
                <Linkedin size={18} className="mr-2" />
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