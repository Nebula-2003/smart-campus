import { Router } from "express";

import usersRoutes from "../services/user/user.routes.js";
import attendanceRoutes from "../services/attendance/attendance.routes.js";
import lectureRoutes from "../services/lecture/lecture.routes.js";
import classroomRoutes from "../services/classroom/classroom.routes.js";
import subjectRoutes from "../services/subject/subject.routes.js";
import assignmentsRoutes from "../services/assignments/assignments.routes.js";

const router = new Router();

router.get("/", (req, res) => {
    res.status(200).send({ success: true, statusCode: 200, message: "Welcome to the smart-campus api !" });
});

router.use("/api/user", usersRoutes);
router.use("/api/attendance", attendanceRoutes);
router.use("/api/lecture", lectureRoutes);
router.use("/api/classroom", classroomRoutes);
router.use("/api/subject", subjectRoutes);
router.use("/api/assignments", assignmentsRoutes);

router.get("/ping", (req, res) => {
    res.status(200).send({ success: true, statusCode: 200, message: "pong" });
});

router.use((req, res) => {
    res.status(404).json({ status: 404, message: "NOT_FOUND" });
});

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.error(error);
    res.json({
        status: error.status || 500,
        message: error.message || "Internal Server Error",
    });
    next();
});

export default router;
