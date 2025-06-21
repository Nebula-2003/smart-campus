import nfcReaderEntryModel from "./nfcReaderEntries.model.js";

const nfcReaderEntryCoreServices = {
    add: async (reqBody) => {
        return await nfcReaderEntryModel(reqBody).save();
    },

    findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await nfcReaderEntryModel.findOne(query).populate(populate).select(select).sort(sort).lean();
    },

    find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await nfcReaderEntryModel.find(query).populate(populate).select(select).sort(sort).lean();
    },

    findOneAndUpdate: async (query, update, options = { new: true }) => {
        return await nfcReaderEntryModel.findOneAndUpdate(query, update, options).lean();
    },

    findOneAndDelete: async (query) => {
        return await nfcReaderEntryModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
    },
};

export { nfcReaderEntryCoreServices };
