"use client"

import React, { useState } from "react";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-900 text-white px-4 py-2 rounded"
      >
        About ▼
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Capabilities</h4>
            <ul className="mt-2 space-y-1">
              <li>Cloud</li>
              <li>Cybersecurity</li>
              <li>Data and AI</li>
              <li>Digital Engineering</li>
              <li>Emerging Tech</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Industries</h4>
            <ul className="mt-2 space-y-1">
              <li>Aerospace</li>
              <li>Automotive</li>
              <li>Banking</li>
              <li>Capital Markets</li>
              <li>Communications</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
