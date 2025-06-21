import { timeTableCoreServices } from "./timeTable.services.js";

export const create = async (req, res) => {
    try {
        const data = await timeTableCoreServices.add(req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "timeTable_CREATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const get = async (req, res) => {
    try {
        const data = await timeTableCoreServices.findOne({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "timeTable_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const list = async (req, res) => {
    try {
        const data = await timeTableCoreServices.find({});
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "timeTable_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const update = async (req, res) => {
    try {
        const data = await timeTableCoreServices.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "timeTable_UPDATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const remove = async (req, res) => {
    try {
        const data = await timeTableCoreServices.findOneAndDelete({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "timeTable_DELETE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
