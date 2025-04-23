import ClassroomModel from "./classroom.model.js"; // Adjust path based on your model location

const classroomCoreServices = {
    add: async (reqBody) => {
        return await ClassroomModel(reqBody).save();
    },

    findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await ClassroomModel.findOne(query).populate(populate).select(select).sort(sort).lean();
    },

    find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await ClassroomModel.find(query).populate(populate).select(select).sort(sort).lean();
    },

    findOneAndUpdate: async (query, update, options = { new: true }) => {
        return await ClassroomModel.findOneAndUpdate(query, update, options).lean();
    },

    findOneAndDelete: async (query) => {
        return await ClassroomModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
    },
};

export { classroomCoreServices };
