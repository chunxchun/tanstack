import { db } from "@/db";
import { foodItemsTable } from "@/db/schemas/food-item.db.schema";
import type {
  InsertFoodItemType,
  UpdateFoodItemType,
} from "@/types/food-item.type";
import { eq } from "drizzle-orm";

export const listFoodItemHandler = async (
  limit: number = 10,
  offset: number = 1,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(foodItemsTable)
      .where(
        organizationId
          ? eq(foodItemsTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing food items:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing food items",
    );
  }
};

export const listFoodItemByOrganizationIdHandler = async (
  organizationId: string,
) => {
  try {
    const result = await db
      .select()
      .from(foodItemsTable)
      .where(eq(foodItemsTable.organizationId, organizationId));
    return result;
  } catch (error) {
    console.error("Error listing food items by organization id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing food items by organization id",
    );
  }
};

export const fetchFoodItemByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(foodItemsTable)
      .where(eq(foodItemsTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching food item by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching food item by id",
    );
  }
};

export const createFoodItemHandler = async (foodItem: InsertFoodItemType) => {
  try {
    const result = await db.insert(foodItemsTable).values(foodItem).returning();
    return result;
  } catch (error) {
    console.error("Error creating food item:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating food item",
    );
  }
};

export const updateFoodItemByIdHandler = async (
  id: number,
  foodItem: UpdateFoodItemType,
) => {
  try {
    const result = await db
      .update(foodItemsTable)
      .set(foodItem)
      .where(eq(foodItemsTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating food item:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating food item",
    );
  }
};

export const deleteFoodItemByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(foodItemsTable)
      .where(eq(foodItemsTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting food item:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting food item",
    );
  }
};
