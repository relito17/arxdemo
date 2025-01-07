import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300; // Ajuste o valor conforme necessário
      const newOpacity = Math.max(0, 1 - scrollY / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2"
      style={{
        opacity: opacity,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <ChevronDown className="w-8 h-8 text-blue-500 animate-bounce" />
    </div>
  );
};

export default ScrollIndicator;
