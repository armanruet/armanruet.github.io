import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { Options } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the pretty code options
const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Define the type for frontmatter
interface Frontmatter {
  title?: string;
  description?: string;
  date: string;
  tags?: string[];
  image?: string;
  [key: string]: any;
}

export interface BlogPost {
  slug: string;
  frontmatter: Frontmatter;
  readingTime: number;
}

interface PostData {
  content: MDXRemoteSerializeResult;
  metadata: Frontmatter;
}

function isValidDate(date: string) {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d.getTime());
}

export async function getMDXContent(source: string) {
  const { data: frontmatter, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      // @ts-expect-error - rehype-pretty-code has incompatible vfile versions
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
    parseFrontmatter: true,
  });

  return { content: mdxSource, frontmatter };
}

// Add this function to calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 238;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Posts directory not found: ${postsDirectory}`);
    return [];
  }

  const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
  
  const posts = files.map(fileName => {
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Calculate reading time based on the full content
    const readingTime = calculateReadingTime(content);
    
    const tags = Array.isArray(data.tags)
      ? data.tags
      : data.tags?.split(',').map((tag: string) => tag.trim()) || [];

    // Ensure date is valid
    const date = isValidDate(data.date) ? data.date : new Date().toISOString();
    
    return {
      slug,
      readingTime, // Add reading time to post data
      frontmatter: {
        ...data,
        date,
        tags
      } as Frontmatter
    };
  });

  return posts
    .filter(post => !post.frontmatter.draft)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });
}

export async function getPostFromSlug(slug: string): Promise<PostData & { rawContent: string, readingTime: number }> {
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  const source = fs.readFileSync(filePath, 'utf-8');
  const { data, content: rawContent } = matter(source);
  const { content, frontmatter } = await getMDXContent(source);

  // Calculate reading time based on the full content
  const readingTime = calculateReadingTime(rawContent);

  // Ensure date is valid
  const date = isValidDate(frontmatter.date) ? frontmatter.date : new Date().toISOString();

  return {
    content,
    metadata: {
      ...frontmatter,
      date
    },
    rawContent,
    readingTime
  };
}
