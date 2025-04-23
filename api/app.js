import express from "express";
import * as indexRouter from "./routes/index.js";
import { mongo_connection } from "./helper/mongodb.js";
import pino from "pino-http";

const app = express();

app.use(pino());
app.use(express.json());

indexRouter.initialize(app);
mongo_connection();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
