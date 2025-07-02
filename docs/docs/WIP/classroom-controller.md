---
id: classroom-controller
title: Classroom Controller
---

## Overview

The `classroom.controller.js` file contains the controller functions for handling HTTP requests related to classrooms. These functions are responsible for creating, retrieving, listing, updating, and deleting classrooms.

## Dependencies

-   `./classroom.services.js`: The core services for interacting with the classroom data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new classroom.
-   **Request Body**: The classroom data.
-   **Responses**:
    -   `200 OK`: The classroom was created successfully.
    -   `400 Bad Request`: An error occurred while creating the classroom.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single classroom by its ID.
-   **Request Parameters**: `id` - The ID of the classroom.
-   **Responses**:
    -   `200 OK`: The classroom was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the classroom.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all classrooms.
-   **Responses**:
    -   `200 OK`: The list of classrooms was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of classrooms.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing classroom by its ID.
-   **Request Parameters**: `id` - The ID of the classroom.
-   **Request Body**: The updated classroom data.
-   **Responses**:
    -   `200 OK`: The classroom was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the classroom.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes a classroom by its ID.
-   **Request Parameters**: `id` - The ID of the classroom.
-   **Responses**:
    -   `200 OK`: The classroom was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the classroom.
    -   `500 Internal Server Error`: An unexpected error occurred.
