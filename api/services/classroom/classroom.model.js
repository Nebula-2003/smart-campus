import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const classroomSchema = new Schema(
    {
        roomNumber: { type: Number, required: true },
        capacity: { type: Number, required: true },
        isLab: { type: Boolean, default: false },
        scanner: { type: mongoose.Schema.Types.ObjectId, ref: "scanners", required: true },
    },
    { timestamps: true, collection: "classrooms" },
);

classroomSchema.plugin(softDelete, { overrideMethods: "all" });

const Classroom = mongoose.model("classrooms", classroomSchema);

export default Classroom;
