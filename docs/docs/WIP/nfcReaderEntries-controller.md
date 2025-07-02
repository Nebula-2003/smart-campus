---
id: nfcReaderEntries-controller
title: NFC Reader Entries Controller
---

## Overview

The `nfcReaderEntries.controller.js` file handles the creation of new NFC reader entries. Instead of directly processing the data, it enqueues two background jobs using BullMQ: one to process the NFC reader stream and another to persist it.

## Dependencies

-   `bullmq`: A robust and fast message queue for Node.js, built on top of Redis.
-   `../../constants.config.js`: Provides the Redis connection object for BullMQ.

## Queues

Two BullMQ queues are initialized:

-   `queueProcessNfcReaderStream`: For processing NFC reader stream data (e.g., marking attendance).
-   `queuePersistNfcReaderStream`: For persisting raw NFC reader stream data to the database.

## Controller Functions

### `create(req, res)`

-   **Description**: Enqueues jobs to process and persist NFC reader entry data.
-   **Request Body**: Expected to contain `scannerId` and `nfcTag`.
-   **Functionality**:
    1.  Captures the current timestamp as `entryTime`.
    2.  Adds a job to `queueProcessNfcReaderStream` with `scannerId`, `nfcTag`, and `entryTime`.
    3.  Adds a job to `queuePersistNfcReaderStream` with `scannerId`, `nfcTag`, and `entryTime`.
    4.  Uses `Promise.all` to enqueue both jobs concurrently.
-   **Responses**:
    -   `200 OK`: If both jobs are successfully enqueued.
    -   `500 Internal Server Error`: If there's an issue enqueuing the jobs or any other unexpected error occurs.

## Usage

This controller is designed to be called when an NFC reader detects a tag. It offloads the actual processing and persistence to background jobs, ensuring that the API response is fast and the main thread is not blocked.

## Exports

-   `create`: The function to handle the creation of NFC reader entries.
