import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const operatingHoursTable = sqliteTable("operation_hours", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("name", { length: 100 }),
  description: text("description", { length: 200 }),
  dayOfWeek: integer("day_of_week").notNull(), // 0 for Sunday, 6 for Saturday
  isClosed: integer("is_closed", { mode: "boolean" }).notNull().default(false),
  openingTime: text("opening_time").notNull(),
  closingTime: text("closing_time").notNull(),
  createdAt: integer("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  updatedAt: integer("updated_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
});
