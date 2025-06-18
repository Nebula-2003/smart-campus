require("dotenv").config();

const { DOCKER_MONGO_URI, RUNNING_IN_CONTAINER, JWT_SECRET, PORT, LOCAL_MONGO_URL } = process.env;
const isRunningInContainer = RUNNING_IN_CONTAINER === "true";
const DB_MONGO_URL = isRunningInContainer ? DOCKER_MONGO_URI : LOCAL_MONGO_URL;

module.exports = {
  apps: [
    {
      name: "api-smart-campus",
      script: "node app.js | pino-pretty",
      watch: true,
      ignore_watch: ["node_modules", "public", "logs"],
      env_local: {
        PORT: PORT || 8080,
        NODE_ENV: "local",
        DOMAIN_URL: "http://127.0.0.1:8080",
        DB_MONGO_URL,
        JWT_SECRET: JWT_SECRET,
      },
    },
  ],
};
