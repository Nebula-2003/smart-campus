import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const attendanceSchema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        timeTable: { type: mongoose.Schema.Types.ObjectId, ref: "timeTable", required: true },
        timeOfAttendance: { type: Date, default: Date.now },
        isLate: { type: Boolean, default: false },
    },
    { collection: "attendance" },
);

attendanceSchema.plugin(softDelete, { overrideMethods: "all" });
const Attendance = mongoose.model("attendance", attendanceSchema);

export default Attendance;
