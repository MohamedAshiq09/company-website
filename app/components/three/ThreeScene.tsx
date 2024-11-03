

"use client";
import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

interface Star {
  top: string;
  left: string;
  duration: number;
}

const ThreeScene: React.FC = () => {
  const touchIndicatorRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  // Generate stars for the background
  useEffect(() => {
    const generateStars = () => {
      return [...Array(150)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 4,
      }));
    };
    setStars(generateStars());
  }, []);

  // Handle dragging interactions
  const handlePointerDown = () => setIsDragging(true); // Start dragging
  const handlePointerUp = () => setIsDragging(false);   // Stop dragging

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80 animate-glow"
            style={{
              width: '3px',
              height: '3px',
              top: star.top,
              left: star.left,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.7)',
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Touch Indicator */}
      <div
        ref={touchIndicatorRef}
        className="absolute w-5 h-5 bg-blue-500 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Spline Model - Centered with Fixed Size and Scale */}
      <div
        className="relative z-10"
        style={{
          width: '80vw',
          height: '80vh',
          maxWidth: '1000px',
          maxHeight: '700px',
          // transform: 'scale(1.4)', 
          // transformOrigin: 'center', 
        }}
        
        onPointerDown={handlePointerDown} 
        onPointerUp={handlePointerUp}
      >
        <Spline scene="https://prod.spline.design/cfF17GOAuWfbhK6n/scene.splinecode" /> 
        {/* <div className="absolute inset-0 bg-black opacity-10 z-20" /> */}
      </div>
    </div>
  );
};

export default ThreeScene;





