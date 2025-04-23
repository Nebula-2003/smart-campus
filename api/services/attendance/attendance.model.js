import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const attendanceSchema = new Schema(
    {
        timeOfAttendance: { type: Date, default: Date.now },
        lecture: { type: mongoose.Schema.Types.ObjectId, ref: "lecture", required: true },
        student: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        class: { type: mongoose.Schema.Types.ObjectId, ref: "classroom", required: true },
    },
    { timestamps: true, collection: "attendance" },
);

attendanceSchema.plugin(softDelete, { overrideMethods: "all" });
const Attendance = mongoose.model("attendance", attendanceSchema);

export default Attendance;
