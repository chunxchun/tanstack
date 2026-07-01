import type * as z from "zod";
import type {
	insertSpecialHourZodSchema,
	selectSpecialHourZodSchema,
	updateSpecialHourZodSchema,
} from "@/zod/special-hour.zod.schema";

export type InsertSpecialHourType = z.infer<typeof insertSpecialHourZodSchema>;
export type UpdateSpecialHourType = z.infer<typeof updateSpecialHourZodSchema>;
export type SelectSpecialHourType = z.infer<typeof selectSpecialHourZodSchema>;
