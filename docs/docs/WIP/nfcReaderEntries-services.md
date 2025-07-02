---
id: nfcReaderEntries-services
title: NFC Reader Entries Services
---

## Overview

The `nfcReaderEntries.services.js` file provides a set of core services for interacting with the `nfcReaderEntries` collection in the database. These services abstract the database logic and provide a clean interface for the controller.

## Dependencies

-   `./nfcReaderEntries.model.js`: The Mongoose model for the `nfcReaderEntries` collection.

## `nfcReaderEntryCoreServices` Object

The `nfcReaderEntryCoreServices` object contains the following methods:

### `add(reqBody)`

-   **Description**: Creates a new NFC reader entry.
-   **Parameters**: `reqBody` - The data for the new NFC reader entry.
-   **Returns**: A promise that resolves to the newly created NFC reader entry document.

### `findOne(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds a single NFC reader entry that matches the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to the NFC reader entry document, or `null` if not found.

### `find(query, populate = "", select = "", sort = { createdAt: -1 })`

-   **Description**: Finds all NFC reader entries that match the given query.
-   **Parameters**:
    -   `query`: The query to match.
    -   `populate`: (Optional) A string of fields to populate.
    -   `select`: (Optional) A string of fields to select.
    -   `sort`: (Optional) The sort order.
-   **Returns**: A promise that resolves to an array of NFC reader entry documents.

### `findOneAndUpdate(query, update, options = { new: true })`

-   **Description**: Finds an NFC reader entry by a query and updates it.
-   **Parameters**:
    -   `query`: The query to find the document.
    -   `update`: The update to apply.
    -   `options`: (Optional) Mongoose findOneAndUpdate options.
-   **Returns**: A promise that resolves to the updated NFC reader entry document.

### `findOneAndDelete(query)`

-   **Description**: Soft-deletes an NFC reader entry that matches the given query.
-   **Parameters**: `query` - The query to find the document.
-   **Returns**: A promise that resolves to the "deleted" NFC reader entry document.

## Exports

-   `nfcReaderEntryCoreServices`: The object containing the core services for NFC reader entries.
