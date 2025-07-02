---
id: attendance-routes
title: Attendance Routes
---

## Overview

The `attendance.routes.js` file defines the HTTP routes for the attendance service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./attendance.controller.js`: The controller functions for attendance.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new attendance record. This route is not protected by the authorization middleware.
-   **`GET /:id`**: Retrieves a single attendance record by its ID. Accessible to `student`, `teacher`, and `admin` roles.
-   **`GET /`**: Retrieves a list of all attendance records. Accessible to `student`, `teacher`, and `admin` roles.
-   **`PUT /:id`**: Updates an existing attendance record by its ID. Accessible to `student`, `teacher`, and `admin` roles.
-   **`DELETE /:id`**: Deletes an attendance record by its ID. Accessible to `student`, `teacher`, and `admin` roles.

## Authorization

The `isAuthorized` middleware is used to protect most of the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the attendance service.
