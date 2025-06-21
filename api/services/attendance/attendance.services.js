import AttendanceModel from "./attendance.model.js";

const attendanceCoreServices = {
    add: async (reqBody) => {
        return await AttendanceModel(reqBody).save();
    },

    findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await AttendanceModel.findOne(query).populate(populate).select(select).sort(sort).lean();
    },

    find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
        return await AttendanceModel.find(query).populate(populate).select(select).sort(sort).lean();
    },

    findOneAndUpdate: async (query, update, options = { new: true }) => {
        return await AttendanceModel.findOneAndUpdate(query, update, options).lean();
    },

    findOneAndDelete: async (query) => {
        return await AttendanceModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
    },
};

export { attendanceCoreServices };
