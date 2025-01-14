'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  a: ({ href = '', ...props }: AnchorProps) => {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href}
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        {...props}
      />
    );
  },
  img: ({ src, alt, ...props }: any) => (
    <div className="relative aspect-video my-8">
      {src && (
        <Image
          src={src}
          alt={alt || ''}
          fill
          className="object-cover rounded-lg"
          {...props}
        />
      )}
    </div>
  ),
};

interface MDXContentProps {
  source: any; // We'll accept any for now since we're using RSC
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="mdx-content prose dark:prose-invert">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
