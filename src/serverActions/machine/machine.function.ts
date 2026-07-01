import {
  insertMachineZodSchema,
  updateMachineZodSchema,
} from "@/zod/machine.zod.schema";
import { idZodSchema, organizationIdZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createMachineHandler,
  deleteMachineByIdHandler,
  fetchMachineByIdHandler,
  listMachineByOrganizationIdHandler,
  listMachineHandler,
  updateMachineByIdHandler,
} from "./machine.handler";

export const listMachineFn = createServerFn({ method: "GET" })
    .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listMachineHandler(data.limit, data.offset, data.organizationId),
  );

export const listMachineByOrganizationIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(organizationIdZodSchema))
  .handler(async ({ data }) =>
    listMachineByOrganizationIdHandler(data.organizationId),
  );

export const createMachineFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertMachineZodSchema))
  .handler(async ({ data }) => createMachineHandler(data));

export const fetchMachineByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchMachineByIdHandler(Number(data.id)));

export const updateMachineByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateMachineZodSchema))
  .handler(async ({ data }) => updateMachineByIdHandler(Number(data.id), data));

export const deleteMachineByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteMachineByIdHandler(Number(data.id)));
