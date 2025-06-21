import { Router } from "express";
import * as controller from "./subject.controller.js";
import * as guard from "../../middleware/guards.js"; // Adjust path based on your project structure

const router = Router();

router
  .post("/", guard.isAuthorized(["admin", "teacher"]), controller.create) // Only admin and teacher can create subjects
  .get("/:id", guard.isAuthorized(["admin", "teacher", "student"]), controller.get) // Everyone can view subjects
  .get("/", guard.isAuthorized(["admin", "teacher", "student"]), controller.list) // Everyone can list subjects
  .put("/:id", guard.isAuthorized(["admin", "teacher"]), controller.update) // Only admin and teacher can update subjects
  .delete("/:id", guard.isAuthorized(["admin"]), controller.remove); // Only admin can delete subjects

export default router;
