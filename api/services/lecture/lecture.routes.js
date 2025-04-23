import { Router } from "express";
import * as controller from "./lecture.controller.js";
import * as guard from "../../helper/guards.js";

const router = Router();

router
    .post("/", guard.isAuthorized(["teacher", "admin"]), controller.create)
    .get("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.get)
    .get("/", guard.isAuthorized(["student", "teacher", "admin"]), controller.list)
    .put("/:id", guard.isAuthorized(["teacher", "admin"]), controller.update)
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove);

export default router;
