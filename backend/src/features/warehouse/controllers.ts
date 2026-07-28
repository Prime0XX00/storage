import { NextFunction, Request, Response } from "express";

export const getAllWarehouses = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	res.send("All Warehouses");
};
