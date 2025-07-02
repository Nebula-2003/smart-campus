---
id: subject-model
title: Subject Model
---

## Overview

The `subject.model.js` file defines the Mongoose schema for the `subjects` collection in the MongoDB database. It specifies the structure and properties of a subject document.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `subjectSchema` has the following fields:

-   `name`: A string representing the name of the subject. This field is required.
-   `code`: A string representing the code of the subject (e.g., "CS101"). This field is required.

## Timestamps

The schema is configured with `timestamps: true`, which automatically adds `createdAt` and `updatedAt` fields to each document.

## Collection Name

The collection name is explicitly set to `subjects`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `Subject` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `Subject` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `Subject`: The Mongoose model for the `subjects` collection.
