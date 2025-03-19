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

// GET a single post by slug
export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    // First, check if post exists in MongoDB
    await connectToDatabase();
    const post = await Post.findOne({ slug });
    
    if (post) {
      return NextResponse.json({ 
        success: true, 
        post: { 
          ...post.toObject(), 
          isMdFile: false 
        } 
      });
    }
    
    // If not in DB, check markdown files
    const mdFilePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    
    try {
      const fileContents = await fs.readFile(mdFilePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return NextResponse.json({ 
        success: true, 
        post: { 
          ...data,
          slug,
          content,
          isMdFile: true,
          mdFilePath: `${slug}.md`
        } 
      });
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Post not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

// PUT to update a post (requires authentication)
export async function PUT(request, { params }) {
  try {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { slug } = params;
    const updateData = await request.json();
    
    // Connect to MongoDB
    await connectToDatabase();
    
    // Check if post exists in MongoDB
    const post = await Post.findOne({ slug });
    
    if (post) {
      // Update MongoDB post
      const updatedPost = await Post.findOneAndUpdate(
        { slug },
        { 
          ...updateData,
          lastUpdated: new Date()
        },
        { new: true }
      );
      
      return NextResponse.json({ 
        success: true, 
        post: updatedPost 
      });
    }
    
    // If not in DB, check if it's a markdown file
    const mdFilePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    
    try {
      await fs.access(mdFilePath);
      
      // If it's a markdown file, create a new MongoDB entry from it
      const fileContents = await fs.readFile(mdFilePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Create new MongoDB post based on the markdown file
      const newPost = await Post.create({
        ...data,
        ...updateData,
        slug,
        content,
        lastUpdated: new Date(),
        isMdFile: true,
        mdFilePath: `${slug}.md`
      });
      
      return NextResponse.json({ 
        success: true, 
        post: newPost,
        message: 'Created new DB entry from markdown file'
      });
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Post not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

// DELETE a post (requires authentication)
export async function DELETE(request, { params }) {
  try {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { slug } = params;
    
    // Connect to MongoDB
    await connectToDatabase();
    
    // Check if post exists in MongoDB
    const post = await Post.findOne({ slug });
    
    if (post) {
      // Delete from MongoDB
      await Post.deleteOne({ slug });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Post deleted successfully' 
      });
    }
    
    // If not in DB, return error - we don't delete markdown files for safety
    return NextResponse.json(
      { 
        success: false, 
        message: 'Post not found in database or cannot delete markdown files directly' 
      },
      { status: 404 }
    );
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 