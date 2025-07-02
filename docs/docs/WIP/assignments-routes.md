---
id: assignments-routes
title: Assignments Routes
---

## Overview

The `assignments.routes.js` file defines the HTTP routes for the assignments service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./assignments.controller.js`: The controller functions for assignments.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new assignment. Accessible to `teacher` and `admin` roles.
-   **`GET /:id`**: Retrieves a single assignment by its ID. Accessible to `student`, `teacher`, and `admin` roles.
-   **`GET /`**: Retrieves a list of all assignments. Accessible to `student`, `teacher`, and `admin` roles.
-   **`PUT /:id`**: Updates an existing assignment by its ID. Accessible to `teacher` and `admin` roles.
-   **`DELETE /:id`**: Deletes an assignment by its ID. Accessible to `teacher` and `admin` roles.

## Authorization

The `isAuthorized` middleware is used to protect the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the assignments service.
