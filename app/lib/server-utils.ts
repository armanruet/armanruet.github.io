import { cookies } from 'next/headers';

// Define constants
export const USER_ID_COOKIE = 'blog-user-id';

/**
 * Gets the user ID from cookies (server-side only)
 */
export function getUserIdServer(): string {
  try {
    // This function can only be used in Server Components
    const cookieStore = cookies();
    return cookieStore.get(USER_ID_COOKIE)?.value || '';
  } catch (error) {
    console.error('Error getting user ID from cookies:', error);
    return '';
  }
} 