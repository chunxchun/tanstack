import { locationsTable } from "@/db/schemas/location.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertLocationZodSchema = createInsertSchema(locationsTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateLocationZodSchema = createUpdateSchema(locationsTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectLocationZodSchema = createSelectSchema(locationsTable);
