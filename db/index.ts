import { drizzle } from "drizzle-orm/libsql";

// the db connection (basically the client you'll use everywhere)
export const db = drizzle({
  connection: {
    url: process.env.TURSO_CONNECTION_URL!,
    // authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
