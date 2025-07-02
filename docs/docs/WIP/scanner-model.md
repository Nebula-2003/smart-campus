---
id: scanner-model
title: Scanner Model
---

## Overview

The `scanner.model.js` file defines the Mongoose schema for the `scanners` collection in the MongoDB database. It specifies the structure and properties of a scanner document.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `scannerSchema` has the following fields:

-   `name`: A string representing the name of the scanner. This field is required.
-   `macAddress`: A string representing the MAC address of the scanner. This field is optional.
-   `isActive`: A boolean indicating whether the scanner is active. It defaults to `true`.

## Timestamps

The schema is configured with `timestamps: true`, which automatically adds `createdAt` and `updatedAt` fields to each document.

## Collection Name

The collection name is explicitly set to `scanners`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `scanner` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `scanner` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `scanner`: The Mongoose model for the `scanners` collection.
