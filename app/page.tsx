"use client";
import React from 'react';
import Home1 from './home/page'; // Ensure this is also a client component if it uses client-side logic

export default function Home() {
  return (
    <div className="bg--900 min-h-screen">
      <Home1 />
    </div>
  );
}
