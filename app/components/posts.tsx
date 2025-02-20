'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '../blog/utils.server';

interface BlogPostsProps {
  posts: BlogPost[];
}

function imagePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
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
            className="block aspect-[16/9] relative overflow-hidden"
          >
            {post.frontmatter.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={imagePath(post.frontmatter.image)}
                  alt={post.frontmatter.title || 'Blog post image'}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={posts.indexOf(post) < 6} // Prioritize loading first 6 images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800">
                <span className="text-gray-400">No image</span>
              </div>
            )}
          </Link>

          <div className="flex flex-col space-y-3 p-6 pt-2">
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-primary-500 transition-colors duration-200">
              <Link href={`/blog/${post.slug}`}>
                {post.frontmatter.title || 'Untitled Post'}
              </Link>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-base">
              {post.frontmatter.description}
            </p>

            <div className="flex items-center justify-between pt-2 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={post.frontmatter.date}>
                {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
              </time>
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
