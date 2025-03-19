import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import connectToDatabase from '@/lib/mongodb';
import Post from '@/models/Post';
import { getAuthUser } from '@/lib/auth';

// Helper to check if user is authenticated
const isAuthenticated = () => {
  const user = getAuthUser();
  return !!user;
};

// GET all posts (combination of DB posts and MD files)
export async function GET() {
  try {
    console.log('GET /api/posts: Starting to fetch posts');
    await connectToDatabase();
    console.log('GET /api/posts: Connected to database');
    
    // Get posts from MongoDB
    const dbPosts = await Post.find().sort({ date: -1 });
    console.log(`GET /api/posts: Fetched ${dbPosts.length} posts from database`);
    
    // Get posts from Markdown files
    const postsDirectory = path.join(process.cwd(), 'posts');
    let mdPosts = [];
    
    try {
      const files = await fs.readdir(postsDirectory);
      console.log(`GET /api/posts: Found ${files.length} files in posts directory`);
      
      // Process markdown files
      for (const fileName of files) {
        const filePath = path.join(postsDirectory, fileName);
        const stat = await fs.stat(filePath);
        
        if (!stat.isDirectory() && fileName.endsWith('.md')) {
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContents);
          const slug = fileName.replace(/\.md$/, '');
          
          mdPosts.push({
            ...data,
            slug,
            isMdFile: true,
            mdFilePath: fileName
          });
        }
      }
      console.log(`GET /api/posts: Processed ${mdPosts.length} markdown posts`);
    } catch (error) {
      console.error('Error reading markdown files:', error);
    }
    
    // Convert DB posts to the same format as MD posts
    const formattedDbPosts = dbPosts.map(post => ({
      ...post.toObject(),
      slug: post.slug,
      isMdFile: false
    }));
    console.log(`GET /api/posts: Formatted ${formattedDbPosts.length} DB posts`);
    
    // Combine and sort all posts by date
    const allPosts = [...formattedDbPosts, ...mdPosts].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(`GET /api/posts: Returning ${allPosts.length} total posts`);
    
    return NextResponse.json({ success: true, posts: allPosts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

// POST a new blog post (requires authentication)
export async function POST(request) {
  try {
    console.log('POST /api/posts: Starting to create a new post');
    // Check if user is authenticated
    if (!isAuthenticated()) {
      console.log('POST /api/posts: Unauthorized attempt');
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await connectToDatabase();
    console.log('POST /api/posts: Connected to database');
    const postData = await request.json();
    
    // Validate required fields
    if (!postData.title || !postData.content || !postData.slug) {
      console.log('POST /api/posts: Missing required fields');
      return NextResponse.json(
        { success: false, message: 'Title, content, and slug are required' },
        { status: 400 }
      );
    }
    
    // Check if slug is already in use (in both DB and MD files)
    const existingPost = await Post.findOne({ slug: postData.slug });
    
    if (existingPost) {
      console.log(`POST /api/posts: Slug "${postData.slug}" already exists in DB`);
      return NextResponse.json(
        { success: false, message: 'Slug already exists' },
        { status: 400 }
      );
    }
    
    // Check if slug exists as an MD file
    const mdFilePath = path.join(process.cwd(), 'posts', `${postData.slug}.md`);
    try {
      await fs.access(mdFilePath);
      console.log(`POST /api/posts: Slug "${postData.slug}" already exists as a markdown file`);
      return NextResponse.json(
        { success: false, message: 'Slug already exists as a markdown file' },
        { status: 400 }
      );
    } catch (error) {
      // File doesn't exist, so we can proceed
    }
    
    // Create new post
    const newPost = await Post.create(postData);
    console.log(`POST /api/posts: Created new post with id ${newPost._id}`);
    
    return NextResponse.json(
      { success: true, post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { success: false, message: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
} 