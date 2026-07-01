import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import { operatingHoursTable } from "@/db/schemas/operating-hour.db.schema";

export const insertOperatingHourZodSchema = createInsertSchema(
	operatingHoursTable,
).omit({ createdAt: true, updatedAt: true });

export const updateOperatingHourZodSchema = createUpdateSchema(
	operatingHoursTable,
).omit({ createdAt: true, updatedAt: true });

export const selectOperatingHourZodSchema = createSelectSchema(
	operatingHoursTable,
);
