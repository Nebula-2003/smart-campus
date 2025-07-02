---
id: routes
title: API Routes
---

## Overview

The `index.js` file in the `routes` directory is the main router for the application. It imports all the individual route modules from the `services` directory and combines them into a single Express router.

## Dependencies

-   `express`: The web framework for Node.js.
-   All the route modules from the `services` directory.

## Routes

### Root Route

-   **Path**: `/`
-   **Method**: `GET`
-   **Description**: A welcome message for the API.

### API Routes

The following routes are mounted under the `/api` path:

-   `/api/assignments`: Routes for managing assignments.
-   `/api/attendance`: Routes for managing attendance.
-   `/api/classroom`: Routes for managing classrooms.
-   `/api/nfc-reader`: Routes for managing NFC reader entries.
-   `/api/timeTable`: Routes for managing timetables.
-   `/api/student-timetable`: Routes for managing student timetables.
-   `/api/subject`: Routes for managing subjects.
-   `/api/scanner`: Routes for managing scanners.
-   `/api/user`: Routes for managing users.

### Ping Route

-   **Path**: `/ping`
-   **Method**: `GET`
-   **Description**: A simple health check route that returns `pong`.

## Error Handling

### 404 Not Found

A middleware is included to handle requests to routes that do not exist. It returns a `404 Not Found` response.

### General Error Handler

A general error handling middleware is also included. It logs the error and returns a JSON response with the error status and message.

## Exports

-   `router`: The main Express router for the application.
