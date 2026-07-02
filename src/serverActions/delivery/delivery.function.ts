import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  idZodSchema,
  organizationIdZodSchema,
  paginationZodSchema,
} from "@/zod/shared.zod.schema";
import {
  insertDeliveryZodSchema,
  updateDeliveryZodSchema,
} from "@/zod/delivery.zod.schema";
import {
  createDeliveryHandler,
  deleteDeliveryByIdHandler,
  fetchDeliveryByIdHandler,
  listDeliveryByOrganizationIdHandler,
  listDeliveryHandler,
  updateDeliveryByIdHandler,
} from "./delivery.handler";

export const listDeliveryFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listDeliveryHandler(data.limit, data.offset, data.organizationId),
  );

export const listDeliveryByOrganizationIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(organizationIdZodSchema))
  .handler(async ({ data }) =>
    listDeliveryByOrganizationIdHandler(data.organizationId),
  );

export const createDeliveryFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertDeliveryZodSchema))
  .handler(async ({ data }) => createDeliveryHandler(data));

export const fetchDeliveryByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchDeliveryByIdHandler(Number(data.id)));

export const updateDeliveryByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateDeliveryZodSchema))
  .handler(async ({ data }) => updateDeliveryByIdHandler(Number(data.id), data));

export const deleteDeliveryByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteDeliveryByIdHandler(Number(data.id)));
