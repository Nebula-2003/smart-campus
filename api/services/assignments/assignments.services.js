import AssignmentModel from "./assignments.model.js";

const assignmentCoreServices = {
    add: async (reqBody) => {
        return await AssignmentModel(reqBody).save();
    },

    findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await AssignmentModel.findOne(query).populate(populate).select(select).sort(sort).lean();
    },

    find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await AssignmentModel.find(query).populate(populate).select(select).sort(sort).lean();
    },

    findOneAndUpdate: async (query, update, options = { new: true }) => {
        return await AssignmentModel.findOneAndUpdate(query, update, options).lean();
    },

    findOneAndDelete: async (query) => {
        return await AssignmentModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
    },
};

export { assignmentCoreServices };
