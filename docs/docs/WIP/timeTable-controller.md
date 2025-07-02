---
id: timeTable-controller
title: Time Table Controller
---

## Overview

The `timeTable.controller.js` file contains the controller functions for handling HTTP requests related to timetables. These functions are responsible for creating, retrieving, listing, updating, and deleting timetable records.

## Dependencies

-   `./timeTable.services.js`: The core services for interacting with the timetable data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new timetable record.
-   **Request Body**: The timetable data.
-   **Responses**:
    -   `200 OK`: The timetable was created successfully.
    -   `400 Bad Request`: An error occurred while creating the timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single timetable record by its ID.
-   **Request Parameters**: `id` - The ID of the timetable.
-   **Responses**:
    -   `200 OK`: The timetable was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all timetable records.
-   **Responses**:
    -   `200 OK`: The list of timetables was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of timetables.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing timetable record by its ID.
-   **Request Parameters**: `id` - The ID of the timetable.
-   **Request Body**: The updated timetable data.
-   **Responses**:
    -   `200 OK`: The timetable was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes a timetable record by its ID.
-   **Request Parameters**: `id` - The ID of the timetable.
-   **Responses**:
    -   `200 OK`: The timetable was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.
