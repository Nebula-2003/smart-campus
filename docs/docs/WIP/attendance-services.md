---
id: attendance-services
title: Attendance Services
---

## Overview

The `attendance.services.js` file provides a set of core services for interacting with the `attendance` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./attendance.model.js`: The Mongoose model for the `attendance` collection.

## `attendanceCoreServices` Object

The `attendanceCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new attendance record.
-   **Parameters**: `reqBody` - The data for the new attendance record.
-   **Returns**: A promise that resolves to the newly created attendance document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single attendance record that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the attendance document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all attendance records that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of attendance documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds an attendance record by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated attendance document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes an attendance record that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" attendance document.

## Exports

-   `attendanceCoreServices`: The object containing the core services for attendance.
