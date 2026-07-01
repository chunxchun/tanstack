import { deliveryItemsTable } from "#/db/schemas/delivery-item.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertDeliveryItemZodSchema = createInsertSchema(
  deliveryItemsTable,
).omit({
  createdAt: true,
  updatedAt: true,
});
export const updateDeliveryItemZodSchema = createUpdateSchema(
  deliveryItemsTable,
).omit({
  createdAt: true,
  updatedAt: true,
});
export const selectDeliveryItemZodSchema = createSelectSchema(deliveryItemsTable);
