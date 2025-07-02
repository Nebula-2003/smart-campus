---
id: scanner-controller
title: Scanner Controller
---

## Overview

The `scanner.controller.js` file contains the controller functions for handling HTTP requests related to scanners. These functions are responsible for creating, retrieving, listing, updating, and deleting scanner records.

## Dependencies

-   `./scanner.services.js`: The core services for interacting with the scanner data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new scanner record.
-   **Request Body**: The scanner data.
-   **Responses**:
    -   `200 OK`: The scanner was created successfully.
    -   `400 Bad Request`: An error occurred while creating the scanner.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single scanner record by its ID.
-   **Request Parameters**: `id` - The ID of the scanner.
-   **Responses**:
    -   `200 OK`: The scanner was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the scanner (e.g., scanner not found).
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all scanner records.
-   **Responses**:
    -   `200 OK`: The list of scanners was retrieved successfully.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing scanner record by its ID.
-   **Request Parameters**: `id` - The ID of the scanner.
-   **Request Body**: The updated scanner data.
-   **Responses**:
    -   `200 OK`: The scanner was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the scanner (e.g., scanner not found).
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes a scanner record by its ID.
-   **Request Parameters**: `id` - The ID of the scanner.
-   **Responses**:
    -   `200 OK`: The scanner was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the scanner (e.g., scanner not found).
    -   `500 Internal Server Error`: An unexpected error occurred.
