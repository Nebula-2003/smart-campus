---
id: subject-services
title: Subject Services
---

## Overview

The `subject.services.js` file provides a set of core services for interacting with the `subjects` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./subject.model.js`: The Mongoose model for the `subjects` collection.

## `subjectCoreServices` Object

The `subjectCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new subject.
-   **Parameters**: `reqBody` - The data for the new subject.
-   **Returns**: A promise that resolves to the newly created subject document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single subject that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the subject document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all subjects that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of subject documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds a subject by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated subject document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes a subject that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" subject document.

## Exports

-   `subjectCoreServices`: The object containing the core services for subjects.
