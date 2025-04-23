import usersRoutes from "../services/user/user.routes.js";
import attendanceRoutes from "../services/attendance/attendance.routes.js";
import lectureRoutes from "../services/lecture/lecture.routes.js";
import classroomRoutes from "../services/classroom/classroom.routes.js";
import subjectRoutes from "../services/subject/subject.routes.js";
import assignmentsRoutes from "../services/assignments/assignments.routes.js";

const initialize = (app) => {
    app.use("/api/user", usersRoutes);
    app.use("/api/attendance", attendanceRoutes);
    app.use("/api/lecture", lectureRoutes);
    app.use("/api/classroom", classroomRoutes);
    app.use("/api/subject", subjectRoutes);
    app.use("/api/assignments", assignmentsRoutes);
    app.get("/ping", (req, res) => {
        res.status(200).send({ success: true, statusCode: 200, message: "pong" });
    });
};

export { initialize };
