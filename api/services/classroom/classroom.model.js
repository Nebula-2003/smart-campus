import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const classroomSchema = new Schema(
    {
        roomNumber: { type: Number, required: true },
        capacity: { type: Number, required: true },
        isLab: { type: Boolean, default: false },
    },
    { timestamps: true, collection: "classroom" },
);

classroomSchema.plugin(softDelete, { overrideMethods: "all" });

const Classroom = mongoose.model("classroom", classroomSchema);

export default Classroom;
