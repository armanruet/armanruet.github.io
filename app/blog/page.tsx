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

  return (
    <div className="pb-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Blog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Technical articles on software development, AI, and professional growth.
      </p>
      <BlogContent posts={posts} tagCounts={tagCounts} />
    </div>
  );
}

export const metadata = {
  title: 'Blog',
  description: 'Technical articles on software development, AI, and professional growth',
};
