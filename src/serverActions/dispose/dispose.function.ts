import {
  insertDisposeZodSchema,
  updateDisposeZodSchema,
} from "@/zod/dispose.zod.schema";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createDisposeHandler,
  deleteDisposeByIdHandler,
  fetchDisposeByIdHandler,
  listDisposeHandler,
  updateDisposeByIdHandler,
} from "./dispose.handler";

export const listDisposeFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listDisposeHandler(data.limit, data.offset, data.organizationId),
  );

export const createDisposeFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertDisposeZodSchema))
  .handler(async ({ data }) => createDisposeHandler(data));

export const fetchDisposeByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchDisposeByIdHandler(Number(data.id)));

export const updateDisposeByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateDisposeZodSchema))
  .handler(async ({ data }) => updateDisposeByIdHandler(Number(data.id), data));

export const deleteDisposeByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteDisposeByIdHandler(Number(data.id)));
