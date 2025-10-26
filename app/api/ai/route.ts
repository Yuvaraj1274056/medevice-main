import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are MeDevice's intelligent Co-Pilot, providing concise helpful answers about medical technology, AI, and dashboard support.",
      },
      { role: "user", content: prompt },
    ],
  });

  const reply = completion.choices[0].message.content;
  return NextResponse.json({ reply });
}
