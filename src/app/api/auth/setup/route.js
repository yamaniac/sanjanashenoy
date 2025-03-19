import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    console.log('Starting setup process...');
    await connectToDatabase();
    console.log('Connected to database');
    
    // Check if any users exist
    const existingUsers = await User.countDocuments();
    console.log(`Found ${existingUsers} existing users`);
    
    if (existingUsers > 0) {
      console.log('Setup already completed');
      return NextResponse.json(
        { success: false, message: 'Setup has already been completed' },
        { status: 400 }
      );
    }
    
    // Get admin user data
    const userData = await request.json();
    const { username, password, name } = userData;
    console.log(`Attempting to create user: ${username}`);
    
    // Validate data
    if (!username || !password || !name) {
      console.log('Missing required fields');
      return NextResponse.json(
        { success: false, message: 'Username, password, and name are required' },
        { status: 400 }
      );
    }
    
    // Create admin user
    const adminUser = await User.create({
      username,
      password,
      name,
      role: 'admin'
    });
    console.log(`User created successfully: ${adminUser._id}`);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Admin user created successfully',
        user: {
          id: adminUser._id,
          username: adminUser.username,
          name: adminUser.name,
          role: adminUser.role
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { success: false, message: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
} 