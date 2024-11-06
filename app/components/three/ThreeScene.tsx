"use client";
import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline/next';

interface Star {
  top: string;
  left: string;
  duration: number;
}

const ThreeScene: React.FC = () => {
  const touchIndicatorRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden text-white">
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

     {/* Spline Model */}
       {/* <Spline
        scene="https://prod.spline.design/sZOC8fJUUQUZiN1I/scene.splinecode"
        className="absolute z-10"
        style={{ width: '1200px', height: '1200px' }} 
      />

      {/* Touch Indicator */}
      {/* <div
        ref={touchIndicatorRef}
        className="absolute w-5 h-5 bg-blue-500 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div> */} 
    </div>
  );
};

export default ThreeScene;
