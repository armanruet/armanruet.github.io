'use client';

import { useEffect, useRef } from 'react';

interface HtmlRendererProps {
  content: string;
}

export default function HtmlRenderer({ content }: HtmlRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Find all script tags within the injected HTML
    const scripts = containerRef.current.querySelectorAll('script');
    
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      
      // Copy all attributes (e.g., src, type)
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      // Setting async to false ensures that scripts (both inline and external)
      // execute in the exact order they appear in the DOM.
      newScript.async = false;
      
      // Copy inline code
      newScript.innerHTML = oldScript.innerHTML;
      
      // Replace the old, unexecuted script with the newly created one to trigger execution
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [content]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />;
}
