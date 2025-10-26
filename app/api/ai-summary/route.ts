import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Example placeholder response
    return NextResponse.json({ message: "AI summary endpoint working", data: body });
  } catch (error) {
    console.error("Error in ai-summary route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
