import { locationsTable } from "#/db/schemas/location.db.schema";
import { db } from "@/db";
import type {
  InsertLocationType,
  UpdateLocationType,
} from "@/types/location.type";
import { eq } from "drizzle-orm";

export const listLocationHandler = async (
  limit: number = 10,
  offset: number = 0,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(locationsTable)
      .where(
        organizationId
          ? eq(locationsTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing locations:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing locations",
    );
  }
};

export const listLocationByOrganizationIdHandler = async (
  organizationId: string,
) => {
  try {
    const result = await db
      .select()
      .from(locationsTable)
      .where(eq(locationsTable.organizationId, organizationId));
    return result;
  } catch (error) {
    console.error("Error listing locations by organization id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing locations by organization id",
    );
  }
};

export const fetchLocationByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(locationsTable)
      .where(eq(locationsTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching location by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching location by id",
    );
  }
};

export const createLocationHandler = async (data: InsertLocationType) => {
  try {
    const result = await db.insert(locationsTable).values(data).returning();
    return result;
  } catch (error) {
    console.error("Error creating location:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating location",
    );
  }
};

export const updateLocationByIdHandler = async (
  id: number,
  data: UpdateLocationType,
) => {
  try {
    const result = await db
      .update(locationsTable)
      .set(data)
      .where(eq(locationsTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating location:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating location",
    );
  }
};

export const deleteLocationByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(locationsTable)
      .where(eq(locationsTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting location:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting location",
    );
  }
};
