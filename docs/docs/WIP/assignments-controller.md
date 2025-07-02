---
id: assignments-controller
title: Assignments Controller
---

## Overview

The `assignments.controller.js` file contains the controller functions for handling HTTP requests related to assignments. These functions are responsible for creating, retrieving, listing, updating, and deleting assignments.

## Dependencies

-   `./assignments.services.js`: The core services for interacting with the assignments data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new assignment.
-   **Request Body**: The assignment data.
-   **Responses**:
    -   `200 OK`: The assignment was created successfully.
    -   `400 Bad Request`: An error occurred while creating the assignment.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single assignment by its ID.
-   **Request Parameters**: `id` - The ID of the assignment.
-   **Responses**:
    -   `200 OK`: The assignment was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the assignment.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all assignments.
-   **Responses**:
    -   `200 OK`: The list of assignments was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of assignments.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing assignment by its ID.
-   **Request Parameters**: `id` - The ID of the assignment.
-   **Request Body**: The updated assignment data.
-   **Responses**:
    -   `200 OK`: The assignment was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the assignment.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes an assignment by its ID.
-   **Request Parameters**: `id` - The ID of the assignment.
-   **Responses**:
    -   `200 OK`: The assignment was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the assignment.
    -   `500 Internal Server Error`: An unexpected error occurred.
