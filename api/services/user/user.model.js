import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
        gender: { type: String, required: true, enum: ["male", "female"] },
        dob: { type: Date, required: true },

        email: { type: String, required: true },
        password: { type: String, required: true },

        address: { type: String, required: true },
        contactNo: { type: String, required: true },
        parentContactNo: { type: String, required: true },

        semester: { type: Number, required: true, enum: ["1", "2", "3", "4", "5", "6", "7", "8"] },
        college: { type: String, required: true },
        stream: { type: String, required: true },
        branch: { type: String, required: true },

        // RFIDCode: { type: String, required: true },

        role: { type: String, required: true, enum: ["admin", "student", "teacher"] },
    },
    { timestamps: true, collection: "user" },
);

userSchema.plugin(softDelete, { overrideMethods: "all" });
const User = mongoose.model("user", userSchema);

export default User;
