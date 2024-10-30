"use client";

import { Bars3BottomRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  openNav: () => void;
}

function Nav({ openNav }: Props) {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services dropdown

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
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
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <Link href={"/"}>Home</Link>
            {isHomeDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-3 text-slate-600 w-[150px] transition-opacity duration-300">
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
          {/* About dropdown with routing */}
          <li className="relative text-[18px] font-bold text-red-400 flex items-center">
            <button 
              onClick={toggleAboutDropdown} 
              className="flex items-center focus:outline-none"
              onMouseEnter={() => setIsAboutOpen(true)} // Show icon on hover
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About
              <ChevronDownIcon 
                className={`w-5 h-5 text-red-400 ml-1 transform transition-all duration-300 ${isAboutOpen ? 'rotate-180' : 'opacity-0'}`} 
              />
            </button>
            {isAboutOpen && (
              <div className={`absolute top-full mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[300px] grid grid-cols-2 gap-4 transition-transform duration-500 ease-in-out transform ${isAboutOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                <div>
                  <h4 className="font-semibold">Capabilities</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/cloud"}>Cloud</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/cybersecurity"}>Cybersecurity</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/data-ai"}>Data and AI</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/digital-engineering"}>Digital Engineering</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/emerging-tech"}>Emerging Tech</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Industries</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/aerospace"}>Aerospace</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/automotive"}>Automotive</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/banking"}>Banking</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/capital-markets"}>Capital Markets</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/about/communications"}>Communications</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          {/* Services dropdown with routing */}
          <li className="relative text-[18px] font-bold text-red-400 flex items-center">
            <button 
              onClick={toggleServicesDropdown} 
              className="flex items-center focus:outline-none"
              onMouseEnter={() => setIsServicesOpen(true)} // Show icon on hover
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <ChevronDownIcon 
                className={`w-5 h-5 text-red-400 ml-1 transform transition-all duration-300 ${isServicesOpen ? 'rotate-180' : 'opacity-0'}`} 
              />
            </button>
            {isServicesOpen && (
              <div className={`absolute top-full mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[300px] grid grid-cols-2 gap-4 transition-transform duration-500 ease-in-out transform ${isServicesOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                <div>
                  <h4 className="font-semibold">Our Services</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/consulting"}>Consulting</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/development"}>Development</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/design"}>Design</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/support"}>Support</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/training"}>Training</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Industries Served</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/healthcare"}>Healthcare</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/finance"}>Finance</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/retail"}>Retail</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/education"}>Education</Link>
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">
                      <Link href={"/services/government"}>Government</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
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
            className="h-8 w-8 cursor-pointer lg:hidden text-red-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;