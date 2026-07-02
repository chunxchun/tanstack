import {
  insertSaleZodSchema,
  updateSaleZodSchema,
} from "@/zod/sale.zod.schema";
import type { InsertSaleType, UpdateSaleType } from "@/types/sale.type";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  dateMachineIdSchema,
  dateRangeMachineIdSchema,
  dateRangeOrganizationIdSchema,
  dateShopIdSchema,
  idZodSchema,
  paginationZodSchema,
} from "@/zod/shared.zod.schema";
import {
  createSaleHandler,
  deleteSaleHandler,
  fetchSaleByIdHandler,
  listSaleByDateByMachineIdHandler,
  listSaleByDateByOrganizationIdHandler,
  listSaleByDateRangeByMachineIdHandler,
  listSaleByDateRangeByOrganizationIdHandler,
  listSaleHandler,
  updateSaleHandler,
} from "./sale.handler";

export const listSaleFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listSaleHandler(data.limit, data.offset, data.organizationId),
  );
export const listSaleByDateByOrganizationIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(dateShopIdSchema))
  .handler(async ({ data }) =>
    listSaleByDateByOrganizationIdHandler(data.date, data.organizationId),
  );

export const listSaleByDateByMachineIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(dateMachineIdSchema))
  .handler(async ({ data }) =>
    listSaleByDateByMachineIdHandler(data.date, data.machineId),
  );

export const listSaleByDateRangeByOrganizationIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(dateRangeOrganizationIdSchema))
  .handler(async ({ data }) =>
    listSaleByDateRangeByOrganizationIdHandler(
      data.startDate,
      data.endDate,
      data.organizationId,
    ),
  );
export const listSaleByDateRangeByMachineIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(dateRangeMachineIdSchema))
  .handler(async ({ data }) =>
    listSaleByDateRangeByMachineIdHandler(
      data.startDate,
      data.endDate,
      data.machineId,
    ),
  );
export const createSaleFn = createServerFn({ method: "POST" })
  .validator(zodValidator(insertSaleZodSchema))
  .handler(async ({ data }) => createSaleHandler(data as InsertSaleType));

export const fetchSaleByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => fetchSaleByIdHandler(Number(data.id)));

export const updateSaleByIdFn = createServerFn({ method: "POST" })
  .validator(zodValidator(updateSaleZodSchema))
  .handler(async ({ data }) =>
    updateSaleHandler(Number(data.id), data as UpdateSaleType),
  );

export const deleteSaleByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(idZodSchema))
  .handler(async ({ data }) => deleteSaleHandler(Number(data.id)));
