import Service from "./users.services.js";
import { hashPassword, verifyPassword } from "../../helper/functions.js";
import { commonResponse } from "../../helper/index.js";
import { Request, Response, NextFunction } from "express";

class UsersController {
    /**
     * Add
     */
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await Service.getOneByQuery({ email: req.body.email });
            if (user) return commonResponse.customResponse(res, "EMAIL_ALREADY_EXISTS", 400, {}, "Email already exists");

            const { hash, salt } = await hashPassword(req.body.password);

            req.body.password = hash;
            req.body.salt = salt;

            const data = await Service.add(req.body);

            if (!data) return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            return commonResponse.success(res, "USERS_CREATE", 200, data, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    /**
     * Get
     */

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            let data = await Service.get(req.params.id);
            if (!data) {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
            return commonResponse.success(res, "USERS_GET", 200, data, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    /**
     * List
     */

    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            let query = {};
            let listAll = await Service.list(query);
            if (!listAll) {
                console.log("listAll: ", listAll);
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
            return commonResponse.success(res, "USERS_GET", 200, listAll, "Success");
        } catch (error: unknown) {
            console.log("🚀 ~ UsersController ~ list ~ error:", error);
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    /**
     * Update
     */

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            let update = await Service.update(req.params.id, req.body);
            if (!update) {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
            return commonResponse.success(res, "USERS_UPDATE", 200, update, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    /**
     * delete
     */

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            let deleteTerms = await Service.delete(req.params.id);
            if (!deleteTerms) {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
            return commonResponse.success(res, "USERS_DELETE", 200, deleteTerms, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        console.log("request body: ", req.body);
        try {
            const login = await Service.getOneByQuery({ email: req.body.email });
            if (!login) return commonResponse.customResponse(res, "INVALID_EMAIL", 400, {}, "User not found");
            if (!login.password || !login.salt) throw new Error("Internal server error");
            const isPasswordMatch = await verifyPassword(req.body.password, login.password, login.salt);
            if (!isPasswordMatch) return commonResponse.customResponse(res, "INVALID_PASSWORD", 400, {}, "Invalid password");
            return commonResponse.success(res, "USERS_LOGIN", 200, login, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            let logout = await Service.update(req.params.id, { isLoggedIn: false });
            if (!logout) return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            return commonResponse.success(res, "USERS_LOGOUT", 200, logout, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }
}

export default UsersController;
