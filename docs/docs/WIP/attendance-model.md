---
id: attendance-model
title: Attendance Model
---

## Overview

The `attendance.model.js` file defines the Mongoose schema for the `attendance` collection in the MongoDB database. It specifies the structure and properties of an attendance document.

## Dependencies

-   `mongoose`: The ODM library for MongoDB.
-   `mongoose-delete`: A Mongoose plugin for soft-deleting documents.

## Schema Definition

The `attendanceSchema` has the following fields:

-   `user`: A reference to the `users` collection, representing the user who is the subject of the attendance record. This field is required.
-   `timeTable`: A reference to the `timeTables` collection, representing the timetable entry for which the attendance is being recorded. This field is required.
-   `timeOfAttendance`: A `Date` representing the time the attendance was recorded. It defaults to the current date and time.
-   `isLate`: A boolean indicating whether the user was late. It defaults to `false`.

## Collection Name

The collection name is explicitly set to `attendance`.

## Soft Deletes

The `mongoose-delete` plugin is used to enable soft deletes for the `Attendance` model. This means that when a document is "deleted," it is not actually removed from the database. Instead, a `deleted` field is set to `true`, and a `deletedAt` field is added with the timestamp of the deletion.

## Model

The `Attendance` model is created from the schema and exported for use in other parts of the application.

## Exports

-   `Attendance`: The Mongoose model for the `attendance` collection.
