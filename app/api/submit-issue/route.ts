import { db } from '@/db'; // Importing the database connection
import { issuesTable } from '@/db/schema'; // Importing the schema definition
import { NextResponse } from 'next/server';

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
