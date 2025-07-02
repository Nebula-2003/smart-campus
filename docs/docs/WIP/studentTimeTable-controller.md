---
id: studentTimeTable-controller
title: Student Time Table Controller
---

## Overview

The `studentTimeTable.controller.js` file contains the controller functions for handling HTTP requests related to student timetables. These functions are responsible for creating, retrieving, listing, updating, and deleting student timetable records.

## Dependencies

-   `./studentTimeTable.services.js`: The core services for interacting with the student timetable data in the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Creates a new student timetable record.
-   **Request Body**: The student timetable data.
-   **Responses**:
    -   `200 OK`: The student timetable was created successfully.
    -   `400 Bad Request`: An error occurred while creating the student timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `get(req, res)`

-   **Description**: Retrieves a single student timetable record by its ID.
-   **Request Parameters**: `id` - The ID of the student timetable record.
-   **Responses**:
    -   `200 OK`: The student timetable was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the student timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `list(req, res)`

-   **Description**: Retrieves a list of all student timetable records.
-   **Responses**:
    -   `200 OK`: The list of student timetables was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of student timetables.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `getByStudent(req, res)`

-   **Description**: Retrieves a list of student timetable records for a specific student, populating related subject, classroom, and teacher information.
-   **Request Parameters**: `id` - The ID of the student.
-   **Responses**:
    -   `200 OK`: The list of student timetables was retrieved successfully.
    -   `400 Bad Request`: An error occurred while retrieving the list of student timetables.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `update(req, res)`

-   **Description**: Updates an existing student timetable record by its ID.
-   **Request Parameters**: `id` - The ID of the student timetable record.
-   **Request Body**: The updated student timetable data.
-   **Responses**:
    -   `200 OK`: The student timetable was updated successfully.
    -   `400 Bad Request`: An error occurred while updating the student timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.

### `remove(req, res)`

-   **Description**: Deletes a student timetable record by its ID.
-   **Request Parameters**: `id` - The ID of the student timetable record.
-   **Responses**:
    -   `200 OK`: The student timetable was deleted successfully.
    -   `400 Bad Request`: An error occurred while deleting the student timetable.
    -   `500 Internal Server Error`: An unexpected error occurred.
