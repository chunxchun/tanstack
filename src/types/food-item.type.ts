import type * as z from "zod";
import type {
	insertFoodItemZodSchema,
	selectFoodItemZodSchema,
	updateFoodItemZodSchema,
} from "@/zod/food-item.zod.schema";

export type InsertFoodItemType = z.infer<typeof insertFoodItemZodSchema>;
export type UpdateFoodItemType = z.infer<typeof updateFoodItemZodSchema>;
export type SelectFoodItemType = z.infer<typeof selectFoodItemZodSchema>;
