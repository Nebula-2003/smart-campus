---
id: utils
title: Utility Functions
---

## Overview

The `utils.js` file provides utility functions for password hashing and verification, and for creating JSON Web Tokens (JWTs). These functions are essential for user authentication and security.

## Dependencies

-   `node:crypto`: Provides cryptographic functionality, including `pbkdf2Sync` for key derivation, `randomBytes` for generating random data, and `timingSafeEqual` for comparing buffers in a way that is safe from timing attacks.
-   `jsonwebtoken`: A library for generating and verifying JSON Web Tokens.

## Constants

-   `iterations`: The number of iterations to use for the PBKDF2 key derivation function. Set to `100000`.
-   `keylen`: The length of the derived key in bytes. Set to `64`.
-   `digest`: The hash function to use. Set to `sha512`.

## `hashPassword(password)`

This asynchronous function takes a plain-text password and returns a hashed password string.

### Functionality

1.  **Generate Salt**: It generates a 16-byte random salt and converts it to a hexadecimal string.
2.  **Derive Key**: It uses `pbkdf2Sync` to derive a key from the password, salt, and other constants.
3.  **Format Hash**: It returns a string containing the number of iterations, the salt, and the derived key, separated by colons.

### Usage

```javascript
import { hashPassword } from "./utils.js";

const password = "mysecretpassword";
const hashedPassword = await hashPassword(password);
// Store hashedPassword in the database
```

## `matchPassword(password, storedHash)`

This asynchronous function compares a plain-text password with a stored hash to see if they match.

### Functionality

1.  **Parse Stored Hash**: It splits the stored hash into its components: iterations, salt, and the stored derived key.
2.  **Derive Key**: It derives a key from the provided password and the extracted salt and iterations.
3.  **Compare Keys**: It uses `timingSafeEqual` to compare the newly derived key with the stored derived key. This function is used to prevent timing attacks.

### Usage

```javascript
import { matchPassword } from "./utils.js";

const password = "mysecretpassword";
const storedHash = "100000:5f3...:a8b..."; // Retrieved from the database
const isMatch = await matchPassword(password, storedHash);
if (isMatch) {
    // Passwords match
} else {
    // Passwords do not match
}
```

## `mintJWT(user)`

This function creates a JSON Web Token (JWT) for a given user.

### Functionality

1.  **Create Payload**: It creates a payload containing the user's ID and role.
2.  **Sign Token**: It uses `jwt.sign()` to create a JWT. The token is signed with a secret from the `JWT_SECRET` environment variable and has an expiration time defined by the `EXPIRE_JWT_SECRET` environment variable (defaulting to `30d`).

### Usage

```javascript
import { mintJWT } from "./utils.js";

const user = { _id: "12345", role: "admin" };
const token = mintJWT(user);
// Send the token to the client
```

## Exports

-   `hashPassword`: The function for hashing passwords.
-   `matchPassword`: The function for verifying passwords.
-   `mintJWT`: The function for creating JWTs.
