import { studentTimeTableCoreServices } from "./studentTimeTable.services.js";

export const create = async (req, res) => {
    try {
        const data = await studentTimeTableCoreServices.add(req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "studentTimeTable_CREATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const get = async (req, res) => {
    try {
        const data = await studentTimeTableCoreServices.findOne({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "studentTimeTable_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const list = async (req, res) => {
    try {
        const data = await studentTimeTableCoreServices.find({});
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "studentTimeTable_LIST", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const getByStudent = async (req, res) => {
    try {
        const data = await studentTimeTableCoreServices.find(
            { student: req.params.id },
            {
                path: "timeTable",
                populate: [
                    { path: "subject", select: "name code" },
                    { path: "classroom", select: "roomNumber" },
                    { path: "teacher", select: "firstName middleName lastName" },
                ],
            },
        );
        console.log("🚀 ~ getByStudent ~ data:", data);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "studenttimeTable_LIST", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const update = async (req, res) => {
    try {
        const data = await studentTimeTableCoreServices.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "studentTimeTable_UPDATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const remove = async (req, res) => {
    try {
        const data = await studentTimeTableCoreServices.findOneAndDelete({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "studentTimeTable_DELETE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
