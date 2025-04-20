// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IconButton } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close'; // <-- import this

// export default function Layout({ children }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-primary shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
//           {/* Logo and Title */}
//           <Link href="/" className="flex items-center md:ps-0 ps-[3px] gap-2">
//             <Image
//               src="/Logo.png"
//               alt="Logo"
//               width={80}
//               height={80}
//               className="w-16 object-contain rounded-lg shadow-md"
//             />
//             <span className="text-2xl font-bold text-white tracking-tight">
//               CRM ERP Billing
//             </span>
//           </Link>

//           {/* Mobile Toggle */}
//           <div className="md:hidden text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}>

//             {isMenuOpen ? <CloseIcon sx={{ color: "white" }} /> : <MenuIcon sx={{ color: "white" }} />}

//           </div>
//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
//             {["Home", "About", "Features", "Pricing", "Contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                 className="relative group"
//               >
//                 <span className="transition-colors duration-300 group-hover:text-[#3B82F6]">
//                   {item}
//                 </span>
//                 <span
//                   className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"
//                 />
//               </Link>
//             ))}
//           </nav>

//         </div>
//       </header>


//       {/* Mobile Nav with Backdrop */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
//           onClick={() => setIsMenuOpen(false)} // Clicking outside closes menu
//         >
//           <nav
//             className="absolute left-0 right-0 bg-primary bg-opacity-95 py-6 grid grid-cols-3 gap-6 text-sm font-medium text-white transition-all duration-300 z-50 text-center"
//             style={{ top: "64px" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Link href="/" className="hover:text-gray-300 transition">Home</Link>
//             <Link href="/about" className="hover:text-gray-300 transition">About</Link>
//             <Link href="/features" className="hover:text-gray-300 transition">Features</Link>
//             <Link href="/pricing" className="hover:text-gray-300 transition">Pricing</Link>
//             <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
//           </nav>

//         </div>
//       )}


//       {/* Main content */}
//       <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">{children}</main>

//       {/* Footer */}
//       <footer className="bg-primary text-gray-300 py-2 mt-auto">
//         <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//           <div className="flex items-center gap-2 mb-4 md:mb-0">
//             <Image
//               src="/Logo.png"
//               alt="Logo"
//               width={80}
//               height={80}
//               className="w-16 object-contain rounded-lg shadow-md"
//             />
//             <span className="text-lg font-semibold text-white">
             
//             </span>
//           </div>
//           <div>
//             <p className="text-sm">
//               &copy; {new Date().getFullYear()} CRM ERP Billing Software — All rights reserved.
//             </p>
//             <p className="text-xs mt-1">Designed with care for modern business needs.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Features", "Pricing", "Contact"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="SaaS Techify Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              SaaS Techify
            </span>
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* <IconButton > */}
              {isMenuOpen ? (
                <CloseIcon sx={{ color: "white" }} />
              ) : (
                <MenuIcon sx={{ color: "white" }} />
              )}
            {/* </IconButton> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-[#3B82F6]">
                  {item}
                </span>
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Navigation with Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className="absolute left-0 right-0 bg-primary bg-opacity-95 py-6 px-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-white transition-all duration-300 z-50 text-center"
            style={{ top: "64px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-gray-300 transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/Logo.png"
              alt="SaaS Techify Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
            <span className="text-lg font-semibold text-white">
              SaaS Techify
            </span>
          </div>
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SaaS Techify — All rights reserved.
            </p>
            <p className="text-xs mt-1">Designed with care for modern businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
