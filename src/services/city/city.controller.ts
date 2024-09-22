import Service from "./city.services.js";
import { commonResponse } from "../../helper/index.js";
import { Request, Response, NextFunction } from "express";

class city {
    /**
     * Add
     */
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const city = await Service.getOne({ name: new RegExp(req.body.name, "i"), country: req.body.country });
            if (city) return commonResponse.customResponse(res, "CITY_ALREADY_EXISTS", 400, {}, "City already exists");

            const data = await Service.add(req.body);
            if (!data) return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");

            return commonResponse.success(res, "CITIES_CREATE", 200, data, "Success");
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
                return commonResponse.success(res, "CITIES_GET", 200, data, "Success");
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
            if (req.query.country)
                Array.isArray(req.query.country) ? (query = { country: { $in: req.query.country } }) : (query = { country: req.query.country });
            if (req.query.state) Array.isArray(req.query.state) ? (query = { state: { $in: req.query.state } }) : (query = { state: req.query.state });

            if (req.query.search) Array.isArray(req.query.search) ? (query = { name: req.query.search[0] }) : (query = { name: req.query.search });

            let listAll = await Service.list(query);

            return commonResponse.success(res, "CITIES_GET", 200, listAll, "Success");
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
                return commonResponse.success(res, "CITIES_UPDATE", 200, update, "Success");
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
                return commonResponse.success(res, "CITIES_DELETE", 200, deleteTerms, "Success");
            } else {
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, "Something went wrong, Please try again");
            }
        } catch (error: unknown) {
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500, {}, "");
        }
    }
}

export default city;
