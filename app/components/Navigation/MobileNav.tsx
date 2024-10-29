// "use client";

// import { XMarkIcon } from "@heroicons/react/16/solid";
// import Link from "next/link";
// import React from "react";

// interface Props {
//   nav: boolean;
//   closeNav: () => void;
// }

// const MobileNav = ({ nav, closeNav }: Props) => {
//   const navOpen = nav ? "translate-x-0" : "translate-x-[-100%]";
//   return (
//     <div
//       className={`transform transition-all ${navOpen} duration-500 top-0 left-0 right-0 bottom-0 fixed z-[200] h-[100vh] bg-blue-400`}
//     >
//       <XMarkIcon
//         onClick={closeNav}
//         className="w-[2rem] h-[2rem] z-[202] absolute top-[2rem] right-[2rem] text-slate-800 cursor-pointer "
//       />
//       <ul className="relative  z-[201]  flex flex-col space-y-10 items-center justify-center h-[100%]">
//         <li className="text-[25px] curser-pointer text-bold text-red-400">
//           <Link href={"/"}>Home</Link>
//         </li>
//         <li className="text-[25px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
//           <Link href={"/"}>About</Link>
//         </li>
//         <li className="text-[25px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
//           <Link href={"/"}>Services</Link>
//         </li>
//         <li className="text-[25px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
//           <Link href={"/"}>Contact</Link>
//         </li>
//         <li className="text-[25px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
//           <Link href={"/"}>Blog</Link>
//         </li>
//         <li className="text-[25px] curser-pointer text-bold hover:text-red-400 transition-all duration-200">
//           <Link href={"/"}>Product</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default MobileNav;
