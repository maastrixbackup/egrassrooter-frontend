import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = false; // Replace with your actual authentication logic

  console.log('Middleware triggered');
  console.log('Request URL:', request.url);
  console.log('Is Authenticated:', isAuthenticated);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'], // Apply to /dashboard and subpaths
};
