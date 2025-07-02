---
id: attendance-controller
title: Attendance Controller
---

## Overview

The `attendance.controller.js` file contains the controller functions for handling HTTP requests related to attendance. These functions are responsible for creating, retrieving, listing, updating, and deleting attendance records.

## Dependencies

-   `./attendance.services.js`: The core services for interacting with the attendance data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new attendance record.
-   **Request Body**: The attendance data.
-   **Responses**:
    -   `200 OK`: The attendance record was created successfully.
    -   `400 Bad Request`: An error occurred while creating the attendance record.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single attendance record by its ID.
-   **Request Parameters**: `id` - The ID of the attendance record.
-   **Responses**:
    -   `200 OK`: The attendance record was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the attendance record.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all attendance records.
-   **Responses**:
    -   `200 OK`: The list of attendance records was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of attendance records.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing attendance record by its ID.
-   **Request Parameters**: `id` - The ID of the attendance record.
-   **Request Body**: The updated attendance data.
-   **Responses**:
    -   `200 OK`: The attendance record was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the attendance record.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes an attendance record by its ID.
-   **Request Parameters**: `id` - The ID of the attendance record.
-   **Responses**:
    -   `200 OK`: The attendance record was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the attendance record.
    -   `500 Internal Server Error`: An unexpected error occurred.
