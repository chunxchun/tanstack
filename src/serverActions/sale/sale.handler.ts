import { db } from "@/db";
import { salesTable } from "@/db/schemas/sale.db.schema";
import type { InsertSaleType, UpdateSaleType } from "@/types/sale.type";
import { and, eq, gte, lte } from "drizzle-orm";

export const listSaleHandler = async (
  limit: number = 10,
  offset: number = 1,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(salesTable)
      .where(
        organizationId
          ? eq(salesTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing sales:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing sales",
    );
  }
};

export const listSaleByDateByOrganizationIdHandler = async (
  date: string,
  organizationId: string,
) => {
  try {
    const result = await db
      .select()
      .from(salesTable)
      .where(
        and(
          eq(salesTable.saleDate, date),
          eq(salesTable.organizationId, organizationId),
        ),
      );
    return result;
  } catch (error) {
    console.error("Error listing sales by date and organizationId:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing sales by date and organizationId",
    );
  }
};

export const listSaleByDateByMachineIdHandler = async (
  date: string,
  machineId: number,
) => {
  try {
    const result = await db
      .select()
      .from(salesTable)
      .where(
        and(eq(salesTable.saleDate, date), eq(salesTable.machineId, machineId)),
      );
    return result;
  } catch (error) {
    console.error("Error listing sales by date and machineId:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing sales by date and machineId",
    );
  }
};

export const listSaleByDateRangeByOrganizationIdHandler = async (
  startDate: string,
  endDate: string,
  organizationId: string,
) => {
  try {
    const result = await db
      .select()
      .from(salesTable)
      .where(
        and(
          eq(salesTable.organizationId, organizationId),
          gte(salesTable.saleDate, startDate),
          lte(salesTable.saleDate, endDate),
        ),
      );
    return result;
  } catch (error) {
    console.error(
      "Error listing sales by date range and organizationId:",
      error,
    );
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing sales by date range and organizationId",
    );
  }
};

export const listSaleByDateRangeByMachineIdHandler = async (
  startDate: string,
  endDate: string,
  machineId: number,
) => {
  try {
    const result = await db
      .select()
      .from(salesTable)
      .where(
        and(
          eq(salesTable.machineId, machineId),
          gte(salesTable.saleDate, startDate),
          lte(salesTable.saleDate, endDate),
        ),
      );
    return result;
  } catch (error) {
    console.error("Error listing sales by date range and machineId:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing sales by date range and machineId",
    );
  }
};

export const fetchSaleByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(salesTable)
      .where(eq(salesTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching sale by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching sale by id",
    );
  }
};

export const createSaleHandler = async (sale: InsertSaleType) => {
  try {
    const result = await db.insert(salesTable).values(sale).returning();
    return result;
  } catch (error) {
    console.error("Error creating sale:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating sale",
    );
  }
};

export const updateSaleHandler = async (id: number, sale: UpdateSaleType) => {
  try {
    const result = await db
      .update(salesTable)
      .set(sale)
      .where(eq(salesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating sale:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating sale",
    );
  }
};

export const deleteSaleHandler = async (id: number) => {
  try {
    const result = await db
      .delete(salesTable)
      .where(eq(salesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting sale:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting sale",
    );
  }
};
