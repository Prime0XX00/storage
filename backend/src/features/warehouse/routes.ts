import express, { Request, Response, Application } from "express";
import { getAllWarehouses, postNewWarehouse } from "./controllers";

export const warehouseRouter = express.Router();

warehouseRouter.get("/", getAllWarehouses);
warehouseRouter.post("/", postNewWarehouse);
