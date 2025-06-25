import { Worker } from "bullmq";
import { bullMQConnectionObject } from "../../constants.config.js";
import { nfcReaderEntryCoreServices } from "./nfcReaderEntries.services.js";


const queuePersistNfcReaderStreamWorker = new Worker(
    "queue_persist_nfc_reader_stream",
    async (job) => {
        try {
            console.log("🚀 [Worker] Received Job:", job.id, job.name);
            const result = await nfcReaderEntryCoreServices.add(job.data);
            console.log("✅ [Worker] Job completed:", job.id);
            return result;
        } catch (error) {
            console.error("❌ [Worker] Job failed:", job.id, error);
            throw error;
        }
    },
    {
        connection: bullMQConnectionObject,
    }
);

// Useful events to monitor the worker
queuePersistNfcReaderStreamWorker.on("ready", () => {
    console.log("🟢 Worker is ready and listening for jobs.");
});

queuePersistNfcReaderStreamWorker.on("failed", (job, err) => {
    console.error(`❌ Job failed: ${job.id}`, err);
});

queuePersistNfcReaderStreamWorker.on("completed", (job) => {
    console.log(`✅ Job completed: ${job.id}`);
});
