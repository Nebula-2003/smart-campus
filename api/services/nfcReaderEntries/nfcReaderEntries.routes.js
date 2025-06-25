import { Router } from "express";
// import * as guard from "../../middleware/guards.js";
import * as controller from "./nfcReaderEntries.controller.js";

const router = Router();

router.post("/", controller.create)

export default router;
