import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, required: false },
        lastName: { type: String, required: false },

        gender: { type: String, required: false, enum: ["male", "female"] },
        dob: { type: Date, required: false },

        email: { type: String, required: true },
        password: { type: String, required: true },

        address: { type: String, required: false },
        contactNo: { type: String, required: false },

        nfcTag: { type: String, required: false },
        role: { type: String, required: true, enum: ["admin", "student", "teacher"] },

        college: { type: String, required: false },
        courseName: { type: String, required: false },
        branch: { type: String, required: false },

        // Only for students
        parentContactNo: { type: String, required: false },
        semester: { type: Number, required: false, enum: [1, 2, 3, 4, 5, 6, 7, 8] },
    },
    { timestamps: true, collection: "users" },
);

userSchema.plugin(softDelete, { overrideMethods: "all" });
const User = mongoose.model("users", userSchema);

export default User;
