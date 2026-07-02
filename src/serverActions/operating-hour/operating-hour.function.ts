import type {
  InsertOperatingHourType,
  UpdateOperatingHourType,
} from "@/types/operating-hour.type";
import {
  insertOperatingHourZodSchema,
  updateOperatingHourZodSchema,
} from "@/zod/operating-hour.zod.schema";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createOperatingHourHandler,
  deleteOperatingHourByIdHandler,
  fetchOperatingHourByIdHandler,
  listOperatingHourHandler,
  updateOperatingHourByIdHandler,
} from "./operating-hour.handler";

export const listOperatingHourFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listOperatingHourHandler(data.limit, data.offset),
  );

export const createOperatingHourFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertOperatingHourZodSchema))
  .handler(async ({ data }) =>
    createOperatingHourHandler(data as InsertOperatingHourType),
  );

export const fetchOperatingHourByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchOperatingHourByIdHandler(Number(data.id)));

export const updateOperatingHourByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateOperatingHourZodSchema))
  .handler(async ({ data }) =>
    updateOperatingHourByIdHandler(
      Number(data.id),
      data as UpdateOperatingHourType,
    ),
  );

export const deleteOperatingHourByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteOperatingHourByIdHandler(Number(data.id)));
