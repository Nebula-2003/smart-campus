---
id: scanner-services
title: Scanner Services
---

## Overview

The `scanner.services.js` file provides a set of core services for interacting with the `scanners` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./scanner.model.js`: The Mongoose model for the `scanners` collection.

## `scannerCoreServices` Object

The `scannerCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new scanner.
-   **Parameters**: `reqBody` - The data for the new scanner.
-   **Returns**: A promise that resolves to the newly created scanner document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single scanner that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the scanner document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all scanners that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of scanner documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds a scanner by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated scanner document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes a scanner that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" scanner document.

## Exports

-   `scannerCoreServices`: The object containing the core services for scanners.
