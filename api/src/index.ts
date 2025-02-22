import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { initialize } from "./routes/index.js";
import { mongodb } from "./helper/index.js";

import { pinoHttp } from "pino-http";

dotenv.config();
const app = express();

app.use(pinoHttp());

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongodb.mongoConnection();

initialize(app);

const port = process.env.PORT || 3000;

const server = app.listen(port);

server.on("listening", () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
