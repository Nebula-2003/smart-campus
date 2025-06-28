import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const timeTableSchema = new Schema(
    {
        subject: { type: mongoose.Schema.Types.ObjectId, ref: "subjects", required: true },

        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },

        classroom: { type: mongoose.Schema.Types.ObjectId, ref: "classrooms", required: true },

        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },

        teacherEntryTime: { type: Date },
        teacherExitTime: { type: Date },
    },
    { timestamps: true, collection: "timeTables" },
);

timeTableSchema.plugin(softDelete, { overrideMethods: "all" });

const timeTable = mongoose.model("timeTables", timeTableSchema);

export default timeTable;
