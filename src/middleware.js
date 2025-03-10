import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get response
  const response = NextResponse.next();
  
  // Add X-Robots-Tag header
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  
  // You can add other headers as needed
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

// Match all request paths except for the ones starting with:
// - api (API routes)
// - _next/static (static files)
// - _next/image (image optimization files)
// - favicon.ico (favicon file)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 