import { Router } from "express";
import * as guard from "../../middleware/guards.js";
import * as controller from "./attendance.controller.js";

const router = Router();

router
    .post("/", controller.create)
    .get("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.get)
    .get("/", guard.isAuthorized(["student", "teacher", "admin"]), controller.list)
    .put("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.update)
    .delete("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.remove);

export default router;
