'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

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
}: GiscusProps) {
  const { resolvedTheme } = useTheme();
  const commentsRef = useRef<HTMLDivElement>(null);
  const giscusTheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    // Remove existing script to avoid duplicates
    const existingScript = document.getElementById('giscus-script');
    if (existingScript) {
      existingScript.remove();
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
    script.setAttribute('data-reactions-enabled', reactionsEnabled.toString());
    script.setAttribute('data-emit-metadata', emitMetadata.toString());
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-lang', lang);
    script.setAttribute('data-loading', loading);
    script.setAttribute('data-theme', giscusTheme);
    script.setAttribute('crossorigin', 'anonymous');

    // Add script to the document
    commentsRef.current?.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const script = document.getElementById('giscus-script');
      if (script) {
        script.remove();
      }
    };
  }, [repo, repoId, category, categoryId, mapping, reactionsEnabled, emitMetadata, inputPosition, lang, loading, giscusTheme]);

  // Update theme when it changes
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: giscusTheme } } },
        'https://giscus.app'
      );
    }
  }, [giscusTheme]);

  return (
    <section className="mt-10 pt-10">
      <div ref={commentsRef} className="giscus"></div>
    </section>
  );
}