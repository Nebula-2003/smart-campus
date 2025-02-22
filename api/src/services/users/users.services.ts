import UsersModel from "./users.model.js";

class users {
    /**
     * add
     */
    static async add(reqBody) {
        return await new UsersModel(reqBody).save();
    }

    /**
     * Get
     */
    static async get(id) {
        return await UsersModel.findOne({ _id: id }).sort({ created_at: -1 }).lean();
    }
    /**
     * Get
     */
    static async getOneByQuery(query) {
        return await UsersModel.findOne(query).sort({ created_at: -1 }).lean();
    }
    /**
     * List
     */
    static async list(query) {
        return await UsersModel.find(query).lean();
    }

    /**
     * update
     */
    static async update(id, reqBody) {
        return await UsersModel.findByIdAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
    }

    /**
     * Delete
     */
    static async delete(id) {
        return await UsersModel.findByIdAndDelete({ _id: id }).lean();
    }
}

export default users;
