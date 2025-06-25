import { Queue } from "bullmq";
import { bullMQConnectionObject } from "../../constants.config.js";

const queueProcessNfcReaderStream = new Queue("process_nfc_reader_stream", { connection: bullMQConnectionObject });
const queuePersistNfcReaderStream = new Queue("persist_nfc_reader_stream", { connection: bullMQConnectionObject });

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
        return res.status(200).json({ code: "ENTRY_CREATE", success: true });
    } catch (error) {
        console.log("🚀 ~ create ~ error:", error);
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
