import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

/**
 * Middleware for protecting routes by verifying JWT tokens.
 * Redirects users to the login page if the token is missing or invalid.
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} The response object, either allowing the request to proceed or redirecting to the login page.
 */
export async function middleware(request: NextRequest): Promise<NextResponse> {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    console.log('No token found, redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await jwtVerify(token, secretKey);
    return NextResponse.next();
  } catch (e) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

/**
 * Configuration for the middleware, specifying which routes it should apply to.
 */
export const config = {
  matcher: ['/', '/home', '/preview', '/profile'],
};
