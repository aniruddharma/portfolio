import React from 'react';
import { Linkedin, Mail, Phone, RefreshCw, Share2, MessageCircle } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data, refreshData, refreshing, meta } = usePortfolioData();
  const personalInfo = data?.personalInfo || {};

  const name = personalInfo.Name || 'Aniruddha Dharma';
  const email = personalInfo.Email || 'aniruddharma@gmail.com';
  const phone = personalInfo.Phone || '+91 7830933059';
  const linkedIn = personalInfo.LinkedIn_URL || 'https://www.linkedin.com/in/aniruddharma';
  const title = personalInfo.Title || 'Product Experience Lead';

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out ${name}'s portfolio — ${title}`;

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent(shareText);
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`
    };
    const a = document.createElement('a');
    a.href = urls[platform];
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pageUrl).then(() => {
        // Brief visual feedback via button text (no toast dependency needed here)
        const btn = document.getElementById('copy-link-btn');
        if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy Link'; }, 2000); }
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Social Share Bar */}
      <div className="border-b border-slate-700 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-300">
              <Share2 size={18} />
              <span className="font-medium">Share this profile</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleShare('linkedin')}
                variant="outline"
                size="sm"
                className="border-blue-500 text-blue-400 hover:bg-blue-900 hover:text-blue-300"
                data-testid="share-linkedin-btn"
              >
                <Linkedin size={16} className="mr-2" />
                Share on LinkedIn
              </Button>
              <Button
                onClick={() => handleShare('whatsapp')}
                variant="outline"
                size="sm"
                className="border-green-500 text-green-400 hover:bg-green-900 hover:text-green-300"
                data-testid="share-whatsapp-btn"
              >
                <MessageCircle size={16} className="mr-2" />
                Share on WhatsApp
              </Button>
              <Button
                id="copy-link-btn"
                onClick={handleCopyLink}
                variant="outline"
                size="sm"
                className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white"
                data-testid="copy-link-btn"
              >
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{name}</h3>
                <p className="text-slate-400">
                  {title} specializing in AI-powered digital products
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map(section => (
                    <li key={section}>
                      <a href={`#${section}`} className="text-slate-400 hover:text-white transition-colors duration-200 capitalize">
                        {section}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="space-y-3">
                  <a href={`mailto:${email}`} className="flex items-center text-slate-400 hover:text-white transition-colors duration-200">
                    <Mail size={18} className="mr-2 flex-shrink-0" />
                    {email}
                  </a>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center text-slate-400 hover:text-white transition-colors duration-200">
                    <Phone size={18} className="mr-2 flex-shrink-0" />
                    {phone}
                  </a>
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors duration-200">
                    <Linkedin size={18} className="mr-2 flex-shrink-0" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-center md:text-left">
                  © {currentYear} {name}. All rights reserved.
                </p>

                {/* Refresh Button and Cache Status */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {meta && (
                    <div className="text-xs text-slate-500 text-center sm:text-right">
                      <div>Last updated: {new Date(meta.timestamp).toLocaleTimeString()}</div>
                      {meta.nextUpdate && (
                        <div className="text-slate-600">Next refresh: {new Date(meta.nextUpdate).toLocaleTimeString()}</div>
                      )}
                    </div>
                  )}
                  <Button
                    onClick={refreshData}
                    disabled={refreshing}
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                    data-testid="refresh-content-btn"
                  >
                    <RefreshCw size={16} className={`mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                    {refreshing ? 'Refreshing...' : 'Refresh Content'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
