'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export interface GiscusProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  reactionsEnabled?: boolean;
  emitMetadata?: boolean;
  inputPosition?: 'top' | 'bottom';
  lang?: string;
  loading?: 'lazy' | 'eager';
  strict?: string;
  theme?: string;
}

export default function Giscus({
  repo,
  repoId,
  category,
  categoryId,
  mapping = 'pathname',
  reactionsEnabled = true,
  emitMetadata = false,
  inputPosition = 'top',
  lang = 'en',
  loading = 'lazy',
  strict = '0',
  theme,
}: GiscusProps) {
  const { resolvedTheme } = useTheme();
  const commentsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use the provided theme if available, otherwise fall back to the resolvedTheme
  const giscusTheme = theme === 'preferred_color_scheme' 
    ? (resolvedTheme === 'dark' ? 'dark' : 'light')
    : theme || (resolvedTheme === 'dark' ? 'dark' : 'light');

  useEffect(() => {
    // Remove existing script to avoid duplicates
    const existingScript = document.getElementById('giscus-script');
    if (existingScript) {
      existingScript.remove();
      setIsLoaded(false);
    }

    // Add the Giscus script
    const script = document.createElement('script');
    script.id = 'giscus-script';
    script.src = 'https://giscus.app/client.js';
    script.async = true;

    // Set script attributes
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', strict);
    script.setAttribute('data-reactions-enabled', reactionsEnabled.toString());
    script.setAttribute('data-emit-metadata', emitMetadata.toString());
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-lang', lang);
    script.setAttribute('data-loading', loading);
    script.setAttribute('data-theme', giscusTheme);
    script.setAttribute('crossorigin', 'anonymous');
    
    // Handle script load event
    script.onload = () => {
      setIsLoaded(true);
    };

    // Add script to the document
    commentsRef.current?.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const script = document.getElementById('giscus-script');
      if (script) {
        script.remove();
      }
      setIsLoaded(false);
    };
  }, [repo, repoId, category, categoryId, mapping, reactionsEnabled, emitMetadata, inputPosition, lang, loading, giscusTheme, strict, theme]);

  // Update theme when it changes
  useEffect(() => {
    // Only send theme updates when using preferred_color_scheme or when no theme is specified
    if (theme === 'preferred_color_scheme' || !theme) {
      const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
      if (iframe) {
        iframe.contentWindow?.postMessage(
          { giscus: { setConfig: { theme: giscusTheme } } },
          'https://giscus.app'
        );
      }
    }
  }, [giscusTheme, theme]);

  return (
    <section className="mt-10 pt-5">
      <div className="giscus-wrapper relative min-h-[150px]">
        <div ref={commentsRef} className="giscus w-full"></div>
        
        {/* Loading indicator - will be hidden once Giscus loads */}
        {!isLoaded && (
          <div className="giscus-loading absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
              <p>Loading comments...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}