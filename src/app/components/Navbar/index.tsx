"use client";
// src/components/Navbar.js
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageToggle from "../LanguageToggle";
import Image from "next/image";
import "./styles.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = (path: string) => {
    let styles =
      pathname === path ? "text-digifly-green font-[600]" : "font-[400]";
    styles +=
      " text-[16px]  hover:text-digifly-green hover:font-[600] cursor-default";
    return styles;
  };

  return (
    <nav className="bg-trasparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-12">
            <div className="md:mr-20">
              <Link
                href="/"
                className="flex items-center py-5 px-1.5 text-gray-700"
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1 gap-16">
              <Link href="/" className={`${linkClasses("/")}`}>
                Home
              </Link>
              <Link href="/#" className={`${linkClasses("/categories")}`}>
                Categories
              </Link>
              <Link href="/#" className={`${linkClasses("/contact-us")}`}>
                Contact Us
              </Link>
              <Link href="/#" className={`${linkClasses("/about")}`}>
                About
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          {/* <div className="hidden md:flex items-center space-x-1">
            <Link href="/login" className="py-5 px-3">
              Login
            </Link>
            <Link
              href="/signup"
              className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300"
            >
              Signup
            </Link>
          </div> */}
          <div className="self-center">
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Contact
        </Link>
        <Link
          href="/login"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
