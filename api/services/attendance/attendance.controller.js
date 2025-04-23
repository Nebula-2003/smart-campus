import { userCoreServices } from "../user/user.services.js";
import { attendanceCoreServices } from "./attendance.services.js";
import { lectureCoreServices } from "../lecture/lecture.services.js";
import { classroomCoreServices } from "../classroom/classroom.services.js";

const closedClassroom = (RFIDCode, role) => {
    return {
        code: "CLASSROOM_CLOSED",
        success: true,
        message: "Classroom is closed",
        data: {
            isClassroomOpen: false,
            RFIDCode,
            role,
        },
    };
};

export const create = async (req, res) => {
    try {
        const now = new Date();
        const { RFIDCode, roomNumber } = req.body;
        if (!roomNumber) return res.status(400).json({ code: "DATA_INVALID_ERROR", success: false, message: "roomNumber is required", data: {} });

        const userP = userCoreServices.findOne({ RFIDCode });
        const classroomP = classroomCoreServices.findOne({ roomNumber });

        const [user, classroom] = await Promise.all([userP, classroomP]);

        const lecture = await lectureCoreServices.findOne({ classroom: classroom._id, startTime: { $lte: now }, endTime: { $gte: now } });
        if (!lecture) return res.status(200).json({ code: "NO_ENTRY", success: false, message: "Lecture not scheduled", data: {} });

        console.log("🚀 ~ create ~ lecture:", lecture);
        let lectureUpdate = null;
        if (user.role === "student") {
            if (!lecture.teacherEntryTime) return res.status(200).json(closedClassroom(RFIDCode, user.role));
            if (lecture.teacherExitTime) return res.status(200).json(closedClassroom(RFIDCode, user.role));
        } else if (user.role === "teacher") {
            const updateData = {};
            //exit case
            if (lecture.teacherEntryTime && !lecture.teacherExitTime) {
                updateData.$set = { teacherExitTime: now };
            } else if (lecture.teacherExitTime) {
                //reentry case
                updateData.$set = { teacherEntryTime: now };
                updateData.$unset = { teacherExitTime: 1 };
            } else {
                //entry case
                updateData.$set = { teacherEntryTime: now };
            }

            lectureUpdate = await lectureCoreServices.findOneAndUpdate({ _id: lecture._id }, updateData, { new: true });
            console.log("🚀 ~ create ~ lectureUpdate:", lectureUpdate);
        }

        const data = await attendanceCoreServices.add({
            timeOfAttendance: now,
            lecture: lecture._id,
            user: user._id,
            classroom: classroom._id,
            role: user.role,
        });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        let responseData = {};

        if (user.role === "student") {
            responseData = {
                code: "ATTENDANCE_CREATE",
                success: true,
                data: {
                    isClassroomOpen: true,
                    RFIDCode,
                    role: user.role,
                    studentEntryTime: now,
                },
            };
        } else if (user.role === "teacher") {
            if (lectureUpdate.teacherExitTime) {
                responseData = {
                    code: "CLASSROOM_CLOSED",
                    success: true,
                    data: {
                        isClassroomOpen: false,
                        RFIDCode,
                        role: user.role,
                        teacherEntryTime: lectureUpdate.teacherEntryTime,
                        teacherExitTime: lectureUpdate.teacherExitTime,
                    },
                };
            } else {
                responseData = {
                    code: "CLASSROOM_OPENED",
                    success: true,
                    data: {
                        isClassroomOpen: true,
                        RFIDCode,
                        role: user.role,
                        teacherEntryTime: lectureUpdate.teacherEntryTime,
                    },
                };
            }
        }

        return res.status(200).json(responseData);
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
