"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top promotional bar */}
      <div
        className="px-4 bg-gradient-herbal text-white text-center py-2 text-sm font-medium"
        role="banner"
      >
        FOR EXTRA DEALS AND DISCOUNTS CALL US NOW
      </div>

      <header className="w-full shadow">
        {/* Top Bar */}
        <div className="bg-herbal-green text-white">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-6 py-4">
            {/* Logo & Tagline */}
            <div className="flex items-center space-x-2">
              <span className="text-yellow-300 text-2xl">🌿</span>
              <div>
                <h1 className="font-bold text-lg">Asthiamrit</h1>
                <p className="text-sm">Herbal Oil</p>
              </div>
            </div>

            {/* Contact + Hamburger */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 940 7468 048</span>
              </div>

              {/* Hamburger Icon (Mobile) */}
              <button
                className="md:hidden p-2 text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-white">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-6 py-3">
            <ul className="flex space-x-8 text-gray-700 font-medium">
              <li>
                <Link href="/" className="hover:text-[#1a7554]">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1a7554]">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1a7554]">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#1a7554]">
                  FAQ
                </Link>
              </li>
            </ul>

            <Link
              href="/buy"
              className="bg-gradient-herbal hover:opacity-90 font-semibold text-white px-5 py-2 rounded-md transition"
            >
              BUY ASTHIMERU
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation with smooth transition */}
        <div
          className={`md:hidden bg-white shadow-lg px-4 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] py-6" : "max-h-0 py-0"
          }`}
        >
          <div className="flex items-center space-x-2 border-b pb-4">
            <Phone className="w-4 h-4 text-gray-700" />
            <span className="font-medium text-gray-700">+91 940 7468 048</span>
          </div>

          <ul className="flex flex-col space-y-4 text-gray-700 font-medium mt-4">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1a7554]"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1a7554]"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1a7554]"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1a7554]"
              >
                FAQ
              </Link>
            </li>
          </ul>

          {/* Mobile Buy Button */}
          <Link
            href="/buy"
            className="block w-full text-center text-white px-5 py-3 rounded-md bg-gradient-herbal hover:opacity-90 font-semibold transition mt-4"
            onClick={() => setMenuOpen(false)}
          >
            BUY ASTHIMERU
          </Link>
        </div>
      </header>
    </>
  );
}
