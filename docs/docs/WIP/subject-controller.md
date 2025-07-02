---
id: subject-controller
title: Subject Controller
---

## Overview

The `subject.controller.js` file contains the controller functions for handling HTTP requests related to subjects. These functions are responsible for creating, retrieving, listing, updating, and deleting subject records.

## Dependencies

-   `./subject.services.js`: The core services for interacting with the subject data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new subject record.
-   **Request Body**: The subject data.
-   **Responses**:
    -   `200 OK`: The subject was created successfully.
    -   `400 Bad Request`: An error occurred while creating the subject.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single subject record by its ID.
-   **Request Parameters**: `id` - The ID of the subject.
-   **Responses**:
    -   `200 OK`: The subject was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the subject.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all subject records.
-   **Responses**:
    -   `200 OK`: The list of subjects was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of subjects.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing subject record by its ID.
-   **Request Parameters**: `id` - The ID of the subject.
-   **Request Body**: The updated subject data.
-   **Responses**:
    -   `200 OK`: The subject was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the subject.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes a subject record by its ID.
-   **Request Parameters**: `id` - The ID of the subject.
-   **Responses**:
    -   `200 OK`: The subject was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the subject.
    -   `500 Internal Server Error`: An unexpected error occurred.
