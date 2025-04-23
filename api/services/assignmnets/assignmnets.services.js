import AssignmnetsModel from './assignmnets.model.js';


class assignmnets{
    /**
    * add
    */
    static async add (reqBody) {
        return await AssignmnetsModel(reqBody).save();
    }

    /**
    * Get
    */
    static async get (id) {
        return await AssignmnetsModel.findOne({ _id: id }).sort({ created_at: -1 }).lean();
    }

    /**
    * List
    */
    static async list (query) {
        return await AssignmnetsModel.find(query).lean();
    }

    /**
    * update
    */
    static async update (id, reqBody) {
        return await AssignmnetsModel.findByIdAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
    }

    /**
    * Delete
    */
    static async delete (id) {
        return await AssignmnetsModel.findByIdAndDelete({ _id: id }).lean();
    }

}

export default assignmnets;