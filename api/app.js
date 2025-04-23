import express from "express";
import * as commonResponse from "./helper/commonResponse.js";
import * as indexRouter from "./routes/index.js";
import { mongo_connection } from "./helper/mongodb.js";
import pino from "pino-http";

const app = express();

app.use(pino());
app.use(express.json());

indexRouter.initialize(app);
mongo_connection();

app.use((req, res, next) => {
    const error = new Error("NOT_FOUND");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return commonResponse.error(res, error.message, error.status);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
