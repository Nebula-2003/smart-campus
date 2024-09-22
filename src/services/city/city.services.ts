import { ObjectId } from "mongoose";
import CitiesModel from "./city.model.js";

class city {
    /**
     * add
     */
    static async add(reqBody: any) {
        return await new CitiesModel(reqBody).save();
    }

    /**
     * Get
     */
    static async get(id: string | ObjectId) {
        return await CitiesModel.findOne({ _id: id }).sort({ created_at: -1 }).lean();
    }

    static async getOne(query: any) {
        return await CitiesModel.findOne(query).lean();
    }

    /**
     * List
     */
    static async list(query: any) {
        return await CitiesModel.find(query).lean();
    }

    /**
     * update
     */
    static async update(id: string | ObjectId, reqBody: any) {
        return await CitiesModel.findByIdAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
    }

    /**
     * Delete
     */
    static async delete(id: string | ObjectId) {
        return await CitiesModel.findByIdAndDelete({ _id: id }).lean();
    }
}

export default city;
