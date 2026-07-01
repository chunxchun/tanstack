import type * as z from "zod";
import type {
	insertSaleZodSchema,
	selectSaleZodSchema,
	updateSaleZodSchema,
} from "@/zod/sale.zod.schema";

export type InsertSaleType = z.infer<typeof insertSaleZodSchema>;
export type UpdateSaleType = z.infer<typeof updateSaleZodSchema>;
export type SelectSaleType = z.infer<typeof selectSaleZodSchema>;
