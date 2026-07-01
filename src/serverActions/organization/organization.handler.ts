import {
  member as memberTable,
  organization as organizationTable,
} from "#/db/schemas/auth.db.schema";
import { db } from "@/db";
import { eq, inArray } from "drizzle-orm";

export const listOrganizationHandler = async (
  limit: number = 10,
  offset: number = 0,
) => {
  try {
    const result = await db
      .select()
      .from(organizationTable)
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing organizations:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing organizations",
    );
  }
};

export const listOrganizationByMemberUserIdHandler = async (userId: string) => {
  try {
    const memberRows = await db
      .select()
      .from(memberTable)
      .where(eq(memberTable.userId, userId));

    if (memberRows.length === 0) {
      return [];
    }

    const organizationIds = Array.from(
      new Set(memberRows.map((member) => member.organizationId)),
    );

    const organizations = await db
      .select()
      .from(organizationTable)
      .where(inArray(organizationTable.id, organizationIds));

    return organizations;
  } catch (error) {
    console.error("Error listing organizations by member user id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing organizations by member user id",
    );
  }
};

export const fetchOrganizationByIdHandler = async (id: string) => {
  try {
    const result = await db
      .select()
      .from(organizationTable)
      .where(eq(organizationTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching organization by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching organization by id",
    );
  }
};
