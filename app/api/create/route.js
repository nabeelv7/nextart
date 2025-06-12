import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, date, time } = await req.json();
  console.log(name, date, time);
  return NextResponse.json({ message: "success" });
}
