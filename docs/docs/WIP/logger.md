---
id: logger
title: Logger
---

## Overview

The `logger.js` file sets up a logging system using the `pino` library. It configures two transports: one for logging to the console and another for sending logs to a Grafana Loki instance. This allows for both local development logging and centralized logging in a production environment.

## Dependencies

-   `pino`: A fast and lightweight logger for Node.js.
-   `pino-http`: A logger for HTTP requests.
-   `node:crypto`: Used to generate random UUIDs for request IDs.

## Configuration

The logger is configured using the following environment variables:

-   `GRAFANA_USERNAME`: The username for authenticating with Grafana Loki.
-   `GRAFANA_PASSWORD`: The password for authenticating with Grafana Loki.
-   `APP_NAME`: The name of the application, used as a label in Loki.
-   `NODE_ENV`: The environment (e.g., `development`, `production`), used as a label in Loki.
-   `GRAFANA_LOGS_HOST`: The host of the Grafana Loki instance.

## Transports

The logger is configured with two transports:

1.  **File Transport**: Logs to standard output (the console).
2.  **Pino Loki Transport**: Sends logs to a Grafana Loki instance. It batches logs and sends them every second. The logs are labeled with the app name and environment.

## Logger Instance

A `pino` logger instance is created with the configured transports.

## Request/Response Logger

A `pino-http` logger is also created to log HTTP requests and responses. It generates a unique request ID for each request, which is also added to the response headers as `X-Request-Id`.

## Exports

-   `logger`: The main `pino` logger instance.
-   `reqResLogger`: The `pino-http` logger for logging requests and responses.
