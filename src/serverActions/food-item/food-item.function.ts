import {
  insertFoodItemZodSchema,
  updateFoodItemZodSchema,
} from "@/zod/food-item.zod.schema";
import {
  idZodSchema,
  organizationIdZodSchema,
  paginationZodSchema,
} from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createFoodItemHandler,
  deleteFoodItemByIdHandler,
  fetchFoodItemByIdHandler,
  listFoodItemByOrganizationIdHandler,
  listFoodItemHandler,
  updateFoodItemByIdHandler,
} from "./food-item.handler";

export const listFoodItemFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listFoodItemHandler(data.limit, data.offset, data.organizationId),
  );

export const listFoodItemByOrganizationIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(organizationIdZodSchema))
  .handler(async ({ data }) =>
    listFoodItemByOrganizationIdHandler(data.organizationId),
  );

export const createFoodItemFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertFoodItemZodSchema))
  .handler(async ({ data }) => createFoodItemHandler(data));

export const fetchFoodItemByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchFoodItemByIdHandler(Number(data.id)));

export const updateFoodItemByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateFoodItemZodSchema))
  .handler(async ({ data }) =>
    updateFoodItemByIdHandler(Number(data.id), data),
  );

export const deleteFoodItemByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteFoodItemByIdHandler(Number(data.id)));
