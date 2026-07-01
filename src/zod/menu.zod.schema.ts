import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import * as z from "zod";
import { menusTable } from "@/db/schemas/menu.db.schema";

export const insertMenuZodSchema = createInsertSchema(menusTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateMenuZodSchema = createUpdateSchema(menusTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectMenuZodSchema = createSelectSchema(menusTable);

export const menuFoodItemZodSchema = z.object({
	id: z.number(),
	name: z.string(),
	imageUrl: z.url().optional(),
});
