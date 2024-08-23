import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

/**
 * Handles GET requests to verify the authentication status of a user.
 * Checks the JWT token in the cookies, verifies it, and responds with the authentication status.
 * @param {NextRequest} request - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A response indicating whether the user is authenticated.
 */

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    await jwtVerify(token, secretKey);
    return NextResponse.json({ message: 'Authenticated' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}
