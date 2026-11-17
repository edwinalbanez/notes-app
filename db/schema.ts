import { PgTable, serial, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
    id: serial("id").primaryKey(),
    content: text("content").notNull(),
    important: boolean("important").notNull().default(false)
})