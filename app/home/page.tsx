"use client"
import React from 'react';
import ThreeScene from '../components/three/ThreeScene';

const Home: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <ThreeScene/>
      <div className="content" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Welcome to My Homepage</h1>
        Additional content
      </div>
      
      </div>
    
  );
};

export default Home;
