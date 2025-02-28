import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

const USER_ID_COOKIE = 'blog-user-id';

/**
 * Gets the user ID from cookies or generates a new one
 * Client-side version that uses localStorage
 */
export function getUserId(): string {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    // Return an empty string or generate a temporary ID if on server
    return '';
  }

  try {
    // Try to get the user ID from localStorage
    let userId = localStorage.getItem(USER_ID_COOKIE);
    
    // If no user ID exists, generate a new one
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem(USER_ID_COOKIE, userId);
      
      // Also set as a cookie for server-side access
      document.cookie = `${USER_ID_COOKIE}=${userId}; path=/; max-age=31536000; SameSite=Lax`;
    }
    
    return userId;
  } catch (error) {
    // In case of any errors (e.g., localStorage blocked), return empty string
    console.error('Error accessing localStorage:', error);
    return '';
  }
}

/**
 * Server-side function to get or create a user ID
 * This uses the cookies() function from next/headers
 */
export function getUserIdServer(): string {
  try {
    const cookieStore = cookies();
    const userId = cookieStore.get(USER_ID_COOKIE)?.value;
    
    // For server-side, we can only read the cookie, not set it
    return userId || '';
  } catch (error) {
    // In case of any errors with the cookies API
    console.error('Error accessing cookies:', error);
    return '';
  }
}

/**
 * Sets the user ID cookie on the client side
 * Useful when we need to ensure the cookie is set after a server action
 */
export function setUserIdCookie(userId: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    // Store in localStorage for persistence
    localStorage.setItem(USER_ID_COOKIE, userId);
    
    // Also set as a cookie for server-side access
    document.cookie = `${USER_ID_COOKIE}=${userId}; path=/; max-age=31536000; SameSite=Lax`;
  } catch (error) {
    console.error('Error setting user ID cookie:', error);
  }
} 