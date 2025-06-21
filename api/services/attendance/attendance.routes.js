import { Router } from "express";
import * as controller from "./attendance.controller.js";
import * as guard from "../../middleware/guards.js";

const router = Router();

router
  .post("/nfc-scanner", controller.nfcScanner)
  .get("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.get)
  .get("/", guard.isAuthorized(["student", "teacher", "admin"]), controller.list)
  .put("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.update)
  .delete("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.remove);

export default router;
