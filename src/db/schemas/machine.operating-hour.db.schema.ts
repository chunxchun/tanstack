import { sql } from "drizzle-orm";
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { machinesTable } from "./machine.db.schema";
import { operatingHoursTable } from "./operating-hour.db.schema";

export const machineOperatingHourTables = sqliteTable(
  "machine_operating_hours",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    machineId: integer("machine_id")
      .notNull()
      .references(() => machinesTable.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    operatingHourId: integer("operating_hour_id")
      .notNull()
      .references(() => operatingHoursTable.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    createdAt: integer("created_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
    updatedAt: integer("updated_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
      .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  },
);
