---
id: user-model
title: User Model
---

## Overview

This file defines the Mongoose schema for the `users` collection, specifying user properties and roles.

## Dependencies

-   `mongoose`: ODM library for MongoDB.
-   `mongoose-delete`: Plugin for soft-deleting documents.

## Schema Definition

`userSchema` includes fields like `firstName`, `email`, `password`, `role` (enum: `admin`, `student`, `teacher`), and optional fields for personal and academic details. It also includes `timestamps` and supports `softDelete`.

## Exports

-   `User`: The Mongoose model for the `users` collection.
