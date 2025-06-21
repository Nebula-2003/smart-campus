import scannerModel from "./scanner.model.js";

const scannerCoreServices = {
    add: async (reqBody) => {
        return await scannerModel(reqBody).save();
    },

    findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await scannerModel.findOne(query).populate(populate).select(select).sort(sort).lean();
    },

    find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await scannerModel.find(query).populate(populate).select(select).sort(sort).lean();
    },

    findOneAndUpdate: async (query, update, options = { new: true }) => {
        return await scannerModel.findOneAndUpdate(query, update, options).lean();
    },

    findOneAndDelete: async (query) => {
        return await scannerModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
    },
};

export { scannerCoreServices };
