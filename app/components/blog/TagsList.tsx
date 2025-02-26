'use client';

interface Tag {
  name: string;
  count: number;
}

interface TagsListProps {
  tags: Tag[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagsList({ tags, selectedTag, onTagSelect }: TagsListProps) {
  // Sort tags by count (most popular first)
  const sortedTags = [...tags].sort((a, b) => b.count - a.count);
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Filter by Topic</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTagSelect(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
            ${
              selectedTag === null
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
        >
          All
        </button>
        
        {sortedTags.map(({ name, count }) => (
          <button
            key={name}
            onClick={() => onTagSelect(name === selectedTag ? null : name)}
            className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
              ${
                name === selectedTag
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            {name} ({count})
          </button>
        ))}
      </div>
    </div>
  );
}
