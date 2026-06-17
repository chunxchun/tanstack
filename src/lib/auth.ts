import { betterAuth } from "better-auth/minimal";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { admin, organization } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite" }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin(), organization(), tanstackStartCookies()], // tanstackStartCookies should be the last plugin in the array
});
