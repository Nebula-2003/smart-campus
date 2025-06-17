import express from "express";
import routes from "./routes/index.js";
import { connectToMongoDB } from "./helper/mongodb.js";
import { reqResLogger } from "./helper/logger.js";
import logger from "./helper/logger.js";

const app = express();

app.use(reqResLogger);
app.use(express.json());

const start = async () => {
  try {
    await connectToMongoDB();
    app.use(routes);
    app.listen(process.env.PORT, () =>
      logger.info(`Server running on port ${process.env.PORT}`),
    );
  } catch (err) {
    logger.fatal(err, "Unable to start server");
    process.exit(1);
  }
};

start();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
