import { useState, useEffect } from 'react';
import { getUserId } from '../lib/user-id';

interface UseLikesResult {
  likes: number;
  hasLiked: boolean;
  isLoading: boolean;
  handleLike: () => Promise<void>;
  error: string | null;
}

// Storage key for likes in localStorage
const LIKES_STORAGE_KEY = 'blog-likes';

// Define a likes data structure
interface LikesData {
  [slug: string]: {
    count: number;
    users: string[];
  };
}

// Helper to read likes from localStorage
function getLikesFromStorage(): LikesData {
  if (typeof window === 'undefined') return {};
  
  try {
    const likesData = localStorage.getItem(LIKES_STORAGE_KEY);
    return likesData ? JSON.parse(likesData) : {};
  } catch (error) {
    console.error('Error reading likes from localStorage:', error);
    return {};
  }
}

// Helper to save likes to localStorage
function saveLikesToStorage(likes: LikesData): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likes));
  } catch (error) {
    console.error('Error saving likes to localStorage:', error);
  }
}

export function usePostLikes(slug: string): UseLikesResult {
  // Start with default values that match server-side rendering
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  // Only run client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize userId and check if user has liked the post - only runs on client
  useEffect(() => {
    // Skip the effect during SSR
    if (!isMounted) return;

    const initializeUser = async () => {
      try {
        setIsLoading(true);
        const id = getUserId();
        setUserId(id);
        
        // Fetch current likes
        await fetchLikes(id);
      } catch (error) {
        console.error('Error initializing user:', error);
        setError('Failed to initialize user');
        setIsLoading(false);
      }
    };
    
    initializeUser();
  }, [slug, isMounted]);
  
  // Fetch likes data from localStorage
  const fetchLikes = async (id: string) => {
    try {
      if (typeof window === 'undefined') return;
      
      const allLikes = getLikesFromStorage();
      const postLikes = allLikes[slug] || { count: 0, users: [] };
      
      setLikes(postLikes.count);
      setHasLiked(id ? postLikes.users.includes(id) : false);
      setError(null);
    } catch (error) {
      console.error('Error fetching likes:', error);
      setError('Failed to fetch likes');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle like button click
  const handleLike = async () => {
    if (isLoading || !userId || typeof window === 'undefined') return;
    
    setIsLoading(true);
    
    try {
      const allLikes = getLikesFromStorage();
      
      // Initialize post data if it doesn't exist
      if (!allLikes[slug]) {
        allLikes[slug] = { count: 0, users: [] };
      }
      
      // If user has already liked, remove the like
      if (hasLiked) {
        allLikes[slug].count = Math.max(0, allLikes[slug].count - 1);
        allLikes[slug].users = allLikes[slug].users.filter(id => id !== userId);
        setLikes(allLikes[slug].count);
        setHasLiked(false);
      } else {
        // Otherwise, add a like
        allLikes[slug].count += 1;
        allLikes[slug].users.push(userId);
        setLikes(allLikes[slug].count);
        setHasLiked(true);
      }
      
      // Save updated likes to localStorage
      saveLikesToStorage(allLikes);
      setError(null);
    } catch (error) {
      console.error('Error handling like:', error);
      setError('Failed to update like');
    } finally {
      setIsLoading(false);
    }
  };
  
  return { likes, hasLiked, isLoading, handleLike, error };
} 