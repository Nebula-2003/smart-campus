import controller from"./assignmnets.controller"
import { Router } from "express";
import { guard } from "../../helper";

const router = Router();


router
    /*
    *  Add
    */
    .post("/create", controller.create)

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
