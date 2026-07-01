import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import { inventoriesTable } from "@/db/schemas/inventory.db.schema";

export const insertInventoryZodSchema = createInsertSchema(
	inventoriesTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateInventoryZodSchema = createUpdateSchema(
	inventoriesTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectInventoryZodSchema = createSelectSchema(inventoriesTable);
