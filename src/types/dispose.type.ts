import type {
  insertDisposeZodSchema,
  selectDisposeZodSchema,
  updateDisposeZodSchema,
} from "@/zod/dispose.zod.schema";
import type * as z from "zod";

export type InsertDisposeType = z.infer<typeof insertDisposeZodSchema>;
export type UpdateDisposeType = z.infer<typeof updateDisposeZodSchema>;
export type SelectDisposeType = z.infer<typeof selectDisposeZodSchema>;
