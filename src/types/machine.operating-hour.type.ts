import type * as z from "zod";
import type {
	insertMachineOperatingHourZodSchema,
	selectMachineOperatingHourZodSchema,
	updateMachineOperatingHourZodSchema,
} from "@/zod/machine.operating-hour.zod.schema";

export type InsertMachineOperatingHourType = z.infer<
	typeof insertMachineOperatingHourZodSchema
>;
export type UpdateMachineOperatingHourType = z.infer<
	typeof updateMachineOperatingHourZodSchema
>;
export type SelectMachineOperatingHourType = z.infer<
	typeof selectMachineOperatingHourZodSchema
>;
