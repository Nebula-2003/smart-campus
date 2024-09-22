import Service from "./country.services.js";
import { commonResponse } from "../../helper/index.js";
import { Request, Response, NextFunction } from "express";

class country {
    /**
     * Add
     */
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            let alreadyExist = await Service.getOne({
                $or: [{ name: new RegExp(req.body.name, "i") }, { code: req.body.code.toUpperCase() }, { phoneCode: req.body.phoneCode }],
            });
            if (alreadyExist) return commonResponse.customResponse(res, "COUNTRIES_EXIST", 400, {}, "Country already exist");
            req.body.code = req.body.code.toUpperCase();
            const data = await Service.add(req.body);
            if (!data) {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
            return commonResponse.success(res, "COUNTRIES_CREATE", 200, data, "Success");
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
            if (data) {
                return commonResponse.success(res, "COUNTRIES_GET", 200, data, "Success");
            } else {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
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
            return commonResponse.success(res, "COUNTRIES_GET", 200, listAll, "Success");
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }

    /**
     * Update
     */

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            let update = await Service.update(req.params.id, req.body);
            if (update) {
                return commonResponse.success(res, "COUNTRIES_UPDATE", 200, update, "Success");
            } else {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
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
            if (deleteTerms) {
                return commonResponse.success(res, "COUNTRIES_DELETE", 200, deleteTerms, "Success");
            } else {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }
}

export default country;
