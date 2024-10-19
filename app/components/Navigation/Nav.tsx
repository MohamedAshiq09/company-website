"use client";

import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="h-[12vh] bg-gray-300 shadow-md w-full max-w-7xl mx-auto rounded-3xl mt-4 px-4">
      <div className="w-[85%] flex items-center h-[12vh] justify-between mx-auto ">
        <h1 className="text-[14px] md:text-[23px] font-bold text-slate-600">
          <span className="text-[27px] md:[40px] text-red-600 ">A</span>
          erospere
        </h1>
        <ul className="hidden lg:flex items-center  space-x-10">
          <li className="text-[18px] curser-pointer text-bold text-red-400">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-[18px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/"}>About</Link>
          </li>
          <li className="text-[18px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/"}>Services</Link>
          </li>
          <li className="text-[18px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/"}>Contact</Link>
          </li>
          <li className="text-[18px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/"}>Blog</Link>
          </li>
          <li className="text-[18px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
            <Link href={"/"}>Product</Link>
          </li>
        </ul>
        <div>
          <Bars3BottomRightIcon className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
