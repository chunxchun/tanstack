import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import { organization as organizationsTable } from "@/db/schemas/auth.db.schema";

export const insertOrganizationZodSchema = createInsertSchema(
	organizationsTable,
).omit({ createdAt: true });

export const updateOrganizationZodSchema = createUpdateSchema(
	organizationsTable,
).omit({ createdAt: true });

export const selectOrganizationZodSchema = createSelectSchema(
	organizationsTable,
);
