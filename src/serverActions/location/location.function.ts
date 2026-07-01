import {
  insertLocationZodSchema,
  updateLocationZodSchema,
} from "@/zod/location.zod.schema";
import {
  idZodSchema,
  organizationIdZodSchema,
  paginationZodSchema,
} from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";

import {
  createLocationHandler,
  deleteLocationByIdHandler,
  fetchLocationByIdHandler,
  listLocationByOrganizationIdHandler,
  listLocationHandler,
  updateLocationByIdHandler,
} from "./location.handler";

export const listLocationFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listLocationHandler(data.limit, data.offset, data.organizationId),
  );

export const listLocationByOrganizationIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(organizationIdZodSchema))
  .handler(async ({ data }) =>
    listLocationByOrganizationIdHandler(data.organizationId),
  );

export const createLocationFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertLocationZodSchema))
  .handler(async ({ data }) => createLocationHandler(data));

export const fetchLocationByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchLocationByIdHandler(Number(data.id)));

export const updateLocationByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateLocationZodSchema))
  .handler(async ({ data }) => {
    return updateLocationByIdHandler(Number(data.id), data);
  });

export const deleteLocationByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteLocationByIdHandler(Number(data.id)));
