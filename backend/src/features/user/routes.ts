import express from "express";
import { getAllUsers, registerUser } from "./controllers";

export const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/register", registerUser);
