import UserModel from "./user.model.js";

const userCoreServices = {
  add: async (reqBody) => {
    return await UserModel(reqBody).save();
  },

  findOne: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
    return await UserModel.findOne(query).populate(populate).select(select).sort(sort).lean();
  },

  find: async (query, populate = "", select = "", sort = { createdAt: -1 }) => {
    return await UserModel.find(query).populate(populate).select(select).sort(sort).lean();
  },

  findOneAndUpdate: async (query, update, options = { new: true }) => {
    return await UserModel.findOneAndUpdate(query, update, options).lean();
  },

  findOneAndDelete: async (query) => {
    return await UserModel.findOneAndUpdate(query, { $set: { deleted: true, deletedAt: new Date() } }).lean();
  },
};

export { userCoreServices };
