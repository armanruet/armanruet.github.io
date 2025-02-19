'use client';

import { useScroll } from 'framer-motion';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from '../providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      renderCanvas();
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <h1 className="sr-only">
        Hello I&apos;m Arman Hossen, I&apos;m a software developer, and I love building things for the web.
      </h1>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-9 xl:max-w-6xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-8">
              <h1 className="text-3xl font-bold sm:text-6xl md:text-7xl xl:text-8xl">
                Arman Hossen
              </h1>
              <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-300 sm:text-4xl md:text-5xl xl:text-6xl">
                I transform complex problems into elegant solutions.
              </h2>
              <Link
                href="/about"
                className="underline-magical w-max text-xl sm:text-2xl md:text-3xl"
              >
                Read more about me →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 -z-10"
      />
    </div>
  );
}
