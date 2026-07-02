import { db } from "@/db";
import {
  deliveryItemsTable,
} from "@/db/schemas/delivery-item.db.schema";
import type {
  InsertDeliveryItemType,
  UpdateDeliveryItemType,
} from "@/types/delivery-item.type";
import { eq } from "drizzle-orm";

export const listDeliverItemHandler = async (
  limit: number = 10,
  offset: number = 1,
) => {
  try {
    const result = await db
      .select()
      .from(deliveryItemsTable)
      .limit(limit)
      .offset(offset);

    if (!result || result.length === 0) {
      throw new Error("No deliver items found");
    }

    return result;
  } catch (error) {
    console.error("Error listing deliver items:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing deliver items",
    );
  }
};

export const fetchDeliverItemByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(deliveryItemsTable)
      .where(eq(deliveryItemsTable.id, id))
      .limit(1);

    if (!result) {
      throw new Error("Deliver item not found");
    }

    return result;
  } catch (error) {
    console.error("Error fetching deliver item by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching deliver item by id",
    );
  }
};

export const fetchDeliverItemByDeliveryIdHandler = async (
  deliveryId: number,
) => {
  try {
    const result = await db
      .select()
      .from(deliveryItemsTable)
      .where(eq(deliveryItemsTable.deliveryId, deliveryId));

    if (!result || result.length === 0) {
      throw new Error("Deliver items not found for delivery id: " + deliveryId);
    }

    return result;
  } catch (error) {
    console.error("Error fetching deliver items by delivery id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching deliver items by delivery id",
    );
  }
};

export const fetchDeliverItemByFoodItemIdHandler = async (
  foodItemId: number,
) => {
  try {
    const result = await db
      .select()
      .from(deliveryItemsTable)
      .where(eq(deliveryItemsTable.foodItemId, foodItemId));

    if (!result || result.length === 0) {
      throw new Error(
        "Deliver items not found for food item id: " + foodItemId,
      );
    }

    return result;
  } catch (error) {
    console.error("Error fetching deliver items by food item id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching deliver items by food item id",
    );
  }
};

export const createDeliverItemHandler = async (
  deliverItem: InsertDeliveryItemType,
) => {
  try {
    const result = await db
      .insert(deliveryItemsTable)
      .values(deliverItem)
      .returning();

    if (!result) {
      throw new Error("Failed to create deliver item, no result returned");
    }

    return result;
  } catch (error) {
    console.error("Error creating deliver item:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating deliver item",
    );
  }
};

export const updateDeliverItemHandlerById = async (
  id: number,
  deliverItem: UpdateDeliveryItemType,
) => {
  try {
    const result = await db
      .update(deliveryItemsTable)
      .set(deliverItem)
      .where(eq(deliveryItemsTable.id, id))
      .returning();

    if (!result) {
      throw new Error("Failed to update deliver item, no result returned");
    }

    return result;
  } catch (error) {
    console.error("Error updating deliver item:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating deliver item",
    );
  }
};

export const deleteDeliverItemByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(deliveryItemsTable)
      .where(eq(deliveryItemsTable.id, id))
      .returning();

    if (!result) {
      throw new Error("Failed to delete deliver item, no result returned");
    }

    return result;
  } catch (error) {
    console.error("Error deleting deliver item:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting deliver item",
    );
  }
};
