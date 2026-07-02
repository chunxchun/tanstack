import {
  insertInventoryZodSchema,
  updateInventoryZodSchema,
} from "@/zod/inventory.zod.schema";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createInventoryHandler,
  deleteInventoryByIdHandler,
  fetchInventoryByIdHandler,
  listInventoryHandler,
  updateInventoryByIdHandler,
} from "./inventory.handler";

export const listInventoryFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listInventoryHandler(data.limit, data.offset, data.organizationId),
  );

export const createInventoryFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertInventoryZodSchema))
  .handler(async ({ data }) => createInventoryHandler(data));

export const fetchInventoryByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchInventoryByIdHandler(Number(data.id)));

export const updateInventoryByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateInventoryZodSchema))
  .handler(async ({ data }) =>
    updateInventoryByIdHandler(Number(data.id), data),
  );

export const deleteInventoryByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteInventoryByIdHandler(Number(data.id)));
