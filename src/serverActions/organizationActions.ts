import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";
import { organization as organizationTable } from "@/db/schemas";
import { createInsertSchema } from "drizzle-zod";

type NewOrganization = typeof organizationTable.$inferInsert;
const insertOrganizationSchema = createInsertSchema(organizationTable);

export const listOrganizationAction = createServerFn({ method: "GET" }).handler(
  async () => {
    const result = await db.select().from(organizationTable);
    return result;
  },
);
export const getOrganizationAction = createServerFn({ method: "GET" }).handler(
  async () => {},
);

export const createOrganizationAction = createServerFn({ method: "POST" })
  .validator({ schema: insertOrganizationSchema })
  .handler(async ({ data }) => {
    const result = await db
      .insert(organizationTable)
      .values(data as NewOrganization)
      .returning();
    return result;
  });
