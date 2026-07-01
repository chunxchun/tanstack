import { disposesTable } from "@/db/schemas/dispose.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertDisposeZodSchema = createInsertSchema(disposesTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateDisposeZodSchema = createUpdateSchema(disposesTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectDisposeZodSchema = createSelectSchema(disposesTable);
