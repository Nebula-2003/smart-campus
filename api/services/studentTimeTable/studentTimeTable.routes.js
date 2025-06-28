import { Router } from "express";
import * as guard from "../../middleware/guards.js";
import * as controller from "./studentTimeTable.controller.js";

const router = Router();

router
    .post("/", guard.isAuthorized(["teacher", "admin"]), controller.create)

    .get("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.get)
    .get("/", guard.isAuthorized(["student", "teacher", "admin"]), controller.list)
    .get("/get-by-student/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.getByStudent)

    .put("/:id", guard.isAuthorized(["teacher", "admin"]), controller.update)
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove);

export default router;
