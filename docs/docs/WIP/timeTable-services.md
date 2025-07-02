---
id: timeTable-services
title: Time Table Services
---

## Overview

This file provides core services for interacting with the `timeTables` collection, abstracting database logic.

## Dependencies

-   `./timeTable.model.js`: Mongoose model for `timeTables`.

## `timeTableCoreServices` Methods

-   **`add(reqBody)`**: Creates a new timetable entry.
-   **`findOne(query, populate, select, sort)`**: Finds a single timetable entry matching the query.
-   **`find(query, populate, select, sort)`**: Finds all timetable entries matching the query.
-   **`findOneAndUpdate(query, update, options)`**: Finds and updates a timetable entry.
-   **`findOneAndDelete(query)`**: Soft-deletes a timetable entry.

## Exports

-   `timeTableCoreServices`: Object containing all core service methods.
