import { commonResponse } from "../../helper/index.js";
import UsersModel from "./users.model.js";

export const is_exist = async (reqBody) => {
    return await UsersModel.findOne({ email: reqBody.email }).lean();
};

export const get = async (id) => {
    return await UsersModel.findOne({ _id: id }).lean();
};

export const save = async (reqBody) => {
    return await new UsersModel(reqBody).save();
};

export const update = async (id, reqBody) => {
    return await UsersModel.findOneAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
};

export const remove = async (id) => {
    return await UsersModel.removeOne({ _id: id }, { new: true }).lean();
};
