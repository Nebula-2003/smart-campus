import { Worker } from "bullmq";

import { bullMQConnectionObject } from "../constants.config.js";
import logger from "../helper/logger.js";
import { classroomCoreServices } from "../services/classroom/classroom.services.js";
import { nfcReaderEntryCoreServices } from "../services/nfcReaderEntries/nfcReaderEntries.services.js";
import { scannerCoreServices } from "../services/scanner/scanner.services.js";
import { studentTimeTableCoreServices } from "../services/studentTimeTable/studentTimeTable.services.js";
import { timeTableCoreServices } from "../services/timeTable/timeTable.services.js";
import { userCoreServices } from "../services/user/user.services.js";

const persistNfcReaderStreamWorker = new Worker(
    "persist_nfc_reader_stream",
    async (job) => {
        try {
            logger.info(`[Worker:persist_nfc_reader_stream] Received Job: ${job.id}, ${job.name}`);
            const result = await nfcReaderEntryCoreServices.add({ scanner: job.data.scannerId, nfcTag: job.data.nfcTag });
            return result;
        } catch (error) {
            console.log("🚀 ~ error:", error);
            logger.error(`[Worker:persist_nfc_reader_stream] Job failed: ${job.id}`, error);
            throw error;
        }
    },
    {
        connection: bullMQConnectionObject,
    },
);

persistNfcReaderStreamWorker.on("ready", () => {
    logger.info("[Worker:persist_nfc_reader_stream] Worker is ready and listening for jobs.");
});

persistNfcReaderStreamWorker.on("failed", (job, err) => {
    logger.error(`[Worker:persist_nfc_reader_stream] Job failed: ${job.id}`, err);
});

persistNfcReaderStreamWorker.on("completed", (job) => {
    logger.info(`[Worker:persist_nfc_reader_stream] Job completed: ${job.id}`);
});

const processNfcReaderStreamWorker = new Worker(
    "process_nfc_reader_stream",
    async (job) => {
        try {
            logger.info(`[Worker:process_nfc_reader_stream] Received Job: ${job.id}, ${job.name}`);

            const { scannerId, nfcTag, entryTime } = job.data;

            if (!scannerId || !nfcTag || !entryTime) {
                logger.info("[Worker:process_nfc_reader_stream] INVALID JOB ENQUEUED");
                return;
            }

            const scannerP = scannerCoreServices.findOne({ _id: scannerId });
            const classroomP = classroomCoreServices.findOne({ scanner: scannerId });
            const studentP = userCoreServices.findOne({ nfcTag: nfcTag });

            const [scanner, classroom, student] = await Promise.all([scannerP, classroomP, studentP]);

            if (!scanner) {
                logger.info("[Worker:process_nfc_reader_stream] INVALID SCANNER ID");
                return;
            }

            const timetable = await timeTableCoreServices.findOne({
                classroom: classroom._id,
                startTime: { $lte: entryTime },
                endTime: { $gte: entryTime },
            });

            if (!timetable) {
                logger.info("[Worker:process_nfc_reader_stream] NO_CLASS_SCHEDULED");
                return;
            }

            const studentTimeTable = await studentTimeTableCoreServices.findOneAndUpdate(
                { student: student._id, timeTable: timetable._id },
                { $set: { isMarkedPresent: true } },
            );

            if (!studentTimeTable) {
                logger.info("[Worker:process_nfc_reader_stream] Student is not assigned this class");
                return;
            }

            logger.info(`[Worker:process_nfc_reader_stream] Job completed: ${job.id}`);
        } catch (error) {
            console.log("🚀 ~ error:", error);
            logger.error(`[Worker:process_nfc_reader_stream] Job failed: ${job.id}`, error);
            throw error;
        }
    },
    {
        connection: bullMQConnectionObject,
    },
);

processNfcReaderStreamWorker.on("ready", () => {
    logger.info("[Worker:process_nfc_reader_stream] Worker is ready and listening for jobs.");
});

processNfcReaderStreamWorker.on("failed", (job, err) => {
    logger.error(`[Worker:process_nfc_reader_stream] Job failed: ${job.id}`, err);
});

processNfcReaderStreamWorker.on("completed", (job) => {
    logger.info(`[Worker:process_nfc_reader_stream] Job completed: ${job.id}`);
});
