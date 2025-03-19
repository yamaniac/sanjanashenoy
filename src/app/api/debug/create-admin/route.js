import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

// This is a debug endpoint - remove in production
export async function GET() {
  try {
    console.log('Debug: Creating admin user directly');
    await connectToDatabase();
    
    // Check if any users exist
    const existingUsers = await User.countDocuments();
    console.log(`Debug: Found ${existingUsers} existing users`);
    
    // Create default credentials for testing
    const username = 'admin';
    const password = 'admin123';
    const name = 'Admin User';
    
    // Check if this user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Debug: Admin user already exists, updating password');
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      // Update user
      await User.findByIdAndUpdate(existingUser._id, {
        password: hashedPassword
      });
      
      return NextResponse.json({
        success: true,
        message: 'Admin user password updated',
        username,
        password
      });
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user directly (skip model pre-save hooks)
    const adminUser = await User.create({
      username,
      password: hashedPassword,
      name,
      role: 'admin'
    });
    
    console.log(`Debug: Admin user created: ${adminUser._id}`);
    
    return NextResponse.json({
      success: true,
      message: 'Admin user created',
      username,
      password
    });
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json(
      { success: false, message: `Error: ${error.message}` },
      { status: 500 }
    );
  }
} 