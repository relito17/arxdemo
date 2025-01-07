import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import ScrollIndicator from './common/ScrollIndicator';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToLeadMagnet = () => {
    const leadMagnetSection = document.getElementById('lead-magnet');
    if (leadMagnetSection) {
      leadMagnetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden pt-32 mb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-anta text-white mb-6 leading-tight">
          {t.title}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <button
          onClick={scrollToLeadMagnet}
          className="interactive-button bg-blue-500 text-white px-8 py-3 rounded-full text-lg"
        >
          <span className="relative z-10">{t.cta}</span>
        </button>
      </div>
      
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
