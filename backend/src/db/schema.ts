import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const warehousesTable = sqliteTable("warehouse", {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	code: text().notNull().unique(),
});

export const userTable = sqliteTable("user", {
	id: int().primaryKey({ autoIncrement: true }),
	first_name: text().notNull(),
	last_name: text().notNull(),
	username: text().notNull().unique(),
	password: text().notNull(),
});
