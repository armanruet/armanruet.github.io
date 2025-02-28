import { v4 as uuidv4 } from 'uuid';

// Define constants
export const USER_ID_COOKIE = 'blog-user-id';

/**
 * Gets the user ID from localStorage, creating one if needed
 * This is the client-side implementation
 */
export function getUserId(): string {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return '';
  }

  try {
    // Check if a user ID already exists in localStorage
    let userId = localStorage.getItem(USER_ID_COOKIE);
    
    // If no user ID exists, create one and store it
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem(USER_ID_COOKIE, userId);
      
      // Also set a cookie for potential server-side access
      document.cookie = `${USER_ID_COOKIE}=${userId}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
    }
    
    return userId;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return '';
  }
}

/**
 * Sets the user ID cookie (client-side only)
 */
export function setUserIdCookie(userId: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(USER_ID_COOKIE, userId);
    document.cookie = `${USER_ID_COOKIE}=${userId}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
  } catch (error) {
    console.error('Error setting user ID cookie:', error);
  }
} 