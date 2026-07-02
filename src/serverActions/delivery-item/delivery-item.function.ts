import {
  insertDeliveryItemZodSchema,
  updateDeliveryItemZodSchema,
} from "@/zod/delivery-item.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import {
  createDeliverItemHandler,
  deleteDeliverItemByIdHandler,
  fetchDeliverItemByDeliveryIdHandler,
  fetchDeliverItemByFoodItemIdHandler,
  fetchDeliverItemByIdHandler,
  listDeliverItemHandler,
  updateDeliverItemHandlerById,
} from "./delivery-item.handler";

export const listDeliverItemFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) => listDeliverItemHandler(data.limit, data.offset));

export const createDeliverItemFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertDeliveryItemZodSchema))
  .handler(async ({ data }) => createDeliverItemHandler(data));

export const fetchDeliverItemByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchDeliverItemByIdHandler(Number(data.id)));

export const fetchDeliverItemByDeliveryIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchDeliverItemByDeliveryIdHandler(Number(data.id)),
  );

export const fetechDeliverItemByFoodItemIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchDeliverItemByFoodItemIdHandler(Number(data.id)),
  );

export const updateDeliverItemByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateDeliveryItemZodSchema))
  .handler(async ({ data }) =>
    updateDeliverItemHandlerById(Number(data.id), data),
  );

export const deleteDeliverItemByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteDeliverItemByIdHandler(Number(data.id)));
