import { Router } from "express";
import * as guard from "../../middleware/guards.js";
import * as controller from "./user.controller.js";

const router = Router();

router
    .post("/", guard.isAuthorized(["admin", "teachers"]), controller.create)
    .post("/login", controller.login)
    .get("/:id", guard.isAuthorized(["admin"]), controller.get)
    .get("/", guard.isAuthorized(["admin"]), controller.list)
    .put("/:id", guard.isAuthorized(["admin"]), controller.update)
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove);

export default router;
