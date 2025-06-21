import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const timeTableSchema = new Schema(
    {
        subject: { type: String, required: true },

        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },

        classroom: { type: mongoose.Schema.Types.ObjectId, ref: "classroom", required: true },
        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

        teacherEntryTime: { type: Date, required: true },
        teacherExitTime: { type: Date, required: true },
    },
    { timestamps: true, collection: "timeTable" },
);

timeTableSchema.plugin(softDelete, { overrideMethods: "all" });

const timeTable = mongoose.model("timeTable", timeTableSchema);

export default timeTable;
