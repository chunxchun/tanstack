import type * as z from "zod";
import type {
	insertMenuZodSchema,
	menuFoodItemZodSchema,
	selectMenuZodSchema,
	updateMenuZodSchema,
} from "@/zod/menu.zod.schema";

export type InsertMenuType = z.infer<typeof insertMenuZodSchema>;
export type UpdateMenuType = z.infer<typeof updateMenuZodSchema>;
export type SelectMenuType = z.infer<typeof selectMenuZodSchema>;

export type MenuFoodItemType = z.infer<typeof menuFoodItemZodSchema>;

export type InsertMenuWithFoodItemsType = InsertMenuType & {
	menuFoodItems: MenuFoodItemType[];
};

export type UpdateMenuWithFoodItemsType = UpdateMenuType & {
	menuFoodItems: MenuFoodItemType[];
};

export type SelectMenuWithFoodItemsType = SelectMenuType & {
	menuFoodItems: MenuFoodItemType[];
};
