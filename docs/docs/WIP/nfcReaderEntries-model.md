---
id: nfcReaderEntries-model
title: NFC Reader Entry Model
---

## Overview

The `nfcReaderEntries.model.js` file defines the Mongoose schema for the `nfcReaderEntries` collection in the MongoDB database. It specifies the structure and properties of an NFC reader entry document.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `nfcReaderEntrySchema` has the following fields:

-   `entryTime`: A `Date` representing the time the NFC tag was read. It defaults to the current date and time.
-   `nfcTag`: A string representing the NFC tag ID. This field is required.
-   `scanner`: A string representing the ID of the scanner that read the NFC tag. This field is required and references the `scanner` collection.

## Indexes

-   An index is created on the `entryTime` field to optimize time-based queries.

## Collection Name

The collection name is explicitly set to `nfcReaderEntries`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `nfcReaderEntry` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `nfcReaderEntry` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `nfcReaderEntry`: The Mongoose model for the `nfcReaderEntries` collection.
