---
id: scanner-routes
title: Scanner Routes
---

## Overview

The `scanner.routes.js` file defines the HTTP routes for the scanner service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./scanner.controller.js`: The controller functions for scanners.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new scanner. Accessible to `admin` role only.
-   **`GET /:id`**: Retrieves a single scanner by its ID. Accessible to `admin` and `teacher` roles.
-   **`GET /`**: Retrieves a list of all scanners. Accessible to `admin` and `teacher` roles.
-   **`PUT /:id`**: Updates an existing scanner by its ID. Accessible to `admin` role only.
-   **`DELETE /:id`**: Deletes a scanner by its ID. Accessible to `admin` role only.

## Authorization

The `isAuthorized` middleware is used to protect the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the scanner service.
