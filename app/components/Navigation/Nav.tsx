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

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <div className="h-[12vh] bg-gray-300 shadow-md  w-[1300px] mx-auto   px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50">
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
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-3 text-slate-600 w-[1000px] transition-opacity duration-300">
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

          {/* Updated "About" dropdown with full-width alignment */}
          <li className="relative text-[18px] font-bold text-red-400 flex items-center">
            <button 
              onClick={toggleAboutDropdown} 
              className="flex items-center focus:outline-"
            >
              About
              <ChevronDownIcon 
                className={`w-5 h-5 text-red-400 ml-1 transform transition-all duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            {isAboutOpen && (
              <div 
  style={{ left: "-562px" }} 
  className="absolute top-full mt-12 w-[1300px] bg-gray-800 right-2 text-white p-8  shadow-lg rounded-b-3xl transition-transform duration-500 ease-in-out"
>
                <div className="grid grid-cols-3 gap-8">
                  
                  {/* Column 1 - Our Organization */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Our Organization</h4>
                    <ul className="space-y-2">
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/cloud"}>Cloud</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/locations"}>Locations</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/value-report"}>360° Value Report</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 - Media & Investors */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Media & Investors</h4>
                    <ul className="space-y-2">
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/media-relations"}>Media Relations</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/investor-relations"}>Investor Relations</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 - How We Serve */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">How We Serve</h4>
                    <ul className="space-y-2">
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/strategy"}>Strategy and Consulting</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/technology"}>Technology</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/operations"}>Operations</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/industry-x"}>Industry X</Link>
                      </li>
                      <li className="hover:text-red-400 cursor-pointer">
                        <Link href={"/about/song"}>Song</Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            )}
          </li>

          {/* Other menu items */}
          <li className="text-[18px] cursor-pointer font-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/contact"}>What can we do</Link>
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
