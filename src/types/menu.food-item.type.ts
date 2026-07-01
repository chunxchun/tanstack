import type * as z from "zod";
import type {
	insertMenuFoodItemZodSchema,
	selectMenuFoodItemZodSchema,
	updateMenuFoodItemZodSchema,
} from "@/zod/menu.food-item.zod.schema";

export type InsertMenuFoodItemType = z.infer<
	typeof insertMenuFoodItemZodSchema
>;
export type UpdateMenuFoodItemType = z.infer<
	typeof updateMenuFoodItemZodSchema
>;
export type SelectMenuFoodItemType = z.infer<
	typeof selectMenuFoodItemZodSchema
>;
