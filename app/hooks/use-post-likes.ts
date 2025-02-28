import { useState, useEffect } from 'react';
import { getUserId } from '../lib/user-id';

interface UseLikesResult {
  likes: number;
  hasLiked: boolean;
  isLoading: boolean;
  handleLike: () => Promise<void>;
  error: string | null;
}

export function usePostLikes(slug: string): UseLikesResult {
  // Start with default values that match server-side rendering
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Changed to false initially to avoid hydration mismatch
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
  
  // Fetch likes data from the API
  const fetchLikes = async (id: string) => {
    try {
      // Fetch like count for this post
      const response = await fetch(`/api/likes?slug=${slug}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch likes');
      }
      
      const data = await response.json();
      setLikes(data.likes);
      
      // Check if this user has liked the post
      if (id) {
        const likesResponse = await fetch(`/api/likes?slug=${slug}&userId=${id}`);
        
        if (likesResponse.ok) {
          const userData = await likesResponse.json();
          setHasLiked(userData.hasLiked || false);
        }
      }
      
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
    if (isLoading || !userId) return;
    
    setIsLoading(true);
    
    try {
      // If user has already liked, remove the like
      if (hasLiked) {
        const response = await fetch(`/api/likes?slug=${slug}&userId=${userId}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to remove like');
        }
        
        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(false);
      } else {
        // Otherwise, add a like
        const response = await fetch('/api/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug, userId }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to add like');
        }
        
        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(true);
      }
      
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