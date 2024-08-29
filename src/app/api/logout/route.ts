import { NextResponse } from 'next/server';

/**
 * Handles POST requests to log out a user.
 * Clears the authentication token by setting its cookie with a negative `maxAge`, effectively deleting it.
 * @returns {NextResponse} A response confirming that the user has been logged out.
 */
export async function POST(): Promise<NextResponse> {
  const response = NextResponse.json({ message: 'Logged out' });
  response.cookies.set('token', '', {
    maxAge: -1,
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'strict',
  });

  return response;
}
