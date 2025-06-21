import { nfcReaderEntryCoreServices } from "./nfcReaderEntries.services.js";

export const create = async (req, res) => {
    try {
        const data = await nfcReaderEntryCoreServices.add(req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "nfcReaderEntry_CREATE", success: true, data });
    } catch (error) {
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
