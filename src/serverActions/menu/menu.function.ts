import type { InsertMenuType, UpdateMenuType } from "@/types/menu.type";
import {
  insertMenuZodSchema,
  updateMenuZodSchema,
} from "@/zod/menu.zod.schema";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createMenuHandler,
  deleteMenuByIdHandler,
  fetchMenuByIdHandler,
  listMenuHandler,
  listMenuWithFoodItemHandler,
  updateMenuHandlerById,
} from "./menu.handler";

export const listMenuFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listMenuHandler(data.limit, data.offset, data.organizationId),
  );

export const listMenuWithFoodItemFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listMenuWithFoodItemHandler(data.limit, data.offset, data.organizationId),
  );

export const createMenuFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertMenuZodSchema))
  .handler(async ({ data }) => createMenuHandler(data as InsertMenuType));

export const fetchMenuByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchMenuByIdHandler(Number(data.id)));

export const updateMenuByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateMenuZodSchema))
  .handler(async ({ data }) =>
    updateMenuHandlerById(Number(data.id), data as UpdateMenuType),
  );

export const deleteMenuByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteMenuByIdHandler(Number(data.id)));
