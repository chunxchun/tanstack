import { machinesTable } from "#/db/schemas/machine.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertMachineZodSchema = createInsertSchema(machinesTable).omit({
  createdAt: true,
  updatedAt: true,
});
export const updateMachineZodSchema = createUpdateSchema(machinesTable).omit({
  createdAt: true,
  updatedAt: true,
});
export const selectMachineZodSchema = createSelectSchema(machinesTable);
