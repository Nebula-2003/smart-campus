---
id: assignments-services
title: Assignments Services
---

## Overview

The `assignments.services.js` file provides a set of core services for interacting with the `assignments` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./assignments.model.js`: The Mongoose model for the `assignments` collection.

## `assignmentCoreServices` Object

The `assignmentCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new assignment.
-   **Parameters**: `reqBody` - The data for the new assignment.
-   **Returns**: A promise that resolves to the newly created assignment document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single assignment that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the assignment document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all assignments that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of assignment documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds an assignment by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated assignment document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes an assignment that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" assignment document.

## Exports

-   `assignmentCoreServices`: The object containing the core services for assignments.
