import type {
  insertUserZodSchema,
  selectUserZodSchema,
  updateUserZodSchema,
} from "@/zod/user.zod.schema";
import type * as z from "zod";

export type InsertUserType = z.infer<typeof insertUserZodSchema>;
export type UpdateUserType = z.infer<typeof updateUserZodSchema>;
export type SelectUserType = z.infer<typeof selectUserZodSchema>;
