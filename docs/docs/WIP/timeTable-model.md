---
id: timeTable-model
title: Time Table Model
---

## Overview

The `timeTable.model.js` file defines the Mongoose schema for the `timeTables` collection in the MongoDB database. It specifies the structure and properties of a timetable document, representing a scheduled class or event.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `timeTableSchema` has the following fields:

-   `subject`: A reference to the `subjects` collection, indicating the subject being taught. This field is required.
-   `startTime`: A `Date` representing the start time of the class/event. This field is required.
-   `endTime`: A `Date` representing the end time of the class/event. This field is required.
-   `classroom`: A reference to the `classrooms` collection, indicating where the class/event takes place. This field is required.
-   `teacher`: A reference to the `users` collection, indicating the teacher assigned to the class/event. This field is required.
-   `teacherEntryTime`: An optional `Date` field to record when the teacher entered the classroom.
-   `teacherExitTime`: An optional `Date` field to record when the teacher exited the classroom.

## Timestamps

The schema is configured with `timestamps: true`, which automatically adds `createdAt` and `updatedAt` fields to each document.

## Collection Name

The collection name is explicitly set to `timeTables`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `timeTable` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `timeTable` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `timeTable`: The Mongoose model for the `timeTables` collection.
