import { sql } from "drizzle-orm";
import { integer, sqliteTable, unique } from "drizzle-orm/sqlite-core";
import { foodItemsTable } from "./food-item.db.schema";
import { menusTable } from "./menu.db.schema";

export const menusFoodItemsTable = sqliteTable(
  "menus_food_items",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    menuId: integer("menu_id")
      .notNull()
      .references(() => menusTable.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    foodItemId: integer("food_item_id")
      .notNull()
      .references(() => foodItemsTable.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    createdAt: integer("created_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`), // Store as ISO-8601 timestamp
    updatedAt: integer("updated_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
      .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`), // Store as ISO-8601 timestamp
  },
  (table) => [unique().on(table.menuId, table.foodItemId)],
);
