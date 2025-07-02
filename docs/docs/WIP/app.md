---
id: app
title: Application Entry Point
---

## Overview

This file serves as the main entry point for the Express application, setting up middleware, connecting to the database, and starting the server.

## Dependencies

-   `express`: Web framework.
-   `./helper/logger.js`: Custom logger and request/response logger.
-   `./helper/mongodb.js`: MongoDB connection utility.
-   `./routes/index.js`: Main application routes.
-   `./jobs/backgroundJobs.js`: Background job workers.

## Functionality

-   Initializes an Express application.
-   Applies request/response logging and JSON body parsing middleware.
-   **`start()` function**:
    -   Connects to MongoDB.
    -   Mounts the main application routes.
    -   Imports and initializes background job workers.
    -   Starts the Express server on the port specified in `process.env.PORT`.
    -   Handles errors during startup, logging them and exiting the process.

## Exports

-   `app`: The Express application instance.
