import * as z from "zod";

export const searchZodSchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(10),
  offset: z.coerce.number().int().min(0).default(0),
});

export const dateZodSchema = z.object({
  // date: z.coerce.date().transform((d) => d.toISOString().slice(0, 10)),
  date: z.iso.date(),
});

const dateRangeBaseSchema = z.object({
  startDate: z.iso.date(),
  endDate: z.iso.date(),
});

export const dateRangeZodSchema = dateRangeBaseSchema.refine(
  (data) => data.startDate <= data.endDate,
  {
    message: "startDate must be before or equal to endDate",
  },
);

export const organizationIdZodSchema = z.object({
  organizationId: z.string().min(1),
});

export const shopIdZodSchema = z.object({
  shopId: z.coerce.number().int().positive(),
});

export const machineIdZodSchema = z.object({
  machineId: z.coerce.number().int().positive(),
});

export const dateShopIdSchema = dateZodSchema.extend(organizationIdZodSchema.shape);
export const dateMachineIdSchema = dateZodSchema.extend(machineIdZodSchema.shape);
export const dateRangeOrganizationIdSchema = dateRangeBaseSchema
  .extend(organizationIdZodSchema.shape)
  .refine((data) => data.startDate <= data.endDate, {
    message: "startDate must be before or equal to endDate",
  });

export const dateRangeMachineIdSchema = dateRangeBaseSchema
  .extend(machineIdZodSchema.shape)
  .refine((data) => data.startDate <= data.endDate, {
    message: "startDate must be before or equal to endDate",
  });

export const paginationZodSchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(10),
  offset: z.coerce.number().int().min(0).default(0),
  organizationId: z.string().min(1).optional(),
  // shopId: z.coerce.number().int().positive().optional(),
});

export const integerIdZodSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const stringIdZodSchema = z.object({
  id: z.coerce.string().min(1),
});

export const idZodSchema = z.union([integerIdZodSchema, stringIdZodSchema]);
export const userIdZodSchema = z.object({
  userId: z.coerce.string().min(1),
});
export const R2UploadResponseZodSchema = z.object({
  url: z.url(),
});
