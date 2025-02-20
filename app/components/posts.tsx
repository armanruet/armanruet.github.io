'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '../blog/utils.server';
import { BiTime } from 'react-icons/bi';

interface BlogPostsProps {
  posts: BlogPost[];
}

function imagePath(path: string) {
  if (path.startsWith('http')) return path;
  // Remove leading slash if exists and prepend /static/blog/
  return `/static/blog/${path.replace(/^\//, '')}`;
}

// Tag color mapping for consistent colors
const tagColorMap: { [key: string]: string } = {
  AI: 'from-blue-500/20 to-blue-600/20 text-blue-700 dark:from-blue-500/10 dark:to-blue-400/10 dark:text-blue-400',
  WEATHER: 'from-sky-500/20 to-sky-600/20 text-sky-700 dark:from-sky-500/10 dark:to-sky-400/10 dark:text-sky-400',
  TECHNOLOGY: 'from-indigo-500/20 to-indigo-600/20 text-indigo-700 dark:from-indigo-500/10 dark:to-indigo-400/10 dark:text-indigo-400',
  GOOGLE: 'from-red-500/20 to-red-600/20 text-red-700 dark:from-red-500/10 dark:to-red-400/10 dark:text-red-400',
  JAVASCRIPT: 'from-yellow-500/20 to-yellow-600/20 text-yellow-700 dark:from-yellow-500/10 dark:to-yellow-400/10 dark:text-yellow-400',
  PROGRAMMING: 'from-green-500/20 to-green-600/20 text-green-700 dark:from-green-500/10 dark:to-green-400/10 dark:text-green-400',
  markdown: 'from-purple-500/20 to-purple-600/20 text-purple-700 dark:from-purple-500/10 dark:to-purple-400/10 dark:text-purple-400',
  productivity: 'from-pink-500/20 to-pink-600/20 text-pink-700 dark:from-pink-500/10 dark:to-pink-400/10 dark:text-pink-400',
  programming: 'from-emerald-500/20 to-emerald-600/20 text-emerald-700 dark:from-emerald-500/10 dark:to-emerald-400/10 dark:text-emerald-400',
  openai: 'from-teal-500/20 to-teal-600/20 text-teal-700 dark:from-teal-500/10 dark:to-teal-400/10 dark:text-teal-400',
  microsoft: 'from-cyan-500/20 to-cyan-600/20 text-cyan-700 dark:from-cyan-500/10 dark:to-cyan-400/10 dark:text-cyan-400',
  'Personal Growth': 'from-violet-500/20 to-violet-600/20 text-violet-700 dark:from-violet-500/10 dark:to-violet-400/10 dark:text-violet-400',
  'software-development': 'from-fuchsia-500/20 to-fuchsia-600/20 text-fuchsia-700 dark:from-fuchsia-500/10 dark:to-fuchsia-400/10 dark:text-fuchsia-400',
  'artificial-intelligence': 'from-rose-500/20 to-rose-600/20 text-rose-700 dark:from-rose-500/10 dark:to-rose-400/10 dark:text-rose-400',
  'Personal Development': 'from-amber-500/20 to-amber-600/20 text-amber-700 dark:from-amber-500/10 dark:to-amber-400/10 dark:text-amber-400'
};

function getTagColor(tag: string): string {
  return tagColorMap[tag] || 'from-gray-500/20 to-gray-600/20 text-gray-700 dark:from-gray-500/10 dark:to-gray-400/10 dark:text-gray-400';
}

function calculateReadingTime(post: BlogPost): number {
  // Standard average reading speed (words per minute)
  const wordsPerMinute = 238;
  
  // Get text from description
  const text = post.frontmatter.description || '';
  
  // Count words (split by whitespace and filter out empty strings)
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  
  // Calculate reading time and round to nearest minute
  const minutes = Math.round(words / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, minutes);
}

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group relative flex flex-col space-y-4 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary-500/10"
        >
          <Link 
            href={`/blog/${post.slug}`} 
            className="block aspect-[16/9] relative overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            {post.frontmatter.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={imagePath(post.frontmatter.image)}
                  alt={post.frontmatter.title || 'Blog post image'}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={posts.indexOf(post) < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <svg 
                  className="w-12 h-12 text-gray-300 dark:text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            )}
          </Link>

          <div className="flex flex-col space-y-3 p-6 pt-2">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-primary-500 transition-colors duration-200">
              <Link href={`/blog/${post.slug}`}>
                {post.frontmatter.title || 'Untitled Post'}
              </Link>
            </h2>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-3">
              {post.frontmatter.description}
            </p>

            <div className="flex items-center justify-between pt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <time dateTime={post.frontmatter.date}>
                  {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
                </time>
                <span className="flex items-center">
                  <BiTime className="inline-block mr-1" />
                  {calculateReadingTime(post)} min read
                </span>
              </div>
              <span className="text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-200">
                Read more →
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
