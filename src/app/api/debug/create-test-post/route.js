import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Post from '@/models/Post';

// This is a debug endpoint - remove in production
export async function GET() {
  try {
    console.log('Create test post: Connecting to database...');
    await connectToDatabase();
    
    // Create a unique slug with timestamp
    const timestamp = Date.now();
    const slug = `test-post-${timestamp}`;
    
    // Create test post
    const testPost = {
      title: `Test Post ${timestamp}`,
      slug: slug,
      date: new Date(),
      excerpt: 'This is a test post created via API to verify MongoDB connectivity.',
      content: `<h1>Test Post</h1><p>This is a test post created at ${new Date().toISOString()}.</p>`,
      category: 'Test',
      tags: ['test', 'api', 'mongodb'],
      image: '/default-blog-image.jpg',
      author: 'Test User'
    };
    
    console.log(`Creating test post with slug: ${slug}`);
    const post = await Post.create(testPost);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test post created successfully',
      post: {
        id: post._id.toString(),
        title: post.title,
        slug: post.slug,
        link: `/blog/${post.slug}`
      }
    });
  } catch (error) {
    console.error('Create test post error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
} 