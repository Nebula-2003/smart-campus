import { Router } from "express";
import * as controller from "./classroom.controller.js";
import * as guard from "../../helper/guards.js"; // Adjust based on where your guards are

const router = Router();

router
    .post("/", guard.isAuthorized(["admin", "teacher"]), controller.create) // Only admins and teachers can create
    .get("/:id", guard.isAuthorized(["student", "teacher", "admin"]), controller.get) // All users can fetch a classroom
    .get("/", guard.isAuthorized(["student", "teacher", "admin"]), controller.list) // List classrooms, accessible by all roles
    .put("/:id", guard.isAuthorized(["admin", "teacher"]), controller.update) // Only admins and teachers can update
    .delete("/:id", guard.isAuthorized(["admin"]), controller.remove); // Only admin can delete

export default router;
