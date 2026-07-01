import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { machineOperatingHourTables } from "@/db/schemas/machine.operating-hour.db.schema";

export const insertMachineOperatingHourZodSchema = createInsertSchema(
  machineOperatingHourTables,
).omit({ createdAt: true, updatedAt: true });

export const updateMachineOperatingHourZodSchema = createUpdateSchema(
  machineOperatingHourTables,
).omit({ createdAt: true, updatedAt: true });

export const selectMachineOperatingHourZodSchema = createSelectSchema(
  machineOperatingHourTables,
);
