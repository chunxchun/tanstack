import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import * as z from "zod";
import { organization as organizationsTable } from "./auth.db.schema";
import { foodItemsTable } from "./food-item.db.schema";
import { machinesTable } from "./machine.db.schema";

export const disposeReasonValues = [
  "expired",
  "damaged",
  "refunded",
  "other",
] as const;
export const disposeReasonEnum = z.enum(disposeReasonValues);
export type DisposeReason = (typeof disposeReasonValues)[number];

export const disposesTable = sqliteTable("disposes", {
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
  disposeDate: text("dispose_date").notNull(), // ISO 8601 format (YYYY-MM-DD)
  disposeTime: text("dispose_time").notNull(), // HH:MM format (e.g., "14:30")
  quantity: integer("quantity").notNull(),
  disposeReason: text("dispose_reason", {
    enum: disposeReasonValues,
  })
    .notNull()
    .default("other"),
  createdAt: integer("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`), // Store as ISO-8601 timestamp
  updatedAt: integer("updated_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
});
