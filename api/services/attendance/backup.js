// const client = createClient({
//   url,
// });
const closedClassroom = (RFIDCode, role, mode) => {
  return {
    code: "CLASSROOM_CLOSED",
    success: true,
    message: "Classroom is closed",
    data: {
      isClassroomOpen: false,
      RFIDCode,
      role,
      mode,
    },
  };
};

const errorCaseResponse = { isClassroomOpen: "", role: "" };

export const create = async (req, res) => {
  try {
    const now = new Date();
    const { RFIDCode, roomNumber, mode = "RFIDTags" } = req.body;
    if (!roomNumber)
      return res.status(400).json({ code: "DATA_INVALID_ERROR", success: false, message: "roomNumber is required", data: { ...errorCaseResponse, mode } });

    const userP = userCoreServices.findOne({ RFIDCode });
    const classroomP = classroomCoreServices.findOne({ roomNumber });

    const [user, classroom] = await Promise.all([userP, classroomP]);

    const timeTable = await timeTableCoreServices.findOne({ classroom: classroom._id, startTime: { $lte: now }, endTime: { $gte: now } });
    if (!timeTable) return res.status(200).json({ code: "NO_ENTRY", success: false, message: "timeTable not scheduled", data: { ...errorCaseResponse, mode } });

    console.log("🚀 ~ create ~ timeTable:", timeTable);
    let timeTableUpdate = null;
    if (user.role === "student") {
      if (!timeTable.teacherEntryTime) return res.status(200).json(closedClassroom(RFIDCode, user.role, mode));
      if (timeTable.teacherExitTime) return res.status(200).json(closedClassroom(RFIDCode, user.role, mode));
    } else if (user.role === "teacher") {
      const updateData = {};
      //exit case
      if (timeTable.teacherEntryTime && !timeTable.teacherExitTime) {
        updateData.$set = { teacherExitTime: now };
      } else if (timeTable.teacherExitTime) {
        //reentry case
        updateData.$set = { teacherEntryTime: now };
        updateData.$unset = { teacherExitTime: 1 };
      } else {
        //entry case
        updateData.$set = { teacherEntryTime: now };
      }

      timeTableUpdate = await timeTableCoreServices.findOneAndUpdate({ _id: timeTable._id }, updateData, { new: true });
      console.log("🚀 ~ create ~ timeTableUpdate:", timeTableUpdate);
    }

    const data = await attendanceCoreServices.add({
      timeOfAttendance: now,
      timeTable: timeTable._id,
      user: user._id,
      classroom: classroom._id,
      role: user.role,
    });
    if (!data)
      return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: errorCaseResponse });
    let responseData = {};

    if (user.role === "student") {
      responseData = {
        code: "ATTENDANCE_CREATE",
        success: true,
        data: {
          previousClassroomOpen: true,
          isClassroomOpen: true,
          RFIDCode,
          role: user.role,
          studentEntryTime: now,
          mode,
        },
      };
    } else if (user.role === "teacher") {
      if (timeTableUpdate.teacherExitTime) {
        responseData = {
          code: "CLASSROOM_CLOSED",
          success: true,
          data: {
            previousClassroomOpen: true,
            isClassroomOpen: false,
            RFIDCode,
            role: "faculty",
            teacherEntryTime: timeTableUpdate.teacherEntryTime,
            teacherExitTime: timeTableUpdate.teacherExitTime,
            mode,
          },
        };
      } else {
        responseData = {
          code: "CLASSROOM_OPENED",
          success: true,
          data: {
            previousClassroomOpen: true,
            isClassroomOpen: true,
            RFIDCode,
            role: "faculty",
            teacherEntryTime: timeTableUpdate.teacherEntryTime,
            mode,
          },
        };
      }
    }

    return res.status(200).json(responseData);
  } catch (error) {
    console.log("🚀 ~ create ~ error:", error);
    return res
      .status(500)
      .json({ code: "SERVER_ERROR", success: false, message: error.message, data: { ...errorCaseResponse, mode: req.body.mode || "RFIDTags" } });
  }
};
