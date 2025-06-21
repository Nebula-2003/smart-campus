import studentTimeTableModel from "./studentTimeTable.model.js";

const studentTimeTableCoreServices = {
  add: async (reqBody) => {
    return await studentTimeTableModel(reqBody).save();
  },

  findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
    return await studentTimeTableModel.findOne(query).populate(populate).select(select).sort(sort).lean();
  },

  find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
    return await studentTimeTableModel.find(query).populate(populate).select(select).sort(sort).lean();
  },

  findOneAndUpdate: async (query, update, options = { new: true }) => {
    return await studentTimeTableModel.findOneAndUpdate(query, update, options).lean();
  },

  findOneAndDelete: async (query) => {
    return await studentTimeTableModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
  },
};

export { studentTimeTableCoreServices };
