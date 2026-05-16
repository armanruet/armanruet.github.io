'use client';

import { useState } from 'react';
import { BlogPost } from '../../blog/utils.server';
import TagsList from './TagsList';
import { BlogPosts } from '../posts';

interface BlogContentProps {
  posts: BlogPost[];
  tagCounts: { [key: string]: number };
}

export default function BlogContent({ posts, tagCounts }: BlogContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const formattedTags = Object.entries(tagCounts).map(([name, count]) => ({
    name,
    count,
  }));

  // Filter posts based on selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.frontmatter.tags?.includes(selectedTag))
    : posts;

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Content (Blog Posts) */}
        <div className="flex-1 lg:w-3/4">
          <BlogPosts posts={filteredPosts} />
        </div>

        {/* Sidebar (Filters) */}
        <div className="w-full lg:w-1/4 lg:shrink-0">
          <div className="sticky top-24">
            <TagsList 
              tags={formattedTags} 
              selectedTag={selectedTag} 
              onTagSelect={handleTagSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
