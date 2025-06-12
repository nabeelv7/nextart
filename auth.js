import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import { db } from "./db";

const config = {
  // register your providers here
  providers: [Google],
  // connection to the drizzle database
  adapter: DrizzleAdapter(db),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
