import {
  createMenuFoodItemHandler,
  deleteMenuFoodItemByIdHandler,
  fetchMenuFoodItemByIdHandler,
  fetchMenuFoodItemByMenuIdHandler,
  listMenuFoodItemHandler,
  updateMenuFoodItemByIdHandler,
} from "./menu.food-item.handler";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  insertMenuFoodItemZodSchema,
  updateMenuFoodItemZodSchema,
} from "@/zod/menu.food-item.zod.schema";
import type {
  InsertMenuFoodItemType,
  UpdateMenuFoodItemType,
} from "@/types/menu.food-item.type";

export const listMenuFoodItemFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listMenuFoodItemHandler(data.limit, data.offset),
  );

export const createMenuFoodItemFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertMenuFoodItemZodSchema))
  .handler(async ({ data }) =>
    createMenuFoodItemHandler(data as InsertMenuFoodItemType),
  );

export const fetchMenuFoodItemByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchMenuFoodItemByIdHandler(Number(data.id)));

export const fetchMenuFoodItemByMenuIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMenuFoodItemByMenuIdHandler(Number(data.id)),
  );

export const updateMenuFoodItemByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateMenuFoodItemZodSchema))
  .handler(async ({ data }) =>
    updateMenuFoodItemByIdHandler(
      Number(data.id),
      data as UpdateMenuFoodItemType,
    ),
  );

export const deleteMenuFoodItemByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteMenuFoodItemByIdHandler(Number(data.id)));
