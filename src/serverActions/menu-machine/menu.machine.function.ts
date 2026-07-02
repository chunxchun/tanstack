import {
  insertMenuMachineZodSchema,
  updateMenuMachineZodSchema,
} from "@/zod/menu.machine.zod.schema";
import type {
  InsertMenuMachineType,
  UpdateMenuMachineType,
} from "@/types/menu.machine.type";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import {
  createMenuMachineHandler,
  deleteMenuMachineByIdHandler,
  fetchMenuMachineByIdHandler,
  fetchMenuMachineByMachineIdHandler,
  fetchMenuMachineByMenuIdHandler,
  listMenuMachineHandler,
  updateMenuMachineHandlerById,
} from "./menu.machine.handler";

export const listMenuMachineFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) => listMenuMachineHandler(data.limit, data.offset));

export const createMenuMachineFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertMenuMachineZodSchema))
  .handler(async ({ data }) => createMenuMachineHandler(data as InsertMenuMachineType));

export const fetchMenuMachineByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchMenuMachineByIdHandler(Number(data.id)));

export const fetchMenuMachineByMenuIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMenuMachineByMenuIdHandler(Number(data.id)),
  );

export const fetchMenuMachineByMachineIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMenuMachineByMachineIdHandler(Number(data.id)),
  );

export const updateMenuMachineByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateMenuMachineZodSchema))
  .handler(async ({ data }) =>
    updateMenuMachineHandlerById(Number(data.id), data as UpdateMenuMachineType),
  );

export const deleteMenuMachineByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteMenuMachineByIdHandler(Number(data.id)));
