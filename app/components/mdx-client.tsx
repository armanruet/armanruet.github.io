'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-gray-900 dark:text-white" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4 text-gray-900 dark:text-white" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-xl font-bold tracking-tight mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="text-lg font-semibold tracking-tight mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-800 dark:text-gray-100" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 my-4 text-gray-800 dark:text-gray-100" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 my-4 text-gray-800 dark:text-gray-100" {...props} />
  ),
  li: (props: any) => (
    <li className="mt-2 text-gray-800 dark:text-gray-100" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-6 italic text-gray-800 dark:text-gray-100" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-100 font-mono text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto my-6 font-mono text-sm text-gray-800 dark:text-gray-100" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-gray-900 dark:text-white" {...props} />
  ),
  a: ({ href = '', ...props }: AnchorProps) => {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href}
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
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
  hr: () => <hr className="my-8 border-gray-200 dark:border-gray-800" />,
  table: (props: any) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-gray-800 dark:text-gray-100" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-100" {...props} />
  ),
};

interface MDXClientProps {
  content: MDXRemoteSerializeResult;
}

export function MDXClient({ content }: MDXClientProps) {
  return (
    <div className="mdx-content">
      <MDXRemote {...content} components={components} />
    </div>
  );
}
