import { sql } from "drizzle-orm";
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { machinesTable } from "./machine.db.schema";
import { specialHoursTable } from "./special-hour.db.schema";

export const machineSpecialHoursTable = sqliteTable("machine_special_hours", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  machineId: integer("machine_id")
    .notNull()
    .references(() => machinesTable.id, {
      onDelete: "restrict",
      onUpdate: "restrict",
    }),
  specialHourId: integer("special_hour_id")
    .notNull()
    .references(() => specialHoursTable.id, {
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
});
