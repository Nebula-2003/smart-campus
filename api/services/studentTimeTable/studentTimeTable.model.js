import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const studentTimeTableSchema = new Schema(
    {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
        timeTable: { type: mongoose.Schema.Types.ObjectId, ref: "timeTables", required: true },
        isMarkedPresent: { type: Boolean, default: false },
    },
    { timestamps: true, collection: "studentTimeTable" },
);

studentTimeTableSchema.plugin(softDelete, { overrideMethods: "all" });

const studentTimeTable = mongoose.model("studentTimeTable", studentTimeTableSchema);

export default studentTimeTable;
