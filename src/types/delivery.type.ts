import {
  insertDeliveryZodSchema,
  selectDeliveryZodSchema,
  updateDeliveryZodSchema,
} from "@/zod/delivery.zod.schema";
import * as z from "zod";

export type InsertDeliveryType = z.infer<typeof insertDeliveryZodSchema>;
export type UpdateDeliveryType = z.infer<typeof updateDeliveryZodSchema>;
export type SelectDeliveryType = z.infer<typeof selectDeliveryZodSchema>;
