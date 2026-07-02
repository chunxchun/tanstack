import type { UpdateMachineSpecialHourType } from "@/types/machine.special-hour.type";
import {
  insertMachineSpecialHourZodSchema,
  updateMachineSpecialHourZodSchema,
} from "@/zod/machine.special-hour.zod.schema";
import { idZodSchema, paginationZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  createMachineSpecialHourHandler,
  deleteMachineSpecialHourByIdHandler,
  fetchMachineSpecialHourByIdHandler,
  fetchMachineSpecialHourByMachineIdHandler,
  listMachineSpecialHourHandler,
  updateMachineSpecialHourByIdHandler,
} from "./machine-special-hour.handler";

export const listMachineSpecialHoursFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listMachineSpecialHourHandler(data.limit, data.offset),
  );

export const createMachineSpecialHoursFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertMachineSpecialHourZodSchema))
  .handler(async ({ data }) => createMachineSpecialHourHandler(data));

export const fetchMachineSpecialHoursByIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMachineSpecialHourByIdHandler(Number(data.id)),
  );

export const fetchMachineSpecialHoursByMachineIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    fetchMachineSpecialHourByMachineIdHandler(Number(data.id)),
  );

export const updateMachineSpecialHoursByIdFn = createServerFn({
  method: "POST",
})
  .validator(zodValidator(updateMachineSpecialHourZodSchema))
  .handler(async ({ data }) =>
    updateMachineSpecialHourByIdHandler(
      Number(data.id),
      data as UpdateMachineSpecialHourType,
    ),
  );

export const deleteMachineSpecialHoursByIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) =>
    deleteMachineSpecialHourByIdHandler(Number(data.id)),
  );
