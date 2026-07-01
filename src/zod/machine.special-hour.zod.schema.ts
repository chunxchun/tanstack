import { machineSpecialHoursTable } from "@/db/schemas/machine.special-hour.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertMachineSpecialHourZodSchema = createInsertSchema(
  machineSpecialHoursTable,
).omit({ createdAt: true, updatedAt: true });

export const updateMachineSpecialHourZodSchema = createUpdateSchema(
  machineSpecialHoursTable,
).omit({ createdAt: true, updatedAt: true });

export const selectMachineSpecialHourZodSchema = createSelectSchema(
  machineSpecialHoursTable,
);
