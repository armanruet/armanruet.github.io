import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to our likes database JSON file
const likesDbPath = path.join(process.cwd(), 'data', 'likes.json');

// Helper function to ensure the likes database exists
function ensureLikesDb() {
  const dataDir = path.join(process.cwd(), 'data');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Create likes.json if it doesn't exist
  if (!fs.existsSync(likesDbPath)) {
    fs.writeFileSync(likesDbPath, JSON.stringify({}), 'utf8');
  }
}

// Helper to read likes from the database
function getLikes() {
  ensureLikesDb();
  try {
    const data = fs.readFileSync(likesDbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading likes database:', error);
    return {};
  }
}

// Helper to write likes to the database
function saveLikes(likes: Record<string, any>) {
  ensureLikesDb();
  try {
    fs.writeFileSync(likesDbPath, JSON.stringify(likes, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to likes database:', error);
  }
}

// GET handler to retrieve likes for a post
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const userId = searchParams.get('userId');
  
  if (!slug) {
    return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
  }
  
  const likes = getLikes();
  const postLikes = likes[slug] || { count: 0, users: [] };
  
  // If userId is provided, check if this user has liked the post
  if (userId) {
    const hasLiked = postLikes.users.includes(userId);
    return NextResponse.json({ 
      slug, 
      likes: postLikes.count,
      hasLiked 
    });
  }
  
  // Otherwise, just return the like count
  return NextResponse.json({ 
    slug, 
    likes: postLikes.count 
  });
}

// POST handler to add a like to a post
export async function POST(request: NextRequest) {
  const { slug, userId } = await request.json();
  
  if (!slug) {
    return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
  }
  
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }
  
  const likes = getLikes();
  
  // Initialize post data if it doesn't exist
  if (!likes[slug]) {
    likes[slug] = { count: 0, users: [] };
  }
  
  // Check if user has already liked the post
  if (likes[slug].users.includes(userId)) {
    return NextResponse.json({ 
      slug, 
      likes: likes[slug].count,
      hasLiked: true,
      message: 'User has already liked this post' 
    });
  }
  
  // Add like
  likes[slug].count += 1;
  likes[slug].users.push(userId);
  saveLikes(likes);
  
  return NextResponse.json({ 
    slug, 
    likes: likes[slug].count,
    hasLiked: true,
    message: 'Like added successfully' 
  });
}

// DELETE handler to remove a like from a post
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const userId = searchParams.get('userId');
  
  if (!slug || !userId) {
    return NextResponse.json({ error: 'Post slug and user ID are required' }, { status: 400 });
  }
  
  const likes = getLikes();
  
  // Check if post exists and user has liked it
  if (!likes[slug] || !likes[slug].users.includes(userId)) {
    return NextResponse.json({ 
      slug, 
      likes: likes[slug]?.count || 0,
      hasLiked: false,
      message: 'User has not liked this post' 
    });
  }
  
  // Remove like
  likes[slug].count = Math.max(0, likes[slug].count - 1);
  likes[slug].users = likes[slug].users.filter((id: string) => id !== userId);
  saveLikes(likes);
  
  return NextResponse.json({ 
    slug, 
    likes: likes[slug].count,
    hasLiked: false,
    message: 'Like removed successfully' 
  });
} 