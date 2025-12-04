"use client";

import { useState } from "react";
import Link from "next/link";
const menuItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0C0C0A] bg-primary backdrop-blur animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-[#262626]">
        <div className="flex h-20 items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-50">NovaStack</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-50">
            {menuItems.map((menu, idx) => (
              <Link key={idx} href={menu.url} className="nav-link">
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="cta-btn hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-phone h-4 w-4 mr-2"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p className="text-gray-50">Get Quote</p>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="icon-btn md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-menu h-5 w-5"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden  flex flex-col space-y-4 mt-4 pb-8 text-gray-200">
            {menuItems.map((menu, idx) => (
              <Link key={idx} href={menu.url} className="nav-link">
                {menu.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
