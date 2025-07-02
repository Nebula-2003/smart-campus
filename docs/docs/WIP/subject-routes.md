---
id: subject-routes
title: Subject Routes
---

## Overview

The `subject.routes.js` file defines the HTTP routes for the subject service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./subject.controller.js`: The controller functions for subjects.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new subject. Accessible to `admin` and `teacher` roles.
-   **`GET /:id`**: Retrieves a single subject by its ID. Accessible to `admin`, `teacher`, and `student` roles.
-   **`GET /`**: Retrieves a list of all subjects. Accessible to `admin`, `teacher`, and `student` roles.
-   **`PUT /:id`**: Updates an existing subject by its ID. Accessible to `admin` and `teacher` roles.
-   **`DELETE /:id`**: Deletes a subject by its ID. Accessible to `admin` role only.

## Authorization

The `isAuthorized` middleware is used to protect the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the subject service.
