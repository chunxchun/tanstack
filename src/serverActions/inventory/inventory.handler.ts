import { db } from "@/db";
import {
  inventoriesTable,
} from "@/db/schemas/inventory.db.schema";
import type {
  InsertInventoryType,
  UpdateInventoryType,
} from "@/types/inventory.type";
import { eq } from "drizzle-orm";

export const listInventoryHandler = async (
  limit: number = 10,
  offset: number = 1,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(inventoriesTable)
      .where(
        organizationId
          ? eq(inventoriesTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing inventories:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing inventories",
    );
  }
};

export const fetchInventoryByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(inventoriesTable)
      .where(eq(inventoriesTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching inventory by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching inventory by id",
    );
  }
};

export const createInventoryHandler = async (
  inventory: InsertInventoryType,
) => {
  try {
    const result = await db
      .insert(inventoriesTable)
      .values(inventory)
      .returning();
    return result;
  } catch (error) {
    console.error("Error creating inventory:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating inventory",
    );
  }
};

export const updateInventoryByIdHandler = async (
  id: number,
  inventory: UpdateInventoryType,
) => {
  try {
    const result = await db
      .update(inventoriesTable)
      .set(inventory)
      .where(eq(inventoriesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating inventory:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating inventory",
    );
  }
};

export const deleteInventoryByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(inventoriesTable)
      .where(eq(inventoriesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting inventory:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting inventory",
    );
  }
};
