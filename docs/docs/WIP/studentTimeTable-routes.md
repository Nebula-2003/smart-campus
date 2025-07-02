---
id: studentTimeTable-routes
title: Student Time Table Routes
---

## Overview

The `studentTimeTable.routes.js` file defines the HTTP routes for the student timetable service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./studentTimeTable.controller.js`: The controller functions for student timetables.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new student timetable entry. Accessible to `teacher` and `admin` roles.
-   **`GET /:id`**: Retrieves a single student timetable entry by its ID. Accessible to `student`, `teacher`, and `admin` roles.
-   **`GET /`**: Retrieves a list of all student timetable entries. Accessible to `student`, `teacher`, and `admin` roles.
-   **`GET /get-by-student/:id`**: Retrieves a list of student timetable entries for a specific student. Accessible to `student`, `teacher`, and `admin` roles.
-   **`PUT /:id`**: Updates an existing student timetable entry by its ID. Accessible to `teacher` and `admin` roles.
-   **`DELETE /:id`**: Deletes a student timetable entry by its ID. Accessible to `admin` role only.

## Authorization

The `isAuthorized` middleware is used to protect the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the student timetable service.
