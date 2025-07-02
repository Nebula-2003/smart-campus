---
id: constants-config
title: Constants Configuration
---

## Overview

This file defines configuration constants used across the application, primarily for connecting to Redis for BullMQ.

## Constants

-   **`bullMQConnectionObject`**: An object containing Redis connection details for BullMQ.
    -   `host`: Retrieved from `process.env.REDIS_HOST`.
    -   `port`: Retrieved from `process.env.REDIS_PORT`.

## Exports

-   `bullMQConnectionObject`: The Redis connection configuration object.
