import { userCoreServices } from "../user/user.services.js";
import { attendanceCoreServices } from "./attendance.services.js";
import { lectureCoreServices } from "../lecture/lecture.services.js";

export const create = async (req, res) => {
    try {
        const now = new Date();
        const { studentRFIDCode, classroom: classroomId } = req.body;
        if (!studentRFIDCode || !classroomId)
            return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Student and class are required", data: {} });

        const student = await userCoreServices.findOne({ studentRFIDCode });
        const lecture = await lectureCoreServices.findOne({ classroom: classroomId, startTime: { $lte: now }, endTime: { $gte: now } });

        console.log("🚀 ~ create ~ lecture:", lecture);
        if (!student) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Student not found", data: {} });
        if (!lecture) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Lecture not found", data: {} });

        const data = await attendanceCoreServices.add({
            timeOfAttendance: now,
            lecture: lecture._id,
            student: student._id,
            classroom: classroomId,
        });

        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "ATTENDANCE_CREATE", success: true, data });
    } catch (error) {
        console.log("🚀 ~ create ~ error:", error);
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const get = async (req, res) => {
    try {
        const data = await attendanceCoreServices.findOne(req.params.id);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "ATTENDANCE_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const list = async (req, res) => {
    try {
        const data = await attendanceCoreServices.find({});
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "ATTENDANCE_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const update = async (req, res) => {
    try {
        const data = await attendanceCoreServices.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });

        return res.status(200).json({ code: "ATTENDANCE_UPDATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const remove = async (req, res) => {
    try {
        const data = await attendanceCoreServices.findOneAndDelete({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "ATTENDANCE_DELETE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
