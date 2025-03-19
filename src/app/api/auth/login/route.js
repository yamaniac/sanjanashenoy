import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';

export async function POST(request) {
  try {
    console.log('Starting login process...');
    await connectToDatabase();
    console.log('Connected to database');
    
    const loginData = await request.json();
    const { username, password } = loginData;
    console.log(`Login attempt for user: ${username}`);

    // Validate inputs
    if (!username || !password) {
      console.log('Username or password missing');
      return NextResponse.json(
        { success: false, message: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Find user and include password for comparison
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      console.log(`User not found: ${username}`);
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    console.log(`User found: ${user._id}`);

    // Check if password matches
    console.log('Comparing password...');
    const isMatch = await user.comparePassword(password);
    console.log(`Password match: ${isMatch}`);
    
    if (!isMatch) {
      console.log('Password does not match');
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    console.log('Generating token...');
    const token = generateToken(user);
    console.log('Token generated successfully');

    // Create response with auth token cookie
    const response = NextResponse.json(
      { 
        success: true, 
        user: {
          id: user._id,
          username: user.username,
          name: user.name,
          role: user.role
        }
      },
      { status: 200 }
    );

    // Set auth token as HTTP-only cookie
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/'
    });
    
    console.log('Login successful');
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
} 