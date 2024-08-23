import { NextResponse } from 'next/server';
import { clientPromise } from '../../../../lib/mongod';
import bcrypt from 'bcryptjs';
import { initialSignUpState } from '@/src/store/state';

const saltRounds = 10;
const dbName = 'link-sharing';
const collectionName = 'users';

/**
 * Handles GET requests to retrieve the list of users.
 * @returns {NextResponse} A response containing the list of users in JSON format.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);
    const users = await usersCollection.find().toArray();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error processing GET request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/**
 * Handles POST requests to add a new user to the list.
 * The new user is added to the MongoDB collection.
 * @param {Request} request - The incoming HTTP request object containing the new user data.
 * @returns {NextResponse} A response confirming the creation of the new user with a status of 201.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const newUser = await request.json();
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    const userDocument = {
      ...initialSignUpState,
      credentials: {
        email: newUser.email,
        password: hashedPassword,
      },
    };
    const result = await usersCollection.insertOne(userDocument);
    return NextResponse.json(
      { _id: result.insertedId, ...userDocument },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
