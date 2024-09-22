import { usersRoutes } from "../services/users/index.js";
import { Express } from "express";
import { home, ping, notFound, corsMiddleware } from "./routes.js";
import { countryRoutes } from "../services/country/index.js";
import { citiesRoutes } from "../services/city/index.js";
import { statesRoutes } from "../services/state/index.js";

const initialize = (app: Express) => {
    app.use(corsMiddleware);
    app.get("/", home);
    app.get("/ping", ping);
    app.use("/api/users", usersRoutes);
    app.use("/api/country", countryRoutes);
    app.use("/api/state", statesRoutes);
    app.use("/api/city", citiesRoutes);
    app.use(notFound);
};

export { initialize };
