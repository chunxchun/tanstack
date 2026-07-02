import { db } from "@/db";
import {
  machineOperatingHourTables,
} from "@/db/schemas/machine.operating-hour.db.schema";
import type {
  InsertMachineOperatingHourType,
  UpdateMachineOperatingHourType,
} from "@/types/machine.operating-hour.type";
import { eq } from "drizzle-orm";

export const listMachineOperatingHourHandler = async (
  limit: number = 10,
  offset: number = 1,
) => {
  try {
    const result = await db
      .select()
      .from(machineOperatingHourTables)
      .limit(limit)
      .offset(offset);

    if (!result || result.length === 0) {
      throw new Error("No machine operating schedules found");
    }

    return result;
  } catch (error) {
    console.error("Error listing machine operating schedules:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const fetchMachineOperatingHourByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(machineOperatingHourTables)
      .where(eq(machineOperatingHourTables.id, id))
      .limit(1);

    if (!result || result.length === 0) {
      throw new Error("Machine operating schedule not found");
    }

    return result;
  } catch (error) {
    console.error("Error fetching machine operating schedule by id:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const fetchMachineOperatingHourByMachineIdHandler = async (
  machineId: number,
) => {
  try {
    const result = await db
      .select()
      .from(machineOperatingHourTables)
      .where(eq(machineOperatingHourTables.machineId, machineId));

    if (!result || result.length === 0) {
      throw new Error(
        "Machine operating schedules not found for machine id: " + machineId,
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Error fetching machine operating schedules by machine id:",
      error,
    );
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const createMachineOperatingHourHandler = async (
  machineOperatingHour: InsertMachineOperatingHourType,
) => {
  try {
    const result = await db
      .insert(machineOperatingHourTables)
      .values(machineOperatingHour)
      .returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to create machine operating schedule");
    }

    return result;
  } catch (error) {
    console.error("Error creating machine operating schedule:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const updateMachineOperatingHourByIdHandler = async (
  id: number,
  machineOperatingHour: UpdateMachineOperatingHourType,
) => {
  try {
    const result = await db
      .update(machineOperatingHourTables)
      .set(machineOperatingHour)
      .where(eq(machineOperatingHourTables.id, id))
      .returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to update machine operating schedule");
    }

    return result;
  } catch (error) {
    console.error("Error updating machine operating schedule:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const deleteMachineOperatingHourByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(machineOperatingHourTables)
      .where(eq(machineOperatingHourTables.id, id))
      .returning();

    if (!result || result.length === 0) {
      throw new Error("Failed to delete machine operating schedule");
    }

    return result;
  } catch (error) {
    console.error("Error deleting machine operating schedule:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};
