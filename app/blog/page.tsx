import { getBlogPosts } from './utils.server';
import BlogContent from '../components/blog/BlogContent';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const tagCounts: { [key: string]: number } = {};
  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return <BlogContent posts={posts} tagCounts={tagCounts} />;
}

export const metadata = {
  title: 'Blog',
  description: 'Technical articles on software development, AI, and professional growth',
};
