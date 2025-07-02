---
id: background-jobs
title: Background Jobs
---

## Overview

The `backgroundJobs.js` file sets up and configures background workers using the `bullmq` library. These workers are responsible for processing jobs from message queues, allowing for asynchronous and reliable execution of tasks.

## Dependencies

-   `bullmq`: A robust and fast message queue for Node.js, built on top of Redis.
-   `../constants.config.js`: Provides the Redis connection object for BullMQ.
-   `../helper/logger.js`: The custom logger module.
-   Various service modules for interacting with the database.

## Workers

### `persistNfcReaderStreamWorker`

This worker is responsible for persisting NFC reader stream data to the database.

-   **Queue Name**: `persist_nfc_reader_stream`
-   **Functionality**: When a job is received, it calls the `nfcReaderEntryCoreServices.add()` function to save the NFC tag data to the database.
-   **Error Handling**: If an error occurs, it is logged, and the error is re-thrown to be handled by BullMQ.

### `processNfcReaderStreamWorker`

This worker is responsible for processing the NFC reader stream data to mark student attendance.

-   **Queue Name**: `process_nfc_reader_stream`
-   **Functionality**:
    1.  It receives a job containing the `scannerId`, `nfcTag`, and `entryTime`.
    2.  It validates the job data.
    3.  It fetches the scanner, classroom, and student information from the database.
    4.  It finds the relevant timetable entry based on the classroom and entry time.
    5.  It updates the student's timetable to mark them as present.
-   **Error Handling**: If an error occurs, it is logged, and the error is re-thrown.

## Worker Lifecycle Events

Both workers have event listeners for the following events:

-   `ready`: Logged when the worker is ready to process jobs.
-   `failed`: Logged when a job fails.
-   `completed`: Logged when a job is completed successfully.

## Usage

These workers are intended to be run as part of the application's background processing system. They connect to the Redis instance specified in the `bullMQConnectionObject` and start listening for jobs on their respective queues.
