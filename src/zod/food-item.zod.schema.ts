import { foodItemsTable } from "@/db/schemas/food-item.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertFoodItemZodSchema = createInsertSchema(foodItemsTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateFoodItemZodSchema = createUpdateSchema(foodItemsTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectFoodItemZodSchema = createSelectSchema(foodItemsTable);
