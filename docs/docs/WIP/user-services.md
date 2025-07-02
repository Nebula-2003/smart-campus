---
id: user-services
title: User Services
---

## Overview

This file provides core services for interacting with the `users` collection, abstracting database logic.

## Dependencies

-   `./user.model.js`: Mongoose model for `users`.

## `userCoreServices` Methods

-   **`add(reqBody)`**: Creates a new user.
-   **`findOne(query, populate, select, sort)`**: Finds a single user matching the query.
-   **`find(query, populate, select, sort)`**: Finds all users matching the query.
-   **`findOneAndUpdate(query, update, options)`**: Finds and updates a user.
-   **`findOneAndDelete(query)`**: Soft-deletes a user.

## Exports

-   `userCoreServices`: Object containing all core service methods.
