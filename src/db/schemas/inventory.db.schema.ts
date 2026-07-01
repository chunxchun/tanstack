import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { organization as organizationsTable } from "./auth.db.schema";
import { foodItemsTable } from "./food-item.db.schema";
import { machinesTable } from "./machine.db.schema";

export const inventoriesTable = sqliteTable("inventories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizationsTable.id, {
      onDelete: "restrict",
      onUpdate: "restrict",
    }),
  machineId: integer("machine_id")
    .notNull()
    .references(() => machinesTable.id, {
      onDelete: "restrict",
      onUpdate: "restrict",
    }),
  foodItemId: integer("food_item_id")
    .notNull()
    .references(() => foodItemsTable.id, {
      onDelete: "restrict",
      onUpdate: "restrict",
    }),
  quantity: integer("quantity").notNull(),
  date: text("date").notNull(),
  createdAt: integer("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  updatedAt: integer("updated_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
});
