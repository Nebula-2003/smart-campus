import pino from "pino";
import pinoHttp from "pino-http";
import { randomUUID } from "node:crypto";

const { GRAFANA_USERNAME, GRAFANA_PASSWORD, APP_NAME, NODE_ENV, GRAFANA_LOGS_HOST } = process.env;

const transport = pino.transport({
    targets: [
        {
            target: "pino/file",
            options: { destination: 1 },
        },
        {
            target: "pino-loki",
            options: {
                batching: true,
                interval: 1,

                host: GRAFANA_LOGS_HOST,
                basicAuth: {
                    username: GRAFANA_USERNAME,
                    password: GRAFANA_PASSWORD,
                },
                labels: {
                    app: APP_NAME,
                    env: NODE_ENV,
                },
            },
        },
    ],
});

const logger = pino(transport);

export default logger;

const reqResLogger = pinoHttp({
    logger: logger,
    genReqId: (req, res) => {
        const existingID = req.id ?? req.headers["x-request-id"];
        if (existingID) return existingID;

        const id = randomUUID();
        res.setHeader("X-Request-Id", id);
        return id;
    },
});

export { reqResLogger };
