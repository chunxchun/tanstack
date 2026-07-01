import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import { menusFoodItemsTable } from "@/db/schemas/menu.food-item.db.schema";

export const insertMenuFoodItemZodSchema = createInsertSchema(
	menusFoodItemsTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateMenuFoodItemZodSchema = createUpdateSchema(
	menusFoodItemsTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectMenuFoodItemZodSchema = createSelectSchema(
	menusFoodItemsTable,
);
