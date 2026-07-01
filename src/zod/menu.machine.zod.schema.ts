import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import { menusMachinesTable } from "@/db/schemas/menu.machine.db.schema";

export const insertMenuMachineZodSchema = createInsertSchema(
	menusMachinesTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateMenuMachineZodSchema = createUpdateSchema(
	menusMachinesTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectMenuMachineZodSchema = createSelectSchema(
	menusMachinesTable,
);
