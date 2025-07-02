---
id: timeTable-routes
title: Time Table Routes
---

## Overview

The `timeTable.routes.js` file defines the HTTP routes for the timetable service. It maps the routes to the corresponding controller functions and applies authorization middleware to protect the routes.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./timeTable.controller.js`: The controller functions for timetables.
-   `../../middleware/guards.js`: The authorization middleware.

## Routes

-   **`POST /`**: Creates a new timetable entry. Accessible to `teacher` and `admin` roles.
-   **`GET /:id`**: Retrieves a single timetable entry by its ID. Accessible to `student`, `teacher`, and `admin` roles.
-   **`GET /`**: Retrieves a list of all timetable entries. Accessible to `student`, `teacher`, and `admin` roles.
-   **`PUT /:id`**: Updates an existing timetable entry by its ID. Accessible to `teacher` and `admin` roles.
-   **`DELETE /:id`**: Deletes a timetable entry by its ID. Accessible to `admin` role only.

## Authorization

The `isAuthorized` middleware is used to protect the routes. It ensures that only users with the specified roles can access the routes.

## Exports

-   `router`: The Express router for the timetable service.
