import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import { specialHoursTable } from "@/db/schemas/special-hour.db.schema";

export const insertSpecialHourZodSchema = createInsertSchema(
	specialHoursTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateSpecialHourZodSchema = createUpdateSchema(
	specialHoursTable,
).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectSpecialHourZodSchema = createSelectSchema(
	specialHoursTable,
);
