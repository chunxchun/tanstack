import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, roles as ROLES } from "@/lib/permissions";

export const authClient = createAuthClient({
  baseURL: "https://tanstack.find2meals.workers.dev/",
  plugins: [adminClient(), organizationClient({
    ac,
    roles: {
      ROLES.USER,
      ROLES.ADMIN,
      ROLES.MASTER_FRANCHISE,
      ROLES.FRANCHISEE_OWNER,
      ROLES.FRANCHISEE_MANAGER,
      ROLES.FRANCHISEE_EMPLOYEE,
    }
  })],
});
