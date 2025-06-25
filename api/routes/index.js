import { Router } from "express";
import assignmentsRoutes from "../services/assignments/assignments.routes.js";
import attendanceRoutes from "../services/attendance/attendance.routes.js";
import classroomRoutes from "../services/classroom/classroom.routes.js";
import nfcReadersEntriesRoutes from "../services/nfcReaderEntries/nfcReaderEntries.routes.js";
import subjectRoutes from "../services/subject/subject.routes.js";
import timeTableRoutes from "../services/timeTable/timeTable.routes.js";
import usersRoutes from "../services/user/user.routes.js";

const router = new Router();

router.get("/", (_req, res) => {
    res.status(200).send({ success: true, statusCode: 200, message: "Welcome to the smart-campus api !" });
});

router
    .use("/api/user", usersRoutes)
    .use("/api/attendance", attendanceRoutes)
    .use("/api/nfc-reader", nfcReadersEntriesRoutes)
    .use("/api/timeTable", timeTableRoutes)
    .use("/api/classroom", classroomRoutes)
    .use("/api/subject", subjectRoutes)
    .use("/api/assignments", assignmentsRoutes);

router.get("/ping", (_req, res) => {
    res.status(200).send({ success: true, statusCode: 200, message: "pong" });
});

router.use((_req, res) => {
    res.status(404).json({ status: 404, message: "NOT_FOUND" });
});

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    req.log.error(error);
    res.json({
        status: error.status || 500,
        message: error.message || "Internal Server Error",
    });
    next();
});

export default router;
