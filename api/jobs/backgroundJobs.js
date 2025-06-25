import { Worker } from "bullmq";
import { bullMQConnectionObject } from "../constants.config.js";
import logger from "../helper/logger.js";
import { nfcReaderEntryCoreServices } from "../services/nfcReaderEntries/nfcReaderEntries.services.js";

const persistNfcReaderStreamWorker = new Worker(
    "persist_nfc_reader_stream",
    async (job) => {
        try {
            logger.info("🚀 [Worker] Received Job:", job.id, job.name);
            const result = await nfcReaderEntryCoreServices.add(job.data);
            logger.info("[Worker] Job completed:", job.id);
            return result;
        } catch (error) {
            logger.error("[Worker] Job failed:", job.id, error);
            throw error;
        }
    },
    {
        connection: bullMQConnectionObject,
    },
);

// Useful events to monitor the worker
persistNfcReaderStreamWorker.on("ready", () => {
    logger.info("Worker is ready and listening for jobs.");
});

persistNfcReaderStreamWorker.on("failed", (job, err) => {
    logger.error(`Job failed: ${job.id}`, err);
});

persistNfcReaderStreamWorker.on("completed", (job) => {
    logger.info(`Job completed: ${job.id}`);
});

const processNfcReaderStreamWorker = new Worker(
    "process_nfc_reader_stream",
    async (job) => {
        try {
            logger.info("🚀 [Worker] Received Job:", job.id, job.name);
            const result = await nfcReaderEntryCoreServices.add(job.data);
            logger.info("[Worker] Job completed:", job.id);
            return result;
        } catch (error) {
            logger.error("[Worker] Job failed:", job.id, error);
            throw error;
        }
    },
    {
        connection: bullMQConnectionObject,
    },
);

// Useful events to monitor the worker
processNfcReaderStreamWorker.on("ready", () => {
    logger.info("Worker is ready and listening for jobs.");
});

processNfcReaderStreamWorker.on("failed", (job, err) => {
    logger.error(`Job failed: ${job.id}`, err);
});

processNfcReaderStreamWorker.on("completed", (job) => {
    logger.info(`Job completed: ${job.id}`);
});
