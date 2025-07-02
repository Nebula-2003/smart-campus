---
id: nfcReaderEntries-routes
title: NFC Reader Entries Routes
---

## Overview

The `nfcReaderEntries.routes.js` file defines the HTTP routes for the NFC reader entries service. It maps the routes to the corresponding controller functions.

## Dependencies

-   `express`: The web framework for Node.js.
-   `./nfcReaderEntries.controller.js`: The controller functions for NFC reader entries.

## Routes

-   **`POST /`**: Creates a new NFC reader entry. This route is not protected by any authorization middleware, as it is expected to be called directly by NFC reader devices.

## Exports

-   `router`: The Express router for the NFC reader entries service.
