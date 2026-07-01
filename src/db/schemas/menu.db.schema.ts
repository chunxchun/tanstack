import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { organization as organizationsTable } from "./auth.db.schema";

export const menusTable = sqliteTable("menus", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizationsTable.id, {
      onDelete: "restrict",
      onUpdate: "restrict",
    }),
  name: text("name", { length: 100 }).notNull(),
  description: text("description", { length: 200 }),
  coverPhotoUrl: text("cover_photo_url"),
  date: text("date").notNull(),
  createdAt: integer("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  updatedAt: integer("updated_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .$onUpdate(() => sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
});

