import type * as z from "zod";
import type {
	insertOperatingHourZodSchema,
	selectOperatingHourZodSchema,
	updateOperatingHourZodSchema,
} from "@/zod/operating-hour.zod.schema";

export type InsertOperatingHourType = z.infer<
	typeof insertOperatingHourZodSchema
>;
export type UpdateOperatingHourType = z.infer<
	typeof updateOperatingHourZodSchema
>;
export type SelectOperatingHourType = z.infer<
	typeof selectOperatingHourZodSchema
>;
