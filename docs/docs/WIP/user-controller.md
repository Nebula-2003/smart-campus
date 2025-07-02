---
id: user-controller
title: User Controller
---

## Overview

This file handles HTTP requests related to user management, including creation, login, retrieval, listing, updating, and deletion of user records.

## Dependencies

-   `../../helper/utils.js`: Provides `hashPassword`, `matchPassword`, and `mintJWT` for authentication.
-   `./user.services.js`: Core services for user data interaction.

## Controller Functions

-   **`create(req, res)`**: Creates a new user after hashing the password.
-   **`login(req, res)`**: Authenticates a user and returns a JWT upon successful login.
-   **`get(req, res)`**: Retrieves a single user by ID.
-   **`list(req, res)`**: Retrieves a list of all users.
-   **`update(req, res)`**: Updates an existing user by ID.
-   **`remove(req, res)`**: Deletes a user by ID.

## Exports

-   `create`, `login`, `get`, `list`, `update`, `remove`: All controller functions.
