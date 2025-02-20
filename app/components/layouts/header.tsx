'use client';

import Link from 'next/link';
import ThemeSwitch from './theme-switch';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiMenuAlt4 } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center z-50">
          <span className="text-xl font-bold">A.H.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/blog" 
            className="text-[1.2rem] font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link 
            href="/about"
            className="text-[1.2rem] font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <a 
            href="https://armanruet.github.io/Luxembourgish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white relative group"
          >
            Luxembourgish
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <ThemeSwitch />
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center space-x-4 md:hidden z-50">
          <ThemeSwitch />
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-900 dark:text-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose className="text-3xl" /> : <HiMenuAlt4 className="text-3xl" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col px-8 pt-32">
            <div className="space-y-8">
              <Link 
                href="/"
                onClick={toggleMenu}
                className="block text-[2rem] font-mono text-gray-900"
              >
                Home
              </Link>
              <Link 
                href="/blog"
                onClick={toggleMenu}
                className="block text-[2rem] font-mono text-gray-900"
              >
                Blog
              </Link>
              <a 
                href="https://armanruet.github.io/Luxembourgish/"
                onClick={toggleMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[2rem] font-mono text-gray-900"
              >
                Luxembourgish
              </a>
              <Link 
                href="/about"
                onClick={toggleMenu}
                className="block text-[2rem] font-mono text-gray-900 relative w-fit"
              >
                About
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-500"></span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
