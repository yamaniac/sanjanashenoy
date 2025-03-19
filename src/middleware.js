import { NextResponse } from 'next/server';

export function middleware(request) {
  // Only apply middleware to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip token verification for login and setup pages
    if (request.nextUrl.pathname === '/admin/login' || 
        request.nextUrl.pathname === '/admin/setup' ||
        request.nextUrl.pathname.startsWith('/api/')) {
      // Just add headers and continue
      const response = NextResponse.next();
      // Add X-Robots-Tag header
      response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      return response;
    }
    
    // Check if auth_token cookie exists (we won't verify it here - that will happen in the API routes)
    const hasAuthToken = !!request.cookies.get('auth_token')?.value;
    
    // If no token, redirect to login
    if (!hasAuthToken) {
      console.log('No auth token found, redirecting to login');
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  // Get response for all routes
  const response = NextResponse.next();
  
  // Add X-Robots-Tag header
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  
  // You can add other headers as needed
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

// Configure routes that should be checked
export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt).*)',
  ],
}; 