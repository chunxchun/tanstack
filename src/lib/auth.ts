import { betterAuth } from "better-auth/minimal";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { admin, organization } from "better-auth/plugins";
import { ac, roles as ROLES } from "@/lib/permissions";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite" }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin(), organization({
    ac,
    roles: {
      ROLES.USER,
      ROLES.ADMIN,
      ROLES.MASTER_FRANCHISE,
      ROLES.FRANCHISEE_OWNER,
      ROLES.FRANCHISEE_MANAGER,
      ROLES.FRANCHISEE_EMPLOYEE,
    }
  }), tanstackStartCookies()], // tanstackStartCookies should be the last plugin in the array
});
