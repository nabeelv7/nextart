import { auth } from "@/auth";
import { db } from "@/db";
import { matches, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await auth();

    const { match_name, match_date, match_time } = await req.json();

    const [{ id: creatorId }] = await db
      .select({
        id: users.id,
      })
      .from(users)
      .where(eq(users.email, session.user.email));

    await db
      .insert(matches)
      .values({ match_name, match_date, match_time, creatorId });

    return NextResponse.json({ code: 200, message: "success" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ code: 500, message: "Server error" });
  }
}
