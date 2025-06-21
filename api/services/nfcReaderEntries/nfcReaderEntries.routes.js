import { Router } from "express";
import * as controller from "./nfcReaderEntries.controller.js";
import * as guard from "../../middleware/guards.js";

const router = Router();

router.post("/", guard.isAuthorized(["scanner", "admin"]), controller.create).get("/", guard.isAuthorized(["admin", "teacher"]), controller.list);

export default router;
