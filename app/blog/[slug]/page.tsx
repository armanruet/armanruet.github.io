import { getPostFromSlug, getBlogPosts } from '../utils.server';
import { MDXWrapper } from '../../components/mdx-wrapper';
import styles from './blog-post.module.css';
import CommentSection from '../../components/comments/comment-section';
import { format } from 'date-fns';
import { BiCalendar, BiTimeFive } from 'react-icons/bi';

// Required for static site generation with output: export
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Add metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { metadata } = await getPostFromSlug(params.slug);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

// Estimate reading time - can be moved to a utility function
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 238;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime);
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content, metadata, rawContent } = await getPostFromSlug(params.slug);
  const readingTime = calculateReadingTime(rawContent);

  return (
    <article className="mx-auto max-w-[900px] px-4 py-12">
      <header className="mb-8">
        <h1 className={`${styles.title} text-gray-900 dark:text-white`}>{metadata.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">{metadata.description}</p>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <BiCalendar size={16} />
            <time dateTime={metadata.date}>
              {format(new Date(metadata.date), 'MMMM d, yyyy')}
            </time>
          </div>
          
          <div className="flex items-center gap-1">
            <BiTimeFive size={16} />
            <span>{readingTime} min read</span>
          </div>
        </div>
        
        {metadata.tags && metadata.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {metadata.tags.map(tag => (
              <span 
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className={`${styles.content} bg-white dark:bg-black`}>
        <MDXWrapper content={content} />
      </div>
      
      <CommentSection title={metadata.title || 'Blog Post'} slug={params.slug} />
    </article>
  );
}
