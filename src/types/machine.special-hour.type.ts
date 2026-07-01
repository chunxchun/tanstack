import type {
  insertMachineSpecialHourZodSchema,
  selectMachineSpecialHourZodSchema,
  updateMachineSpecialHourZodSchema,
} from "@/zod/machine.special-hour.zod.schema";
import type * as z from "zod";

export type InsertMachineSpecialHourType = z.infer<
	typeof insertMachineSpecialHourZodSchema
>;
export type UpdateMachineSpecialHourType = z.infer<
	typeof updateMachineSpecialHourZodSchema
>;
export type SelectMachineSpecialHourType = z.infer<
	typeof selectMachineSpecialHourZodSchema
>;
