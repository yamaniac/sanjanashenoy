import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET(request) {
  try {
    // Get optional slug parameter
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    
    console.log('MongoDB status check starting...');
    
    // Test database connection
    const mongoose = await connectToDatabase();
    const connectionStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    
    console.log(`MongoDB connection status: ${connectionStatus}`);
    
    // Get post count
    const postCount = await Post.countDocuments();
    console.log(`MongoDB post count: ${postCount}`);
    
    // Find a specific post if slug is provided
    let post = null;
    if (slug) {
      console.log(`Looking for post with slug: ${slug}`);
      post = await Post.findOne({ slug }).lean();
      
      if (post) {
        console.log(`Found post with title: ${post.title}`);
      } else {
        console.log(`No post found with slug: ${slug}`);
      }
    }
    
    // Get all post slugs
    const allPosts = await Post.find({}, { slug: 1, title: 1 }).lean();
    const slugs = allPosts.map(p => ({ slug: p.slug, title: p.title }));
    
    return NextResponse.json({
      success: true,
      database: {
        connectionStatus,
        postCount,
        post: post ? {
          id: post._id.toString(),
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt?.substring(0, 100) + '...',
          link: `/blog/${post.slug}`
        } : null,
        availableSlugs: slugs
      }
    });
  } catch (error) {
    console.error('MongoDB status check error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 