import { deliveriesTable } from "@/db/schemas/delivery.db.schema";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const insertDeliveryZodSchema = createInsertSchema(deliveriesTable).omit(
  {
    createdAt: true,
    updatedAt: true,
  },
);
export const updateDeliveryZodSchema = createUpdateSchema(deliveriesTable).omit(
  {
    createdAt: true,
    updatedAt: true,
  },
);
export const selectDeliveryZodSchema = createSelectSchema(deliveriesTable);
