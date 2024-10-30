"use client";

import { Bars3BottomRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

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
    <div className="h-[12vh] bg-gray-300 shadow-md  w-[1300px] mx-auto   rounded-b-3xl px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50">
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

          <li className="relative text-[18px] font-bold text-red-400 flex items-center">
            <button onClick={toggleAboutDropdown} className="flex items-center focus:outline-none">
              Who we are
              <ChevronDownIcon 
                className={`w-5 h-5 text-red-400 ml-1 transform transition-transform duration-500 ${isAboutOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            <AnimatePresence>
              {isAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-[-500px] top-full mt-12 w-[1300px] bg-gray-800 text-white p-8 shadow-lg rounded-3xl"
                >
                  <div className="mb-5">
                    <h1 className="text-3xl flex items-center "> About  Us   <motion.div
          className="ml-3 flex items-center mr-2  relative" 
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Main Arrow */}
          <motion.div
            className="flex items-center bg-gray-400 rounded-md p-2 justify-center"
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <ArrowRightIcon className="w-8 h-6 text-gray-100" />
          </motion.div>
          
          {/* Expanded Arrows on Hover */}
          <motion.div
            className="absolute left-full flex space-x-1"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 2, transition: { duration: 0.4 } }}
          >
            {Array.from({ length: 2}).map((_, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.2, delay: index * 0.1 }} 
                className="bg-gray-400 p-2 rounded-md"
              >
                <ArrowRightIcon className="w-6 h-6 text-gray-100" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </h1>
                     </div>
                  <div className="grid grid-cols-3 gap-8">
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="font-semibold text-lg mb-4 text-gray-500" >Our Organization</h4>
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-semibold text-lg mb-4 text-gray-500" >Media & Investors</h4>
                      <ul className="space-y-2">
                        <li className="hover:text-red-400 cursor-pointer">
                          <Link href={"/about/media-relations"}>Media Relations</Link>
                        </li>
                        <li className="hover:text-red-400 cursor-pointer">
                          <Link href={"/about/investor-relations"}>Investor Relations</Link>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="font-semibold text-lg mb-4 text-gray-500">How We Serve</h4>
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
                    </motion.div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
