import { Router } from "express";
import * as guard from "../../middleware/guards.js";
import * as controller from "./subject.controller.js";

const router = Router();

router
    .post("/", guard.isAuthorized(["admin", "teacher"]), controller.create)
    .get("/:id", guard.isAuthorized(["admin", "teacher", "student"]), controller.get)
    .get("/", guard.isAuthorized(["admin", "teacher", "student"]), controller.list)
    .put("/:id", guard.isAuthorized(["admin", "teacher"]), controller.update)
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove);

export default router;
