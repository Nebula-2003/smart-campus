import controller from "./users.controller.js";
import { Router } from "express";

const router = Router();

router
    .post("/create", controller.create)
    .get("/get/:id", controller.get)
    .get("/list", controller.list)
    .put("/update/:id", controller.update)
    .delete("/delete/:id", controller.delete)
    .post("/login", controller.login)
    .post("/logout/:id", controller.logout);

export default router;
