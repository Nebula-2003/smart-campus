import { Router } from "express";
import controller from "./users.controller.js";
import { guard } from '../../helper/index.js';
import { userImageUpload as multerSetting } from "../../helper/multer.js";

const router = Router();

router.post(
    "/register",
    multerSetting,
    controller.register
);

router.post(
    "/login",
    controller.login
);

router.post(
    "/resend-verification-link",
    controller.resendVerificationLink
);

router.post(
    "/verify-user",
    controller.verifyUser
);

router.post(
    "/forgot-password",
    controller.forgotPassword
);

router.post(
    "/reset-password",
    controller.resetPassword
);

router.put(
    "/update",
    multerSetting,
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.update
);

router.delete(
    "/delete/:id",
    guard.isAuthorized(['admin']),
    controller.delete
);

router.post(
    "/change-password",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.changePassword
);

router.get(
    "/get-profile",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.get
);

router.get(
    "/get/:id",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.getUserById
);

router.post(
    "/logout",
    guard.isAuthorized(['admin', 'organizer', 'player']),
    controller.logout
);

export default router;
