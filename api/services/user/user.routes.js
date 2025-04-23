import { Router } from "express";
import * as controller from "./user.controller.js";
import * as guard from "../../helper/guards.js";

const router = Router();

router
    .post("/", controller.create)
    .get("/:id", guard.isAuthorized(["admin"]), controller.get)
    .get("/", guard.isAuthorized(["admin"]), controller.list)
    .put("/:id", guard.isAuthorized(["admin"]), controller.update)
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove);

export default router;
