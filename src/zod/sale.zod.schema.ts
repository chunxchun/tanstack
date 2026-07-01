import { salesTable } from "@/db/schemas/sale.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertSaleZodSchema = createInsertSchema(salesTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const updateSaleZodSchema = createUpdateSchema(salesTable).omit({
	createdAt: true,
	updatedAt: true,
});

export const selectSaleZodSchema = createSelectSchema(salesTable);
