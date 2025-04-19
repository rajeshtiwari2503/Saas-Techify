 "use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              CRM ERP Billing
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">menu</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
            <Link href="/features" className="hover:text-gray-300 transition">Features</Link>
            <Link href="/pricing" className="hover:text-gray-300 transition">Pricing</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden absolute inset-0 bg-primary bg-opacity-95 flex flex-col items-center justify-center gap-6 text-sm font-medium text-white transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}
        style={{ top: "64px" }}
      >
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/about" className="hover:text-gray-300 transition">About</Link>
        <Link href="/features" className="hover:text-gray-300 transition">Features</Link>
        <Link href="/pricing" className="hover:text-gray-300 transition">Pricing</Link>
        <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
      </nav>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
            <span className="text-lg font-semibold text-white">
              CRM ERP Billing
            </span>
          </div>
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} CRM ERP Billing Software — All rights reserved.
            </p>
            <p className="text-xs mt-1">Designed with care for modern business needs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
