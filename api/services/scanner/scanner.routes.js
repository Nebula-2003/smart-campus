import { Router } from "express";
import * as guard from "../../middleware/guards.js";
import * as controller from "./scanner.controller.js";

const router = Router();

router
    .post("/", guard.isAuthorized(["admin"]), controller.create)
    .get("/:id", guard.isAuthorized(["admin", "teacher"]), controller.get)
    .get("/", guard.isAuthorized(["admin", "teacher"]), controller.list)
    .put("/:id", guard.isAuthorized(["admin"]), controller.update)
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove);

export default router;
