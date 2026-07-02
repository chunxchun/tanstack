import { db } from "@/db";
import { eq } from "drizzle-orm";
import { deliveriesTable } from "@/db/schemas/delivery.db.schema";
import type {
  InsertDeliveryType,
  UpdateDeliveryType,
} from "@/types/delivery.type";

export const listDeliveryHandler = async (
  limit: number = 10,
  offset: number = 0,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(deliveriesTable)
      .where(
        organizationId
          ? eq(deliveriesTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing deliveries:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing deliveries",
    );
  }
};

export const listDeliveryByOrganizationIdHandler = async (
  organizationId: string,
) => {
  try {
    const result = await db
      .select()
      .from(deliveriesTable)
      .where(eq(deliveriesTable.organizationId, organizationId));
    return result;
  } catch (error) {
    console.error("Error listing deliveries by organization id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing deliveries by organization id",
    );
  }
};

export const fetchDeliveryByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(deliveriesTable)
      .where(eq(deliveriesTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching delivery by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching delivery by id",
    );
  }
};

export const createDeliveryHandler = async (delivery: InsertDeliveryType) => {
  try {
    const result = await db
      .insert(deliveriesTable)
      .values(delivery)
      .returning();
    return result;
  } catch (error) {
    console.error("Error creating delivery:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating delivery",
    );
  }
};

export const updateDeliveryByIdHandler = async (
  id: number,
  delivery: UpdateDeliveryType,
) => {
  try {
    const result = await db
      .update(deliveriesTable)
      .set(delivery)
      .where(eq(deliveriesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating delivery:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating delivery",
    );
  }
};

export const deleteDeliveryByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(deliveriesTable)
      .where(eq(deliveriesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting delivery:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting delivery",
    );
  }
};
