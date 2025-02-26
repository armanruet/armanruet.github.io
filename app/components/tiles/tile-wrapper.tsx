'use client';

import { ReactNode, useContext, useRef, useState, useEffect } from 'react';
import { ScrollContext } from '../providers/ScrollProvider';
import { TileContext } from './TileContext';

interface WrapperProps {
  children: ReactNode;
  numOfPages: number;
}

export default function TileWrapper({ children, numOfPages }: WrapperProps) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Safely access ScrollContext - it may not be available initially
  const scrollContext = useContext(ScrollContext);
  const scrollY = scrollContext?.scrollY || 0;
  
  useEffect(() => {
    const { current: elContainer } = refContainer;
    if (!elContainer) return;
    
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;
    
    setCurrentPage(percentY * numOfPages);
  }, [scrollY, numOfPages]);

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        className="relative z-10 bg-white dark:bg-black"
        ref={refContainer}
        style={{
          height: numOfPages * 100 + 'vh',
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
}
