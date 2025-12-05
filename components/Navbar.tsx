"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineLocalPhone, MdOutlineMenu } from "react-icons/md";
const menuItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0C0C0A] bg-primary backdrop-blur">
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
              <Link key={idx} href={menu.url} className="text-md font-semibold">
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:flex items-center">
              <MdOutlineLocalPhone className="mr-1" color="white" size={20} />
              <p className="text-gray-50">Get Quote</p>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="icon-btn md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MdOutlineMenu color="white" size={32} />
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
