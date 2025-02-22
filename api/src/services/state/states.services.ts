import ProductsModel from "./states.model.js";

class states {
    /**
     * add
     */
    static async add(reqBody) {
        return await new ProductsModel(reqBody).save();
    }

    /**
     * Get
     */
    static async get(id) {
        return await ProductsModel.findOne({ _id: id }).lean();
    }

    /**
     * Get
     */
    static async getOne(query) {
        return await ProductsModel.findOne(query).lean();
    }

    /**
     * List
     */
    static async list(query) {
        return await ProductsModel.find(query).lean();
    }

    /**
     * update
     */
    static async update(id, reqBody) {
        return await ProductsModel.findByIdAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
    }

    /**
     * Delete
     */
    static async delete(id) {
        return await ProductsModel.findByIdAndDelete({ _id: id }).lean();
    }
}

export default states;
