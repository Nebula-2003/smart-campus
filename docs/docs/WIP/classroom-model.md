---
id: classroom-model
title: Classroom Model
---

## Overview

The `classroom.model.js` file defines the Mongoose schema for the `classrooms` collection in the MongoDB database. It specifies the structure and properties of a classroom document.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `classroomSchema` has the following fields:

-   `roomNumber`: A number representing the room number of the classroom. This field is required.
-   `capacity`: A number representing the capacity of the classroom. This field is required.
-   `isLab`: A boolean indicating whether the classroom is a lab. It defaults to `false`.
-   `scanner`: A reference to the `scanners` collection, representing the scanner associated with the classroom. This field is required.

## Timestamps

The schema is configured with `timestamps: true`, which automatically adds `createdAt` and `updatedAt` fields to each document.

## Collection Name

The collection name is explicitly set to `classrooms`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `Classroom` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `Classroom` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `Classroom`: The Mongoose model for the `classrooms` collection.
