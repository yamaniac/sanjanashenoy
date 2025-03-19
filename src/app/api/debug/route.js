import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET() {
  try {
    console.log('Debug endpoint: Connecting to database...');
    await connectToDatabase();
    
    console.log('Debug endpoint: Fetching all posts from MongoDB...');
    const posts = await Post.find().lean();
    
    console.log(`Debug endpoint: Found ${posts.length} posts in database`);
    
    return NextResponse.json({ 
      success: true, 
      count: posts.length, 
      posts: posts.map(post => ({
        id: post._id.toString(),
        title: post.title,
        slug: post.slug,
        date: post.date,
        excerpt: post.excerpt?.substring(0, 100) + '...',
      }))
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
} 