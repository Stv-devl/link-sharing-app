import { NextResponse } from 'next/server';
import { clientPromise } from '../../../../lib/mongod';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import { initialSignUpState } from '../../../constantes/constantes';
import { LinkDetail } from '@/types/types';

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

export async function PUT(request: Request): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);

    const { userId, links } = await request.json();

    if (!ObjectId.isValid(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }
    const objectId = new ObjectId(userId);
    const user = await usersCollection.findOne({ _id: objectId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updatedLinks = links.map((link: LinkDetail) => {
      console.log('link', link);

      const existingLink = user.links.find(
        (l: LinkDetail) => l.key === link.key
      );
      if (existingLink) {
        return { ...existingLink, ...link };
      } else {
        return link;
      }
    });
    const updateResult = await usersCollection.updateOne(
      { _id: objectId },
      { $set: { links: updatedLinks } }
    );

    if (updateResult.modifiedCount === 0) {
      return NextResponse.json({ error: 'No changes made' }, { status: 304 });
    }

    return NextResponse.json(
      { message: 'Links updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing PUT request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
