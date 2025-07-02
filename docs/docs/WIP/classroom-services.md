---
id: classroom-services
title: Classroom Services
---

## Overview

The `classroom.services.js` file provides a set of core services for interacting with the `classrooms` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./classroom.model.js`: The Mongoose model for the `classrooms` collection.

## `classroomCoreServices` Object

The `classroomCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new classroom.
-   **Parameters**: `reqBody` - The data for the new classroom.
-   **Returns**: A promise that resolves to the newly created classroom document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single classroom that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the classroom document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all classrooms that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of classroom documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds a classroom by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated classroom document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes a classroom that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" classroom document.

## Exports

-   `classroomCoreServices`: The object containing the core services for classrooms.
