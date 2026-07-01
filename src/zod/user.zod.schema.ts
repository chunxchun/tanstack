import { user as usersTable } from "@/db/schemas/auth.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertUserZodSchema = createInsertSchema(usersTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateUserZodSchema = createUpdateSchema(usersTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectUserZodSchema = createSelectSchema(usersTable);
