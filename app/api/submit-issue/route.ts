import { db } from '@/db'; // Importing the database connection
import { issuesTable } from '@/db/schema'; // Importing the schema definition
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';
export async function GET(req: Request) {
  try {
    // Fetching the issues from the database
    const issues = await db.select().from(issuesTable);

    // Return the fetched issues
    return NextResponse.json({
      message: 'Issues retrieved successfully!',
      data: issues,
    });
  } catch (error) {
    console.error('Error fetching issues:', error);
    return NextResponse.json(
      { message: 'Failed to retrieve issues' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Assuming the body is JSON

    const { issueTitle, location, description, priority, contactName, contactEmail } = body;

    // Insert the data into the database
    const insertedIssue = await db.insert(issuesTable).values({
      issueTitle,
      location,
      description,
      priority,
      contactName,
      contactEmail,
    });

    // Return a success response
    return NextResponse.json({
      message: 'Issue submitted successfully!',
      data: insertedIssue,
    });
  } catch (error) {
    console.error('Error submitting issue:', error);
    return NextResponse.json(
      { message: 'Failed to submit issue' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json(); // Extracting ID from request body

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    // Delete the issue from the database
    await db.delete(issuesTable).where(eq(issuesTable.id, id));

    return NextResponse.json({
      message: 'Issue deleted successfully!',
    });
  } catch (error) {
    console.error('Error deleting issue:', error);
    return NextResponse.json(
      { message: 'Failed to delete issue' },
      { status: 500 }
    );
  }
}
