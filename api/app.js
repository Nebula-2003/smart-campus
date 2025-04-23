import express from "express";
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
    console.error(error);
    res.json({
        status: error.status || 500,
        message: error.message || "Internal Server Error",
    });
    next();
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
