import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { clientPromise } from '../../../../lib/mongod';

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY as string);

/**
 * Handles POST requests for user authentication.
 * Validates the provided email and password against the MongoDB database, generates a JWT if valid, and sets it in a cookie.
 * @param {Request} request - The incoming HTTP request object containing the user's email and password.
 * @returns {Promise<NextResponse>} A response containing the authentication status, and in case of success, a JWT and user ID.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, password } = await request.json();
    const client = await clientPromise;
    const db = client.db('link-sharing');
    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ 'credentials.email': email });

    if (user && (await bcrypt.compare(password, user.credentials.password))) {
      const token = await new SignJWT({ email, userId: user._id })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1h')
        .sign(secretKey);

      const response = NextResponse.json(
        { message: 'Authentication successful', token, userId: user._id },
        { status: 200 }
      );

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: 'strict',
      });

      response.cookies.set('userId', user._id.toString(), {
        httpOnly: false,
        secure: true,
        path: '/',
        sameSite: 'strict',
      });

      return response;
    } else {
      return NextResponse.json(
        { message: 'Authentication failed' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
