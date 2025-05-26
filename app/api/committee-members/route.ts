import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://2a6115a6-15f0-45fe-8fcb-921a5c3d92a4-00-ebruw8jg02ip.janeway.replit.dev/fetch_committee.php");
    const json = await res.json();

    return NextResponse.json({ data: json });
  } catch (error: any) {
    console.error("GET error:", error.message);
    return NextResponse.json({ message: "Failed to fetch committee members" }, { status: 500 });
  }
}
