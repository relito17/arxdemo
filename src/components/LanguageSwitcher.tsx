import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [opacity, setOpacity] = useState(1);
  const [clickedLang, setClickedLang] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300; // Ajuste conforme necessário
      const newOpacity = Math.max(0, 1 - scrollY / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (lang) => {
    setLanguage(lang);
    setClickedLang(lang);

    // Remover a animação após 500ms para que possa ser reutilizada
    setTimeout(() => setClickedLang(null), 1000);
  };

  return (
    <div
      className="fixed top-4 right-4 z-[100] flex gap-2"
      style={{
        opacity: opacity,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <button
        onClick={() => handleClick('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-navy-900/50 text-blue-500 hover:bg-blue-500/10'
        } ${
          clickedLang === 'en' ? 'animate-spin' : '' // Animação de giro no botão EN
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleClick('pt')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
          language === 'pt'
            ? 'bg-blue-500 text-white'
            : 'bg-navy-900/50 text-blue-500 hover:bg-blue-500/10'
        } ${
          clickedLang === 'pt' ? 'animate-spin' : '' // Animação de giro no botão PT
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
