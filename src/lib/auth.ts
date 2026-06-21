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
      user: ROLES.USER,
      admin: ROLES.ADMIN,
      masterFranchise: ROLES.MASTER_FRANCHISE,
      franchiseeOwner: ROLES.FRANCHISEE_OWNER,
      franchiseeManager: ROLES.FRANCHISEE_MANAGER,
      franchiseeEmployee: ROLES.FRANCHISEE_EMPLOYEE,
    }
  }), tanstackStartCookies()], // tanstackStartCookies should be the last plugin in the array
});
