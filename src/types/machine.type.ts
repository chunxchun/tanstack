import {
  insertMachineZodSchema,
  selectMachineZodSchema,
  updateMachineZodSchema,
} from "#/zod/machine.zod.schema";
import * as z from "zod";

export type InsertMachineType = z.infer<typeof insertMachineZodSchema>;
export type UpdateMachineType = z.infer<typeof updateMachineZodSchema>;
export type SelectMachineType = z.infer<typeof selectMachineZodSchema>;
