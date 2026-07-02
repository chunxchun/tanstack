import { db } from "@/db";
import { machineSpecialHoursTable } from "@/db/schemas/machine.special-hour.db.schema";
import type {
  InsertMachineSpecialHourType,
  UpdateMachineSpecialHourType,
} from "@/types/machine.special-hour.type";
import { eq } from "drizzle-orm";

export const listMachineSpecialHourHandler = async (
  limit: number = 10,
  offset: number = 1,
) => {
  try {
    const result = await db
      .select()
      .from(machineSpecialHoursTable)
      .limit(limit)
      .offset(offset);

    if (!result || result.length === 0) {
      throw new Error("No machine special schedules found");
    }

    return result;
  } catch (error) {
    console.error("Error listing machine special schedules:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing machine special schedules",
    );
  }
};

export const fetchMachineSpecialHourByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(machineSpecialHoursTable)
      .where(eq(machineSpecialHoursTable.id, id))
      .limit(1);

    if (!result || result.length === 0) {
      throw new Error("Machine special schedule not found");
    }

    return result;
  } catch (error) {
    console.error("Error fetching machine special schedule by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching machine special schedule by id",
    );
  }
};

export const fetchMachineSpecialHourByMachineIdHandler = async (
  machineId: number,
) => {
  try {
    const result = await db
      .select()
      .from(machineSpecialHoursTable)
      .where(eq(machineSpecialHoursTable.machineId, machineId));

    if (!result || result.length === 0) {
      throw new Error(
        "Machine special schedules not found for machine id: " + machineId,
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Error fetching machine special schedules by machine id:",
      error,
    );
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching machine special schedules by machine id",
    );
  }
};

export const createMachineSpecialHourHandler = async (
  machineSpecialHour: InsertMachineSpecialHourType,
) => {
  try {
    const result = await db
      .insert(machineSpecialHoursTable)
      .values(machineSpecialHour)
      .returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to create machine special hour");
    }

    return result;
  } catch (error) {
    console.error("Error creating machine special hour:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while creating machine special hour",
    );
  }
};

export const updateMachineSpecialHourByIdHandler = async (
  id: number,
  machineSpecialHour: UpdateMachineSpecialHourType,
) => {
  try {
    const result = await db
      .update(machineSpecialHoursTable)
      .set(machineSpecialHour)
      .where(eq(machineSpecialHoursTable.id, id))
      .returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to update machine special hour");
    }

    return result;
  } catch (error) {
    console.error("Error updating machine special schedule:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while updating machine special schedule",
    );
  }
};

export const deleteMachineSpecialHourByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(machineSpecialHoursTable)
      .where(eq(machineSpecialHoursTable.id, id))
      .returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to delete machine special schedule");
    }

    return result;
  } catch (error) {
    console.error("Error deleting machine special schedule:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while deleting machine special schedule",
    );
  }
};
