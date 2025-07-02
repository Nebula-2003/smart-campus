---
id: guards
title: Authorization Middleware
---

## Overview

The `guards.js` file provides middleware for authorizing requests based on JSON Web Tokens (JWTs) and user roles. It ensures that only authenticated and authorized users can access certain routes.

## Dependencies

-   `jsonwebtoken`: For verifying JWTs.
-   `../helper/logger.js`: The custom logger module.
-   `../services/user/user.services.js`: For fetching user data from the database.

## `SYSTEM_ROLES`

A constant array of the valid roles in the system: `admin`, `student`, and `teacher`.

## `verifyJWT(req)`

This function verifies the JWT from the request headers.

### Functionality

1.  It checks if the `authorization` header exists and is a string.
2.  It extracts the token from the header.
3.  It uses `jwt.verify()` to verify the token with the secret from the `JWT_SECRET` environment variable.
4.  If the token is valid, it attaches the decoded user information to the `req.user` object and returns `true`.
5.  If the token is invalid or missing, it returns `false`.

## `isAuthorized(allowedRoles)`

This is a middleware function that checks if a user is authorized to access a route.

### Parameters

-   `allowedRoles`: An array of roles that are allowed to access the route.

### Functionality

1.  **Verify JWT**: It calls `verifyJWT()` to check for a valid token. If the token is invalid, it sends a `401 Unauthorized` response.
2.  **Check User**: It fetches the user from the database using the ID from the JWT. If the user is not found, it sends a `401 Unauthorized` response.
3.  **Check System Role**: It checks if the user's role is one of the `SYSTEM_ROLES`. If not, it sends a `403 Forbidden` response.
4.  **Check Allowed Role**: It checks if the user's role is included in the `allowedRoles` array. If not, it sends a `403 Forbidden` response.
5.  **Call Next Middleware**: If all checks pass, it calls `next()` to pass control to the next middleware in the stack.

### Usage

```javascript
import { isAuthorized } from "./guards.js";

// This route can only be accessed by admins
router.get("/admin", isAuthorized(["admin"]), (req, res) => {
    res.send("Welcome, admin!");
});

// This route can be accessed by admins and teachers
router.get("/dashboard", isAuthorized(["admin", "teacher"]), (req, res) => {
    res.send("Welcome to the dashboard!");
});
```

## Exports

-   `isAuthorized`: The middleware function for authorization.
