import {
  insertMachineOperatingHourZodSchema,
  updateMachineOperatingHourZodSchema,
} from "@/zod/machine.operating-hour.zod.schema";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createMachineOperatingHourHandler,
  deleteMachineOperatingHourByIdHandler,
  fetchMachineOperatingHourByIdHandler,
  fetchMachineOperatingHourByMachineIdHandler,
  listMachineOperatingHourHandler,
  updateMachineOperatingHourByIdHandler,
} from "./machine-operating-hour.handler";

export const listMachineOperatingHourFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listMachineOperatingHourHandler(data.limit, data.offset),
  );

export const createMachineOperatingHourFn = createServerFn({
  method: "POST",
})
  .validator(zodValidator(insertMachineOperatingHourZodSchema))
  .handler(async ({ data }) => createMachineOperatingHourHandler(data));

export const fetchMachineOperatingHourByIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMachineOperatingHourByIdHandler(Number(data.id)),
  );

export const fetchMachineOperatingHourByMachineIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMachineOperatingHourByMachineIdHandler(Number(data.id)),
  );

export const updateMachineOperatingHourByIdFn = createServerFn({
  method: "POST",
})
  .validator(zodValidator(updateMachineOperatingHourZodSchema))
  .handler(async ({ data }) =>
    updateMachineOperatingHourByIdHandler(Number(data.id), data),
  );

export const deleteMachineOperatingHourByIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    deleteMachineOperatingHourByIdHandler(Number(data.id)),
  );
