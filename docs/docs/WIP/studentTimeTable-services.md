---
id: studentTimeTable-services
title: Student Time Table Services
---

## Overview

The `studentTimeTable.services.js` file provides a set of core services for interacting with the `studentTimeTable` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./studentTimeTable.model.js`: The Mongoose model for the `studentTimeTable` collection.

## `studentTimeTableCoreServices` Object

The `studentTimeTableCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new student timetable entry.
-   **Parameters**: `reqBody` - The data for the new student timetable entry.
-   **Returns**: A promise that resolves to the newly created student timetable document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single student timetable entry that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the student timetable document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all student timetable entries that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of student timetable documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds a student timetable entry by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated student timetable document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes a student timetable entry that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" student timetable document.

## Exports

-   `studentTimeTableCoreServices`: The object containing the core services for student timetables.
