'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { navigationLinks } from './constants';

export default function MobileNav() {
  const pathName = usePathname();
  const [navShow, setNavShow] = useState(false);

  const variants = {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100vw' },
  };
  
  // Close mobile menu when route changes
  useEffect(() => {
    setNavShow(false);
  }, [pathName]);

  useEffect(() => {
    if (navShow) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navShow]);

  return (
    <div className="sm:hidden">
      <button type="button" aria-label="Toggle Menu" onClick={() => setNavShow(!navShow)}>
        <HiOutlineMenu size={30} className="mt-1.5" />
      </button>
      <AnimatePresence>
        <motion.div
          key="MobileNav"
          transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          animate={navShow ? 'enter' : 'exit'}
          initial="exit"
          exit="exit"
          variants={variants}
          className={classNames(
            'fixed inset-0 z-50 h-full w-full bg-white/95 backdrop-blur-sm dark:bg-black/95 shadow-xl'
          )}
        >
          <header className="flex justify-between items-center py-5 px-6 border-b border-gray-100 dark:border-gray-800">
            <div className="text-xl font-bold text-gray-900 dark:text-white">Menu</div>
            <button
              type="button"
              aria-label="Close menu"
              className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              onClick={() => setNavShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </header>
          <nav className="pt-6 pb-16 px-6 h-full overflow-y-auto">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setNavShow(false)}
                className={classNames(
                  'flex w-full items-center px-4 py-3 rounded-lg font-medium text-lg',
                  pathName === '/' 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                    : 'text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                )}
              >
                Home
              </Link>
            
              {navigationLinks.map(({ title, href }) => {
                const active = pathName?.includes(href);

                return (
                  <Link
                    key={title}
                    href={href}
                    onClick={() => setNavShow(false)}
                    className={classNames(
                      'flex w-full items-center px-4 py-3 rounded-lg font-medium text-lg',
                      active
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                        : 'text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                    )}
                    aria-label={title}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
