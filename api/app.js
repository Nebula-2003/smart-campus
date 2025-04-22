import express from "express";
import * as commonResponse from "./helper/commonResponse.js";
import * as indexRouter from "./routes/index.js";
import { mongodb } from "./helper/index.js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

indexRouter.initialize(app);
mongodb.mongo_connection();

app.use((req, res, next) => {
	const error = new Error("NOT_FOUND");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	return commonResponse.error(res, error.message, error.status);
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	res.status(err.status || 500);
	res.render("error");
});

export default app;
