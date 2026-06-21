import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

const statements = {
  ...defaultStatements,
  posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
} as const;

export const ac = createAccessControl(statements);


export const roles = {
  USER: ac.newRole({
    posts: ["create", "read", "update:own", "delete:own"],
  }),
  ADMIN: ac.newRole({
    posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
    ...adminAc.statements,
  }),
  MASTER_FRANCHISE: ac.newRole({}),
  FRANCHISEE_OWNER: ac.newRole({}),
  FRANCHISEE_MANAGER: ac.newRole({}),
  FRANCHISEE_EMPLOYEE: ac.newRole({}),
};
