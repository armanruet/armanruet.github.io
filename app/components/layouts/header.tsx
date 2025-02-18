'use client';

import Link from 'next/link';
import ThemeSwitch from './theme-switch';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">A.H.</span>
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <Link 
            href="/blog" 
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link 
            href="/about"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>

          {/* Theme Toggle */}
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
