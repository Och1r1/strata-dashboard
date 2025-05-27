import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Handle preflight OPTIONS (for CORS)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// ✅ POST - Receive issue submission and forward to Replit
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const replitResponse = await fetch(
      'https://your-replit-url.replit.dev/submit_request.php',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    const responseText = await replitResponse.text();
    if (!replitResponse.ok) {
      throw new Error(`Replit error: ${responseText}`);
    }

    return NextResponse.json({ message: 'Issue submitted successfully!' });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('POST error:', err.message);
    return NextResponse.json({ message: 'Failed to submit issue' }, { status: 500 });
  }
}

// ✅ GET - Fetch issues from Supabase
export async function GET() {
  try {
    const supabaseResponse = await fetch('https://2a6115a6-15f0-45fe-8fcb-921a5c3d92a4-00-ebruw8jg02ip.janeway.replit.dev/fetch_issues.php');
    const json = await supabaseResponse.json();

    return NextResponse.json({ data: json }); // your frontend expects `data`
  } catch (error: unknown) {
    const err = error as Error;
    console.error('GET error:', err.message);
    return NextResponse.json({ message: 'Failed to fetch issues' }, { status: 500 });
  }
}

// ✅ DELETE - Forward delete to PHP backend
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    const replitResponse = await fetch(
      'https://2a6115a6-15f0-45fe-8fcb-921a5c3d92a4-00-ebruw8jg02ip.janeway.replit.dev/delete_request.php',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      }
    );

    const responseText = await replitResponse.text();
    if (!replitResponse.ok) {
      throw new Error(`Delete failed: ${responseText}`);
    }

    return NextResponse.json({ message: 'Request deleted successfully' });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('DELETE error:', err.message);
    return NextResponse.json({ message: 'Failed to delete issue' }, { status: 500 });
  }
}
