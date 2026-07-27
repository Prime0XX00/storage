import express, { Request, Response, Application } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express with TypeScript2!");
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
