import { sql } from "drizzle-orm";
import { integer, sqliteTable, unique } from "drizzle-orm/sqlite-core";
import { machinesTable } from "./machine.db.schema";
import { menusTable } from "./menu.db.schema";

export const menusMachinesTable = sqliteTable(
  "menus_machines",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    menuId: integer("menu_id")
      .references(() => menusTable.id, { onDelete: "restrict" })
      .notNull(),
    machineId: integer("machine_id")
      .references(() => machinesTable.id, { onDelete: "restrict" })
      .notNull(),
    createdAt: integer("created_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`), // Store as ISO-8601 timestamp
    updatedAt: integer("updated_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
      .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`), // Store as ISO-8601 timestamp
  },
  (table) => [unique().on(table.menuId, table.machineId)],
);
