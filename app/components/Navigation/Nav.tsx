"use client";

import { Bars3BottomRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  openNav: () => void;
}

function Nav({ openNav }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State for About dropdown

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <div className="h-[12vh] bg-gray-300 shadow-md w-full max-w-7xl mx-auto rounded-b-3xl px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50">
      <div className="w-[85%] flex items-center h-[12vh] justify-between mx-auto">
        <h1 className="text-[14px] md:text-[23px] font-bold text-slate-600">
          <span className="text-[27px] md:text-[40px] text-red-600">S</span>
          anthosh
        </h1>
        <ul className="hidden lg:flex items-center space-x-10">
          <li
            className="relative text-[18px] cursor-pointer font-bold text-red-400"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href={"/"}>Home</Link>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-3 text-slate-600 w-[150px]">
                <ul>
                  <li className="hover:text-red-400 cursor-pointer">
                    <Link href={"/what-we-do"}>What We Do</Link>
                  </li>
                  <li className="hover:text-red-400 cursor-pointer mt-2">
                    <Link href={"/who-we-are"}>Who We Are</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {/* About dropdown without navigation */}
          <li className="relative text-[18px] font-bold text-red-400 flex items-center">
            <button 
              onClick={toggleAboutDropdown} 
              className="flex items-center focus:outline-none"
              onMouseEnter={() => setIsAboutOpen(true)} // Show icon on hover
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About
              {/* Dropdown icon visibility and animation */}
              <ChevronDownIcon 
                className={`w-5 h-5 text-red-400 ml-1 transform transition-all duration-300 ${isAboutOpen ? 'rotate-180' : 'opacity-0'}`} 
              />
            </button>
            {isAboutOpen && (
              <div className="absolute top-full mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[300px] grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Capabilities</h4>
                  <ul className="mt-2 space-y-1">
                    <li>Cloud</li>
                    <li>Cybersecurity</li>
                    <li>Data and AI</li>
                    <li>Digital Engineering</li>
                    <li>Emerging Tech</li>
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
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/product"}>Product</Link>
          </li>
        </ul>
        <div>
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
