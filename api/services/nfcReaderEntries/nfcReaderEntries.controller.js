import { Queue } from "bullmq";
import { bullMQConnectionObject } from "../../constants.config.js";

const queueProcessNfcReaderStream = new Queue("process_nfc_reader_stream", { connection: bullMQConnectionObject });
const queuePersistNfcReaderStream = new Queue("persist_nfc_reader_stream", { connection: bullMQConnectionObject });

export const create = async (req, res) => {
    try {
        const now = new Date().toISOString();

        const [processResult, persistResult] = await Promise.all([
            queueProcessNfcReaderStream.add("process_nfc_reader_stream", { ...req.body, entryTime: now }),
            queuePersistNfcReaderStream.add("persist_nfc_reader_stream", { ...req.body, entryTime: now }),
        ]);

        if (!processResult || !persistResult) {
            return res.status(500).json({
                code: "SERVER_ERROR",
                success: false,
                message: "Failed to enqueue job",
                data: {},
            });
        }
        return res.status(200).json({ code: "ENTRY_CREATE", success: true });
    } catch (error) {
        console.log("🚀 ~ create ~ error:", error);
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
