import type {
  insertLocationZodSchema,
  selectLocationZodSchema,
  updateLocationZodSchema,
} from "@/zod/location.zod.schema";
import type * as z from "zod";

export type InsertLocationType = z.infer<typeof insertLocationZodSchema>;
export type UpdateLocationType = z.infer<typeof updateLocationZodSchema>;
export type SelectLocationType = z.infer<typeof selectLocationZodSchema>;
