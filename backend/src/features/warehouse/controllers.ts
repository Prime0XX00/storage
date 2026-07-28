import { NextFunction, Request, Response } from "express";
import { db } from "../../connection";
import { warehousesTable } from "../../db/schema";

export const getAllWarehouses = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const warehouses = await db.select().from(warehousesTable);
	res.json(warehouses);
};
