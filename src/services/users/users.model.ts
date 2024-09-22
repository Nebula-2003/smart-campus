import { Schema, model } from "mongoose";

import MongooseDelete from "mongoose-delete";
const usersSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        salt: String,
        role: {
            type: String,
            enum: ["Admin", "User"],
            default: "User",
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: "companies",
        },
        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
        },
        isLoggedIn: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true, collection: "users" }
);

usersSchema.plugin(MongooseDelete);

const Users = model("users", usersSchema);

export default Users;
