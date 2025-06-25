import { Queue } from "bullmq";
import { bullMQConnectionObject } from "../../constants.config.js";
import { nfcReaderEntryCoreServices } from "./nfcReaderEntries.services.js";

const queueProcessNfcReaderStream = new Queue("process_nfc_reader_stream", { connection: bullMQConnectionObject });
const queuePersistNfcReaderStream = new Queue("queue_persist_nfc_reader_stream", { connection: bullMQConnectionObject });

export const create = async (req, res) => {
    try {
// Before
// const [data] = await Promise.all([
//   queueProcessNfcReaderStream.add("tbd", req.body),
//   queuePersistNfcReaderStream.add("tbd", req.body)
// ]);
// if (!data) return res.status(400).json({
//   code: "SERVER_ERROR",
//   success: false,
//   message: "Something went wrong, please try again",
//   data: {}
// });

// After
const [processResult, persistResult] = await Promise.all([
  queueProcessNfcReaderStream.add("tbd", req.body),
  queuePersistNfcReaderStream.add("tbd", req.body),
]);

if (!processResult || !persistResult) {
  return res.status(400).json({
    code: "SERVER_ERROR",
    success: false,
    message: "Failed to enqueue job",
    data: {}
  });
}
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "ENTRY_CREATE", success: true, });
    } catch (error) {
        console.log("🚀 ~ create ~ error:", error);
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const get = async (req, res) => {
    try {
        const data = await nfcReaderEntryCoreServices.findOne({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "nfcReaderEntry_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
export const list = async (req, res) => {
    try {
        const query = {};
        if (req.query.userId) query.userId = req.query.userId;
        if (req.query.scheduleId) query.scheduleId = req.query.scheduleId;

        const data = await nfcReaderEntryCoreServices.find(query);
        return res.status(200).json({ code: "nfcReaderEntry_LIST", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const remove = async (req, res) => {
    try {
        const data = await nfcReaderEntryCoreServices.findOneAndDelete({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "nfcReaderEntry_DELETE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
