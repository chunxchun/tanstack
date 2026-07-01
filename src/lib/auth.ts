import { betterAuth } from "better-auth/minimal";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { admin, organization } from "better-auth/plugins";
import { ac, roles as ROLES } from "@/lib/permissions";
import { resend } from "./email";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.BETTER_AUTH_URL, "http://localhost:3000"],
  database: drizzleAdapter(db, { provider: "sqlite" }),
  emailAndPassword: {
    enabled: true,
    sendVerificationEmail: async ({
      user,
      url,
    }: {
      user: { email: string };
      url: string;
    }) =>
      await resend.emails.send({
        from: "admin@wadafoodtech.chunxchun.com",
        to: user.email,
        subject: "Verify your email",
        html: `<p>Please verify your email by clicking <a href="${url}">here</a>.</p>`,
      }),
    sendPasswordResetEmail: true,
  },
  plugins: [
    admin(),
    organization({
      ac,
      roles: {
        user: ROLES.USER,
        admin: ROLES.ADMIN,
        masterFranchise: ROLES.MASTER_FRANCHISE,
        franchiseeOwner: ROLES.FRANCHISEE_OWNER,
        franchiseeManager: ROLES.FRANCHISEE_MANAGER,
        franchiseeEmployee: ROLES.FRANCHISEE_EMPLOYEE,
      },
    }),
    tanstackStartCookies(),
  ], // tanstackStartCookies should be the last plugin in the array
});
