---
id: classroom-routes
title: Classroom Routes
---

## Overview

The `classroom.routes.js` file defines the HTTP routes for the classroom service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./classroom.controller.js`: The controller functions for classrooms.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new classroom. Accessible to `admin` and `teacher` roles.
-   **`GET /:id`**: Retrieves a single classroom by its ID. Accessible to `student`, `teacher`, and `admin` roles.
-   **`GET /`**: Retrieves a list of all classrooms. Accessible to `student`, `teacher`, and `admin` roles.
-   **`PUT /:id`**: Updates an existing classroom by its ID. Accessible to `admin` and `teacher` roles.
-   **`DELETE /:id`**: Deletes a classroom by its ID. Accessible to the `admin` role only.

## Authorization

The `isAuthorized` middleware is used to protect the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the classroom service.
