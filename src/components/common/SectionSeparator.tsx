import React from 'react';

const SectionSeparator = () => {
  return (
    <div className="relative py-16 z-10">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Glowing base line */}
          <div className="absolute inset-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 blur-sm"></div>
          {/* Sharp line overlay */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        </div>
        {/* Center orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 relative">
            {/* Glowing base */}
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse-slow opacity-50 blur-sm"></div>
            {/* Sharp center */}
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse-slow opacity-75"></div>
            {/* Pulsing ring */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;