import React, { useEffect, useState } from 'react';
import logo from '../images/logo 250px.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-1000 ease-in-out ${
        scrolled
          ? 'py-4 bg-navy-900/95 backdrop-blur-sm shadow-lg'
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center transition-all duration-500 ease-in-out ${
            scrolled ? 'justify-start gap-4' : 'flex-col items-center'
          }`}
        >
          {/* Clique na imagem do logotipo */}
          <img
            src={logo}
            alt="ARxAutomate Logo"
            onClick={scrollToTop}
            className={`cursor-pointer transition-all duration-500 ease-in-out ${
              scrolled ? 'w-12 h-12' : 'w-20 h-20 mb-5'
            }`}
          />
          {/* Clique no texto do logotipo */}
          <h1
            onClick={scrollToTop}
            className={`cursor-pointer font-lovelo tracking-wider transition-all duration-1000 ease-in-out ${
              scrolled ? 'text-3xl' : 'text-6xl text-center'
            } text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center`} 
          >
            <span className="text-blue-500">ARx</span>
            <span className="text-white">Automate</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
