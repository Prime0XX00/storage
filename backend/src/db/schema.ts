import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const warehousesTable = sqliteTable("warehouse", {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	code: text().notNull().unique(),
});
