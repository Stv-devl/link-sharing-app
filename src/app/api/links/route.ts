import { NextResponse } from 'next/server';
import { clientPromise } from '../../../../lib/mongod';
import { ObjectId } from 'mongodb';
import { LinkDetail } from '@/types/types';

export async function PUT(request: Request): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db('link-sharing');
    const usersCollection = db.collection('users');

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
