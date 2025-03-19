import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_fallback';

console.log('JWT_SECRET length:', JWT_SECRET?.length);
console.log('JWT_SECRET first few chars:', JWT_SECRET?.substring(0, 3) + '...');

export function generateToken(user) {
  console.log('Generating token for user:', user._id);
  console.log('Using JWT_SECRET:', JWT_SECRET?.substring(0, 3) + '...');
  
  try {
    const token = jwt.sign(
      { 
        id: user._id, 
        username: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    console.log('Token generated successfully, length:', token?.length);
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw error;
  }
}

export function verifyToken(token) {
  try {
    console.log('Verifying token, length:', token?.length);
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Token verified successfully for user:', decoded?.id);
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function getAuthUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token')?.value;
  
  console.log('Getting auth user, token exists:', !!token);
  
  if (!token) return null;
  
  return verifyToken(token);
}

export function requireAuth(handler) {
  return async (req, res) => {
    try {
      const user = getAuthUser();
      
      if (!user) {
        console.log('Auth required but no user found');
        return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
      }
      
      console.log('Auth successful for user:', user.id);
      return handler(req, user);
    } catch (error) {
      console.error('Auth error:', error);
      return Response.json({ success: false, message: error.message }, { status: 500 });
    }
  };
}

export function requireAdmin(handler) {
  return async (req, res) => {
    try {
      const user = getAuthUser();
      
      if (!user) {
        console.log('Admin auth required but no user found');
        return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
      }
      
      if (user.role !== 'admin') {
        console.log('User not admin, role:', user.role);
        return Response.json({ success: false, message: 'Access denied' }, { status: 403 });
      }
      
      console.log('Admin auth successful for user:', user.id);
      return handler(req, user);
    } catch (error) {
      console.error('Admin auth error:', error);
      return Response.json({ success: false, message: error.message }, { status: 500 });
    }
  };
} 