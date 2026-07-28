import cors from "cors";
import express, { Request, Response, Application } from "express";
import { warehouseRouter } from "./features/warehouse/routes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/warehouse", warehouseRouter);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
