import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="cursor-trail"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;