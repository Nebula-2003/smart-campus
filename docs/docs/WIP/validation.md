---
id: validation
title: Validation Middleware
---

## Overview

The `validation.js` file provides a set of middleware functions for validating incoming request data using Zod schemas. It includes validators for the request body, query parameters, URL parameters, and headers.

## `validation` Object

The `validation` object contains four methods, each corresponding to a part of the HTTP request:

-   `body(schema)`
-   `query(schema)`
-   `params(schema)`
-   `headers(schema)`

Each of these methods is a higher-order function that takes a Zod schema as an argument and returns a middleware function.

### Parameters

-   `schema`: A Zod schema used to validate the request data.

### Middleware Functionality

1.  **Parse and Validate**: It uses the `safeParse()` method of the Zod schema to validate the corresponding part of the request (`req.body`, `req.query`, `req.params`, or `req.headers`).
2.  **Handle Validation Errors**: If the validation fails, it sends a `400 Bad Request` response with a JSON body containing:
    -   `status`: `false`
    -   `message`: The first validation error message.
    -   `data`: An object containing the validation errors, flattened for easy access.
3.  **Update Request Data**: If the validation is successful, it updates the corresponding part of the request with the parsed (and possibly transformed) data from the Zod schema.
4.  **Call Next Middleware**: It calls `next()` to pass control to the next middleware in the stack.

### Usage

```javascript
import { z } from "zod";
import { validation } from "./validation.js";

const createUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
});

// Validate the request body against the createUserSchema
router.post("/users", validation.body(createUserSchema), (req, res) => {
    // The request body is now validated and sanitized
    const newUser = req.body;
    // ...
});
```

## Exports

-   `validation`: The object containing the validation middleware functions.
