import { sql } from "drizzle-orm";
import {
  integer,
  real,
  sqliteTable,
  text,
  unique,
} from "drizzle-orm/sqlite-core";
import * as z from "zod";
import { organization as organizationsTable } from "./auth.db.schema";
import { currencyValues } from "./shared.db.schema";

export const foodCategoryValues = ["bento", "snack", "drink"] as const;
export const foodCategoryEnum = z.enum(foodCategoryValues);
export type FoodCategory = (typeof foodCategoryValues)[number];

export const foodItemsTable = sqliteTable(
  "food_items",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizationsTable.id, {
        onDelete: "restrict",
        onUpdate: "restrict",
      }),
    name: text("name").notNull(),
    imageUrl: text("image_url"),
    description: text("description", { length: 200 }),
    category: text("category", { enum: foodCategoryValues })
      .notNull()
      .default("bento"),
    skuCode: text("sku_code", { length: 100 }).notNull(),
    price: real("price").notNull(),
    currency: text("currency", { enum: currencyValues })
      .notNull()
      .default("AUD"),
    createdAt: integer("created_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
    updatedAt: integer("updated_at")
      .notNull()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
      .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  },
  (table) => [unique().on(table.organizationId, table.skuCode)],
);
