'use client';

import { useState, useEffect } from 'react';
import { BiCommentDetail, BiLike } from 'react-icons/bi';

export interface CommentSectionProps {
  title: string;
  slug: string;
}

export default function CommentSection({ title, slug }: CommentSectionProps) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  
  // Handle like button click
  const handleLike = () => {
    if (!hasLiked) {
      // Increment likes and set hasLiked to true
      // In a real implementation, this would call an API to store the like
      setLikes(likes + 1);
      setHasLiked(true);
      
      // Store in localStorage to remember this user has liked this post
      localStorage.setItem(`liked-${slug}`, 'true');
      
      // You could also send an API request here to store the like in a database
    }
  };
  
  // Check if user has already liked this post (on client side)
  useEffect(() => {
    const hasAlreadyLiked = localStorage.getItem(`liked-${slug}`);
    if (hasAlreadyLiked) {
      setHasLiked(true);
    }
    
    // For demo purposes only - simulate some random likes
    // In a real implementation, you would fetch this from an API
    setLikes(Math.floor(Math.random() * 50));
  }, [slug]);

  return (
    <div className="mt-16">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={handleLike}
            disabled={hasLiked}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors
              ${hasLiked 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            <BiLike size={18} className={hasLiked ? 'text-blue-600 dark:text-blue-400' : ''} />
            <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          </button>
          
          <a 
            href="#comments" 
            className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <BiCommentDetail size={18} />
            <span>Comments</span>
          </a>
        </div>
        
        <div className="flex gap-2">
          <ShareButton platform="twitter" title={title} />
          <ShareButton platform="linkedin" title={title} />
          <ShareButton platform="facebook" title={title} />
        </div>
      </div>
      
      <div id="comments">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Comments</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Comments are coming soon! Check back later for updates.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            In the meantime, feel free to share this article using the social buttons above.
          </p>
        </div>
      </div>
    </div>
  );
}

interface ShareButtonProps {
  platform: 'twitter' | 'linkedin' | 'facebook';
  title: string;
}

function ShareButton({ platform, title }: ShareButtonProps) {
  // Use a useEffect hook to manage URL access
  const [url, setUrl] = useState('');
  
  // Only access window object in useEffect to avoid SSR issues
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  
  const getShareUrl = () => {
    if (!url) return '#'; // Fallback if URL isn't available yet
    
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      default:
        return '#';
    }
  };
  
  // Define platform colors with standard Tailwind classes to avoid custom class issues
  const getPlatformColor = () => {
    switch (platform) {
      case 'twitter':
        return 'bg-blue-400 hover:bg-blue-500';
      case 'linkedin':
        return 'bg-blue-700 hover:bg-blue-800';
      case 'facebook':
        return 'bg-blue-600 hover:bg-blue-700';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };
  
  const getIcon = () => {
    switch (platform) {
      case 'twitter':
        return 'X';
      case 'linkedin':
        return 'in';
      case 'facebook':
        return 'f';
      default:
        return '';
    }
  };
  
  return (
    <a
      href={getShareUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${getPlatformColor()}`}
      aria-label={`Share on ${platform}`}
    >
      <span className="text-sm font-bold">{getIcon()}</span>
    </a>
  );
}