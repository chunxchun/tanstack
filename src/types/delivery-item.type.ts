import * as z from "zod";
import {
  insertDeliveryItemZodSchema,
  selectDeliveryItemZodSchema,
  updateDeliveryItemZodSchema,
} from "@/zod/delivery-item.zod.schema";

export type InsertDeliveryItemType = z.infer<
  typeof insertDeliveryItemZodSchema
>;
export type UpdateDeliveryItemType = z.infer<
  typeof updateDeliveryItemZodSchema
>;
export type SelectDeliveryItemType = z.infer<
  typeof selectDeliveryItemZodSchema
>;
