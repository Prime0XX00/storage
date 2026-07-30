import { Request, Response, NextFunction } from "express";
import { db } from "../../connection";
import { userTable } from "../../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const getAllUsers = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const users = await db.select().from(userTable);
	res.json(users);
};

export const registerUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const body = req.body;

	const { first_name, last_name, username, password } = body;

	if (!first_name) throw new Error("Parameter 'first_name' is missing.");
	if (!last_name) throw new Error("Parameter 'last_name' is missing.");
	if (!username) throw new Error("Parameter 'username' is missing.");
	if (!password) throw new Error("Parameter 'password' is missing.");

	const existingUser = await db
		.select()
		.from(userTable)
		.where(eq(userTable.username, username));

	if (existingUser.length > 0) throw new Error("User already exists.");

	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await db
		.insert(userTable)
		.values({ first_name, last_name, username, password: hashedPassword })
		.returning();

	res.json(user);
};

export const loginUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const body = req.body;

	const { username, password } = body;

	if (!username) throw new Error("Parameter 'username' is missing.");
	if (!password) throw new Error("Parameter 'password' is missing.");

	const [existingUser] = await db
		.select()
		.from(userTable)
		.where(eq(userTable.username, username));

	if (!existingUser) throw new Error("User does not exists.");

	const isCorrectPassword = await bcrypt.compare(
		password,
		existingUser.password,
	);

	if (!isCorrectPassword) throw new Error("Entered password is wrong.");

	res.json(existingUser);
};
