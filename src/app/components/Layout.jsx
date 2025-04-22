
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IconButton } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import Header from "./Header";

// export default function Layout({ children }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = ["Services", "About", "Features", "Pricing", "Contact"];

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <Header  />
//       <header className="bg-primary shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
//           {/* Logo and Title */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/Logo.png"
//               alt="SaaS Techify Logo"
//               width={80}
//               height={80}
//               className="w-16 object-contain rounded-lg shadow-md"
//             />
//             <span className="text-2xl font-bold text-white tracking-tight">
//               {/* SaaS Techify */}
//             </span>
//           </Link>

//           {/* Mobile Toggle */}
//           <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {/* <IconButton > */}
//               {isMenuOpen ? (
//                 <CloseIcon sx={{ color: "white" }} />
//               ) : (
//                 <MenuIcon sx={{ color: "white" }} />
//               )}
//             {/* </IconButton> */}
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
//             {navItems.map((item) => (
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

//       {/* Mobile Navigation with Backdrop */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <nav
//             className="absolute left-0 right-0 bg-primary bg-opacity-95 py-6 px-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-white transition-all duration-300 z-50 text-center"
//             style={{ top: "64px" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                 className="hover:text-gray-300 transition"
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* Main content */}
//       <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">{children}</main>

//       {/* Footer */}
//       <footer className="bg-primary text-gray-300 py-4 mt-auto">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//           <div className="flex items-center gap-2 mb-4 md:mb-0">
//             <Image
//               src="/Logo.png"
//               alt="SaaS Techify Logo"
//               width={80}
//               height={80}
//               className="w-16 object-contain rounded-lg shadow-md"
//             />
//             <span className="text-lg font-semibold text-white">
//               {/* SaaS Techify */}
//             </span>
//           </div>
//           <div>
//             <p className="text-sm">
//               &copy; {new Date().getFullYear()} SaaS Techify — All rights reserved.
//             </p>
//             <p className="text-xs mt-1">Designed with care for modern businesses.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  let timeout;
  const handleMouseEnter = (menu) => {
    clearTimeout(timeout);
    setOpenMenu(menu);
  };
  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // 200ms delay
  };

  const menuItems = {
    Services: [
      "ERP",
      "CRM",
      "Automotive CRM Solution",
      "Real Estate Management",
      "Human Capital Management",
      "Restaurant Billing Solution",
    ],
    Technologies: [
      "MERN Stack",
      "ASP.NET",
      "Java",
      "AWS",
      "DevOps",
      "Microservices",
      "Python",
      "Django",
      "Node.js",
      "Docker",
      "Kubernetes",
      "React",
      "Angular",
      "Vue.js",
      "Cloud Computing",
      "SQL/NoSQL Databases",
      "GraphQL",
      "TypeScript",
      "Spring Boot",
    ],
    About: [""],
    Features: [""],
    Pricing: [""],
    Contact: [""],
    RequestService: [""],
  };

  const pathMap = {
    About: "/about",
    Features: "/features",
    Pricing: "/pricing",
    Contact: "/contact",
    RequestService: "/requestService",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg"
            />
          </Link>

          {/* Mobile toggle */}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <MenuIcon sx={{ color: "white" }} />
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 relative">
            {Object.entries(menuItems).map(([menu, items]) => {
              const isDirectLink = items.length === 1 && items[0] === "";
              return (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDirectLink ? (
                    <Link
                      href={pathMap[menu] || "#"}
                      className="hover:text-secondary hover:bg-white hover:py-2 hover:px-2 rounded-md font-medium"
                    >
                      {menu}
                    </Link>
                  ) : (
                    <>
                      <button className="hover:text-secondary   font-medium">
                        {menu}
                      </button>

                      {openMenu === menu && (
                        <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-md shadow-lg z-20">
                          <ul className="py-2 grid grid-cols-1 md:grid-cols-2   gap-2">
                            {items.map((item, index) => (
                              <li key={index} >
                                <Link
                                  href="#"
                                  className="block px-4 py-1 text-sm hover:bg-secondary hover:rounded-md hover:text-white"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile Dropdown Nav */}
        {isMenuOpen && (
          // <div className="md:hidden bg-primary text-white px-6 py-4 space-y-4">
          //   {Object.entries(menuItems).map(([menu, items]) => (
          //     <div key={menu}>
          //       <div className="grid grid-cols-2   gap-2">
          //         <p className="font-semibold mb-1">{menu}  </p>
          //       </div>
          //       <ul className="  pl-4 text-sm grid grid-cols-2   gap-2">
          //         {items.map((item, index) => (
          //           <li key={index}>
          //             <Link href="#" className="block hover:text-secondary">
          //               {item}
          //             </Link>
          //           </li>
          //         ))}
          //       </ul>
          //     </div>
          <div className="md:hidden bg-primary text-white px-6 py-4 space-y-4">
          {Object.entries(menuItems).map(([menu, items]) => (
            <div key={menu}>
              <div className="grid grid-cols-2 gap-2">
                <p className="font-semibold mb-1">{menu}</p>
              </div>
              <ul className="pl-4 text-sm grid grid-cols-2 gap-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="block hover:text-secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-2 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/Logo.png"
              alt="Saas Techify Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Saas Techify — All rights reserved.
            </p>
            <p className="text-xs mt-1">Empowering digital transformation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
