import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-navy-900/50 backdrop-blur-sm text-gray-300 border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-lovelo mb-4 logo-hover">
              <span className="text-blue-500">ARx</span>
              <span className="text-white">Automate</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              {t.description}
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;