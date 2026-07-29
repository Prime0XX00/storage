import { Request, Response, NextFunction } from "express";

export const errorHanderMiddleware = async (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const code = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(code).json({
		code: code,
		error: err.name,
		message: err.message,
	});
};
