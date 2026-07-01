import type {
  insertOrganizationZodSchema,
  selectOrganizationZodSchema,
  updateOrganizationZodSchema,
} from "@/zod/organization.zod.schema";
import type * as z from "zod";

export type InsertOrganizationType = z.infer<typeof insertOrganizationZodSchema>;
export type UpdateOrganizationType = z.infer<typeof updateOrganizationZodSchema>;
export type SelectOrganizationType = z.infer<typeof selectOrganizationZodSchema>;
