import { NextFunction, Request, Response } from "express";
import { db } from "../../connection";
import { eq } from "drizzle-orm";
import { warehousesTable } from "../../db/schema";

export const getAllWarehouses = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const warehouses = await db.select().from(warehousesTable);
	res.json(warehouses);
};

export const postNewWarehouse = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const body = req.body;

	const { name, code } = body;

	if (!name) throw new Error("Parameter 'name' is missing.");
	if (!code) throw new Error("Parameter 'code' is missing.");

	const existingWarehouse = await db
		.select()
		.from(warehousesTable)
		.where(eq(warehousesTable.code, code));

	if (existingWarehouse)
		throw new Error(`Warehouse with code '${code}' already exists.`);

	const insertedWarehouse = await db
		.insert(warehousesTable)
		.values({ name, code })
		.returning()
		.onConflictDoNothing();

	res.json(insertedWarehouse);
};
