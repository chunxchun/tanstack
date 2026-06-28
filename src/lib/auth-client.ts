import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, roles as ROLES } from "@/lib/permissions";

export const authClient = createAuthClient({
  baseURL: "https://tanstack.find2meals.workers.dev/",
  plugins: [
    adminClient(),
    organizationClient({
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
  ],
});
