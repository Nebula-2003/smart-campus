import controller from "./city.controller.js";
import { Router } from "express";

const router = Router();

router
    /*
     *  Add
     */
    .post("/create", controller.create)
    /*
     *  Import
     */
    .post("/import-csv", controller.create)
    /*
     *  Get By Id
     */
    .get("/get/:id", controller.get)
    /*
     *  List All
     */
    .get("/list", controller.list)
    /*
     *  Update
     */
    .put("/update/:id", controller.update)
    /*
     *  Delete
     */
    .delete("/delete/:id", controller.delete);

export default router;
