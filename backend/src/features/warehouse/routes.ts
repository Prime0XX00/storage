import express, { Request, Response, Application } from "express";
import { getAllWarehouses } from "./controllers";

export const warehouseRouter = express.Router();

warehouseRouter.get("/", getAllWarehouses);
