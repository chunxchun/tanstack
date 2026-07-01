import { paginationZodSchema, userIdZodSchema } from "@/zod/shared.zod.schema";
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  fetchOrganizationByIdHandler,
  listOrganizationByMemberUserIdHandler,
  listOrganizationHandler,
} from "./organization.handler";

export const listOrgnizationFn = createServerFn({ method: "GET" })
  .validator(zodValidator(paginationZodSchema))
  .handler(async ({ data }) =>
    listOrganizationHandler(data.limit, data.offset),
  );

export const listOrganizationByMemberUserIdFn = createServerFn({
  method: "GET",
})
  .validator(zodValidator(userIdZodSchema))
  .handler(async ({ data }) =>
    listOrganizationByMemberUserIdHandler(data.userId),
  );

export const fetchOrganizationByIdFn = createServerFn({ method: "GET" })
  .validator(zodValidator(userIdZodSchema))
  .handler(async ({ data }) => fetchOrganizationByIdHandler(data.userId));
