import type * as z from "zod";
import type {
	insertInventoryZodSchema,
	selectInventoryZodSchema,
	updateInventoryZodSchema,
} from "@/zod/inventory.zod.schema";

export type InsertInventoryType = z.infer<typeof insertInventoryZodSchema>;
export type UpdateInventoryType = z.infer<typeof updateInventoryZodSchema>;
export type SelectInventoryType = z.infer<typeof selectInventoryZodSchema>;
