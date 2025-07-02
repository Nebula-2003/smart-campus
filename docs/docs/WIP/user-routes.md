---
id: user-routes
title: User Routes
---

## Overview

This file defines HTTP routes for user management, mapping them to controller functions and applying authorization middleware.

## Dependencies

-   `express`: Web framework.
-   `./user.controller.js`: User controller functions.
-   `../../middleware/guards.js`: Authorization middleware.

## Routes

-   **`POST /`**: Create user (Admin, Teacher).
-   **`POST /login`**: User login (unprotected).
-   **`GET /:id`**: Get user by ID (Admin).
-   **`GET /`**: List all users (Admin).
-   **`PUT /:id`**: Update user by ID (Admin).
-   **`DELETE /:id`**: Delete user by ID (Admin).

## Exports

-   `router`: Express router for user services.
