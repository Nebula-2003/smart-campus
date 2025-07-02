---
id: studentTimeTable-model
title: Student Time Table Model
---

## Overview

The `studentTimeTable.model.js` file defines the Mongoose schema for the `studentTimeTable` collection in the MongoDB database. It specifies the structure and properties of a student timetable document.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `studentTimeTableSchema` has the following fields:

-   `student`: A reference to the `users` collection, representing the student associated with this timetable entry. This field is required.
-   `timeTable`: A reference to the `timeTables` collection, representing the specific timetable entry (e.g., a class session). This field is required.
-   `isMarkedPresent`: A boolean indicating whether the student has been marked present for this timetable entry. It defaults to `false`.

## Timestamps

The schema is configured with `timestamps: true`, which automatically adds `createdAt` and `updatedAt` fields to each document.

## Collection Name

The collection name is explicitly set to `studentTimeTable`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `studentTimeTable` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `studentTimeTable` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `studentTimeTable`: The Mongoose model for the `studentTimeTable` collection.
