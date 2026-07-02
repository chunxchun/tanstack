import { machinesTable } from "#/db/schemas/machine.db.schema";
import { db } from "@/db";
import type {
  InsertMachineType,
  UpdateMachineType,
} from "@/types/machine.type";
import { eq } from "drizzle-orm";

export const listMachineHandler = async (
  limit: number = 10,
  offset: number = 1,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(machinesTable)
      .where(
        organizationId
          ? eq(machinesTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing machines:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing machines",
    );
  }
};

export const listMachineByOrganizationIdHandler = async (
  organizationId: string,
) => {
  try {
    const result = await db
      .select()
      .from(machinesTable)
      .where(eq(machinesTable.organizationId, organizationId));
    return result;
  } catch (error) {
    console.error("Error listing machines by organization id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing machines by organization id",
    );
  }
};

export const fetchMachineByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(machinesTable)
      .where(eq(machinesTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching machine by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching machine by id",
    );
  }
};

export const fetchMachineByLocationIdHandler = async (locationId: number) => {
  try {
    const result = await db
      .select()
      .from(machinesTable)
      .where(eq(machinesTable.locationId, locationId));
    return result;
  } catch (error) {
    console.error("Error fetching machines by location id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching machines by location id",
    );
  }
};

export const createMachineHandler = async (machine: InsertMachineType) => {
  try {
    const result = await db.insert(machinesTable).values(machine).returning();
    return result;
  } catch (error) {
    console.error("Error creating machine:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating machine",
    );
  }
};

export const updateMachineByIdHandler = async (
  id: number,
  machine: UpdateMachineType,
) => {
  try {
    const result = await db
      .update(machinesTable)
      .set(machine)
      .where(eq(machinesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating machine:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating machine",
    );
  }
};

export const deleteMachineByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(machinesTable)
      .where(eq(machinesTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting machine:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting machine",
    );
  }
};
